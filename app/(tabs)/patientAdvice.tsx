
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PatientAdviceScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>PATIENT MEDITRACK ADVICE</Text>

      <View style={styles.profileSection}>
        <Text style={styles.label}>Alexandros Veremis</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Show Profile »</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Symptoms</Text>
        <Text style={styles.sectionText}>Fever</Text>
      </View>

      <TouchableOpacity style={styles.recommendButton}>
        <Text style={styles.recommendText}>Get Recommendation according to Symptom</Text>
      </TouchableOpacity>

      <View style={styles.adviceBox}>
        <Text style={styles.adviceTitle}>
          <Text style={styles.bold}>MediTrack Advice:</Text> Aspirin (Accuracy: 89.42%)
        </Text>
        <Text style={styles.reasonText}>
          <Text style={styles.bold}>Reason:</Text> According to the history of the patient that showed improvement when having fever, cough and taking also into account that male patients around his age with fever react well with Aspirin.
        </Text>
      </View>

      <View style={styles.footerBanner}>
        <Text style={styles.footerText}>Recommendation</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  profileButton: {
    backgroundColor: '#444',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  profileButtonText: {
    color: '#fff',
  },
  section: {
    backgroundColor: '#eaf6e8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 14,
  },
  recommendButton: {
    backgroundColor: '#2f2f2f',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  recommendText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  adviceBox: {
    backgroundColor: '#d9f0dc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  adviceTitle: {
    marginBottom: 10,
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  reasonText: {
    fontSize: 14,
    color: '#333',
  },
  footerBanner: {
    backgroundColor: '#3a3a3a',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PatientAdviceScreen;