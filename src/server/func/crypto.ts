import * as Cryoto from 'crypto'
import { readFileSync } from 'fs'

const algo = "SHA256"
const privateKey = readFileSync('privatekey.pem')

export function sign(
    str: string
): string {

    Crypto.sign(algo, Buffer.from(str), privateKey)
}

export function verify(
    str: string
): boolean {

}