import React, { useState } from "react";
import { Button } from "./components/Button";
import { Game } from "./components/Game";

import "./App.less";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>Play 2048</h1>
        </div>
        <div>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <Game key={date.toISOString()} />
      <div className="footer">
        Made with ❤️ by{" "}
        <a
          href="http://nhatvu148.com"
          target="_blank"
        >
          Nhat Vu
        </a>
      </div>
    </div>
  );
};
/* eslint-enable react/jsx-no-target-blank */
