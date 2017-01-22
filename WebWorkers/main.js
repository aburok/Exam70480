"use strict";

// IIFE - Immidiately Invoked Function Expresion
(function () {
    console.log('Starting our main script');

    var webWorker = new Worker('webWorker.js');

    webWorker.onmessage = function (data) {
        console.log('Web Worker output ' + data);

    }

    console.log('Starting web workerby posting a message to it');
    webWorker.postMessage('czas zaczynac');

    console.log('End of the main script');
})()