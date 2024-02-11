import React, { useState } from 'react';
import { View, Text } from 'react-native';
import WholeField from '../../../components/WholeField';
import Button from '../../../components/Button';
import styles from './styles';

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);

  return <>
    <View style={styles.information}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <View style={styles.cart}>
      <View>
        <View style={styles.amount}>
          <Text style={styles.description}>Quantidade:</Text>
          <WholeField styles={styles.quantity} amount={quantity} action={setQuantity} />
        </View>
        <View style={styles.amount}>
          <Text style={styles.description}>Preço:</Text>
          <Text style={styles.price}>0</Text>
        </View>
      </View>
      <Button amount="Adicionar" action={() => { }} />
    </View>
    <View style={styles.divisor} />
  </>
}