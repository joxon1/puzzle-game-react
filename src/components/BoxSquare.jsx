import React, { useEffect, useState } from "react";
import Square from "./Square";
import "../styles/BoxSquare.css";

const BoxSquare = () => {
  const [randomNum, setRandomNum] = useState(
    Array.from({ length: 16 }, (_, i) => i).sort(() => Math.random() - 0.5)
    // 16 ta nomerli massiv yassa i ulani ichidgi nomerini random qber
  );

  useEffect(() => {
    setRandomNum(randomNum);
  }, []);

  function clickHandler(val) {
    let zeroIndex = randomNum.indexOf(0);
    let valIndex = randomNum.indexOf(val);
    if (valIndex + 4 === zeroIndex || valIndex - 4 === zeroIndex)
      // tepa va pasga yurish
      swap(valIndex, zeroIndex);
    if (valIndex + 1 === zeroIndex && zeroIndex % 4 !== 0)
      //chapdan onga yurish
      swap(valIndex, zeroIndex);
    if (valIndex - 1 === zeroIndex && (zeroIndex + 1) % 4 !== 0)
      // ongdan chapga yurish
      swap(valIndex, zeroIndex);
  }

  function swap(valIndex, zeroIndex) {
    let temArray = [...randomNum];
    temArray[zeroIndex] = randomNum[valIndex];
    temArray[valIndex] = 0;
    setRandomNum(() => [...temArray]);
  }

  function reset() {
    setRandomNum(
      Array.from({ length: 16 }, (_, i) => i).sort(() => Math.random() - 0.5)
    );
  }

  return (
    <>
      <div className="box_container">
        {randomNum.map((num, i) => (
          <div key={i} className="square_container">
            <Square value={num} clickHandler={clickHandler} />
          </div>
        ))}
      </div>
      <button className="reset" onClick={reset}>
        Начать заново
      </button>
    </>
  );
};

export default BoxSquare;
