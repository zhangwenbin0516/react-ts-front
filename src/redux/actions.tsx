import * as ActionTypes from "./actionTypes";

interface INCREMENT_USERINFO {
  type: ActionTypes.INCREMENT_USERINFO;
}

interface DECREMENT_USERINFO {
  type: ActionTypes.DECREMENT_USERINFO;
}

export type All = INCREMENT_USERINFO | DECREMENT_USERINFO;

export function INCREMENT_NUMBER(): INCREMENT_USERINFO {
  return {
    type: ActionTypes.INCREMENT_USERINFO
  };
}

export function DECREMENT_NUMBER(): DECREMENT_USERINFO {
  return {
    type: ActionTypes.DECREMENT_USERINFO
  };
}