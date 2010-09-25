test = {};
module.exports = test;

var Response = require('../lib/twilio/response').Response;

test["should produce xml"] = function(assert){
  str = Response(function(xml){
    xml.Say("hiii", {a:"hi"}, function(xml){
      xml.Gather();
    });
  })

  assert.isDefined(str)
}
