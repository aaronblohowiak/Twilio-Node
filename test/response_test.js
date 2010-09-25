test = {};
module.exports = test;

var Response = require('../lib/twilio/response').Response;

test["should produce xml"] = function(assert){
  var str = Response(function(xml){
    xml.say( {a:"hi"}, function(xml){
     xml.gather();
    });
  })


  console.log(str)
  assert.isDefined(str)
}
