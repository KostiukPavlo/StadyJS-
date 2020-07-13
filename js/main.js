function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) {
        return console.log(obj[checkProp]);
    } else {
        return console.log("Not Found");
    }


    return "Change Me!";
    // Only change code above this line
}


checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gift");
checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gif");
checkObj({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "pet")