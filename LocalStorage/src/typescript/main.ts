import * as jquery from 'jquery';

import ko = require("knockout")

// define( function(){
//     var $ = require("jQuery");

// })
(function () {
    jquery(document).ready(function () {
        var viewModel = new listViewModel();

        ko.applyBindings(viewModel);
    })
})()