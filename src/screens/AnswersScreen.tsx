import { Button, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { main } from '../styles';
import Specialist, { SpecialistWithTheme } from '../components/Specialist';
import { useNavigation } from '@react-navigation/native';
import { ChatProp, ChatScreenNavigationProp } from '../types';
import { clearStorage } from '../utils/async-storage';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';


const AnswersScreen = () => {
  const nav = useNavigation<ChatScreenNavigationProp>();
  const [answers, setAnswer] = useState<ChatProp[]>([]);
  const [loading, setLoading] = useState(false);
  const {getItem} = useAsyncStorage('answer');

  const readFromStorage = async() => {
    setLoading(true);
    const item = await getItem();
    if (item){
      setAnswer(JSON.parse(item));
    }
    setLoading(false);
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
      {loading && (<Text>Загрузка страницы</Text>)}
      {answers.length > 0 ? answers.map((answer) => (
        <ScrollView key={answer.theme}>
          <SpecialistWithTheme chat={answer}/>
        </ScrollView>
      )
      ) : <Text style={main.container}>Пока не было обращений</Text>}
      <Button title="Очистить" onPress={clear} />
    </ScrollView>
  );
};
export default AnswersScreen;


