import React, { useState } from 'react';
import { View, Text } from 'react-native';
import WholeField from '../../../components/WholeField';
import Button from '../../../components/Button';
import styles from './styles';

export default function Item({ name, price, description, quantity: initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState(price * initialQuantity);

  const updateTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calculateTotal(newQuantity)
  }

  const calculateTotal = (newQuantity) => {
    setTotal(newQuantity * price);
  }

  return <>
    <View style={styles.information} >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{
        Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(price)
      }</Text>
    </View>
    <View style={styles.cart}>
      <View>
        <View style={styles.amount}>
          <Text style={styles.description}>Quantidade:</Text>
          <WholeField styles={styles.quantity} amount={quantity} action={updateTotalQuantity} />
        </View>
        <View style={styles.amount}>
          <Text style={styles.description}>Total:</Text>
          <Text style={styles.price}>{
            Intl.NumberFormat('pt-BR', {
              style: 'currency', currency: 'BRL'
            }).format(total)
          }</Text>
        </View>
      </View>
      <Button amount="Remover do Carrinhho" action={() => { }} />
    </View>
    <View style={styles.divisor} />
  </>
}
