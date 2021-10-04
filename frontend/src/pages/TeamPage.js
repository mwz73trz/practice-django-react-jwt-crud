import React, { Component } from "react";
import Team from "../components/Team";
import { getTeams } from "../api/favoritesAPI";

class TeamPage extends Component {
  state = {
    teams: [],
  };

  async componentDidMount() {
    const teamsJson = await getTeams();
    this.setState({ teams: teamsJson });
  }

  render() {
    return (
      <div>
        <h1>Favorite Teams</h1>
        <Team teams={this.state.teams} />
      </div>
    );
  }
}

export default TeamPage;
