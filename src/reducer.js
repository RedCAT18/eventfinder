import { combineReducers } from 'redux';
import { api } from './api';
//define action types

const SHOW_EVENT_LIST = 'show_event_list';
const INPUT_FORM = 'input_form';
const ADD_EVENT = 'add_event';
const INPUT_REGISTER_FORM = 'input_register_form';
const TRY_REGISTER = 'try_register';
const REGISTER_SUCCESS = 'register_success';
const REGISTER_FAIL = 'register_fail';
const INPUT_LOGIN_FORM = 'input_login_form';

//action creators

function showEventList() {
  //get event data with server
  let event_list = [
    {
      id: 1,
      title: 'event 1'
    },
    {
      id: 2,
      title: 'event 2'
    }
  ];

  return {
    type: SHOW_EVENT_LIST,
    payload: event_list
  };
}

function inputForm({ prop, value }) {
  return {
    type: INPUT_FORM,
    payload: { prop, value }
  };
}

function addEvent(formData) {
  //send data to server
  //...
  return {
    type: ADD_EVENT,
    payload: formData
  };
}

function inputRegisterForm({ prop, value }) {
  return {
    type: INPUT_REGISTER_FORM,
    payload: { prop, value }
  };
}

function register(data) {
  return dispatch => {
    dispatch({ type: TRY_REGISTER });
    api
      .post('signup', data)
      .then(response => {
        console.log(response.data);
        if (response.data.success === 1) {
          registerUserSuccess(dispatch, response.data.data);
        } else {
          registerUserFail(dispatch, response.data.error);
        }
      })
      .catch(error => {
        registerUserFail(dispatch, error);
      });
  };
}

function inputLoginForm({ prop, value }) {
  return {
    type: INPUT_LOGIN_FORM,
    payload: { prop, value }
  };
}

//helper

function registerUserSuccess(dispatch, data) {
  dispatch({
    type: REGISTER_SUCCESS,
    payload: data
  });
}

function registerUserFail(dispatch, data) {
  dispatch({
    type: REGISTER_FAIL,
    payload: data
  });
}

//initial state for event list

const INITIAL_REGISTER_STATUS = {
  email: '',
  name: '',
  password: '',
  message: '',
  loading: false
};

const INITIAL_LOGIN_STATUS = {
  email: '',
  password: '',
  isLoggedin: false,
  loading: false,
  message: ''
};

const INITIAL_LIST_STATE = {
  user: {},
  event_list: {}
};

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  date: '',
  location: '',
  headcount: '',
  deadline: ''
};

//reducers

function eventReducer(state = INITIAL_LIST_STATE, action) {
  switch (action.type) {
    case SHOW_EVENT_LIST:
      return applyShowEventList(state, action.payload);
    default:
      return state;
  }
}

function formReducer(state = INITIAL_FORM_STATE, action) {
  switch (action.type) {
    case INPUT_FORM:
      return applyInputForm(state, action.payload);
    case ADD_EVENT:
      return state;
    default:
      return state;
  }
}

function registerReducer(state = INITIAL_REGISTER_STATUS, action) {
  switch (action.type) {
    case INPUT_REGISTER_FORM:
      return applyInputRegisterForm(state, action.payload);
    case TRY_REGISTER:
      return applyTryRegister(state);
    case REGISTER_SUCCESS:
      return registerSuccess(state, action.payload);
    case REGISTER_FAIL:
      return registerFail(state, action.payload);
    default:
      return state;
  }
}

function loginReducer(state = INITIAL_LOGIN_STATUS, action) {
  switch (action.type) {
    case INPUT_LOGIN_FORM:
      return applyInputLoginForm(state, action.payload);
    default:
      return state;
  }
}

// combine reducers

const reducer = combineReducers({
  event: eventReducer,
  form: formReducer,
  register: registerReducer,
  login: loginReducer
});

//helper functions

function applyShowEventList(state, data) {
  return { ...state, event_list: data };
}

function applyInputForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

function applyInputRegisterForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

function applyTryRegister(state) {
  return { ...state, loading: true };
}

function registerSuccess(state, payload) {
  console.log(payload);
  return { ...state, email: payload.email, name: payload.name, loading: false };
}

function registerFail(state, payload) {
  console.log(payload);
  return { ...state, loading: false, message: payload };
  s;
}

function applyInputLoginForm(state, payload) {
  return { ...state, [payload.prop]: payload.value };
}

//export action creators
const actionCreators = {
  showEventList,
  inputForm,
  inputRegisterForm,
  register
};

export { actionCreators };

export default reducer;
