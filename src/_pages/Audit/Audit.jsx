import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import { BasicTable, Header } from "../../_components";
import { Container, Row, Col } from "react-bootstrap";

class Auditpage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user, users } = this.props;
    console.log(user);
    return (
      <div>
        
        <Header />
        {
          user.role === "Auditor" ? (
             <Container className="mt-3">
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1>Hi {user.firstName}!</h1>
              <p>You're logged in with React!!</p>
              <h3>All login audit :</h3>
              {users.loading && <em>Loading users...</em>}
              {users.error && (
                <span className="text-danger">ERROR: {users.error}</span>
              )}
            </Col>
          </Row>

          {users.items && <BasicTable data={users.items} />}
        </Container>
          ): (
              <span className="text-danger text-align-center">
                 you are not auditor
              </span>
          )
        }

       
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

const connectedAuditPage = connect(mapState, actionCreators)(Auditpage);
export { connectedAuditPage as Auditpage };
