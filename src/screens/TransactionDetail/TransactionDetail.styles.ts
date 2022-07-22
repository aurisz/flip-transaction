import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  section: {
    padding: 20,
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
    marginTop: 3,
  },
  flex: {
    flex: 1,
  },
  column: {
    paddingVertical: 9,
    flexDirection: 'column',
  },
});
