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
var InjectData = Package['meteorhacks:inject-data'].InjectData;
var Cookie = Package['chuangbo:cookie'].Cookie;
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EJSON = Package.ejson.EJSON;
var Accounts = Package['accounts-base'].Accounts;

/* Package-scope variables */
var AddedToChanged, ApplyDDP, DeepExtend, IDTools, FastRender, collData, __init_fast_render;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/utils.js                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
AddedToChanged = function(localCopy, added) {                                                                     // 1
  added.msg = "changed";                                                                                          // 2
  added.cleared = [];                                                                                             // 3
  added.fields = added.fields || {};                                                                              // 4
                                                                                                                  // 5
  _.each(localCopy, function(value, key) {                                                                        // 6
    if(key != '_id') {                                                                                            // 7
      if(typeof added.fields[key] == "undefined") {                                                               // 8
        added.cleared.push(key);                                                                                  // 9
      }                                                                                                           // 10
    }                                                                                                             // 11
  });                                                                                                             // 12
};                                                                                                                // 13
                                                                                                                  // 14
ApplyDDP = function(existing, message) {                                                                          // 15
  var newDoc = (!existing)? {}: _.clone(existing);                                                                // 16
  if(message.msg == 'added') {                                                                                    // 17
    _.each(message.fields, function(value, key) {                                                                 // 18
      newDoc[key] = value;                                                                                        // 19
    });                                                                                                           // 20
  } else if(message.msg == "changed") {                                                                           // 21
    _.each(message.fields, function(value, key) {                                                                 // 22
      newDoc[key] = value;                                                                                        // 23
    });                                                                                                           // 24
    _.each(message.cleared, function(key) {                                                                       // 25
      delete newDoc[key];                                                                                         // 26
    });                                                                                                           // 27
  } else if(message.msg == "removed") {                                                                           // 28
    newDoc = null;                                                                                                // 29
  }                                                                                                               // 30
                                                                                                                  // 31
  return newDoc;                                                                                                  // 32
};                                                                                                                // 33
                                                                                                                  // 34
// source: https://gist.github.com/kurtmilam/1868955                                                              // 35
//  modified a bit to not to expose this as an _ api                                                              // 36
DeepExtend = function deepExtend (obj) {                                                                          // 37
  var parentRE = /#{\s*?_\s*?}/,                                                                                  // 38
      slice = Array.prototype.slice,                                                                              // 39
      hasOwnProperty = Object.prototype.hasOwnProperty;                                                           // 40
                                                                                                                  // 41
  _.each(slice.call(arguments, 1), function(source) {                                                             // 42
    for (var prop in source) {                                                                                    // 43
      if (hasOwnProperty.call(source, prop)) {                                                                    // 44
        if (_.isNull(obj[prop]) || _.isUndefined(obj[prop]) || _.isFunction(obj[prop]) || _.isNull(source[prop]) || _.isDate(source[prop])) {
          obj[prop] = source[prop];                                                                               // 46
        }                                                                                                         // 47
        else if (_.isString(source[prop]) && parentRE.test(source[prop])) {                                       // 48
          if (_.isString(obj[prop])) {                                                                            // 49
            obj[prop] = source[prop].replace(parentRE, obj[prop]);                                                // 50
          }                                                                                                       // 51
        }                                                                                                         // 52
        else if (_.isArray(obj[prop]) || _.isArray(source[prop])){                                                // 53
          if (!_.isArray(obj[prop]) || !_.isArray(source[prop])){                                                 // 54
            throw 'Error: Trying to combine an array with a non-array (' + prop + ')';                            // 55
          } else {                                                                                                // 56
            obj[prop] = _.reject(DeepExtend(obj[prop], source[prop]), function (item) { return _.isNull(item);});
          }                                                                                                       // 58
        }                                                                                                         // 59
        else if (_.isObject(obj[prop]) || _.isObject(source[prop])){                                              // 60
          if (!_.isObject(obj[prop]) || !_.isObject(source[prop])){                                               // 61
            throw 'Error: Trying to combine an object with a non-object (' + prop + ')';                          // 62
          } else {                                                                                                // 63
            obj[prop] = DeepExtend(obj[prop], source[prop]);                                                      // 64
          }                                                                                                       // 65
        } else {                                                                                                  // 66
          obj[prop] = source[prop];                                                                               // 67
        }                                                                                                         // 68
      }                                                                                                           // 69
    }                                                                                                             // 70
  });                                                                                                             // 71
  return obj;                                                                                                     // 72
};                                                                                                                // 73
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/id_tools.js                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
IDTools = {};                                                                                                     // 1
IDTools.idParse = LocalCollection._idParse;                                                                       // 2
IDTools.idStringify = LocalCollection._idStringify;                                                               // 3
IDTools.ObjectID = LocalCollection._ObjectID                                                                      // 4
                                                                                                                  // 5
