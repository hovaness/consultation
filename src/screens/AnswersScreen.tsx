import { Button, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { main } from '../styles';
import Specialist from '../components/Specialist';
import { useNavigation } from '@react-navigation/native';
import { ChatProp, ChatScreenNavigationProp } from '../types';
import { clearStorage } from '../utils/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


const AnswersScreen = () => {
  const nav = useNavigation<ChatScreenNavigationProp>();
  const [answers, setAnswer] = useState<ChatProp[]>([]);
  const {getItem} = useAsyncStorage('answer');

  const readFromStorage = async() => {
    const item = await getItem();
    if (item){
      setAnswer(JSON.parse(item));
    }
  };

  useEffect(() => {
    readFromStorage();
  },[]);

  function clear() {
    clearStorage();
    setAnswer([]);
  }
  return (
    <ScrollView>
      <Text style={main.title}>Ответы</Text>
      {answers.length > 0 ? answers.map((answer) => (
        <ScrollView key={answer.theme}>
          <Text style={main.subtitle} onPress={() => nav.navigate('Chat', answer)}>Тема - {answer.theme}</Text>
          <Specialist specialist={answer.specialist} />
        </ScrollView>
      )
      ) : <Text style={main.container}>Пока не было обращений</Text>}
      <Button title="Очистить" onPress={clear} />
    </ScrollView>
  );
};
export default AnswersScreen;


