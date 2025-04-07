import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [num1, setNum1] = useState(generateRandomNumber());
  const [num2, setNum2] = useState(generateRandomNumber());
  const [operator, setOperator] = useState(generateRandomOperator());
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function generateRandomOperator() {
    const operators = ["+", "-", "×", "÷"]; 
    return operators[Math.floor(Math.random() * operators.length)];
  }

  function calculateAnswer() {
    switch (operator) {
      case "+": return num1 + num2;
      case "-": return num1 - num2;
      case "×": return num1 * num2;
      case "÷": return (num1 / num2).toFixed(2);
      default: return 0;
    }
  }

  function checkAnswer() {
    if (parseFloat(userAnswer) === parseFloat(calculateAnswer())) {
      setScore(score + 1);
      resetGame();
    } else {
      alert("Resposta errada! Tente novamente.");
    }
  }

  function resetGame() {
    setNum1(generateRandomNumber());
    setNum2(generateRandomNumber());
    setOperator(generateRandomOperator());
    setUserAnswer("");
  }

  return (
    <div className="sidebar">
      <h2>Você tem {score} ponto(s)</h2>
      <button onClick={resetGame}>Sortear Desafio</button>
      <p>
        Quanto é: {num1} {operator} {num2} ?
      </p>
      <p>Sua Resposta: </p>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Verificar</button>
      <button onClick={() => setScore(0)}>Novo Jogo</button>
    </div>
  );
}

export default Sidebar;
