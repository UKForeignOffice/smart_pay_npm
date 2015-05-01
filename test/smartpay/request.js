var should = require('should'),
    SmartPay = require('./../../lib/smart_pay'),
    sharedKey,
    parameters;

describe("SmartPay.Request", function () {
  before(function () {
    sharedKey =  "Kah942*$7sdp0)";
    parameters = {
      paymentAmount : 10000,
      currencyCode : "GBP",
      shipBeforeDate : "2007-10-20",
	  merchantReference : "Internet Order 12345",
      skinCode : "4aD37dJA",
      merchantAccount : "TestMerchant",
	  sessionValidity : "2007-10-11T11:00:00Z",
	  shopperEmail : "test@test.com",
      shopperReference : "",
      allowedMethods : "",
      blockedMethods : "",
      shopperStatement : "",
	  billingAddressType : "",
	  merchantReturnData : "AbCdEFGhIJklmnopQRstUVWxyZ"
    };
  });
  it("should calculate the correct hmac signature", function () {
    var request = new SmartPay.Request(sharedKey, parameters);
    request.hmacSignature().should.equal("QQFRPiyuqUVWN753NB+gh3V6JFs=");
  });
  it("should use the appropriate request url", function () {
    SmartPay.testMode = true;
    new SmartPay.Request(sharedKey, parameters).requestUrl().should.equal(SmartPay.Request.TEST_URL);
    SmartPay.testMode = false;
    new SmartPay.Request(sharedKey, parameters).requestUrl().should.equal(SmartPay.Request.LIVE_URL);
  });
});
