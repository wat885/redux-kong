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

import { createStore, combineReducers, applyMiddleware } from "redux";

const initialState = {
  results: 15000,
  value: [],
};

const userReducer = (state = { name: "kong", age: 15 }, action) => {
  switch (action.type) {
    case "setName":
      state = {
        ...state,
        name: action.payload,
      };

      break;
    case "setAge":
      state = {
        ...state,
        age: action.payload,
      };

      break;

    default:
      break;
  }

  return state;
};

//// reducer ใช่่ตรวจเช็ต action
const employeeReducer = (state = initialState, action) => {
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

const myloger = (store) => (next) => (action) => {
  console.log("Log Action", action);
  next(action);
};

const store = createStore(combineReducers({ employeeReducer, userReducer }),{},applyMiddleware(myloger));

// แสดงค่าของ state ที่อยู่ใน store
store.subscribe(() => {
  // console.log("updating store", store.getState());
});

// ส่ง action
store.dispatch({
  type: "ADD",
  payload: 15000,
});
store.dispatch({
  type: "setName",
  payload: "Redux",
});
store.dispatch({
  type: "setAge",
  payload: 20,
});

// store.dispatch({
//   type: "ADD",
//   payload: 15000,
// });
// store.dispatch({
//   type: "ADD",
//   payload: 30000,
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 8000,
// });
