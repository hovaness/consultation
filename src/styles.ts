import {StyleSheet} from 'react-native';

export const main = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    textAlign:'center',
  },
  subtitle: {
    marginHorizontal: 20,
    fontSize: 20,
    color: 'black',
  },
  subtitleGray: {
    marginHorizontal: 20,
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    backgroundColor: '#c1caca',
    borderRadius:15,
    width:300,
    textAlign:'center',
  },
  container: {
    margin: 20,
    color:'black',
  },
  devider: {
    borderTopColor:'black',
    borderStyle:'solid',
    borderWidth:1,
    marginVertical:20,
  }
});

export const specialistStyle = StyleSheet.create({
  container: {
    borderRadius:10,
    backgroundColor:'#AFDAFC',
    marginHorizontal:20,
    marginVertical:15,
  },
  avatar: {
    width: 65,
    height:65,
    borderRadius:100,
    marginRight:5,
  },
  strong: {
    color:'black',
    fontSize: 15,
  },
  content: {
    padding: 10,
    flexDirection:'row',
    alignItems:'center',
  },
});

export const messageStyle = StyleSheet.create({
  request: {
    backgroundColor: '#ff8833',
    borderRadius: 20,
    padding: 10,
    maxWidth: 240,
    marginBottom: 20,
  },
  response: {
    backgroundColor: '#1a162a',
    borderRadius: 20,
    padding: 10,
    maxWidth: 240,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  date: {
    color: 'black',
    textAlign: 'right',
  },
  write: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});



