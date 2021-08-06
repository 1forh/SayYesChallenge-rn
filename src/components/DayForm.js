import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PhotoPicker from '@components/PhotoPicker';

export default function DayForm({ day, submit }) {
  const [title, setTitle] = useState(day?.title);
  const [description, setDescription] = useState(day?.description);
  const [image, setImage] = useState(day?.image);

  const onSubmit = () => {
    if (typeof submit === 'function') {
      if (!image || !title) return;

      const details = {
        index: day.index,
        image,
        title,
        description,
      };

      // * is updating day
      if (day.title) {
        details.edited = new Date().toString();
      } else {
        details.created = new Date().toString();
      }

      submit(details);
    }
  };

  return (
    <View>
      <PhotoPicker pick={setImage} photo={image} />

      <View>
        <Text>Add Title</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>

      <View>
        <Text>Add description</Text>
        <TextInput
          style={styles.textarea}
          onChangeText={setDescription}
          value={description}
          multiline
        />
      </View>

      <View>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  textarea: {
    height: 100,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
});
