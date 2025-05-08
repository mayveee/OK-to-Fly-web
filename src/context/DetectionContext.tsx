// 분석 결과를 전역으로 관리하기 위한 tsx
import React, { createContext, useContext, useState } from 'react';
import type { DetectedItem } from '../types/types';

interface DetectionContextType {
    detectedItems: DetectedItem[];
    setDetectedItems: (items: DetectedItem[]) => void;
    uploadedimage: File | null;
    setUploadedimage: (file: File | null) => void;
}

const DetectionContext = createContext<DetectionContextType | null>(null);

export const DetectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [detectedItems, setDetectedItems] = useState<DetectedItem[]>([]);
    const [uploadedimage, setUploadedimage] = useState<File | null>(null);
    return (
        <DetectionContext.Provider value={{ detectedItems, setDetectedItems, uploadedimage, setUploadedimage }}>
            {children}
        </DetectionContext.Provider>
    );
};

export const useDetection = () => {
    const context = useContext(DetectionContext);
    if (!context) throw new Error('useDetection must be used within DetectionProvider');
    return context;
};
