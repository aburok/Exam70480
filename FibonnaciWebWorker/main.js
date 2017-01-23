"use strict";

(
    function () {
        var result = document.getElementById("result");
        var input = document.getElementById("fibonacciNumber");

        input.addEventListener("keyup", function () {
            if (this.value) {
                var number = parseInt(this.value);
                countFibonacci(number, displayResult)
            }
        })
    }
)()

function displayResult(data) {
    var div = document.createElement("div");
    div.innerText = data;
    result.appendChild(div);
}

function countFibonacci(number, callback) {
    var worker = new Worker("fibonacci.js");
    worker.addEventListener("message", function (eventData) {
        var result = eventData.data;
        log(result);
        callback(result);
    })

    log("Counting fibonacci " + number + " number.");

    worker.postMessage(number);
}

function log(message) {
    console.log(message);
}