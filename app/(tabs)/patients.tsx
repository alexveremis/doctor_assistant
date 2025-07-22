import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function InsertPatientScreen() {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [healthIssues, setHealthIssues] = useState('');
  const [amka, setAmka] = useState('');

  const handleInsert = () => {
    // Submit logic here
    console.log({ fullName, dob, gender, healthIssues, amka });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>INSERT NEW PATIENT</Text>

      <View style={styles.sidebar}>
        <Text style={styles.menuItem}>HOME</Text>
        <Text style={styles.menuItem}>PATIENTS</Text>
        <Text style={styles.menuItem}>CONDITIONS</Text>
        <Text style={styles.menuItem}>AI-ASSISTANT</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>Patient Info</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (YYYY-MM-DD)"
          value={dob}
          onChangeText={setDob}
        />
        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Health Issues (leave blank if healthy)"
          value={healthIssues}
          onChangeText={setHealthIssues}
        />
        <TextInput
          style={styles.input}
          placeholder="AMKA"
          value={amka}
          onChangeText={setAmka}
        />

        <TouchableOpacity style={styles.insertButton} onPress={handleInsert}>
          <Text style={styles.insertButtonText}>INSERT ➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0a0a0a',
    paddingTop: 40,
  },
  header: {
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#1c1c1c',
    paddingTop: 100,
    paddingLeft: 10,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 15,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fefefe',
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#222',
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#d6f0d2',
  },
  insertButton: {
    backgroundColor: '#1c1c1c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  insertButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});