var SmartPay = require('./../../lib/smart_pay'),
    should = require('should'),
    sharedKey,
    parameters;

describe("SmartPay.Response", function () {
  before(function () {
    SmartPay.testMode = true;
    sharedKey = "Kah942*$7sdp0)";
    parameters = {
      merchant_reference : "Internet Order 12345",
      skin_code : "4aD37dJA",
      shopper_locale : "en_GB",
      auth_result : "AUTHORISED",
      psp_reference : "1211992213193029",
      merchant_sig : "ytt3QxWoEhAskUzUne0P5VA9lPw="
    };
  });
  it("should verify the response parameters", function () {
    new SmartPay.Response(sharedKey, parameters).verified().should.be.ok;
  });
});
