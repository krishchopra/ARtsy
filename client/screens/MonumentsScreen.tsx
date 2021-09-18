import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { MonumentBlock } from "../components/MonumentBlock";
export default function MonumentsScreen() {

  const [input, setInput] = useState("");

  const data = [{
    id: "1",
    name: "Socrates Statue",
    owner: "Leo Tian",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg",
    description: " A statue of Socrates. Socrates was a Greek philosopher from Athens who is credited as a founder of Western philosophy and the first moral philosopher of the Western ethical tradition of thought."
  }, {
    id: "2",
    name: "Socrates Painting",
    owner: "Leo Tian",
    image: "https://www.history.com/.image/t_share/MTU3ODc5MDg2NDMzNTEwNzI5/death-of-socrates.jpg",
    description: " A statue of Socrates. Socrates was a Greek philosopher from Athens who is credited as a founder of Western philosophy and the first moral philosopher of the Western ethical tradition of thought."
  }];

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        directionalLockEnabled
        data={data}
        renderItem={({ item, index }) => (
          <MonumentBlock
            name={item.name}
            owner={item.owner}
            image={item.image}
            pos={index == 0 ? "first" : index == data.length - 1 ? "last" : "middle"}
          >
            {item.description}
          </MonumentBlock>
        )}
        keyExtractor={item => item.id}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    marginHorizontal: 20,
  },
  scrollView: {
    width: "100%",
    position: "relative"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});