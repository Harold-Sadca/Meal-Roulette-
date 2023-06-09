import Main from './components/Main';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, legacy_createStore } from "redux";
import reducers from './redux/reducers';

const mainStore = createStore(reducers)

function App() {
  return (
    <Provider store={mainStore}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
