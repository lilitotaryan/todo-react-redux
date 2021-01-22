import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => ({
  items: state.tasks
});

const mapDispatchToProps = dispatch => ({
  dispatch: () => dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
