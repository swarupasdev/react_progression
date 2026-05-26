import { useEffect, useState } from "react";

const messages = [
  "Patience creates value.",
  "Most players claim too early.",
  "Are you sure waiting is safe?",
  "Greed destroys rewards.",
  "Sometimes risk is rewarded.",
  "You feel tempted already, right?",
];

export default function GameScreen() {
  const [points, setPoints] = useState(1);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const rewardInterval = setInterval(() => {
      setPoints((prev) => prev + 1);
    }, 1000);

    const messageInterval = setInterval(() => {
      const randomIndex = Math.floor(
        Math.random() * messages.length
      );

      setMessage(messages[randomIndex]);
    }, 3000);

    return () => {
      clearInterval(rewardInterval);
      clearInterval(messageInterval);
    };
  }, []);

  const claimReward = () => {
    alert(`You claimed ${points} points`);

    setPoints(1);
  };

  return (
    <div>
      <h1>WAIT TO WIN</h1>

      <p>{message}</p>

      <h2>Reward: {points}</h2>

      <button onClick={claimReward}>
        Claim Now
      </button>
    </div>
  );
}