import { generateOrdinal } from "./generateOrdinal";
import { checkFinite } from "./checkFinite";
import { checkSafeNumber } from "./checkSafeNumber";
import { CONST } from "./constant";

function toWordString(number: string | number | any, toOrdinal: boolean = false): string {
    var words;
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!checkSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = _generateWordString(num);
    return toOrdinal ? generateOrdinal(words) : words;
}

function _generateWordString(number: number, arg: any = []): string {
    var remainder, word,
        words = arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = CONST.LESS_THAN_TWENTY[number];

    } else if (number < CONST.ONE_HUNDRED) {
        remainder = number % CONST.TEN;
        word = CONST.TENTHS_LESS_THAN_HUNDRED[Math.floor(number / CONST.TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + CONST.LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < CONST.ONE_THOUSAND) {
        remainder = number % CONST.ONE_HUNDRED;
        word = _generateWordString(Math.floor(number / CONST.ONE_HUNDRED)) + ' hundred';

    } else if (number < CONST.ONE_MILLION) {
        remainder = number % CONST.ONE_THOUSAND;
        word = _generateWordString(Math.floor(number / CONST.ONE_THOUSAND)) + ' thousand,';

    } else if (number < CONST.ONE_BILLION) {
        remainder = number % CONST.ONE_MILLION;
        word = _generateWordString(Math.floor(number / CONST.ONE_MILLION)) + ' million,';

    } else if (number < CONST.ONE_TRILLION) {
        remainder = number % CONST.ONE_BILLION;
        word = _generateWordString(Math.floor(number / CONST.ONE_BILLION)) + ' billion,';

    } else if (number < CONST.ONE_QUADRILLION) {
        remainder = number % CONST.ONE_TRILLION;
        word = _generateWordString(Math.floor(number / CONST.ONE_TRILLION)) + ' trillion,';

    } else if (number <= CONST.MAX) {
        remainder = number % CONST.ONE_QUADRILLION;
        word = _generateWordString(Math.floor(number / CONST.ONE_QUADRILLION)) +
            ' quadrillion,';
    }

    words.push(word);
    return _generateWordString(remainder ?? 0, words);
}

export { toWordString };