// To support Meteor 1.2                                                                                          // 6
if(Package['mongo-id']) {                                                                                         // 7
  var MongoID = Package['mongo-id'].MongoID;                                                                      // 8
  IDTools.idParse = MongoID.idParse;                                                                              // 9
  IDTools.idStringify = MongoID.idStringify;                                                                      // 10
  IDTools.ObjectID = MongoID.ObjectID;                                                                            // 11
}                                                                                                                 // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/fast_render.js                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FastRender = {};                                                                                                  // 1
FastRender.enabled = typeof __fast_render_config != 'undefined';                                                  // 2
FastRender._dataReceived = false;                                                                                 // 3
FastRender._revertedBackToOriginal = false;                                                                       // 4
FastRender._blockDDP = Meteor._localStorage.getItem('__frblockddp') != undefined;                                 // 5
if(FastRender._blockDDP) {                                                                                        // 6
  console.log("FastRender is blocking DDP messages. apply 'FastRender.debugger.unblockDDP()' to unblock again.");
}                                                                                                                 // 8
                                                                                                                  // 9
FastRender._disable = Meteor._localStorage.getItem('__frdisable') != undefined;                                   // 10
if(FastRender._disable) {                                                                                         // 11
  console.log("FastRender is disabled. apply 'FastRender.debugger.enableFR()' to enable it back.")                // 12
}                                                                                                                 // 13
                                                                                                                  // 14
// This allow us to apply DDP message even if Meteor block accepting messages                                     // 15
//  When doing initial login, Meteor sends an login message                                                       // 16
//  Then it'll block the accpeting DDP messages from server                                                       // 17
//  This is the cure                                                                                              // 18
FastRender.injectDdpMessage = function(conn, message) {                                                           // 19
  FastRender["debugger"].log('injecting ddp message:', message);                                                  // 20
  if (conn._bufferedWrites) {                                                                                     // 21
    // New with meteor/meteor#5680                                                                                // 22
    // If the livedata connection supports buffered writes,                                                       // 23
    // we don't need check if we're in delay before injecting.                                                    // 24
    conn._livedata_data(message);                                                                                 // 25
  } else {                                                                                                        // 26
    var originalWait = conn._waitingForQuiescence;                                                                // 27
    conn._waitingForQuiescence = function() {return false};                                                       // 28
    conn._livedata_data(message);                                                                                 // 29
    conn._waitingForQuiescence = originalWait;                                                                    // 30
  }                                                                                                               // 31
};                                                                                                                // 32
                                                                                                                  // 33
