import { View, Text, Modal,  TextInput, Image, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import { ChatProp, InfoScreenRouteProp, MessageProp } from '../types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { main } from '../styles';
import React, { useState } from 'react';
import { getOneAnswer, storeAnswer } from '../utils/async-storage';
import { Button, WhiteSpace } from '@ant-design/react-native';

const InfoScreen = () => {
  const spec = useRoute<InfoScreenRouteProp>();
  const backNavigation = useNavigation();
  const [theme, setTheme] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  async function send() {
    const chat = await getOneAnswer(spec.params.name, theme);
    const newMessage = {
      type: 'request',
      text: text,
      createdAt: new Date().getHours().toString() + ' ' + new Date().getMinutes().toString(),
    } as MessageProp;
    if (chat === undefined){
      const newChat = {
        theme: theme,
        specialist: spec.params,
        history: [newMessage],
      } as ChatProp;
      storeAnswer(newChat);
      setTheme('');
      setText('');
    }
    else {
      Alert.alert('Такой чат уже создан!!!');
      setTheme('');
      setText('');
    }
    backNavigation.goBack();
    
  }

  return (
    <ScrollView style = {main.container}>
      {/* <Text onPress={() => backNavigation.goBack()}> ◀ </Text> */}
      <View style = {{flexDirection:'row', alignItems:'center', gap:20}}>
        <TouchableOpacity onPress={() => backNavigation.goBack()}>
          <Image width={20} height={20}  source={{uri:'https://pixy.org/src/476/4765130.png'}}/>
        </TouchableOpacity>
        <Text style={main.subtitle}>Специалист</Text>
      </View>

      {/* info */}
      <View style = {{marginVertical:20, alignItems:'center'}}>
        <Text style = {main.title}>{spec.params.name}</Text>
        <Image style = {{borderRadius:100, marginVertical:20}} width={150} height={150} source={{uri:spec.params.photo}}/>
        <Text style = {main .subtitleGray}>Опыт: {spec.params.exp} лет</Text>
      </View>
      
      <View style = {main.devider}></View>
      <Text style = {main.subtitle}>Образование</Text>
      <Text style = {main.subtitleGray}>{spec.params.education}</Text>
      <WhiteSpace size='xl'/>
      <Text style = {main .subtitle}>Обо мне</Text>
      <Text style = {main.subtitleGray}>{spec.params.desc}</Text>


      {/* send */}
      <Button type='primary' style = {{borderRadius:15, marginVertical:20}} onPress={() => setModalVisible(true)}>
        Задать вопрос
      </Button>
      {/* modal */}
      <Modal visible={modalVisible}>
        <View style={main.centeredView}>
          <View style={main.modalView}>
            <Text style={main.subtitle} onPress={() => setModalVisible(false)}>Закрыть</Text>
            <WhiteSpace size='xl'/>
            <Text style={main.subtitle}>Тема обращения</Text>
            <TextInput placeholder="Секс" value={theme} onChangeText={(e) => setTheme(e)} style={main.textInput} />
            <WhiteSpace size='xl'/>
            <Text style={main.subtitle}>Текст обращения</Text>
            <TextInput multiline placeholder="Пишите здесь..." value={text} onChangeText={(e) => setText(e)} style={main.textInput} />
            <WhiteSpace size='xl'/>
            <Button style = {{borderRadius:15}} type='primary' onPress={send}>Отправить</Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default InfoScreen;
