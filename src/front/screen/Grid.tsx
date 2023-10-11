import { CSSProperties } from "react"
import { CellState, GridState, PlayerColor } from "../../types"
import { discColorClass } from "../../func/color"

type GridProps = {
    grid: GridState
}

export function Grid({grid}: GridProps){
    const cols = grid[0].length
    return <div className="grid" style={{'--rows': grid.length, '--cols':grid[0].length} as CSSProperties}>
        {grid.map((row, y) => row.map((c, x) => <Cell x={x} y={y} color={c} key={`${x} - ${y}`} />))}

        <div className="columns">
            {new Array(cols).fill(1).map((_, k) => <Column key={k}/>)}
        </div>
    
    </div>
}

type CellProps = {
    x:number, 
    y: number, 
    color: CellState
}


function Cell({x, y, color} : CellProps){
    return <div 
    style={{'--row': y} as CSSProperties}
        className={discColorClass(color)}
    />
      
}

type ColumnProps = {

}

function Column({}: ColumnProps){

    return <div className="column">
        <div className="disc disc-yellow"></div>
    </div>

}