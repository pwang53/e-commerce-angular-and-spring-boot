for (var i = 0; i < 10; i++) {
    console.log(i);
}
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log("Review average: " + 1 / reviews.length);
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var num = reviews_1[_i];
    if (num == 1) {
        console.log(num + " Here is the number 1");
    }
    else {
        console.log(num);
    }
}
// Add to array -- push()
reviews.push(10);
