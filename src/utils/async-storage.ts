import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatProp, MessageProp } from '../types';


export const storeAnswer = async (value: ChatProp) => {
    try {
        const arr = await getAnswers();
        console.log(`${value.theme} is stored`);
        if (arr === undefined){
            const initArr = [value];
            const jsonValue = JSON.stringify(initArr);
            await AsyncStorage.setItem('answer', jsonValue);
        }
        else {
            arr.push(value);
            const jsonValue = JSON.stringify(arr);
            await AsyncStorage.setItem('answer', jsonValue);
        }
    } catch (e) {
        console.log(e);
    }
};

export const initHistory = async (value: MessageProp, theme :string, name :string) => {
    try {
        const arr: string | null = await AsyncStorage.getItem(`${theme}:${name}`);
        if (arr !== null){
            JSON.parse(arr);
            arr.push(value);
            await AsyncStorage.setItem(`${theme}:${name}`, JSON.stringify(arr));
        }
        else {
        }
    } catch (error) {
        
    }
}

export async function  getAnswers (){
    try {
        const value = await AsyncStorage.getItem('answer');
        if (value !== null) {
            const chats: ChatProp[] = JSON.parse(value);
            return chats;
        } else {return undefined;}
    } catch (e) {
        console.log(e);
    }
};

export const getOneAnswer = async (name: string, theme: string): Promise<ChatProp | undefined> => {
    try {
        const value = await AsyncStorage.getItem('answer');
        if (value !== null) {
            const chats: ChatProp[] = JSON.parse(value);
            const requeredChat = chats.find((chat) => chat.theme === theme && chat.specialist.name === name);
            return requeredChat;
        }
    } catch (e) {
        console.log(e);
    }
};

export const storeHistory = async (value: MessageProp, theme :string, name :string) => {
    try {
        const chat = await getOneAnswer(name,theme);
        if (chat === undefined){
            console.log('çhat not exist');
            return;
        }
        chat.history.push(value);
        await storeAnswer(chat);
    } catch (e) {
        console.log(e);
    }
};




export const clearStorage = async() => {
    await AsyncStorage.clear();
};
