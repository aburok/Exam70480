self.addEventListener("message", function onMessage(eventData) {
    var result;
    var data = eventData.data;
    var request = new XMLHttpRequest();
    request.open("GET", "http://www.thomas-bayer.com/sqlrest/CUSTOMER/" + data + "/");
    // Headers can only be set when the request state is OPENED
    // so after open methods
    request.setRequestHeader("Content-Type", "text/json");
    // request.setRequestHeader("Access-Control-Allow-Origin", "*");
    // request.setRequestHeader("Access-Control-Allow-Methods", "GET");
    // request.setRequestHeader("Access-Control-Allow-Headers", "Origin");
    // 
    request.onreadystatechange = function (e) {
        if (request.readyState == 4) {
            result = request.response;
            if (request.status == 200) {
                result = request.response;
                self.postMessage(result, location.href);
                self.close();
            }
            else {
                console.error("Error response " + request.status);
            }
        }
    };
    request.onerror = function (error) {
        console.error(error);
    };
    request.send();
});
