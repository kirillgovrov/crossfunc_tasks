function main(score) {
    if (score>100) {
        console.log("Score is more than 100, please input from 0 to 100");
    } else if (score>=90) {
        console.log("Your score is A(100-90)");
    } else if (score>=80) {
        console.log("Your score is B(89-80)");
    } else if (score>=70) {
        console.log("Your score is C(79-70)");
    } else if (score>=60) {
        console.log("Your score is D(69-60)");
    } else {
        console.log("Your score is F(below 60)");
    }
}

let num1 = main(57);
let num2 = main(88);