FastRender.init = function(payload) {                                                                             // 34
  if(FastRender._disable) return;                                                                                 // 35
                                                                                                                  // 36
  FastRender._securityCheck(payload);                                                                             // 37
                                                                                                                  // 38
  FastRender._subscriptions = (payload && payload.subscriptions) || {};                                           // 39
  FastRender._subscriptionIdMap = {};                                                                             // 40
  FastRender._dataReceived = true;                                                                                // 41
  FastRender._payload = payload;                                                                                  // 42
                                                                                                                  // 43
  // merging data from different subscriptions                                                                    // 44
  //  yes, this is a minimal mergeBox on the client                                                               // 45
  var allData = {};                                                                                               // 46
  if (payload) {                                                                                                  // 47
    _.each(payload.collectionData, function(subData, collName) {                                                  // 48
      if(!allData[collName]) {                                                                                    // 49
        allData[collName] = {};                                                                                   // 50
      }                                                                                                           // 51
      collData = allData[collName];                                                                               // 52
                                                                                                                  // 53
      subData.forEach(function(dataSet) {                                                                         // 54
        dataSet.forEach(function(item) {                                                                          // 55
          if(!collData[item._id]) {                                                                               // 56
            collData[item._id] = item;                                                                            // 57
          } else {                                                                                                // 58
            DeepExtend(collData[item._id], item);                                                                 // 59
          }                                                                                                       // 60
        });                                                                                                       // 61
      });                                                                                                         // 62
    });                                                                                                           // 63
  }                                                                                                               // 64
                                                                                                                  // 65
  var connection = Meteor.connection;                                                                             // 66
                                                                                                                  // 67
  _.each(allData, function(collData, collName) {                                                                  // 68
    _.each(collData, function(item, id) {                                                                         // 69
      var id = IDTools.idStringify(item._id);                                                                     // 70
      delete item._id;                                                                                            // 71
                                                                                                                  // 72
      var ddpMessage = {                                                                                          // 73
        msg: 'added',                                                                                             // 74
        collection: collName,                                                                                     // 75
        id: id,                                                                                                   // 76
        fields: item,                                                                                             // 77
        frGen: true                                                                                               // 78
      };                                                                                                          // 79
                                                                                                                  // 80
      FastRender.injectDdpMessage(connection, ddpMessage);                                                        // 81
    });                                                                                                           // 82
  });                                                                                                             // 83
                                                                                                                  // 84
  // If the connection supports buffered DDP writes, then flush now.                                              // 85
  if (connection._flushBufferedWrites) connection._flushBufferedWrites();                                         // 86
                                                                                                                  // 87
  // let Meteor know, user login process has been completed                                                       // 88
  if(typeof Accounts != 'undefined') {                                                                            // 89
    Accounts._setLoggingIn(false);                                                                                // 90
  }                                                                                                               // 91
};                                                                                                                // 92
                                                                                                                  // 93
FastRender._securityCheck = function(payload) {                                                                   // 94
  if(payload && payload.loginToken) {                                                                             // 95
    var localStorageLoginToken = Meteor._localStorage.getItem('Meteor.loginToken');                               // 96
    if(localStorageLoginToken != payload.loginToken) {                                                            // 97
      throw new Error("seems like cookie tossing is happening. visit here: http://git.io/q4IRHQ");                // 98
    }                                                                                                             // 99
  }                                                                                                               // 100
};                                                                                                                // 101
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/debugger.js                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FastRender["debugger"] = {};                                                                                      // 1
FastRender["debugger"]._logs = [];                                                                                // 2
FastRender["debugger"].log = function function_name(message/*, args..*/) {                                        // 3
  if(                                                                                                             // 4
    typeof console != 'undefined' &&                                                                              // 5
    typeof Meteor._localStorage != 'undefined' &&                                                                 // 6
    Meteor._localStorage.getItem('__frlog') == "1")                                                               // 7
  {                                                                                                               // 8
    FastRender["debugger"]._logs.push(arguments);                                                                 // 9
    arguments[0] = "FR: " + arguments[0];                                                                         // 10
    console.log.apply(console, arguments);                                                                        // 11
  }                                                                                                               // 12
}                                                                                                                 // 13
                                                                                                                  // 14
