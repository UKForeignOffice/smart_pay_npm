var should = require('should'),
    SmartPay = require('./../../lib/smart_pay'),
    sharedKey,
    parameters;

describe("SmartPay.Request", function () {
  before(function () {
    sharedKey =  "Kah942*$7sdp0)";
    parameters = {
      merchant_reference : "Internet Order 12345",
      payment_amount : 10000,
      currency_code : "GBP",
      ship_before_date : "2007-10-20",
      skin_code : "4aD37dJA",
      merchant_account : "TestMerchant",
      shopper_locale : "en_GB",
      order_data : "H4sIAAAAAAAAALMpsOPlCkssyswvLVZIz89PKVZIzEtRKE4tKstMTi3W4+Wy0S+wAwDOGUCXJgAAAA==",
      session_validity : "2007-10-11T11:00:00Z",
      merchant_signature : "yARtfsxD47jeXzOlEyZ0j3pg="
    };
  });
  it("should calculate the correct hmac signature", function () {
    var request = new SmartPay.Request(sharedKey, parameters);
    request.hmacSignature().should.equal("x58ZcRVL1H6y+XSeBGrySJ9ACVo=");
  });
  it("should use the appropriate request url", function () {
    SmartPay.testMode = true;
    SmartPay.Request.requestUrl().should.equal(SmartPay.Request.TEST_URL);
    SmartPay.testMode = false;
    SmartPay.Request.requestUrl().should.equal(SmartPay.Request.LIVE_URL);
  });
});
