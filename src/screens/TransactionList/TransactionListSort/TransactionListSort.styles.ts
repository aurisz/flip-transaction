import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: '100%',
  },
  modalView: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 20,
  },
  button: {
    padding: 10,
    height: 50,
    backgroundColor: '#ffffff',
    color: 'orange',
    justifyContent: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sortIcon: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 10,
    paddingLeft: 3,
  },
});
