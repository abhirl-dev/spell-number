import { PATTERN } from "./constant";

const ordinalLessThanThirteen: any = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

function generateOrdinal(words: string): string {

    if (PATTERN.ENDS_WITH_DOUBLE_ZERO.test(words) || PATTERN.ENDS_WITH_TEEN.test(words)) {
        return words + 'th';
    }

    else if (PATTERN.ENDS_WITH_Y.test(words)) {
        return words.replace(PATTERN.ENDS_WITH_Y, 'ieth');
    }

    else if (PATTERN.ENDS_WITH_ZERO_THROUGH_TWELVE.test(words)) {
        return words.replace(PATTERN.ENDS_WITH_ZERO_THROUGH_TWELVE, _replaceWithOrdinalVariant);
    }
    return words;
}

function _replaceWithOrdinalVariant(match: string, numberWord: any): string {
    return ordinalLessThanThirteen[numberWord];
}

export { generateOrdinal };