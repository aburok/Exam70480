(function(){
    var greeting = "Hello from the webWorker";

    this.addEventListener("message", function(event){
        console.log(event.data);
        this.postMessage(greeting + " " + event.data);
    });

})()