import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderLeftWidth: 6,
    borderRadius: 6,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerSuccess: {
    borderLeftColor: '#22c55e',
  },
  containerPending: {
    borderLeftColor: 'orange',
  },
  bankInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  bankLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  rightArrow: {
    marginHorizontal: 3,
    color: '#000000',
  },
  additionalInfo: {
    flexDirection: 'row',
  },
  bullet: {
    marginHorizontal: 4,
    color: '#000000',
  },
  badgeContainer: {
    justifyContent: 'center',
  },
  badgeText: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontWeight: 'bold',
    borderRadius: 6,
  },
  badgeSuccess: {
    color: '#ffffff',
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  badgePending: {
    color: 'black',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'orange',
  },
});
