//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Buttons from "./components/Buttons";
import BottomRow from "./BottomRow";
import Container from "./components/Container";
import Section from "./components/Section";
import TeamCard from "./components/TeamCard";
import TeamName from "./components/TeamName";
import TeamScore from "./components/TeamScore";
import Timer from "./components/Timer";
import TopRow from "./components/TopRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <Container>
      <Section className="scoreboard">
        <TopRow className="topRow">
          <TeamCard className="home">
            <TeamName className="home__name">Lions</TeamName>
            <TeamScore className="home__score">{homeScore}</TeamScore>
          </TeamCard>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <Timer>00:03</Timer>
          <TeamCard className="away">
            <TeamName className="away__name">Tigers</TeamName>
            <TeamScore className="away__score">{awayScore}</TeamScore>
          </TeamCard>
        </TopRow>
        <BottomRow />
      </Section>
      <Section className="buttons">
        <Buttons className="homeButtons">
          <Button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </Button>
          <Button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </Button>
        </Buttons>

        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <Buttons className="awayButtons">
          <Button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </Button>
          <Button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </Button>
        </Buttons>
      </Section>
    </Container>
  );
}

export default App;
