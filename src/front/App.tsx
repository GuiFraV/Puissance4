import { PlayerColor } from "../types"
import { ColorSelector } from "./screen/ColorSelector"
import { Grid } from "./screen/Grid"
import { NameSelector } from "./screen/NameSelector"

function App() {

  return (
    <>
      <div className="container">
        <Grid grid={[
          ["E", "E", "E", "E", "E", "E", "R"],
          ["E", "E", "E", "E", "E", "R", "Y"],
          ["E", "E", "E", "E", "E", "R", "R"],
          ["E", "E", "E", "E", "E", "R", "Y"],
          ["E", "E", "E", "E", "E", "Y", "R"],
          ["E", "E", "E", "E", "E", "Y", "Y"]
        ]}/>
        <NameSelector disabled onSelect={() => null}/>
        <ColorSelector onSelect={() => null} players={[{

          id: '1',
          name: 'John',
          color: PlayerColor.RED
        }, {

          id: '2',
          name: 'Marc',
          color: PlayerColor.YELLOW

        }]} colors={[PlayerColor.RED, PlayerColor.YELLOW ]}/>
        <hr />

      </div>
    </>
  )
}

export default App
