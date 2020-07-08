var count = 0;

function cc(card) {
    // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        return count++;
    } else if (card == 7 || card == 8 || card == 9) {
        return count = count + 0;
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        return count--;
    } else if (card == null) {
        return count = count;
    }
    // Only change code above this line
}

console.log(cc());
console.log(cc(2));
console.log(cc(2));
console.log(cc(3));
console.log(cc(8));
console.log(cc());
console.log(cc(9));
console.log(cc());
console.log(cc(10));
console.log(cc("A"));
console.log(cc());
console.log(cc());



cc(3);
cc(7);
cc('K');
cc('A');