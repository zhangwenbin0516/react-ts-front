import { Dispatch } from "react";
import { connect } from "react-redux";
import view from "@page/index";

import { All, INCREMENT_NUMBER, DECREMENT_NUMBER } from "./actions";

const mapDispatchToProps = (dispatch: Dispatch<All>) => ({
  INCREMENT_NUMBER: () => dispatch(INCREMENT_NUMBER()),
  DECREMENT_NUMBER: () => dispatch(DECREMENT_NUMBER())
});

const mapStateToProps = (state: any) => ({});
const store = connect(
    mapStateToProps,
    mapDispatchToProps
  )(view);
export default store;