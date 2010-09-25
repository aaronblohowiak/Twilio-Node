test = {};
module.exports = test;

var Response = require('../lib/twilio/response').Response;

test["should produce xml"] = function(assert){
  var greeting = "Hello. This is a call from the Twilio voicemail transcription demo. Please leave a voicemail after the beep, and remember to speak clearly.";
  var str = Response(function(xml){
    xml.say(greeting);
    xml.record({transcribe:"true", transcribeCallback:"http://...", action:"goodbye.php", maxLength: 30})
  })

  console.log(str)
  assert.isDefined(str)
}

/*<Response>
    <Say>Hello. This is a call from the Twilio voicemail transcription demo.
Please leave a voicemail after the beep, and remember to speak clearly.</Say>
    <Record transcribe="true" transcribeCallback="<?php 
        echo "transcribed.php?email=".urlencode($_REQUEST['email']); ?>"        
        action="goodbye.php" maxLength="30" />
</Response>
*/


test["should be able to handle nested xml objects"] = function(assert){
  var greeting = "Enter something, or not";
  var path = "/process_gather.php?Digits=TIMEOUT";
  
  var str = Response(function(xml){
    xml.gather({action: "/process_gather.php", method:"GET"}, function(xml){
      xml.say(greeting);
    });
    
    xml.redirect({method:"GET"}, path);
  })

  console.log(str)
  assert.isDefined(str)
}

/*<?xml version="1.0" encoding="UTF-8"?>
<!-- page located at http://example.com/gather_hints.xml -->
<Response>
    <Gather action="/process_gather.php" method="GET">
        <Say>Enter something, or not</Say>
    </Gather>
    <Redirect method="GET">
        /process_gather.php?Digits=TIMEOUT
    </Redirect>
</Response>
*/
