(function () {
    var customerIdInput = document.getElementById("customerId");
    var searchButton = document.getElementById("searchButton");
    var result = document.getElementById("result");
    var webWorker = new Worker("worker.js");
    webWorker.onmessage = function (event) {
        var li = document.createElement("li");
        li.textContent = event.data;
        result.appendChild(li);
    };
    searchButton.addEventListener("click", function () {
        var id = customerIdInput.value;
        webWorker.postMessage(id);
    });
})();
