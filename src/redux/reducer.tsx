import * as Actions from "./actions";
import * as ActionTypes from "./actionTypes";

const initState = {
  number:0
};

type IState = Readonly<typeof initState>;

const count = (state: IState = initState, action: Actions.All): IState => {
  switch (action.type) {
    case ActionTypes.INCREMENT_NUMBER:
      return{
        number: state.number + 1
      }
    case ActionTypes.DECREMENT_NUMBER:
      return{
        number: state.number - 1
      }
    default:
      return state;
  }

};

export default count;