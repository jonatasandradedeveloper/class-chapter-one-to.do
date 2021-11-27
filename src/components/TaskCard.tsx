import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'

interface TaskCardProps extends TouchableOpacityProps {
  task: String;
}

export default function TaskCard({ task, ...rest } : TaskCardProps) {
    return (
    <TouchableOpacity {... rest} style={styles.buttonTask}>
        <Text style={styles.taskTex}>{task}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonTask: {
      backgroundColor: '#1F1E25',
      padding: 8,
      borderRadius: 15,
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    taskTex: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  })