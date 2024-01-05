import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
      main: '#db531d', // Your primary color
    },
    secondary: {
      main: '#000000', // Your secondary color
    },
    text: {
      primary: '#000000', // Text color
      secondary: '#adadad', // Secondary text color
    },
    background: {
      default: '#ffffffe', // Default background color
      paper: '#cec5c2', // Paper background color
    },
  },
  // You can add other theme configurations as needed
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
