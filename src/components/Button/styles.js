import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default (small, invert) => StyleSheet.create({
  button: {
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invert ? colors.orange : colors.purple,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invert ? colors.purple : colors.orange,
  }
});