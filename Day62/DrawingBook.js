// function pageCount(n, p) {
//     const turnsFromFront = Math.floor(p / 2);
// const turnsFromBack = Math.floor((n / 2) - (p / 2));
// return Math.min(turnsFromFront, turnsFromBack);
// }
// console.log(pageCount(6, 2));


function pageCount(n, p) {
    let turnsFromFront = 0;
    let turnsFromBack = 0;
  
    // Calculate turns from front
    for (let i = 0; i <= p; i += 2) {
      if (i === p || i + 1 === p) {
        break;
      }
      turnsFromFront++;
    }
  
    // Calculate turns from back
    for (let i = n; i >= p; i -= 2) {
      if (i === p || i - 1 === p) {
        break;
      }
      turnsFromBack++;
    }
  
    return Math.min(turnsFromFront, turnsFromBack);
  }
  
  console.log(pageCount(6, 2));
  