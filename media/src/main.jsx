
import { Provider } from 'react-redux'
import { store } from './store'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //Set provider with prop of store to give access to Redux store
  <Provider store={store}>
    {/* Today sucked at work. I had to grade tests for 7 hours. But the streak must live on */}
    {/* This is where I put the app in the provider */}
    <App />
  </Provider>
)
