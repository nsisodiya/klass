/*   
 klass.js 1.0.0
 (c) 2011-2013 Narendra Sisodiya, narendra@narendrasisodiya.com

 klass.js is distributed under the MIT license.

 For all details and documentation:
 https://github.com/nsisodiya/klass.js

 Change Log
 1.0.0		klass.js
 */

var klass = function(ChildProto) {
  var Child = function() {
    if (typeof ChildProto.initialize === "function") {
      ChildProto.initialize.apply(this, arguments);
    }
  };
  var Parent;
  if (this !== undefined && this.extend === klass) {
    Parent = this;
  } else {
    Parent = {};
    Parent.prototype = {};
  }
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  for (var i in ChildProto) {
    if (ChildProto.hasOwnProperty(i)) {
      Child.prototype[i] = ChildProto[i];
    }
  }

  Child.extend = klass;
  Child.parent = Parent;
  return Child;
};

klass.Singleton = function(CLASS_OBJ) {
  var CLASS = klass(CLASS_OBJ);
  var singleObj = new CLASS();
  return function() {
    return singleObj;
  };
};
