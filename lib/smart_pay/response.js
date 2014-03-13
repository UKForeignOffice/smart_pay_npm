var HmacCalculator = require('./hmac_calculator'),
    SmartPay = require('./../smart_pay'),
    ORDERED_PARAM_KEYS = ['auth_result', 'psp_reference', 'merchant_reference',
      'skin_code', 'merchant_return_data'];

var Response = function (sharedKey, parameters) {
  this.sharedKey = sharedKey;
  if (typeof parameters['merchant_sig'] == 'undefined') {
    throw new Error("Response signature not found");
  }
  this.merchantSignature = parameters['merchant_sig'];
  delete parameters['merchant_sig'];
  this.parameters = SmartPay.orderedParameters(ORDERED_PARAM_KEYS, parameters);
}

Response.prototype.verified = function () {
  return new HmacCalculator(this.sharedKey, this.parameters).verify(this.merchantSignature);
};

module.exports = Response;
