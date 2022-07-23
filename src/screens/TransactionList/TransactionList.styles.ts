import { StyleSheet } from 'react-native';

import theme from '@theme/index';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    marginTop: theme.space.xl,
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    marginVertical: theme.space.xs,
  },
  errorText: {
    fontSize: theme.text.size.base,
    marginBottom: theme.space.md,
  },
});
