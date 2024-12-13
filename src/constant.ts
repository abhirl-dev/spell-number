const CONST = {
    MAX_SAFE_NUMBER: 9007199254740991,

    TEN: 10,
    ONE_HUNDRED: 100,
    ONE_THOUSAND: 1000,
    ONE_MILLION: 1000000,
    ONE_BILLION: 1000000000,
    ONE_TRILLION: 1000000000000,
    ONE_QUADRILLION: 1000000000000000,
    MAX: 9007199254740992,

    LESS_THAN_TWENTY: [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ],

    TENTHS_LESS_THAN_HUNDRED: [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ],
};

const PATTERN = {
    ENDS_WITH_DOUBLE_ZERO: /(hundred|thousand|(m|b|tr|quadr)illion)$/,
    ENDS_WITH_TEEN: /teen$/,
    ENDS_WITH_Y: /y$/,
    ENDS_WITH_ZERO_THROUGH_TWELVE: /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,
};

export { CONST, PATTERN };