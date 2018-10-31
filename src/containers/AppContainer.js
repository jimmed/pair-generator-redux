import { connect } from "react-redux";
import App from "../components/App";
import { generatePairsAnimation } from "../actions";

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    generatePairs: () => dispatch(generatePairsAnimation())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
