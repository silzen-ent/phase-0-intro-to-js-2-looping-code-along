// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);   
}

console.clear();

////////////


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts;
}
wrapGifts(gifts);

console.clear();

/////////////////////////////////

function writeCards(names, event) {
    let messages = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
      debugger
    }
    return messages;
  }
  // Example usage:
const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(result);

////////////////////////////////

function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
        console.log(countDown);
    }
}

