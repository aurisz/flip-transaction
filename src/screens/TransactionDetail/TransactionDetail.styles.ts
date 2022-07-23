import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
  },
  section: {
    padding: theme.space.lg,
  },
  alignCenter: {
    alignItems: 'center',
  },
  header: {
    color: theme.color.black,
    fontWeight: '600',
  },
  text: {
    color: theme.color.black,
  },
  closeButton: {
    color: theme.color.orange,
    fontWeight: '600',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.space.lg,
    borderColor: theme.color.grey,
    borderTopWidth: theme.borderWidth.xs,
    borderBottomWidth: theme.borderWidth.xs,
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  detailContainer: {
    marginTop: theme.space.sm,
  },
  column: {
    paddingVertical: theme.space.sm,
    flexDirection: 'column',
  },
  copyIcon: {
    color: theme.color.orange,
    fontSize: theme.text.size.md,
    marginLeft: theme.space.sm,
  },
});
