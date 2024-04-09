
import { Provider } from 'react-redux'
import { store } from './store'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
