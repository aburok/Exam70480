
import ko = require("knockout")
import $ = require("jQuery")

// define( function(){
//     var $ = require("jQuery");

// })
(function () {
    $(document).ready(function () {
        var viewModel = new listViewModel();

        ko.applyBindings(viewModel);

    })
})()