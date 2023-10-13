import { currentPlayer } from "../func/game"
import { GameStates } from "../types"
import { Grid } from "./component/Grid"
import { useGame } from "./hooks/useGame"
import { DrawScreen } from "./screens/DrawScreen"
import { LobbyScreen } from "./screens/LobbyScreen"
import { LoginScreen } from "./screens/LoginScreen"
import { PlayScreen } from "./screens/PlayScreen"
import { VictoryScreen } from "./screens/VictoryScreen"

function App() {

  const {state, context, send, playerId} = useGame()
  const canDrop = state === GameStates.PLAY
  const player = canDrop ? currentPlayer(context) : undefined
  const dropToken = canDrop ? (x: number) => {
    send({type: 'dropToken', x: x})
  } : undefined

  if(!playerId){
    return <div className="container">
      <LoginScreen />
    </div>
  }
  return (
    <>
      <div className="container">
        Player: {playerId}
        {state === GameStates.LOBBY && <LobbyScreen />}
        {state === GameStates.PLAY && <PlayScreen />}
        {state === GameStates.VICTORY && <VictoryScreen />}
        {state === GameStates.DRAW && <DrawScreen />}
        <Grid winingPositions={context.winingPositions} grid={context.grid} onDrop={dropToken} color={player?.color}/>

      </div>
    </>
  )
}

export default App
