(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_pub/ToyKit/main.js                                      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var _0x8904=["\x50\x75\x62","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x50\x75\x62","\x69\x73\x43\x6C\x69\x65\x6E\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x46\x6F\x72\x20\x74\x68\x65\x20","\x6E\x61\x6D\x65","\x20\x74\x6F\x79\x20\x74\x6F\x20\x77\x6F\x72\x6B\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x4D\x6F\x6E\x67\x6F\x6C\x20\x6F\x72","\x6C\x6F\x67","\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E\x20\x47\x72\x61\x62\x20\x74\x68\x65\x20\x66\x72\x65\x65\x20\x65\x64\x69\x74\x69\x6F\x6E\x20\x61\x74\x20\x68\x74\x74\x70\x3A\x2F\x2F\x4D\x65\x74\x65\x6F\x72\x2E\x54\x6F\x79\x73\x2F","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x61\x6C\x6C","\x70\x75\x62\x6C\x69\x73\x68\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x73\x65\x72\x76\x65\x72","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72","\x73\x70\x6C\x69\x63\x65","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x56\x65\x6C\x6F\x63\x69\x74\x79","\x6D\x61\x74\x63\x68","\x28","\x69\x6E\x64\x65\x78\x4F\x66","\x29","\x73\x6C\x69\x63\x65","\x6D\x65\x74\x68\x6F\x64\x73"];ToyKit={name:_0x8904[0],version:_0x8904[1],template:_0x8904[2]};if(Meteor[_0x8904[3]]){if(Package[_0x8904[4]]){MeteorToys=Package[_0x8904[4]][_0x8904[5]]}else {MeteorToys={};console[_0x8904[9]](_0x8904[6]+ToyKit[_0x8904[7]]+_0x8904[8]);console[_0x8904[9]](_0x8904[10]);}};if(Meteor[_0x8904[11]]){Meteor[_0x8904[26]]({MeteorToy_d:function(){var _0x2fd8x1=false;Meteor[_0x8904[12]](_0x8904[5],function(_0x2fd8x2,_0x2fd8x3){_0x2fd8x1=_0x2fd8x3});if(!_0x2fd8x1){return false};var _0x2fd8x4=Object[_0x8904[15]](Meteor[_0x8904[14]][_0x8904[13]]);var _0x2fd8x5=function(_0x2fd8x6,_0x2fd8x7){var _0x2fd8x8=_0x2fd8x7[_0x8904[16]];for(var _0x2fd8x9=0;_0x2fd8x9<_0x2fd8x6[_0x8904[16]];_0x2fd8x9++){if(_0x2fd8x6[_0x2fd8x9][_0x8904[17]](0,_0x2fd8x8)===_0x2fd8x7){_0x2fd8x6[_0x8904[18]](_0x2fd8x9,1);_0x2fd8x9--;}};return _0x2fd8x6;};_0x2fd8x4=_0x2fd8x5(_0x2fd8x4,_0x8904[5]);_0x2fd8x4=_0x2fd8x5(_0x2fd8x4,_0x8904[19]);_0x2fd8x4=_0x2fd8x5(_0x2fd8x4,_0x8904[20]);return _0x2fd8x4;},MeteorToy_f:function(_0x2fd8xa){check(_0x2fd8xa,Match.Any);var _0x2fd8x1=false;Meteor[_0x8904[12]](_0x8904[5],function(_0x2fd8x2,_0x2fd8x3){_0x2fd8x1=_0x2fd8x3});if(!_0x2fd8x1){return false};function _0x2fd8xb(_0x2fd8xc){var _0x2fd8xd=_0x2fd8xc.toString();return _0x2fd8xd[_0x8904[25]](_0x2fd8xd[_0x8904[23]](_0x8904[22])+1,_0x2fd8xd[_0x8904[23]](_0x8904[24]))[_0x8904[21]](/([^\s,]+)/g);}var _0x2fd8xe=String(Meteor[_0x8904[14]][_0x8904[13]][_0x2fd8xa]),_0x2fd8xf=_0x2fd8xb(_0x2fd8xe);return _0x2fd8xf;}})};

/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_pub/server/main.js                                      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
// Be nice :)
/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_pub/lib/main.js                                         //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
// If your toy requires a collection,
// please use the suggested name pattern
// so your collections do not show up in
// Meteor Toys or Kadira Debug, and to
// avoid interference with other Meteor Toys
// 
// CollectionName = new Mongo.Collection("MeteorToys/authorName/packageName");
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:pub'] = {}, {
  ToyKit: ToyKit
});

})();

//# sourceMappingURL=meteortoys_pub.js.map
