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

//// ตรวจเช็ต action
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state += action.payload;

      break;
    case "SUBTRACT":
      state -= action.payload;
      break;

    default:
      break;
  }

  return state;
};

const store = createStore(reducer, 15000);

// แสดงค่าของ state ที่อยู่ใน store
store.subscribe(() => {
  console.log("updating store", store.getState());
});

// ส่ง action
store.dispatch({
  type: "ADD",
  payload: 500,
});
store.dispatch({
  type: "SUBTRACT",
  payload: 10000,
});
