//  app/tabs/upload.tsx

import React, { useState } from 'react';
import { View, Button, Image, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function UploadScreen() {
    const [base64Data, setBase64Data] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);

    const [labels, setLabels] = useState<string[]>([]);
    const [objectNames, setObjectNames] = useState<string[]>([]);
    const [forbiddenItems1, setForbiddenItems1] = useState<string[]>([]);
    const [cautionItems1, setCautionItems1] = useState<string[]>([]);
    const [forbiddenItems2, setForbiddenItems2] = useState<string[]>([]);
    const [cautionItems2, setCautionItems2] = useState<string[]>([]);
    const [message1, setMessage1] = useState<string>('');
    const [message2, setMessage2] = useState<string>('');
    
    // 이미지 선택 기능
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        quality: 0.5,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            setBase64Data(result.assets[0].base64!);
            setLabels([]);
        }
    };

    // 사진 촬영 기능
    const takePhoto = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
            alert('카메라 접근 권한이 필요합니다!');
            return;
        }
    
        const result = await ImagePicker.launchCameraAsync({
            base64: true,
            quality: 0.5,
        });
    
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            setBase64Data(result.assets[0].base64!);
            setLabels([]);
        }
    };
  
    // 이미지 서버로 보내기
    const analyzeImage = async () => {
        if (!base64Data) return;
        setLoading(true);
        try {
            const res = await axios.post('https://ok-to-fly-server.onrender.com/test-vision', {
            image: base64Data,
            });
            const {
                labels,
                objectNames,
                forbiddenItems1,
                cautionItems1,
                forbiddenItems2,
                cautionItems2,
                message1,
                message2,
            } = res.data;
            setLabels(res.data.labels);
            setObjectNames(res.data.objectNames);
            setForbiddenItems1(forbiddenItems1);
            setCautionItems1(cautionItems1);
            setForbiddenItems2(forbiddenItems2);
            setCautionItems2(cautionItems2);
            setMessage1(message1);
            setMessage2(message2);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="이미지 선택하기" onPress={pickImage} />
            <Button title="사진 촬영하기" onPress={takePhoto} />

            {imageUri && (
                <>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <Button title="분석 요청하기" onPress={analyzeImage} />
                </>
            )}
        
            {loading && <ActivityIndicator style={{ marginTop: 20 }} />}
            {labels.length > 0 && (
                <View style={styles.results}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>🔹 Label 기반 분석 결과 (1)</Text>

                    <Text>
                        ❌ 금지 물품:{' '}
                        {forbiddenItems1.length > 0 ? forbiddenItems1.join(', ') : '없음'}
                    </Text>

                    <Text>
                        ⚠️ 주의 물품:{' '}
                        {cautionItems1.length > 0 ? cautionItems1.join(', ') : '없음'}
                    </Text>

                    <Text style={{ marginTop: 4 }}>{message1}</Text>

                    <View style={{ height: 20 }} />

                    {/* 🔸 Object 기반 결과 */}
                    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>🔸 Object 기반 분석 결과 (2)</Text>

                    <Text>
                        ❌ 금지 물품:{' '}
                        {forbiddenItems2.length > 0 ? forbiddenItems2.join(', ') : '없음'}
                    </Text>

                    <Text>
                        ⚠️ 주의 물품:{' '}
                        {cautionItems2.length > 0 ? cautionItems2.join(', ') : '없음'}
                    </Text>

                    <Text style={{ marginTop: 4 }}>{message2}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
    image: { width: 200, height: 200, marginVertical: 20 },
    results: { marginTop: 20, alignItems: 'center' },
});