FastRender["debugger"].showLogs = function() {                                                                    // 15
  Meteor._localStorage.setItem('__frlog', "1");                                                                   // 16
  location.reload();                                                                                              // 17
};                                                                                                                // 18
                                                                                                                  // 19
FastRender["debugger"].hideLogs = function() {                                                                    // 20
  Meteor._localStorage.removeItem('__frlog');                                                                     // 21
  location.reload();                                                                                              // 22
};                                                                                                                // 23
                                                                                                                  // 24
FastRender["debugger"].getLogs = function() {                                                                     // 25
  return FastRender["debugger"]._logs;                                                                            // 26
};                                                                                                                // 27
                                                                                                                  // 28
FastRender["debugger"].getLogsJSON = function() {                                                                 // 29
  return JSON.stringify(FastRender["debugger"]._logs);                                                            // 30
};                                                                                                                // 31
                                                                                                                  // 32
FastRender["debugger"].blockDDP = function() {                                                                    // 33
  Meteor._localStorage.setItem('__frblockddp', "1");                                                              // 34
  location.reload();                                                                                              // 35
};                                                                                                                // 36
                                                                                                                  // 37
FastRender["debugger"].unblockDDP = function() {                                                                  // 38
  Meteor._localStorage.removeItem('__frblockddp');                                                                // 39
  location.reload();                                                                                              // 40
};                                                                                                                // 41
                                                                                                                  // 42
FastRender["debugger"].disableFR = function() {                                                                   // 43
  Meteor._localStorage.setItem('__frdisable', "1");                                                               // 44
  location.reload();                                                                                              // 45
};                                                                                                                // 46
                                                                                                                  // 47
FastRender["debugger"].enableFR = function() {                                                                    // 48
  Meteor._localStorage.removeItem('__frdisable');                                                                 // 49
  location.reload();                                                                                              // 50
};                                                                                                                // 51
                                                                                                                  // 52
FastRender["debugger"].getPayload = function() {                                                                  // 53
  return FastRender._payload;                                                                                     // 54
};                                                                                                                // 55
                                                                                                                  // 56
FastRender["debugger"].getPayloadJSON = function() {                                                              // 57
  return JSON.stringify(FastRender._payload);                                                                     // 58
};                                                                                                                // 59
                                                                                                                  // 60
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/ddp_update.js                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var reconnecting = false;                                                                                         // 1
                                                                                                                  // 2
