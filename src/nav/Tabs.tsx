/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import SpecialistsScreen from '../screens/SpecialistsScreen';
import AnswersScreen from '../screens/AnswersScreen';
import { TabsParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';



const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image width={30} height={30} source={{uri:'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5e227329363657.55ef8df90a1ca.png'}}/>
                )
            }} name="Specialists" component={SpecialistsScreen}/>
            <Tab.Screen options={{
                tabBarIcon: () => (
                    <Image width={30} height={30} source={{uri:'https://sun9-42.userapi.com/impg/Eqm6EXRtyOeabkc4yxMUqaTvRPABqFoPaoIMMA/nK3EhkvF23s.jpg?size=1172x1164&quality=96&sign=2afb2bcc1b4384e756dc74673551201e&c_uniq_tag=yZcTkOO2AAewKdEd9HIIh34ddwjtNO_x966EQcYYJNk&type=album'}}/>
                ),
            }}  name="Answers" component={AnswersScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
