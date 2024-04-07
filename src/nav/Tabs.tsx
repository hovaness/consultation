import SpecialistsScreen from '../screens/SpecialistsScreen';
import AnswersScreen from '../screens/AnswersScreen';
import { TabsParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarIcon: () => (<></>),
        }}>
            <Tab.Screen  name="Specialists" component={SpecialistsScreen}/>
            <Tab.Screen  name="Answers" component={AnswersScreen} />
        </Tab.Navigator>
    );
};

export default Tabs;
