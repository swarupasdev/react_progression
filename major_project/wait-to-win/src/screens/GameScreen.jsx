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
  const [danger, setDanger] = useState(false);

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

    const dangerInterval = setInterval(() => {
      const randomChance = Math.random();

      if (randomChance > 0.7) {
        setDanger(true);
      } else {
        setDanger(false);
      }
    }, 2000);

    return () => {
      clearInterval(rewardInterval);
      clearInterval(messageInterval);
      clearInterval(dangerInterval);
    };
  }, []);

  const claimReward = () => {
    if (danger) {
      alert("You got greedy and lost everything.");
      setPoints(1);
      return;
    }

    alert(`You claimed ${points} points`);
    setPoints(1);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: danger ? "darkred" : "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.5s",
      }}
    >
      <h1>WAIT TO WIN</h1>

      <p>{message}</p>

      <h2>Reward: {points}</h2>

      {danger && (
        <h3>Danger Zone</h3>
      )}

      <button onClick={claimReward}>
        Claim Now
      </button>
    </div>
  );
}