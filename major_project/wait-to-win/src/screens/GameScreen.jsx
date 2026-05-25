import { useEffect, useState } from "react";

export default function GameScreen() {
  const [points, setPoints] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const claimReward = () => {
    alert(`You claimed ${points} points`);
    setPoints(1);
  };

  return (
    <div>
      <h1>WAIT TO WIN</h1>

      <p>Connection lost.</p>

      <h2>Reward: {points}</h2>

      <button onClick={claimReward}>
        Claim Now
      </button>
    </div>
  );
}