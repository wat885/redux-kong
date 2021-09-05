// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

const initialState = {
  results: 15000,
  value: [],
};

//// ตรวจเช็ต action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        // results: state.results,
        // value: state.value
        ...state,
        results: (state.results += action.payload),
        value: [...state.value, action.payload],
      };

      break;
    case "SUBTRACT":
      // state -= action.payload;
      state = {
        ...state,
        results: (state.results -= action.payload),
        value: [...state.value, action.payload],
      };

      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reducer);

// แสดงค่าของ state ที่อยู่ใน store
store.subscribe(() => {
  console.log("updating store", store.getState());
});

// ส่ง action
store.dispatch({
  type: "ADD",
  payload: 15000,
});
store.dispatch({
  type: "ADD",
  payload: 15000,
});
store.dispatch({
  type: "ADD",
  payload: 30000,
});
store.dispatch({
  type: "SUBTRACT",
  payload: 8000,
});
