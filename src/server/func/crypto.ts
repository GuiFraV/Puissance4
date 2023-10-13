import * as Cryoto from 'crypto'

const algo = "SHA256"

export function sign(
    str: string
): string {

    Crypto.sign(algo, str,)
}

export function verify(
    str: string
): boolean {

}