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
  
    var args = slice.call( arguments);
    args.unshift(name);
    var len = args.length;

    var fn;
 
    if(typeof(args[len-1]) == "function"){
      fn = args.pop();
      args.push( function(n){ fn(decorate(n)) }); 
    }

    this.doc.node.apply(this.doc, args);
  }
}

(function setupVerbsOnBuilder(){
  var verbs = "Say Play Gather Record Sms Dial Number Conference";
  verbs = verbs + " Hangup Redirect Reject Pause";
  verbs = verbs.split(" ");

  var verb = "";

  for(var i = verbs.length - 1; i > -1; i--){
    verb = verbs[i];
    Builder.prototype[verb.toLowerCase()] = responseDslFunction(verb) 
  }
})();

console.log(Builder.prototype);
module.exports.Response = Response;
