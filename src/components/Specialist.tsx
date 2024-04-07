import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { InfoScreenNavigationProp, SpecialistProp } from '../types';
import { specialistStyle } from '../styles';
import { useNavigation } from '@react-navigation/native';


const Specialist = ({specialist} : {specialist:SpecialistProp}) => {
    const navigation = useNavigation<InfoScreenNavigationProp>();
    return (
        <View style={specialistStyle.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Info', specialist)} style={specialistStyle.content}>
                <Image
                    style={specialistStyle.avatar}
                    source={{
                        uri:specialist.photo,
                    }}
                />
                <View>
                    <Text style={specialistStyle.strong}>{specialist.name}</Text>
                    <Text>Опыт {specialist.exp} лет</Text>
                    <Text>Образование {specialist.education}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Specialist;
