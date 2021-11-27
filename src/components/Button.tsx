import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  title: String;
}

export default function Button({ title, ...rest } : ButtonProps) {
    return (
    <TouchableOpacity {...rest} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#F45',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: 'bold'
    },
  })