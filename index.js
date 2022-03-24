// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat() {
    const moreCats = [...cats, "Broom"]
    return moreCats;
}

function prependCat() {
    const moreCats = ["Arnold", ...cats]
    return moreCats;
}

function removeLastCat() {
    const twoCats = cats.slice(0, 2);
    return twoCats;
}

function removeFirstCat() {
    const twoCats = cats.slice(1);
    return twoCats;
}