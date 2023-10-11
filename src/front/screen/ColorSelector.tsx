import { Player, PlayerColor } from "../../types"

type ColorSelectorProps = {
    onSelect: (color: PlayerColor) => void
    players: Player[],
    colors: PlayerColor[],
}


function disColor(color: PlayerColor){
    return `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}

export function ColorSelector({ onSelect, players, colors } : ColorSelectorProps){

    return <>
    
     <div className="players">
        {players.map(player => <div key={player.id} className="player">
            {player.name}
            {player.color && <div className={disColor(player.color)}></div>}

        </div>)}
    </div>
    <h3>Sélectionnez une couleur</h3>
    <div className="selector">
        {colors.map(color => <button className={disColor(color)} key={color} onClick={() => onSelect(color)}></button>)}
    </div>
    </>
}