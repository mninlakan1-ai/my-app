import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './assets/styles/AppStyles'
import Header from './components/Header'
import Info from './data/headerInfo'
import Card from './components/Card'
import games from './data/games';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header 
      title={Info.title}
      subtitle={Info.subtitle}
      createBy={Info.createBy}
      />
      <View style={styles.content}>
        {games.map((g) => (
          <Card
          key={g.id}
          id={g.id}
          name={g.name}
          />
        ))}
      </View>
    </ScrollView>
  )
}

export default App