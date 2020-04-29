import * as Actions from "./actions";
import * as ActionTypes from "./actionTypes";
import { StoreState } from './state';

const count = (state: StoreState, action: Actions.All): StoreState => {
  switch (action.type) {
    case ActionTypes.INCREMENT_USERINFO:
      return{
        userInfo: state
      }
    case ActionTypes.DECREMENT_USERINFO:
      return{
        userInfo: state
      }
    default:
      return state;
  }

};

export default count;