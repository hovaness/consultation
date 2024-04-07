import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ChatProp, ChatScreenNavigationProp, InfoScreenNavigationProp, SpecialistProp } from '../types';
import { main, specialistStyle } from '../styles';
import { useNavigation } from '@react-navigation/native';


const Specialist = ({ specialist }: { specialist: SpecialistProp }) => {
    const navigation = useNavigation<InfoScreenNavigationProp>();
    return (
        <View style={specialistStyle.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Info', specialist)} style={specialistStyle.content}>
                <Image
                    style={specialistStyle.avatar}
                    source={{
                        uri: specialist.photo,
                    }}
                />
                <View>
                    <Text style={specialistStyle.strong}>{specialist.name}</Text>
                    <Text>Опыт {specialist.exp} лет</Text>
                    <Text style = {{width:300}}>Образование {specialist.education}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export const SpecialistWithTheme = ({ chat }: { chat: ChatProp }) => {
    const navigation = useNavigation<ChatScreenNavigationProp>();
    return (
        <>
            <View style={specialistStyle.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Chat', chat)} style={specialistStyle.content}>
                    <Image
                        style={specialistStyle.avatar}
                        source={{
                            uri: chat.specialist.photo,
                        }}
                    />
                    <View style = {{width:200}}>
                        <Text style={specialistStyle.strong}>{chat.specialist.name}</Text>
                        <Text>Тема - {chat.theme}</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Specialist;
