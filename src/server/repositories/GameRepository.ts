import { InterpreterFrom, interpret } from "xstate";
import { ConnectionRepository } from "./ConnectionRepository";
import { GameMachine } from "../../machine/GameMachine";
import { publishMachineToPlayers } from "../func/socket";

type Machine = InterpreterFrom<typeof GameMachine>

export class GameRepository {
    constructor(
        private connections: ConnectionRepository,
        private games = new Map<string, Machine>
    ) {
    }

    create(id: string): Machine {
        const game = interpret(GameMachine)
            .onTransition((state) => {
                if (state.changed) {
                    publishMachineToPlayers(state, this.connections, id)
                }
            })
            .start()
        this.games.set(id, game)
        return game
    }

    find(id: string): Machine | undefined {
        return this.games.get(id)
    }

    clean(id: string) {
        const game = this.games.get(id)
        if (
            game &&
            game.state.context.players.filter(p => this.connections.has(p.id, id)).length === 0
        ) {
            this.games.delete(id)
        }
    }
}