"use strict";

(
    function () {
        var worker = new Worker("fibonacci.js");
        worker.addEventListener("message", function (eventData) {
            var result = eventData.data;
            log(result);
        })

        log("Counting fibonacci 150 number.");

        worker.postMessage(6);

    }

)()

function log(message) {
    console.log(message);
}