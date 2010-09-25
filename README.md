# Twilio API for Node

Supports using Twilio API in Node.JS projects.

## Example

### Code

      var greeting = "Enter something, or not";
      var path = "/process_gather.php?Digits=TIMEOUT";
  
      var str = Response(function(xml){
        xml.gather({action: "/process_gather.php", method:"GET"}, function(xml){
          xml.say(greeting);
        });
    
        xml.redirect({method:"GET"}, path);
      })

### Produces

      <?xml version="1.0" encoding="UTF-8"?>
      <Response>
          <Gather action="/process_gather.php" method="GET">
              <Say>Enter something, or not</Say>
          </Gather>
          <Redirect method="GET">
              /process_gather.php?Digits=TIMEOUT
          </Redirect>
      </Response>

### Why?
I wrote this because http://github.com/guille/node.twilio.js did not work with the latest node and required restler, which contains GPL software.

### LICENSE

Copyright (c) 2010 Aaron Blohowiak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.