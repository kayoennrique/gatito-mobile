import React from "react";
import { View, Text } from 'react-native';
import styles from './styles';
import Button from "../Button";

export default function CartStatus({ total }) {
  return <View style={styles.content}>
    <View style={styles.total}>
      <Text style={styles.description}>Total do Carrinho:</Text>
      <Text style={styles.amount}>
        {
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(total)
        }
      </Text>
    </View>
    <View style={styles.button}>
      <Button amount='Concluir Pedido' invert />
    </View>
  </View>
}