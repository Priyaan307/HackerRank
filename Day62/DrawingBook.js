function pageCount(n, p) {
    const turnsFromFront = Math.floor(p / 2);
const turnsFromBack = Math.floor((n / 2) - (p / 2));
return Math.min(turnsFromFront, turnsFromBack);
}
console.log(pageCount(6, 2));
