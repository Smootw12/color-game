import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resoult, setResoult] = useState<undefined | boolean>(undefined);
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const generateRandomColor = () => {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const color = new Array(6)
      .fill("")
      .map(() => hex[Math.floor(Math.random() * hex.length)])
      .join("");
    return `#${color}`;
  };

  const submitAnswer = (answer: string) => {
    if (answer == color) {
      setResoult(true);
      pickColor();
    } else {
      setResoult(false);
    }
  };

  const pickColor = () => {
    const actualColor = generateRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(
        () => Math.random() - 0.5
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);
  return (
    <div className="app">
      <div className="guess-me" style={{ background: color }}></div>
      <div className="answers">
        {answers.map((answer) => (
          <button onClick={() => submitAnswer(answer)}>{answer}</button>
        ))}
      </div>
      {resoult == true && <div className="correct">Correct!</div>}
      {resoult == false && <div className="wrong">Wrong Answer</div>}
    </div>
  );
}

export default App;
