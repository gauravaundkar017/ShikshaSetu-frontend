// CSS import 
import './index.css'

// Library imports
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Components import
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
