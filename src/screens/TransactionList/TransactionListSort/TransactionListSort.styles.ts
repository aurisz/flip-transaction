import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.overlay,
    height: '100%',
    width: '100%',
  },
  modalView: {
    width: '90%',
    backgroundColor: theme.color.white,
    borderRadius: theme.radius.xs,
    padding: theme.space.md,
  },
  button: {
    padding: theme.space.sm,
    height: theme.space.xxl,
    backgroundColor: theme.color.white,
    color: theme.color.orange,
    justifyContent: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortLabel: {
    color: theme.color.orange,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sortIcon: {
    color: theme.color.orange,
    fontWeight: 'bold',
    fontSize: theme.text.size.base,
    paddingLeft: theme.space.xs,
  },
});
