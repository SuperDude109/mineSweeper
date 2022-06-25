import React from "react";

function Header({difficulty,username}) {
  if(difficulty === undefined) difficulty="Easy"
  if(username === undefined) username ="Guest"
  return (
    <div className="component-header" data-testid="component-header">
      <h1>{`Welcome ${username}, to the wonderful world of MineSweeper!`}</h1>
      <h2>{`You are playing Mine Sweeper on ${difficulty} mode.`}</h2>
      <h3>Good Luck!</h3>
    </div>
  );
}
export default Header;
