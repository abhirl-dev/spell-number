import { checkFinite } from "./checkFinite";
import { checkSafeNumber } from "./checkSafeNumber";

function toOrdinalString(number: string | number | any): string {
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
    var str = String(num);
    var lastTwoDigits = Math.abs(num % 100);
    var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    var lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
        : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
                : lastChar === '3' ? 'rd'
                    : 'th');
}

export { toOrdinalString };