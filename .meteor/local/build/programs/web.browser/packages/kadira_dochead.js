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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var npmLoadScript, DocHead;

var require = meteorInstall({"node_modules":{"meteor":{"kadira:dochead":{"main.js":["load-script",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/kadira_dochead/main.js                                                                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
npmLoadScript = require('load-script');                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"lib":{"both.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/kadira_dochead/lib/both.js                                                                     //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var FlowRouter = null;                                                                                     // 1
if (Package['kadira:flow-router-ssr']) {                                                                   // 2
  FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;                                               // 3
}                                                                                                          //
                                                                                                           //
if (Meteor.isClient) {                                                                                     // 6
  var titleDependency = new Tracker.Dependency();                                                          // 7
}                                                                                                          //
                                                                                                           //
DocHead = {                                                                                                // 10
  currentTitle: null,                                                                                      // 11
  setTitle: function () {                                                                                  // 12
    function setTitle(title) {                                                                             //
      if (Meteor.isClient) {                                                                               // 13
        titleDependency.changed();                                                                         // 14
        document.title = title;                                                                            // 15
      } else {                                                                                             //
        this.currentTitle = title;                                                                         // 17
        var titleHtml = '<title>' + title + '</title>';                                                    // 18
        this._addToHead(titleHtml);                                                                        // 19
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return setTitle;                                                                                       //
  }(),                                                                                                     //
  addMeta: function () {                                                                                   // 22
    function addMeta(info) {                                                                               //
      this._addTag(info, 'meta');                                                                          // 23
    }                                                                                                      //
                                                                                                           //
    return addMeta;                                                                                        //
  }(),                                                                                                     //
  addLink: function () {                                                                                   // 25
    function addLink(info) {                                                                               //
      this._addTag(info, 'link');                                                                          // 26
    }                                                                                                      //
                                                                                                           //
    return addLink;                                                                                        //
  }(),                                                                                                     //
  getTitle: function () {                                                                                  // 28
    function getTitle() {                                                                                  //
      if (Meteor.isClient) {                                                                               // 29
        titleDependency.depend();                                                                          // 30
        return document.title;                                                                             // 31
      }                                                                                                    //
      return this.currentTitle;                                                                            // 33
    }                                                                                                      //
                                                                                                           //
    return getTitle;                                                                                       //
  }(),                                                                                                     //
  addLdJsonScript: function () {                                                                           // 35
    function addLdJsonScript(jsonObj) {                                                                    //
      var strObj = JSON.stringify(jsonObj);                                                                // 36
      this._addLdJsonScript(strObj);                                                                       // 37
    }                                                                                                      //
                                                                                                           //
    return addLdJsonScript;                                                                                //
  }(),                                                                                                     //
  loadScript: function () {                                                                                // 39
    function loadScript(url, options, callback) {                                                          //
      if (Meteor.isClient) {                                                                               // 40
        npmLoadScript(url, options, callback);                                                             // 41
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return loadScript;                                                                                     //
  }(),                                                                                                     //
  _addTag: function () {                                                                                   // 44
    function _addTag(info, tag) {                                                                          //
      var meta = this._buildTag(info, tag);                                                                // 45
      if (Meteor.isClient) {                                                                               // 46
        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', meta);                    // 47
      } else {                                                                                             //
        this._addToHead(meta);                                                                             // 49
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return _addTag;                                                                                        //
  }(),                                                                                                     //
  _addToHead: function () {                                                                                // 52
    function _addToHead(html) {                                                                            //
      // only work there is kadira:flow-router-ssr                                                         //
      if (!FlowRouter) {                                                                                   // 54
        return;                                                                                            // 55
      }                                                                                                    //
      var ssrContext = FlowRouter.ssrContext.get();                                                        // 57
      if (ssrContext) {                                                                                    // 58
        ssrContext.addToHead(html);                                                                        // 59
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return _addToHead;                                                                                     //
  }(),                                                                                                     //
  _buildTag: function () {                                                                                 // 62
    function _buildTag(metaInfo, type) {                                                                   //
      var props = "";                                                                                      // 63
      for (var key in meteorBabelHelpers.sanitizeForInObject(metaInfo)) {                                  // 64
        props += key + '="' + metaInfo[key] + '" ';                                                        // 65
      }                                                                                                    //
      props += 'dochead="1"';                                                                              // 67
      var meta = '<' + type + ' ' + props + '/>';                                                          // 68
      return meta;                                                                                         // 69
    }                                                                                                      //
                                                                                                           //
    return _buildTag;                                                                                      //
  }(),                                                                                                     //
  _addLdJsonScript: function () {                                                                          // 71
    function _addLdJsonScript(stringifiedObject) {                                                         //
      var scriptTag = '<script type="application/ld+json" dochead="1">' + stringifiedObject + '</script>';
      if (Meteor.isClient) {                                                                               // 73
        document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', scriptTag);               // 74
      } else {                                                                                             //
        this._addToHead(scriptTag);                                                                        // 76
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return _addLdJsonScript;                                                                               //
  }(),                                                                                                     //
  removeDocHeadAddedTags: function () {                                                                    // 79
    function removeDocHeadAddedTags() {                                                                    //
      if (Meteor.isClient) {                                                                               // 80
        var elements = document.querySelectorAll('[dochead="1"]');                                         // 81
        // We use for-of here to loop only over iterable objects                                           //
        for (var _iterator = elements, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;                                                                                        //
                                                                                                           //
          if (_isArray) {                                                                                  //
            if (_i >= _iterator.length) break;                                                             //
            _ref = _iterator[_i++];                                                                        //
          } else {                                                                                         //
            _i = _iterator.next();                                                                         //
            if (_i.done) break;                                                                            //
            _ref = _i.value;                                                                               //
          }                                                                                                //
                                                                                                           //
          var element = _ref;                                                                              //
                                                                                                           //
          element.parentNode.removeChild(element);                                                         // 84
        }                                                                                                  //
      }                                                                                                    //
    }                                                                                                      //
                                                                                                           //
    return removeDocHeadAddedTags;                                                                         //
  }()                                                                                                      //
};                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"flow_router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/kadira_dochead/lib/flow_router.js                                                              //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
if (Package['kadira:flow-router-ssr']) {                                                                   // 1
  var FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;                                           // 2
  // remove added tags when changing routes                                                                //
  FlowRouter.triggers.enter(function () {                                                                  // 1
    Meteor.startup(DocHead.removeDocHeadAddedTags);                                                        // 5
  });                                                                                                      //
}                                                                                                          //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"node_modules":{"load-script":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// ../npm/node_modules/load-script/package.json                                                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
exports.name = "load-script";                                                                              // 1
exports.version = "1.0.0";                                                                                 // 2
                                                                                                           // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// node_modules/meteor/kadira:dochead/node_modules/load-script/index.js                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
module.exports = function load (src, opts, cb) {                                                           // 2
  var head = document.head || document.getElementsByTagName('head')[0]                                     // 3
  var script = document.createElement('script')                                                            // 4
                                                                                                           // 5
  if (typeof opts === 'function') {                                                                        // 6
    cb = opts                                                                                              // 7
    opts = {}                                                                                              // 8
  }                                                                                                        // 9
                                                                                                           // 10
  opts = opts || {}                                                                                        // 11
  cb = cb || function() {}                                                                                 // 12
                                                                                                           // 13
  script.type = opts.type || 'text/javascript'                                                             // 14
  script.charset = opts.charset || 'utf8';                                                                 // 15
  script.async = 'async' in opts ? !!opts.async : true                                                     // 16
  script.src = src                                                                                         // 17
                                                                                                           // 18
  if (opts.attrs) {                                                                                        // 19
    setAttributes(script, opts.attrs)                                                                      // 20
  }                                                                                                        // 21
                                                                                                           // 22
  if (opts.text) {                                                                                         // 23
    script.text = '' + opts.text                                                                           // 24
  }                                                                                                        // 25
                                                                                                           // 26
  var onend = 'onload' in script ? stdOnEnd : ieOnEnd                                                      // 27
  onend(script, cb)                                                                                        // 28
                                                                                                           // 29
  // some good legacy browsers (firefox) fail the 'in' detection above                                     // 30
  // so as a fallback we always set onload                                                                 // 31
  // old IE will ignore this and new IE will set onload                                                    // 32
  if (!script.onload) {                                                                                    // 33
    stdOnEnd(script, cb);                                                                                  // 34
  }                                                                                                        // 35
                                                                                                           // 36
  head.appendChild(script)                                                                                 // 37
}                                                                                                          // 38
                                                                                                           // 39
function setAttributes(script, attrs) {                                                                    // 40
  for (var attr in attrs) {                                                                                // 41
    script.setAttribute(attr, attrs[attr]);                                                                // 42
  }                                                                                                        // 43
}                                                                                                          // 44
                                                                                                           // 45
function stdOnEnd (script, cb) {                                                                           // 46
  script.onload = function () {                                                                            // 47
    this.onerror = this.onload = null                                                                      // 48
    cb(null, script)                                                                                       // 49
  }                                                                                                        // 50
  script.onerror = function () {                                                                           // 51
    // this.onload = null here is necessary                                                                // 52
    // because even IE9 works not like others                                                              // 53
    this.onerror = this.onload = null                                                                      // 54
    cb(new Error('Failed to load ' + this.src), script)                                                    // 55
  }                                                                                                        // 56
}                                                                                                          // 57
                                                                                                           // 58
function ieOnEnd (script, cb) {                                                                            // 59
  script.onreadystatechange = function () {                                                                // 60
    if (this.readyState != 'complete' && this.readyState != 'loaded') return                               // 61
    this.onreadystatechange = null                                                                         // 62
    cb(null, script) // there is no way to catch loading errors in IE8                                     // 63
  }                                                                                                        // 64
}                                                                                                          // 65
                                                                                                           // 66
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/kadira:dochead/main.js");
require("./node_modules/meteor/kadira:dochead/lib/both.js");
require("./node_modules/meteor/kadira:dochead/lib/flow_router.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['kadira:dochead'] = {}, {
  DocHead: DocHead
});

})();