var originalLivedataData = Meteor.connection._livedata_data;                                                      // 3
Meteor.connection._livedata_data = function(msg) {                                                                // 4
  if(FastRender._blockDDP && !msg.frGen) {                                                                        // 5
    FastRender["debugger"].log('blocking incoming ddp', msg);                                                     // 6
    return;                                                                                                       // 7
  };                                                                                                              // 8
  // fast-render adds data manually while initializing                                                            // 9
  // But when the server sends actual data via DDP, it also tries to add                                          // 10
  // Then we need to detect that and alter                                                                        // 11
  //                                                                                                              // 12
  // But we don't need to interfer with Meteor's simulation process                                               // 13
  // That's why we are checking for serverDocs and ignore manual handling                                         // 14
  //                                                                                                              // 15
  // We don't need this logic after our special handling reverted back to                                         // 16
  // original. But we can't detect when null publications completed or not                                        // 17
  // That's why we need keep this logic                                                                           // 18
  //                                                                                                              // 19
  // It's okay to ignore this logic after sometime, but not sure when exactly                                     // 20
                                                                                                                  // 21
  if(msg.msg == 'added') {                                                                                        // 22
    var id = IDTools.idParse(msg.id);                                                                             // 23
    var serverDoc = this._getServerDoc(msg.collection, id);                                                       // 24
                                                                                                                  // 25
    if(!reconnecting && !serverDoc) {                                                                             // 26
      var localCollection = this._mongo_livedata_collections[msg.collection];                                     // 27
      var pendingStoreUpdates = this._updatesForUnknownStores[msg.collection];                                    // 28
      if(localCollection) {                                                                                       // 29
        var existingDoc = localCollection.findOne(id);                                                            // 30
        if(existingDoc) {                                                                                         // 31
          FastRender["debugger"].log('re writing DDP for:', msg);                                                 // 32
          AddedToChanged(existingDoc, msg);                                                                       // 33
        }                                                                                                         // 34
      } else if(pendingStoreUpdates) {                                                                            // 35
        var mergedDoc = null;                                                                                     // 36
        var existingDocs = _.filter(pendingStoreUpdates, function(doc) {                                          // 37
          return doc.id == msg.id;                                                                                // 38
        });                                                                                                       // 39
                                                                                                                  // 40
        _.each(existingDocs, function(cachedMsg) {                                                                // 41
          mergedDoc = ApplyDDP(mergedDoc, cachedMsg);                                                             // 42
        });                                                                                                       // 43
                                                                                                                  // 44
        if(mergedDoc) {                                                                                           // 45
          FastRender["debugger"].log('re writing DDP for:', msg);                                                 // 46
          AddedToChanged(mergedDoc, msg);                                                                         // 47
        }                                                                                                         // 48
      }                                                                                                           // 49
    }                                                                                                             // 50
  }                                                                                                               // 51
                                                                                                                  // 52
  // if we've completed our tasks, no need of special handling                                                    // 53
  if(!FastRender._revertedBackToOriginal && FastRender._dataReceived) {                                           // 54
                                                                                                                  // 55
    // This will take care of cleaning special subscription handling                                              // 56
    // after the actual subscription comes out                                                                    // 57
    if(msg.msg == 'ready' && !msg.frGen && FastRender._subscriptions) {                                           // 58
      msg.subs.forEach(function(subId) {                                                                          // 59
        var subscription = FastRender._subscriptionIdMap[subId];                                                  // 60
        if(subscription) {                                                                                        // 61
          FastRender["debugger"].log('actual subscription completed:', subscription, subId);                      // 62
          // we don't need to handle specially after this                                                         // 63
          var paramsKeyMap = FastRender._subscriptions[subscription.name] || {};                                  // 64
          delete paramsKeyMap[subscription.paramsKey];                                                            // 65
          if(EJSON.equals(FastRender._subscriptions[subscription.name], {})) {                                    // 66
            delete FastRender._subscriptions[subscription.name];                                                  // 67
          }                                                                                                       // 68
          delete FastRender._subscriptionIdMap[subId];                                                            // 69
        }                                                                                                         // 70
      });                                                                                                         // 71
    }                                                                                                             // 72
                                                                                                                  // 73
    // if all the subscriptions have been processed,                                                              // 74
    // there is no need to keep hijacking                                                                         // 75
    if(EJSON.equals(FastRender._subscriptions, {})) {                                                             // 76
      FastRender["debugger"].log('fast rendering completed!');                                                    // 77
      FastRender._revertedBackToOriginal = true;                                                                  // 78
    }                                                                                                             // 79
  }                                                                                                               // 80
                                                                                                                  // 81
  return originalLivedataData.call(this, msg);                                                                    // 82
};                                                                                                                // 83
                                                                                                                  // 84
