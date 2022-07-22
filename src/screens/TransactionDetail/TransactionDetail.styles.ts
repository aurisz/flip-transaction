import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  section: {
    padding: 20,
  },
  alignCenter: {
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontWeight: '600',
  },
  closeButton: {
    color: 'orange',
    fontWeight: '600',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: 'grey',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  column: {
    paddingVertical: 9,
    flexDirection: 'column',
  },
  copyIcon: {
    color: 'orange',
    fontSize: 18,
    marginLeft: 6,
  },
});
