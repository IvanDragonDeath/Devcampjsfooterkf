'use strict';

var moment = require('moment');

@paran {string} name
@return {string}

exports.footer = function (name) {
    return "Copyright" + moment ().format('YYYY') + " " + name + " All rights reserved";
};