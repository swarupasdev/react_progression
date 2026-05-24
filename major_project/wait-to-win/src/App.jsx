import useOfflineStatus from "./hooks/useOfflineStatus";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const isOffline = useOfflineStatus();

  return (
    <>
      {isOffline ? <GameScreen /> : <HomeScreen />}
    </>
  );
}