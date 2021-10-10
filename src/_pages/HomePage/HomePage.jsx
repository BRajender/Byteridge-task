import React from "react";
// import { Auditpage } from "../Audit";
import { history } from "../../_helpers";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { Header } from "../../_components";
import {Container,Row,Col} from "react-bootstrap"
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        {" "}
        <Header />
        <Container>
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <h1>Hi {user.firstName}!</h1>
              <p>You're logged in with React!!</p>
              <h3>All registered users:</h3>
              {users.loading && <em>Loading users...</em>}
              {users.error && (
                <span className="text-danger">ERROR: {users.error}</span>
              )}
              {users.items && (
                <ul>
                  {users.items.map((user, index) => (
                    <li key={user.id}>
                      {user.firstName + " " + user.lastName}
                      {user.deleting ? (
                        <em> - Deleting...</em>
                      ) : user.deleteError ? (
                        <span className="text-danger">
                          {" "}
                          - ERROR: {user.deleteError}
                        </span>
                      ) : (
                        <span>
                          {" "}
                          -{" "}
                          <a onClick={this.handleDeleteUser(user.id)}>Delete</a>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <p></p>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
