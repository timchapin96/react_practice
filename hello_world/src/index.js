// 1) import React and REact Dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get ref to div with ID root
let el = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);
