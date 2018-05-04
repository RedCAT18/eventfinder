
//define action types

const SHOW_EVENT_LIST = 'show_event_list';


//action creators

function showEventList() {
  //get event data with server
  let event_list = [{
    id: 1,
    title: 'event 1'
  }, {
    id: 2,
    title: 'event 2'
  }];

  return {
    type: SHOW_EVENT_LIST,
    event_list,
  };
}


//initial state for event list

const INITIAL_STATE = {
  user: {},
  event_list: {},
};


//reducer 
function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_EVENT_LIST:
      return applyShowEventList(state, action.event_list);
    default:
      return state;
  }
}


//helper functions

function applyShowEventList(state, data) {
  return { ...state, event_list: data };
}


//export action creators 
const actionCreators = {
  showEventList,
};

export { actionCreators };

export default reducer;