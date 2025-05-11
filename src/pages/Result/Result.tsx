import React, { useState } from 'react';
import './Result.css';
import { useResult } from '../../context/ResultContext';
import { useTranslation } from 'react-i18next';

export default function Result() {
  const { result } = useResult();
  const { detectedItems, imageUri } = result;
  const hasDangerousItems = detectedItems.length > 0;
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const parseDescription = (desc: string) => {
    const result: { tag: string; text: string }[] = [];
    const blocks = desc.split(/(?=\uADDC\uC815:|\uC608\uC678:|\uD2B9\uBCC4:)/g);

    for (const block of blocks) {
      const match = block.match(/^(\uADDC\uC815|\uC608\uC678|\uD2B9\uBCC4):(.+)/);
      if (match) {
        const [, tag, text] = match;
        result.push({ tag, text: text.trim() });
      }
    }

    return result;
  };

  return (
    <div className="result-scroll-container">
      <div className="result-container">
        <h2 className="result-header">{t('AI 분석 결과')}</h2>

        <div className="result-image-box">
          {imageUri ? (
            <img src={imageUri} alt={t('업로드 이미지')} className="result-image" />
          ) : (
            <p>{t('이미지를 불러올 수 없습니다')}</p>
          )}
        </div>

        <p className="result-section-title">{t('감지된 주의 물품')}</p>

        {hasDangerousItems ? (
          detectedItems.map((item, index) => (
            <div
              key={index}
              className="result-item-card"
              onClick={() => toggleExpand(index)}
            >
              <div className="result-item-header">
                <p className="result-item-name">{item.name}</p>
                <div className="result-rule-flags">
                  <p style={{ color: item.rule.allowed_in_cabin ? '#10b981' : '#ef4444' }}>
                    {item.rule.allowed_in_cabin ? t('✅ 기내 반입 가능') : t('❌ 기내 반입 금지')}
                  </p>
                  <p style={{ color: item.rule.allowed_in_checked ? '#10b981' : '#ef4444' }}>
                    {item.rule.allowed_in_checked ? t('✅ 위탁수하물 가능') : t('❌ 위탁수하물 금지')}
                  </p>
                </div>
              </div>

              {expandedIndex === index ? (
                <div className="result-description-box">
                  {parseDescription(item.description).map((entry, i) => (
                    <div key={i} style={{ marginBottom: 6 }}>
                      <p style={{ fontWeight: '600' }}>
                        {entry.tag === '규정' && t('📝 규정')}
                        {entry.tag === '예외' && t('⚠️ 예외')}
                        {entry.tag === '특별' && t('📌 특별')}
                      </p>
                      <p className="result-description">{entry.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="result-summary-wrapper">
                  <p className="result-summary">
                    {(() => {
                      const parsed = parseDescription(item.description);
                      const counts = { 규정: 0, 예외: 0, 특별: 0 };
                      parsed.forEach(p => counts[p.tag as keyof typeof counts]++);

                      const parts = [];
                      if (counts.규정 > 0) parts.push(t('관련 규정 {{count}}', { count: counts.규정 }));
                      if (counts.예외 > 0) parts.push(t('관련 예외 {{count}}', { count: counts.예외 }));
                      if (counts.특별 > 0) parts.push('관련 특별 {{count}}', { count: counts.특별 });
                      return parts.join(', ');
                    })()}
                  </p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: '#10b981', fontWeight: '500' }}>
            {t('반입 금지 물품이 없습니다 ✅')}
          </p>
        )}
      </div>
    </div>
  );
}
