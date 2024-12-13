import { generateOrdinal } from "./generateOrdinal";
import { toWordString } from "./toWordString";

function toWordOrdinalString(number: number | string | any): string {
    var words = toWordString(number);
    return generateOrdinal(words);
}

export { toWordOrdinalString };