var Request = require('./smart_pay/request'),
    Response = require('./smart_pay/response');

exports.testMode = false;
exports.orderedParameters = function (orderedKeys, parameters) {
  var ordered = [], value;

  orderedKeys.forEach(function (key) {
    if (typeof (value = parameters[key]) !== 'undefined') {
      ordered.push(value);
    }
  });
  return ordered;
};
exports.Request = Request;
