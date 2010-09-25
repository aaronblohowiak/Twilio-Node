var libxml = require('libxmljs');

function Response(builderFn){
  var doc = new libxml.Document(function(xml){
    builderFn(decorate(xml));
  });

  return doc.toString();
}


function decorate(doc){
  return new Builder(doc);
};

function Builder(doc){
  this.doc = doc;
}

var slice = Array.prototype.slice;

function responseDslFunction(name){
  //refactor this to use fn.call ....
  return function(){
  
  var args = slice.call( arguments, 0 );
  var text, attrs, fn, nodeParams = [name];
  var len = args.length;

  for(var i=0; i < len; i++){
    if(typeof(args[i]) == "String"){
      noun = args[i];
    }
  }

  if(attributes){
      this.doc.node(name, attributes, noun);
    }else if(noun){
      this.doc.node(name, noun);
    }else{
      this.doc.node(name);
    }
  }
}

Builder.prototype.Say = responseDslFunction("Say");

module.exports.Response = Response;
