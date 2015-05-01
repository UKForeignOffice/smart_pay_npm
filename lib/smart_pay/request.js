var HmacCalculator = require('./hmac_calculator'),
    SmartPay = require('./../smart_pay'),
    ORDERED_PARAM_KEYS = [
      'paymentAmount', 'currencyCode', 'shipBeforeDate', 'merchantReference',
      'skinCode', 'merchantAccount', 'sessionValidity', 'shopperEmail', 'shopperReference',
      'allowedMethods', 'blockedMethods', 'shopperStatement', 'billingAddressType', 'merchantReturnData'
    ];


var Request = function (sharedKey, parameters) {
  this.sharedKey = sharedKey;
  this.parameters = SmartPay.orderedParameters(ORDERED_PARAM_KEYS, parameters);
};

Request.TEST_URL = 'https://test.barclaycardsmartpay.com/hpp/select.shtml';
Request.LIVE_URL = 'https://live.barclaycardsmartpay.com/hpp/select.shtml';


Request.prototype.hmacSignature = function () {
  return new HmacCalculator(this.sharedKey, this.parameters).signature();
};

Request.prototype.requestUrl = function () {
  return SmartPay.testMode ? Request.TEST_URL : Request.LIVE_URL;
};

module.exports = Request;
