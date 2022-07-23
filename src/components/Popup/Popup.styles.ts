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
});
