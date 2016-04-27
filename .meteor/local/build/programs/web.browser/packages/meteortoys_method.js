//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ToyKit, MeteorToys, name, data, backup, mCallback, params;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteortoys_method/ToyKit/main.js                                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _0x3e7b=["\x4D\x65\x74\x68\x6F\x64","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64","\x69\x73\x43\x6C\x69\x65\x6E\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x46\x6F\x72\x20\x74\x68\x65\x20","\x6E\x61\x6D\x65","\x20\x74\x6F\x79\x20\x74\x6F\x20\x77\x6F\x72\x6B\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x4D\x6F\x6E\x67\x6F\x6C\x20\x6F\x72","\x6C\x6F\x67","\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E\x20\x47\x72\x61\x62\x20\x74\x68\x65\x20\x66\x72\x65\x65\x20\x65\x64\x69\x74\x69\x6F\x6E\x20\x61\x74\x20\x68\x74\x74\x70\x3A\x2F\x2F\x4D\x65\x74\x65\x6F\x72\x2E\x54\x6F\x79\x73\x2F","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x61\x6C\x6C","\x6D\x65\x74\x68\x6F\x64\x73","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72","\x73\x70\x6C\x69\x63\x65","\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x6C\x6F\x67\x6F\x75\x74\x4F\x74\x68\x65\x72\x43\x6C\x69\x65\x6E\x74\x73","\x72\x65\x6D\x6F\x76\x65\x4F\x74\x68\x65\x72\x54\x6F\x6B\x65\x6E\x73","\x63\x6F\x6E\x66\x69\x67\x75\x72\x65\x4C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65","\x2F","\x6C\x6F\x67\x69\x6E","\x6C\x6F\x67\x6F\x75\x74","\x67\x65\x74\x4E\x65\x77\x54\x6F\x6B\x65\x6E","\x63\x68\x61\x6E\x67\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x66\x6F\x72\x67\x6F\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x76\x65\x72\x69\x66\x79\x45\x6D\x61\x69\x6C","\x63\x72\x65\x61\x74\x65\x55\x73\x65\x72","\x72\x65\x73\x65\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x75\x70\x64\x61\x74\x65","\x6D\x65\x74\x68\x6F\x64\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x73\x65\x72\x76\x65\x72","\x6D\x61\x74\x63\x68","\x28","\x69\x6E\x64\x65\x78\x4F\x66","\x29","\x73\x6C\x69\x63\x65"];ToyKit={name:_0x3e7b[0],version:_0x3e7b[1],template:_0x3e7b[2]};if(Meteor[_0x3e7b[3]]){if(Package[_0x3e7b[4]]){MeteorToys=Package[_0x3e7b[4]][_0x3e7b[5]]}else {MeteorToys={};console[_0x3e7b[9]](_0x3e7b[6]+ToyKit[_0x3e7b[7]]+_0x3e7b[8]);console[_0x3e7b[9]](_0x3e7b[10]);}};if(Meteor[_0x3e7b[11]]){Meteor[_0x3e7b[13]]({MeteorToy_4:function(_0x9c62x1){check(argument,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};var _0x9c62x5=Object[_0x3e7b[14]](Meteor[_0x3e7b[13]]);var _0x9c62x6=function(_0x9c62x7,_0x9c62x8){var _0x9c62x9=_0x9c62x8[_0x3e7b[15]];for(var _0x9c62xa=0;_0x9c62xa<_0x9c62x7[_0x3e7b[15]];_0x9c62xa++){if(_0x9c62x7[_0x9c62xa][_0x3e7b[16]](0,_0x9c62x9)===_0x9c62x8){_0x9c62x7[_0x3e7b[17]](_0x9c62xa,1);_0x9c62xa--;}};return _0x9c62x7;};_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[18]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[19]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[20]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[21]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[22]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[23]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[24]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[25]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[26]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[27]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[28]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[29]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[30]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[31]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[32]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[33]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[34]);return _0x9c62x5;},MeteorToys_x:function(_0x9c62xb){check(_0x9c62xb,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};var _0x9c62x5=Object[_0x3e7b[14]](Meteor[_0x3e7b[36]][_0x3e7b[35]]);var _0x9c62x6=function(_0x9c62x7,_0x9c62x8){var _0x9c62x9=_0x9c62x8[_0x3e7b[15]];for(var _0x9c62xa=0;_0x9c62xa<_0x9c62x7[_0x3e7b[15]];_0x9c62xa++){if(_0x9c62x7[_0x9c62xa][_0x3e7b[16]](0,_0x9c62x9)===_0x9c62x8){_0x9c62x7[_0x3e7b[17]](_0x9c62xa,1);_0x9c62xa--;}};return _0x9c62x7;};_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[18]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[19]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[20]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[21]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[22]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[23]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[24]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[25]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[26]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[27]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[28]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[29]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[30]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[31]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[32]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[33]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[34]);return _0x9c62x5;},MeteorToy_y:function(_0x9c62xc){check(_0x9c62xc,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};function _0x9c62xd(_0x9c62xe){var _0x9c62xf=_0x9c62xe.toString();return _0x9c62xf[_0x3e7b[41]](_0x9c62xf[_0x3e7b[39]](_0x3e7b[38])+1,_0x9c62xf[_0x3e7b[39]](_0x3e7b[40]))[_0x3e7b[37]](/([^\s,]+)/g);}var _0x9c62x10=String(Meteor[_0x3e7b[36]][_0x3e7b[35]][_0x9c62xc]),_0x9c62x11=_0x9c62xd(_0x9c62x10);return _0x9c62x11;}})};
                                                                                                                // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteortoys_method/client/template.main.js                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
                                                                                                                // 1
