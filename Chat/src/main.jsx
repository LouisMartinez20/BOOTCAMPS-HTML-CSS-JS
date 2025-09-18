import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { MessagesProvider } from './assets/context/MessagesContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <MessagesProvider>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </MessagesProvider>
  </BrowserRouter>
  </StrictMode>,
)
