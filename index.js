// Code your solutions in this file

function writeCards(names, events) {
    const cards = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        cards.push(message)
    }
    return cards;
}


function countDown(num) {
    let i = num
    while (i >= 0) {
        console.log(i--)
    }
    
}
