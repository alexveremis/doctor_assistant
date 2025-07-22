import SearchBar from '@/components/SearchBar';
import WelcomeHeader from '@/components/WelcomeHeader';
import React from 'react';
import { ScrollView } from 'react-native';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AiAssistantScreen from './aiAssistant';
import Conditions from './conditions';
import PatientAdviceScreen from './patientAdvice';
import PatientTimeline from './patientTimeline';
import InsertPatientScreen from './patients';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
   
  return (
        <ScrollView contentContainerStyle={{ padding: 20 }}> 
          <WelcomeHeader/>
          <SearchBar/>
          <AiAssistantScreen/>
          <PatientTimeline/>
          <InsertPatientScreen/>
          <PatientAdviceScreen/>
          <Conditions/>
        </ScrollView>
  );
};

export default Home;