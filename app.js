"use strict";
let yourName = prompt("enter your name ")
let yourMark = prompt(" enter your mark" + "  " + yourName)
let x = Math.floor(yourMark)

let result = function () {
    if (x >= 0 && x <= 49) {
        let result1 = alert("the result F" + "  " + "failed")
    }
    if (x >= 50 && x <= 60) {
        let result1 = alert("the result D" + "  " + "Pass")
    }

    if (x >= 61 && x <= 70) {
        let result1 = alert("the result C" + "  " + "Pass")
    }

    if (x >= 71 && x <= 80) {
        let result1 = alert("the result B" + "  " + "Pass")

    }

    if (x >= 81 && x <= 90) {
        let result1 = alert("the result A" + "  " + "Pass")

    }
    if (x >= 91 && x <= 100) {
        let result1 = alert("the result A+" + "  " + "Pass")

    }

    if (x < 0 || x > 100) {
        let result1 = alert("the result invalid ")

    }
}
result();

