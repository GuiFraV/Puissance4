import { Player, PlayerColor } from "../../types"

type ColorSelectorProps = {
    onSelect: (color: PlayerColor) => void
    players: Player[],
}


function disColor(color: PlayerColor){
    return `disc disc-${color === PlayerColor.YELLOW ? 'yellow' : 'red'}`
}

export function ColorSelector({ onSelect, players } : ColorSelectorProps){
    return <div className="players">
        {players.map(player => <div className="player">
            {player.name}
            {player.color && <div className="disc"></div>}

        </div>)}
    </div>
}