import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
    userdata: '',
    userlogin: '',

};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case 'USERLOGIN':
            return {
                userlogin: action.userlogin,
                userdata: state.userdata
            }
        case 'USERDATA':
            return {
                userdata: action.userdata,
                userlogin: state.userlogin,

            }
    }
}
const store = createStore(reducer);
const App2 = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<App2 />, document.getElementById('root'));

serviceWorker.unregister();
