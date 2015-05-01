var SmartPay = require('./../../lib/smart_pay'),
    should = require('should'),
    sharedKey,
    parameters;

describe("SmartPay.Response", function () {
  before(function () {
    SmartPay.testMode = true;
    sharedKey = "Kah942*$7sdp0)";
    parameters = {
      authResult : "AUTHORISED",
	  pspReference : "1211992213193029",
	  merchantReference : "Internet Order 12345",
      skinCode : "4aD37dJA",
	  merchantReturnData : "AbCdEFGhIJklmnopQRstUVWxyZ",
      merchantSig : "97Bn5omZKz9MKunOnroMXa9OxVE="
    };
  });
  it("should verify the response parameters", function () {
    new SmartPay.Response(sharedKey, parameters).verified().should.be.ok;
  });
});
