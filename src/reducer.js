import { combineReducers } from 'redux';

//define action types

const SHOW_EVENT_LIST = 'show_event_list';
const INPUT_FORM = 'input_form';

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

//initial state for event list

const INITIAL_LIST_STATE = {
  user: {},
  event_list: {}
};

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  date: '',
  amount: ''
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
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}

// combine reducers

const reducer = combineReducers({
  event: eventReducer,
  form: formReducer
});

//helper functions

function applyShowEventList(state, data) {
  return { ...state, event_list: data };
}

function applyInputForm(state, payload) {
  return { ...state, [action.payload.prop]: action.payload.value };
}

//export action creators
const actionCreators = {
  showEventList,
  inputForm
};

export { actionCreators };

export default reducer;
