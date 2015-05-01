var HmacCalculator = require('./hmac_calculator'),
    SmartPay = require('./../smart_pay'),
    ORDERED_PARAM_KEYS = ['authResult', 'pspReference', 'merchantReference',
      'skinCode', 'merchantReturnData'];

var Response = function (sharedKey, parameters) {
  this.sharedKey = sharedKey;
  if (typeof parameters['merchantSig'] == 'undefined') {
    throw new Error("Response signature not found");
  }
  this.merchantSignature = parameters['merchantSig'];
  delete parameters['merchantSig'];
  this.parameters = SmartPay.orderedParameters(ORDERED_PARAM_KEYS, parameters);
}

Response.prototype.verified = function () {
  return new HmacCalculator(this.sharedKey, this.parameters).verify(this.merchantSignature);
};

module.exports = Response;
