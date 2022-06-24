import "./chunk-JC4IRQUL.js";

// node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js
var e = function(t2, n2) {
  return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t3) {
    e2.__proto__ = t3;
  } || function(e2, t3) {
    for (var n3 in t3)
      Object.prototype.hasOwnProperty.call(t3, n3) && (e2[n3] = t3[n3]);
  }, e(t2, n2);
};
function t(t2, n2) {
  if (typeof n2 != "function" && n2 !== null)
    throw new TypeError("Class extends value " + String(n2) + " is not a constructor or null");
  function r2() {
    this.constructor = t2;
  }
  e(t2, n2), t2.prototype = n2 === null ? Object.create(n2) : (r2.prototype = n2.prototype, new r2());
}
var n = function() {
  return n = Object.assign || function(e2) {
    for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
      for (var o2 in t2 = arguments[n2])
        Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
    return e2;
  }, n.apply(this, arguments);
};
function r(e2, t2) {
  var n2 = {};
  for (var r2 in e2)
    Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
    var o2 = 0;
    for (r2 = Object.getOwnPropertySymbols(e2); o2 < r2.length; o2++)
      t2.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[o2]) && (n2[r2[o2]] = e2[r2[o2]]);
  }
  return n2;
}
function o(e2, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(o2, i2) {
    function a2(e3) {
      try {
        s2(r2.next(e3));
      } catch (e4) {
        i2(e4);
      }
    }
    function c2(e3) {
      try {
        s2(r2.throw(e3));
      } catch (e4) {
        i2(e4);
      }
    }
    function s2(e3) {
      var t3;
      e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2(function(e4) {
        e4(t3);
      })).then(a2, c2);
    }
    s2((r2 = r2.apply(e2, t2 || [])).next());
  });
}
function i(e2, t2) {
  var n2, r2, o2, i2, a2 = { label: 0, sent: function() {
    if (1 & o2[0])
      throw o2[1];
    return o2[1];
  }, trys: [], ops: [] };
  return i2 = { next: c2(0), throw: c2(1), return: c2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
    return this;
  }), i2;
  function c2(i3) {
    return function(c3) {
      return function(i4) {
        if (n2)
          throw new TypeError("Generator is already executing.");
        for (; a2; )
          try {
            if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done)
              return o2;
            switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
              case 0:
              case 1:
                o2 = i4;
                break;
              case 4:
                return a2.label++, { value: i4[1], done: false };
              case 5:
                a2.label++, r2 = i4[1], i4 = [0];
                continue;
              case 7:
                i4 = a2.ops.pop(), a2.trys.pop();
                continue;
              default:
                if (!(o2 = a2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || i4[0] !== 6 && i4[0] !== 2)) {
                  a2 = 0;
                  continue;
                }
                if (i4[0] === 3 && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                  a2.label = i4[1];
                  break;
                }
                if (i4[0] === 6 && a2.label < o2[1]) {
                  a2.label = o2[1], o2 = i4;
                  break;
                }
                if (o2 && a2.label < o2[2]) {
                  a2.label = o2[2], a2.ops.push(i4);
                  break;
                }
                o2[2] && a2.ops.pop(), a2.trys.pop();
                continue;
            }
            i4 = t2.call(e2, a2);
          } catch (e3) {
            i4 = [6, e3], r2 = 0;
          } finally {
            n2 = o2 = 0;
          }
        if (5 & i4[0])
          throw i4[1];
        return { value: i4[0] ? i4[1] : void 0, done: true };
      }([i3, c3]);
    };
  }
}
function a(e2, t2) {
  var n2 = typeof Symbol == "function" && e2[Symbol.iterator];
  if (!n2)
    return e2;
  var r2, o2, i2 = n2.call(e2), a2 = [];
  try {
    for (; (t2 === void 0 || t2-- > 0) && !(r2 = i2.next()).done; )
      a2.push(r2.value);
  } catch (e3) {
    o2 = { error: e3 };
  } finally {
    try {
      r2 && !r2.done && (n2 = i2.return) && n2.call(i2);
    } finally {
      if (o2)
        throw o2.error;
    }
  }
  return a2;
}
function c(e2, t2, n2) {
  if (n2 || arguments.length === 2)
    for (var r2, o2 = 0, i2 = t2.length; o2 < i2; o2++)
      !r2 && o2 in t2 || (r2 || (r2 = Array.prototype.slice.call(t2, 0, o2)), r2[o2] = t2[o2]);
  return e2.concat(r2 || Array.prototype.slice.call(t2));
}
var s = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function u(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
function l(e2, t2) {
  return e2(t2 = { exports: {} }, t2.exports), t2.exports;
}
var f;
var d;
var h = function(e2) {
  return e2 && e2.Math == Math && e2;
};
var p = h(typeof globalThis == "object" && globalThis) || h(typeof window == "object" && window) || h(typeof self == "object" && self) || h(typeof s == "object" && s) || function() {
  return this;
}() || Function("return this")();
var y = function(e2) {
  try {
    return !!e2();
  } catch (e3) {
    return true;
  }
};
var v = !y(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var m = !y(function() {
  var e2 = function() {
  }.bind();
  return typeof e2 != "function" || e2.hasOwnProperty("prototype");
});
var b = Function.prototype.call;
var g = m ? b.bind(b) : function() {
  return b.apply(b, arguments);
};
var w = {}.propertyIsEnumerable;
var S = Object.getOwnPropertyDescriptor;
var k = S && !w.call({ 1: 2 }, 1) ? function(e2) {
  var t2 = S(this, e2);
  return !!t2 && t2.enumerable;
} : w;
var _ = { f: k };
var I = function(e2, t2) {
  return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
};
var O = Function.prototype;
var x = O.bind;
var T = O.call;
var j = m && x.bind(T, T);
var C = m ? function(e2) {
  return e2 && j(e2);
} : function(e2) {
  return e2 && function() {
    return T.apply(e2, arguments);
  };
};
var R = C({}.toString);
var L = C("".slice);
var E = function(e2) {
  return L(R(e2), 8, -1);
};
var W = p.Object;
var Z = C("".split);
var G = y(function() {
  return !W("z").propertyIsEnumerable(0);
}) ? function(e2) {
  return E(e2) == "String" ? Z(e2, "") : W(e2);
} : W;
var P = p.TypeError;
var A = function(e2) {
  if (e2 == null)
    throw P("Can't call method on " + e2);
  return e2;
};
var X = function(e2) {
  return G(A(e2));
};
var F = function(e2) {
  return typeof e2 == "function";
};
var K = function(e2) {
  return typeof e2 == "object" ? e2 !== null : F(e2);
};
var N = function(e2) {
  return F(e2) ? e2 : void 0;
};
var U = function(e2, t2) {
  return arguments.length < 2 ? N(p[e2]) : p[e2] && p[e2][t2];
};
var Y = C({}.isPrototypeOf);
var H = U("navigator", "userAgent") || "";
var D = p.process;
var J = p.Deno;
var V = D && D.versions || J && J.version;
var z = V && V.v8;
z && (d = (f = z.split("."))[0] > 0 && f[0] < 4 ? 1 : +(f[0] + f[1])), !d && H && (!(f = H.match(/Edge\/(\d+)/)) || f[1] >= 74) && (f = H.match(/Chrome\/(\d+)/)) && (d = +f[1]);
var M = d;
var B = !!Object.getOwnPropertySymbols && !y(function() {
  var e2 = Symbol();
  return !String(e2) || !(Object(e2) instanceof Symbol) || !Symbol.sham && M && M < 41;
});
var Q = B && !Symbol.sham && typeof Symbol.iterator == "symbol";
var q = p.Object;
var $ = Q ? function(e2) {
  return typeof e2 == "symbol";
} : function(e2) {
  var t2 = U("Symbol");
  return F(t2) && Y(t2.prototype, q(e2));
};
var ee = p.String;
var te = function(e2) {
  try {
    return ee(e2);
  } catch (e3) {
    return "Object";
  }
};
var ne = p.TypeError;
var re = function(e2) {
  if (F(e2))
    return e2;
  throw ne(te(e2) + " is not a function");
};
var oe = function(e2, t2) {
  var n2 = e2[t2];
  return n2 == null ? void 0 : re(n2);
};
var ie = p.TypeError;
var ae = Object.defineProperty;
var ce = function(e2, t2) {
  try {
    ae(p, e2, { value: t2, configurable: true, writable: true });
  } catch (n2) {
    p[e2] = t2;
  }
  return t2;
};
var se = p["__core-js_shared__"] || ce("__core-js_shared__", {});
var ue = l(function(e2) {
  (e2.exports = function(e3, t2) {
    return se[e3] || (se[e3] = t2 !== void 0 ? t2 : {});
  })("versions", []).push({ version: "3.22.6", mode: "global", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.22.6/LICENSE", source: "https://github.com/zloirock/core-js" });
});
var le = p.Object;
var fe = function(e2) {
  return le(A(e2));
};
var de = C({}.hasOwnProperty);
var he = Object.hasOwn || function(e2, t2) {
  return de(fe(e2), t2);
};
var pe = 0;
var ye = Math.random();
var ve = C(1 .toString);
var me = function(e2) {
  return "Symbol(" + (e2 === void 0 ? "" : e2) + ")_" + ve(++pe + ye, 36);
};
var be = ue("wks");
var ge = p.Symbol;
var we = ge && ge.for;
var Se = Q ? ge : ge && ge.withoutSetter || me;
var ke = function(e2) {
  if (!he(be, e2) || !B && typeof be[e2] != "string") {
    var t2 = "Symbol." + e2;
    B && he(ge, e2) ? be[e2] = ge[e2] : be[e2] = Q && we ? we(t2) : Se(t2);
  }
  return be[e2];
};
var _e = p.TypeError;
var Ie = ke("toPrimitive");
var Oe = function(e2, t2) {
  if (!K(e2) || $(e2))
    return e2;
  var n2, r2 = oe(e2, Ie);
  if (r2) {
    if (t2 === void 0 && (t2 = "default"), n2 = g(r2, e2, t2), !K(n2) || $(n2))
      return n2;
    throw _e("Can't convert object to primitive value");
  }
  return t2 === void 0 && (t2 = "number"), function(e3, t3) {
    var n3, r3;
    if (t3 === "string" && F(n3 = e3.toString) && !K(r3 = g(n3, e3)))
      return r3;
    if (F(n3 = e3.valueOf) && !K(r3 = g(n3, e3)))
      return r3;
    if (t3 !== "string" && F(n3 = e3.toString) && !K(r3 = g(n3, e3)))
      return r3;
    throw ie("Can't convert object to primitive value");
  }(e2, t2);
};
var xe = function(e2) {
  var t2 = Oe(e2, "string");
  return $(t2) ? t2 : t2 + "";
};
var Te = p.document;
var je = K(Te) && K(Te.createElement);
var Ce = function(e2) {
  return je ? Te.createElement(e2) : {};
};
var Re = !v && !y(function() {
  return Object.defineProperty(Ce("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var Le = Object.getOwnPropertyDescriptor;
var Ee = { f: v ? Le : function(e2, t2) {
  if (e2 = X(e2), t2 = xe(t2), Re)
    try {
      return Le(e2, t2);
    } catch (e3) {
    }
  if (he(e2, t2))
    return I(!g(_.f, e2, t2), e2[t2]);
} };
var We = v && y(function() {
  return Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype != 42;
});
var Ze = p.String;
var Ge = p.TypeError;
var Pe = function(e2) {
  if (K(e2))
    return e2;
  throw Ge(Ze(e2) + " is not an object");
};
var Ae = p.TypeError;
var Xe = Object.defineProperty;
var Fe = Object.getOwnPropertyDescriptor;
var Ke = { f: v ? We ? function(e2, t2, n2) {
  if (Pe(e2), t2 = xe(t2), Pe(n2), typeof e2 == "function" && t2 === "prototype" && "value" in n2 && "writable" in n2 && !n2.writable) {
    var r2 = Fe(e2, t2);
    r2 && r2.writable && (e2[t2] = n2.value, n2 = { configurable: "configurable" in n2 ? n2.configurable : r2.configurable, enumerable: "enumerable" in n2 ? n2.enumerable : r2.enumerable, writable: false });
  }
  return Xe(e2, t2, n2);
} : Xe : function(e2, t2, n2) {
  if (Pe(e2), t2 = xe(t2), Pe(n2), Re)
    try {
      return Xe(e2, t2, n2);
    } catch (e3) {
    }
  if ("get" in n2 || "set" in n2)
    throw Ae("Accessors not supported");
  return "value" in n2 && (e2[t2] = n2.value), e2;
} };
var Ne = v ? function(e2, t2, n2) {
  return Ke.f(e2, t2, I(1, n2));
} : function(e2, t2, n2) {
  return e2[t2] = n2, e2;
};
var Ue = Function.prototype;
var Ye = v && Object.getOwnPropertyDescriptor;
var He = he(Ue, "name");
var De = { EXISTS: He, PROPER: He && function() {
}.name === "something", CONFIGURABLE: He && (!v || v && Ye(Ue, "name").configurable) };
var Je = C(Function.toString);
F(se.inspectSource) || (se.inspectSource = function(e2) {
  return Je(e2);
});
var Ve;
var ze;
var Me;
var Be = se.inspectSource;
var Qe = p.WeakMap;
var qe = F(Qe) && /native code/.test(Be(Qe));
var $e = ue("keys");
var et = function(e2) {
  return $e[e2] || ($e[e2] = me(e2));
};
var tt = {};
var nt = p.TypeError;
var rt = p.WeakMap;
if (qe || se.state) {
  ot = se.state || (se.state = new rt()), it = C(ot.get), at = C(ot.has), ct = C(ot.set);
  Ve = function(e2, t2) {
    if (at(ot, e2))
      throw new nt("Object already initialized");
    return t2.facade = e2, ct(ot, e2, t2), t2;
  }, ze = function(e2) {
    return it(ot, e2) || {};
  }, Me = function(e2) {
    return at(ot, e2);
  };
} else {
  st = et("state");
  tt[st] = true, Ve = function(e2, t2) {
    if (he(e2, st))
      throw new nt("Object already initialized");
    return t2.facade = e2, Ne(e2, st, t2), t2;
  }, ze = function(e2) {
    return he(e2, st) ? e2[st] : {};
  }, Me = function(e2) {
    return he(e2, st);
  };
}
var ot;
var it;
var at;
var ct;
var st;
var ut = { set: Ve, get: ze, has: Me, enforce: function(e2) {
  return Me(e2) ? ze(e2) : Ve(e2, {});
}, getterFor: function(e2) {
  return function(t2) {
    var n2;
    if (!K(t2) || (n2 = ze(t2)).type !== e2)
      throw nt("Incompatible receiver, " + e2 + " required");
    return n2;
  };
} };
var lt = l(function(e2) {
  var t2 = De.CONFIGURABLE, n2 = ut.enforce, r2 = ut.get, o2 = Object.defineProperty, i2 = v && !y(function() {
    return o2(function() {
    }, "length", { value: 8 }).length !== 8;
  }), a2 = String(String).split("String"), c2 = e2.exports = function(e3, r3, c3) {
    if (String(r3).slice(0, 7) === "Symbol(" && (r3 = "[" + String(r3).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), c3 && c3.getter && (r3 = "get " + r3), c3 && c3.setter && (r3 = "set " + r3), (!he(e3, "name") || t2 && e3.name !== r3) && o2(e3, "name", { value: r3, configurable: true }), i2 && c3 && he(c3, "arity") && e3.length !== c3.arity && o2(e3, "length", { value: c3.arity }), c3 && he(c3, "constructor") && c3.constructor) {
      if (v)
        try {
          o2(e3, "prototype", { writable: false });
        } catch (e4) {
        }
    } else
      e3.prototype = void 0;
    var s2 = n2(e3);
    return he(s2, "source") || (s2.source = a2.join(typeof r3 == "string" ? r3 : "")), e3;
  };
  Function.prototype.toString = c2(function() {
    return F(this) && r2(this).source || Be(this);
  }, "toString");
});
var ft = function(e2, t2, n2, r2) {
  r2 || (r2 = {});
  var o2 = r2.enumerable, i2 = r2.name !== void 0 ? r2.name : t2;
  return F(n2) && lt(n2, i2, r2), r2.global ? o2 ? e2[t2] = n2 : ce(t2, n2) : (r2.unsafe ? e2[t2] && (o2 = true) : delete e2[t2], o2 ? e2[t2] = n2 : Ne(e2, t2, n2)), e2;
};
var dt = Math.ceil;
var ht = Math.floor;
var pt = Math.trunc || function(e2) {
  var t2 = +e2;
  return (t2 > 0 ? ht : dt)(t2);
};
var yt = function(e2) {
  var t2 = +e2;
  return t2 != t2 || t2 === 0 ? 0 : pt(t2);
};
var vt = Math.max;
var mt = Math.min;
var bt = function(e2, t2) {
  var n2 = yt(e2);
  return n2 < 0 ? vt(n2 + t2, 0) : mt(n2, t2);
};
var gt = Math.min;
var wt = function(e2) {
  return e2 > 0 ? gt(yt(e2), 9007199254740991) : 0;
};
var St = function(e2) {
  return wt(e2.length);
};
var kt = function(e2) {
  return function(t2, n2, r2) {
    var o2, i2 = X(t2), a2 = St(i2), c2 = bt(r2, a2);
    if (e2 && n2 != n2) {
      for (; a2 > c2; )
        if ((o2 = i2[c2++]) != o2)
          return true;
    } else
      for (; a2 > c2; c2++)
        if ((e2 || c2 in i2) && i2[c2] === n2)
          return e2 || c2 || 0;
    return !e2 && -1;
  };
};
var _t = { includes: kt(true), indexOf: kt(false) };
var It = _t.indexOf;
var Ot = C([].push);
var xt = function(e2, t2) {
  var n2, r2 = X(e2), o2 = 0, i2 = [];
  for (n2 in r2)
    !he(tt, n2) && he(r2, n2) && Ot(i2, n2);
  for (; t2.length > o2; )
    he(r2, n2 = t2[o2++]) && (~It(i2, n2) || Ot(i2, n2));
  return i2;
};
var Tt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var jt = Tt.concat("length", "prototype");
var Ct = { f: Object.getOwnPropertyNames || function(e2) {
  return xt(e2, jt);
} };
var Rt = { f: Object.getOwnPropertySymbols };
var Lt = C([].concat);
var Et = U("Reflect", "ownKeys") || function(e2) {
  var t2 = Ct.f(Pe(e2)), n2 = Rt.f;
  return n2 ? Lt(t2, n2(e2)) : t2;
};
var Wt = function(e2, t2, n2) {
  for (var r2 = Et(t2), o2 = Ke.f, i2 = Ee.f, a2 = 0; a2 < r2.length; a2++) {
    var c2 = r2[a2];
    he(e2, c2) || n2 && he(n2, c2) || o2(e2, c2, i2(t2, c2));
  }
};
var Zt = /#|\.prototype\./;
var Gt = function(e2, t2) {
  var n2 = At[Pt(e2)];
  return n2 == Ft || n2 != Xt && (F(t2) ? y(t2) : !!t2);
};
var Pt = Gt.normalize = function(e2) {
  return String(e2).replace(Zt, ".").toLowerCase();
};
var At = Gt.data = {};
var Xt = Gt.NATIVE = "N";
var Ft = Gt.POLYFILL = "P";
var Kt = Gt;
var Nt = Ee.f;
var Ut = function(e2, t2) {
  var n2, r2, o2, i2, a2, c2 = e2.target, s2 = e2.global, u2 = e2.stat;
  if (n2 = s2 ? p : u2 ? p[c2] || ce(c2, {}) : (p[c2] || {}).prototype)
    for (r2 in t2) {
      if (i2 = t2[r2], o2 = e2.dontCallGetSet ? (a2 = Nt(n2, r2)) && a2.value : n2[r2], !Kt(s2 ? r2 : c2 + (u2 ? "." : "#") + r2, e2.forced) && o2 !== void 0) {
        if (typeof i2 == typeof o2)
          continue;
        Wt(i2, o2);
      }
      (e2.sham || o2 && o2.sham) && Ne(i2, "sham", true), ft(n2, r2, i2, e2);
    }
};
var Yt = {};
Yt[ke("toStringTag")] = "z";
var Ht;
var Dt = String(Yt) === "[object z]";
var Jt = ke("toStringTag");
var Vt = p.Object;
var zt = E(function() {
  return arguments;
}()) == "Arguments";
var Mt = Dt ? E : function(e2) {
  var t2, n2, r2;
  return e2 === void 0 ? "Undefined" : e2 === null ? "Null" : typeof (n2 = function(e3, t3) {
    try {
      return e3[t3];
    } catch (e4) {
    }
  }(t2 = Vt(e2), Jt)) == "string" ? n2 : zt ? E(t2) : (r2 = E(t2)) == "Object" && F(t2.callee) ? "Arguments" : r2;
};
var Bt = p.String;
var Qt = function(e2) {
  if (Mt(e2) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return Bt(e2);
};
var qt = ke("match");
var $t = p.TypeError;
var en = function(e2) {
  if (function(e3) {
    var t2;
    return K(e3) && ((t2 = e3[qt]) !== void 0 ? !!t2 : E(e3) == "RegExp");
  }(e2))
    throw $t("The method doesn't accept regular expressions");
  return e2;
};
var tn = ke("match");
var nn = function(e2) {
  var t2 = /./;
  try {
    "/./"[e2](t2);
  } catch (n2) {
    try {
      return t2[tn] = false, "/./"[e2](t2);
    } catch (e3) {
    }
  }
  return false;
};
var rn = Ee.f;
var on = C("".startsWith);
var an = C("".slice);
var cn = Math.min;
var sn = nn("startsWith");
var un = !(sn || (Ht = rn(String.prototype, "startsWith"), !Ht || Ht.writable));
Ut({ target: "String", proto: true, forced: !un && !sn }, { startsWith: function(e2) {
  var t2 = Qt(A(this));
  en(e2);
  var n2 = wt(cn(arguments.length > 1 ? arguments[1] : void 0, t2.length)), r2 = Qt(e2);
  return on ? on(t2, r2, n2) : an(t2, n2, n2 + r2.length) === r2;
} });
var ln = function(e2, t2) {
  return C(p[e2].prototype[t2]);
};
ln("String", "startsWith");
var fn = Array.isArray || function(e2) {
  return E(e2) == "Array";
};
var dn = function(e2, t2, n2) {
  var r2 = xe(t2);
  r2 in e2 ? Ke.f(e2, r2, I(0, n2)) : e2[r2] = n2;
};
var hn = function() {
};
var pn = [];
var yn = U("Reflect", "construct");
var vn = /^\s*(?:class|function)\b/;
var mn = C(vn.exec);
var bn = !vn.exec(hn);
var gn = function(e2) {
  if (!F(e2))
    return false;
  try {
    return yn(hn, pn, e2), true;
  } catch (e3) {
    return false;
  }
};
var wn = function(e2) {
  if (!F(e2))
    return false;
  switch (Mt(e2)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return bn || !!mn(vn, Be(e2));
  } catch (e3) {
    return true;
  }
};
wn.sham = true;
var Sn;
var kn = !yn || y(function() {
  var e2;
  return gn(gn.call) || !gn(Object) || !gn(function() {
    e2 = true;
  }) || e2;
}) ? wn : gn;
var _n = ke("species");
var In = p.Array;
var On = function(e2, t2) {
  return new (function(e3) {
    var t3;
    return fn(e3) && (t3 = e3.constructor, (kn(t3) && (t3 === In || fn(t3.prototype)) || K(t3) && (t3 = t3[_n]) === null) && (t3 = void 0)), t3 === void 0 ? In : t3;
  }(e2))(t2 === 0 ? 0 : t2);
};
var xn = ke("species");
var Tn = ke("isConcatSpreadable");
var jn = p.TypeError;
var Cn = M >= 51 || !y(function() {
  var e2 = [];
  return e2[Tn] = false, e2.concat()[0] !== e2;
});
var Rn = (Sn = "concat", M >= 51 || !y(function() {
  var e2 = [];
  return (e2.constructor = {})[xn] = function() {
    return { foo: 1 };
  }, e2[Sn](Boolean).foo !== 1;
}));
var Ln = function(e2) {
  if (!K(e2))
    return false;
  var t2 = e2[Tn];
  return t2 !== void 0 ? !!t2 : fn(e2);
};
Ut({ target: "Array", proto: true, arity: 1, forced: !Cn || !Rn }, { concat: function(e2) {
  var t2, n2, r2, o2, i2, a2 = fe(this), c2 = On(a2, 0), s2 = 0;
  for (t2 = -1, r2 = arguments.length; t2 < r2; t2++)
    if (Ln(i2 = t2 === -1 ? a2 : arguments[t2])) {
      if (s2 + (o2 = St(i2)) > 9007199254740991)
        throw jn("Maximum allowed index exceeded");
      for (n2 = 0; n2 < o2; n2++, s2++)
        n2 in i2 && dn(c2, s2, i2[n2]);
    } else {
      if (s2 >= 9007199254740991)
        throw jn("Maximum allowed index exceeded");
      dn(c2, s2++, i2);
    }
  return c2.length = s2, c2;
} });
var En = Dt ? {}.toString : function() {
  return "[object " + Mt(this) + "]";
};
Dt || ft(Object.prototype, "toString", En, { unsafe: true });
var Wn;
var Zn = Object.keys || function(e2) {
  return xt(e2, Tt);
};
var Gn = v && !We ? Object.defineProperties : function(e2, t2) {
  Pe(e2);
  for (var n2, r2 = X(t2), o2 = Zn(t2), i2 = o2.length, a2 = 0; i2 > a2; )
    Ke.f(e2, n2 = o2[a2++], r2[n2]);
  return e2;
};
var Pn = { f: Gn };
var An = U("document", "documentElement");
var Xn = et("IE_PROTO");
var Fn = function() {
};
var Kn = function(e2) {
  return "<script>" + e2 + "<\/script>";
};
var Nn = function(e2) {
  e2.write(Kn("")), e2.close();
  var t2 = e2.parentWindow.Object;
  return e2 = null, t2;
};
var Un = function() {
  try {
    Wn = new ActiveXObject("htmlfile");
  } catch (e3) {
  }
  var e2, t2;
  Un = typeof document != "undefined" ? document.domain && Wn ? Nn(Wn) : ((t2 = Ce("iframe")).style.display = "none", An.appendChild(t2), t2.src = String("javascript:"), (e2 = t2.contentWindow.document).open(), e2.write(Kn("document.F=Object")), e2.close(), e2.F) : Nn(Wn);
  for (var n2 = Tt.length; n2--; )
    delete Un.prototype[Tt[n2]];
  return Un();
};
tt[Xn] = true;
var Yn = Object.create || function(e2, t2) {
  var n2;
  return e2 !== null ? (Fn.prototype = Pe(e2), n2 = new Fn(), Fn.prototype = null, n2[Xn] = e2) : n2 = Un(), t2 === void 0 ? n2 : Pn.f(n2, t2);
};
var Hn = p.Array;
var Dn = Math.max;
var Jn = Ct.f;
var Vn = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
var zn = function(e2) {
  try {
    return Jn(e2);
  } catch (e3) {
    return function(e4, t2, n2) {
      for (var r2 = St(e4), o2 = bt(t2, r2), i2 = bt(n2 === void 0 ? r2 : n2, r2), a2 = Hn(Dn(i2 - o2, 0)), c2 = 0; o2 < i2; o2++, c2++)
        dn(a2, c2, e4[o2]);
      return a2.length = c2, a2;
    }(Vn);
  }
};
var Mn = { f: function(e2) {
  return Vn && E(e2) == "Window" ? zn(e2) : Jn(X(e2));
} };
var Bn = { f: ke };
var Qn = p;
var qn = Ke.f;
var $n = function(e2) {
  var t2 = Qn.Symbol || (Qn.Symbol = {});
  he(t2, e2) || qn(t2, e2, { value: Bn.f(e2) });
};
var er = function() {
  var e2 = U("Symbol"), t2 = e2 && e2.prototype, n2 = t2 && t2.valueOf, r2 = ke("toPrimitive");
  t2 && !t2[r2] && ft(t2, r2, function(e3) {
    return g(n2, this);
  }, { arity: 1 });
};
var tr = Ke.f;
var nr = ke("toStringTag");
var rr = function(e2, t2, n2) {
  e2 && !n2 && (e2 = e2.prototype), e2 && !he(e2, nr) && tr(e2, nr, { configurable: true, value: t2 });
};
var or = C(C.bind);
var ir = function(e2, t2) {
  return re(e2), t2 === void 0 ? e2 : m ? or(e2, t2) : function() {
    return e2.apply(t2, arguments);
  };
};
var ar = C([].push);
var cr = function(e2) {
  var t2 = e2 == 1, n2 = e2 == 2, r2 = e2 == 3, o2 = e2 == 4, i2 = e2 == 6, a2 = e2 == 7, c2 = e2 == 5 || i2;
  return function(s2, u2, l2, f2) {
    for (var d2, h2, p2 = fe(s2), y2 = G(p2), v2 = ir(u2, l2), m2 = St(y2), b2 = 0, g2 = f2 || On, w2 = t2 ? g2(s2, m2) : n2 || a2 ? g2(s2, 0) : void 0; m2 > b2; b2++)
      if ((c2 || b2 in y2) && (h2 = v2(d2 = y2[b2], b2, p2), e2))
        if (t2)
          w2[b2] = h2;
        else if (h2)
          switch (e2) {
            case 3:
              return true;
            case 5:
              return d2;
            case 6:
              return b2;
            case 2:
              ar(w2, d2);
          }
        else
          switch (e2) {
            case 4:
              return false;
            case 7:
              ar(w2, d2);
          }
    return i2 ? -1 : r2 || o2 ? o2 : w2;
  };
};
var sr = { forEach: cr(0), map: cr(1), filter: cr(2), some: cr(3), every: cr(4), find: cr(5), findIndex: cr(6), filterReject: cr(7) }.forEach;
var ur = et("hidden");
var lr = ut.set;
var fr = ut.getterFor("Symbol");
var dr = Object.prototype;
var hr = p.Symbol;
var pr = hr && hr.prototype;
var yr = p.TypeError;
var vr = p.QObject;
var mr = Ee.f;
var br = Ke.f;
var gr = Mn.f;
var wr = _.f;
var Sr = C([].push);
var kr = ue("symbols");
var _r = ue("op-symbols");
var Ir = ue("wks");
var Or = !vr || !vr.prototype || !vr.prototype.findChild;
var xr = v && y(function() {
  return Yn(br({}, "a", { get: function() {
    return br(this, "a", { value: 7 }).a;
  } })).a != 7;
}) ? function(e2, t2, n2) {
  var r2 = mr(dr, t2);
  r2 && delete dr[t2], br(e2, t2, n2), r2 && e2 !== dr && br(dr, t2, r2);
} : br;
var Tr = function(e2, t2) {
  var n2 = kr[e2] = Yn(pr);
  return lr(n2, { type: "Symbol", tag: e2, description: t2 }), v || (n2.description = t2), n2;
};
var jr = function(e2, t2, n2) {
  e2 === dr && jr(_r, t2, n2), Pe(e2);
  var r2 = xe(t2);
  return Pe(n2), he(kr, r2) ? (n2.enumerable ? (he(e2, ur) && e2[ur][r2] && (e2[ur][r2] = false), n2 = Yn(n2, { enumerable: I(0, false) })) : (he(e2, ur) || br(e2, ur, I(1, {})), e2[ur][r2] = true), xr(e2, r2, n2)) : br(e2, r2, n2);
};
var Cr = function(e2, t2) {
  Pe(e2);
  var n2 = X(t2), r2 = Zn(n2).concat(Wr(n2));
  return sr(r2, function(t3) {
    v && !g(Rr, n2, t3) || jr(e2, t3, n2[t3]);
  }), e2;
};
var Rr = function(e2) {
  var t2 = xe(e2), n2 = g(wr, this, t2);
  return !(this === dr && he(kr, t2) && !he(_r, t2)) && (!(n2 || !he(this, t2) || !he(kr, t2) || he(this, ur) && this[ur][t2]) || n2);
};
var Lr = function(e2, t2) {
  var n2 = X(e2), r2 = xe(t2);
  if (n2 !== dr || !he(kr, r2) || he(_r, r2)) {
    var o2 = mr(n2, r2);
    return !o2 || !he(kr, r2) || he(n2, ur) && n2[ur][r2] || (o2.enumerable = true), o2;
  }
};
var Er = function(e2) {
  var t2 = gr(X(e2)), n2 = [];
  return sr(t2, function(e3) {
    he(kr, e3) || he(tt, e3) || Sr(n2, e3);
  }), n2;
};
var Wr = function(e2) {
  var t2 = e2 === dr, n2 = gr(t2 ? _r : X(e2)), r2 = [];
  return sr(n2, function(e3) {
    !he(kr, e3) || t2 && !he(dr, e3) || Sr(r2, kr[e3]);
  }), r2;
};
B || (pr = (hr = function() {
  if (Y(pr, this))
    throw yr("Symbol is not a constructor");
  var e2 = arguments.length && arguments[0] !== void 0 ? Qt(arguments[0]) : void 0, t2 = me(e2), n2 = function(e3) {
    this === dr && g(n2, _r, e3), he(this, ur) && he(this[ur], t2) && (this[ur][t2] = false), xr(this, t2, I(1, e3));
  };
  return v && Or && xr(dr, t2, { configurable: true, set: n2 }), Tr(t2, e2);
}).prototype, ft(pr, "toString", function() {
  return fr(this).tag;
}), ft(hr, "withoutSetter", function(e2) {
  return Tr(me(e2), e2);
}), _.f = Rr, Ke.f = jr, Pn.f = Cr, Ee.f = Lr, Ct.f = Mn.f = Er, Rt.f = Wr, Bn.f = function(e2) {
  return Tr(ke(e2), e2);
}, v && (br(pr, "description", { configurable: true, get: function() {
  return fr(this).description;
} }), ft(dr, "propertyIsEnumerable", Rr, { unsafe: true }))), Ut({ global: true, constructor: true, wrap: true, forced: !B, sham: !B }, { Symbol: hr }), sr(Zn(Ir), function(e2) {
  $n(e2);
}), Ut({ target: "Symbol", stat: true, forced: !B }, { useSetter: function() {
  Or = true;
}, useSimple: function() {
  Or = false;
} }), Ut({ target: "Object", stat: true, forced: !B, sham: !v }, { create: function(e2, t2) {
  return t2 === void 0 ? Yn(e2) : Cr(Yn(e2), t2);
}, defineProperty: jr, defineProperties: Cr, getOwnPropertyDescriptor: Lr }), Ut({ target: "Object", stat: true, forced: !B }, { getOwnPropertyNames: Er }), er(), rr(hr, "Symbol"), tt[ur] = true;
var Zr = B && !!Symbol.for && !!Symbol.keyFor;
var Gr = ue("string-to-symbol-registry");
var Pr = ue("symbol-to-string-registry");
Ut({ target: "Symbol", stat: true, forced: !Zr }, { for: function(e2) {
  var t2 = Qt(e2);
  if (he(Gr, t2))
    return Gr[t2];
  var n2 = U("Symbol")(t2);
  return Gr[t2] = n2, Pr[n2] = t2, n2;
} });
var Ar = ue("symbol-to-string-registry");
Ut({ target: "Symbol", stat: true, forced: !Zr }, { keyFor: function(e2) {
  if (!$(e2))
    throw TypeError(te(e2) + " is not a symbol");
  if (he(Ar, e2))
    return Ar[e2];
} });
var Xr = Function.prototype;
var Fr = Xr.apply;
var Kr = Xr.call;
var Nr = typeof Reflect == "object" && Reflect.apply || (m ? Kr.bind(Fr) : function() {
  return Kr.apply(Fr, arguments);
});
var Ur = C([].slice);
var Yr = U("JSON", "stringify");
var Hr = C(/./.exec);
var Dr = C("".charAt);
var Jr = C("".charCodeAt);
var Vr = C("".replace);
var zr = C(1 .toString);
var Mr = /[\uD800-\uDFFF]/g;
var Br = /^[\uD800-\uDBFF]$/;
var Qr = /^[\uDC00-\uDFFF]$/;
var qr = !B || y(function() {
  var e2 = U("Symbol")();
  return Yr([e2]) != "[null]" || Yr({ a: e2 }) != "{}" || Yr(Object(e2)) != "{}";
});
var $r = y(function() {
  return Yr("\uDF06\uD834") !== '"\\udf06\\ud834"' || Yr("\uDEAD") !== '"\\udead"';
});
var eo = function(e2, t2) {
  var n2 = Ur(arguments), r2 = t2;
  if ((K(t2) || e2 !== void 0) && !$(e2))
    return fn(t2) || (t2 = function(e3, t3) {
      if (F(r2) && (t3 = g(r2, this, e3, t3)), !$(t3))
        return t3;
    }), n2[1] = t2, Nr(Yr, null, n2);
};
var to = function(e2, t2, n2) {
  var r2 = Dr(n2, t2 - 1), o2 = Dr(n2, t2 + 1);
  return Hr(Br, e2) && !Hr(Qr, o2) || Hr(Qr, e2) && !Hr(Br, r2) ? "\\u" + zr(Jr(e2, 0), 16) : e2;
};
Yr && Ut({ target: "JSON", stat: true, arity: 3, forced: qr || $r }, { stringify: function(e2, t2, n2) {
  var r2 = Ur(arguments), o2 = Nr(qr ? eo : Yr, null, r2);
  return $r && typeof o2 == "string" ? Vr(o2, Mr, to) : o2;
} });
var no = !B || y(function() {
  Rt.f(1);
});
Ut({ target: "Object", stat: true, forced: no }, { getOwnPropertySymbols: function(e2) {
  var t2 = Rt.f;
  return t2 ? t2(fe(e2)) : [];
} }), $n("asyncIterator");
var ro = Ke.f;
var oo = p.Symbol;
var io = oo && oo.prototype;
if (v && F(oo) && (!("description" in io) || oo().description !== void 0)) {
  ao = {}, co = function() {
    var e2 = arguments.length < 1 || arguments[0] === void 0 ? void 0 : Qt(arguments[0]), t2 = Y(io, this) ? new oo(e2) : e2 === void 0 ? oo() : oo(e2);
    return e2 === "" && (ao[t2] = true), t2;
  };
  Wt(co, oo), co.prototype = io, io.constructor = co;
  so = String(oo("test")) == "Symbol(test)", uo = C(io.toString), lo = C(io.valueOf), fo = /^Symbol\((.*)\)[^)]+$/, ho = C("".replace), po = C("".slice);
  ro(io, "description", { configurable: true, get: function() {
    var e2 = lo(this), t2 = uo(e2);
    if (he(ao, e2))
      return "";
    var n2 = so ? po(t2, 7, -1) : ho(t2, fo, "$1");
    return n2 === "" ? void 0 : n2;
  } }), Ut({ global: true, constructor: true, forced: true }, { Symbol: co });
}
var ao;
var co;
var so;
var uo;
var lo;
var fo;
var ho;
var po;
$n("hasInstance"), $n("isConcatSpreadable"), $n("iterator"), $n("match"), $n("matchAll"), $n("replace"), $n("search"), $n("species"), $n("split"), $n("toPrimitive"), er(), $n("toStringTag"), rr(U("Symbol"), "Symbol"), $n("unscopables"), rr(p.JSON, "JSON", true), rr(Math, "Math", true), Ut({ global: true }, { Reflect: {} }), rr(p.Reflect, "Reflect", true), Qn.Symbol;
var yo;
var vo;
var mo;
var bo = C("".charAt);
var go = C("".charCodeAt);
var wo = C("".slice);
var So = function(e2) {
  return function(t2, n2) {
    var r2, o2, i2 = Qt(A(t2)), a2 = yt(n2), c2 = i2.length;
    return a2 < 0 || a2 >= c2 ? e2 ? "" : void 0 : (r2 = go(i2, a2)) < 55296 || r2 > 56319 || a2 + 1 === c2 || (o2 = go(i2, a2 + 1)) < 56320 || o2 > 57343 ? e2 ? bo(i2, a2) : r2 : e2 ? wo(i2, a2, a2 + 2) : o2 - 56320 + (r2 - 55296 << 10) + 65536;
  };
};
var ko = { codeAt: So(false), charAt: So(true) };
var _o = !y(function() {
  function e2() {
  }
  return e2.prototype.constructor = null, Object.getPrototypeOf(new e2()) !== e2.prototype;
});
var Io = et("IE_PROTO");
var Oo = p.Object;
var xo = Oo.prototype;
var To = _o ? Oo.getPrototypeOf : function(e2) {
  var t2 = fe(e2);
  if (he(t2, Io))
    return t2[Io];
  var n2 = t2.constructor;
  return F(n2) && t2 instanceof n2 ? n2.prototype : t2 instanceof Oo ? xo : null;
};
var jo = ke("iterator");
var Co = false;
[].keys && ("next" in (mo = [].keys()) ? (vo = To(To(mo))) !== Object.prototype && (yo = vo) : Co = true);
var Ro = yo == null || y(function() {
  var e2 = {};
  return yo[jo].call(e2) !== e2;
});
Ro && (yo = {}), F(yo[jo]) || ft(yo, jo, function() {
  return this;
});
var Lo = { IteratorPrototype: yo, BUGGY_SAFARI_ITERATORS: Co };
var Eo = {};
var Wo = Lo.IteratorPrototype;
var Zo = function() {
  return this;
};
var Go = p.String;
var Po = p.TypeError;
var Ao = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e2, t2 = false, n2 = {};
  try {
    (e2 = C(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n2, []), t2 = n2 instanceof Array;
  } catch (e3) {
  }
  return function(n3, r2) {
    return Pe(n3), function(e3) {
      if (typeof e3 == "object" || F(e3))
        return e3;
      throw Po("Can't set " + Go(e3) + " as a prototype");
    }(r2), t2 ? e2(n3, r2) : n3.__proto__ = r2, n3;
  };
}() : void 0);
var Xo = De.PROPER;
var Fo = De.CONFIGURABLE;
var Ko = Lo.IteratorPrototype;
var No = Lo.BUGGY_SAFARI_ITERATORS;
var Uo = ke("iterator");
var Yo = function() {
  return this;
};
var Ho = function(e2, t2, n2, r2, o2, i2, a2) {
  !function(e3, t3, n3, r3) {
    var o3 = t3 + " Iterator";
    e3.prototype = Yn(Wo, { next: I(+!r3, n3) }), rr(e3, o3, false), Eo[o3] = Zo;
  }(n2, t2, r2);
  var c2, s2, u2, l2 = function(e3) {
    if (e3 === o2 && y2)
      return y2;
    if (!No && e3 in h2)
      return h2[e3];
    switch (e3) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new n2(this, e3);
        };
    }
    return function() {
      return new n2(this);
    };
  }, f2 = t2 + " Iterator", d2 = false, h2 = e2.prototype, p2 = h2[Uo] || h2["@@iterator"] || o2 && h2[o2], y2 = !No && p2 || l2(o2), v2 = t2 == "Array" && h2.entries || p2;
  if (v2 && (c2 = To(v2.call(new e2()))) !== Object.prototype && c2.next && (To(c2) !== Ko && (Ao ? Ao(c2, Ko) : F(c2[Uo]) || ft(c2, Uo, Yo)), rr(c2, f2, true)), Xo && o2 == "values" && p2 && p2.name !== "values" && (Fo ? Ne(h2, "name", "values") : (d2 = true, y2 = function() {
    return g(p2, this);
  })), o2)
    if (s2 = { values: l2("values"), keys: i2 ? y2 : l2("keys"), entries: l2("entries") }, a2)
      for (u2 in s2)
        (No || d2 || !(u2 in h2)) && ft(h2, u2, s2[u2]);
    else
      Ut({ target: t2, proto: true, forced: No || d2 }, s2);
  return h2[Uo] !== y2 && ft(h2, Uo, y2, { name: o2 }), Eo[t2] = y2, s2;
};
var Do = ko.charAt;
var Jo = ut.set;
var Vo = ut.getterFor("String Iterator");
Ho(String, "String", function(e2) {
  Jo(this, { type: "String Iterator", string: Qt(e2), index: 0 });
}, function() {
  var e2, t2 = Vo(this), n2 = t2.string, r2 = t2.index;
  return r2 >= n2.length ? { value: void 0, done: true } : (e2 = Do(n2, r2), t2.index += e2.length, { value: e2, done: false });
});
var zo = function(e2, t2, n2) {
  var r2, o2;
  Pe(e2);
  try {
    if (!(r2 = oe(e2, "return"))) {
      if (t2 === "throw")
        throw n2;
      return n2;
    }
    r2 = g(r2, e2);
  } catch (e3) {
    o2 = true, r2 = e3;
  }
  if (t2 === "throw")
    throw n2;
  if (o2)
    throw r2;
  return Pe(r2), n2;
};
var Mo = function(e2, t2, n2, r2) {
  try {
    return r2 ? t2(Pe(n2)[0], n2[1]) : t2(n2);
  } catch (t3) {
    zo(e2, "throw", t3);
  }
};
var Bo = ke("iterator");
var Qo = Array.prototype;
var qo = function(e2) {
  return e2 !== void 0 && (Eo.Array === e2 || Qo[Bo] === e2);
};
var $o = ke("iterator");
var ei = function(e2) {
  if (e2 != null)
    return oe(e2, $o) || oe(e2, "@@iterator") || Eo[Mt(e2)];
};
var ti = p.TypeError;
var ni = function(e2, t2) {
  var n2 = arguments.length < 2 ? ei(e2) : t2;
  if (re(n2))
    return Pe(g(n2, e2));
  throw ti(te(e2) + " is not iterable");
};
var ri = p.Array;
var oi = ke("iterator");
var ii = false;
try {
  ai = 0, ci = { next: function() {
    return { done: !!ai++ };
  }, return: function() {
    ii = true;
  } };
  ci[oi] = function() {
    return this;
  }, Array.from(ci, function() {
    throw 2;
  });
} catch (e2) {
}
var ai;
var ci;
var si = function(e2, t2) {
  if (!t2 && !ii)
    return false;
  var n2 = false;
  try {
    var r2 = {};
    r2[oi] = function() {
      return { next: function() {
        return { done: n2 = true };
      } };
    }, e2(r2);
  } catch (e3) {
  }
  return n2;
};
var ui = !si(function(e2) {
  Array.from(e2);
});
Ut({ target: "Array", stat: true, forced: ui }, { from: function(e2) {
  var t2 = fe(e2), n2 = kn(this), r2 = arguments.length, o2 = r2 > 1 ? arguments[1] : void 0, i2 = o2 !== void 0;
  i2 && (o2 = ir(o2, r2 > 2 ? arguments[2] : void 0));
  var a2, c2, s2, u2, l2, f2, d2 = ei(t2), h2 = 0;
  if (!d2 || this == ri && qo(d2))
    for (a2 = St(t2), c2 = n2 ? new this(a2) : ri(a2); a2 > h2; h2++)
      f2 = i2 ? o2(t2[h2], h2) : t2[h2], dn(c2, h2, f2);
  else
    for (l2 = (u2 = ni(t2, d2)).next, c2 = n2 ? new this() : []; !(s2 = g(l2, u2)).done; h2++)
      f2 = i2 ? Mo(u2, o2, [s2.value, h2], true) : s2.value, dn(c2, h2, f2);
  return c2.length = h2, c2;
} }), Qn.Array.from;
var li;
var fi;
var di;
var hi = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
var pi = Ke.f;
var yi = p.Int8Array;
var vi = yi && yi.prototype;
var mi = p.Uint8ClampedArray;
var bi = mi && mi.prototype;
var gi = yi && To(yi);
var wi = vi && To(vi);
var Si = Object.prototype;
var ki = p.TypeError;
var _i = ke("toStringTag");
var Ii = me("TYPED_ARRAY_TAG");
var Oi = me("TYPED_ARRAY_CONSTRUCTOR");
var xi = hi && !!Ao && Mt(p.opera) !== "Opera";
var Ti = false;
var ji = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 };
var Ci = { BigInt64Array: 8, BigUint64Array: 8 };
var Ri = function(e2) {
  if (!K(e2))
    return false;
  var t2 = Mt(e2);
  return he(ji, t2) || he(Ci, t2);
};
for (li in ji)
  (di = (fi = p[li]) && fi.prototype) ? Ne(di, Oi, fi) : xi = false;
for (li in Ci)
  (di = (fi = p[li]) && fi.prototype) && Ne(di, Oi, fi);
if ((!xi || !F(gi) || gi === Function.prototype) && (gi = function() {
  throw ki("Incorrect invocation");
}, xi))
  for (li in ji)
    p[li] && Ao(p[li], gi);
if ((!xi || !wi || wi === Si) && (wi = gi.prototype, xi))
  for (li in ji)
    p[li] && Ao(p[li].prototype, wi);
if (xi && To(bi) !== wi && Ao(bi, wi), v && !he(wi, _i))
  for (li in Ti = true, pi(wi, _i, { get: function() {
    return K(this) ? this[Ii] : void 0;
  } }), ji)
    p[li] && Ne(p[li], Ii, li);
var Li = { NATIVE_ARRAY_BUFFER_VIEWS: xi, TYPED_ARRAY_CONSTRUCTOR: Oi, TYPED_ARRAY_TAG: Ti && Ii, aTypedArray: function(e2) {
  if (Ri(e2))
    return e2;
  throw ki("Target is not a typed array");
}, aTypedArrayConstructor: function(e2) {
  if (F(e2) && (!Ao || Y(gi, e2)))
    return e2;
  throw ki(te(e2) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(e2, t2, n2, r2) {
  if (v) {
    if (n2)
      for (var o2 in ji) {
        var i2 = p[o2];
        if (i2 && he(i2.prototype, e2))
          try {
            delete i2.prototype[e2];
          } catch (n3) {
            try {
              i2.prototype[e2] = t2;
            } catch (e3) {
            }
          }
      }
    wi[e2] && !n2 || ft(wi, e2, n2 ? t2 : xi && vi[e2] || t2, r2);
  }
}, exportTypedArrayStaticMethod: function(e2, t2, n2) {
  var r2, o2;
  if (v) {
    if (Ao) {
      if (n2) {
        for (r2 in ji)
          if ((o2 = p[r2]) && he(o2, e2))
            try {
              delete o2[e2];
            } catch (e3) {
            }
      }
      if (gi[e2] && !n2)
        return;
      try {
        return ft(gi, e2, n2 ? t2 : xi && gi[e2] || t2);
      } catch (e3) {
      }
    }
    for (r2 in ji)
      !(o2 = p[r2]) || o2[e2] && !n2 || ft(o2, e2, t2);
  }
}, isView: function(e2) {
  if (!K(e2))
    return false;
  var t2 = Mt(e2);
  return t2 === "DataView" || he(ji, t2) || he(Ci, t2);
}, isTypedArray: Ri, TypedArray: gi, TypedArrayPrototype: wi };
var Ei = p.TypeError;
var Wi = ke("species");
var Zi = function(e2, t2) {
  var n2, r2 = Pe(e2).constructor;
  return r2 === void 0 || (n2 = Pe(r2)[Wi]) == null ? t2 : function(e3) {
    if (kn(e3))
      return e3;
    throw Ei(te(e3) + " is not a constructor");
  }(n2);
};
var Gi = Li.TYPED_ARRAY_CONSTRUCTOR;
var Pi = Li.aTypedArrayConstructor;
var Ai = Li.aTypedArray;
(0, Li.exportTypedArrayMethod)("slice", function(e2, t2) {
  for (var n2, r2 = Ur(Ai(this), e2, t2), o2 = Pi(Zi(n2 = this, n2[Gi])), i2 = 0, a2 = r2.length, c2 = new o2(a2); a2 > i2; )
    c2[i2] = r2[i2++];
  return c2;
}, y(function() {
  new Int8Array(1).slice();
}));
var Xi = Ke.f;
var Fi = ke("unscopables");
var Ki = Array.prototype;
Ki[Fi] == null && Xi(Ki, Fi, { configurable: true, value: Yn(null) });
var Ni = function(e2) {
  Ki[Fi][e2] = true;
};
var Ui = _t.includes;
var Yi = y(function() {
  return !Array(1).includes();
});
Ut({ target: "Array", proto: true, forced: Yi }, { includes: function(e2) {
  return Ui(this, e2, arguments.length > 1 ? arguments[1] : void 0);
} }), Ni("includes"), ln("Array", "includes");
var Hi = C("".indexOf);
Ut({ target: "String", proto: true, forced: !nn("includes") }, { includes: function(e2) {
  return !!~Hi(Qt(A(this)), Qt(en(e2)), arguments.length > 1 ? arguments[1] : void 0);
} }), ln("String", "includes");
var Di = Ke.f;
var Ji = ut.set;
var Vi = ut.getterFor("Array Iterator");
Ho(Array, "Array", function(e2, t2) {
  Ji(this, { type: "Array Iterator", target: X(e2), index: 0, kind: t2 });
}, function() {
  var e2 = Vi(this), t2 = e2.target, n2 = e2.kind, r2 = e2.index++;
  return !t2 || r2 >= t2.length ? (e2.target = void 0, { value: void 0, done: true }) : n2 == "keys" ? { value: r2, done: false } : n2 == "values" ? { value: t2[r2], done: false } : { value: [r2, t2[r2]], done: false };
}, "values");
var zi = Eo.Arguments = Eo.Array;
if (Ni("keys"), Ni("values"), Ni("entries"), v && zi.name !== "values")
  try {
    Di(zi, "name", { value: "values" });
  } catch (e2) {
  }
var Mi = y(function() {
  if (typeof ArrayBuffer == "function") {
    var e2 = new ArrayBuffer(8);
    Object.isExtensible(e2) && Object.defineProperty(e2, "a", { value: 8 });
  }
});
var Bi = Object.isExtensible;
var Qi = y(function() {
  Bi(1);
}) || Mi ? function(e2) {
  return !!K(e2) && ((!Mi || E(e2) != "ArrayBuffer") && (!Bi || Bi(e2)));
} : Bi;
var qi = !y(function() {
  return Object.isExtensible(Object.preventExtensions({}));
});
var $i = l(function(e2) {
  var t2 = Ke.f, n2 = false, r2 = me("meta"), o2 = 0, i2 = function(e3) {
    t2(e3, r2, { value: { objectID: "O" + o2++, weakData: {} } });
  }, a2 = e2.exports = { enable: function() {
    a2.enable = function() {
    }, n2 = true;
    var e3 = Ct.f, t3 = C([].splice), o3 = {};
    o3[r2] = 1, e3(o3).length && (Ct.f = function(n3) {
      for (var o4 = e3(n3), i3 = 0, a3 = o4.length; i3 < a3; i3++)
        if (o4[i3] === r2) {
          t3(o4, i3, 1);
          break;
        }
      return o4;
    }, Ut({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: Mn.f }));
  }, fastKey: function(e3, t3) {
    if (!K(e3))
      return typeof e3 == "symbol" ? e3 : (typeof e3 == "string" ? "S" : "P") + e3;
    if (!he(e3, r2)) {
      if (!Qi(e3))
        return "F";
      if (!t3)
        return "E";
      i2(e3);
    }
    return e3[r2].objectID;
  }, getWeakData: function(e3, t3) {
    if (!he(e3, r2)) {
      if (!Qi(e3))
        return true;
      if (!t3)
        return false;
      i2(e3);
    }
    return e3[r2].weakData;
  }, onFreeze: function(e3) {
    return qi && n2 && Qi(e3) && !he(e3, r2) && i2(e3), e3;
  } };
  tt[r2] = true;
});
$i.enable, $i.fastKey, $i.getWeakData, $i.onFreeze;
var ea = p.TypeError;
var ta = function(e2, t2) {
  this.stopped = e2, this.result = t2;
};
var na = ta.prototype;
var ra = function(e2, t2, n2) {
  var r2, o2, i2, a2, c2, s2, u2, l2 = n2 && n2.that, f2 = !(!n2 || !n2.AS_ENTRIES), d2 = !(!n2 || !n2.IS_ITERATOR), h2 = !(!n2 || !n2.INTERRUPTED), p2 = ir(t2, l2), y2 = function(e3) {
    return r2 && zo(r2, "normal", e3), new ta(true, e3);
  }, v2 = function(e3) {
    return f2 ? (Pe(e3), h2 ? p2(e3[0], e3[1], y2) : p2(e3[0], e3[1])) : h2 ? p2(e3, y2) : p2(e3);
  };
  if (d2)
    r2 = e2;
  else {
    if (!(o2 = ei(e2)))
      throw ea(te(e2) + " is not iterable");
    if (qo(o2)) {
      for (i2 = 0, a2 = St(e2); a2 > i2; i2++)
        if ((c2 = v2(e2[i2])) && Y(na, c2))
          return c2;
      return new ta(false);
    }
    r2 = ni(e2, o2);
  }
  for (s2 = r2.next; !(u2 = g(s2, r2)).done; ) {
    try {
      c2 = v2(u2.value);
    } catch (e3) {
      zo(r2, "throw", e3);
    }
    if (typeof c2 == "object" && c2 && Y(na, c2))
      return c2;
  }
  return new ta(false);
};
var oa = p.TypeError;
var ia = function(e2, t2) {
  if (Y(t2, e2))
    return e2;
  throw oa("Incorrect invocation");
};
var aa = function(e2, t2, n2) {
  for (var r2 in t2)
    ft(e2, r2, t2[r2], n2);
  return e2;
};
var ca = ke("species");
var sa = Ke.f;
var ua = $i.fastKey;
var la = ut.set;
var fa = ut.getterFor;
var da = { getConstructor: function(e2, t2, n2, r2) {
  var o2 = e2(function(e3, o3) {
    ia(e3, i2), la(e3, { type: t2, index: Yn(null), first: void 0, last: void 0, size: 0 }), v || (e3.size = 0), o3 != null && ra(o3, e3[r2], { that: e3, AS_ENTRIES: n2 });
  }), i2 = o2.prototype, a2 = fa(t2), c2 = function(e3, t3, n3) {
    var r3, o3, i3 = a2(e3), c3 = s2(e3, t3);
    return c3 ? c3.value = n3 : (i3.last = c3 = { index: o3 = ua(t3, true), key: t3, value: n3, previous: r3 = i3.last, next: void 0, removed: false }, i3.first || (i3.first = c3), r3 && (r3.next = c3), v ? i3.size++ : e3.size++, o3 !== "F" && (i3.index[o3] = c3)), e3;
  }, s2 = function(e3, t3) {
    var n3, r3 = a2(e3), o3 = ua(t3);
    if (o3 !== "F")
      return r3.index[o3];
    for (n3 = r3.first; n3; n3 = n3.next)
      if (n3.key == t3)
        return n3;
  };
  return aa(i2, { clear: function() {
    for (var e3 = a2(this), t3 = e3.index, n3 = e3.first; n3; )
      n3.removed = true, n3.previous && (n3.previous = n3.previous.next = void 0), delete t3[n3.index], n3 = n3.next;
    e3.first = e3.last = void 0, v ? e3.size = 0 : this.size = 0;
  }, delete: function(e3) {
    var t3 = this, n3 = a2(t3), r3 = s2(t3, e3);
    if (r3) {
      var o3 = r3.next, i3 = r3.previous;
      delete n3.index[r3.index], r3.removed = true, i3 && (i3.next = o3), o3 && (o3.previous = i3), n3.first == r3 && (n3.first = o3), n3.last == r3 && (n3.last = i3), v ? n3.size-- : t3.size--;
    }
    return !!r3;
  }, forEach: function(e3) {
    for (var t3, n3 = a2(this), r3 = ir(e3, arguments.length > 1 ? arguments[1] : void 0); t3 = t3 ? t3.next : n3.first; )
      for (r3(t3.value, t3.key, this); t3 && t3.removed; )
        t3 = t3.previous;
  }, has: function(e3) {
    return !!s2(this, e3);
  } }), aa(i2, n2 ? { get: function(e3) {
    var t3 = s2(this, e3);
    return t3 && t3.value;
  }, set: function(e3, t3) {
    return c2(this, e3 === 0 ? 0 : e3, t3);
  } } : { add: function(e3) {
    return c2(this, e3 = e3 === 0 ? 0 : e3, e3);
  } }), v && sa(i2, "size", { get: function() {
    return a2(this).size;
  } }), o2;
}, setStrong: function(e2, t2, n2) {
  var r2 = t2 + " Iterator", o2 = fa(t2), i2 = fa(r2);
  Ho(e2, t2, function(e3, t3) {
    la(this, { type: r2, target: e3, state: o2(e3), kind: t3, last: void 0 });
  }, function() {
    for (var e3 = i2(this), t3 = e3.kind, n3 = e3.last; n3 && n3.removed; )
      n3 = n3.previous;
    return e3.target && (e3.last = n3 = n3 ? n3.next : e3.state.first) ? t3 == "keys" ? { value: n3.key, done: false } : t3 == "values" ? { value: n3.value, done: false } : { value: [n3.key, n3.value], done: false } : (e3.target = void 0, { value: void 0, done: true });
  }, n2 ? "entries" : "values", !n2, true), function(e3) {
    var t3 = U(e3), n3 = Ke.f;
    v && t3 && !t3[ca] && n3(t3, ca, { configurable: true, get: function() {
      return this;
    } });
  }(t2);
} };
function ha(e2) {
  var t2 = this.constructor;
  return this.then(function(n2) {
    return t2.resolve(e2()).then(function() {
      return n2;
    });
  }, function(n2) {
    return t2.resolve(e2()).then(function() {
      return t2.reject(n2);
    });
  });
}
function pa(e2) {
  return new this(function(t2, n2) {
    if (!e2 || e2.length === void 0)
      return n2(new TypeError(typeof e2 + " " + e2 + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
    var r2 = Array.prototype.slice.call(e2);
    if (r2.length === 0)
      return t2([]);
    var o2 = r2.length;
    function i2(e3, n3) {
      if (n3 && (typeof n3 == "object" || typeof n3 == "function")) {
        var a3 = n3.then;
        if (typeof a3 == "function")
          return void a3.call(n3, function(t3) {
            i2(e3, t3);
          }, function(n4) {
            r2[e3] = { status: "rejected", reason: n4 }, --o2 == 0 && t2(r2);
          });
      }
      r2[e3] = { status: "fulfilled", value: n3 }, --o2 == 0 && t2(r2);
    }
    for (var a2 = 0; a2 < r2.length; a2++)
      i2(a2, r2[a2]);
  });
}
!function(e2, t2, n2) {
  var r2 = e2.indexOf("Map") !== -1, o2 = e2.indexOf("Weak") !== -1, i2 = r2 ? "set" : "add", a2 = p[e2], c2 = a2 && a2.prototype, s2 = a2, u2 = {}, l2 = function(e3) {
    var t3 = C(c2[e3]);
    ft(c2, e3, e3 == "add" ? function(e4) {
      return t3(this, e4 === 0 ? 0 : e4), this;
    } : e3 == "delete" ? function(e4) {
      return !(o2 && !K(e4)) && t3(this, e4 === 0 ? 0 : e4);
    } : e3 == "get" ? function(e4) {
      return o2 && !K(e4) ? void 0 : t3(this, e4 === 0 ? 0 : e4);
    } : e3 == "has" ? function(e4) {
      return !(o2 && !K(e4)) && t3(this, e4 === 0 ? 0 : e4);
    } : function(e4, n3) {
      return t3(this, e4 === 0 ? 0 : e4, n3), this;
    });
  };
  if (Kt(e2, !F(a2) || !(o2 || c2.forEach && !y(function() {
    new a2().entries().next();
  }))))
    s2 = n2.getConstructor(t2, e2, r2, i2), $i.enable();
  else if (Kt(e2, true)) {
    var f2 = new s2(), d2 = f2[i2](o2 ? {} : -0, 1) != f2, h2 = y(function() {
      f2.has(1);
    }), v2 = si(function(e3) {
      new a2(e3);
    }), m2 = !o2 && y(function() {
      for (var e3 = new a2(), t3 = 5; t3--; )
        e3[i2](t3, t3);
      return !e3.has(-0);
    });
    v2 || ((s2 = t2(function(e3, t3) {
      ia(e3, c2);
      var n3 = function(e4, t4, n4) {
        var r3, o3;
        return Ao && F(r3 = t4.constructor) && r3 !== n4 && K(o3 = r3.prototype) && o3 !== n4.prototype && Ao(e4, o3), e4;
      }(new a2(), e3, s2);
      return t3 != null && ra(t3, n3[i2], { that: n3, AS_ENTRIES: r2 }), n3;
    })).prototype = c2, c2.constructor = s2), (h2 || m2) && (l2("delete"), l2("has"), r2 && l2("get")), (m2 || d2) && l2(i2), o2 && c2.clear && delete c2.clear;
  }
  u2[e2] = s2, Ut({ global: true, constructor: true, forced: s2 != a2 }, u2), rr(s2, e2), o2 || n2.setStrong(s2, e2, r2);
}("Set", function(e2) {
  return function() {
    return e2(this, arguments.length ? arguments[0] : void 0);
  };
}, da), Qn.Set;
var ya = setTimeout;
function va(e2) {
  return Boolean(e2 && e2.length !== void 0);
}
function ma() {
}
function ba(e2) {
  if (!(this instanceof ba))
    throw new TypeError("Promises must be constructed via new");
  if (typeof e2 != "function")
    throw new TypeError("not a function");
  this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], Ia(e2, this);
}
function ga(e2, t2) {
  for (; e2._state === 3; )
    e2 = e2._value;
  e2._state !== 0 ? (e2._handled = true, ba._immediateFn(function() {
    var n2 = e2._state === 1 ? t2.onFulfilled : t2.onRejected;
    if (n2 !== null) {
      var r2;
      try {
        r2 = n2(e2._value);
      } catch (e3) {
        return void Sa(t2.promise, e3);
      }
      wa(t2.promise, r2);
    } else
      (e2._state === 1 ? wa : Sa)(t2.promise, e2._value);
  })) : e2._deferreds.push(t2);
}
function wa(e2, t2) {
  try {
    if (t2 === e2)
      throw new TypeError("A promise cannot be resolved with itself.");
    if (t2 && (typeof t2 == "object" || typeof t2 == "function")) {
      var n2 = t2.then;
      if (t2 instanceof ba)
        return e2._state = 3, e2._value = t2, void ka(e2);
      if (typeof n2 == "function")
        return void Ia((r2 = n2, o2 = t2, function() {
          r2.apply(o2, arguments);
        }), e2);
    }
    e2._state = 1, e2._value = t2, ka(e2);
  } catch (t3) {
    Sa(e2, t3);
  }
  var r2, o2;
}
function Sa(e2, t2) {
  e2._state = 2, e2._value = t2, ka(e2);
}
function ka(e2) {
  e2._state === 2 && e2._deferreds.length === 0 && ba._immediateFn(function() {
    e2._handled || ba._unhandledRejectionFn(e2._value);
  });
  for (var t2 = 0, n2 = e2._deferreds.length; t2 < n2; t2++)
    ga(e2, e2._deferreds[t2]);
  e2._deferreds = null;
}
function _a(e2, t2, n2) {
  this.onFulfilled = typeof e2 == "function" ? e2 : null, this.onRejected = typeof t2 == "function" ? t2 : null, this.promise = n2;
}
function Ia(e2, t2) {
  var n2 = false;
  try {
    e2(function(e3) {
      n2 || (n2 = true, wa(t2, e3));
    }, function(e3) {
      n2 || (n2 = true, Sa(t2, e3));
    });
  } catch (e3) {
    if (n2)
      return;
    n2 = true, Sa(t2, e3);
  }
}
ba.prototype.catch = function(e2) {
  return this.then(null, e2);
}, ba.prototype.then = function(e2, t2) {
  var n2 = new this.constructor(ma);
  return ga(this, new _a(e2, t2, n2)), n2;
}, ba.prototype.finally = ha, ba.all = function(e2) {
  return new ba(function(t2, n2) {
    if (!va(e2))
      return n2(new TypeError("Promise.all accepts an array"));
    var r2 = Array.prototype.slice.call(e2);
    if (r2.length === 0)
      return t2([]);
    var o2 = r2.length;
    function i2(e3, a3) {
      try {
        if (a3 && (typeof a3 == "object" || typeof a3 == "function")) {
          var c2 = a3.then;
          if (typeof c2 == "function")
            return void c2.call(a3, function(t3) {
              i2(e3, t3);
            }, n2);
        }
        r2[e3] = a3, --o2 == 0 && t2(r2);
      } catch (e4) {
        n2(e4);
      }
    }
    for (var a2 = 0; a2 < r2.length; a2++)
      i2(a2, r2[a2]);
  });
}, ba.allSettled = pa, ba.resolve = function(e2) {
  return e2 && typeof e2 == "object" && e2.constructor === ba ? e2 : new ba(function(t2) {
    t2(e2);
  });
}, ba.reject = function(e2) {
  return new ba(function(t2, n2) {
    n2(e2);
  });
}, ba.race = function(e2) {
  return new ba(function(t2, n2) {
    if (!va(e2))
      return n2(new TypeError("Promise.race accepts an array"));
    for (var r2 = 0, o2 = e2.length; r2 < o2; r2++)
      ba.resolve(e2[r2]).then(t2, n2);
  });
}, ba._immediateFn = typeof setImmediate == "function" && function(e2) {
  setImmediate(e2);
} || function(e2) {
  ya(e2, 0);
}, ba._unhandledRejectionFn = function(e2) {
  typeof console != "undefined" && console && console.warn("Possible Unhandled Promise Rejection:", e2);
};
var Oa = function() {
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  throw new Error("unable to locate global object");
}();
typeof Oa.Promise != "function" ? Oa.Promise = ba : (Oa.Promise.prototype.finally || (Oa.Promise.prototype.finally = ha), Oa.Promise.allSettled || (Oa.Promise.allSettled = pa)), function(e2) {
  function t2() {
  }
  function n2(e3, t3) {
    if (e3 = e3 === void 0 ? "utf-8" : e3, t3 = t3 === void 0 ? { fatal: false } : t3, o2.indexOf(e3.toLowerCase()) === -1)
      throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('" + e3 + "') is invalid.");
    if (t3.fatal)
      throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
  }
  function r2(e3) {
    for (var t3 = 0, n3 = Math.min(65536, e3.length + 1), r3 = new Uint16Array(n3), o3 = [], i3 = 0; ; ) {
      var a2 = t3 < e3.length;
      if (!a2 || i3 >= n3 - 1) {
        if (o3.push(String.fromCharCode.apply(null, r3.subarray(0, i3))), !a2)
          return o3.join("");
        e3 = e3.subarray(t3), i3 = t3 = 0;
      }
      if ((128 & (a2 = e3[t3++])) == 0)
        r3[i3++] = a2;
      else if ((224 & a2) == 192) {
        var c2 = 63 & e3[t3++];
        r3[i3++] = (31 & a2) << 6 | c2;
      } else if ((240 & a2) == 224) {
        c2 = 63 & e3[t3++];
        var s2 = 63 & e3[t3++];
        r3[i3++] = (31 & a2) << 12 | c2 << 6 | s2;
      } else if ((248 & a2) == 240) {
        65535 < (a2 = (7 & a2) << 18 | (c2 = 63 & e3[t3++]) << 12 | (s2 = 63 & e3[t3++]) << 6 | 63 & e3[t3++]) && (a2 -= 65536, r3[i3++] = a2 >>> 10 & 1023 | 55296, a2 = 56320 | 1023 & a2), r3[i3++] = a2;
      }
    }
  }
  if (e2.TextEncoder && e2.TextDecoder)
    return false;
  var o2 = ["utf-8", "utf8", "unicode-1-1-utf-8"];
  Object.defineProperty(t2.prototype, "encoding", { value: "utf-8" }), t2.prototype.encode = function(e3, t3) {
    if ((t3 = t3 === void 0 ? { stream: false } : t3).stream)
      throw Error("Failed to encode: the 'stream' option is unsupported.");
    t3 = 0;
    for (var n3 = e3.length, r3 = 0, o3 = Math.max(32, n3 + (n3 >>> 1) + 7), i3 = new Uint8Array(o3 >>> 3 << 3); t3 < n3; ) {
      var a2 = e3.charCodeAt(t3++);
      if (55296 <= a2 && 56319 >= a2) {
        if (t3 < n3) {
          var c2 = e3.charCodeAt(t3);
          (64512 & c2) == 56320 && (++t3, a2 = ((1023 & a2) << 10) + (1023 & c2) + 65536);
        }
        if (55296 <= a2 && 56319 >= a2)
          continue;
      }
      if (r3 + 4 > i3.length && (o3 += 8, o3 = (o3 *= 1 + t3 / e3.length * 2) >>> 3 << 3, (c2 = new Uint8Array(o3)).set(i3), i3 = c2), (4294967168 & a2) == 0)
        i3[r3++] = a2;
      else {
        if ((4294965248 & a2) == 0)
          i3[r3++] = a2 >>> 6 & 31 | 192;
        else if ((4294901760 & a2) == 0)
          i3[r3++] = a2 >>> 12 & 15 | 224, i3[r3++] = a2 >>> 6 & 63 | 128;
        else {
          if ((4292870144 & a2) != 0)
            continue;
          i3[r3++] = a2 >>> 18 & 7 | 240, i3[r3++] = a2 >>> 12 & 63 | 128, i3[r3++] = a2 >>> 6 & 63 | 128;
        }
        i3[r3++] = 63 & a2 | 128;
      }
    }
    return i3.slice ? i3.slice(0, r3) : i3.subarray(0, r3);
  }, Object.defineProperty(n2.prototype, "encoding", { value: "utf-8" }), Object.defineProperty(n2.prototype, "fatal", { value: false }), Object.defineProperty(n2.prototype, "ignoreBOM", { value: false });
  var i2 = r2;
  typeof Buffer == "function" && Buffer.from ? i2 = function(e3) {
    return Buffer.from(e3.buffer, e3.byteOffset, e3.byteLength).toString("utf-8");
  } : typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function" && (i2 = function(e3) {
    var t3 = URL.createObjectURL(new Blob([e3], { type: "text/plain;charset=UTF-8" }));
    try {
      var n3 = new XMLHttpRequest();
      return n3.open("GET", t3, false), n3.send(), n3.responseText;
    } catch (t4) {
      return r2(e3);
    } finally {
      URL.revokeObjectURL(t3);
    }
  }), n2.prototype.decode = function(e3, t3) {
    if ((t3 = t3 === void 0 ? { stream: false } : t3).stream)
      throw Error("Failed to decode: the 'stream' option is unsupported.");
    return e3 = e3 instanceof Uint8Array ? e3 : e3.buffer instanceof ArrayBuffer ? new Uint8Array(e3.buffer) : new Uint8Array(e3), i2(e3);
  }, e2.TextEncoder = t2, e2.TextDecoder = n2;
}(typeof window != "undefined" ? window : s), function() {
  function e2(e3, t3) {
    if (!(e3 instanceof t3))
      throw new TypeError("Cannot call a class as a function");
  }
  function t2(e3, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
    }
  }
  function n2(e3, n3, r3) {
    return n3 && t2(e3.prototype, n3), r3 && t2(e3, r3), e3;
  }
  function r2(e3, t3) {
    if (typeof t3 != "function" && t3 !== null)
      throw new TypeError("Super expression must either be null or a function");
    e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && i2(e3, t3);
  }
  function o2(e3) {
    return o2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
      return e4.__proto__ || Object.getPrototypeOf(e4);
    }, o2(e3);
  }
  function i2(e3, t3) {
    return i2 = Object.setPrototypeOf || function(e4, t4) {
      return e4.__proto__ = t4, e4;
    }, i2(e3, t3);
  }
  function a2() {
    if (typeof Reflect == "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy == "function")
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e3) {
      return false;
    }
  }
  function c2(e3) {
    if (e3 === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e3;
  }
  function u2(e3, t3) {
    return !t3 || typeof t3 != "object" && typeof t3 != "function" ? c2(e3) : t3;
  }
  function l2(e3) {
    var t3 = a2();
    return function() {
      var n3, r3 = o2(e3);
      if (t3) {
        var i3 = o2(this).constructor;
        n3 = Reflect.construct(r3, arguments, i3);
      } else
        n3 = r3.apply(this, arguments);
      return u2(this, n3);
    };
  }
  function f2(e3, t3) {
    for (; !Object.prototype.hasOwnProperty.call(e3, t3) && (e3 = o2(e3)) !== null; )
      ;
    return e3;
  }
  function d2(e3, t3, n3) {
    return d2 = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(e4, t4, n4) {
      var r3 = f2(e4, t4);
      if (r3) {
        var o3 = Object.getOwnPropertyDescriptor(r3, t4);
        return o3.get ? o3.get.call(n4) : o3.value;
      }
    }, d2(e3, t3, n3 || e3);
  }
  var h2 = function() {
    function t3() {
      e2(this, t3), Object.defineProperty(this, "listeners", { value: {}, writable: true, configurable: true });
    }
    return n2(t3, [{ key: "addEventListener", value: function(e3, t4, n3) {
      e3 in this.listeners || (this.listeners[e3] = []), this.listeners[e3].push({ callback: t4, options: n3 });
    } }, { key: "removeEventListener", value: function(e3, t4) {
      if (e3 in this.listeners) {
        for (var n3 = this.listeners[e3], r3 = 0, o3 = n3.length; r3 < o3; r3++)
          if (n3[r3].callback === t4)
            return void n3.splice(r3, 1);
      }
    } }, { key: "dispatchEvent", value: function(e3) {
      if (e3.type in this.listeners) {
        for (var t4 = this.listeners[e3.type].slice(), n3 = 0, r3 = t4.length; n3 < r3; n3++) {
          var o3 = t4[n3];
          try {
            o3.callback.call(this, e3);
          } catch (e4) {
            Promise.resolve().then(function() {
              throw e4;
            });
          }
          o3.options && o3.options.once && this.removeEventListener(e3.type, o3.callback);
        }
        return !e3.defaultPrevented;
      }
    } }]), t3;
  }(), p2 = function(t3) {
    r2(a3, t3);
    var i3 = l2(a3);
    function a3() {
      var t4;
      return e2(this, a3), (t4 = i3.call(this)).listeners || h2.call(c2(t4)), Object.defineProperty(c2(t4), "aborted", { value: false, writable: true, configurable: true }), Object.defineProperty(c2(t4), "onabort", { value: null, writable: true, configurable: true }), t4;
    }
    return n2(a3, [{ key: "toString", value: function() {
      return "[object AbortSignal]";
    } }, { key: "dispatchEvent", value: function(e3) {
      e3.type === "abort" && (this.aborted = true, typeof this.onabort == "function" && this.onabort.call(this, e3)), d2(o2(a3.prototype), "dispatchEvent", this).call(this, e3);
    } }]), a3;
  }(h2), y2 = function() {
    function t3() {
      e2(this, t3), Object.defineProperty(this, "signal", { value: new p2(), writable: true, configurable: true });
    }
    return n2(t3, [{ key: "abort", value: function() {
      var e3;
      try {
        e3 = new Event("abort");
      } catch (t4) {
        typeof document != "undefined" ? document.createEvent ? (e3 = document.createEvent("Event")).initEvent("abort", false, false) : (e3 = document.createEventObject()).type = "abort" : e3 = { type: "abort", bubbles: false, cancelable: false };
      }
      this.signal.dispatchEvent(e3);
    } }, { key: "toString", value: function() {
      return "[object AbortController]";
    } }]), t3;
  }();
  function v2(e3) {
    return e3.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"), true) : typeof e3.Request == "function" && !e3.Request.prototype.hasOwnProperty("signal") || !e3.AbortController;
  }
  typeof Symbol != "undefined" && Symbol.toStringTag && (y2.prototype[Symbol.toStringTag] = "AbortController", p2.prototype[Symbol.toStringTag] = "AbortSignal"), function(e3) {
    v2(e3) && (e3.AbortController = y2, e3.AbortSignal = p2);
  }(typeof self != "undefined" ? self : s);
}();
var xa = l(function(e2, t2) {
  Object.defineProperty(t2, "__esModule", { value: true });
  var n2 = function() {
    function e3() {
      var e4 = this;
      this.locked = /* @__PURE__ */ new Map(), this.addToLocked = function(t3, n3) {
        var r2 = e4.locked.get(t3);
        r2 === void 0 ? n3 === void 0 ? e4.locked.set(t3, []) : e4.locked.set(t3, [n3]) : n3 !== void 0 && (r2.unshift(n3), e4.locked.set(t3, r2));
      }, this.isLocked = function(t3) {
        return e4.locked.has(t3);
      }, this.lock = function(t3) {
        return new Promise(function(n3, r2) {
          e4.isLocked(t3) ? e4.addToLocked(t3, n3) : (e4.addToLocked(t3), n3());
        });
      }, this.unlock = function(t3) {
        var n3 = e4.locked.get(t3);
        if (n3 !== void 0 && n3.length !== 0) {
          var r2 = n3.pop();
          e4.locked.set(t3, n3), r2 !== void 0 && setTimeout(r2, 0);
        } else
          e4.locked.delete(t3);
      };
    }
    return e3.getInstance = function() {
      return e3.instance === void 0 && (e3.instance = new e3()), e3.instance;
    }, e3;
  }();
  t2.default = function() {
    return n2.getInstance();
  };
});
u(xa);
var Ta = l(function(e2, t2) {
  var n2 = s && s.__awaiter || function(e3, t3, n3, r3) {
    return new (n3 || (n3 = Promise))(function(o3, i3) {
      function a3(e4) {
        try {
          s2(r3.next(e4));
        } catch (e5) {
          i3(e5);
        }
      }
      function c3(e4) {
        try {
          s2(r3.throw(e4));
        } catch (e5) {
          i3(e5);
        }
      }
      function s2(e4) {
        e4.done ? o3(e4.value) : new n3(function(t4) {
          t4(e4.value);
        }).then(a3, c3);
      }
      s2((r3 = r3.apply(e3, t3 || [])).next());
    });
  }, r2 = s && s.__generator || function(e3, t3) {
    var n3, r3, o3, i3, a3 = { label: 0, sent: function() {
      if (1 & o3[0])
        throw o3[1];
      return o3[1];
    }, trys: [], ops: [] };
    return i3 = { next: c3(0), throw: c3(1), return: c3(2) }, typeof Symbol == "function" && (i3[Symbol.iterator] = function() {
      return this;
    }), i3;
    function c3(i4) {
      return function(c4) {
        return function(i5) {
          if (n3)
            throw new TypeError("Generator is already executing.");
          for (; a3; )
            try {
              if (n3 = 1, r3 && (o3 = 2 & i5[0] ? r3.return : i5[0] ? r3.throw || ((o3 = r3.return) && o3.call(r3), 0) : r3.next) && !(o3 = o3.call(r3, i5[1])).done)
                return o3;
              switch (r3 = 0, o3 && (i5 = [2 & i5[0], o3.value]), i5[0]) {
                case 0:
                case 1:
                  o3 = i5;
                  break;
                case 4:
                  return a3.label++, { value: i5[1], done: false };
                case 5:
                  a3.label++, r3 = i5[1], i5 = [0];
                  continue;
                case 7:
                  i5 = a3.ops.pop(), a3.trys.pop();
                  continue;
                default:
                  if (!(o3 = a3.trys, (o3 = o3.length > 0 && o3[o3.length - 1]) || i5[0] !== 6 && i5[0] !== 2)) {
                    a3 = 0;
                    continue;
                  }
                  if (i5[0] === 3 && (!o3 || i5[1] > o3[0] && i5[1] < o3[3])) {
                    a3.label = i5[1];
                    break;
                  }
                  if (i5[0] === 6 && a3.label < o3[1]) {
                    a3.label = o3[1], o3 = i5;
                    break;
                  }
                  if (o3 && a3.label < o3[2]) {
                    a3.label = o3[2], a3.ops.push(i5);
                    break;
                  }
                  o3[2] && a3.ops.pop(), a3.trys.pop();
                  continue;
              }
              i5 = t3.call(e3, a3);
            } catch (e4) {
              i5 = [6, e4], r3 = 0;
            } finally {
              n3 = o3 = 0;
            }
          if (5 & i5[0])
            throw i5[1];
          return { value: i5[0] ? i5[1] : void 0, done: true };
        }([i4, c4]);
      };
    }
  };
  Object.defineProperty(t2, "__esModule", { value: true });
  var o2 = "browser-tabs-lock-key";
  function i2(e3) {
    return new Promise(function(t3) {
      return setTimeout(t3, e3);
    });
  }
  function a2(e3) {
    for (var t3 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", n3 = "", r3 = 0; r3 < e3; r3++) {
      n3 += t3[Math.floor(Math.random() * t3.length)];
    }
    return n3;
  }
  var c2 = function() {
    function e3() {
      this.acquiredIatSet = /* @__PURE__ */ new Set(), this.id = Date.now().toString() + a2(15), this.acquireLock = this.acquireLock.bind(this), this.releaseLock = this.releaseLock.bind(this), this.releaseLock__private__ = this.releaseLock__private__.bind(this), this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this), this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this), e3.waiters === void 0 && (e3.waiters = []);
    }
    return e3.prototype.acquireLock = function(t3, c3) {
      return c3 === void 0 && (c3 = 5e3), n2(this, void 0, void 0, function() {
        var n3, s2, u2, l2, f2, d2;
        return r2(this, function(r3) {
          switch (r3.label) {
            case 0:
              n3 = Date.now() + a2(4), s2 = Date.now() + c3, u2 = o2 + "-" + t3, l2 = window.localStorage, r3.label = 1;
            case 1:
              return Date.now() < s2 ? [4, i2(30)] : [3, 8];
            case 2:
              return r3.sent(), l2.getItem(u2) !== null ? [3, 5] : (f2 = this.id + "-" + t3 + "-" + n3, [4, i2(Math.floor(25 * Math.random()))]);
            case 3:
              return r3.sent(), l2.setItem(u2, JSON.stringify({ id: this.id, iat: n3, timeoutKey: f2, timeAcquired: Date.now(), timeRefreshed: Date.now() })), [4, i2(30)];
            case 4:
              return r3.sent(), (d2 = l2.getItem(u2)) !== null && (d2 = JSON.parse(d2)).id === this.id && d2.iat === n3 ? (this.acquiredIatSet.add(n3), this.refreshLockWhileAcquired(u2, n3), [2, true]) : [3, 7];
            case 5:
              return e3.lockCorrector(), [4, this.waitForSomethingToChange(s2)];
            case 6:
              r3.sent(), r3.label = 7;
            case 7:
              return n3 = Date.now() + a2(4), [3, 1];
            case 8:
              return [2, false];
          }
        });
      });
    }, e3.prototype.refreshLockWhileAcquired = function(e4, t3) {
      return n2(this, void 0, void 0, function() {
        var o3 = this;
        return r2(this, function(i3) {
          return setTimeout(function() {
            return n2(o3, void 0, void 0, function() {
              var n3, o4;
              return r2(this, function(r3) {
                switch (r3.label) {
                  case 0:
                    return [4, xa.default().lock(t3)];
                  case 1:
                    return r3.sent(), this.acquiredIatSet.has(t3) ? (n3 = window.localStorage, (o4 = n3.getItem(e4)) === null ? (xa.default().unlock(t3), [2]) : ((o4 = JSON.parse(o4)).timeRefreshed = Date.now(), n3.setItem(e4, JSON.stringify(o4)), xa.default().unlock(t3), this.refreshLockWhileAcquired(e4, t3), [2])) : (xa.default().unlock(t3), [2]);
                }
              });
            });
          }, 1e3), [2];
        });
      });
    }, e3.prototype.waitForSomethingToChange = function(t3) {
      return n2(this, void 0, void 0, function() {
        return r2(this, function(n3) {
          switch (n3.label) {
            case 0:
              return [4, new Promise(function(n4) {
                var r3 = false, o3 = Date.now(), i3 = false;
                function a3() {
                  if (i3 || (window.removeEventListener("storage", a3), e3.removeFromWaiting(a3), clearTimeout(c3), i3 = true), !r3) {
                    r3 = true;
                    var t4 = 50 - (Date.now() - o3);
                    t4 > 0 ? setTimeout(n4, t4) : n4();
                  }
                }
                window.addEventListener("storage", a3), e3.addToWaiting(a3);
                var c3 = setTimeout(a3, Math.max(0, t3 - Date.now()));
              })];
            case 1:
              return n3.sent(), [2];
          }
        });
      });
    }, e3.addToWaiting = function(t3) {
      this.removeFromWaiting(t3), e3.waiters !== void 0 && e3.waiters.push(t3);
    }, e3.removeFromWaiting = function(t3) {
      e3.waiters !== void 0 && (e3.waiters = e3.waiters.filter(function(e4) {
        return e4 !== t3;
      }));
    }, e3.notifyWaiters = function() {
      e3.waiters !== void 0 && e3.waiters.slice().forEach(function(e4) {
        return e4();
      });
    }, e3.prototype.releaseLock = function(e4) {
      return n2(this, void 0, void 0, function() {
        return r2(this, function(t3) {
          switch (t3.label) {
            case 0:
              return [4, this.releaseLock__private__(e4)];
            case 1:
              return [2, t3.sent()];
          }
        });
      });
    }, e3.prototype.releaseLock__private__ = function(t3) {
      return n2(this, void 0, void 0, function() {
        var n3, i3, a3;
        return r2(this, function(r3) {
          switch (r3.label) {
            case 0:
              return n3 = window.localStorage, i3 = o2 + "-" + t3, (a3 = n3.getItem(i3)) === null ? [2] : (a3 = JSON.parse(a3)).id !== this.id ? [3, 2] : [4, xa.default().lock(a3.iat)];
            case 1:
              r3.sent(), this.acquiredIatSet.delete(a3.iat), n3.removeItem(i3), xa.default().unlock(a3.iat), e3.notifyWaiters(), r3.label = 2;
            case 2:
              return [2];
          }
        });
      });
    }, e3.lockCorrector = function() {
      for (var t3 = Date.now() - 5e3, n3 = window.localStorage, r3 = Object.keys(n3), i3 = false, a3 = 0; a3 < r3.length; a3++) {
        var c3 = r3[a3];
        if (c3.includes(o2)) {
          var s2 = n3.getItem(c3);
          s2 !== null && ((s2 = JSON.parse(s2)).timeRefreshed === void 0 && s2.timeAcquired < t3 || s2.timeRefreshed !== void 0 && s2.timeRefreshed < t3) && (n3.removeItem(c3), i3 = true);
        }
      }
      i3 && e3.notifyWaiters();
    }, e3.waiters = void 0, e3;
  }();
  t2.default = c2;
});
var ja = u(Ta);
var Ca = { timeoutInSeconds: 60 };
var Ra = ["login_required", "consent_required", "interaction_required", "account_selection_required", "access_denied"];
var La = { name: "auth0-spa-js", version: "1.22.1" };
var Ea = function() {
  return Date.now();
};
var Wa = function(e2) {
  function n2(t2, r2) {
    var o2 = e2.call(this, r2) || this;
    return o2.error = t2, o2.error_description = r2, Object.setPrototypeOf(o2, n2.prototype), o2;
  }
  return t(n2, e2), n2.fromPayload = function(e3) {
    return new n2(e3.error, e3.error_description);
  }, n2;
}(Error);
var Za = function(e2) {
  function n2(t2, r2, o2, i2) {
    i2 === void 0 && (i2 = null);
    var a2 = e2.call(this, t2, r2) || this;
    return a2.state = o2, a2.appState = i2, Object.setPrototypeOf(a2, n2.prototype), a2;
  }
  return t(n2, e2), n2;
}(Wa);
var Ga = function(e2) {
  function n2() {
    var t2 = e2.call(this, "timeout", "Timeout") || this;
    return Object.setPrototypeOf(t2, n2.prototype), t2;
  }
  return t(n2, e2), n2;
}(Wa);
var Pa = function(e2) {
  function n2(t2) {
    var r2 = e2.call(this) || this;
    return r2.popup = t2, Object.setPrototypeOf(r2, n2.prototype), r2;
  }
  return t(n2, e2), n2;
}(Ga);
var Aa = function(e2) {
  function n2(t2) {
    var r2 = e2.call(this, "cancelled", "Popup closed") || this;
    return r2.popup = t2, Object.setPrototypeOf(r2, n2.prototype), r2;
  }
  return t(n2, e2), n2;
}(Wa);
var Xa = function(e2) {
  function n2(t2, r2, o2) {
    var i2 = e2.call(this, t2, r2) || this;
    return i2.mfa_token = o2, Object.setPrototypeOf(i2, n2.prototype), i2;
  }
  return t(n2, e2), n2;
}(Wa);
var Fa = function(e2) {
  function n2(t2, r2) {
    var o2 = e2.call(this, "missing_refresh_token", "Missing Refresh Token (audience: '".concat(Ma(t2, ["default"]), "', scope: '").concat(Ma(r2), "')")) || this;
    return o2.audience = t2, o2.scope = r2, Object.setPrototypeOf(o2, n2.prototype), o2;
  }
  return t(n2, e2), n2;
}(Wa);
var Ka = function(e2) {
  return new Promise(function(t2, n2) {
    var r2, o2 = setInterval(function() {
      e2.popup && e2.popup.closed && (clearInterval(o2), clearTimeout(i2), window.removeEventListener("message", r2, false), n2(new Aa(e2.popup)));
    }, 1e3), i2 = setTimeout(function() {
      clearInterval(o2), n2(new Pa(e2.popup)), window.removeEventListener("message", r2, false);
    }, 1e3 * (e2.timeoutInSeconds || 60));
    r2 = function(a2) {
      if (a2.data && a2.data.type === "authorization_response") {
        if (clearTimeout(i2), clearInterval(o2), window.removeEventListener("message", r2, false), e2.popup.close(), a2.data.response.error)
          return n2(Wa.fromPayload(a2.data.response));
        t2(a2.data.response);
      }
    }, window.addEventListener("message", r2);
  });
};
var Na = function() {
  return window.crypto || window.msCrypto;
};
var Ua = function() {
  var e2 = Na();
  return e2.subtle || e2.webkitSubtle;
};
var Ya = function() {
  var e2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.", t2 = "";
  return Array.from(Na().getRandomValues(new Uint8Array(43))).forEach(function(n2) {
    return t2 += e2[n2 % e2.length];
  }), t2;
};
var Ha = function(e2) {
  return btoa(e2);
};
var Da = function(e2) {
  return Object.keys(e2).filter(function(t2) {
    return e2[t2] !== void 0;
  }).map(function(t2) {
    return encodeURIComponent(t2) + "=" + encodeURIComponent(e2[t2]);
  }).join("&");
};
var Ja = function(e2) {
  return o(void 0, void 0, void 0, function() {
    var t2;
    return i(this, function(n2) {
      switch (n2.label) {
        case 0:
          return t2 = Ua().digest({ name: "SHA-256" }, new TextEncoder().encode(e2)), window.msCrypto ? [2, new Promise(function(e3, n3) {
            t2.oncomplete = function(t3) {
              e3(t3.target.result);
            }, t2.onerror = function(e4) {
              n3(e4.error);
            }, t2.onabort = function() {
              n3("The digest operation was aborted");
            };
          })] : [4, t2];
        case 1:
          return [2, n2.sent()];
      }
    });
  });
};
var Va = function(e2) {
  return function(e3) {
    return decodeURIComponent(atob(e3).split("").map(function(e4) {
      return "%" + ("00" + e4.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
  }(e2.replace(/_/g, "/").replace(/-/g, "+"));
};
var za = function(e2) {
  var t2 = new Uint8Array(e2);
  return function(e3) {
    var t3 = { "+": "-", "/": "_", "=": "" };
    return e3.replace(/[+/=]/g, function(e4) {
      return t3[e4];
    });
  }(window.btoa(String.fromCharCode.apply(String, c([], a(Array.from(t2)), false))));
};
function Ma(e2, t2) {
  return t2 === void 0 && (t2 = []), e2 && !t2.includes(e2) ? e2 : "";
}
var Ba = function(e2, t2) {
  return o(void 0, void 0, void 0, function() {
    var n2, r2;
    return i(this, function(o2) {
      switch (o2.label) {
        case 0:
          return [4, (i2 = e2, a2 = t2, a2 = a2 || {}, new Promise(function(e3, t3) {
            var n3 = new XMLHttpRequest(), r3 = [], o3 = [], c2 = {}, s2 = function() {
              return { ok: (n3.status / 100 | 0) == 2, statusText: n3.statusText, status: n3.status, url: n3.responseURL, text: function() {
                return Promise.resolve(n3.responseText);
              }, json: function() {
                return Promise.resolve(n3.responseText).then(JSON.parse);
              }, blob: function() {
                return Promise.resolve(new Blob([n3.response]));
              }, clone: s2, headers: { keys: function() {
                return r3;
              }, entries: function() {
                return o3;
              }, get: function(e4) {
                return c2[e4.toLowerCase()];
              }, has: function(e4) {
                return e4.toLowerCase() in c2;
              } } };
            };
            for (var u2 in n3.open(a2.method || "get", i2, true), n3.onload = function() {
              n3.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(e4, t4, n4) {
                r3.push(t4 = t4.toLowerCase()), o3.push([t4, n4]), c2[t4] = c2[t4] ? c2[t4] + "," + n4 : n4;
              }), e3(s2());
            }, n3.onerror = t3, n3.withCredentials = a2.credentials == "include", a2.headers)
              n3.setRequestHeader(u2, a2.headers[u2]);
            n3.send(a2.body || null);
          }))];
        case 1:
          return n2 = o2.sent(), r2 = { ok: n2.ok }, [4, n2.json()];
        case 2:
          return [2, (r2.json = o2.sent(), r2)];
      }
      var i2, a2;
    });
  });
};
var Qa = function(e2, t2, n2) {
  return o(void 0, void 0, void 0, function() {
    var r2, o2;
    return i(this, function(i2) {
      return r2 = new AbortController(), t2.signal = r2.signal, [2, Promise.race([Ba(e2, t2), new Promise(function(e3, t3) {
        o2 = setTimeout(function() {
          r2.abort(), t3(new Error("Timeout when executing 'fetch'"));
        }, n2);
      })]).finally(function() {
        clearTimeout(o2);
      })];
    });
  });
};
var qa = function(e2, t2, n2, r2, a2, c2, s2) {
  return o(void 0, void 0, void 0, function() {
    return i(this, function(o2) {
      return [2, (i2 = { auth: { audience: t2, scope: n2 }, timeout: a2, fetchUrl: e2, fetchOptions: r2, useFormData: s2 }, u2 = c2, new Promise(function(e3, t3) {
        var n3 = new MessageChannel();
        n3.port1.onmessage = function(n4) {
          n4.data.error ? t3(new Error(n4.data.error)) : e3(n4.data);
        }, u2.postMessage(i2, [n3.port2]);
      }))];
      var i2, u2;
    });
  });
};
var $a = function(e2, t2, n2, r2, a2, c2, s2) {
  return s2 === void 0 && (s2 = 1e4), o(void 0, void 0, void 0, function() {
    return i(this, function(o2) {
      return a2 ? [2, qa(e2, t2, n2, r2, s2, a2, c2)] : [2, Qa(e2, r2, s2)];
    });
  });
};
function ec(e2, t2, n2, a2, c2, s2, u2) {
  return o(this, void 0, void 0, function() {
    var o2, l2, f2, d2, h2, p2, y2, v2, m2;
    return i(this, function(i2) {
      switch (i2.label) {
        case 0:
          o2 = null, f2 = 0, i2.label = 1;
        case 1:
          if (!(f2 < 3))
            return [3, 6];
          i2.label = 2;
        case 2:
          return i2.trys.push([2, 4, , 5]), [4, $a(e2, n2, a2, c2, s2, u2, t2)];
        case 3:
          return l2 = i2.sent(), o2 = null, [3, 6];
        case 4:
          return d2 = i2.sent(), o2 = d2, [3, 5];
        case 5:
          return f2++, [3, 1];
        case 6:
          if (o2)
            throw o2.message = o2.message || "Failed to fetch", o2;
          if (h2 = l2.json, p2 = h2.error, y2 = h2.error_description, v2 = r(h2, ["error", "error_description"]), !l2.ok) {
            if (m2 = y2 || "HTTP error. Unable to fetch ".concat(e2), p2 === "mfa_required")
              throw new Xa(p2, m2, v2.mfa_token);
            throw new Wa(p2 || "request_error", m2);
          }
          return [2, v2];
      }
    });
  });
}
function tc(e2, t2) {
  var n2 = e2.baseUrl, a2 = e2.timeout, c2 = e2.audience, s2 = e2.scope, u2 = e2.auth0Client, l2 = e2.useFormData, f2 = r(e2, ["baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData"]);
  return o(this, void 0, void 0, function() {
    var e3;
    return i(this, function(r2) {
      switch (r2.label) {
        case 0:
          return e3 = l2 ? Da(f2) : JSON.stringify(f2), [4, ec("".concat(n2, "/oauth/token"), a2, c2 || "default", s2, { method: "POST", body: e3, headers: { "Content-Type": l2 ? "application/x-www-form-urlencoded" : "application/json", "Auth0-Client": btoa(JSON.stringify(u2 || La)) } }, t2, l2)];
        case 1:
          return [2, r2.sent()];
      }
    });
  });
}
var nc = function(e2) {
  return Array.from(new Set(e2));
};
var rc = function() {
  for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
    e2[t2] = arguments[t2];
  return nc(e2.join(" ").trim().split(/\s+/)).join(" ");
};
var oc = function() {
  function e2(e3, t2) {
    t2 === void 0 && (t2 = "@@auth0spajs@@"), this.prefix = t2, this.client_id = e3.client_id, this.scope = e3.scope, this.audience = e3.audience;
  }
  return e2.prototype.toKey = function() {
    return "".concat(this.prefix, "::").concat(this.client_id, "::").concat(this.audience, "::").concat(this.scope);
  }, e2.fromKey = function(t2) {
    var n2 = a(t2.split("::"), 4), r2 = n2[0], o2 = n2[1], i2 = n2[2];
    return new e2({ client_id: o2, scope: n2[3], audience: i2 }, r2);
  }, e2.fromCacheEntry = function(t2) {
    return new e2({ scope: t2.scope, audience: t2.audience, client_id: t2.client_id });
  }, e2;
}();
var ic = function() {
  function e2() {
  }
  return e2.prototype.set = function(e3, t2) {
    localStorage.setItem(e3, JSON.stringify(t2));
  }, e2.prototype.get = function(e3) {
    var t2 = window.localStorage.getItem(e3);
    if (t2)
      try {
        return JSON.parse(t2);
      } catch (e4) {
        return;
      }
  }, e2.prototype.remove = function(e3) {
    localStorage.removeItem(e3);
  }, e2.prototype.allKeys = function() {
    return Object.keys(window.localStorage).filter(function(e3) {
      return e3.startsWith("@@auth0spajs@@");
    });
  }, e2;
}();
var ac = function() {
  var e2;
  this.enclosedCache = (e2 = {}, { set: function(t2, n2) {
    e2[t2] = n2;
  }, get: function(t2) {
    var n2 = e2[t2];
    if (n2)
      return n2;
  }, remove: function(t2) {
    delete e2[t2];
  }, allKeys: function() {
    return Object.keys(e2);
  } });
};
var cc = function() {
  function e2(e3, t2, n2) {
    this.cache = e3, this.keyManifest = t2, this.nowProvider = n2, this.nowProvider = this.nowProvider || Ea;
  }
  return e2.prototype.get = function(e3, t2) {
    var n2;
    return t2 === void 0 && (t2 = 0), o(this, void 0, void 0, function() {
      var r2, o2, a2, c2, s2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return [4, this.cache.get(e3.toKey())];
          case 1:
            return (r2 = i2.sent()) ? [3, 4] : [4, this.getCacheKeys()];
          case 2:
            return (o2 = i2.sent()) ? (a2 = this.matchExistingCacheKey(e3, o2)) ? [4, this.cache.get(a2)] : [3, 4] : [2];
          case 3:
            r2 = i2.sent(), i2.label = 4;
          case 4:
            return r2 ? [4, this.nowProvider()] : [2];
          case 5:
            return c2 = i2.sent(), s2 = Math.floor(c2 / 1e3), r2.expiresAt - t2 < s2 ? r2.body.refresh_token ? (r2.body = { refresh_token: r2.body.refresh_token }, [4, this.cache.set(e3.toKey(), r2)]) : [3, 7] : [3, 10];
          case 6:
            return i2.sent(), [2, r2.body];
          case 7:
            return [4, this.cache.remove(e3.toKey())];
          case 8:
            return i2.sent(), [4, (n2 = this.keyManifest) === null || n2 === void 0 ? void 0 : n2.remove(e3.toKey())];
          case 9:
            return i2.sent(), [2];
          case 10:
            return [2, r2.body];
        }
      });
    });
  }, e2.prototype.set = function(e3) {
    var t2;
    return o(this, void 0, void 0, function() {
      var n2, r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return n2 = new oc({ client_id: e3.client_id, scope: e3.scope, audience: e3.audience }), [4, this.wrapCacheEntry(e3)];
          case 1:
            return r2 = o2.sent(), [4, this.cache.set(n2.toKey(), r2)];
          case 2:
            return o2.sent(), [4, (t2 = this.keyManifest) === null || t2 === void 0 ? void 0 : t2.add(n2.toKey())];
          case 3:
            return o2.sent(), [2];
        }
      });
    });
  }, e2.prototype.clear = function(e3) {
    var t2;
    return o(this, void 0, void 0, function() {
      var n2, r2 = this;
      return i(this, function(a2) {
        switch (a2.label) {
          case 0:
            return [4, this.getCacheKeys()];
          case 1:
            return (n2 = a2.sent()) ? [4, n2.filter(function(t3) {
              return !e3 || t3.includes(e3);
            }).reduce(function(e4, t3) {
              return o(r2, void 0, void 0, function() {
                return i(this, function(n3) {
                  switch (n3.label) {
                    case 0:
                      return [4, e4];
                    case 1:
                      return n3.sent(), [4, this.cache.remove(t3)];
                    case 2:
                      return n3.sent(), [2];
                  }
                });
              });
            }, Promise.resolve())] : [2];
          case 2:
            return a2.sent(), [4, (t2 = this.keyManifest) === null || t2 === void 0 ? void 0 : t2.clear()];
          case 3:
            return a2.sent(), [2];
        }
      });
    });
  }, e2.prototype.clearSync = function(e3) {
    var t2 = this, n2 = this.cache.allKeys();
    n2 && n2.filter(function(t3) {
      return !e3 || t3.includes(e3);
    }).forEach(function(e4) {
      t2.cache.remove(e4);
    });
  }, e2.prototype.wrapCacheEntry = function(e3) {
    return o(this, void 0, void 0, function() {
      var t2, n2, r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, this.nowProvider()];
          case 1:
            return t2 = o2.sent(), n2 = Math.floor(t2 / 1e3) + e3.expires_in, r2 = Math.min(n2, e3.decodedToken.claims.exp), [2, { body: e3, expiresAt: r2 }];
        }
      });
    });
  }, e2.prototype.getCacheKeys = function() {
    var e3;
    return o(this, void 0, void 0, function() {
      var t2;
      return i(this, function(n2) {
        switch (n2.label) {
          case 0:
            return this.keyManifest ? [4, this.keyManifest.get()] : [3, 2];
          case 1:
            return t2 = (e3 = n2.sent()) === null || e3 === void 0 ? void 0 : e3.keys, [3, 4];
          case 2:
            return [4, this.cache.allKeys()];
          case 3:
            t2 = n2.sent(), n2.label = 4;
          case 4:
            return [2, t2];
        }
      });
    });
  }, e2.prototype.matchExistingCacheKey = function(e3, t2) {
    return t2.filter(function(t3) {
      var n2 = oc.fromKey(t3), r2 = new Set(n2.scope && n2.scope.split(" ")), o2 = e3.scope.split(" "), i2 = n2.scope && o2.reduce(function(e4, t4) {
        return e4 && r2.has(t4);
      }, true);
      return n2.prefix === "@@auth0spajs@@" && n2.client_id === e3.client_id && n2.audience === e3.audience && i2;
    })[0];
  }, e2;
}();
var sc = function() {
  function e2(e3, t2) {
    this.storage = e3, this.clientId = t2, this.storageKey = "".concat("a0.spajs.txs", ".").concat(this.clientId), this.transaction = this.storage.get(this.storageKey);
  }
  return e2.prototype.create = function(e3) {
    this.transaction = e3, this.storage.save(this.storageKey, e3, { daysUntilExpire: 1 });
  }, e2.prototype.get = function() {
    return this.transaction;
  }, e2.prototype.remove = function() {
    delete this.transaction, this.storage.remove(this.storageKey);
  }, e2;
}();
var uc = function(e2) {
  return typeof e2 == "number";
};
var lc = ["iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm"];
var fc = function(e2) {
  if (!e2.id_token)
    throw new Error("ID token is required but missing");
  var t2 = function(e3) {
    var t3 = e3.split("."), n3 = a(t3, 3), r3 = n3[0], o3 = n3[1], i3 = n3[2];
    if (t3.length !== 3 || !r3 || !o3 || !i3)
      throw new Error("ID token could not be decoded");
    var c3 = JSON.parse(Va(o3)), s2 = { __raw: e3 }, u2 = {};
    return Object.keys(c3).forEach(function(e4) {
      s2[e4] = c3[e4], lc.includes(e4) || (u2[e4] = c3[e4]);
    }), { encoded: { header: r3, payload: o3, signature: i3 }, header: JSON.parse(Va(r3)), claims: s2, user: u2 };
  }(e2.id_token);
  if (!t2.claims.iss)
    throw new Error("Issuer (iss) claim must be a string present in the ID token");
  if (t2.claims.iss !== e2.iss)
    throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'.concat(e2.iss, '", found "').concat(t2.claims.iss, '"'));
  if (!t2.user.sub)
    throw new Error("Subject (sub) claim must be a string present in the ID token");
  if (t2.header.alg !== "RS256")
    throw new Error('Signature algorithm of "'.concat(t2.header.alg, '" is not supported. Expected the ID token to be signed with "RS256".'));
  if (!t2.claims.aud || typeof t2.claims.aud != "string" && !Array.isArray(t2.claims.aud))
    throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
  if (Array.isArray(t2.claims.aud)) {
    if (!t2.claims.aud.includes(e2.aud))
      throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e2.aud, '" but was not one of "').concat(t2.claims.aud.join(", "), '"'));
    if (t2.claims.aud.length > 1) {
      if (!t2.claims.azp)
        throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
      if (t2.claims.azp !== e2.aud)
        throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(e2.aud, '", found "').concat(t2.claims.azp, '"'));
    }
  } else if (t2.claims.aud !== e2.aud)
    throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(e2.aud, '" but found "').concat(t2.claims.aud, '"'));
  if (e2.nonce) {
    if (!t2.claims.nonce)
      throw new Error("Nonce (nonce) claim must be a string present in the ID token");
    if (t2.claims.nonce !== e2.nonce)
      throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(e2.nonce, '", found "').concat(t2.claims.nonce, '"'));
  }
  if (e2.max_age && !uc(t2.claims.auth_time))
    throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
  if (!uc(t2.claims.exp))
    throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
  if (!uc(t2.claims.iat))
    throw new Error("Issued At (iat) claim must be a number present in the ID token");
  var n2 = e2.leeway || 60, r2 = new Date(e2.now || Date.now()), o2 = new Date(0), i2 = new Date(0), c2 = new Date(0);
  if (c2.setUTCSeconds(parseInt(t2.claims.auth_time) + e2.max_age + n2), o2.setUTCSeconds(t2.claims.exp + n2), i2.setUTCSeconds(t2.claims.nbf - n2), r2 > o2)
    throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(r2, ") is after expiration time (").concat(o2, ")"));
  if (uc(t2.claims.nbf) && r2 < i2)
    throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (".concat(r2, ") is before ").concat(i2));
  if (uc(t2.claims.auth_time) && r2 > c2)
    throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (".concat(r2, ") is after last auth at ").concat(c2));
  if (e2.organizationId) {
    if (!t2.claims.org_id)
      throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
    if (e2.organizationId !== t2.claims.org_id)
      throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(e2.organizationId, '", found "').concat(t2.claims.org_id, '"'));
  }
  return t2;
};
var dc = l(function(e2, t2) {
  var n2 = s && s.__assign || function() {
    return n2 = Object.assign || function(e3) {
      for (var t3, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
        for (var o3 in t3 = arguments[n3])
          Object.prototype.hasOwnProperty.call(t3, o3) && (e3[o3] = t3[o3]);
      return e3;
    }, n2.apply(this, arguments);
  };
  function r2(e3, t3) {
    if (!t3)
      return "";
    var n3 = "; " + e3;
    return t3 === true ? n3 : n3 + "=" + t3;
  }
  function o2(e3, t3, n3) {
    return encodeURIComponent(e3).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(t3).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(e4) {
      if (typeof e4.expires == "number") {
        var t4 = new Date();
        t4.setMilliseconds(t4.getMilliseconds() + 864e5 * e4.expires), e4.expires = t4;
      }
      return r2("Expires", e4.expires ? e4.expires.toUTCString() : "") + r2("Domain", e4.domain) + r2("Path", e4.path) + r2("Secure", e4.secure) + r2("SameSite", e4.sameSite);
    }(n3);
  }
  function i2(e3) {
    for (var t3 = {}, n3 = e3 ? e3.split("; ") : [], r3 = /(%[\dA-F]{2})+/gi, o3 = 0; o3 < n3.length; o3++) {
      var i3 = n3[o3].split("="), a3 = i3.slice(1).join("=");
      a3.charAt(0) === '"' && (a3 = a3.slice(1, -1));
      try {
        t3[i3[0].replace(r3, decodeURIComponent)] = a3.replace(r3, decodeURIComponent);
      } catch (e4) {
      }
    }
    return t3;
  }
  function a2() {
    return i2(document.cookie);
  }
  function c2(e3, t3, r3) {
    document.cookie = o2(e3, t3, n2({ path: "/" }, r3));
  }
  t2.__esModule = true, t2.encode = o2, t2.parse = i2, t2.getAll = a2, t2.get = function(e3) {
    return a2()[e3];
  }, t2.set = c2, t2.remove = function(e3, t3) {
    c2(e3, "", n2(n2({}, t3), { expires: -1 }));
  };
});
u(dc), dc.encode, dc.parse, dc.getAll;
var hc = dc.get;
var pc = dc.set;
var yc = dc.remove;
var vc = { get: function(e2) {
  var t2 = hc(e2);
  if (t2 !== void 0)
    return JSON.parse(t2);
}, save: function(e2, t2, n2) {
  var r2 = {};
  window.location.protocol === "https:" && (r2 = { secure: true, sameSite: "none" }), (n2 == null ? void 0 : n2.daysUntilExpire) && (r2.expires = n2.daysUntilExpire), (n2 == null ? void 0 : n2.cookieDomain) && (r2.domain = n2.cookieDomain), pc(e2, JSON.stringify(t2), r2);
}, remove: function(e2) {
  yc(e2);
} };
var mc = { get: function(e2) {
  var t2 = vc.get(e2);
  return t2 || vc.get("".concat("_legacy_").concat(e2));
}, save: function(e2, t2, n2) {
  var r2 = {};
  window.location.protocol === "https:" && (r2 = { secure: true }), (n2 == null ? void 0 : n2.daysUntilExpire) && (r2.expires = n2.daysUntilExpire), pc("".concat("_legacy_").concat(e2), JSON.stringify(t2), r2), vc.save(e2, t2, n2);
}, remove: function(e2) {
  vc.remove(e2), vc.remove("".concat("_legacy_").concat(e2));
} };
var bc = { get: function(e2) {
  if (typeof sessionStorage != "undefined") {
    var t2 = sessionStorage.getItem(e2);
    if (t2 !== void 0)
      return JSON.parse(t2);
  }
}, save: function(e2, t2) {
  sessionStorage.setItem(e2, JSON.stringify(t2));
}, remove: function(e2) {
  sessionStorage.removeItem(e2);
} };
function gc(e2, t2, n2) {
  var r2 = t2 === void 0 ? null : t2, o2 = function(e3, t3) {
    var n3 = atob(e3);
    if (t3) {
      for (var r3 = new Uint8Array(n3.length), o3 = 0, i3 = n3.length; o3 < i3; ++o3)
        r3[o3] = n3.charCodeAt(o3);
      return String.fromCharCode.apply(null, new Uint16Array(r3.buffer));
    }
    return n3;
  }(e2, n2 !== void 0 && n2), i2 = o2.indexOf("\n", 10) + 1, a2 = o2.substring(i2) + (r2 ? "//# sourceMappingURL=" + r2 : ""), c2 = new Blob([a2], { type: "application/javascript" });
  return URL.createObjectURL(c2);
}
var wc;
var Sc;
var kc;
var _c;
var Ic = (wc = "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7dmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9LHQoZSxyKX07ZnVuY3Rpb24gZShlLHIpe2lmKCJmdW5jdGlvbiIhPXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKCJDbGFzcyBleHRlbmRzIHZhbHVlICIrU3RyaW5nKHIpKyIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX12YXIgcj1mdW5jdGlvbigpe3JldHVybiByPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIG4odCxlLHIsbil7cmV0dXJuIG5ldyhyfHwocj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYyl7ZnVuY3Rpb24gaSh0KXt0cnl7cyhuLm5leHQodCkpfWNhdGNoKHQpe2ModCl9fWZ1bmN0aW9uIGEodCl7dHJ5e3Mobi50aHJvdyh0KSl9Y2F0Y2godCl7Yyh0KX19ZnVuY3Rpb24gcyh0KXt2YXIgZTt0LmRvbmU/byh0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiByP2U6bmV3IHIoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4oaSxhKX1zKChuPW4uYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbyh0LGUpe3ZhciByLG4sbyxjLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoY1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxjO2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihyKXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO2k7KXRyeXtpZihyPTEsbiYmKG89MiZjWzBdP24ucmV0dXJuOmNbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixjWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihjPVsyJmNbMF0sby52YWx1ZV0pLGNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1jO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpjWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKyssbj1jWzFdLGM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpjPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1pLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1jWzBdJiYyIT09Y1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09Y1swXSYmKCFvfHxjWzFdPm9bMF0mJmNbMV08b1szXSkpe2kubGFiZWw9Y1sxXTticmVha31pZig2PT09Y1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1jO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2goYyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfWM9ZS5jYWxsKHQsaSl9Y2F0Y2godCl7Yz1bNix0XSxuPTB9ZmluYWxseXtyPW89MH1pZig1JmNbMF0pdGhyb3cgY1sxXTtyZXR1cm57dmFsdWU6Y1swXT9jWzFdOnZvaWQgMCxkb25lOiEwfX0oW2MsYV0pfX19ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksdCYmIWUuaW5jbHVkZXModCk/dDoiIn12YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbil7dmFyIG89dC5jYWxsKHRoaXMsbil8fHRoaXM7cmV0dXJuIG8uZXJyb3I9ZSxvLmVycm9yX2Rlc2NyaXB0aW9uPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyLmZyb21QYXlsb2FkPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0LmVycm9yLHQuZXJyb3JfZGVzY3JpcHRpb24pfSxyfShFcnJvcik7IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSxuLG8sYyl7dm9pZCAwPT09YyYmKGM9bnVsbCk7dmFyIGk9dC5jYWxsKHRoaXMsZSxuKXx8dGhpcztyZXR1cm4gaS5zdGF0ZT1vLGkuYXBwU3RhdGU9YyxPYmplY3Quc2V0UHJvdG90eXBlT2YoaSxyLnByb3RvdHlwZSksaX1lKHIsdCl9KGkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShmdW5jdGlvbih0KXtmdW5jdGlvbiByKCl7dmFyIGU9dC5jYWxsKHRoaXMsInRpbWVvdXQiLCJUaW1lb3V0Iil8fHRoaXM7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLHIucHJvdG90eXBlKSxlfXJldHVybiBlKHIsdCkscn0oaSkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMsImNhbmNlbGxlZCIsIlBvcHVwIGNsb3NlZCIpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShpKSxmdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbixvKXt2YXIgYz10LmNhbGwodGhpcyxlLG4pfHx0aGlzO3JldHVybiBjLm1mYV90b2tlbj1vLE9iamVjdC5zZXRQcm90b3R5cGVPZihjLHIucHJvdG90eXBlKSxjfWUocix0KX0oaSk7dmFyIGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihlLG4pe3ZhciBvPXQuY2FsbCh0aGlzLCJtaXNzaW5nX3JlZnJlc2hfdG9rZW4iLCJNaXNzaW5nIFJlZnJlc2ggVG9rZW4gKGF1ZGllbmNlOiAnIi5jb25jYXQoYyhlLFsiZGVmYXVsdCJdKSwiJywgc2NvcGU6ICciKS5jb25jYXQoYyhuKSwiJykiKSl8fHRoaXM7cmV0dXJuIG8uYXVkaWVuY2U9ZSxvLnNjb3BlPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyfShpKSxzPXt9LHU9ZnVuY3Rpb24odCxlKXtyZXR1cm4iIi5jb25jYXQodCwifCIpLmNvbmNhdChlKX07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YSxjPWUudGltZW91dCxpPWUuYXV0aCxmPWUuZmV0Y2hVcmwsbD1lLmZldGNoT3B0aW9ucyxwPWUudXNlRm9ybURhdGEsaD1mdW5jdGlvbih0LGUpe3ZhciByPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighcilyZXR1cm4gdDt2YXIgbixvLGM9ci5jYWxsKHQpLGk9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEobj1jLm5leHQoKSkuZG9uZTspaS5wdXNoKG4udmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJihyPWMucmV0dXJuKSYmci5jYWxsKGMpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gaX0odC5wb3J0cywxKVswXTtyZXR1cm4gbih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4seSx2LGIsZCx3LE8sXztyZXR1cm4gbyh0aGlzLChmdW5jdGlvbihvKXtzd2l0Y2goby5sYWJlbCl7Y2FzZSAwOm49KGU9aXx8e30pLmF1ZGllbmNlLHk9ZS5zY29wZSxvLmxhYmVsPTE7Y2FzZSAxOmlmKG8udHJ5cy5wdXNoKFsxLDcsLDhdKSwhKHY9cD8obT1sLmJvZHksaz1uZXcgVVJMU2VhcmNoUGFyYW1zKG0pLFA9e30say5mb3JFYWNoKChmdW5jdGlvbih0LGUpe1BbZV09dH0pKSxQKTpKU09OLnBhcnNlKGwuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXYuZ3JhbnRfdHlwZSl7aWYoYj1mdW5jdGlvbih0LGUpe3JldHVybiBzW3UodCxlKV19KG4seSksIWIpdGhyb3cgbmV3IGEobix5KTtsLmJvZHk9cD9uZXcgVVJMU2VhcmNoUGFyYW1zKHIocih7fSx2KSx7cmVmcmVzaF90b2tlbjpifSkpLnRvU3RyaW5nKCk6SlNPTi5zdHJpbmdpZnkocihyKHt9LHYpLHtyZWZyZXNoX3Rva2VuOmJ9KSl9ZD12b2lkIDAsImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixsLnNpZ25hbD1kLnNpZ25hbCksdz12b2lkIDAsby5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gby50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKGc9YyxuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCxnKX0pKSksZmV0Y2goZixyKHt9LGwpKV0pXTtjYXNlIDM6cmV0dXJuIHc9by5zZW50KCksWzMsNV07Y2FzZSA0OnJldHVybiBPPW8uc2VudCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOk8ubWVzc2FnZX0pLFsyXTtjYXNlIDU6cmV0dXJuIHc/WzQsdy5qc29uKCldOihkJiZkLmFib3J0KCksaC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KSxbMl0pO2Nhc2UgNjpyZXR1cm4odD1vLnNlbnQoKSkucmVmcmVzaF90b2tlbj8oZnVuY3Rpb24odCxlLHIpe3NbdShlLHIpXT10fSh0LnJlZnJlc2hfdG9rZW4sbix5KSxkZWxldGUgdC5yZWZyZXNoX3Rva2VuKTpmdW5jdGlvbih0LGUpe2RlbGV0ZSBzW3UodCxlKV19KG4seSksaC5wb3N0TWVzc2FnZSh7b2s6dy5vayxqc29uOnR9KSxbMyw4XTtjYXNlIDc6cmV0dXJuIF89by5zZW50KCksaC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3JfZGVzY3JpcHRpb246Xy5tZXNzYWdlfX0pLFszLDhdO2Nhc2UgODpyZXR1cm5bMl19dmFyIGcsbSxrLFB9KSl9KSl9KSl9KCk7Cgo=", Sc = null, kc = false, function(e2) {
  return _c = _c || gc(wc, Sc, kc), new Worker(_c, e2);
});
var Oc = {};
var xc = function() {
  function e2(e3, t2) {
    this.cache = e3, this.clientId = t2, this.manifestKey = this.createManifestKeyFrom(this.clientId);
  }
  return e2.prototype.add = function(e3) {
    var t2;
    return o(this, void 0, void 0, function() {
      var n2, r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return r2 = Set.bind, [4, this.cache.get(this.manifestKey)];
          case 1:
            return (n2 = new (r2.apply(Set, [void 0, ((t2 = o2.sent()) === null || t2 === void 0 ? void 0 : t2.keys) || []]))()).add(e3), [4, this.cache.set(this.manifestKey, { keys: c([], a(n2), false) })];
          case 2:
            return o2.sent(), [2];
        }
      });
    });
  }, e2.prototype.remove = function(e3) {
    return o(this, void 0, void 0, function() {
      var t2, n2;
      return i(this, function(r2) {
        switch (r2.label) {
          case 0:
            return [4, this.cache.get(this.manifestKey)];
          case 1:
            return (t2 = r2.sent()) ? ((n2 = new Set(t2.keys)).delete(e3), n2.size > 0 ? [4, this.cache.set(this.manifestKey, { keys: c([], a(n2), false) })] : [3, 3]) : [3, 5];
          case 2:
          case 4:
            return [2, r2.sent()];
          case 3:
            return [4, this.cache.remove(this.manifestKey)];
          case 5:
            return [2];
        }
      });
    });
  }, e2.prototype.get = function() {
    return this.cache.get(this.manifestKey);
  }, e2.prototype.clear = function() {
    return this.cache.remove(this.manifestKey);
  }, e2.prototype.createManifestKeyFrom = function(e3) {
    return "".concat("@@auth0spajs@@", "::").concat(e3);
  }, e2;
}();
var Tc = new ja();
var jc = { memory: function() {
  return new ac().enclosedCache;
}, localstorage: function() {
  return new ic();
} };
var Cc = function(e2) {
  return jc[e2];
};
var Rc = function() {
  return !/Trident.*rv:11\.0/.test(navigator.userAgent);
};
var Lc = function() {
  function e2(e3) {
    var t2, n2, o2, i2;
    if (this.options = e3, typeof window != "undefined" && function() {
      if (!Na())
        throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
      if (Ua() === void 0)
        throw new Error("\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    ");
    }(), e3.cache && e3.cacheLocation && console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."), e3.cache)
      o2 = e3.cache;
    else {
      if (this.cacheLocation = e3.cacheLocation || "memory", !Cc(this.cacheLocation))
        throw new Error('Invalid cache location "'.concat(this.cacheLocation, '"'));
      o2 = Cc(this.cacheLocation)();
    }
    this.httpTimeoutMs = e3.httpTimeoutInSeconds ? 1e3 * e3.httpTimeoutInSeconds : 1e4, this.cookieStorage = e3.legacySameSiteCookie === false ? vc : mc, this.orgHintCookieName = (i2 = this.options.client_id, "auth0.".concat(i2, ".organization_hint")), this.isAuthenticatedCookieName = function(e4) {
      return "auth0.".concat(e4, ".is.authenticated");
    }(this.options.client_id), this.sessionCheckExpiryDays = e3.sessionCheckExpiryDays || 1;
    var a2, c2 = e3.useCookiesForTransactions ? this.cookieStorage : bc;
    this.scope = this.options.scope, this.transactionManager = new sc(c2, this.options.client_id), this.nowProvider = this.options.nowProvider || Ea, this.cacheManager = new cc(o2, o2.allKeys ? null : new xc(o2, this.options.client_id), this.nowProvider), this.domainUrl = (a2 = this.options.domain, /^https?:\/\//.test(a2) ? a2 : "https://".concat(a2)), this.tokenIssuer = function(e4, t3) {
      return e4 ? e4.startsWith("https://") ? e4 : "https://".concat(e4, "/") : "".concat(t3, "/");
    }(this.options.issuer, this.domainUrl), this.defaultScope = rc("openid", ((n2 = (t2 = this.options) === null || t2 === void 0 ? void 0 : t2.advancedOptions) === null || n2 === void 0 ? void 0 : n2.defaultScope) !== void 0 ? this.options.advancedOptions.defaultScope : "openid profile email"), this.options.useRefreshTokens && (this.scope = rc(this.scope, "offline_access")), typeof window != "undefined" && window.Worker && this.options.useRefreshTokens && this.cacheLocation === "memory" && Rc() && (this.worker = new Ic()), this.customOptions = function(e4) {
      return e4.advancedOptions, e4.audience, e4.auth0Client, e4.authorizeTimeoutInSeconds, e4.cacheLocation, e4.client_id, e4.domain, e4.issuer, e4.leeway, e4.max_age, e4.redirect_uri, e4.scope, e4.useRefreshTokens, e4.useCookiesForTransactions, e4.useFormData, r(e4, ["advancedOptions", "audience", "auth0Client", "authorizeTimeoutInSeconds", "cacheLocation", "client_id", "domain", "issuer", "leeway", "max_age", "redirect_uri", "scope", "useRefreshTokens", "useCookiesForTransactions", "useFormData"]);
    }(e3), this.useRefreshTokensFallback = this.options.useRefreshTokensFallback !== false;
  }
  return e2.prototype._url = function(e3) {
    var t2 = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || La)));
    return "".concat(this.domainUrl).concat(e3, "&auth0Client=").concat(t2);
  }, e2.prototype._getParams = function(e3, t2, o2, i2, a2) {
    var c2 = this.options;
    c2.useRefreshTokens, c2.useCookiesForTransactions, c2.useFormData, c2.auth0Client, c2.cacheLocation, c2.advancedOptions, c2.detailedResponse, c2.nowProvider, c2.authorizeTimeoutInSeconds, c2.legacySameSiteCookie, c2.sessionCheckExpiryDays, c2.domain, c2.leeway, c2.httpTimeoutInSeconds;
    var s2 = r(c2, ["useRefreshTokens", "useCookiesForTransactions", "useFormData", "auth0Client", "cacheLocation", "advancedOptions", "detailedResponse", "nowProvider", "authorizeTimeoutInSeconds", "legacySameSiteCookie", "sessionCheckExpiryDays", "domain", "leeway", "httpTimeoutInSeconds"]);
    return n(n(n({}, s2), e3), { scope: rc(this.defaultScope, this.scope, e3.scope), response_type: "code", response_mode: "query", state: t2, nonce: o2, redirect_uri: a2 || this.options.redirect_uri, code_challenge: i2, code_challenge_method: "S256" });
  }, e2.prototype._authorizeUrl = function(e3) {
    return this._url("/authorize?".concat(Da(e3)));
  }, e2.prototype._verifyIdToken = function(e3, t2, n2) {
    return o(this, void 0, void 0, function() {
      var r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return [4, this.nowProvider()];
          case 1:
            return r2 = o2.sent(), [2, fc({ iss: this.tokenIssuer, aud: this.options.client_id, id_token: e3, nonce: t2, organizationId: n2, leeway: this.options.leeway, max_age: this._parseNumber(this.options.max_age), now: r2 })];
        }
      });
    });
  }, e2.prototype._parseNumber = function(e3) {
    return typeof e3 != "string" ? e3 : parseInt(e3, 10) || void 0;
  }, e2.prototype._processOrgIdHint = function(e3) {
    e3 ? this.cookieStorage.save(this.orgHintCookieName, e3, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }) : this.cookieStorage.remove(this.orgHintCookieName);
  }, e2.prototype.buildAuthorizeUrl = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, o2, a2, c2, s2, u2, l2, f2, d2, h2, p2, y2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return t2 = e3.redirect_uri, o2 = e3.appState, a2 = r(e3, ["redirect_uri", "appState"]), c2 = Ha(Ya()), s2 = Ha(Ya()), u2 = Ya(), [4, Ja(u2)];
          case 1:
            return l2 = i2.sent(), f2 = za(l2), d2 = e3.fragment ? "#".concat(e3.fragment) : "", h2 = this._getParams(a2, c2, s2, f2, t2), p2 = this._authorizeUrl(h2), y2 = e3.organization || this.options.organization, this.transactionManager.create(n({ nonce: s2, code_verifier: u2, appState: o2, scope: h2.scope, audience: h2.audience || "default", redirect_uri: h2.redirect_uri, state: c2 }, y2 && { organizationId: y2 })), [2, p2 + d2];
        }
      });
    });
  }, e2.prototype.loginWithPopup = function(e3, t2) {
    return o(this, void 0, void 0, function() {
      var o2, a2, c2, s2, u2, l2, f2, d2, h2, p2, y2, v2, m2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            if (e3 = e3 || {}, !(t2 = t2 || {}).popup && (t2.popup = function(e4) {
              var t3 = window.screenX + (window.innerWidth - 400) / 2, n2 = window.screenY + (window.innerHeight - 600) / 2;
              return window.open(e4, "auth0:authorize:popup", "left=".concat(t3, ",top=").concat(n2, ",width=").concat(400, ",height=").concat(600, ",resizable,scrollbars=yes,status=1"));
            }(""), !t2.popup))
              throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
            return o2 = r(e3, []), a2 = Ha(Ya()), c2 = Ha(Ya()), s2 = Ya(), [4, Ja(s2)];
          case 1:
            return u2 = i2.sent(), l2 = za(u2), f2 = this._getParams(o2, a2, c2, l2, this.options.redirect_uri || window.location.origin), d2 = this._authorizeUrl(n(n({}, f2), { response_mode: "web_message" })), t2.popup.location.href = d2, [4, Ka(n(n({}, t2), { timeoutInSeconds: t2.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || 60 }))];
          case 2:
            if (h2 = i2.sent(), a2 !== h2.state)
              throw new Error("Invalid state");
            return [4, tc({ audience: f2.audience, scope: f2.scope, baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: s2, code: h2.code, grant_type: "authorization_code", redirect_uri: f2.redirect_uri, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, this.worker)];
          case 3:
            return p2 = i2.sent(), y2 = e3.organization || this.options.organization, [4, this._verifyIdToken(p2.id_token, c2, y2)];
          case 4:
            return v2 = i2.sent(), m2 = n(n({}, p2), { decodedToken: v2, scope: f2.scope, audience: f2.audience || "default", client_id: this.options.client_id }), [4, this.cacheManager.set(m2)];
          case 5:
            return i2.sent(), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgIdHint(v2.claims.org_id), [2];
        }
      });
    });
  }, e2.prototype.getUser = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, n2, r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return t2 = e3.audience || this.options.audience || "default", n2 = rc(this.defaultScope, this.scope, e3.scope), [4, this.cacheManager.get(new oc({ client_id: this.options.client_id, audience: t2, scope: n2 }))];
          case 1:
            return [2, (r2 = o2.sent()) && r2.decodedToken && r2.decodedToken.user];
        }
      });
    });
  }, e2.prototype.getIdTokenClaims = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, n2, r2;
      return i(this, function(o2) {
        switch (o2.label) {
          case 0:
            return t2 = e3.audience || this.options.audience || "default", n2 = rc(this.defaultScope, this.scope, e3.scope), [4, this.cacheManager.get(new oc({ client_id: this.options.client_id, audience: t2, scope: n2 }))];
          case 1:
            return [2, (r2 = o2.sent()) && r2.decodedToken && r2.decodedToken.claims];
        }
      });
    });
  }, e2.prototype.loginWithRedirect = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, n2, o2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return t2 = e3.redirectMethod, n2 = r(e3, ["redirectMethod"]), [4, this.buildAuthorizeUrl(n2)];
          case 1:
            return o2 = i2.sent(), window.location[t2 || "assign"](o2), [2];
        }
      });
    });
  }, e2.prototype.handleRedirectCallback = function(e3) {
    return e3 === void 0 && (e3 = window.location.href), o(this, void 0, void 0, function() {
      var t2, r2, o2, c2, s2, u2, l2, f2, d2, h2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            if ((t2 = e3.split("?").slice(1)).length === 0)
              throw new Error("There are no query params available for parsing.");
            if (r2 = function(e4) {
              e4.indexOf("#") > -1 && (e4 = e4.substr(0, e4.indexOf("#")));
              var t3 = e4.split("&"), n2 = {};
              return t3.forEach(function(e5) {
                var t4 = a(e5.split("="), 2), r3 = t4[0], o3 = t4[1];
                n2[r3] = decodeURIComponent(o3);
              }), n2.expires_in && (n2.expires_in = parseInt(n2.expires_in)), n2;
            }(t2.join("")), o2 = r2.state, c2 = r2.code, s2 = r2.error, u2 = r2.error_description, !(l2 = this.transactionManager.get()))
              throw new Error("Invalid state");
            if (this.transactionManager.remove(), s2)
              throw new Za(s2, u2, o2, l2.appState);
            if (!l2.code_verifier || l2.state && l2.state !== o2)
              throw new Error("Invalid state");
            return f2 = { audience: l2.audience, scope: l2.scope, baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: l2.code_verifier, grant_type: "authorization_code", code: c2, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }, l2.redirect_uri !== void 0 && (f2.redirect_uri = l2.redirect_uri), [4, tc(f2, this.worker)];
          case 1:
            return d2 = i2.sent(), [4, this._verifyIdToken(d2.id_token, l2.nonce, l2.organizationId)];
          case 2:
            return h2 = i2.sent(), [4, this.cacheManager.set(n(n(n(n({}, d2), { decodedToken: h2, audience: l2.audience, scope: l2.scope }), d2.scope ? { oauthTokenScope: d2.scope } : null), { client_id: this.options.client_id }))];
          case 3:
            return i2.sent(), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this._processOrgIdHint(h2.claims.org_id), [2, { appState: l2.appState }];
        }
      });
    });
  }, e2.prototype.checkSession = function(e3) {
    return o(this, void 0, void 0, function() {
      var t2;
      return i(this, function(n2) {
        switch (n2.label) {
          case 0:
            if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
              if (!this.cookieStorage.get("auth0.is.authenticated"))
                return [2];
              this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), this.cookieStorage.remove("auth0.is.authenticated");
            }
            n2.label = 1;
          case 1:
            return n2.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e3)];
          case 2:
            return n2.sent(), [3, 4];
          case 3:
            if (t2 = n2.sent(), !Ra.includes(t2.error))
              throw t2;
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  }, e2.prototype.getTokenSilently = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, o2, a2, c2 = this;
      return i(this, function(i2) {
        return t2 = n(n({ audience: this.options.audience, ignoreCache: false }, e3), { scope: rc(this.defaultScope, this.scope, e3.scope) }), o2 = t2.ignoreCache, a2 = r(t2, ["ignoreCache"]), [2, (s2 = function() {
          return c2._getTokenSilently(n({ ignoreCache: o2 }, a2));
        }, u2 = "".concat(this.options.client_id, "::").concat(a2.audience, "::").concat(a2.scope), l2 = Oc[u2], l2 || (l2 = s2().finally(function() {
          delete Oc[u2], l2 = null;
        }), Oc[u2] = l2), l2)];
        var s2, u2, l2;
      });
    });
  }, e2.prototype._getTokenSilently = function(e3) {
    return e3 === void 0 && (e3 = {}), o(this, void 0, void 0, function() {
      var t2, a2, c2, s2, u2, l2, f2, d2, h2;
      return i(this, function(p2) {
        switch (p2.label) {
          case 0:
            return t2 = e3.ignoreCache, a2 = r(e3, ["ignoreCache"]), t2 ? [3, 2] : [4, this._getEntryFromCache({ scope: a2.scope, audience: a2.audience || "default", client_id: this.options.client_id, getDetailedEntry: e3.detailedResponse })];
          case 1:
            if (c2 = p2.sent())
              return [2, c2];
            p2.label = 2;
          case 2:
            return [4, (y2 = function() {
              return Tc.acquireLock("auth0.lock.getTokenSilently", 5e3);
            }, v2 = 10, v2 === void 0 && (v2 = 3), o(void 0, void 0, void 0, function() {
              var e4;
              return i(this, function(t3) {
                switch (t3.label) {
                  case 0:
                    e4 = 0, t3.label = 1;
                  case 1:
                    return e4 < v2 ? [4, y2()] : [3, 4];
                  case 2:
                    if (t3.sent())
                      return [2, true];
                    t3.label = 3;
                  case 3:
                    return e4++, [3, 1];
                  case 4:
                    return [2, false];
                }
              });
            }))];
          case 3:
            if (!p2.sent())
              return [3, 15];
            p2.label = 4;
          case 4:
            return p2.trys.push([4, , 12, 14]), t2 ? [3, 6] : [4, this._getEntryFromCache({ scope: a2.scope, audience: a2.audience || "default", client_id: this.options.client_id, getDetailedEntry: e3.detailedResponse })];
          case 5:
            if (c2 = p2.sent())
              return [2, c2];
            p2.label = 6;
          case 6:
            return this.options.useRefreshTokens ? [4, this._getTokenUsingRefreshToken(a2)] : [3, 8];
          case 7:
            return u2 = p2.sent(), [3, 10];
          case 8:
            return [4, this._getTokenFromIFrame(a2)];
          case 9:
            u2 = p2.sent(), p2.label = 10;
          case 10:
            return s2 = u2, [4, this.cacheManager.set(n({ client_id: this.options.client_id }, s2))];
          case 11:
            return p2.sent(), this.cookieStorage.save(this.isAuthenticatedCookieName, true, { daysUntilExpire: this.sessionCheckExpiryDays, cookieDomain: this.options.cookieDomain }), e3.detailedResponse ? (l2 = s2.id_token, f2 = s2.access_token, d2 = s2.oauthTokenScope, h2 = s2.expires_in, [2, n(n({ id_token: l2, access_token: f2 }, d2 ? { scope: d2 } : null), { expires_in: h2 })]) : [2, s2.access_token];
          case 12:
            return [4, Tc.releaseLock("auth0.lock.getTokenSilently")];
          case 13:
            return p2.sent(), [7];
          case 14:
            return [3, 16];
          case 15:
            throw new Ga();
          case 16:
            return [2];
        }
        var y2, v2;
      });
    });
  }, e2.prototype.getTokenWithPopup = function(e3, t2) {
    return e3 === void 0 && (e3 = {}), t2 === void 0 && (t2 = {}), o(this, void 0, void 0, function() {
      return i(this, function(r2) {
        switch (r2.label) {
          case 0:
            return e3.audience = e3.audience || this.options.audience, e3.scope = rc(this.defaultScope, this.scope, e3.scope), t2 = n(n({}, Ca), t2), [4, this.loginWithPopup(e3, t2)];
          case 1:
            return r2.sent(), [4, this.cacheManager.get(new oc({ scope: e3.scope, audience: e3.audience || "default", client_id: this.options.client_id }))];
          case 2:
            return [2, r2.sent().access_token];
        }
      });
    });
  }, e2.prototype.isAuthenticated = function() {
    return o(this, void 0, void 0, function() {
      return i(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, this.getUser()];
          case 1:
            return [2, !!e3.sent()];
        }
      });
    });
  }, e2.prototype.buildLogoutUrl = function(e3) {
    e3 === void 0 && (e3 = {}), e3.client_id !== null ? e3.client_id = e3.client_id || this.options.client_id : delete e3.client_id;
    var t2 = e3.federated, n2 = r(e3, ["federated"]), o2 = t2 ? "&federated" : "";
    return this._url("/v2/logout?".concat(Da(n2))) + o2;
  }, e2.prototype.logout = function(e3) {
    var t2 = this;
    e3 === void 0 && (e3 = {});
    var n2 = e3.localOnly, o2 = r(e3, ["localOnly"]);
    if (n2 && o2.federated)
      throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");
    var i2 = function() {
      if (t2.cookieStorage.remove(t2.orgHintCookieName), t2.cookieStorage.remove(t2.isAuthenticatedCookieName), !n2) {
        var e4 = t2.buildLogoutUrl(o2);
        window.location.assign(e4);
      }
    };
    if (this.options.cache)
      return this.cacheManager.clear().then(function() {
        return i2();
      });
    this.cacheManager.clearSync(), i2();
  }, e2.prototype._getTokenFromIFrame = function(e3) {
    return o(this, void 0, void 0, function() {
      var t2, o2, a2, c2, s2, u2, l2, f2, d2, h2, p2, y2, v2, m2, b2, g2, w2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return t2 = Ha(Ya()), o2 = Ha(Ya()), a2 = Ya(), [4, Ja(a2)];
          case 1:
            c2 = i2.sent(), s2 = za(c2), u2 = r(e3, ["detailedResponse"]), l2 = this._getParams(u2, t2, o2, s2, e3.redirect_uri || this.options.redirect_uri || window.location.origin), (f2 = this.cookieStorage.get(this.orgHintCookieName)) && !l2.organization && (l2.organization = f2), d2 = this._authorizeUrl(n(n({}, l2), { prompt: "none", response_mode: "web_message" })), i2.label = 2;
          case 2:
            if (i2.trys.push([2, 6, , 7]), window.crossOriginIsolated)
              throw new Wa("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
            return h2 = e3.timeoutInSeconds || this.options.authorizeTimeoutInSeconds, [4, (S2 = d2, k2 = this.domainUrl, _2 = h2, _2 === void 0 && (_2 = 60), new Promise(function(e4, t3) {
              var n2 = window.document.createElement("iframe");
              n2.setAttribute("width", "0"), n2.setAttribute("height", "0"), n2.style.display = "none";
              var r2, o3 = function() {
                window.document.body.contains(n2) && (window.document.body.removeChild(n2), window.removeEventListener("message", r2, false));
              }, i3 = setTimeout(function() {
                t3(new Ga()), o3();
              }, 1e3 * _2);
              r2 = function(n3) {
                if (n3.origin == k2 && n3.data && n3.data.type === "authorization_response") {
                  var a3 = n3.source;
                  a3 && a3.close(), n3.data.response.error ? t3(Wa.fromPayload(n3.data.response)) : e4(n3.data.response), clearTimeout(i3), window.removeEventListener("message", r2, false), setTimeout(o3, 2e3);
                }
              }, window.addEventListener("message", r2, false), window.document.body.appendChild(n2), n2.setAttribute("src", S2);
            }))];
          case 3:
            if (p2 = i2.sent(), t2 !== p2.state)
              throw new Error("Invalid state");
            return y2 = e3.scope, v2 = e3.audience, m2 = r(e3, ["scope", "audience", "redirect_uri", "ignoreCache", "timeoutInSeconds", "detailedResponse"]), [4, tc(n(n(n({}, this.customOptions), m2), { scope: y2, audience: v2, baseUrl: this.domainUrl, client_id: this.options.client_id, code_verifier: a2, code: p2.code, grant_type: "authorization_code", redirect_uri: l2.redirect_uri, auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: m2.timeout || this.httpTimeoutMs }), this.worker)];
          case 4:
            return b2 = i2.sent(), [4, this._verifyIdToken(b2.id_token, o2)];
          case 5:
            return g2 = i2.sent(), this._processOrgIdHint(g2.claims.org_id), [2, n(n({}, b2), { decodedToken: g2, scope: l2.scope, oauthTokenScope: b2.scope, audience: l2.audience || "default" })];
          case 6:
            throw (w2 = i2.sent()).error === "login_required" && this.logout({ localOnly: true }), w2;
          case 7:
            return [2];
        }
        var S2, k2, _2;
      });
    });
  }, e2.prototype._getTokenUsingRefreshToken = function(e3) {
    return o(this, void 0, void 0, function() {
      var t2, o2, a2, c2, s2, u2, l2, f2, d2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return e3.scope = rc(this.defaultScope, this.options.scope, e3.scope), [4, this.cacheManager.get(new oc({ scope: e3.scope, audience: e3.audience || "default", client_id: this.options.client_id }))];
          case 1:
            return (t2 = i2.sent()) && t2.refresh_token || this.worker ? [3, 4] : this.useRefreshTokensFallback ? [4, this._getTokenFromIFrame(e3)] : [3, 3];
          case 2:
            return [2, i2.sent()];
          case 3:
            throw new Fa(e3.audience || "default", e3.scope);
          case 4:
            o2 = e3.redirect_uri || this.options.redirect_uri || window.location.origin, c2 = e3.scope, s2 = e3.audience, u2 = r(e3, ["scope", "audience", "ignoreCache", "timeoutInSeconds", "detailedResponse"]), l2 = typeof e3.timeoutInSeconds == "number" ? 1e3 * e3.timeoutInSeconds : null, i2.label = 5;
          case 5:
            return i2.trys.push([5, 7, , 10]), [4, tc(n(n(n(n(n({}, this.customOptions), u2), { audience: s2, scope: c2, baseUrl: this.domainUrl, client_id: this.options.client_id, grant_type: "refresh_token", refresh_token: t2 && t2.refresh_token, redirect_uri: o2 }), l2 && { timeout: l2 }), { auth0Client: this.options.auth0Client, useFormData: this.options.useFormData, timeout: this.httpTimeoutMs }), this.worker)];
          case 6:
            return a2 = i2.sent(), [3, 10];
          case 7:
            return ((f2 = i2.sent()).message.indexOf("Missing Refresh Token") > -1 || f2.message && f2.message.indexOf("invalid refresh token") > -1) && this.useRefreshTokensFallback ? [4, this._getTokenFromIFrame(e3)] : [3, 9];
          case 8:
            return [2, i2.sent()];
          case 9:
            throw f2;
          case 10:
            return [4, this._verifyIdToken(a2.id_token)];
          case 11:
            return d2 = i2.sent(), [2, n(n({}, a2), { decodedToken: d2, scope: e3.scope, oauthTokenScope: a2.scope, audience: e3.audience || "default" })];
        }
      });
    });
  }, e2.prototype._getEntryFromCache = function(e3) {
    var t2 = e3.scope, r2 = e3.audience, a2 = e3.client_id, c2 = e3.getDetailedEntry, s2 = c2 !== void 0 && c2;
    return o(this, void 0, void 0, function() {
      var e4, o2, c3, u2, l2;
      return i(this, function(i2) {
        switch (i2.label) {
          case 0:
            return [4, this.cacheManager.get(new oc({ scope: t2, audience: r2, client_id: a2 }), 60)];
          case 1:
            return (e4 = i2.sent()) && e4.access_token ? s2 ? (o2 = e4.id_token, c3 = e4.access_token, u2 = e4.oauthTokenScope, l2 = e4.expires_in, [2, n(n({ id_token: o2, access_token: c3 }, u2 ? { scope: u2 } : null), { expires_in: l2 })]) : [2, e4.access_token] : [2];
        }
      });
    });
  }, e2;
}();
var Ec = function() {
};
function Wc(e2) {
  return o(this, void 0, void 0, function() {
    var t2;
    return i(this, function(n2) {
      switch (n2.label) {
        case 0:
          return [4, (t2 = new Lc(e2)).checkSession()];
        case 1:
          return n2.sent(), [2, t2];
      }
    });
  });
}

// dep:@auth0_auth0-spa-js
var auth0_auth0_spa_js_default = Wc;
export {
  Lc as Auth0Client,
  Za as AuthenticationError,
  Wa as GenericError,
  ac as InMemoryCache,
  ic as LocalStorageCache,
  Xa as MfaRequiredError,
  Aa as PopupCancelledError,
  Pa as PopupTimeoutError,
  Ga as TimeoutError,
  Ec as User,
  auth0_auth0_spa_js_default as default
};
//# sourceMappingURL=@auth0_auth0-spa-js.js.map
