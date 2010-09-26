exports.response = require('./response');
exports.request = require('./request');

/*
var libxml = require('libxmljs');

var str = '<?xml version="1.0" encoding="UTF-8" ?><Response><Say>Hello World</Say></Response>';
var doc = libxml.parseXmlString(str);

var children = doc.childNodes();
var child = null;
var name = null;
for(var i = 0; i < children.length; i++){
  child = children[i];
  name = child.name();
  if(name == "Say"){
   //...//
  }
}
*/
