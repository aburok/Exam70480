(
    function () {
        this.addEventListener("message", onMessage);
    }
)()

function onMessage(eventData) {
    var data = eventData.data;

    var result = fibonacci(data);

    this.postMessage(result);
}

function fibonacci(number) {
    var temp = 0;
    var prevNumber = 0;
    var currentNumber = 1;

    if (number == 0)
        return 0;

    for (var index = 2; index <= number; index++) {
        temp = currentNumber + prevNumber;
        prevNumber = currentNumber;
        currentNumber = temp;
    }

    return currentNumber;
}