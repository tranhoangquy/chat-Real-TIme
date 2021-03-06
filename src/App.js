import React from 'react'
import { BrowserRouter, Route ,Switch} from 'react-router-dom'

import './App.css';
import Login from './container/auth/Login';
import ChatRoom from './container/chatRoom';
import AuthProvider from './components/Context/AuthProvider';
import AppProvider from './components/Context/AppProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
        <Switch>
          <Route exact path='/' component={ChatRoom} />
          <Route exact path='/login' component={Login} />
        </Switch>
        </AppProvider>
      </AuthProvider>
   </BrowserRouter>
  );
}

export default App;
