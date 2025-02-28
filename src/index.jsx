import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AppClass from './components/AppClass';
//import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppClass />
  </React.StrictMode>,

  document.getElementById('root')
);

