var HmacCalculator = require('./hmac_calculator'),
    SmartPay = require('./../smart_pay'),
    ORDERED_PARAM_KEYS = [
      'payment_amount', 'currency_code', 'ship_before_date', 'merchant_reference',
      'skin_code', 'merchant_account', 'session_validity', 'shopper_email', 'shopper_reference',
      'allowed_methods', 'blocked_methods', 'shopper_statement', 'billing_address_type'
    ];


var Request = function (sharedKey, parameters) {
  this.sharedKey = sharedKey;
  this.parameters = SmartPay.orderedParameters(ORDERED_PARAM_KEYS, parameters);
};

Request.TEST_URL = 'https://test.barclaycardsmartpay.com/hpp/pay.shtml';
Request.LIVE_URL = 'https://live.barclaycardsmartpay.com/hpp/pay.shtml';


Request.prototype.hmacSignature = function () {
  return new HmacCalculator(this.sharedKey, this.parameters).signature();
};

Request.requestUrl = function () {
  return SmartPay.testMode ? Request.TEST_URL : Request.LIVE_URL;
};

module.exports = Request;
