import { View, Text, Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {  ChatScreenRouteProp, MessageProp } from '../types';
import { storeHistory } from '../utils/async-storage';
import { main, messageStyle } from '../styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const ChatScreen = () => {
  const chat = useRoute<ChatScreenRouteProp>();
  const [history, setHistory] = useState<MessageProp[]>([]);
  const [text, setText] = useState('');
  const backNavigation = useNavigation();
  const {setItem} = useAsyncStorage(`${chat.params.theme}:${chat.params.specialist.name}`);

  useEffect(() => {
    console.log(chat.params.history);
    setHistory([
      ...chat.params.history,
    ]);
  }, []);

  function addMessage(){
    const newMessage = {
      type:'request',
      text: text,
      createdAt: new Date().getHours().toString() + ' ' + new Date().getMinutes().toString(),
    } as MessageProp;
    setHistory([
      ...history, newMessage,
    ]);
    chat.params.history.push(newMessage);
    setText('');
    console.log(chat.params.history);
  }

  return (
    <ScrollView style={main.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => backNavigation.goBack()}>
            <Image style={{ marginRight: 10 }} width={20} height={20} source={{ uri: 'https://pixy.org/src/476/4765130.png' }} />
          </TouchableOpacity>
          <Text style={main.title}>{chat.params.specialist.name}</Text>
        </View>
        <Text style={main.subtitleGray}>Тема - {chat.params.theme}</Text>
      </View>
      {history.map((mes) => (
        <>
          <Text>{mes.type === 'request' ? 'Вы' : chat.params.specialist.name }</Text>
          <View style={mes.type === 'request' ? messageStyle.request : messageStyle.response}>
            <Text style={messageStyle.text}>{mes.text}</Text>
            <Text style={messageStyle.date}>{mes.createdAt}</Text>
          </View>
        </>
      ))}
      <View>
        <TextInput multiline placeholder="Пишите здесь..." value={text} onChangeText={(e) => setText(e)} style={main.textInput} />
        <Button onPress={addMessage} title="Спросить еще" />
      </View>

    </ScrollView>
  );
};

export default ChatScreen;
