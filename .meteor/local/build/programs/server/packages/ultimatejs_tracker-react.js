(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var TrackerReact;

var require = meteorInstall({"node_modules":{"meteor":{"ultimatejs:tracker-react":{"main.js":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","./Tracker",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
exports.__esModule = true;                                                                                          //
exports.TrackerReactMixin = undefined;                                                                              //
                                                                                                                    //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                             //
                                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                    //
                                                                                                                    //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                       //
                                                                                                                    //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                              //
                                                                                                                    //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                         //
                                                                                                                    //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                //
                                                                                                                    //
var _Tracker = require('./Tracker');                                                                                // 5
                                                                                                                    //
var _Tracker2 = _interopRequireDefault(_Tracker);                                                                   //
                                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                   //
                                                                                                                    //
/**                                                                                                                 //
 * autorunRender(): The magic behind this computation is it only ever runs once after each time `render` is called.
 * When it does run that 2nd time, it's used just to force an update. The reactive function it wraps isn't even called.
 * Then on the update, the cycle repeats, and the computation is stopped, and a new one is made.                    //
 *                                                                                                                  //
 * Also, because the autorun is recreated on all React-triggered re-renders, any new code-paths possibly            //
 * taken in `render` will automatically begin tracking reactive dependencies, thereby MERGING both models of reactivity:
 * Meteor's various reactive data sources AND React's functional + unidirectional re-running of                     //
 * everything in component branches with state changes.                                                             //
 */                                                                                                                 //
                                                                                                                    //
/**                                                                                                                 //
 * Default. Provides a react component for inheritance as a clean alternative to mixins.                            //
 * Implementation:                                                                                                  //
 *    "class MyApp extends TrackerReact(React.Component) { (...)"                                                   //
 * @param Component {*} React Component                                                                             //
 */                                                                                                                 //
                                                                                                                    //
exports['default'] = TrackerReact = function TrackerReact(Component, opt) {                                         //
  // No reactive computations needed for Server Side Rendering                                                      //
  if (Meteor.isServer) return Component;                                                                            // 27
                                                                                                                    //
  var TrackerReactComponent = function (_Component) {                                                               //
    (0, _inherits3['default'])(TrackerReactComponent, _Component);                                                  //
                                                                                                                    //
    function TrackerReactComponent() {                                                                              // 31
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                        //
        args[_key] = arguments[_key];                                                                               //
      }                                                                                                             //
                                                                                                                    //
      (0, _classCallCheck3['default'])(this, TrackerReactComponent);                                                //
                                                                                                                    //
                                                                                                                    //
      /*                                                                                                            //
       Overloading the constructors `componentWillUnmount` method to ensure that computations are stopped and a     //
       forceUpdate prevented, without overwriting the prototype. This is a potential bug, as of React 14.7 the      //
       componentWillUnmount() method does not fire, if the top level component has one. It gets overwritten. This   //
       implementation is however similar to what a transpiler would do anyway.                                      //
        GitHub Issue: https://github.com/facebook/react/issues/6162                                                 //
       */                                                                                                           //
                                                                                                                    //
      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call.apply(_Component, [this].concat(args)));
                                                                                                                    //
      if (!_this.constructor.prototype._isExtended) {                                                               // 42
        (function () {                                                                                              //
          _this.constructor.prototype._isExtended = true;                                                           // 43
          var superComponentWillUnmount = _this.constructor.prototype.componentWillUnmount;                         // 44
                                                                                                                    //
          _this.constructor.prototype.componentWillUnmount = function () {                                          // 46
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {            //
              args[_key2] = arguments[_key2];                                                                       //
            }                                                                                                       //
                                                                                                                    //
            superComponentWillUnmount.call.apply(superComponentWillUnmount, [this].concat(args));                   // 47
                                                                                                                    //
            this._renderComputation.stop();                                                                         // 49
            this._renderComputation = null;                                                                         // 50
          };                                                                                                        //
        })();                                                                                                       //
      }                                                                                                             //
                                                                                                                    //
      _this.autorunRender();                                                                                        // 54
      return _this;                                                                                                 //
    }                                                                                                               //
                                                                                                                    //
    TrackerReactComponent.prototype.autorunRender = function () {                                                   // 29
      function autorunRender() {                                                                                    //
        var _this2 = this;                                                                                          //
                                                                                                                    //
        var oldRender = this.render;                                                                                // 58
                                                                                                                    //
        this.render = function () {                                                                                 // 60
          // Simple method we can offer in the `Meteor.Component` API                                               //
          return _this2.autorunOnce('_renderComputation', oldRender);                                               // 62
        };                                                                                                          //
      }                                                                                                             //
                                                                                                                    //
      return autorunRender;                                                                                         //
    }();                                                                                                            //
                                                                                                                    //
    TrackerReactComponent.prototype.autorunOnce = function () {                                                     // 29
      function autorunOnce(name, dataFunc) {                                                                        //
        return _Tracker2['default'].once(name, this, dataFunc, this.forceUpdate);                                   // 67
      }                                                                                                             //
                                                                                                                    //
      return autorunOnce;                                                                                           //
    }();                                                                                                            //
                                                                                                                    //
    return TrackerReactComponent;                                                                                   //
  }(Component);                                                                                                     //
                                                                                                                    //
  return TrackerReactComponent;                                                                                     // 71
};                                                                                                                  //
                                                                                                                    //
/**                                                                                                                 //
 * Mixin. Use with ES7 / TypeScript Decorator or Mixin-Module.                                                      //
 * Implementation:                                                                                                  //
 *   "@TrackerReactMixin                                                                                            //
 *    class MyApp extends React.Component { (...)"                                                                  //
 * @type {{componentWillMount: (function()), componentWillUnmount: (function()), autorunRender: (function()),       //
 *   autorunOnce: (function(*=, *=))}}                                                                              //
 */                                                                                                                 //
/**                                                                                                                 //
 * Tracker is available as a global variable but is extended for one time computations/invalidation.                //
 * Implementation: See ./Tracker.js                                                                                 //
 */                                                                                                                 //
                                                                                                                    //
                                                                                                                    //
var TrackerReactMixin = exports.TrackerReactMixin = {                                                               // 83
  componentWillMount: function () {                                                                                 // 84
    function componentWillMount() {                                                                                 //
      // No reactive computations needed for Server Side Rendering                                                  //
      if (Meteor.isServer) return;                                                                                  // 86
                                                                                                                    //
      this.autorunRender();                                                                                         // 88
    }                                                                                                               //
                                                                                                                    //
    return componentWillMount;                                                                                      //
  }(),                                                                                                              //
  componentWillUnmount: function () {                                                                               // 90
    function componentWillUnmount() {                                                                               //
      // No reactive computations needed for Server Side Rendering                                                  //
      if (Meteor.isServer) return;                                                                                  // 92
                                                                                                                    //
      this._renderComputation.stop();                                                                               // 94
      this._renderComputation = null;                                                                               // 95
    }                                                                                                               //
                                                                                                                    //
    return componentWillUnmount;                                                                                    //
  }(),                                                                                                              //
  autorunRender: function () {                                                                                      // 97
    function autorunRender() {                                                                                      //
      var _this3 = this;                                                                                            //
                                                                                                                    //
      var oldRender = this.render;                                                                                  // 98
                                                                                                                    //
      this.render = function () {                                                                                   // 100
        // Simple method we can offer in the `Meteor.Component` API                                                 //
        return _this3.autorunOnce('_renderComputation', oldRender);                                                 // 102
      };                                                                                                            //
    }                                                                                                               //
                                                                                                                    //
    return autorunRender;                                                                                           //
  }(),                                                                                                              //
  autorunOnce: function () {                                                                                        // 105
    function autorunOnce(name, dataFunc) {                                                                          //
      return _Tracker2['default'].once(name, this, dataFunc, this.forceUpdate);                                     // 106
    }                                                                                                               //
                                                                                                                    //
    return autorunOnce;                                                                                             //
  }()                                                                                                               //
};                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Tracker.js":["meteor/tracker",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/Tracker.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
exports.__esModule = true;                                                                                          //
                                                                                                                    //
var _tracker = require('meteor/tracker');                                                                           // 2
                                                                                                                    //
/**                                                                                                                 //
 * Create "one-time" reactive computations with Tracker                                                             //
 * @param name {string} Component Reactive Data Property for Computation                                            //
 * @param context {*} Target Component Instance                                                                     //
 * @param dataFunc {*} Data Context                                                                                 //
 * @param updateFunc {*} Component ForceUpdate Method - To re-trigger render function                               //
 * @returns {*} Symbol(react.element) - Result data-element composition                                             //
 */                                                                                                                 //
_tracker.Tracker.once = function (name, context, dataFunc, updateFunc) {                                            // 12
  var data = void 0;                                                                                                // 13
                                                                                                                    //
  // Stop it just in case the autorun never re-ran                                                                  //
  if (context[name] && !context[name].stopped) context[name].stop();                                                // 12
                                                                                                                    //
  // NOTE: we may want to run this code in `setTimeout(func, 0)` so it doesn't impact the rendering phase at all    //
  context[name] = _tracker.Tracker.nonreactive(function () {                                                        // 12
    return _tracker.Tracker.autorun(function (c) {                                                                  // 20
      if (c.firstRun) {                                                                                             // 21
                                                                                                                    //
        data = dataFunc.call(context);                                                                              // 23
      } else {                                                                                                      //
                                                                                                                    //
        // Stop autorun here so rendering "phase" doesn't have extra work of also stopping autoruns; likely not too
        // important though.                                                                                        //
        if (context[name]) context[name].stop();                                                                    // 29
                                                                                                                    //
        // where `forceUpdate` will be called in above implementation                                               //
        updateFunc.call(context);                                                                                   // 25
      }                                                                                                             //
    });                                                                                                             //
  });                                                                                                               //
                                                                                                                    //
  return data;                                                                                                      // 37
}; // Also available as a global                                                                                    //
                                                                                                                    //
                                                                                                                    //
exports['default'] = _tracker.Tracker;                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/ultimatejs:tracker-react/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['ultimatejs:tracker-react'] = exports;

})();

//# sourceMappingURL=ultimatejs_tracker-react.js.map
