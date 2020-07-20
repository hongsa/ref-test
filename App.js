/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: 380,
    maxHeight: 80,
    borderWidth: 1,
    borderColor: '#353535',
    borderRadius: 4,
    padding: 14,
    fontSize: 17,
    color: '#353535',
  },
});

const App = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handlePressCrawling = () => {
    // id, password 파라미터 전달해서
    // e-spider 함수 호출
  };

  return (
    <>
      <SafeAreaView style={{alignItems: 'center'}}>
        <View style={{padding: 30}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>크롤링 테스트</Text>
          <TextInput
            style={[styles.input, {marginVertical: 15}]}
            value={id}
            onChangeText={(val) => setId(val)}
            placeholder="아이디를 입력하세요"
            clearButtonMode="always"
            numberOfLines={1}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder="비밀번호를 입력하세요"
            clearButtonMode="always"
            numberOfLines={1}
          />

          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#3A436E',
              padding: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handlePressCrawling}>
            <Text style={{color: '#fff', fontSize: 20}}>확인</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
