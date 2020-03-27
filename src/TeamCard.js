import React from "react";

const TeamCard = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default TeamCard;
