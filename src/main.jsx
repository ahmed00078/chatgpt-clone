import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './routes/homePage/homePage.jsx';
import DashboardPage from './routes/dashboardPage/dashboardPage.jsx';
import ChatPage from './routes/chatPage/chatPage.jsx';
import SignInPage from './routes/signInPage/signInPage.jsx';
import SignUpPage from './routes/signUpPage/signUpPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
