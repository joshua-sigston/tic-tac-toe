import React from "react";
import Square from "./Square";

const Board = ({ square, onClick }) => (
  <div className="">
    <Square value="1" onClick={() => onClick("o")} />
    <Square value="2" onClick={() => onClick("o")} />
    <Square value="3" onClick={() => onClick("o")} />
    <Square value="4" onClick={() => onClick("o")} />
    <Square value="5" onClick={() => onClick("o")} />
    <Square value="6" onClick={() => onClick("o")} />
    <Square value="7" onClick={() => onClick("o")} />
    <Square value="8" onClick={() => onClick("o")} />
    <Square value="9" onClick={() => onClick("o")} />
  </div>
);
export default Board;
