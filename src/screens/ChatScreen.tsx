import { View, Text,  TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {  ChatScreenRouteProp, MessageProp } from '../types';
import { main, messageStyle } from '../styles';
import { Button } from '@ant-design/react-native';
import  Icon  from 'react-native-vector-icons/AntDesign';

const ChatScreen = () => {
  const chat = useRoute<ChatScreenRouteProp>();
  const [history, setHistory] = useState<MessageProp[]>([]);
  const [text, setText] = useState('');
  const backNavigation = useNavigation();

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

      <View style = {messageStyle.write}>
        <TextInput multiline placeholder="Текст сообщения" value={text} onChangeText={(e) => setText(e)} style={main.textInput} />
        <Button style = {{borderColor:'black'}} type='ghost' onPress={addMessage}>
          <Icon name="caretright" size={24} color="black"/>
          {/* <Image width={24} height={24} source={{uri:'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_send-1024.png'}}/> */}
        </Button>
      </View>

    </ScrollView>
  );
};

export default ChatScreen;
