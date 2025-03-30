// 📄 index.tsx 또는 App.tsx (React Native)
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('@/assets/images/clouds-background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
  //        source={require('./assets/airplane.png')} // 비행기 아이콘 이미지
          style={styles.icon}
        />
        <Text style={styles.title}>OK to Fly</Text>
        <Text style={styles.description}>
          기내 반입 금지 물품인지 사진으로 간편하게 확인하세요.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});
