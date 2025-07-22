import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AiAssistantScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MEDITRACK ASSISTANT</Text>

      <View style={styles.chatContainer}>
        {/* User Message */}
        <View style={[styles.messageBubble, styles.userBubble]}>
          <Text style={styles.messageText}>
            My patient Alexandros Veremis doesn't react well on Aspirin or Panadol and he has a fever for 6 days now. Any ideas?
          </Text>
        </View>

        {/* AI Message */}
        <View style={styles.aiContainer}>
          <Image
            source={require('./../../assets/images/ai_bot.png')} // Replace with your bot image or use an icon
            style={styles.botIcon}
          />
          <View style={[styles.messageBubble, styles.aiBubble]}>
            <Text style={styles.messageText}>
              Since your patient does not have any recorded health issues and taking into account that male patients around his age react well on Depon, I would strongly recommend it. Also, has he tried resting these 6 days?
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  chatContainer: {
    flexDirection: 'column',
    gap: 30,
  },
  messageBubble: {
    padding: 16,
    borderRadius: 16,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  userBubble: {
    backgroundColor: '#d2e8d2',
    alignSelf: 'flex-end',
  },
  aiContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  aiBubble: {
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 0,
  },
  messageText: {
    fontSize: 14,
    color: '#333',
  },
  botIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});

export default AiAssistantScreen;