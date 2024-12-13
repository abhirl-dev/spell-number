function checkFinite(value: number): boolean {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

export { checkFinite };