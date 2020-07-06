import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ChatBox from './components/ChatBox/ChatBox';
import { AppContainer } from './App-Styles';

function App() {
  return (
    <AppContainer>
      <Header/>
      <Form/>
      <ChatBox/>
    </AppContainer>
  );
}

export default App;
