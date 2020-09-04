for (let i = 0; i < 10; i++) {
    console.log(i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

console.log("Review average: " + total / reviews.length);

for (let num of reviews) {
    if (num == 1) {
        console.log(num + " Here is the number 1");
    } else {
        console.log(num);
    }
}

// Add to array -- push()
reviews.push(10);