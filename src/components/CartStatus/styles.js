import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  content: {
    backgroundColor: colors.orange,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.clear,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: colors.purple,
  },
  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});