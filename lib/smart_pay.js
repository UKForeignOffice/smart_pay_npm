var Request = require('./smart_pay/request'),
    Response = require('./smart_pay/response'),
    ORDERED_PARAM_KEYS = [
      'payment_amount', 'currency_code', 'ship_before_date', 'merchant_reference',
      'skin_code', 'merchant_account', 'session_validity', 'shopper_email', 'shopper_reference',
      'allowed_methods', 'blocked_methods', 'shopper_statement', 'billing_address_type'
    ];

exports.testMode = false;
exports.orderedParameters = function (parameters) {
  var ordered = [], value;

  ORDERED_PARAM_KEYS.forEach(function (key) {
    if (typeof (value = parameters[key]) !== 'undefined') {
      ordered.push(value);
    }
  });
  return ordered;
};
exports.Request = Request;
