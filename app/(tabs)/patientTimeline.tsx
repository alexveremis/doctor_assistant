
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const patientData = [
  {
    symptoms: 'Fever, Cough',
    treatment: 'Aspirin',
    result: 'Improved',
  },
  {
    symptoms: 'Flu',
    treatment: 'Panadol',
    result: 'Improved',
  },
];

const PatientTimeline = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>PATIENT TIMELINE</Text>

      <View style={styles.profileSection}>
        <Text style={styles.label}>Alexandros Veremis</Text>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileButtonText}>Show Profile »</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timelineContainer}>
        {patientData.map((event, index) => (
          <View key={index} style={styles.timelineBox}>
            <View style={styles.timelineStep}>
              <Text style={styles.stepTitle}>Symptoms</Text>
              <Text>{event.symptoms}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
            <View style={styles.timelineStep}>
              <Text style={styles.stepTitle}>Treatment</Text>
              <Text>{event.treatment}</Text>
            </View>
            <Text style={styles.arrow}>➔</Text>
            <View style={styles.timelineStep}>
              <Text style={styles.stepTitle}>Result</Text>
              <Text>{event.result}</Text>
            </View>
          </View>
        ))}
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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
  timelineContainer: {
    gap: 20,
  },
  timelineBox: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timelineStep: {
    alignItems: 'center',
    flex: 1,
  },
  stepTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  arrow: {
    fontSize: 24,
    color: '#000',
    marginHorizontal: 8,
  },
});

export default PatientTimeline;