var originalSend = Meteor.connection._send;                                                                       // 85
Meteor.connection._send = function(msg) {                                                                         // 86
  // if looking for connect again to the server, we must need to revert back to                                   // 87
  // original to prevent some weird DDP issues                                                                    // 88
  //  normally it is already reverted, but user may added subscriptions                                           // 89
  //  in server, which are not subscribed from the client                                                         // 90
  if(msg.msg == 'connect' && msg.session != undefined) {                                                          // 91
    FastRender._revertedBackToOriginal = true;                                                                    // 92
    reconnecting = true;                                                                                          // 93
  }                                                                                                               // 94
                                                                                                                  // 95
  var self = this;                                                                                                // 96
                                                                                                                  // 97
  // if we've completed our tasks, no need of special handling                                                    // 98
  if(!FastRender._revertedBackToOriginal && FastRender._dataReceived) {                                           // 99
    var paramsKey = EJSON.stringify(msg.params);                                                                  // 100
    var canSendFakeReady =                                                                                        // 101
      msg.msg == 'sub' &&                                                                                         // 102
      FastRender._subscriptions[msg.name] &&                                                                      // 103
      FastRender._subscriptions[msg.name][paramsKey];                                                             // 104
                                                                                                                  // 105
    FastRender["debugger"].log('new subscription:', msg.name);                                                    // 106
    if(canSendFakeReady) {                                                                                        // 107
      FastRender["debugger"].log('sending fake ready for sub:', msg.name);                                        // 108
      FastRender.injectDdpMessage(self, {msg:"ready",subs:[msg.id], frGen: true});                                // 109
      // add the messageId to be handled later                                                                    // 110
      FastRender._subscriptionIdMap[msg.id] = {                                                                   // 111
        name: msg.name,                                                                                           // 112
        paramsKey: paramsKey                                                                                      // 113
      };                                                                                                          // 114
    }                                                                                                             // 115
  }                                                                                                               // 116
                                                                                                                  // 117
  return originalSend.call(this, msg);                                                                            // 118
};                                                                                                                // 119
                                                                                                                  // 120
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/auth.js                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
// getting tokens for the first time                                                                              // 1
//  Meteor calls Meteor._localStorage.setItem() on the boot                                                       // 2
//  But we can do it ourselves also with this                                                                     // 3
Meteor.startup(function() {                                                                                       // 4
  resetToken();                                                                                                   // 5
});                                                                                                               // 6
                                                                                                                  // 7
// override Meteor._localStorage methods and resetToken accordingly                                               // 8
var originalSetItem = Meteor._localStorage.setItem;                                                               // 9
Meteor._localStorage.setItem = function(key, value) {                                                             // 10
  if(key == 'Meteor.loginToken') {                                                                                // 11
    Meteor.defer(resetToken);                                                                                     // 12
  }                                                                                                               // 13
  originalSetItem.call(Meteor._localStorage, key, value);                                                         // 14
};                                                                                                                // 15
                                                                                                                  // 16
var originalRemoveItem = Meteor._localStorage.removeItem;                                                         // 17
Meteor._localStorage.removeItem = function(key) {                                                                 // 18
  if(key == 'Meteor.loginToken') {                                                                                // 19
    Meteor.defer(resetToken);                                                                                     // 20
  }                                                                                                               // 21
  originalRemoveItem.call(Meteor._localStorage, key);                                                             // 22
}                                                                                                                 // 23
                                                                                                                  // 24
function resetToken() {                                                                                           // 25
  var loginToken = Meteor._localStorage.getItem('Meteor.loginToken');                                             // 26
  var loginTokenExpires = new Date(Meteor._localStorage.getItem('Meteor.loginTokenExpires'));                     // 27
                                                                                                                  // 28
  if(loginToken) {                                                                                                // 29
    setToken(loginToken, loginTokenExpires);                                                                      // 30
  } else {                                                                                                        // 31
    setToken(null, -1);                                                                                           // 32
  }                                                                                                               // 33
}                                                                                                                 // 34
                                                                                                                  // 35
function setToken(loginToken, expires) {                                                                          // 36
  Cookie.set('meteor_login_token', loginToken, {                                                                  // 37
    path: '/',                                                                                                    // 38
    expires: expires                                                                                              // 39
  });                                                                                                             // 40
}                                                                                                                 // 41
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/meteorhacks_fast-render/lib/client/boot.js                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
InjectData.getData('fast-render-data', function(payload) {                                                        // 1
  FastRender.init(payload);                                                                                       // 2
});                                                                                                               // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteorhacks:fast-render'] = {}, {
  FastRender: FastRender,
  __init_fast_render: __init_fast_render
});

})();
