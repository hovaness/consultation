import { SafeAreaView, ScrollView, Text } from 'react-native';
import React from 'react';
import { main } from '../styles';
import { specialists } from '../data';
import Specialist from '../components/Specialist';

const SpecialistsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={main.title}>Специалисты</Text>
        {specialists ? specialists.map((spec) => <Specialist key={spec.name} specialist={spec}/> ) : (<Text>Нет специалостов</Text>)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialistsScreen;


