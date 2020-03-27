//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import Buttons from "./Buttons";
import BottomRow from "./BottomRow";
import Section from "./Section";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  return (
    <div className="container">
      <Section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </Section>
      <Section className="buttons">
        <Buttons className="homeButtons">
          <Button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
            btnName="Home Touchdown"
          ></Button>
          <Button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
            btnName="Home Field Goal"
          ></Button>
        </Buttons>

        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <Buttons className="awayButtons">
          <Button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
            btnName="Away Touchdown"
          ></Button>
          <Button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 3)}
            btnName="Away Field Goal"
          ></Button>
        </Buttons>
      </Section>
    </div>
  );
}

export default App;
