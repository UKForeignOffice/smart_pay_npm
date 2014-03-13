var HmacCalculator = require('./hmac_calculator'),
    SmartPay = require('./../smart_pay');

var Request = function (sharedKey, parameters) {
  this.sharedKey = sharedKey;
  this.parameters = SmartPay.orderedParameters(parameters);
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
