import { CONST } from "./constant";

function checkSafeNumber(value: number): boolean {
    return typeof value === 'number' && Math.abs(value) <= CONST.MAX_SAFE_NUMBER;
}
export { checkSafeNumber };