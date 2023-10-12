import { discColorClass } from "../../func/color"
import { prevent } from "../../func/dom"

type DrawProps = {
    onRestart?: () => void
}

export function Draw ({onRestart}: DrawProps){
    return <div className="flex" style={{justifyContent: 'space-between'}}>
        <h2 className="flex" style={{gap: '.5rem'}}>Dommage ! C'est une égalité </h2>
        <button className="button" onClick={prevent(onRestart)}>Rejouer</button>
    </div>
}