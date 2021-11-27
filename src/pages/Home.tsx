import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Button from '../components/Button';
import TaskCard from '../components/TaskCard';

interface TasksData {
  id: string;
  name: string;
}

export default function Home() {
  const [newTask, setNewTask] = useState('');
  const [myTasks, setMyTasks] = useState<TasksData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewTask() {
    const data = {
      id: String(new Date().getTime()),
      name: newTask
    }

    setMyTasks(oldState => [...oldState, data]);
  }

  function handleRemoveTask(id: String) {
    setMyTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  useEffect(() => {
      const currentHours = new Date().getHours();

      if(currentHours < 12) {
        setGretting('Bom dia')
      }else if(currentHours >= 12 && currentHours < 18) {
          setGretting('Boa tarde')
      } else {
          setGretting('Boa noite')
      }
  }, [])

  return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Adicione suas tarefas
      </Text>

      <Text style={styles.title}>
        {gretting}
      </Text>
      <TextInput style={styles.input} placeholder="Sua Tarefa"placeholderTextColor="#555" onChangeText={setNewTask} />
      
      <Button onPress={handleAddNewTask} title="Adicionar" activeOpacity={.7} />

      <Text style={[styles.title, {marginTop: 50}]}>Minhas Tarefas</Text>

      <FlatList
        data={myTasks}
        keyExtractor={item => item.id }
        renderItem={({ item }) => (
            <TaskCard onPress={() => handleRemoveTask(item.id)} key={item.id} task={item.name}/>
        )}
      />
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },

})