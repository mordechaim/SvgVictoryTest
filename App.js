import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { VictoryChart, VictoryLine } from 'victory-native'

const App = () => {
  const [data, setData] = useState([
    {
      x: 1,
      y: 1
    },
    {
      x: 2,
      y: 2
    },
    {
      x: 3,
      y: 3
    },
    {
      x: 4,
      y: 4
    },
    {
      x: 5,
      y: 5
    },
    {
      x: 6,
      y: 6
    },
  ])

  console.log(data);

  return <View>
    <VictoryChart>
      <VictoryLine
        data={data}
      />
    </VictoryChart>

    <Pressable style={styles.button} onPress={e => setData(data.map(d => ({ x: d.x + 1, y: d.y + 1 })))}>
      <Text>Shift up</Text>
    </Pressable>
  </View>
}

export default App

const styles = {
  button: {
    backgroundColor: 'orange',
    jusitfyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 45,
    height: 45
  }
}