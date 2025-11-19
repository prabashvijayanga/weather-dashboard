import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'  // Changed from BrowserRouter
import App from './App.jsx'
import './index.css'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: '#0f172a',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
)