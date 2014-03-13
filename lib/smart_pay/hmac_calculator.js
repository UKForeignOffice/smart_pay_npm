var crypto = require('crypto');

var HmacCalculator = function (psk, params) {
  if (typeof psk === 'undefined' || psk.length < 1) {
    throw new Error("psk is missing or empty");
  }
  this.psk = psk;
  this.params = params;
  this.hmac = crypto.createHmac('sha1', this.psk);
  this.hmac.update(this.params.join(''));
};

HmacCalculator.prototype.signature = function () {
  return this.hmac.digest('base64');
};

HmacCalculator.prototype.verify = function (merchantSignature) {
  return (this.signature() === merchantSignature);
};

module.exports = HmacCalculator;
