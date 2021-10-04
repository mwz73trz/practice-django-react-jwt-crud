import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class Team extends Component {
  render() {
    const { teams } = this.props;
    return (
      <ListGroup style={{ listStyle: "none" }}>
        <h1>Favorite Teams</h1>
        {teams.map((team, index) => (
          <ListGroupItem key={index}>
            <h3>{team.name}</h3>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default Team;