Template.__checkName("MeteorToys_Method");                                                                      // 2
Template["MeteorToys_Method"] = new Template("Template.MeteorToys_Method", (function() {                        // 3
  var view = this;                                                                                              // 4
  return Blaze._TemplateWith(function() {                                                                       // 5
    return {                                                                                                    // 6
      name: Spacebars.call("MeteorToys_Method")                                                                 // 7
    };                                                                                                          // 8
  }, function() {                                                                                               // 9
    return Spacebars.include(view.lookupTemplate("MeteorToy"), function() {                                     // 10
      return [ Spacebars.include(view.lookupTemplate("MeteorToys_Method_header")), Spacebars.include(view.lookupTemplate("MeteorToys_Method_content")) ];
    });                                                                                                         // 12
  });                                                                                                           // 13
}));                                                                                                            // 14
                                                                                                                // 15
Template.__checkName("MeteorToys_Method_header");                                                               // 16
Template["MeteorToys_Method_header"] = new Template("Template.MeteorToys_Method_header", (function() {          // 17
  var view = this;                                                                                              // 18
  return HTML.DIV({                                                                                             // 19
    "class": "MeteorToys_Method_header MeteorToys-background-overlay1"                                          // 20
  }, HTML.DIV({                                                                                                 // 21
    "class": function() {                                                                                       // 22
      return [ "MeteorToys_Method_button MeteorToys_action ", Spacebars.mustache(view.lookup("displayable")) ];
    }                                                                                                           // 24
  }, "Cancel"), HTML.Raw("<strong>Method</strong>"));                                                           // 25
}));                                                                                                            // 26
                                                                                                                // 27
Template.__checkName("MeteorToys_Method_content");                                                              // 28
Template["MeteorToys_Method_content"] = new Template("Template.MeteorToys_Method_content", (function() {        // 29
  var view = this;                                                                                              // 30
  return HTML.DIV({                                                                                             // 31
    "class": "MeteorToys_Method_content"                                                                        // 32
  }, HTML.DIV({                                                                                                 // 33
    "class": function() {                                                                                       // 34
      return [ "MeteorToys_Method_contents ", Spacebars.mustache(view.lookup("position")) ];                    // 35
    }                                                                                                           // 36
  }, HTML.DIV({                                                                                                 // 37
    "class": "MeteorToys_Method_contenta"                                                                       // 38
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Method_m"))), HTML.DIV({                                 // 39
    "class": "MeteorToys_Method_contentb"                                                                       // 40
  }, Spacebars.include(view.lookupTemplate("MeteorToys_Method_h")))));                                          // 41
}));                                                                                                            // 42
                                                                                                                // 43
