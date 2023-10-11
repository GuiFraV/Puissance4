import { PlayerColor } from "../types"
import { ColorSelector } from "./screen/ColorSelector"
import { NameSelector } from "./screen/NameSelector"

function App() {

  return (
    <>
      <div className="container">
        <NameSelector disabled onSelect={() => null}/>
        <ColorSelector onSelect={() => null} players={[{

          id: '1',
          name: 'John',
          color: PlayerColor.RED
        }, {

          id: '2',
          name: 'Marc',
          color: PlayerColor.YELLOW

        }]} />

      </div>
    </>
  )
}

export default App
