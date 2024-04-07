import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//models
export type SpecialistProp = {
  name: string;
  exp: number;
  education: string;
  photo?: string;
  desc?:string
};

export type MessageProp = {
  type:string;
  text:string;
  createdAt:string;
}

export type ChatProp = {
  specialist: SpecialistProp;
  theme: string;
  history: MessageProp[];
}

//nav types
export type TabsParamList = {
  Specialists: undefined,
  Answers: undefined,
}

export type RootParamList = {
  Root: NavigatorScreenParams<TabsParamList>,
  Info: SpecialistProp,
  Chat: ChatProp,
}

export type RootScreenNavigationProp =
  NativeStackNavigationProp<RootParamList>

export type InfoScreenNavigationProp =
  NativeStackNavigationProp<RootParamList, 'Info'>

export type InfoScreenRouteProp =
  RouteProp<RootParamList, 'Info'>

export type ChatScreenNavigationProp =
  NativeStackNavigationProp<RootParamList, 'Chat'>

export type ChatScreenRouteProp =
  RouteProp<RootParamList,'Chat'>