Template.__checkName("MeteorToys_Method_m");                                                                    // 44
Template["MeteorToys_Method_m"] = new Template("Template.MeteorToys_Method_m", (function() {                    // 45
  var view = this;                                                                                              // 46
  return Blaze.Each(function() {                                                                                // 47
    return Spacebars.call(view.lookup("data"));                                                                 // 48
  }, function() {                                                                                               // 49
    return HTML.DIV({                                                                                           // 50
      "class": "MeteorToys_row MeteorToys_row_hoverable"                                                        // 51
    }, Blaze.View("lookup:.", function() {                                                                      // 52
      return Spacebars.mustache(view.lookup("."));                                                              // 53
    }));                                                                                                        // 54
  });                                                                                                           // 55
}));                                                                                                            // 56
                                                                                                                // 57
Template.__checkName("MeteorToys_Method_h");                                                                    // 58
Template["MeteorToys_Method_h"] = new Template("Template.MeteorToys_Method_h", (function() {                    // 59
  var view = this;                                                                                              // 60
  return [ HTML.DIV({                                                                                           // 61
    "class": "MeteorToys_row"                                                                                   // 62
  }, Blaze.View("lookup:name", function() {                                                                     // 63
    return Spacebars.mustache(view.lookup("name"));                                                             // 64
  })), Blaze.Each(function() {                                                                                  // 65
    return Spacebars.call(view.lookup("data"));                                                                 // 66
  }, function() {                                                                                               // 67
    return HTML.DIV({                                                                                           // 68
      "class": "MeteorToys_row"                                                                                 // 69
    }, HTML.INPUT({                                                                                             // 70
      id: function() {                                                                                          // 71
        return [ "MeteorToys_method_", Spacebars.mustache(view.lookup(".")) ];                                  // 72
      },                                                                                                        // 73
      value: function() {                                                                                       // 74
        return Spacebars.mustache(view.lookup("cachedValue"));                                                  // 75
      }                                                                                                         // 76
    }), HTML.DIV({                                                                                              // 77
      "class": "MeteorToys_row_name"                                                                            // 78
    }, Blaze.View("lookup:.", function() {                                                                      // 79
      return Spacebars.mustache(view.lookup("."));                                                              // 80
    })));                                                                                                       // 81
  }), HTML.Raw('<div id="MeteorToys_method_call" class="MeteorToys_action">Call</div>'), Blaze.If(function() {  // 82
    return Spacebars.call(view.lookup("data"));                                                                 // 83
  }, function() {                                                                                               // 84
    return HTML.DIV({                                                                                           // 85
      id: "MeteorToys_method_clear",                                                                            // 86
      "class": "MeteorToys_action"                                                                              // 87
    }, "Clear");                                                                                                // 88
  }) ];                                                                                                         // 89
}));                                                                                                            // 90
                                                                                                                // 91
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteortoys_method/client/main.js                                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _0xd0bb=["\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x74\x61\x72\x67\x65\x74","\x73\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x74\x61\x72\x67\x65\x74\x5F\x70\x61\x72\x61\x6D\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x73\x63\x72\x6F\x6C\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x78","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x6D\x65\x74\x68\x6F\x64\x73","\x63\x61\x6C\x6C","\x73\x74\x61\x72\x74\x75\x70","\x63\x6C\x6F\x73\x65\x54\x6F\x79","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74","\x65\x76\x65\x6E\x74\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68\x65\x61\x64\x65\x72","\x67\x65\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65","\x68\x65\x6C\x70\x65\x72\x73","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x63","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74","\x73\x6F\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x6D","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x5F\x79","\x54\x68\x65\x72\x65\x20\x77\x61\x73\x20\x61\x6E\x20\x65\x72\x72\x6F\x72\x2E","\x30","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x63\x6F\x6E\x74\x65\x6E\x74\x62","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x2E\x6D\x65\x74\x68\x6F\x64\x43\x61\x63\x68\x65\x2E","\x67\x65\x74\x49\x74\x65\x6D","\x70\x61\x72\x73\x65","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","","\x76\x61\x6C","\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x70\x75\x73\x68","\x27","\x27\x2C","\x65\x61\x63\x68","\x45\x72\x72\x6F\x72\x3A","\x6C\x6F\x67","\x52\x65\x73\x75\x6C\x74\x3A","\x69\x6E\x73\x65\x72\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x52\x65\x73\x75\x6C\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x72\x65\x73\x75\x6C\x74","\x63\x6F\x6E\x63\x61\x74","\x61\x70\x70\x6C\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x73\x65\x74\x49\x74\x65\x6D","\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D"];Meteor[_0xd0bb[7]](function(){MeteorToys[_0xd0bb[1]](_0xd0bb[0],false);MeteorToys[_0xd0bb[1]](_0xd0bb[2],false);MeteorToys[_0xd0bb[1]](_0xd0bb[3],false);Meteor[_0xd0bb[6]](_0xd0bb[4],function(_0xc9f1x1,_0xc9f1x2){if(!_0xc9f1x1){MeteorToys[_0xd0bb[1]](_0xd0bb[5],_0xc9f1x2)}});});Template[_0xd0bb[12]][_0xd0bb[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x68\x65\x61\x64\x65\x72":function(){MeteorToys[_0xd0bb[8]]()},"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64\x5F\x62\x75\x74\x74\x6F\x6E":function(_0xc9f1x1,_0xc9f1x3){_0xc9f1x1[_0xd0bb[9]]();MeteorToys[_0xd0bb[1]](_0xd0bb[3],false);window[_0xd0bb[10]](function(){MeteorToys[_0xd0bb[1]](_0xd0bb[0],false);MeteorToys[_0xd0bb[1]](_0xd0bb[2],false);},250);}});Template[_0xd0bb[12]][_0xd0bb[15]]({"\x64\x69\x73\x70\x6C\x61\x79\x61\x62\x6C\x65":function(){if(MeteorToys[_0xd0bb[13]](_0xd0bb[3])){return _0xd0bb[14]}}});Template[_0xd0bb[17]][_0xd0bb[15]]({"\x70\x6F\x73\x69\x74\x69\x6F\x6E":function(){if(MeteorToys[_0xd0bb[13]](_0xd0bb[3])){return _0xd0bb[16]}}});Template[_0xd0bb[19]][_0xd0bb[15]]({"\x64\x61\x74\x61":function(){if(MeteorToys[_0xd0bb[13]](_0xd0bb[5])){return MeteorToys[_0xd0bb[13]](_0xd0bb[5])[_0xd0bb[18]]()}}});Template[_0xd0bb[19]][_0xd0bb[11]]({"\x63\x6C\x69\x63\x6B\x20\x2E\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x72\x6F\x77":function(){var _0xc9f1x4=String(this);Meteor[_0xd0bb[6]](_0xd0bb[20],_0xc9f1x4,function(_0xc9f1x1,_0xc9f1x2){if(_0xc9f1x1){alert(_0xd0bb[21])}else {MeteorToys[_0xd0bb[1]](_0xd0bb[0],_0xc9f1x4);MeteorToys[_0xd0bb[1]](_0xd0bb[2],_0xc9f1x2);MeteorToys[_0xd0bb[1]](_0xd0bb[3],true);$(_0xd0bb[24])[_0xd0bb[23]](_0xd0bb[22]);}});}});Template[_0xd0bb[28]][_0xd0bb[15]]({"\x6E\x61\x6D\x65":function(){return MeteorToys[_0xd0bb[13]](_0xd0bb[0])},"\x64\x61\x74\x61":function(){return MeteorToys[_0xd0bb[13]](_0xd0bb[2])},cachedValue:function(){name=_0xd0bb[25]+MeteorToys[_0xd0bb[13]](_0xd0bb[0]);if(localStorage[_0xd0bb[26]](name)){data=JSON[_0xd0bb[27]](localStorage[_0xd0bb[26]](name));if(data[this]){return data[this]};};}});Template[_0xd0bb[28]][_0xd0bb[11]]({"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x63\x61\x6C\x6C":function(_0xc9f1x1,_0xc9f1x3){_0xc9f1x1[_0xd0bb[29]]();var _0xc9f1x5=MeteorToys[_0xd0bb[13]](_0xd0bb[2]),_0xc9f1x6=MeteorToys[_0xd0bb[13]](_0xd0bb[0]),_0xc9f1x7=[_0xc9f1x6],_0xc9f1x8=_0xd0bb[30];backup={};if(_0xc9f1x5){jQuery[_0xd0bb[38]](_0xc9f1x5,function(_0xc9f1x9,_0xc9f1xa){var _0xc9f1xb=$(_0xd0bb[32]+_0xc9f1xa)[_0xd0bb[31]]();var _0xc9f1xc=Package[_0xd0bb[34]][_0xd0bb[33]][_0xd0bb[27]](_0xc9f1xb);_0xc9f1x7[_0xd0bb[35]](_0xc9f1xc);_0xc9f1x8+=_0xd0bb[36]+_0xc9f1xb+_0xd0bb[37];backup[_0xc9f1xa]=_0xc9f1xc;})};mCallback=function(_0xc9f1x1,_0xc9f1x2){if(_0xc9f1x1){console[_0xd0bb[40]](_0xd0bb[39]);console[_0xd0bb[40]](_0xc9f1x1);};if(_0xc9f1x2){console[_0xd0bb[40]](_0xd0bb[41]);console[_0xd0bb[40]](_0xc9f1x2);Package[_0xd0bb[44]][_0xd0bb[43]][_0xd0bb[42]](_0xc9f1x2);};};if(_0xc9f1x5){Meteor[_0xd0bb[6]][_0xd0bb[46]](Meteor,_0xc9f1x7[_0xd0bb[45]](mCallback))}else {Meteor[_0xd0bb[6]](_0xc9f1x6,mCallback)};MeteorToys[_0xd0bb[1]](_0xd0bb[3],false);_0xc9f1x6=_0xd0bb[25]+_0xc9f1x6;data=JSON[_0xd0bb[47]](backup);localStorage[_0xd0bb[48]](_0xc9f1x6,data);},"\x63\x6C\x69\x63\x6B\x20\x23\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x6D\x65\x74\x68\x6F\x64\x5F\x63\x6C\x65\x61\x72":function(_0xc9f1x1,_0xc9f1x3){_0xc9f1x1[_0xd0bb[29]]();name=_0xd0bb[25]+name;params=MeteorToys[_0xd0bb[13]](_0xd0bb[2]);localStorage[_0xd0bb[49]](name);if(params){jQuery[_0xd0bb[38]](params,function(_0xc9f1x9,_0xc9f1xa){$(_0xd0bb[32]+_0xc9f1xa)[_0xd0bb[31]](_0xd0bb[30])})};}});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/meteortoys_method/lib/main.js                                                                       //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
// If your toy requires a collection,                                                                           // 1
// please use the suggested name pattern                                                                        // 2
// so your collections do not show up in                                                                        // 3
// Meteor Toys or Kadira Debug, and to                                                                          // 4
// avoid interference with other Meteor Toys                                                                    // 5
//                                                                                                              // 6
// CollectionName = new Mongo.Collection("MeteorToys/authorName/packageName");                                  // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['meteortoys:method'] = {};

})();
