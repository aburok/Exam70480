interface Customer {
    Id: number;
    Firstname: string;
    Lastname: string;
    Street: string;
    City: string;
}

(() => {
    var customerIdInput = <HTMLInputElement>document.getElementById("customerId");
    var searchButton = document.getElementById("searchButton");
    var result = document.getElementById("result");

    var webWorker = new Worker("worker.js");
    webWorker.onmessage = (event) => {
        var li = document.createElement("li");
        li.textContent = event.data;
        result.appendChild(li);
    }

    searchButton.addEventListener("click", () => {
        var id = customerIdInput.value;

        webWorker.postMessage(id);
    })
})()
