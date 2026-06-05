var Vf = Object.defineProperty,
    Hf = Object.defineProperties;
var Wf = Object.getOwnPropertyDescriptors;
var La = Object.getOwnPropertySymbols;
var $f = Object.prototype.hasOwnProperty,
    Qf = Object.prototype.propertyIsEnumerable;
var Ta = (w, E, p) => E in w ? Vf(w, E, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: p
    }) : w[E] = p,
    On = (w, E) => {
        for (var p in E || (E = {})) $f.call(E, p) && Ta(w, p, E[p]);
        if (La)
            for (var p of La(E)) Qf.call(E, p) && Ta(w, p, E[p]);
        return w
    },
    Rl = (w, E) => Hf(w, Wf(E));
var Lt = (w, E, p) => new Promise((G, k) => {
    var A = M => {
            try {
                H(p.next(M))
            } catch (ne) {
                k(ne)
            }
        },
        Y = M => {
            try {
                H(p.throw(M))
            } catch (ne) {
                k(ne)
            }
        },
        H = M => M.done ? G(M.value) : Promise.resolve(M.value).then(A, Y);
    H((p = p.apply(w, E)).next())
});
(function() {
    const E = document.createElement("link").relList;
    if (E && E.supports && E.supports("modulepreload")) return;
    for (const k of document.querySelectorAll('link[rel="modulepreload"]')) G(k);
    new MutationObserver(k => {
        for (const A of k)
            if (A.type === "childList")
                for (const Y of A.addedNodes) Y.tagName === "LINK" && Y.rel === "modulepreload" && G(Y)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function p(k) {
        const A = {};
        return k.integrity && (A.integrity = k.integrity), k.referrerPolicy && (A.referrerPolicy = k.referrerPolicy), k.crossOrigin === "use-credentials" ? A.credentials = "include" : k.crossOrigin === "anonymous" ? A.credentials = "omit" : A.credentials = "same-origin", A
    }

    function G(k) {
        if (k.ep) return;
        k.ep = !0;
        const A = p(k);
        fetch(k.href, A)
    }
})();

function Ha(w) {
    return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w
}
var Li = {
        exports: {}
    },
    Sr = {},
    Ti = {
        exports: {}
    },
    Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;

function Kf() {
    if (za) return Z;
    za = 1;
    var w = Symbol.for("react.element"),
        E = Symbol.for("react.portal"),
        p = Symbol.for("react.fragment"),
        G = Symbol.for("react.strict_mode"),
        k = Symbol.for("react.profiler"),
        A = Symbol.for("react.provider"),
        Y = Symbol.for("react.context"),
        H = Symbol.for("react.forward_ref"),
        M = Symbol.for("react.suspense"),
        ne = Symbol.for("react.memo"),
        ee = Symbol.for("react.lazy"),
        b = Symbol.iterator;

    function P(c) {
        return c === null || typeof c != "object" ? null : (c = b && c[b] || c["@@iterator"], typeof c == "function" ? c : null)
    }
    var Q = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        $ = Object.assign,
        I = {};

    function z(c, y, X) {
        this.props = c, this.context = y, this.refs = I, this.updater = X || Q
    }
    z.prototype.isReactComponent = {}, z.prototype.setState = function(c, y) {
        if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, c, y, "setState")
    }, z.prototype.forceUpdate = function(c) {
        this.updater.enqueueForceUpdate(this, c, "forceUpdate")
    };

    function se() {}
    se.prototype = z.prototype;

    function O(c, y, X) {
        this.props = c, this.context = y, this.refs = I, this.updater = X || Q
    }
    var V = O.prototype = new se;
    V.constructor = O, $(V, z.prototype), V.isPureReactComponent = !0;
    var K = Array.isArray,
        ye = Object.prototype.hasOwnProperty,
        ae = {
            current: null
        },
        J = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function ce(c, y, X) {
        var q, re = {},
            le = null,
            fe = null;
        if (y != null)
            for (q in y.ref !== void 0 && (fe = y.ref), y.key !== void 0 && (le = "" + y.key), y) ye.call(y, q) && !J.hasOwnProperty(q) && (re[q] = y[q]);
        var ie = arguments.length - 2;
        if (ie === 1) re.children = X;
        else if (1 < ie) {
            for (var he = Array(ie), Xe = 0; Xe < ie; Xe++) he[Xe] = arguments[Xe + 2];
            re.children = he
        }
        if (c && c.defaultProps)
            for (q in ie = c.defaultProps, ie) re[q] === void 0 && (re[q] = ie[q]);
        return {
            $$typeof: w,
            type: c,
            key: le,
            ref: fe,
            props: re,
            _owner: ae.current
        }
    }

    function Ue(c, y) {
        return {
            $$typeof: w,
            type: c.type,
            key: y,
            ref: c.ref,
            props: c.props,
            _owner: c._owner
        }
    }

    function qe(c) {
        return typeof c == "object" && c !== null && c.$$typeof === w
    }

    function pt(c) {
        var y = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + c.replace(/[=:]/g, function(X) {
            return y[X]
        })
    }
    var mt = /\/+/g;

    function Ke(c, y) {
        return typeof c == "object" && c !== null && c.key != null ? pt("" + c.key) : y.toString(36)
    }

    function ot(c, y, X, q, re) {
        var le = typeof c;
        (le === "undefined" || le === "boolean") && (c = null);
        var fe = !1;
        if (c === null) fe = !0;
        else switch (le) {
            case "string":
            case "number":
                fe = !0;
                break;
            case "object":
                switch (c.$$typeof) {
                    case w:
                    case E:
                        fe = !0
                }
        }
        if (fe) return fe = c, re = re(fe), c = q === "" ? "." + Ke(fe, 0) : q, K(re) ? (X = "", c != null && (X = c.replace(mt, "$&/") + "/"), ot(re, y, X, "", function(Xe) {
            return Xe
        })) : re != null && (qe(re) && (re = Ue(re, X + (!re.key || fe && fe.key === re.key ? "" : ("" + re.key).replace(mt, "$&/") + "/") + c)), y.push(re)), 1;
        if (fe = 0, q = q === "" ? "." : q + ":", K(c))
            for (var ie = 0; ie < c.length; ie++) {
                le = c[ie];
                var he = q + Ke(le, ie);
                fe += ot(le, y, X, he, re)
            } else if (he = P(c), typeof he == "function")
                for (c = he.call(c), ie = 0; !(le = c.next()).done;) le = le.value, he = q + Ke(le, ie++), fe += ot(le, y, X, he, re);
            else if (le === "object") throw y = String(c), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
        return fe
    }

    function ht(c, y, X) {
        if (c == null) return c;
        var q = [],
            re = 0;
        return ot(c, q, "", "", function(le) {
            return y.call(X, le, re++)
        }), q
    }

    function Ae(c) {
        if (c._status === -1) {
            var y = c._result;
            y = y(), y.then(function(X) {
                (c._status === 0 || c._status === -1) && (c._status = 1, c._result = X)
            }, function(X) {
                (c._status === 0 || c._status === -1) && (c._status = 2, c._result = X)
            }), c._status === -1 && (c._status = 0, c._result = y)
        }
        if (c._status === 1) return c._result.default;
        throw c._result
    }
    var Se = {
            current: null
        },
        _ = {
            transition: null
        },
        U = {
            ReactCurrentDispatcher: Se,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: ae
        };

    function j() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return Z.Children = {
        map: ht,
        forEach: function(c, y, X) {
            ht(c, function() {
                y.apply(this, arguments)
            }, X)
        },
        count: function(c) {
            var y = 0;
            return ht(c, function() {
                y++
            }), y
        },
        toArray: function(c) {
            return ht(c, function(y) {
                return y
            }) || []
        },
        only: function(c) {
            if (!qe(c)) throw Error("React.Children.only expected to receive a single React element child.");
            return c
        }
    }, Z.Component = z, Z.Fragment = p, Z.Profiler = k, Z.PureComponent = O, Z.StrictMode = G, Z.Suspense = M, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, Z.act = j, Z.cloneElement = function(c, y, X) {
        if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
        var q = $({}, c.props),
            re = c.key,
            le = c.ref,
            fe = c._owner;
        if (y != null) {
            if (y.ref !== void 0 && (le = y.ref, fe = ae.current), y.key !== void 0 && (re = "" + y.key), c.type && c.type.defaultProps) var ie = c.type.defaultProps;
            for (he in y) ye.call(y, he) && !J.hasOwnProperty(he) && (q[he] = y[he] === void 0 && ie !== void 0 ? ie[he] : y[he])
        }
        var he = arguments.length - 2;
        if (he === 1) q.children = X;
        else if (1 < he) {
            ie = Array(he);
            for (var Xe = 0; Xe < he; Xe++) ie[Xe] = arguments[Xe + 2];
            q.children = ie
        }
        return {
            $$typeof: w,
            type: c.type,
            key: re,
            ref: le,
            props: q,
            _owner: fe
        }
    }, Z.createContext = function(c) {
        return c = {
            $$typeof: Y,
            _currentValue: c,
            _currentValue2: c,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, c.Provider = {
            $$typeof: A,
            _context: c
        }, c.Consumer = c
    }, Z.createElement = ce, Z.createFactory = function(c) {
        var y = ce.bind(null, c);
        return y.type = c, y
    }, Z.createRef = function() {
        return {
            current: null
        }
    }, Z.forwardRef = function(c) {
        return {
            $$typeof: H,
            render: c
        }
    }, Z.isValidElement = qe, Z.lazy = function(c) {
        return {
            $$typeof: ee,
            _payload: {
                _status: -1,
                _result: c
            },
            _init: Ae
        }
    }, Z.memo = function(c, y) {
        return {
            $$typeof: ne,
            type: c,
            compare: y === void 0 ? null : y
        }
    }, Z.startTransition = function(c) {
        var y = _.transition;
        _.transition = {};
        try {
            c()
        } finally {
            _.transition = y
        }
    }, Z.unstable_act = j, Z.useCallback = function(c, y) {
        return Se.current.useCallback(c, y)
    }, Z.useContext = function(c) {
        return Se.current.useContext(c)
    }, Z.useDebugValue = function() {}, Z.useDeferredValue = function(c) {
        return Se.current.useDeferredValue(c)
    }, Z.useEffect = function(c, y) {
        return Se.current.useEffect(c, y)
    }, Z.useId = function() {
        return Se.current.useId()
    }, Z.useImperativeHandle = function(c, y, X) {
        return Se.current.useImperativeHandle(c, y, X)
    }, Z.useInsertionEffect = function(c, y) {
        return Se.current.useInsertionEffect(c, y)
    }, Z.useLayoutEffect = function(c, y) {
        return Se.current.useLayoutEffect(c, y)
    }, Z.useMemo = function(c, y) {
        return Se.current.useMemo(c, y)
    }, Z.useReducer = function(c, y, X) {
        return Se.current.useReducer(c, y, X)
    }, Z.useRef = function(c) {
        return Se.current.useRef(c)
    }, Z.useState = function(c) {
        return Se.current.useState(c)
    }, Z.useSyncExternalStore = function(c, y, X) {
        return Se.current.useSyncExternalStore(c, y, X)
    }, Z.useTransition = function() {
        return Se.current.useTransition()
    }, Z.version = "18.3.1", Z
}
var Ra;

function Oi() {
    return Ra || (Ra = 1, Ti.exports = Kf()), Ti.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;

function Xf() {
    if (Ia) return Sr;
    Ia = 1;
    var w = Oi(),
        E = Symbol.for("react.element"),
        p = Symbol.for("react.fragment"),
        G = Object.prototype.hasOwnProperty,
        k = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        A = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function Y(H, M, ne) {
        var ee, b = {},
            P = null,
            Q = null;
        ne !== void 0 && (P = "" + ne), M.key !== void 0 && (P = "" + M.key), M.ref !== void 0 && (Q = M.ref);
        for (ee in M) G.call(M, ee) && !A.hasOwnProperty(ee) && (b[ee] = M[ee]);
        if (H && H.defaultProps)
            for (ee in M = H.defaultProps, M) b[ee] === void 0 && (b[ee] = M[ee]);
        return {
            $$typeof: E,
            type: H,
            key: P,
            ref: Q,
            props: b,
            _owner: k.current
        }
    }
    return Sr.Fragment = p, Sr.jsx = Y, Sr.jsxs = Y, Sr
}
var Oa;

function Gf() {
    return Oa || (Oa = 1, Li.exports = Xf()), Li.exports
}
var h = Gf(),
    W = Oi();
const Yf = Ha(W);
var Il = {},
    zi = {
        exports: {}
    },
    Qe = {},
    Ri = {
        exports: {}
    },
    Ii = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;

function Jf() {
    return Ma || (Ma = 1, (function(w) {
        function E(_, U) {
            var j = _.length;
            _.push(U);
            e: for (; 0 < j;) {
                var c = j - 1 >>> 1,
                    y = _[c];
                if (0 < k(y, U)) _[c] = U, _[j] = y, j = c;
                else break e
            }
        }

        function p(_) {
            return _.length === 0 ? null : _[0]
        }

        function G(_) {
            if (_.length === 0) return null;
            var U = _[0],
                j = _.pop();
            if (j !== U) {
                _[0] = j;
                e: for (var c = 0, y = _.length, X = y >>> 1; c < X;) {
                    var q = 2 * (c + 1) - 1,
                        re = _[q],
                        le = q + 1,
                        fe = _[le];
                    if (0 > k(re, j)) le < y && 0 > k(fe, re) ? (_[c] = fe, _[le] = j, c = le) : (_[c] = re, _[q] = j, c = q);
                    else if (le < y && 0 > k(fe, j)) _[c] = fe, _[le] = j, c = le;
                    else break e
                }
            }
            return U
        }

        function k(_, U) {
            var j = _.sortIndex - U.sortIndex;
            return j !== 0 ? j : _.id - U.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var A = performance;
            w.unstable_now = function() {
                return A.now()
            }
        } else {
            var Y = Date,
                H = Y.now();
            w.unstable_now = function() {
                return Y.now() - H
            }
        }
        var M = [],
            ne = [],
            ee = 1,
            b = null,
            P = 3,
            Q = !1,
            $ = !1,
            I = !1,
            z = typeof setTimeout == "function" ? setTimeout : null,
            se = typeof clearTimeout == "function" ? clearTimeout : null,
            O = typeof setImmediate != "undefined" ? setImmediate : null;
        typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function V(_) {
            for (var U = p(ne); U !== null;) {
                if (U.callback === null) G(ne);
                else if (U.startTime <= _) G(ne), U.sortIndex = U.expirationTime, E(M, U);
                else break;
                U = p(ne)
            }
        }

        function K(_) {
            if (I = !1, V(_), !$)
                if (p(M) !== null) $ = !0, Ae(ye);
                else {
                    var U = p(ne);
                    U !== null && Se(K, U.startTime - _)
                }
        }

        function ye(_, U) {
            $ = !1, I && (I = !1, se(ce), ce = -1), Q = !0;
            var j = P;
            try {
                for (V(U), b = p(M); b !== null && (!(b.expirationTime > U) || _ && !pt());) {
                    var c = b.callback;
                    if (typeof c == "function") {
                        b.callback = null, P = b.priorityLevel;
                        var y = c(b.expirationTime <= U);
                        U = w.unstable_now(), typeof y == "function" ? b.callback = y : b === p(M) && G(M), V(U)
                    } else G(M);
                    b = p(M)
                }
                if (b !== null) var X = !0;
                else {
                    var q = p(ne);
                    q !== null && Se(K, q.startTime - U), X = !1
                }
                return X
            } finally {
                b = null, P = j, Q = !1
            }
        }
        var ae = !1,
            J = null,
            ce = -1,
            Ue = 5,
            qe = -1;

        function pt() {
            return !(w.unstable_now() - qe < Ue)
        }

        function mt() {
            if (J !== null) {
                var _ = w.unstable_now();
                qe = _;
                var U = !0;
                try {
                    U = J(!0, _)
                } finally {
                    U ? Ke() : (ae = !1, J = null)
                }
            } else ae = !1
        }
        var Ke;
        if (typeof O == "function") Ke = function() {
            O(mt)
        };
        else if (typeof MessageChannel != "undefined") {
            var ot = new MessageChannel,
                ht = ot.port2;
            ot.port1.onmessage = mt, Ke = function() {
                ht.postMessage(null)
            }
        } else Ke = function() {
            z(mt, 0)
        };

        function Ae(_) {
            J = _, ae || (ae = !0, Ke())
        }

        function Se(_, U) {
            ce = z(function() {
                _(w.unstable_now())
            }, U)
        }
        w.unstable_IdlePriority = 5, w.unstable_ImmediatePriority = 1, w.unstable_LowPriority = 4, w.unstable_NormalPriority = 3, w.unstable_Profiling = null, w.unstable_UserBlockingPriority = 2, w.unstable_cancelCallback = function(_) {
            _.callback = null
        }, w.unstable_continueExecution = function() {
            $ || Q || ($ = !0, Ae(ye))
        }, w.unstable_forceFrameRate = function(_) {
            0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ue = 0 < _ ? Math.floor(1e3 / _) : 5
        }, w.unstable_getCurrentPriorityLevel = function() {
            return P
        }, w.unstable_getFirstCallbackNode = function() {
            return p(M)
        }, w.unstable_next = function(_) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                    var U = 3;
                    break;
                default:
                    U = P
            }
            var j = P;
            P = U;
            try {
                return _()
            } finally {
                P = j
            }
        }, w.unstable_pauseExecution = function() {}, w.unstable_requestPaint = function() {}, w.unstable_runWithPriority = function(_, U) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3
            }
            var j = P;
            P = _;
            try {
                return U()
            } finally {
                P = j
            }
        }, w.unstable_scheduleCallback = function(_, U, j) {
            var c = w.unstable_now();
            switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? c + j : c) : j = c, _) {
                case 1:
                    var y = -1;
                    break;
                case 2:
                    y = 250;
                    break;
                case 5:
                    y = 1073741823;
                    break;
                case 4:
                    y = 1e4;
                    break;
                default:
                    y = 5e3
            }
            return y = j + y, _ = {
                id: ee++,
                callback: U,
                priorityLevel: _,
                startTime: j,
                expirationTime: y,
                sortIndex: -1
            }, j > c ? (_.sortIndex = j, E(ne, _), p(M) === null && _ === p(ne) && (I ? (se(ce), ce = -1) : I = !0, Se(K, j - c))) : (_.sortIndex = y, E(M, _), $ || Q || ($ = !0, Ae(ye))), _
        }, w.unstable_shouldYield = pt, w.unstable_wrapCallback = function(_) {
            var U = P;
            return function() {
                var j = P;
                P = U;
                try {
                    return _.apply(this, arguments)
                } finally {
                    P = j
                }
            }
        }
    })(Ii)), Ii
}
var Da;

function Zf() {
    return Da || (Da = 1, Ri.exports = Jf()), Ri.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;

function qf() {
    if (Fa) return Qe;
    Fa = 1;
    var w = Oi(),
        E = Zf();

    function p(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var G = new Set,
        k = {};

    function A(e, t) {
        Y(e, t), Y(e + "Capture", t)
    }

    function Y(e, t) {
        for (k[e] = t, e = 0; e < t.length; e++) G.add(t[e])
    }
    var H = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
        M = Object.prototype.hasOwnProperty,
        ne = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ee = {},
        b = {};

    function P(e) {
        return M.call(b, e) ? !0 : M.call(ee, e) ? !1 : ne.test(e) ? b[e] = !0 : (ee[e] = !0, !1)
    }

    function Q(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function $(e, t, n, r) {
        if (t === null || typeof t == "undefined" || Q(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function I(e, t, n, r, l, o, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        z[e] = new I(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        z[t] = new I(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        z[e] = new I(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        z[e] = new I(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        z[e] = new I(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        z[e] = new I(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        z[e] = new I(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        z[e] = new I(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        z[e] = new I(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var se = /[\-:]([a-z])/g;

    function O(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(se, O);
        z[t] = new I(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(se, O);
        z[t] = new I(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(se, O);
        z[t] = new I(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        z[e] = new I(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), z.xlinkHref = new I("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        z[e] = new I(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function V(e, t, n, r) {
        var l = z.hasOwnProperty(t) ? z[t] : null;
        (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($(t, n, l, r) && (n = null), r || l === null ? P(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    var K = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        ye = Symbol.for("react.element"),
        ae = Symbol.for("react.portal"),
        J = Symbol.for("react.fragment"),
        ce = Symbol.for("react.strict_mode"),
        Ue = Symbol.for("react.profiler"),
        qe = Symbol.for("react.provider"),
        pt = Symbol.for("react.context"),
        mt = Symbol.for("react.forward_ref"),
        Ke = Symbol.for("react.suspense"),
        ot = Symbol.for("react.suspense_list"),
        ht = Symbol.for("react.memo"),
        Ae = Symbol.for("react.lazy"),
        Se = Symbol.for("react.offscreen"),
        _ = Symbol.iterator;

    function U(e) {
        return e === null || typeof e != "object" ? null : (e = _ && e[_] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var j = Object.assign,
        c;

    function y(e) {
        if (c === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            c = t && t[1] || ""
        }
        return `
` + c + e
    }
    var X = !1;

    function q(e, t) {
        if (!e || X) return "";
        X = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (m) {
                        var r = m
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (m) {
                        r = m
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (m) {
                    r = m
                }
                e()
            }
        } catch (m) {
            if (m && r && typeof m.stack == "string") {
                for (var l = m.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u];) u--;
                for (; 1 <= i && 0 <= u; i--, u--)
                    if (l[i] !== o[u]) {
                        if (i !== 1 || u !== 1)
                            do
                                if (i--, u--, 0 > u || l[i] !== o[u]) {
                                    var s = `
` + l[i].replace(" at new ", " at ");
                                    return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                                }
                        while (1 <= i && 0 <= u);
                        break
                    }
            }
        } finally {
            X = !1, Error.prepareStackTrace = n
        }
        return (e = e ? e.displayName || e.name : "") ? y(e) : ""
    }

    function re(e) {
        switch (e.tag) {
            case 5:
                return y(e.type);
            case 16:
                return y("Lazy");
            case 13:
                return y("Suspense");
            case 19:
                return y("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = q(e.type, !1), e;
            case 11:
                return e = q(e.type.render, !1), e;
            case 1:
                return e = q(e.type, !0), e;
            default:
                return ""
        }
    }

    function le(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case J:
                return "Fragment";
            case ae:
                return "Portal";
            case Ue:
                return "Profiler";
            case ce:
                return "StrictMode";
            case Ke:
                return "Suspense";
            case ot:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case pt:
                return (e.displayName || "Context") + ".Consumer";
            case qe:
                return (e._context.displayName || "Context") + ".Provider";
            case mt:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ht:
                return t = e.displayName || null, t !== null ? t : le(e.type) || "Memo";
            case Ae:
                t = e._payload, e = e._init;
                try {
                    return le(e(t))
                } catch (n) {}
        }
        return null
    }

    function fe(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return le(t);
            case 8:
                return t === ce ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function ie(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function he(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Xe(e) {
        var t = he(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
            var l = n.get,
                o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return l.call(this)
                },
                set: function(i) {
                    r = "" + i, o.call(this, i)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r
                },
                setValue: function(i) {
                    r = "" + i
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function xr(e) {
        e._valueTracker || (e._valueTracker = Xe(e))
    }

    function Mi(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = he(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
    }

    function Er(e) {
        if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function Ml(e, t) {
        var n = t.checked;
        return j({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n != null ? n : e._wrapperState.initialChecked
        })
    }

    function Di(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue,
            r = t.checked != null ? t.checked : t.defaultChecked;
        n = ie(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function Fi(e, t) {
        t = t.checked, t != null && V(e, "checked", t, !1)
    }

    function Dl(e, t) {
        Fi(e, t);
        var n = ie(t.value),
            r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Fl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fl(e, t.type, ie(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ui(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
    }

    function Fl(e, t, n) {
        (t !== "number" || Er(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    var Mn = Array.isArray;

    function an(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + ie(n), t = null, l = 0; l < e.length; l++) {
                if (e[l].value === n) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return
                }
                t !== null || e[l].disabled || (t = e[l])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Ul(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
        return j({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Ai(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(p(92));
                if (Mn(n)) {
                    if (1 < n.length) throw Error(p(93));
                    n = n[0]
                }
                t = n
            }
            t == null && (t = ""), n = t
        }
        e._wrapperState = {
            initialValue: ie(n)
        }
    }

    function Bi(e, t) {
        var n = ie(t.value),
            r = ie(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
    }

    function Vi(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function Hi(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function Al(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Hi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var _r, Wi = (function(e) {
        return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, l)
            })
        } : e
    })(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (_r = _r || document.createElement("div"), _r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _r.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function Dn(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Fn = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        $a = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fn).forEach(function(e) {
        $a.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Fn[t] = Fn[e]
        })
    });

    function $i(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fn.hasOwnProperty(e) && Fn[e] ? ("" + t).trim() : t + "px"
    }

    function Qi(e, t) {
        e = e.style;
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var r = n.indexOf("--") === 0,
                    l = $i(n, t[n], r);
                n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
            }
    }
    var Qa = j({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Bl(e, t) {
        if (t) {
            if (Qa[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(p(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(p(62))
        }
    }

    function Vl(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Hl = null;

    function Wl(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var $l = null,
        cn = null,
        fn = null;

    function Ki(e) {
        if (e = or(e)) {
            if (typeof $l != "function") throw Error(p(280));
            var t = e.stateNode;
            t && (t = Xr(t), $l(e.stateNode, e.type, t))
        }
    }

    function Xi(e) {
        cn ? fn ? fn.push(e) : fn = [e] : cn = e
    }

    function Gi() {
        if (cn) {
            var e = cn,
                t = fn;
            if (fn = cn = null, Ki(e), t)
                for (e = 0; e < t.length; e++) Ki(t[e])
        }
    }

    function Yi(e, t) {
        return e(t)
    }

    function Ji() {}
    var Ql = !1;

    function Zi(e, t, n) {
        if (Ql) return e(t, n);
        Ql = !0;
        try {
            return Yi(e, t, n)
        } finally {
            Ql = !1, (cn !== null || fn !== null) && (Ji(), Gi())
        }
    }

    function Un(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Xr(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(p(231, t, typeof n));
        return n
    }
    var Kl = !1;
    if (H) try {
        var An = {};
        Object.defineProperty(An, "passive", {
            get: function() {
                Kl = !0
            }
        }), window.addEventListener("test", An, An), window.removeEventListener("test", An, An)
    } catch (e) {
        Kl = !1
    }

    function Ka(e, t, n, r, l, o, i, u, s) {
        var m = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, m)
        } catch (g) {
            this.onError(g)
        }
    }
    var Bn = !1,
        Cr = null,
        Nr = !1,
        Xl = null,
        Xa = {
            onError: function(e) {
                Bn = !0, Cr = e
            }
        };

    function Ga(e, t, n, r, l, o, i, u, s) {
        Bn = !1, Cr = null, Ka.apply(Xa, arguments)
    }

    function Ya(e, t, n, r, l, o, i, u, s) {
        if (Ga.apply(this, arguments), Bn) {
            if (Bn) {
                var m = Cr;
                Bn = !1, Cr = null
            } else throw Error(p(198));
            Nr || (Nr = !0, Xl = m)
        }
    }

    function Yt(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function qi(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function bi(e) {
        if (Yt(e) !== e) throw Error(p(188))
    }

    function Ja(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Yt(e), t === null) throw Error(p(188));
            return t !== e ? null : e
        }
        for (var n = e, r = t;;) {
            var l = n.return;
            if (l === null) break;
            var o = l.alternate;
            if (o === null) {
                if (r = l.return, r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (l.child === o.child) {
                for (o = l.child; o;) {
                    if (o === n) return bi(l), e;
                    if (o === r) return bi(l), t;
                    o = o.sibling
                }
                throw Error(p(188))
            }
            if (n.return !== r.return) n = l, r = o;
            else {
                for (var i = !1, u = l.child; u;) {
                    if (u === n) {
                        i = !0, n = l, r = o;
                        break
                    }
                    if (u === r) {
                        i = !0, r = l, n = o;
                        break
                    }
                    u = u.sibling
                }
                if (!i) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            i = !0, n = o, r = l;
                            break
                        }
                        if (u === r) {
                            i = !0, r = o, n = l;
                            break
                        }
                        u = u.sibling
                    }
                    if (!i) throw Error(p(189))
                }
            }
            if (n.alternate !== r) throw Error(p(190))
        }
        if (n.tag !== 3) throw Error(p(188));
        return n.stateNode.current === n ? e : t
    }

    function eu(e) {
        return e = Ja(e), e !== null ? tu(e) : null
    }

    function tu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = tu(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var nu = E.unstable_scheduleCallback,
        ru = E.unstable_cancelCallback,
        Za = E.unstable_shouldYield,
        qa = E.unstable_requestPaint,
        xe = E.unstable_now,
        ba = E.unstable_getCurrentPriorityLevel,
        Gl = E.unstable_ImmediatePriority,
        lu = E.unstable_UserBlockingPriority,
        jr = E.unstable_NormalPriority,
        ec = E.unstable_LowPriority,
        ou = E.unstable_IdlePriority,
        Pr = null,
        vt = null;

    function tc(e) {
        if (vt && typeof vt.onCommitFiberRoot == "function") try {
            vt.onCommitFiberRoot(Pr, e, void 0, (e.current.flags & 128) === 128)
        } catch (t) {}
    }
    var it = Math.clz32 ? Math.clz32 : lc,
        nc = Math.log,
        rc = Math.LN2;

    function lc(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (nc(e) / rc | 0) | 0
    }
    var Lr = 64,
        Tr = 4194304;

    function Vn(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function zr(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0,
            l = e.suspendedLanes,
            o = e.pingedLanes,
            i = n & 268435455;
        if (i !== 0) {
            var u = i & ~l;
            u !== 0 ? r = Vn(u) : (o &= i, o !== 0 && (r = Vn(o)))
        } else i = n & ~l, i !== 0 ? r = Vn(i) : o !== 0 && (r = Vn(o));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
        if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= r; 0 < t;) n = 31 - it(t), l = 1 << n, r |= e[n], t &= ~l;
        return r
    }

    function oc(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function ic(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
            var i = 31 - it(o),
                u = 1 << i,
                s = l[i];
            s === -1 ? ((u & n) === 0 || (u & r) !== 0) && (l[i] = oc(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u
        }
    }

    function Yl(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function iu() {
        var e = Lr;
        return Lr <<= 1, (Lr & 4194240) === 0 && (Lr = 64), e
    }

    function Jl(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Hn(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - it(t), e[t] = n
    }

    function uc(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for (e = e.expirationTimes; 0 < n;) {
            var l = 31 - it(n),
                o = 1 << l;
            t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
        }
    }

    function Zl(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - it(n),
                l = 1 << r;
            l & t | e[r] & t && (e[r] |= t), n &= ~l
        }
    }
    var ue = 0;

    function uu(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var su, ql, au, cu, fu, bl = !1,
        Rr = [],
        Tt = null,
        zt = null,
        Rt = null,
        Wn = new Map,
        $n = new Map,
        It = [],
        sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function du(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Tt = null;
                break;
            case "dragenter":
            case "dragleave":
                zt = null;
                break;
            case "mouseover":
            case "mouseout":
                Rt = null;
                break;
            case "pointerover":
            case "pointerout":
                Wn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                $n.delete(t.pointerId)
        }
    }

    function Qn(e, t, n, r, l, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: o,
            targetContainers: [l]
        }, t !== null && (t = or(t), t !== null && ql(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
    }

    function ac(e, t, n, r, l) {
        switch (t) {
            case "focusin":
                return Tt = Qn(Tt, e, t, n, r, l), !0;
            case "dragenter":
                return zt = Qn(zt, e, t, n, r, l), !0;
            case "mouseover":
                return Rt = Qn(Rt, e, t, n, r, l), !0;
            case "pointerover":
                var o = l.pointerId;
                return Wn.set(o, Qn(Wn.get(o) || null, e, t, n, r, l)), !0;
            case "gotpointercapture":
                return o = l.pointerId, $n.set(o, Qn($n.get(o) || null, e, t, n, r, l)), !0
        }
        return !1
    }

    function pu(e) {
        var t = Jt(e.target);
        if (t !== null) {
            var n = Yt(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = qi(n), t !== null) {
                        e.blockedOn = t, fu(e.priority, function() {
                            au(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Ir(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = to(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Hl = r, n.target.dispatchEvent(r), Hl = null
            } else return t = or(n), t !== null && ql(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function mu(e, t, n) {
        Ir(e) && n.delete(t)
    }

    function cc() {
        bl = !1, Tt !== null && Ir(Tt) && (Tt = null), zt !== null && Ir(zt) && (zt = null), Rt !== null && Ir(Rt) && (Rt = null), Wn.forEach(mu), $n.forEach(mu)
    }

    function Kn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, bl || (bl = !0, E.unstable_scheduleCallback(E.unstable_NormalPriority, cc)))
    }

    function Xn(e) {
        function t(l) {
            return Kn(l, e)
        }
        if (0 < Rr.length) {
            Kn(Rr[0], e);
            for (var n = 1; n < Rr.length; n++) {
                var r = Rr[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (Tt !== null && Kn(Tt, e), zt !== null && Kn(zt, e), Rt !== null && Kn(Rt, e), Wn.forEach(t), $n.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
        for (; 0 < It.length && (n = It[0], n.blockedOn === null);) pu(n), n.blockedOn === null && It.shift()
    }
    var dn = K.ReactCurrentBatchConfig,
        Or = !0;

    function fc(e, t, n, r) {
        var l = ue,
            o = dn.transition;
        dn.transition = null;
        try {
            ue = 1, eo(e, t, n, r)
        } finally {
            ue = l, dn.transition = o
        }
    }

    function dc(e, t, n, r) {
        var l = ue,
            o = dn.transition;
        dn.transition = null;
        try {
            ue = 4, eo(e, t, n, r)
        } finally {
            ue = l, dn.transition = o
        }
    }

    function eo(e, t, n, r) {
        if (Or) {
            var l = to(e, t, n, r);
            if (l === null) wo(e, t, r, Mr, n), du(e, r);
            else if (ac(l, e, t, n, r)) r.stopPropagation();
            else if (du(e, r), t & 4 && -1 < sc.indexOf(e)) {
                for (; l !== null;) {
                    var o = or(l);
                    if (o !== null && su(o), o = to(e, t, n, r), o === null && wo(e, t, r, Mr, n), o === l) break;
                    l = o
                }
                l !== null && r.stopPropagation()
            } else wo(e, t, r, null, n)
        }
    }
    var Mr = null;

    function to(e, t, n, r) {
        if (Mr = null, e = Wl(r), e = Jt(e), e !== null)
            if (t = Yt(e), t === null) e = null;
            else if (n = t.tag, n === 13) {
            if (e = qi(t), e !== null) return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Mr = e, null
    }

    function hu(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (ba()) {
                    case Gl:
                        return 1;
                    case lu:
                        return 4;
                    case jr:
                    case ec:
                        return 16;
                    case ou:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var Ot = null,
        no = null,
        Dr = null;

    function vu() {
        if (Dr) return Dr;
        var e, t = no,
            n = t.length,
            r, l = "value" in Ot ? Ot.value : Ot.textContent,
            o = l.length;
        for (e = 0; e < n && t[e] === l[e]; e++);
        var i = n - e;
        for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
        return Dr = l.slice(e, 1 < r ? 1 - r : void 0)
    }

    function Fr(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Ur() {
        return !0
    }

    function yu() {
        return !1
    }

    function Ge(e) {
        function t(n, r, l, o, i) {
            this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
            for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ur : yu, this.isPropagationStopped = yu, this
        }
        return j(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur)
            },
            persist: function() {},
            isPersistent: Ur
        }), t
    }
    var pn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        ro = Ge(pn),
        Gn = j({}, pn, {
            view: 0,
            detail: 0
        }),
        pc = Ge(Gn),
        lo, oo, Yn, Ar = j({}, Gn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: uo,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (lo = e.screenX - Yn.screenX, oo = e.screenY - Yn.screenY) : oo = lo = 0, Yn = e), lo)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : oo
            }
        }),
        gu = Ge(Ar),
        mc = j({}, Ar, {
            dataTransfer: 0
        }),
        hc = Ge(mc),
        vc = j({}, Gn, {
            relatedTarget: 0
        }),
        io = Ge(vc),
        yc = j({}, pn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        gc = Ge(yc),
        wc = j({}, pn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Sc = Ge(wc),
        kc = j({}, pn, {
            data: 0
        }),
        wu = Ge(kc),
        xc = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Ec = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        _c = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Cc(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = _c[e]) ? !!t[e] : !1
    }

    function uo() {
        return Cc
    }
    var Nc = j({}, Gn, {
            key: function(e) {
                if (e.key) {
                    var t = xc[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ec[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: uo,
            charCode: function(e) {
                return e.type === "keypress" ? Fr(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        jc = Ge(Nc),
        Pc = j({}, Ar, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        Su = Ge(Pc),
        Lc = j({}, Gn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: uo
        }),
        Tc = Ge(Lc),
        zc = j({}, pn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Rc = Ge(zc),
        Ic = j({}, Ar, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Oc = Ge(Ic),
        Mc = [9, 13, 27, 32],
        so = H && "CompositionEvent" in window,
        Jn = null;
    H && "documentMode" in document && (Jn = document.documentMode);
    var Dc = H && "TextEvent" in window && !Jn,
        ku = H && (!so || Jn && 8 < Jn && 11 >= Jn),
        xu = " ",
        Eu = !1;

    function _u(e, t) {
        switch (e) {
            case "keyup":
                return Mc.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Cu(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var mn = !1;

    function Fc(e, t) {
        switch (e) {
            case "compositionend":
                return Cu(t);
            case "keypress":
                return t.which !== 32 ? null : (Eu = !0, xu);
            case "textInput":
                return e = t.data, e === xu && Eu ? null : e;
            default:
                return null
        }
    }

    function Uc(e, t) {
        if (mn) return e === "compositionend" || !so && _u(e, t) ? (e = vu(), Dr = no = Ot = null, mn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return ku && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Ac = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Nu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ac[e.type] : t === "textarea"
    }

    function ju(e, t, n, r) {
        Xi(r), t = $r(t, "onChange"), 0 < t.length && (n = new ro("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Zn = null,
        qn = null;

    function Bc(e) {
        Qu(e, 0)
    }

    function Br(e) {
        var t = wn(e);
        if (Mi(t)) return e
    }

    function Vc(e, t) {
        if (e === "change") return t
    }
    var Pu = !1;
    if (H) {
        var ao;
        if (H) {
            var co = "oninput" in document;
            if (!co) {
                var Lu = document.createElement("div");
                Lu.setAttribute("oninput", "return;"), co = typeof Lu.oninput == "function"
            }
            ao = co
        } else ao = !1;
        Pu = ao && (!document.documentMode || 9 < document.documentMode)
    }

    function Tu() {
        Zn && (Zn.detachEvent("onpropertychange", zu), qn = Zn = null)
    }

    function zu(e) {
        if (e.propertyName === "value" && Br(qn)) {
            var t = [];
            ju(t, qn, e, Wl(e)), Zi(Bc, t)
        }
    }

    function Hc(e, t, n) {
        e === "focusin" ? (Tu(), Zn = t, qn = n, Zn.attachEvent("onpropertychange", zu)) : e === "focusout" && Tu()
    }

    function Wc(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Br(qn)
    }

    function $c(e, t) {
        if (e === "click") return Br(t)
    }

    function Qc(e, t) {
        if (e === "input" || e === "change") return Br(t)
    }

    function Kc(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var ut = typeof Object.is == "function" ? Object.is : Kc;

    function bn(e, t) {
        if (ut(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!M.call(t, l) || !ut(e[l], t[l])) return !1
        }
        return !0
    }

    function Ru(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Iu(e, t) {
        var n = Ru(e);
        e = 0;
        for (var r; n;) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Ru(n)
        }
    }

    function Ou(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ou(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Mu() {
        for (var e = window, t = Er(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch (r) {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = Er(e.document)
        }
        return t
    }

    function fo(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Xc(e) {
        var t = Mu(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Ou(n.ownerDocument.documentElement, n)) {
            if (r !== null && fo(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = n.textContent.length,
                        o = Math.min(r.start, l);
                    r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Iu(n, o);
                    var i = Iu(n, r);
                    l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
                }
            }
            for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Gc = H && "documentMode" in document && 11 >= document.documentMode,
        hn = null,
        po = null,
        er = null,
        mo = !1;

    function Du(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        mo || hn == null || hn !== Er(r) || (r = hn, "selectionStart" in r && fo(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), er && bn(er, r) || (er = r, r = $r(po, "onSelect"), 0 < r.length && (t = new ro("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = hn)))
    }

    function Vr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var vn = {
            animationend: Vr("Animation", "AnimationEnd"),
            animationiteration: Vr("Animation", "AnimationIteration"),
            animationstart: Vr("Animation", "AnimationStart"),
            transitionend: Vr("Transition", "TransitionEnd")
        },
        ho = {},
        Fu = {};
    H && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);

    function Hr(e) {
        if (ho[e]) return ho[e];
        if (!vn[e]) return e;
        var t = vn[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Fu) return ho[e] = t[n];
        return e
    }
    var Uu = Hr("animationend"),
        Au = Hr("animationiteration"),
        Bu = Hr("animationstart"),
        Vu = Hr("transitionend"),
        Hu = new Map,
        Wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function Mt(e, t) {
        Hu.set(e, t), A(t, [e])
    }
    for (var vo = 0; vo < Wu.length; vo++) {
        var yo = Wu[vo],
            Yc = yo.toLowerCase(),
            Jc = yo[0].toUpperCase() + yo.slice(1);
        Mt(Yc, "on" + Jc)
    }
    Mt(Uu, "onAnimationEnd"), Mt(Au, "onAnimationIteration"), Mt(Bu, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(Vu, "onTransitionEnd"), Y("onMouseEnter", ["mouseout", "mouseover"]), Y("onMouseLeave", ["mouseout", "mouseover"]), Y("onPointerEnter", ["pointerout", "pointerover"]), Y("onPointerLeave", ["pointerout", "pointerover"]), A("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), A("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), A("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), A("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), A("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Zc = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));

    function $u(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Ya(r, t, void 0, e), e.currentTarget = null
    }

    function Qu(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                l = r.event;
            r = r.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var i = r.length - 1; 0 <= i; i--) {
                        var u = r[i],
                            s = u.instance,
                            m = u.currentTarget;
                        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
                        $u(l, u, m), o = s
                    } else
                        for (i = 0; i < r.length; i++) {
                            if (u = r[i], s = u.instance, m = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
                            $u(l, u, m), o = s
                        }
            }
        }
        if (Nr) throw e = Xl, Nr = !1, Xl = null, e
    }

    function pe(e, t) {
        var n = t[Co];
        n === void 0 && (n = t[Co] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Ku(t, e, 2, !1), n.add(r))
    }

    function go(e, t, n) {
        var r = 0;
        t && (r |= 4), Ku(n, e, r, t)
    }
    var Wr = "_reactListening" + Math.random().toString(36).slice(2);

    function nr(e) {
        if (!e[Wr]) {
            e[Wr] = !0, G.forEach(function(n) {
                n !== "selectionchange" && (Zc.has(n) || go(n, !1, e), go(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wr] || (t[Wr] = !0, go("selectionchange", !1, t))
        }
    }

    function Ku(e, t, n, r) {
        switch (hu(t)) {
            case 1:
                var l = fc;
                break;
            case 4:
                l = dc;
                break;
            default:
                l = eo
        }
        n = l.bind(null, t, n, e), l = void 0, !Kl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: l
        }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
            passive: l
        }) : e.addEventListener(t, n, !1)
    }

    function wo(e, t, n, r, l) {
        var o = r;
        if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l) break;
                if (i === 4)
                    for (i = r.return; i !== null;) {
                        var s = i.tag;
                        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                        i = i.return
                    }
                for (; u !== null;) {
                    if (i = Jt(u), i === null) return;
                    if (s = i.tag, s === 5 || s === 6) {
                        r = o = i;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
        Zi(function() {
            var m = o,
                g = Wl(n),
                S = [];
            e: {
                var v = Hu.get(e);
                if (v !== void 0) {
                    var C = ro,
                        L = e;
                    switch (e) {
                        case "keypress":
                            if (Fr(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            C = jc;
                            break;
                        case "focusin":
                            L = "focus", C = io;
                            break;
                        case "focusout":
                            L = "blur", C = io;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            C = io;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            C = gu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            C = hc;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            C = Tc;
                            break;
                        case Uu:
                        case Au:
                        case Bu:
                            C = gc;
                            break;
                        case Vu:
                            C = Rc;
                            break;
                        case "scroll":
                            C = pc;
                            break;
                        case "wheel":
                            C = Oc;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            C = Sc;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            C = Su
                    }
                    var T = (t & 4) !== 0,
                        Ee = !T && e === "scroll",
                        f = T ? v !== null ? v + "Capture" : null : v;
                    T = [];
                    for (var a = m, d; a !== null;) {
                        d = a;
                        var x = d.stateNode;
                        if (d.tag === 5 && x !== null && (d = x, f !== null && (x = Un(a, f), x != null && T.push(rr(a, x, d)))), Ee) break;
                        a = a.return
                    }
                    0 < T.length && (v = new C(v, L, null, n, g), S.push({
                        event: v,
                        listeners: T
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (v = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", v && n !== Hl && (L = n.relatedTarget || n.fromElement) && (Jt(L) || L[kt])) break e;
                    if ((C || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, C ? (L = n.relatedTarget || n.toElement, C = m, L = L ? Jt(L) : null, L !== null && (Ee = Yt(L), L !== Ee || L.tag !== 5 && L.tag !== 6) && (L = null)) : (C = null, L = m), C !== L)) {
                        if (T = gu, x = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (T = Su, x = "onPointerLeave", f = "onPointerEnter", a = "pointer"), Ee = C == null ? v : wn(C), d = L == null ? v : wn(L), v = new T(x, a + "leave", C, n, g), v.target = Ee, v.relatedTarget = d, x = null, Jt(g) === m && (T = new T(f, a + "enter", L, n, g), T.target = d, T.relatedTarget = Ee, x = T), Ee = x, C && L) t: {
                            for (T = C, f = L, a = 0, d = T; d; d = yn(d)) a++;
                            for (d = 0, x = f; x; x = yn(x)) d++;
                            for (; 0 < a - d;) T = yn(T),
                            a--;
                            for (; 0 < d - a;) f = yn(f),
                            d--;
                            for (; a--;) {
                                if (T === f || f !== null && T === f.alternate) break t;
                                T = yn(T), f = yn(f)
                            }
                            T = null
                        }
                        else T = null;
                        C !== null && Xu(S, v, C, T, !1), L !== null && Ee !== null && Xu(S, Ee, L, T, !0)
                    }
                }
                e: {
                    if (v = m ? wn(m) : window, C = v.nodeName && v.nodeName.toLowerCase(), C === "select" || C === "input" && v.type === "file") var R = Vc;
                    else if (Nu(v))
                        if (Pu) R = Qc;
                        else {
                            R = Wc;
                            var D = Hc
                        }
                    else(C = v.nodeName) && C.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (R = $c);
                    if (R && (R = R(e, m))) {
                        ju(S, R, n, g);
                        break e
                    }
                    D && D(e, v, m),
                    e === "focusout" && (D = v._wrapperState) && D.controlled && v.type === "number" && Fl(v, "number", v.value)
                }
                switch (D = m ? wn(m) : window, e) {
                    case "focusin":
                        (Nu(D) || D.contentEditable === "true") && (hn = D, po = m, er = null);
                        break;
                    case "focusout":
                        er = po = hn = null;
                        break;
                    case "mousedown":
                        mo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        mo = !1, Du(S, n, g);
                        break;
                    case "selectionchange":
                        if (Gc) break;
                    case "keydown":
                    case "keyup":
                        Du(S, n, g)
                }
                var F;
                if (so) e: {
                    switch (e) {
                        case "compositionstart":
                            var B = "onCompositionStart";
                            break e;
                        case "compositionend":
                            B = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            B = "onCompositionUpdate";
                            break e
                    }
                    B = void 0
                }
                else mn ? _u(e, n) && (B = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (B = "onCompositionStart");B && (ku && n.locale !== "ko" && (mn || B !== "onCompositionStart" ? B === "onCompositionEnd" && mn && (F = vu()) : (Ot = g, no = "value" in Ot ? Ot.value : Ot.textContent, mn = !0)), D = $r(m, B), 0 < D.length && (B = new wu(B, e, null, n, g), S.push({
                    event: B,
                    listeners: D
                }), F ? B.data = F : (F = Cu(n), F !== null && (B.data = F)))),
                (F = Dc ? Fc(e, n) : Uc(e, n)) && (m = $r(m, "onBeforeInput"), 0 < m.length && (g = new wu("onBeforeInput", "beforeinput", null, n, g), S.push({
                    event: g,
                    listeners: m
                }), g.data = F))
            }
            Qu(S, t)
        })
    }

    function rr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function $r(e, t) {
        for (var n = t + "Capture", r = []; e !== null;) {
            var l = e,
                o = l.stateNode;
            l.tag === 5 && o !== null && (l = o, o = Un(e, n), o != null && r.unshift(rr(e, o, l)), o = Un(e, t), o != null && r.push(rr(e, o, l))), e = e.return
        }
        return r
    }

    function yn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Xu(e, t, n, r, l) {
        for (var o = t._reactName, i = []; n !== null && n !== r;) {
            var u = n,
                s = u.alternate,
                m = u.stateNode;
            if (s !== null && s === r) break;
            u.tag === 5 && m !== null && (u = m, l ? (s = Un(n, o), s != null && i.unshift(rr(n, s, u))) : l || (s = Un(n, o), s != null && i.push(rr(n, s, u)))), n = n.return
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        })
    }
    var qc = /\r\n?/g,
        bc = /\u0000|\uFFFD/g;

    function Gu(e) {
        return (typeof e == "string" ? e : "" + e).replace(qc, `
`).replace(bc, "")
    }

    function Qr(e, t, n) {
        if (t = Gu(t), Gu(e) !== t && n) throw Error(p(425))
    }

    function Kr() {}
    var So = null,
        ko = null;

    function xo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Eo = typeof setTimeout == "function" ? setTimeout : void 0,
        ef = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Yu = typeof Promise == "function" ? Promise : void 0,
        tf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yu != "undefined" ? function(e) {
            return Yu.resolve(null).then(e).catch(nf)
        } : Eo;

    function nf(e) {
        setTimeout(function() {
            throw e
        })
    }

    function _o(e, t) {
        var n = t,
            r = 0;
        do {
            var l = n.nextSibling;
            if (e.removeChild(n), l && l.nodeType === 8)
                if (n = l.data, n === "/$") {
                    if (r === 0) {
                        e.removeChild(l), Xn(t);
                        return
                    }
                    r--
                } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = l
        } while (n);
        Xn(t)
    }

    function Dt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Ju(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var gn = Math.random().toString(36).slice(2),
        yt = "__reactFiber$" + gn,
        lr = "__reactProps$" + gn,
        kt = "__reactContainer$" + gn,
        Co = "__reactEvents$" + gn,
        rf = "__reactListeners$" + gn,
        lf = "__reactHandles$" + gn;

    function Jt(e) {
        var t = e[yt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[kt] || n[yt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = Ju(e); e !== null;) {
                        if (n = e[yt]) return n;
                        e = Ju(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function or(e) {
        return e = e[yt] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function wn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(p(33))
    }

    function Xr(e) {
        return e[lr] || null
    }
    var No = [],
        Sn = -1;

    function Ft(e) {
        return {
            current: e
        }
    }

    function me(e) {
        0 > Sn || (e.current = No[Sn], No[Sn] = null, Sn--)
    }

    function de(e, t) {
        Sn++, No[Sn] = e.current, e.current = t
    }
    var Ut = {},
        Re = Ft(Ut),
        Be = Ft(!1),
        Zt = Ut;

    function kn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ut;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {},
            o;
        for (o in n) l[o] = t[o];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
    }

    function Ve(e) {
        return e = e.childContextTypes, e != null
    }

    function Gr() {
        me(Be), me(Re)
    }

    function Zu(e, t, n) {
        if (Re.current !== Ut) throw Error(p(168));
        de(Re, t), de(Be, n)
    }

    function qu(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for (var l in r)
            if (!(l in t)) throw Error(p(108, fe(e) || "Unknown", l));
        return j({}, n, r)
    }

    function Yr(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ut, Zt = Re.current, de(Re, e), de(Be, Be.current), !0
    }

    function bu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(p(169));
        n ? (e = qu(e, t, Zt), r.__reactInternalMemoizedMergedChildContext = e, me(Be), me(Re), de(Re, e)) : me(Be), de(Be, n)
    }
    var xt = null,
        Jr = !1,
        jo = !1;

    function es(e) {
        xt === null ? xt = [e] : xt.push(e)
    }

    function of (e) {
        Jr = !0, es(e)
    }

    function At() {
        if (!jo && xt !== null) {
            jo = !0;
            var e = 0,
                t = ue;
            try {
                var n = xt;
                for (ue = 1; e < n.length; e++) {
                    var r = n[e];
                    do r = r(!0); while (r !== null)
                }
                xt = null, Jr = !1
            } catch (l) {
                throw xt !== null && (xt = xt.slice(e + 1)), nu(Gl, At), l
            } finally {
                ue = t, jo = !1
            }
        }
        return null
    }
    var xn = [],
        En = 0,
        Zr = null,
        qr = 0,
        be = [],
        et = 0,
        qt = null,
        Et = 1,
        _t = "";

    function bt(e, t) {
        xn[En++] = qr, xn[En++] = Zr, Zr = e, qr = t
    }

    function ts(e, t, n) {
        be[et++] = Et, be[et++] = _t, be[et++] = qt, qt = e;
        var r = Et;
        e = _t;
        var l = 32 - it(r) - 1;
        r &= ~(1 << l), n += 1;
        var o = 32 - it(t) + l;
        if (30 < o) {
            var i = l - l % 5;
            o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Et = 1 << 32 - it(t) + l | n << l | r, _t = o + e
        } else Et = 1 << o | n << l | r, _t = e
    }

    function Po(e) {
        e.return !== null && (bt(e, 1), ts(e, 1, 0))
    }

    function Lo(e) {
        for (; e === Zr;) Zr = xn[--En], xn[En] = null, qr = xn[--En], xn[En] = null;
        for (; e === qt;) qt = be[--et], be[et] = null, _t = be[--et], be[et] = null, Et = be[--et], be[et] = null
    }
    var Ye = null,
        Je = null,
        ve = !1,
        st = null;

    function ns(e, t) {
        var n = lt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
    }

    function rs(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Je = Dt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Je = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qt !== null ? {
                    id: Et,
                    overflow: _t
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = lt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Je = null, !0) : !1;
            default:
                return !1
        }
    }

    function To(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function zo(e) {
        if (ve) {
            var t = Je;
            if (t) {
                var n = t;
                if (!rs(e, t)) {
                    if (To(e)) throw Error(p(418));
                    t = Dt(n.nextSibling);
                    var r = Ye;
                    t && rs(e, t) ? ns(r, n) : (e.flags = e.flags & -4097 | 2, ve = !1, Ye = e)
                }
            } else {
                if (To(e)) throw Error(p(418));
                e.flags = e.flags & -4097 | 2, ve = !1, Ye = e
            }
        }
    }

    function ls(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        Ye = e
    }

    function br(e) {
        if (e !== Ye) return !1;
        if (!ve) return ls(e), ve = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xo(e.type, e.memoizedProps)), t && (t = Je)) {
            if (To(e)) throw os(), Error(p(418));
            for (; t;) ns(e, t), t = Dt(t.nextSibling)
        }
        if (ls(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Je = Dt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Je = null
            }
        } else Je = Ye ? Dt(e.stateNode.nextSibling) : null;
        return !0
    }

    function os() {
        for (var e = Je; e;) e = Dt(e.nextSibling)
    }

    function _n() {
        Je = Ye = null, ve = !1
    }

    function Ro(e) {
        st === null ? st = [e] : st.push(e)
    }
    var uf = K.ReactCurrentBatchConfig;

    function ir(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(p(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(p(147, e));
                var l = r,
                    o = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                    var u = l.refs;
                    i === null ? delete u[o] : u[o] = i
                }, t._stringRef = o, t)
            }
            if (typeof e != "string") throw Error(p(284));
            if (!n._owner) throw Error(p(290, e))
        }
        return e
    }

    function el(e, t) {
        throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function is(e) {
        var t = e._init;
        return t(e._payload)
    }

    function us(e) {
        function t(f, a) {
            if (e) {
                var d = f.deletions;
                d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a)
            }
        }

        function n(f, a) {
            if (!e) return null;
            for (; a !== null;) t(f, a), a = a.sibling;
            return null
        }

        function r(f, a) {
            for (f = new Map; a !== null;) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
            return f
        }

        function l(f, a) {
            return f = Xt(f, a), f.index = 0, f.sibling = null, f
        }

        function o(f, a, d) {
            return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a)
        }

        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f
        }

        function u(f, a, d, x) {
            return a === null || a.tag !== 6 ? (a = Ei(d, f.mode, x), a.return = f, a) : (a = l(a, d), a.return = f, a)
        }

        function s(f, a, d, x) {
            var R = d.type;
            return R === J ? g(f, a, d.props.children, x, d.key) : a !== null && (a.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ae && is(R) === a.type) ? (x = l(a, d.props), x.ref = ir(f, a, d), x.return = f, x) : (x = _l(d.type, d.key, d.props, null, f.mode, x), x.ref = ir(f, a, d), x.return = f, x)
        }

        function m(f, a, d, x) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = _i(d, f.mode, x), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a)
        }

        function g(f, a, d, x, R) {
            return a === null || a.tag !== 7 ? (a = sn(d, f.mode, x, R), a.return = f, a) : (a = l(a, d), a.return = f, a)
        }

        function S(f, a, d) {
            if (typeof a == "string" && a !== "" || typeof a == "number") return a = Ei("" + a, f.mode, d), a.return = f, a;
            if (typeof a == "object" && a !== null) {
                switch (a.$$typeof) {
                    case ye:
                        return d = _l(a.type, a.key, a.props, null, f.mode, d), d.ref = ir(f, null, a), d.return = f, d;
                    case ae:
                        return a = _i(a, f.mode, d), a.return = f, a;
                    case Ae:
                        var x = a._init;
                        return S(f, x(a._payload), d)
                }
                if (Mn(a) || U(a)) return a = sn(a, f.mode, d, null), a.return = f, a;
                el(f, a)
            }
            return null
        }

        function v(f, a, d, x) {
            var R = a !== null ? a.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number") return R !== null ? null : u(f, a, "" + d, x);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case ye:
                        return d.key === R ? s(f, a, d, x) : null;
                    case ae:
                        return d.key === R ? m(f, a, d, x) : null;
                    case Ae:
                        return R = d._init, v(f, a, R(d._payload), x)
                }
                if (Mn(d) || U(d)) return R !== null ? null : g(f, a, d, x, null);
                el(f, d)
            }
            return null
        }

        function C(f, a, d, x, R) {
            if (typeof x == "string" && x !== "" || typeof x == "number") return f = f.get(d) || null, u(a, f, "" + x, R);
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                    case ye:
                        return f = f.get(x.key === null ? d : x.key) || null, s(a, f, x, R);
                    case ae:
                        return f = f.get(x.key === null ? d : x.key) || null, m(a, f, x, R);
                    case Ae:
                        var D = x._init;
                        return C(f, a, d, D(x._payload), R)
                }
                if (Mn(x) || U(x)) return f = f.get(d) || null, g(a, f, x, R, null);
                el(a, x)
            }
            return null
        }

        function L(f, a, d, x) {
            for (var R = null, D = null, F = a, B = a = 0, Le = null; F !== null && B < d.length; B++) {
                F.index > B ? (Le = F, F = null) : Le = F.sibling;
                var oe = v(f, F, d[B], x);
                if (oe === null) {
                    F === null && (F = Le);
                    break
                }
                e && F && oe.alternate === null && t(f, F), a = o(oe, a, B), D === null ? R = oe : D.sibling = oe, D = oe, F = Le
            }
            if (B === d.length) return n(f, F), ve && bt(f, B), R;
            if (F === null) {
                for (; B < d.length; B++) F = S(f, d[B], x), F !== null && (a = o(F, a, B), D === null ? R = F : D.sibling = F, D = F);
                return ve && bt(f, B), R
            }
            for (F = r(f, F); B < d.length; B++) Le = C(F, f, B, d[B], x), Le !== null && (e && Le.alternate !== null && F.delete(Le.key === null ? B : Le.key), a = o(Le, a, B), D === null ? R = Le : D.sibling = Le, D = Le);
            return e && F.forEach(function(Gt) {
                return t(f, Gt)
            }), ve && bt(f, B), R
        }

        function T(f, a, d, x) {
            var R = U(d);
            if (typeof R != "function") throw Error(p(150));
            if (d = R.call(d), d == null) throw Error(p(151));
            for (var D = R = null, F = a, B = a = 0, Le = null, oe = d.next(); F !== null && !oe.done; B++, oe = d.next()) {
                F.index > B ? (Le = F, F = null) : Le = F.sibling;
                var Gt = v(f, F, oe.value, x);
                if (Gt === null) {
                    F === null && (F = Le);
                    break
                }
                e && F && Gt.alternate === null && t(f, F), a = o(Gt, a, B), D === null ? R = Gt : D.sibling = Gt, D = Gt, F = Le
            }
            if (oe.done) return n(f, F), ve && bt(f, B), R;
            if (F === null) {
                for (; !oe.done; B++, oe = d.next()) oe = S(f, oe.value, x), oe !== null && (a = o(oe, a, B), D === null ? R = oe : D.sibling = oe, D = oe);
                return ve && bt(f, B), R
            }
            for (F = r(f, F); !oe.done; B++, oe = d.next()) oe = C(F, f, B, oe.value, x), oe !== null && (e && oe.alternate !== null && F.delete(oe.key === null ? B : oe.key), a = o(oe, a, B), D === null ? R = oe : D.sibling = oe, D = oe);
            return e && F.forEach(function(Bf) {
                return t(f, Bf)
            }), ve && bt(f, B), R
        }

        function Ee(f, a, d, x) {
            if (typeof d == "object" && d !== null && d.type === J && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case ye:
                        e: {
                            for (var R = d.key, D = a; D !== null;) {
                                if (D.key === R) {
                                    if (R = d.type, R === J) {
                                        if (D.tag === 7) {
                                            n(f, D.sibling), a = l(D, d.props.children), a.return = f, f = a;
                                            break e
                                        }
                                    } else if (D.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Ae && is(R) === D.type) {
                                        n(f, D.sibling), a = l(D, d.props), a.ref = ir(f, D, d), a.return = f, f = a;
                                        break e
                                    }
                                    n(f, D);
                                    break
                                } else t(f, D);
                                D = D.sibling
                            }
                            d.type === J ? (a = sn(d.props.children, f.mode, x, d.key), a.return = f, f = a) : (x = _l(d.type, d.key, d.props, null, f.mode, x), x.ref = ir(f, a, d), x.return = f, f = x)
                        }
                        return i(f);
                    case ae:
                        e: {
                            for (D = d.key; a !== null;) {
                                if (a.key === D)
                                    if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                        n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                                        break e
                                    } else {
                                        n(f, a);
                                        break
                                    }
                                else t(f, a);
                                a = a.sibling
                            }
                            a = _i(d, f.mode, x),
                            a.return = f,
                            f = a
                        }
                        return i(f);
                    case Ae:
                        return D = d._init, Ee(f, a, D(d._payload), x)
                }
                if (Mn(d)) return L(f, a, d, x);
                if (U(d)) return T(f, a, d, x);
                el(f, d)
            }
            return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = Ei(d, f.mode, x), a.return = f, f = a), i(f)) : n(f, a)
        }
        return Ee
    }
    var Cn = us(!0),
        ss = us(!1),
        tl = Ft(null),
        nl = null,
        Nn = null,
        Io = null;

    function Oo() {
        Io = Nn = nl = null
    }

    function Mo(e) {
        var t = tl.current;
        me(tl), e._currentValue = t
    }

    function Do(e, t, n) {
        for (; e !== null;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function jn(e, t) {
        nl = e, Io = Nn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (He = !0), e.firstContext = null)
    }

    function tt(e) {
        var t = e._currentValue;
        if (Io !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, Nn === null) {
                if (nl === null) throw Error(p(308));
                Nn = e, nl.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else Nn = Nn.next = e;
        return t
    }
    var en = null;

    function Fo(e) {
        en === null ? en = [e] : en.push(e)
    }

    function as(e, t, n, r) {
        var l = t.interleaved;
        return l === null ? (n.next = n, Fo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ct(e, r)
    }

    function Ct(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null
    }
    var Bt = !1;

    function Uo(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function cs(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Nt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Vt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (te & 2) !== 0) {
            var l = r.pending;
            return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ct(e, n)
        }
        return l = r.interleaved, l === null ? (t.next = t, Fo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ct(e, n)
    }

    function rl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n)
        }
    }

    function fs(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var l = null,
                o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    o === null ? l = o = i : o = o.next = i, n = n.next
                } while (n !== null);
                o === null ? l = o = t : o = o.next = t
            } else l = o = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }

    function ll(e, t, n, r) {
        var l = e.updateQueue;
        Bt = !1;
        var o = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            u = l.shared.pending;
        if (u !== null) {
            l.shared.pending = null;
            var s = u,
                m = s.next;
            s.next = null, i === null ? o = m : i.next = m, i = s;
            var g = e.alternate;
            g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== i && (u === null ? g.firstBaseUpdate = m : u.next = m, g.lastBaseUpdate = s))
        }
        if (o !== null) {
            var S = l.baseState;
            i = 0, g = m = s = null, u = o;
            do {
                var v = u.lane,
                    C = u.eventTime;
                if ((r & v) === v) {
                    g !== null && (g = g.next = {
                        eventTime: C,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null
                    });
                    e: {
                        var L = e,
                            T = u;
                        switch (v = t, C = n, T.tag) {
                            case 1:
                                if (L = T.payload, typeof L == "function") {
                                    S = L.call(C, S, v);
                                    break e
                                }
                                S = L;
                                break e;
                            case 3:
                                L.flags = L.flags & -65537 | 128;
                            case 0:
                                if (L = T.payload, v = typeof L == "function" ? L.call(C, S, v) : L, v == null) break e;
                                S = j({}, S, v);
                                break e;
                            case 2:
                                Bt = !0
                        }
                    }
                    u.callback !== null && u.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [u] : v.push(u))
                } else C = {
                    eventTime: C,
                    lane: v,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                }, g === null ? (m = g = C, s = S) : g = g.next = C, i |= v;
                if (u = u.next, u === null) {
                    if (u = l.shared.pending, u === null) break;
                    v = u, u = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null
                }
            } while (!0);
            if (g === null && (s = S), l.baseState = s, l.firstBaseUpdate = m, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
                l = t;
                do i |= l.lane, l = l.next; while (l !== t)
            } else o === null && (l.shared.lanes = 0);
            rn |= i, e.lanes = i, e.memoizedState = S
        }
    }

    function ds(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var r = e[t],
                    l = r.callback;
                if (l !== null) {
                    if (r.callback = null, r = n, typeof l != "function") throw Error(p(191, l));
                    l.call(r)
                }
            }
    }
    var ur = {},
        gt = Ft(ur),
        sr = Ft(ur),
        ar = Ft(ur);

    function tn(e) {
        if (e === ur) throw Error(p(174));
        return e
    }

    function Ao(e, t) {
        switch (de(ar, t), de(sr, e), de(gt, ur), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Al(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Al(t, e)
        }
        me(gt), de(gt, t)
    }

    function Pn() {
        me(gt), me(sr), me(ar)
    }

    function ps(e) {
        tn(ar.current);
        var t = tn(gt.current),
            n = Al(t, e.type);
        t !== n && (de(sr, e), de(gt, n))
    }

    function Bo(e) {
        sr.current === e && (me(gt), me(sr))
    }
    var ge = Ft(0);

    function ol(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Vo = [];

    function Ho() {
        for (var e = 0; e < Vo.length; e++) Vo[e]._workInProgressVersionPrimary = null;
        Vo.length = 0
    }
    var il = K.ReactCurrentDispatcher,
        Wo = K.ReactCurrentBatchConfig,
        nn = 0,
        we = null,
        Ce = null,
        je = null,
        ul = !1,
        cr = !1,
        fr = 0,
        sf = 0;

    function Ie() {
        throw Error(p(321))
    }

    function $o(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ut(e[n], t[n])) return !1;
        return !0
    }

    function Qo(e, t, n, r, l, o) {
        if (nn = o, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, il.current = e === null || e.memoizedState === null ? df : pf, e = n(r, l), cr) {
            o = 0;
            do {
                if (cr = !1, fr = 0, 25 <= o) throw Error(p(301));
                o += 1, je = Ce = null, t.updateQueue = null, il.current = mf, e = n(r, l)
            } while (cr)
        }
        if (il.current = cl, t = Ce !== null && Ce.next !== null, nn = 0, je = Ce = we = null, ul = !1, t) throw Error(p(300));
        return e
    }

    function Ko() {
        var e = fr !== 0;
        return fr = 0, e
    }

    function wt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return je === null ? we.memoizedState = je = e : je = je.next = e, je
    }

    function nt() {
        if (Ce === null) {
            var e = we.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = Ce.next;
        var t = je === null ? we.memoizedState : je.next;
        if (t !== null) je = t, Ce = e;
        else {
            if (e === null) throw Error(p(310));
            Ce = e, e = {
                memoizedState: Ce.memoizedState,
                baseState: Ce.baseState,
                baseQueue: Ce.baseQueue,
                queue: Ce.queue,
                next: null
            }, je === null ? we.memoizedState = je = e : je = je.next = e
        }
        return je
    }

    function dr(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Xo(e) {
        var t = nt(),
            n = t.queue;
        if (n === null) throw Error(p(311));
        n.lastRenderedReducer = e;
        var r = Ce,
            l = r.baseQueue,
            o = n.pending;
        if (o !== null) {
            if (l !== null) {
                var i = l.next;
                l.next = o.next, o.next = i
            }
            r.baseQueue = l = o, n.pending = null
        }
        if (l !== null) {
            o = l.next, r = r.baseState;
            var u = i = null,
                s = null,
                m = o;
            do {
                var g = m.lane;
                if ((nn & g) === g) s !== null && (s = s.next = {
                    lane: 0,
                    action: m.action,
                    hasEagerState: m.hasEagerState,
                    eagerState: m.eagerState,
                    next: null
                }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
                else {
                    var S = {
                        lane: g,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    };
                    s === null ? (u = s = S, i = r) : s = s.next = S, we.lanes |= g, rn |= g
                }
                m = m.next
            } while (m !== null && m !== o);
            s === null ? i = r : s.next = u, ut(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r
        }
        if (e = n.interleaved, e !== null) {
            l = e;
            do o = l.lane, we.lanes |= o, rn |= o, l = l.next; while (l !== e)
        } else l === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch]
    }

    function Go(e) {
        var t = nt(),
            n = t.queue;
        if (n === null) throw Error(p(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
            l = n.pending,
            o = t.memoizedState;
        if (l !== null) {
            n.pending = null;
            var i = l = l.next;
            do o = e(o, i.action), i = i.next; while (i !== l);
            ut(o, t.memoizedState) || (He = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, r]
    }

    function ms() {}

    function hs(e, t) {
        var n = we,
            r = nt(),
            l = t(),
            o = !ut(r.memoizedState, l);
        if (o && (r.memoizedState = l, He = !0), r = r.queue, Yo(gs.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || je !== null && je.memoizedState.tag & 1) {
            if (n.flags |= 2048, pr(9, ys.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(p(349));
            (nn & 30) !== 0 || vs(n, t, l)
        }
        return l
    }

    function vs(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = we.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, we.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function ys(e, t, n, r) {
        t.value = n, t.getSnapshot = r, ws(t) && Ss(e)
    }

    function gs(e, t, n) {
        return n(function() {
            ws(t) && Ss(e)
        })
    }

    function ws(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ut(e, n)
        } catch (r) {
            return !0
        }
    }

    function Ss(e) {
        var t = Ct(e, 1);
        t !== null && dt(t, e, 1, -1)
    }

    function ks(e) {
        var t = wt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: dr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ff.bind(null, we, e), [t.memoizedState, e]
    }

    function pr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = we.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, we.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
    }

    function xs() {
        return nt().memoizedState
    }

    function sl(e, t, n, r) {
        var l = wt();
        we.flags |= e, l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r)
    }

    function al(e, t, n, r) {
        var l = nt();
        r = r === void 0 ? null : r;
        var o = void 0;
        if (Ce !== null) {
            var i = Ce.memoizedState;
            if (o = i.destroy, r !== null && $o(r, i.deps)) {
                l.memoizedState = pr(t, n, o, r);
                return
            }
        }
        we.flags |= e, l.memoizedState = pr(1 | t, n, o, r)
    }

    function Es(e, t) {
        return sl(8390656, 8, e, t)
    }

    function Yo(e, t) {
        return al(2048, 8, e, t)
    }

    function _s(e, t) {
        return al(4, 2, e, t)
    }

    function Cs(e, t) {
        return al(4, 4, e, t)
    }

    function Ns(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function js(e, t, n) {
        return n = n != null ? n.concat([e]) : null, al(4, 4, Ns.bind(null, t, e), n)
    }

    function Jo() {}

    function Ps(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Ls(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
    }

    function Ts(e, t, n) {
        return (nn & 21) === 0 ? (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n) : (ut(n, t) || (n = iu(), we.lanes |= n, rn |= n, e.baseState = !0), t)
    }

    function af(e, t) {
        var n = ue;
        ue = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Wo.transition;
        Wo.transition = {};
        try {
            e(!1), t()
        } finally {
            ue = n, Wo.transition = r
        }
    }

    function zs() {
        return nt().memoizedState
    }

    function cf(e, t, n) {
        var r = Qt(e);
        if (n = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Rs(e)) Is(t, n);
        else if (n = as(e, t, n, r), n !== null) {
            var l = Fe();
            dt(n, e, r, l), Os(n, t, r)
        }
    }

    function ff(e, t, n) {
        var r = Qt(e),
            l = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (Rs(e)) Is(t, l);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var i = t.lastRenderedState,
                    u = o(i, n);
                if (l.hasEagerState = !0, l.eagerState = u, ut(u, i)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l, Fo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                    return
                }
            } catch (m) {} finally {}
            n = as(e, t, l, r), n !== null && (l = Fe(), dt(n, e, r, l), Os(n, t, r))
        }
    }

    function Rs(e) {
        var t = e.alternate;
        return e === we || t !== null && t === we
    }

    function Is(e, t) {
        cr = ul = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Os(e, t, n) {
        if ((n & 4194240) !== 0) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n)
        }
    }
    var cl = {
            readContext: tt,
            useCallback: Ie,
            useContext: Ie,
            useEffect: Ie,
            useImperativeHandle: Ie,
            useInsertionEffect: Ie,
            useLayoutEffect: Ie,
            useMemo: Ie,
            useReducer: Ie,
            useRef: Ie,
            useState: Ie,
            useDebugValue: Ie,
            useDeferredValue: Ie,
            useTransition: Ie,
            useMutableSource: Ie,
            useSyncExternalStore: Ie,
            useId: Ie,
            unstable_isNewReconciler: !1
        },
        df = {
            readContext: tt,
            useCallback: function(e, t) {
                return wt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: tt,
            useEffect: Es,
            useImperativeHandle: function(e, t, n) {
                return n = n != null ? n.concat([e]) : null, sl(4194308, 4, Ns.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return sl(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return sl(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = wt();
                return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = wt();
                return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, r.queue = e, e = e.dispatch = cf.bind(null, we, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                var t = wt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: ks,
            useDebugValue: Jo,
            useDeferredValue: function(e) {
                return wt().memoizedState = e
            },
            useTransition: function() {
                var e = ks(!1),
                    t = e[0];
                return e = af.bind(null, e[1]), wt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, n) {
                var r = we,
                    l = wt();
                if (ve) {
                    if (n === void 0) throw Error(p(407));
                    n = n()
                } else {
                    if (n = t(), Pe === null) throw Error(p(349));
                    (nn & 30) !== 0 || vs(r, t, n)
                }
                l.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return l.queue = o, Es(gs.bind(null, r, o, e), [e]), r.flags |= 2048, pr(9, ys.bind(null, r, o, n, t), void 0, null), n
            },
            useId: function() {
                var e = wt(),
                    t = Pe.identifierPrefix;
                if (ve) {
                    var n = _t,
                        r = Et;
                    n = (r & ~(1 << 32 - it(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
                } else n = sf++, t = ":" + t + "r" + n.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        pf = {
            readContext: tt,
            useCallback: Ps,
            useContext: tt,
            useEffect: Yo,
            useImperativeHandle: js,
            useInsertionEffect: _s,
            useLayoutEffect: Cs,
            useMemo: Ls,
            useReducer: Xo,
            useRef: xs,
            useState: function() {
                return Xo(dr)
            },
            useDebugValue: Jo,
            useDeferredValue: function(e) {
                var t = nt();
                return Ts(t, Ce.memoizedState, e)
            },
            useTransition: function() {
                var e = Xo(dr)[0],
                    t = nt().memoizedState;
                return [e, t]
            },
            useMutableSource: ms,
            useSyncExternalStore: hs,
            useId: zs,
            unstable_isNewReconciler: !1
        },
        mf = {
            readContext: tt,
            useCallback: Ps,
            useContext: tt,
            useEffect: Yo,
            useImperativeHandle: js,
            useInsertionEffect: _s,
            useLayoutEffect: Cs,
            useMemo: Ls,
            useReducer: Go,
            useRef: xs,
            useState: function() {
                return Go(dr)
            },
            useDebugValue: Jo,
            useDeferredValue: function(e) {
                var t = nt();
                return Ce === null ? t.memoizedState = e : Ts(t, Ce.memoizedState, e)
            },
            useTransition: function() {
                var e = Go(dr)[0],
                    t = nt().memoizedState;
                return [e, t]
            },
            useMutableSource: ms,
            useSyncExternalStore: hs,
            useId: zs,
            unstable_isNewReconciler: !1
        };

    function at(e, t) {
        if (e && e.defaultProps) {
            t = j({}, t), e = e.defaultProps;
            for (var n in e) t[n] === void 0 && (t[n] = e[n]);
            return t
        }
        return t
    }

    function Zo(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : j({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var fl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Yt(e) === e : !1
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Fe(),
                l = Qt(e),
                o = Nt(r, l);
            o.payload = t, n != null && (o.callback = n), t = Vt(e, o, l), t !== null && (dt(t, e, l, r), rl(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Fe(),
                l = Qt(e),
                o = Nt(r, l);
            o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Vt(e, o, l), t !== null && (dt(t, e, l, r), rl(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Fe(),
                r = Qt(e),
                l = Nt(n, r);
            l.tag = 2, t != null && (l.callback = t), t = Vt(e, l, r), t !== null && (dt(t, e, r, n), rl(t, e, r))
        }
    };

    function Ms(e, t, n, r, l, o, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, o) : !0
    }

    function Ds(e, t, n) {
        var r = !1,
            l = Ut,
            o = t.contextType;
        return typeof o == "object" && o !== null ? o = tt(o) : (l = Ve(t) ? Zt : Re.current, r = t.contextTypes, o = (r = r != null) ? kn(e, l) : Ut), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function Fs(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fl.enqueueReplaceState(t, t.state, null)
    }

    function qo(e, t, n, r) {
        var l = e.stateNode;
        l.props = n, l.state = e.memoizedState, l.refs = {}, Uo(e);
        var o = t.contextType;
        typeof o == "object" && o !== null ? l.context = tt(o) : (o = Ve(t) ? Zt : Re.current, l.context = kn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Zo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fl.enqueueReplaceState(l, l.state, null), ll(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function Ln(e, t) {
        try {
            var n = "",
                r = t;
            do n += re(r), r = r.return; while (r);
            var l = n
        } catch (o) {
            l = `
Error generating stack: ` + o.message + `
` + o.stack
        }
        return {
            value: e,
            source: t,
            stack: l,
            digest: null
        }
    }

    function bo(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n != null ? n : null,
            digest: t != null ? t : null
        }
    }

    function ei(e, t) {
        try {
            console.error(t.value)
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    var hf = typeof WeakMap == "function" ? WeakMap : Map;

    function Us(e, t, n) {
        n = Nt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            gl || (gl = !0, hi = r), ei(e, t)
        }, n
    }

    function As(e, t, n) {
        n = Nt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = t.value;
            n.payload = function() {
                return r(l)
            }, n.callback = function() {
                ei(e, t)
            }
        }
        var o = e.stateNode;
        return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
            ei(e, t), typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            })
        }), n
    }

    function Bs(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new hf;
            var l = new Set;
            r.set(t, l)
        } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
        l.has(n) || (l.add(n), e = Lf.bind(null, e, t, n), t.then(e, e))
    }

    function Vs(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Hs(e, t, n, r, l) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e)
    }
    var vf = K.ReactCurrentOwner,
        He = !1;

    function De(e, t, n, r) {
        t.child = e === null ? ss(t, null, n, r) : Cn(t, e.child, n, r)
    }

    function Ws(e, t, n, r, l) {
        n = n.render;
        var o = t.ref;
        return jn(t, l), r = Qo(e, t, n, r, o, l), n = Ko(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ve && n && Po(t), t.flags |= 1, De(e, t, r, l), t.child)
    }

    function $s(e, t, n, r, l) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !xi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Qs(e, t, o, r, l)) : (e = _l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, (e.lanes & l) === 0) {
            var i = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : bn, n(i, r) && e.ref === t.ref) return jt(e, t, l)
        }
        return t.flags |= 1, e = Xt(o, r), e.ref = t.ref, e.return = t, t.child = e
    }

    function Qs(e, t, n, r, l) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (bn(o, r) && e.ref === t.ref)
                if (He = !1, t.pendingProps = r = o, (e.lanes & l) !== 0)(e.flags & 131072) !== 0 && (He = !0);
                else return t.lanes = e.lanes, jt(e, t, l)
        }
        return ti(e, t, n, r, l)
    }

    function Ks(e, t, n) {
        var r = t.pendingProps,
            l = r.children,
            o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
            if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, de(zn, Ze), Ze |= n;
            else {
                if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, de(zn, Ze), Ze |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, r = o !== null ? o.baseLanes : n, de(zn, Ze), Ze |= r
            }
        else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, de(zn, Ze), Ze |= r;
        return De(e, t, l, n), t.child
    }

    function Xs(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
    }

    function ti(e, t, n, r, l) {
        var o = Ve(n) ? Zt : Re.current;
        return o = kn(t, o), jn(t, l), n = Qo(e, t, n, r, o, l), r = Ko(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, jt(e, t, l)) : (ve && r && Po(t), t.flags |= 1, De(e, t, n, l), t.child)
    }

    function Gs(e, t, n, r, l) {
        if (Ve(n)) {
            var o = !0;
            Yr(t)
        } else o = !1;
        if (jn(t, l), t.stateNode === null) pl(e, t), Ds(t, n, r), qo(t, n, r, l), r = !0;
        else if (e === null) {
            var i = t.stateNode,
                u = t.memoizedProps;
            i.props = u;
            var s = i.context,
                m = n.contextType;
            typeof m == "object" && m !== null ? m = tt(m) : (m = Ve(n) ? Zt : Re.current, m = kn(t, m));
            var g = n.getDerivedStateFromProps,
                S = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            S || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== m) && Fs(t, i, r, m), Bt = !1;
            var v = t.memoizedState;
            i.state = v, ll(t, r, i, l), s = t.memoizedState, u !== r || v !== s || Be.current || Bt ? (typeof g == "function" && (Zo(t, n, g, r), s = t.memoizedState), (u = Bt || Ms(t, n, u, r, v, s, m)) ? (S || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = m, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
        } else {
            i = t.stateNode, cs(e, t), u = t.memoizedProps, m = t.type === t.elementType ? u : at(t.type, u), i.props = m, S = t.pendingProps, v = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = tt(s) : (s = Ve(n) ? Zt : Re.current, s = kn(t, s));
            var C = n.getDerivedStateFromProps;
            (g = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== S || v !== s) && Fs(t, i, r, s), Bt = !1, v = t.memoizedState, i.state = v, ll(t, r, i, l);
            var L = t.memoizedState;
            u !== S || v !== L || Be.current || Bt ? (typeof C == "function" && (Zo(t, n, C, r), L = t.memoizedState), (m = Bt || Ms(t, n, m, r, v, L, s) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, L, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, L, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = L), i.props = r, i.state = L, i.context = s, r = m) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return ni(e, t, n, r, o, l)
    }

    function ni(e, t, n, r, l, o) {
        Xs(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return l && bu(t, n, !1), jt(e, t, o);
        r = t.stateNode, vf.current = t;
        var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Cn(t, e.child, null, o), t.child = Cn(t, null, u, o)) : De(e, t, u, o), t.memoizedState = r.state, l && bu(t, n, !0), t.child
    }

    function Ys(e) {
        var t = e.stateNode;
        t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), Ao(e, t.containerInfo)
    }

    function Js(e, t, n, r, l) {
        return _n(), Ro(l), t.flags |= 256, De(e, t, n, r), t.child
    }
    var ri = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function li(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function Zs(e, t, n) {
        var r = t.pendingProps,
            l = ge.current,
            o = !1,
            i = (t.flags & 128) !== 0,
            u;
        if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), de(ge, l & 1), e === null) return zo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
            mode: "hidden",
            children: i
        }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Cl(i, r, 0, null), e = sn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = li(n), t.memoizedState = ri, e) : oi(t, i));
        if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return yf(e, t, i, r, u, l, n);
        if (o) {
            o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
            var s = {
                mode: "hidden",
                children: r.children
            };
            return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Xt(u, o) : (o = sn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? li(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ri, r
        }
        return o = e.child, e = o.sibling, r = Xt(o, {
            mode: "visible",
            children: r.children
        }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
    }

    function oi(e, t) {
        return t = Cl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function dl(e, t, n, r) {
        return r !== null && Ro(r), Cn(t, e.child, null, n), e = oi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function yf(e, t, n, r, l, o, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = bo(Error(p(422))), dl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Cl({
            mode: "visible",
            children: r.children
        }, l, 0, null), o = sn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Cn(t, e.child, null, i), t.child.memoizedState = li(i), t.memoizedState = ri, o);
        if ((t.mode & 1) === 0) return dl(e, t, i, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
            return r = u, o = Error(p(419)), r = bo(o, r, void 0), dl(e, t, i, r)
        }
        if (u = (i & e.childLanes) !== 0, He || u) {
            if (r = Pe, r !== null) {
                switch (i & -i) {
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0
                }
                l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ct(e, l), dt(r, e, l, -1))
            }
            return ki(), r = bo(Error(p(421))), dl(e, t, i, r)
        }
        return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, Je = Dt(l.nextSibling), Ye = t, ve = !0, st = null, e !== null && (be[et++] = Et, be[et++] = _t, be[et++] = qt, Et = e.id, _t = e.overflow, qt = t), t = oi(t, r.children), t.flags |= 4096, t)
    }

    function qs(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Do(e.return, t, n)
    }

    function ii(e, t, n, r, l) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: l
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
    }

    function bs(e, t, n) {
        var r = t.pendingProps,
            l = r.revealOrder,
            o = r.tail;
        if (De(e, t, r.children, n), r = ge.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && qs(e, n, t);
                else if (e.tag === 19) qs(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (de(ge, r), (t.mode & 1) === 0) t.memoizedState = null;
        else switch (l) {
            case "forwards":
                for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && ol(e) === null && (l = n), n = n.sibling;
                n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ii(t, !1, l, n, o);
                break;
            case "backwards":
                for (n = null, l = t.child, t.child = null; l !== null;) {
                    if (e = l.alternate, e !== null && ol(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling, l.sibling = n, n = l, l = e
                }
                ii(t, !0, n, null, o);
                break;
            case "together":
                ii(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function pl(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function jt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), rn |= t.lanes, (n & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(p(153));
        if (t.child !== null) {
            for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function gf(e, t, n) {
        switch (t.tag) {
            case 3:
                Ys(t), _n();
                break;
            case 5:
                ps(t);
                break;
            case 1:
                Ve(t.type) && Yr(t);
                break;
            case 4:
                Ao(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context,
                    l = t.memoizedProps.value;
                de(tl, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (de(ge, ge.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Zs(e, t, n) : (de(ge, ge.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
                de(ge, ge.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (r) return bs(e, t, n);
                    t.flags |= 128
                }
                if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), de(ge, ge.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Ks(e, t, n)
        }
        return jt(e, t, n)
    }
    var ea, ui, ta, na;
    ea = function(e, t) {
        for (var n = t.child; n !== null;) {
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; n.sibling === null;) {
                if (n.return === null || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, ui = function() {}, ta = function(e, t, n, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = t.stateNode, tn(gt.current);
            var o = null;
            switch (n) {
                case "input":
                    l = Ml(e, l), r = Ml(e, r), o = [];
                    break;
                case "select":
                    l = j({}, l, {
                        value: void 0
                    }), r = j({}, r, {
                        value: void 0
                    }), o = [];
                    break;
                case "textarea":
                    l = Ul(e, l), r = Ul(e, r), o = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr)
            }
            Bl(n, r);
            var i;
            n = null;
            for (m in l)
                if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null)
                    if (m === "style") {
                        var u = l[m];
                        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                    } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (k.hasOwnProperty(m) ? o || (o = []) : (o = o || []).push(m, null));
            for (m in r) {
                var s = r[m];
                if (u = l != null ? l[m] : void 0, r.hasOwnProperty(m) && s !== u && (s != null || u != null))
                    if (m === "style")
                        if (u) {
                            for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                            for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                        } else n || (o || (o = []), o.push(m, n)), n = s;
                else m === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(m, s)) : m === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(m, "" + s) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (k.hasOwnProperty(m) ? (s != null && m === "onScroll" && pe("scroll", e), o || u === s || (o = [])) : (o = o || []).push(m, s))
            }
            n && (o = o || []).push("style", n);
            var m = o;
            (t.updateQueue = m) && (t.flags |= 4)
        }
    }, na = function(e, t, n, r) {
        n !== r && (t.flags |= 4)
    };

    function mr(e, t) {
        if (!ve) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function Oe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else
            for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function wf(e, t, n) {
        var r = t.pendingProps;
        switch (Lo(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Oe(t), null;
            case 1:
                return Ve(t.type) && Gr(), Oe(t), null;
            case 3:
                return r = t.stateNode, Pn(), me(Be), me(Re), Ho(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (br(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, st !== null && (gi(st), st = null))), ui(e, t), Oe(t), null;
            case 5:
                Bo(t);
                var l = tn(ar.current);
                if (n = t.type, e !== null && t.stateNode != null) ta(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(p(166));
                        return Oe(t), null
                    }
                    if (e = tn(gt.current), br(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[yt] = t, r[lr] = o, e = (t.mode & 1) !== 0, n) {
                            case "dialog":
                                pe("cancel", r), pe("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                pe("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < tr.length; l++) pe(tr[l], r);
                                break;
                            case "source":
                                pe("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                pe("error", r), pe("load", r);
                                break;
                            case "details":
                                pe("toggle", r);
                                break;
                            case "input":
                                Di(r, o), pe("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!o.multiple
                                }, pe("invalid", r);
                                break;
                            case "textarea":
                                Ai(r, o), pe("invalid", r)
                        }
                        Bl(n, o), l = null;
                        for (var i in o)
                            if (o.hasOwnProperty(i)) {
                                var u = o[i];
                                i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Qr(r.textContent, u, e), l = ["children", "" + u]) : k.hasOwnProperty(i) && u != null && i === "onScroll" && pe("scroll", r)
                            }
                        switch (n) {
                            case "input":
                                xr(r), Ui(r, o, !0);
                                break;
                            case "textarea":
                                xr(r), Vi(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof o.onClick == "function" && (r.onclick = Kr)
                        }
                        r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                    } else {
                        i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[yt] = t, e[lr] = r, ea(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (i = Vl(n, r), n) {
                                case "dialog":
                                    pe("cancel", e), pe("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    pe("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (l = 0; l < tr.length; l++) pe(tr[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    pe("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    pe("error", e), pe("load", e), l = r;
                                    break;
                                case "details":
                                    pe("toggle", e), l = r;
                                    break;
                                case "input":
                                    Di(e, r), l = Ml(e, r), pe("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = j({}, r, {
                                        value: void 0
                                    }), pe("invalid", e);
                                    break;
                                case "textarea":
                                    Ai(e, r), l = Ul(e, r), pe("invalid", e);
                                    break;
                                default:
                                    l = r
                            }
                            Bl(n, l),
                            u = l;
                            for (o in u)
                                if (u.hasOwnProperty(o)) {
                                    var s = u[o];
                                    o === "style" ? Qi(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Wi(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Dn(e, s) : typeof s == "number" && Dn(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (k.hasOwnProperty(o) ? s != null && o === "onScroll" && pe("scroll", e) : s != null && V(e, o, s, i))
                                }
                            switch (n) {
                                case "input":
                                    xr(e), Ui(e, r, !1);
                                    break;
                                case "textarea":
                                    xr(e), Vi(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + ie(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, o = r.value, o != null ? an(e, !!r.multiple, o, !1) : r.defaultValue != null && an(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = Kr)
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1
                            }
                        }
                        r && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Oe(t), null;
            case 6:
                if (e && t.stateNode != null) na(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
                    if (n = tn(ar.current), tn(gt.current), br(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (o = r.nodeValue !== n) && (e = Ye, e !== null)) switch (e.tag) {
                            case 3:
                                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Qr(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                        o && (t.flags |= 4)
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r
                }
                return Oe(t), null;
            case 13:
                if (me(ge), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ve && Je !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) os(), _n(), t.flags |= 98560, o = !1;
                    else if (o = br(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!o) throw Error(p(318));
                            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(p(317));
                            o[yt] = t
                        } else _n(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Oe(t), o = !1
                    } else st !== null && (gi(st), st = null), o = !0;
                    if (!o) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ge.current & 1) !== 0 ? Ne === 0 && (Ne = 3) : ki())), t.updateQueue !== null && (t.flags |= 4), Oe(t), null);
            case 4:
                return Pn(), ui(e, t), e === null && nr(t.stateNode.containerInfo), Oe(t), null;
            case 10:
                return Mo(t.type._context), Oe(t), null;
            case 17:
                return Ve(t.type) && Gr(), Oe(t), null;
            case 19:
                if (me(ge), o = t.memoizedState, o === null) return Oe(t), null;
                if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                    if (r) mr(o, !1);
                    else {
                        if (Ne !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (i = ol(e), i !== null) {
                                    for (t.flags |= 128, mr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), n = n.sibling;
                                    return de(ge, ge.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        o.tail !== null && xe() > Rn && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = ol(i), e !== null) {
                            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ve) return Oe(t), null
                        } else 2 * xe() - o.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
                }
                return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = xe(), t.sibling = null, n = ge.current, de(ge, r ? n & 1 | 2 : n & 1), t) : (Oe(t), null);
            case 22:
            case 23:
                return Si(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ze & 1073741824) !== 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(p(156, t.tag))
    }

    function Sf(e, t) {
        switch (Lo(t), t.tag) {
            case 1:
                return Ve(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Pn(), me(Be), me(Re), Ho(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Bo(t), null;
            case 13:
                if (me(ge), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(p(340));
                    _n()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return me(ge), null;
            case 4:
                return Pn(), null;
            case 10:
                return Mo(t.type._context), null;
            case 22:
            case 23:
                return Si(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var ml = !1,
        Me = !1,
        kf = typeof WeakSet == "function" ? WeakSet : Set,
        N = null;

    function Tn(e, t) {
        var n = e.ref;
        if (n !== null)
            if (typeof n == "function") try {
                n(null)
            } catch (r) {
                ke(e, t, r)
            } else n.current = null
    }

    function si(e, t, n) {
        try {
            n()
        } catch (r) {
            ke(e, t, r)
        }
    }
    var ra = !1;

    function xf(e, t) {
        if (So = Or, e = Mu(), fo(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch (x) {
                        n = null;
                        break e
                    }
                    var i = 0,
                        u = -1,
                        s = -1,
                        m = 0,
                        g = 0,
                        S = e,
                        v = null;
                    t: for (;;) {
                        for (var C; S !== n || l !== 0 && S.nodeType !== 3 || (u = i + l), S !== o || r !== 0 && S.nodeType !== 3 || (s = i + r), S.nodeType === 3 && (i += S.nodeValue.length), (C = S.firstChild) !== null;) v = S, S = C;
                        for (;;) {
                            if (S === e) break t;
                            if (v === n && ++m === l && (u = i), v === o && ++g === r && (s = i), (C = S.nextSibling) !== null) break;
                            S = v, v = S.parentNode
                        }
                        S = C
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (ko = {
                focusedElem: e,
                selectionRange: n
            }, Or = !1, N = t; N !== null;)
            if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
            else
                for (; N !== null;) {
                    t = N;
                    try {
                        var L = t.alternate;
                        if ((t.flags & 1024) !== 0) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (L !== null) {
                                    var T = L.memoizedProps,
                                        Ee = L.memoizedState,
                                        f = t.stateNode,
                                        a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? T : at(t.type, T), Ee);
                                    f.__reactInternalSnapshotBeforeUpdate = a
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(p(163))
                        }
                    } catch (x) {
                        ke(t, t.return, x)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, N = e;
                        break
                    }
                    N = t.return
                }
        return L = ra, ra = !1, L
    }

    function hr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var o = l.destroy;
                    l.destroy = void 0, o !== void 0 && si(t, n, o)
                }
                l = l.next
            } while (l !== r)
        }
    }

    function hl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r()
                }
                n = n.next
            } while (n !== t)
        }
    }

    function ai(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = n;
                    break;
                default:
                    e = n
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function la(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, la(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[lr], delete t[Co], delete t[rf], delete t[lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function oa(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function ia(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || oa(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ci(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
        else if (r !== 4 && (e = e.child, e !== null))
            for (ci(e, t, n), e = e.sibling; e !== null;) ci(e, t, n), e = e.sibling
    }

    function fi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null))
            for (fi(e, t, n), e = e.sibling; e !== null;) fi(e, t, n), e = e.sibling
    }
    var Te = null,
        ct = !1;

    function Ht(e, t, n) {
        for (n = n.child; n !== null;) ua(e, t, n), n = n.sibling
    }

    function ua(e, t, n) {
        if (vt && typeof vt.onCommitFiberUnmount == "function") try {
            vt.onCommitFiberUnmount(Pr, n)
        } catch (u) {}
        switch (n.tag) {
            case 5:
                Me || Tn(n, t);
            case 6:
                var r = Te,
                    l = ct;
                Te = null, Ht(e, t, n), Te = r, ct = l, Te !== null && (ct ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
                break;
            case 18:
                Te !== null && (ct ? (e = Te, n = n.stateNode, e.nodeType === 8 ? _o(e.parentNode, n) : e.nodeType === 1 && _o(e, n), Xn(e)) : _o(Te, n.stateNode));
                break;
            case 4:
                r = Te, l = ct, Te = n.stateNode.containerInfo, ct = !0, Ht(e, t, n), Te = r, ct = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var o = l,
                            i = o.destroy;
                        o = o.tag, i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && si(n, t, i), l = l.next
                    } while (l !== r)
                }
                Ht(e, t, n);
                break;
            case 1:
                if (!Me && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                } catch (u) {
                    ke(n, t, u)
                }
                Ht(e, t, n);
                break;
            case 21:
                Ht(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, Ht(e, t, n), Me = r) : Ht(e, t, n);
                break;
            default:
                Ht(e, t, n)
        }
    }

    function sa(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new kf), t.forEach(function(r) {
                var l = zf.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l))
            })
        }
    }

    function ft(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var l = n[r];
                try {
                    var o = e,
                        i = t,
                        u = i;
                    e: for (; u !== null;) {
                        switch (u.tag) {
                            case 5:
                                Te = u.stateNode, ct = !1;
                                break e;
                            case 3:
                                Te = u.stateNode.containerInfo, ct = !0;
                                break e;
                            case 4:
                                Te = u.stateNode.containerInfo, ct = !0;
                                break e
                        }
                        u = u.return
                    }
                    if (Te === null) throw Error(p(160));
                    ua(o, i, l), Te = null, ct = !1;
                    var s = l.alternate;
                    s !== null && (s.return = null), l.return = null
                } catch (m) {
                    ke(l, t, m)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) aa(t, e), t = t.sibling
    }

    function aa(e, t) {
        var n = e.alternate,
            r = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (ft(t, e), St(e), r & 4) {
                    try {
                        hr(3, e, e.return), hl(3, e)
                    } catch (T) {
                        ke(e, e.return, T)
                    }
                    try {
                        hr(5, e, e.return)
                    } catch (T) {
                        ke(e, e.return, T)
                    }
                }
                break;
            case 1:
                ft(t, e), St(e), r & 512 && n !== null && Tn(n, n.return);
                break;
            case 5:
                if (ft(t, e), St(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        Dn(l, "")
                    } catch (T) {
                        ke(e, e.return, T)
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var o = e.memoizedProps,
                        i = n !== null ? n.memoizedProps : o,
                        u = e.type,
                        s = e.updateQueue;
                    if (e.updateQueue = null, s !== null) try {
                        u === "input" && o.type === "radio" && o.name != null && Fi(l, o), Vl(u, i);
                        var m = Vl(u, o);
                        for (i = 0; i < s.length; i += 2) {
                            var g = s[i],
                                S = s[i + 1];
                            g === "style" ? Qi(l, S) : g === "dangerouslySetInnerHTML" ? Wi(l, S) : g === "children" ? Dn(l, S) : V(l, g, S, m)
                        }
                        switch (u) {
                            case "input":
                                Dl(l, o);
                                break;
                            case "textarea":
                                Bi(l, o);
                                break;
                            case "select":
                                var v = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var C = o.value;
                                C != null ? an(l, !!o.multiple, C, !1) : v !== !!o.multiple && (o.defaultValue != null ? an(l, !!o.multiple, o.defaultValue, !0) : an(l, !!o.multiple, o.multiple ? [] : "", !1))
                        }
                        l[lr] = o
                    } catch (T) {
                        ke(e, e.return, T)
                    }
                }
                break;
            case 6:
                if (ft(t, e), St(e), r & 4) {
                    if (e.stateNode === null) throw Error(p(162));
                    l = e.stateNode, o = e.memoizedProps;
                    try {
                        l.nodeValue = o
                    } catch (T) {
                        ke(e, e.return, T)
                    }
                }
                break;
            case 3:
                if (ft(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Xn(t.containerInfo)
                } catch (T) {
                    ke(e, e.return, T)
                }
                break;
            case 4:
                ft(t, e), St(e);
                break;
            case 13:
                ft(t, e), St(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (mi = xe())), r & 4 && sa(e);
                break;
            case 22:
                if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (m = Me) || g, ft(t, e), Me = m) : ft(t, e), St(e), r & 8192) {
                    if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !g && (e.mode & 1) !== 0)
                        for (N = e, g = e.child; g !== null;) {
                            for (S = N = g; N !== null;) {
                                switch (v = N, C = v.child, v.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        hr(4, v, v.return);
                                        break;
                                    case 1:
                                        Tn(v, v.return);
                                        var L = v.stateNode;
                                        if (typeof L.componentWillUnmount == "function") {
                                            r = v, n = v.return;
                                            try {
                                                t = r, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount()
                                            } catch (T) {
                                                ke(r, n, T)
                                            }
                                        }
                                        break;
                                    case 5:
                                        Tn(v, v.return);
                                        break;
                                    case 22:
                                        if (v.memoizedState !== null) {
                                            da(S);
                                            continue
                                        }
                                }
                                C !== null ? (C.return = v, N = C) : da(S)
                            }
                            g = g.sibling
                        }
                    e: for (g = null, S = e;;) {
                        if (S.tag === 5) {
                            if (g === null) {
                                g = S;
                                try {
                                    l = S.stateNode, m ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = S.stateNode, s = S.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = $i("display", i))
                                } catch (T) {
                                    ke(e, e.return, T)
                                }
                            }
                        } else if (S.tag === 6) {
                            if (g === null) try {
                                S.stateNode.nodeValue = m ? "" : S.memoizedProps
                            } catch (T) {
                                ke(e, e.return, T)
                            }
                        } else if ((S.tag !== 22 && S.tag !== 23 || S.memoizedState === null || S === e) && S.child !== null) {
                            S.child.return = S, S = S.child;
                            continue
                        }
                        if (S === e) break e;
                        for (; S.sibling === null;) {
                            if (S.return === null || S.return === e) break e;
                            g === S && (g = null), S = S.return
                        }
                        g === S && (g = null), S.sibling.return = S.return, S = S.sibling
                    }
                }
                break;
            case 19:
                ft(t, e), St(e), r & 4 && sa(e);
                break;
            case 21:
                break;
            default:
                ft(t, e), St(e)
        }
    }

    function St(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var n = e.return; n !== null;) {
                        if (oa(n)) {
                            var r = n;
                            break e
                        }
                        n = n.return
                    }
                    throw Error(p(160))
                }
                switch (r.tag) {
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (Dn(l, ""), r.flags &= -33);
                        var o = ia(e);
                        fi(e, o, l);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo,
                            u = ia(e);
                        ci(e, u, i);
                        break;
                    default:
                        throw Error(p(161))
                }
            }
            catch (s) {
                ke(e, e.return, s)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Ef(e, t, n) {
        N = e, ca(e)
    }

    function ca(e, t, n) {
        for (var r = (e.mode & 1) !== 0; N !== null;) {
            var l = N,
                o = l.child;
            if (l.tag === 22 && r) {
                var i = l.memoizedState !== null || ml;
                if (!i) {
                    var u = l.alternate,
                        s = u !== null && u.memoizedState !== null || Me;
                    u = ml;
                    var m = Me;
                    if (ml = i, (Me = s) && !m)
                        for (N = l; N !== null;) i = N, s = i.child, i.tag === 22 && i.memoizedState !== null ? pa(l) : s !== null ? (s.return = i, N = s) : pa(l);
                    for (; o !== null;) N = o, ca(o), o = o.sibling;
                    N = l, ml = u, Me = m
                }
                fa(e)
            } else(l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, N = o) : fa(e)
        }
    }

    function fa(e) {
        for (; N !== null;) {
            var t = N;
            if ((t.flags & 8772) !== 0) {
                var n = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Me || hl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Me)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                    r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                }
                            var o = t.updateQueue;
                            o !== null && ds(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode
                                }
                                ds(t, i, n)
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        s.src && (n.src = s.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var m = t.alternate;
                                if (m !== null) {
                                    var g = m.memoizedState;
                                    if (g !== null) {
                                        var S = g.dehydrated;
                                        S !== null && Xn(S)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(p(163))
                    }
                    Me || t.flags & 512 && ai(t)
                } catch (v) {
                    ke(t, t.return, v)
                }
            }
            if (t === e) {
                N = null;
                break
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, N = n;
                break
            }
            N = t.return
        }
    }

    function da(e) {
        for (; N !== null;) {
            var t = N;
            if (t === e) {
                N = null;
                break
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, N = n;
                break
            }
            N = t.return
        }
    }

    function pa(e) {
        for (; N !== null;) {
            var t = N;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            hl(4, t)
                        } catch (s) {
                            ke(t, n, s)
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = t.return;
                            try {
                                r.componentDidMount()
                            } catch (s) {
                                ke(t, l, s)
                            }
                        }
                        var o = t.return;
                        try {
                            ai(t)
                        } catch (s) {
                            ke(t, o, s)
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ai(t)
                        } catch (s) {
                            ke(t, i, s)
                        }
                }
            } catch (s) {
                ke(t, t.return, s)
            }
            if (t === e) {
                N = null;
                break
            }
            var u = t.sibling;
            if (u !== null) {
                u.return = t.return, N = u;
                break
            }
            N = t.return
        }
    }
    var _f = Math.ceil,
        vl = K.ReactCurrentDispatcher,
        di = K.ReactCurrentOwner,
        rt = K.ReactCurrentBatchConfig,
        te = 0,
        Pe = null,
        _e = null,
        ze = 0,
        Ze = 0,
        zn = Ft(0),
        Ne = 0,
        vr = null,
        rn = 0,
        yl = 0,
        pi = 0,
        yr = null,
        We = null,
        mi = 0,
        Rn = 1 / 0,
        Pt = null,
        gl = !1,
        hi = null,
        Wt = null,
        wl = !1,
        $t = null,
        Sl = 0,
        gr = 0,
        vi = null,
        kl = -1,
        xl = 0;

    function Fe() {
        return (te & 6) !== 0 ? xe() : kl !== -1 ? kl : kl = xe()
    }

    function Qt(e) {
        return (e.mode & 1) === 0 ? 1 : (te & 2) !== 0 && ze !== 0 ? ze & -ze : uf.transition !== null ? (xl === 0 && (xl = iu()), xl) : (e = ue, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hu(e.type)), e)
    }

    function dt(e, t, n, r) {
        if (50 < gr) throw gr = 0, vi = null, Error(p(185));
        Hn(e, n, r), ((te & 2) === 0 || e !== Pe) && (e === Pe && ((te & 2) === 0 && (yl |= n), Ne === 4 && Kt(e, ze)), $e(e, r), n === 1 && te === 0 && (t.mode & 1) === 0 && (Rn = xe() + 500, Jr && At()))
    }

    function $e(e, t) {
        var n = e.callbackNode;
        ic(e, t);
        var r = zr(e, e === Pe ? ze : 0);
        if (r === 0) n !== null && ru(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && ru(n), t === 1) e.tag === 0 ? of (ha.bind(null, e)) : es(ha.bind(null, e)), tf(function() {
                (te & 6) === 0 && At()
            }), n = null;
            else {
                switch (uu(r)) {
                    case 1:
                        n = Gl;
                        break;
                    case 4:
                        n = lu;
                        break;
                    case 16:
                        n = jr;
                        break;
                    case 536870912:
                        n = ou;
                        break;
                    default:
                        n = jr
                }
                n = Ea(n, ma.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = n
        }
    }

    function ma(e, t) {
        if (kl = -1, xl = 0, (te & 6) !== 0) throw Error(p(327));
        var n = e.callbackNode;
        if (In() && e.callbackNode !== n) return null;
        var r = zr(e, e === Pe ? ze : 0);
        if (r === 0) return null;
        if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = El(e, r);
        else {
            t = r;
            var l = te;
            te |= 2;
            var o = ya();
            (Pe !== e || ze !== t) && (Pt = null, Rn = xe() + 500, on(e, t));
            do try {
                jf();
                break
            } catch (u) {
                va(e, u)
            }
            while (!0);
            Oo(), vl.current = o, te = l, _e !== null ? t = 0 : (Pe = null, ze = 0, t = Ne)
        }
        if (t !== 0) {
            if (t === 2 && (l = Yl(e), l !== 0 && (r = l, t = yi(e, l))), t === 1) throw n = vr, on(e, 0), Kt(e, r), $e(e, xe()), n;
            if (t === 6) Kt(e, r);
            else {
                if (l = e.current.alternate, (r & 30) === 0 && !Cf(l) && (t = El(e, r), t === 2 && (o = Yl(e), o !== 0 && (r = o, t = yi(e, o))), t === 1)) throw n = vr, on(e, 0), Kt(e, r), $e(e, xe()), n;
                switch (e.finishedWork = l, e.finishedLanes = r, t) {
                    case 0:
                    case 1:
                        throw Error(p(345));
                    case 2:
                        un(e, We, Pt);
                        break;
                    case 3:
                        if (Kt(e, r), (r & 130023424) === r && (t = mi + 500 - xe(), 10 < t)) {
                            if (zr(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                Fe(), e.pingedLanes |= e.suspendedLanes & l;
                                break
                            }
                            e.timeoutHandle = Eo(un.bind(null, e, We, Pt), t);
                            break
                        }
                        un(e, We, Pt);
                        break;
                    case 4:
                        if (Kt(e, r), (r & 4194240) === r) break;
                        for (t = e.eventTimes, l = -1; 0 < r;) {
                            var i = 31 - it(r);
                            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                        }
                        if (r = l, r = xe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _f(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Eo(un.bind(null, e, We, Pt), r);
                            break
                        }
                        un(e, We, Pt);
                        break;
                    case 5:
                        un(e, We, Pt);
                        break;
                    default:
                        throw Error(p(329))
                }
            }
        }
        return $e(e, xe()), e.callbackNode === n ? ma.bind(null, e) : null
    }

    function yi(e, t) {
        var n = yr;
        return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = El(e, t), e !== 2 && (t = We, We = n, t !== null && gi(t)), e
    }

    function gi(e) {
        We === null ? We = e : We.push.apply(We, e)
    }

    function Cf(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null))
                    for (var r = 0; r < n.length; r++) {
                        var l = n[r],
                            o = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!ut(o(), l)) return !1
                        } catch (i) {
                            return !1
                        }
                    }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Kt(e, t) {
        for (t &= ~pi, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - it(t),
                r = 1 << n;
            e[n] = -1, t &= ~r
        }
    }

    function ha(e) {
        if ((te & 6) !== 0) throw Error(p(327));
        In();
        var t = zr(e, 0);
        if ((t & 1) === 0) return $e(e, xe()), null;
        var n = El(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Yl(e);
            r !== 0 && (t = r, n = yi(e, r))
        }
        if (n === 1) throw n = vr, on(e, 0), Kt(e, t), $e(e, xe()), n;
        if (n === 6) throw Error(p(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, un(e, We, Pt), $e(e, xe()), null
    }

    function wi(e, t) {
        var n = te;
        te |= 1;
        try {
            return e(t)
        } finally {
            te = n, te === 0 && (Rn = xe() + 500, Jr && At())
        }
    }

    function ln(e) {
        $t !== null && $t.tag === 0 && (te & 6) === 0 && In();
        var t = te;
        te |= 1;
        var n = rt.transition,
            r = ue;
        try {
            if (rt.transition = null, ue = 1, e) return e()
        } finally {
            ue = r, rt.transition = n, te = t, (te & 6) === 0 && At()
        }
    }

    function Si() {
        Ze = zn.current, me(zn)
    }

    function on(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, ef(n)), _e !== null)
            for (n = _e.return; n !== null;) {
                var r = n;
                switch (Lo(r), r.tag) {
                    case 1:
                        r = r.type.childContextTypes, r != null && Gr();
                        break;
                    case 3:
                        Pn(), me(Be), me(Re), Ho();
                        break;
                    case 5:
                        Bo(r);
                        break;
                    case 4:
                        Pn();
                        break;
                    case 13:
                        me(ge);
                        break;
                    case 19:
                        me(ge);
                        break;
                    case 10:
                        Mo(r.type._context);
                        break;
                    case 22:
                    case 23:
                        Si()
                }
                n = n.return
            }
        if (Pe = e, _e = e = Xt(e.current, null), ze = Ze = t, Ne = 0, vr = null, pi = yl = rn = 0, We = yr = null, en !== null) {
            for (t = 0; t < en.length; t++)
                if (n = en[t], r = n.interleaved, r !== null) {
                    n.interleaved = null;
                    var l = r.next,
                        o = n.pending;
                    if (o !== null) {
                        var i = o.next;
                        o.next = l, r.next = i
                    }
                    n.pending = r
                }
            en = null
        }
        return e
    }

    function va(e, t) {
        do {
            var n = _e;
            try {
                if (Oo(), il.current = cl, ul) {
                    for (var r = we.memoizedState; r !== null;) {
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next
                    }
                    ul = !1
                }
                if (nn = 0, je = Ce = we = null, cr = !1, fr = 0, di.current = null, n === null || n.return === null) {
                    Ne = 1, vr = t, _e = null;
                    break
                }
                e: {
                    var o = e,
                        i = n.return,
                        u = n,
                        s = t;
                    if (t = ze, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var m = s,
                            g = u,
                            S = g.tag;
                        if ((g.mode & 1) === 0 && (S === 0 || S === 11 || S === 15)) {
                            var v = g.alternate;
                            v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null)
                        }
                        var C = Vs(i);
                        if (C !== null) {
                            C.flags &= -257, Hs(C, i, u, o, t), C.mode & 1 && Bs(o, m, t), t = C, s = m;
                            var L = t.updateQueue;
                            if (L === null) {
                                var T = new Set;
                                T.add(s), t.updateQueue = T
                            } else L.add(s);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Bs(o, m, t), ki();
                                break e
                            }
                            s = Error(p(426))
                        }
                    } else if (ve && u.mode & 1) {
                        var Ee = Vs(i);
                        if (Ee !== null) {
                            (Ee.flags & 65536) === 0 && (Ee.flags |= 256), Hs(Ee, i, u, o, t), Ro(Ln(s, u));
                            break e
                        }
                    }
                    o = s = Ln(s, u),
                    Ne !== 4 && (Ne = 2),
                    yr === null ? yr = [o] : yr.push(o),
                    o = i;do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var f = Us(o, s, t);
                                fs(o, f);
                                break e;
                            case 1:
                                u = s;
                                var a = o.type,
                                    d = o.stateNode;
                                if ((o.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Wt === null || !Wt.has(d)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t;
                                    var x = As(o, u, t);
                                    fs(o, x);
                                    break e
                                }
                        }
                        o = o.return
                    } while (o !== null)
                }
                wa(n)
            } catch (R) {
                t = R, _e === n && n !== null && (_e = n = n.return);
                continue
            }
            break
        } while (!0)
    }

    function ya() {
        var e = vl.current;
        return vl.current = cl, e === null ? cl : e
    }

    function ki() {
        (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4), Pe === null || (rn & 268435455) === 0 && (yl & 268435455) === 0 || Kt(Pe, ze)
    }

    function El(e, t) {
        var n = te;
        te |= 2;
        var r = ya();
        (Pe !== e || ze !== t) && (Pt = null, on(e, t));
        do try {
            Nf();
            break
        } catch (l) {
            va(e, l)
        }
        while (!0);
        if (Oo(), te = n, vl.current = r, _e !== null) throw Error(p(261));
        return Pe = null, ze = 0, Ne
    }

    function Nf() {
        for (; _e !== null;) ga(_e)
    }

    function jf() {
        for (; _e !== null && !Za();) ga(_e)
    }

    function ga(e) {
        var t = xa(e.alternate, e, Ze);
        e.memoizedProps = e.pendingProps, t === null ? wa(e) : _e = t, di.current = null
    }

    function wa(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (n = wf(n, t, Ze), n !== null) {
                    _e = n;
                    return
                }
            } else {
                if (n = Sf(n, t), n !== null) {
                    n.flags &= 32767, _e = n;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Ne = 6, _e = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                _e = t;
                return
            }
            _e = t = e
        } while (t !== null);
        Ne === 0 && (Ne = 5)
    }

    function un(e, t, n) {
        var r = ue,
            l = rt.transition;
        try {
            rt.transition = null, ue = 1, Pf(e, t, n, r)
        } finally {
            rt.transition = l, ue = r
        }
        return null
    }

    function Pf(e, t, n, r) {
        do In(); while ($t !== null);
        if ((te & 6) !== 0) throw Error(p(327));
        n = e.finishedWork;
        var l = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var o = n.lanes | n.childLanes;
        if (uc(e, o), e === Pe && (_e = Pe = null, ze = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || wl || (wl = !0, Ea(jr, function() {
                return In(), null
            })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
            o = rt.transition, rt.transition = null;
            var i = ue;
            ue = 1;
            var u = te;
            te |= 4, di.current = null, xf(e, n), aa(n, e), Xc(ko), Or = !!So, ko = So = null, e.current = n, Ef(n), qa(), te = u, ue = i, rt.transition = o
        } else e.current = n;
        if (wl && (wl = !1, $t = e, Sl = l), o = e.pendingLanes, o === 0 && (Wt = null), tc(n.stateNode), $e(e, xe()), t !== null)
            for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
        if (gl) throw gl = !1, e = hi, hi = null, e;
        return (Sl & 1) !== 0 && e.tag !== 0 && In(), o = e.pendingLanes, (o & 1) !== 0 ? e === vi ? gr++ : (gr = 0, vi = e) : gr = 0, At(), null
    }

    function In() {
        if ($t !== null) {
            var e = uu(Sl),
                t = rt.transition,
                n = ue;
            try {
                if (rt.transition = null, ue = 16 > e ? 16 : e, $t === null) var r = !1;
                else {
                    if (e = $t, $t = null, Sl = 0, (te & 6) !== 0) throw Error(p(331));
                    var l = te;
                    for (te |= 4, N = e.current; N !== null;) {
                        var o = N,
                            i = o.child;
                        if ((N.flags & 16) !== 0) {
                            var u = o.deletions;
                            if (u !== null) {
                                for (var s = 0; s < u.length; s++) {
                                    var m = u[s];
                                    for (N = m; N !== null;) {
                                        var g = N;
                                        switch (g.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                hr(8, g, o)
                                        }
                                        var S = g.child;
                                        if (S !== null) S.return = g, N = S;
                                        else
                                            for (; N !== null;) {
                                                g = N;
                                                var v = g.sibling,
                                                    C = g.return;
                                                if (la(g), g === m) {
                                                    N = null;
                                                    break
                                                }
                                                if (v !== null) {
                                                    v.return = C, N = v;
                                                    break
                                                }
                                                N = C
                                            }
                                    }
                                }
                                var L = o.alternate;
                                if (L !== null) {
                                    var T = L.child;
                                    if (T !== null) {
                                        L.child = null;
                                        do {
                                            var Ee = T.sibling;
                                            T.sibling = null, T = Ee
                                        } while (T !== null)
                                    }
                                }
                                N = o
                            }
                        }
                        if ((o.subtreeFlags & 2064) !== 0 && i !== null) i.return = o, N = i;
                        else e: for (; N !== null;) {
                            if (o = N, (o.flags & 2048) !== 0) switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    hr(9, o, o.return)
                            }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return, N = f;
                                break e
                            }
                            N = o.return
                        }
                    }
                    var a = e.current;
                    for (N = a; N !== null;) {
                        i = N;
                        var d = i.child;
                        if ((i.subtreeFlags & 2064) !== 0 && d !== null) d.return = i, N = d;
                        else e: for (i = a; N !== null;) {
                            if (u = N, (u.flags & 2048) !== 0) try {
                                switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        hl(9, u)
                                }
                            } catch (R) {
                                ke(u, u.return, R)
                            }
                            if (u === i) {
                                N = null;
                                break e
                            }
                            var x = u.sibling;
                            if (x !== null) {
                                x.return = u.return, N = x;
                                break e
                            }
                            N = u.return
                        }
                    }
                    if (te = l, At(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
                        vt.onPostCommitFiberRoot(Pr, e)
                    } catch (R) {}
                    r = !0
                }
                return r
            } finally {
                ue = n, rt.transition = t
            }
        }
        return !1
    }

    function Sa(e, t, n) {
        t = Ln(n, t), t = Us(e, t, 1), e = Vt(e, t, 1), t = Fe(), e !== null && (Hn(e, 1, t), $e(e, t))
    }

    function ke(e, t, n) {
        if (e.tag === 3) Sa(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Sa(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                        e = Ln(n, e), e = As(t, e, 1), t = Vt(t, e, 1), e = Fe(), t !== null && (Hn(t, 1, e), $e(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function Lf(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Fe(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (ze & n) === n && (Ne === 4 || Ne === 3 && (ze & 130023424) === ze && 500 > xe() - mi ? on(e, 0) : pi |= n), $e(e, t)
    }

    function ka(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Tr, Tr <<= 1, (Tr & 130023424) === 0 && (Tr = 4194304)));
        var n = Fe();
        e = Ct(e, t), e !== null && (Hn(e, t, n), $e(e, n))
    }

    function Tf(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), ka(e, n)
    }

    function zf(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var r = e.stateNode,
                    l = e.memoizedState;
                l !== null && (n = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(p(314))
        }
        r !== null && r.delete(t), ka(e, n)
    }
    var xa;
    xa = function(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || Be.current) He = !0;
            else {
                if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return He = !1, gf(e, t, n);
                He = (e.flags & 131072) !== 0
            }
        else He = !1, ve && (t.flags & 1048576) !== 0 && ts(t, qr, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                pl(e, t), e = t.pendingProps;
                var l = kn(t, Re.current);
                jn(t, n), l = Qo(null, t, r, e, l, n);
                var o = Ko();
                return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (o = !0, Yr(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Uo(t), l.updater = fl, t.stateNode = l, l._reactInternals = t, qo(t, r, e, n), t = ni(null, t, r, !0, o, n)) : (t.tag = 0, ve && o && Po(t), De(null, t, l, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (pl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = If(r), e = at(r, e), l) {
                        case 0:
                            t = ti(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Gs(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Ws(null, t, r, e, n);
                            break e;
                        case 14:
                            t = $s(null, t, r, at(r.type, e), n);
                            break e
                    }
                    throw Error(p(306, r, ""))
                }
                return t;
            case 0:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), ti(e, t, r, l, n);
            case 1:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Gs(e, t, r, l, n);
            case 3:
                e: {
                    if (Ys(t), e === null) throw Error(p(387));r = t.pendingProps,
                    o = t.memoizedState,
                    l = o.element,
                    cs(e, t),
                    ll(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated)
                        if (o = {
                                element: r,
                                isDehydrated: !1,
                                cache: i.cache,
                                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                                transitions: i.transitions
                            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                            l = Ln(Error(p(423)), t), t = Js(e, t, r, n, l);
                            break e
                        } else if (r !== l) {
                        l = Ln(Error(p(424)), t), t = Js(e, t, r, n, l);
                        break e
                    } else
                        for (Je = Dt(t.stateNode.containerInfo.firstChild), Ye = t, ve = !0, st = null, n = ss(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (_n(), r === l) {
                            t = jt(e, t, n);
                            break e
                        }
                        De(e, t, r, n)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return ps(t), e === null && zo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, xo(r, l) ? i = null : o !== null && xo(r, o) && (t.flags |= 32), Xs(e, t), De(e, t, i, n), t.child;
            case 6:
                return e === null && zo(t), null;
            case 13:
                return Zs(e, t, n);
            case 4:
                return Ao(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Cn(t, null, r, n) : De(e, t, r, n), t.child;
            case 11:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), Ws(e, t, r, l, n);
            case 7:
                return De(e, t, t.pendingProps, n), t.child;
            case 8:
                return De(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return De(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, de(tl, r._currentValue), r._currentValue = i, o !== null)
                        if (ut(o.value, i)) {
                            if (o.children === l.children && !Be.current) {
                                t = jt(e, t, n);
                                break e
                            }
                        } else
                            for (o = t.child, o !== null && (o.return = t); o !== null;) {
                                var u = o.dependencies;
                                if (u !== null) {
                                    i = o.child;
                                    for (var s = u.firstContext; s !== null;) {
                                        if (s.context === r) {
                                            if (o.tag === 1) {
                                                s = Nt(-1, n & -n), s.tag = 2;
                                                var m = o.updateQueue;
                                                if (m !== null) {
                                                    m = m.shared;
                                                    var g = m.pending;
                                                    g === null ? s.next = s : (s.next = g.next, g.next = s), m.pending = s
                                                }
                                            }
                                            o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Do(o.return, n, t), u.lanes |= n;
                                            break
                                        }
                                        s = s.next
                                    }
                                } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                                else if (o.tag === 18) {
                                    if (i = o.return, i === null) throw Error(p(341));
                                    i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Do(i, n, t), i = o.sibling
                                } else i = o.child;
                                if (i !== null) i.return = o;
                                else
                                    for (i = o; i !== null;) {
                                        if (i === t) {
                                            i = null;
                                            break
                                        }
                                        if (o = i.sibling, o !== null) {
                                            o.return = i.return, i = o;
                                            break
                                        }
                                        i = i.return
                                    }
                                o = i
                            }
                    De(e, t, l.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return l = t.type, r = t.pendingProps.children, jn(t, n), l = tt(l), r = r(l), t.flags |= 1, De(e, t, r, n), t.child;
            case 14:
                return r = t.type, l = at(r, t.pendingProps), l = at(r.type, l), $s(e, t, r, l, n);
            case 15:
                return Qs(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : at(r, l), pl(e, t), t.tag = 1, Ve(r) ? (e = !0, Yr(t)) : e = !1, jn(t, n), Ds(t, r, l), qo(t, r, l, n), ni(null, t, r, !0, e, n);
            case 19:
                return bs(e, t, n);
            case 22:
                return Ks(e, t, n)
        }
        throw Error(p(156, t.tag))
    };

    function Ea(e, t) {
        return nu(e, t)
    }

    function Rf(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function lt(e, t, n, r) {
        return new Rf(e, t, n, r)
    }

    function xi(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function If(e) {
        if (typeof e == "function") return xi(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === mt) return 11;
            if (e === ht) return 14
        }
        return 2
    }

    function Xt(e, t) {
        var n = e.alternate;
        return n === null ? (n = lt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function _l(e, t, n, r, l, o) {
        var i = 2;
        if (r = e, typeof e == "function") xi(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch (e) {
            case J:
                return sn(n.children, l, o, t);
            case ce:
                i = 8, l |= 8;
                break;
            case Ue:
                return e = lt(12, n, t, l | 2), e.elementType = Ue, e.lanes = o, e;
            case Ke:
                return e = lt(13, n, t, l), e.elementType = Ke, e.lanes = o, e;
            case ot:
                return e = lt(19, n, t, l), e.elementType = ot, e.lanes = o, e;
            case Se:
                return Cl(n, l, o, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case qe:
                        i = 10;
                        break e;
                    case pt:
                        i = 9;
                        break e;
                    case mt:
                        i = 11;
                        break e;
                    case ht:
                        i = 14;
                        break e;
                    case Ae:
                        i = 16, r = null;
                        break e
                }
                throw Error(p(130, e == null ? e : typeof e, ""))
        }
        return t = lt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
    }

    function sn(e, t, n, r) {
        return e = lt(7, e, r, t), e.lanes = n, e
    }

    function Cl(e, t, n, r) {
        return e = lt(22, e, r, t), e.elementType = Se, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e
    }

    function Ei(e, t, n) {
        return e = lt(6, e, null, t), e.lanes = n, e
    }

    function _i(e, t, n) {
        return t = lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Of(e, t, n, r, l) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
    }

    function Ci(e, t, n, r, l, o, i, u, s) {
        return e = new Of(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = lt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Uo(o), e
    }

    function Mf(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ae,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }

    function _a(e) {
        if (!e) return Ut;
        e = e._reactInternals;
        e: {
            if (Yt(e) !== e || e.tag !== 1) throw Error(p(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ve(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(p(171))
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Ve(n)) return qu(e, n, t)
        }
        return t
    }

    function Ca(e, t, n, r, l, o, i, u, s) {
        return e = Ci(n, r, !0, e, l, o, i, u, s), e.context = _a(null), n = e.current, r = Fe(), l = Qt(n), o = Nt(r, l), o.callback = t != null ? t : null, Vt(n, o, l), e.current.lanes = l, Hn(e, l, r), $e(e, r), e
    }

    function Nl(e, t, n, r) {
        var l = t.current,
            o = Fe(),
            i = Qt(l);
        return n = _a(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(l, t, i), e !== null && (dt(e, l, i, o), rl(e, l, i)), i
    }

    function jl(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Na(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Ni(e, t) {
        Na(e, t), (e = e.alternate) && Na(e, t)
    }

    function Df() {
        return null
    }
    var ja = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function ji(e) {
        this._internalRoot = e
    }
    Pl.prototype.render = ji.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(p(409));
        Nl(e, t, null, null)
    }, Pl.prototype.unmount = ji.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ln(function() {
                Nl(null, e, null, null)
            }), t[kt] = null
        }
    };

    function Pl(e) {
        this._internalRoot = e
    }
    Pl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = cu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
            It.splice(n, 0, e), n === 0 && pu(e)
        }
    };

    function Pi(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Ll(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Pa() {}

    function Ff(e, t, n, r, l) {
        if (l) {
            if (typeof r == "function") {
                var o = r;
                r = function() {
                    var m = jl(i);
                    o.call(m)
                }
            }
            var i = Ca(t, r, e, 0, null, !1, !1, "", Pa);
            return e._reactRootContainer = i, e[kt] = i.current, nr(e.nodeType === 8 ? e.parentNode : e), ln(), i
        }
        for (; l = e.lastChild;) e.removeChild(l);
        if (typeof r == "function") {
            var u = r;
            r = function() {
                var m = jl(s);
                u.call(m)
            }
        }
        var s = Ci(e, 0, !1, null, null, !1, !1, "", Pa);
        return e._reactRootContainer = s, e[kt] = s.current, nr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
            Nl(t, s, n, r)
        }), s
    }

    function Tl(e, t, n, r, l) {
        var o = n._reactRootContainer;
        if (o) {
            var i = o;
            if (typeof l == "function") {
                var u = l;
                l = function() {
                    var s = jl(i);
                    u.call(s)
                }
            }
            Nl(t, i, e, l)
        } else i = Ff(n, t, e, l, r);
        return jl(i)
    }
    su = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Vn(t.pendingLanes);
                    n !== 0 && (Zl(t, n | 1), $e(t, xe()), (te & 6) === 0 && (Rn = xe() + 500, At()))
                }
                break;
            case 13:
                ln(function() {
                    var r = Ct(e, 1);
                    if (r !== null) {
                        var l = Fe();
                        dt(r, e, 1, l)
                    }
                }), Ni(e, 1)
        }
    }, ql = function(e) {
        if (e.tag === 13) {
            var t = Ct(e, 134217728);
            if (t !== null) {
                var n = Fe();
                dt(t, e, 134217728, n)
            }
            Ni(e, 134217728)
        }
    }, au = function(e) {
        if (e.tag === 13) {
            var t = Qt(e),
                n = Ct(e, t);
            if (n !== null) {
                var r = Fe();
                dt(n, e, t, r)
            }
            Ni(e, t)
        }
    }, cu = function() {
        return ue
    }, fu = function(e, t) {
        var n = ue;
        try {
            return ue = e, t()
        } finally {
            ue = n
        }
    }, $l = function(e, t, n) {
        switch (t) {
            case "input":
                if (Dl(e, n), t = n.name, n.type === "radio" && t != null) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var l = Xr(r);
                            if (!l) throw Error(p(90));
                            Mi(r), Dl(r, l)
                        }
                    }
                }
                break;
            case "textarea":
                Bi(e, n);
                break;
            case "select":
                t = n.value, t != null && an(e, !!n.multiple, t, !1)
        }
    }, Yi = wi, Ji = ln;
    var Uf = {
            usingClientEntryPoint: !1,
            Events: [or, wn, Xr, Xi, Gi, wi]
        },
        wr = {
            findFiberByHostInstance: Jt,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        Af = {
            bundleType: wr.bundleType,
            version: wr.version,
            rendererPackageName: wr.rendererPackageName,
            rendererConfig: wr.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: K.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = eu(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: wr.findFiberByHostInstance || Df,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
        var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zl.isDisabled && zl.supportsFiber) try {
            Pr = zl.inject(Af), vt = zl
        } catch (e) {}
    }
    return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf, Qe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Pi(t)) throw Error(p(200));
        return Mf(e, t, null, n)
    }, Qe.createRoot = function(e, t) {
        if (!Pi(e)) throw Error(p(299));
        var n = !1,
            r = "",
            l = ja;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ci(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, nr(e.nodeType === 8 ? e.parentNode : e), new ji(t)
    }, Qe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
        return e = eu(t), e = e === null ? null : e.stateNode, e
    }, Qe.flushSync = function(e) {
        return ln(e)
    }, Qe.hydrate = function(e, t, n) {
        if (!Ll(t)) throw Error(p(200));
        return Tl(null, e, t, !0, n)
    }, Qe.hydrateRoot = function(e, t, n) {
        if (!Pi(e)) throw Error(p(405));
        var r = n != null && n.hydratedSources || null,
            l = !1,
            o = "",
            i = ja;
        if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ca(t, null, e, 1, n != null ? n : null, l, !1, o, i), e[kt] = t.current, nr(e), r)
            for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
        return new Pl(t)
    }, Qe.render = function(e, t, n) {
        if (!Ll(t)) throw Error(p(200));
        return Tl(null, e, t, !1, n)
    }, Qe.unmountComponentAtNode = function(e) {
        if (!Ll(e)) throw Error(p(40));
        return e._reactRootContainer ? (ln(function() {
            Tl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[kt] = null
            })
        }), !0) : !1
    }, Qe.unstable_batchedUpdates = wi, Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Ll(n)) throw Error(p(200));
        if (e == null || e._reactInternals === void 0) throw Error(p(38));
        return Tl(e, t, n, !1, r)
    }, Qe.version = "18.3.1-next-f1338f8080-20240426", Qe
}
var Ua;

function bf() {
    if (Ua) return zi.exports;
    Ua = 1;

    function w() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)
        } catch (E) {
            console.error(E)
        }
    }
    return w(), zi.exports = qf(), zi.exports
}
var Aa;

function ed() {
    if (Aa) return Il;
    Aa = 1;
    var w = bf();
    return Il.createRoot = w.createRoot, Il.hydrateRoot = w.hydrateRoot, Il
}
var td = ed();
const nd = Ha(td),
    Wa = W.createContext(null),
    rd = "https://southamerica-east1-dubathon-80a5a.cloudfunctions.net/api";

function ld(w) {
    try {
        const E = w.split(".");
        return E.length !== 3 ? null : JSON.parse(atob(E[1]))
    } catch (E) {
        return console.error("Failed to decode JWT:", E), null
    }
}

function od({
    children: w
}) {
    const [E, p] = W.useState(null), [G, k] = W.useState(null), [A, Y] = W.useState(!1), [H, M] = W.useState(!0), [ne, ee] = W.useState(null), [b, P] = W.useState(!0);
    W.useEffect(() => {
        window.Twitch && window.Twitch.ext ? (window.Twitch.ext.onAuthorized(I => Lt(null, null, function*() {
            var K, ye, ae;
            p(I.token);
            const z = ld(I.token),
                se = (z == null ? void 0 : z.user_id) || I.userId,
                O = se && !se.startsWith("U");
            P(O);
            let V = null;
            if (O && ((K = window.Twitch.ext.viewer) != null && K.helixToken)) try {
                const J = yield fetch("https://api.twitch.tv/helix/users", {
                    headers: {
                        Authorization: `Extension ${window.Twitch.ext.viewer.helixToken}`,
                        "Client-Id": I.clientId
                    }
                });
                if (J.ok) {
                    const ce = yield J.json();
                    (ae = (ye = ce.data) == null ? void 0 : ye[0]) != null && ae.display_name && (V = ce.data[0].display_name)
                }
            } catch (J) {}
            k({
                id: se,
                channelId: I.channelId,
                displayName: V
            }), Y(!0), M(!1)
        })), window.Twitch.ext.onError(I => {
            console.error("❌ Twitch error:", I), ee("Erro ao conectar com Twitch: " + (I.message || I)), M(!1)
        }), window.Twitch.ext.onContext(I => {
            I.theme && document.body.setAttribute("data-theme", I.theme)
        })) : (console.error("❌ Twitch Extension Helper not found!"), M(!1), ee("Extension Helper não encontrado"))
    }, []);
    const $ = {
        token: E,
        user: G,
        isAuthorized: A,
        isLoading: H,
        error: ne,
        apiCall: (se, ...O) => Lt(null, [se, ...O], function*(I, z = {}) {
            if (!E) throw console.error("❌ API Call without token!"), new Error("Not authorized");
            let V = `${rd}${I}`;
            if (G != null && G.displayName) {
                const K = V.includes("?") ? "&" : "?";
                V += `${K}displayName=${encodeURIComponent(G.displayName)}`
            }
            try {
                const K = yield fetch(V, Rl(On({}, z), {
                    headers: On({
                        "Content-Type": "application/json",
                        "X-Extension-JWT": E
                    }, z.headers)
                }));
                if (!K.ok) {
                    const ae = yield K.json().catch(() => ({}));
                    throw console.error("❌ API Error:", ae), new Error(ae.error || `API Error: ${K.status}`)
                }
                return yield K.json()
            } catch (K) {
                throw console.error("❌ Fetch Error:", K), K
            }
        }),
        hasSharedIdentity: b
    };
    return h.jsx(Wa.Provider, {
        value: $,
        children: w
    })
}

function kr() {
    const w = W.useContext(Wa);
    if (!w) throw new Error("useTwitch must be used within TwitchProvider");
    return w
}

function Ol() {
    return h.jsxs("div", {
        className: "loading",
        children: [h.jsx("div", {
            className: "spinner"
        }), h.jsx("span", {
            children: "Carregando..."
        })]
    })
}

function id({
    refreshTrigger: w
}) {
    const {
        apiCall: E
    } = kr(), [p, G] = W.useState([]), [k, A] = W.useState(null), [Y, H] = W.useState(!0), [M, ne] = W.useState(!1), [ee, b] = W.useState(0), [P, Q] = W.useState(!1);
    W.useEffect(() => {
        I()
    }, []), W.useEffect(() => {
        w && I()
    }, [w]), W.useEffect(() => {
        if (ee > 0) {
            const O = setTimeout(() => b(ee - 1), 1e3);
            return () => clearTimeout(O)
        }
    }, [ee]);
    const $ = O => Lt(null, null, function*() {
            if (!(P || (k == null ? void 0 : k.item_id) === O.item_id)) {
                Q(!0), ne(!0);
                try {
                    yield E("/equip", {
                        method: "POST",
                        body: JSON.stringify({
                            item_id: O.item_id
                        })
                    }), A(O)
                } catch (V) {
                    console.error("Error equipping item:", V)
                }
                setTimeout(() => {
                    ne(!1), Q(!1)
                }, 3e3)
            }
        }),
        I = () => Lt(null, null, function*() {
            try {
                const [O, V] = yield Promise.all([E("/inventory"), E("/equipped")]);
                G(O.inventory || []), A(V.equipped)
            } catch (O) {
                console.error("Error loading inventory:", O)
            } finally {
                H(!1)
            }
        });
    if (Y) return h.jsx("div", {
        className: "inventory-loading",
        children: "Carregando inventário..."
    });
    const z = p.reduce((O, V) => {
            const K = V.item_id;
            return O[K] || (O[K] = Rl(On({}, V), {
                count: 0
            })), O[K].count++, O
        }, {}),
        se = Object.values(z).sort((O, V) => {
            var ae, J, ce, Ue, qe, pt;
            const K = (ce = (J = (ae = O.rarity_weight) != null ? ae : O.weight) != null ? J : O.drop_rate) != null ? ce : 100,
                ye = (pt = (qe = (Ue = V.rarity_weight) != null ? Ue : V.weight) != null ? qe : V.drop_rate) != null ? pt : 100;
            return K - ye
        });
    return p.length === 0 ? h.jsxs("div", {
        className: "inventory-empty",
        children: [h.jsx("p", {
            children: "Inventário vazio"
        }), h.jsx("p", {
            className: "hint",
            children: "Role no gacha para ganhar itens!"
        })]
    }) : h.jsxs("div", {
        className: "inventory",
        children: [M && h.jsx(Ol, {}), h.jsxs("div", {
            className: "equipped-section",
            children: [h.jsx("span", {
                className: "equipped-label",
                children: "Equipado:"
            }), k ? h.jsxs("div", {
                className: "equipped-item",
                children: [h.jsx("div", {
                    className: "item-image",
                    children: k.image_url ? h.jsx("img", {
                        src: k.image_url,
                        alt: k.name
                    }) : "⚔️"
                }), h.jsx("span", {
                    className: "item-name",
                    children: k.name
                })]
            }) : h.jsx("span", {
                className: "no-equipped",
                children: "Nenhum"
            })]
        }), h.jsx("div", {
            className: "inventory-grid",
            children: se.map(O => {
                var J, ce, Ue;
                const V = O.rarity_color || O.color,
                    ye = ((Ue = (ce = (J = O.rarity_weight) != null ? J : O.weight) != null ? ce : O.drop_rate) != null ? Ue : 100) <= 10,
                    ae = V ? {
                        borderColor: V,
                        boxShadow: ye ? `0 0 8px ${V}40` : void 0
                    } : {};
                return h.jsxs("div", {
                    className: `item ${(k==null?void 0:k.item_id)===O.item_id?"is-equipped":""} ${P?"cooldown":""}`,
                    style: ae,
                    title: `${O.name}${O.rarity_name?` (${O.rarity_name})`:""} - Clique para equipar`,
                    onClick: () => $(O),
                    children: [O.image_url ? h.jsx("img", {
                        src: O.image_url,
                        alt: O.name
                    }) : h.jsx("span", {
                        className: "item-emoji",
                        children: "🎁"
                    }), h.jsx("span", {
                        className: "item-name",
                        children: O.name
                    }), O.count > 1 && h.jsxs("span", {
                        className: "item-count",
                        children: ["x", O.count]
                    })]
                }, O.item_id)
            })
        })]
    })
}

function ud({
    coins: w,
    rollCost: E = 100,
    onRoll: p,
    onSpendCoins: G
}) {
    const {
        apiCall: k
    } = kr(), [A, Y] = W.useState(!1), [H, M] = W.useState(!1), [ne, ee] = W.useState(null), [b, P] = W.useState(null), [Q, $] = W.useState(0), I = W.useRef(null);
    W.useEffect(() => () => {
        I.current && clearInterval(I.current)
    }, []);
    const z = E || 100,
        se = w >= z && !A && !H && Q === 0,
        O = () => Lt(null, null, function*() {
            if (se) {
                Y(!0), P(null), ee(null), G && w >= z && G(z);
                try {
                    const V = yield k("/roll", {
                        method: "POST"
                    });
                    V.queued ? (ee("Roll enviado! Veja o resultado na live"), M(!0), setTimeout(() => M(!1), 3e3)) : V.success ? ee("Roll processado!") : P(V.error || "Erro desconhecido"), setTimeout(() => ee(null), 4e3)
                } catch (V) {
                    P(V.message)
                } finally {
                    Y(!1), $(3), I.current = setInterval(() => {
                        $(V => V <= 1 ? (clearInterval(I.current), 0) : V - 1)
                    }, 1e3)
                }
            }
        });
    return h.jsxs("div", {
        className: "gacha",
        children: [H && h.jsx(Ol, {}), h.jsx("div", {
            className: "gacha-display",
            children: A ? h.jsx("div", {
                className: "gacha-rolling",
                children: h.jsx("span", {
                    children: "Enviando..."
                })
            }) : ne ? h.jsx("div", {
                className: "gacha-success",
                children: h.jsx("span", {
                    children: ne
                })
            }) : h.jsxs("div", {
                className: "gacha-idle",
                children: [h.jsx("p", {
                    children: "Tente a sorte!"
                }), h.jsx("p", {
                    className: "idle-hint",
                    children: "O resultado aparece na live do streamer"
                })]
            })
        }), b && h.jsx("div", {
            className: "gacha-error",
            children: b
        }), h.jsx("button", {
            className: `roll-button ${se?"":"disabled"}`,
            onClick: O,
            disabled: !se,
            children: A ? "Enviando..." : Q > 0 ? `Aguarde (${Q}s)` : `Atirar (${z} pedras)`
        }), h.jsxs("div", {
            className: "gacha-info",
            children: ["Suas pedras: ", w]
        })]
    })
}

function sd({
    refreshTrigger: w
}) {
    const {
        apiCall: E
    } = kr(), [p, G] = W.useState([]), [k, A] = W.useState(null), [Y, H] = W.useState(!0), [M, ne] = W.useState(null);
    W.useEffect(() => {
        ee()
    }, [w]);
    const ee = () => Lt(null, null, function*() {
        var P;
        try {
            H(!0), ne(null);
            const Q = yield E("/leaderboard");
            console.log("[Ranking] API Response:", JSON.stringify(Q, null, 2)), console.log("[Ranking] Leaderboard display_names:", (P = Q.leaderboard) == null ? void 0 : P.map($ => $.display_name)), console.log("[Ranking] CurrentUser:", Q.currentUser), G(Q.leaderboard || []), A(Q.currentUser || null)
        } catch (Q) {
            console.error("Error loading leaderboard:", Q), ne(Q.message)
        } finally {
            H(!1)
        }
    });
    if (Y) return h.jsx("div", {
        className: "ranking-loading",
        children: "Carregando ranking..."
    });
    if (M) return h.jsxs("div", {
        className: "ranking-error",
        children: [h.jsx("p", {
            children: "Erro ao carregar ranking"
        }), h.jsx("button", {
            onClick: ee,
            children: "Tentar novamente"
        })]
    });
    if (p.length === 0) return h.jsx("div", {
        className: "ranking-empty",
        children: h.jsx("p", {
            children: "Nenhum usuário no ranking ainda"
        })
    });
    const b = (P, Q, $ = !1, I = null) => {
        const z = I !== null ? I : Q + 1,
            se = z <= 3;
        return h.jsxs("div", {
            className: `ranking-item ${se?`top-${z}`:""} ${$?"current-user":""}`,
            children: [h.jsx("div", {
                className: "ranking-position",
                children: se ? h.jsx("span", {
                    className: `medal medal-${z}`,
                    children: z === 1 ? "🥇" : z === 2 ? "🥈" : "🥉"
                }) : h.jsx("span", {
                    className: "position-number",
                    children: z
                })
            }), h.jsxs("div", {
                className: "ranking-user",
                children: [P.profile_image_url && h.jsx("img", {
                    src: P.profile_image_url,
                    alt: "",
                    className: "user-avatar",
                    onError: O => O.target.style.display = "none"
                }), h.jsxs("div", {
                    className: "user-info",
                    children: [h.jsxs("span", {
                        className: "user-name",
                        children: [P.display_name, $ && h.jsx("span", {
                            className: "you-badge",
                            children: "você"
                        })]
                    }), h.jsxs("span", {
                        className: "user-level",
                        children: ["Lvl ", P.level || 1]
                    })]
                })]
            }), h.jsxs("div", {
                className: "ranking-points",
                children: [h.jsx("span", {
                    className: "points-value",
                    children: (P.points || 0).toLocaleString("pt-BR")
                }), h.jsx("span", {
                    className: "points-label",
                    children: "pts"
                })]
            }), P.item_name && h.jsx("div", {
                className: "ranking-item-badge",
                style: {
                    borderColor: P.item_rarity_color || "#666"
                },
                title: P.item_name,
                children: P.item_image ? h.jsx("img", {
                    src: P.item_image,
                    alt: P.item_name
                }) : h.jsx("span", {
                    className: "item-initial",
                    children: P.item_name.charAt(0)
                })
            })]
        }, P.user_id || `user-${z}`)
    };
    return h.jsxs("div", {
        className: "ranking",
        children: [h.jsx("div", {
            className: "ranking-list",
            children: p.map((P, Q) => {
                var I, z, se, O;
                const $ = k && (k.inTop10 && k.rank === Q + 1 || ((I = P.twitch_display_name) == null ? void 0 : I.toLowerCase()) === ((z = k.display_name) == null ? void 0 : z.toLowerCase()) || ((se = P.display_name) == null ? void 0 : se.toLowerCase()) === ((O = k.display_name) == null ? void 0 : O.toLowerCase()) || P.twitch_id && k.twitch_id && String(P.twitch_id) === String(k.twitch_id));
                return b(P, Q, $)
            })
        }), k && !k.inTop10 && !p.some(P => {
            var Q, $, I, z;
            return ((Q = P.twitch_display_name) == null ? void 0 : Q.toLowerCase()) === (($ = k.display_name) == null ? void 0 : $.toLowerCase()) || ((I = P.display_name) == null ? void 0 : I.toLowerCase()) === ((z = k.display_name) == null ? void 0 : z.toLowerCase()) || P.twitch_id && k.twitch_id && String(P.twitch_id) === String(k.twitch_id)
        }) && h.jsxs("div", {
            className: "ranking-current-user-section",
            children: [h.jsx("div", {
                className: "ranking-separator",
                children: h.jsx("span", {
                    children: "• • •"
                })
            }), b(k, 0, !0, k.rank || "?")]
        })]
    })
}
const ad = ({
    size: w = 16,
    style: E = {}
}) => h.jsxs("svg", {
    viewBox: "0 0 100 120",
    width: w,
    height: w * 1.2,
    style: On({
        display: "inline-block",
        verticalAlign: "middle"
    }, E),
    children: [h.jsxs("defs", {
        children: [h.jsxs("linearGradient", {
            id: "stoneGradExt",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [h.jsx("stop", {
                offset: "0%",
                stopColor: "#9b59b6"
            }), h.jsx("stop", {
                offset: "30%",
                stopColor: "#8e44ad"
            }), h.jsx("stop", {
                offset: "60%",
                stopColor: "#7d3c98"
            }), h.jsx("stop", {
                offset: "100%",
                stopColor: "#5b2c6f"
            })]
        }), h.jsxs("linearGradient", {
            id: "shineGradExt",
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [h.jsx("stop", {
                offset: "0%",
                stopColor: "#c39bd3",
                stopOpacity: "0.8"
            }), h.jsx("stop", {
                offset: "50%",
                stopColor: "#a569bd",
                stopOpacity: "0.4"
            }), h.jsx("stop", {
                offset: "100%",
                stopColor: "#7d3c98",
                stopOpacity: "0"
            })]
        })]
    }), h.jsxs("g", {
        children: [h.jsx("polygon", {
            points: "50,5 95,45 85,95 50,115 15,95 5,45",
            fill: "url(#stoneGradExt)"
        }), h.jsx("polygon", {
            points: "50,5 95,45 50,65",
            fill: "#a569bd",
            opacity: "0.9"
        }), h.jsx("polygon", {
            points: "50,5 5,45 50,65",
            fill: "#8e44ad",
            opacity: "0.95"
        }), h.jsx("polygon", {
            points: "95,45 85,95 50,65",
            fill: "#7d3c98",
            opacity: "0.85"
        }), h.jsx("polygon", {
            points: "5,45 15,95 50,65",
            fill: "#9b59b6",
            opacity: "0.9"
        }), h.jsx("polygon", {
            points: "85,95 50,115 50,65",
            fill: "#5b2c6f",
            opacity: "0.95"
        }), h.jsx("polygon", {
            points: "15,95 50,115 50,65",
            fill: "#6c3483",
            opacity: "0.9"
        }), h.jsx("polygon", {
            points: "50,5 70,25 50,40 30,25",
            fill: "url(#shineGradExt)"
        })]
    })]
});

function Ba(w, E) {
    var p;
    if (!E) return w * 100;
    switch (E.type) {
        case "fixed":
            return E.fixedXpPerLevel || 100;
        case "linear":
            return w * (E.linearXpPerLevel || 100);
        case "exponential":
            const G = E.exponentialBase || 100,
                k = E.exponentialMultiplier || 1.5;
            return Math.floor(G * Math.pow(k, w - 1));
        case "doubling":
            return (E.doublingBase || 50) * Math.pow(2, w - 1);
        case "custom":
            const Y = (E.customLevels || []).find(M => M.level === w);
            if (Y) return Y.xpRequired;
            const H = (p = E.customLevels) == null ? void 0 : p[E.customLevels.length - 1];
            if (H && w > H.level) {
                const M = H.xpRequired / H.level;
                return Math.floor(M * w)
            }
            return w * 100;
        default:
            return w * 100
    }
}

function cd(w, E, p) {
    if (E < 1) return {
        xpInLevel: 0,
        xpForNext: 100,
        progress: 0
    };
    let G = 0;
    for (let H = 1; H < E; H++) G += Ba(H + 1, p);
    const k = Math.max(0, w - G),
        A = Ba(E + 1, p),
        Y = A > 0 ? Math.min(100, k / A * 100) : 0;
    return {
        xpInLevel: k,
        xpForNext: A,
        progress: Y
    }
}

function fd() {
    const {
        apiCall: w,
        hasSharedIdentity: E
    } = kr(), [p, G] = W.useState("inventory"), [k, A] = W.useState(null), [Y, H] = W.useState({
        roll_cost: 100,
        levels_progression: null
    }), [M, ne] = W.useState(!0), [ee, b] = W.useState(!1), [P, Q] = W.useState(null), [$, I] = W.useState(0), [z, se] = W.useState(null);
    W.useEffect(() => {
        O()
    }, []);
    const O = () => Lt(null, null, function*() {
        try {
            const [J, ce] = yield Promise.all([w("/configV2"), w("/user")]);
            H(J || {
                roll_cost: 100,
                levels_progression: null
            }), A(ce.user || null), se(new Date)
        } catch (J) {
            console.error("Error loading data:", J), Q(J.message)
        } finally {
            ne(!1)
        }
    });
    W.useEffect(() => {
        if ($ > 0) {
            const J = setTimeout(() => I(ce => ce - 1), 1e3);
            return () => clearTimeout(J)
        }
    }, [$]);
    const V = () => Lt(null, null, function*() {
            try {
                Q(null);
                const J = yield w("/user");
                A(J.user || null), se(new Date)
            } catch (J) {
                console.error("Error loading user:", J), Q(J.message)
            }
        }),
        K = W.useCallback(() => {
            $ > 0 || (I(5), b(!0), V(), setTimeout(() => b(!1), 3e3))
        }, [$]),
        ye = W.useMemo(() => cd((k == null ? void 0 : k.experience) || 0, (k == null ? void 0 : k.level) || 1, Y.levels_progression), [k == null ? void 0 : k.experience, k == null ? void 0 : k.level, Y.levels_progression]);
    if (M) return h.jsx("div", {
        className: "panel-loading",
        children: "Carregando..."
    });
    if (P) return h.jsxs("div", {
        className: "panel-error",
        children: [h.jsxs("p", {
            children: ["❌ Erro: ", P]
        }), h.jsx("button", {
            onClick: V,
            children: "Tentar novamente"
        })]
    });
    if (!E) return h.jsxs("div", {
        className: "panel-empty",
        children: [h.jsx("h3", {
            children: "⚠️ Permissão necessária"
        }), h.jsxs("p", {
            className: "empty-description",
            children: ["Para ver seu inventário, clique em ", h.jsx("strong", {
                children: '"Conceder permissões"'
            }), " no canto inferior da extensão."]
        }), h.jsx("button", {
            className: "refresh-btn",
            onClick: () => window.location.reload(),
            children: "🔄 Já concedi, recarregar"
        })]
    });
    if (!k) return h.jsxs("div", {
        className: "panel-empty",
        children: [h.jsx("h3", {
            children: "Você ainda não participou!"
        }), h.jsxs("p", {
            className: "empty-description",
            children: ["Ganhe ", h.jsx("strong", {
                children: "pedras"
            }), " através de bits, subs ou doações."]
        }), h.jsx("p", {
            className: "empty-hint",
            children: "Quando tiver pedras, você poderá jogar no gacha!"
        }), h.jsx("button", {
            className: "refresh-btn",
            onClick: K,
            disabled: $ > 0,
            children: $ > 0 ? `Aguarde ${$}s` : "Atualizar"
        }), z && h.jsxs("p", {
            className: "last-refresh",
            children: ["Última atualização: ", z.toLocaleTimeString("pt-BR")]
        })]
    });
    const ae = ((k == null ? void 0 : k.coins) || 0) === 0;
    return h.jsxs("div", {
        className: "panel",
        children: [ee && h.jsx(Ol, {}), h.jsxs("div", {
            className: "panel-header",
            children: [h.jsxs("div", {
                className: "stat",
                children: [h.jsx("span", {
                    className: "stat-icon",
                    children: h.jsx(ad, {
                        size: 16
                    })
                }), h.jsx("span", {
                    className: "stat-value",
                    children: k.coins || 0
                })]
            }), h.jsxs("div", {
                className: "stat",
                children: [h.jsx("span", {
                    className: "stat-value",
                    children: k.points || 0
                }), h.jsx("span", {
                    className: "stat-label",
                    children: "pts"
                })]
            }), h.jsx("div", {
                className: "stat level-stat",
                children: h.jsxs("span", {
                    className: "stat-value",
                    children: ["Lvl ", k.level || 1]
                })
            }), h.jsx("button", {
                className: "refresh-btn-small",
                onClick: K,
                disabled: $ > 0,
                title: $ > 0 ? `Aguarde ${$}s` : "Atualizar dados",
                children: $ > 0 ? $ : "↻"
            })]
        }), h.jsxs("div", {
            className: "xp-bar-container",
            children: [h.jsx("div", {
                className: "xp-bar",
                children: h.jsx("div", {
                    className: "xp-bar-fill",
                    style: {
                        width: `${ye.progress}%`
                    }
                })
            }), h.jsxs("span", {
                className: "xp-text",
                children: [ye.xpInLevel.toLocaleString("pt-BR"), "/", ye.xpForNext.toLocaleString("pt-BR"), " XP", h.jsxs("span", {
                    className: "xp-total",
                    children: ["(", (k.experience || 0).toLocaleString("pt-BR"), ")"]
                })]
            })]
        }), ae && h.jsx("div", {
            className: "no-coins-warning",
            children: "Você não tem pedras. Ganhe com bits, subs ou doações!"
        }), h.jsxs("div", {
            className: "panel-tabs",
            children: [h.jsx("button", {
                className: `tab ${p==="inventory"?"active":""}`,
                onClick: () => G("inventory"),
                children: "Inventário"
            }), h.jsx("button", {
                className: `tab ${p==="gacha"?"active":""}`,
                onClick: () => G("gacha"),
                children: "Gacha"
            }), h.jsx("button", {
                className: `tab ${p==="ranking"?"active":""}`,
                onClick: () => G("ranking"),
                children: "Ranking"
            })]
        }), h.jsxs("div", {
            className: "panel-content",
            children: [p === "inventory" && h.jsx(id, {
                refreshTrigger: z
            }), p === "gacha" && h.jsx(ud, {
                coins: k.coins || 0,
                rollCost: Y.roll_cost || 100,
                onRoll: K,
                onSpendCoins: J => {
                    A(ce => Rl(On({}, ce), {
                        coins: Math.max(0, (ce.coins || 0) - J)
                    }))
                }
            }), p === "ranking" && h.jsx(sd, {
                refreshTrigger: z
            })]
        })]
    })
}

function dd() {
    const {
        isAuthorized: w,
        isLoading: E,
        error: p
    } = kr();
    return E ? h.jsx(Ol, {}) : p ? h.jsx("div", {
        className: "error-container",
        children: h.jsxs("p", {
            children: ["❌ ", p]
        })
    }) : w ? h.jsx(fd, {}) : h.jsx("div", {
        className: "auth-container",
        children: h.jsx("p", {
            children: "🔒 Faça login na Twitch para ver seu inventário"
        })
    })
}

function pd() {
    return h.jsx(od, {
        children: h.jsx(dd, {})
    })
}
const Va = document.getElementById("root");
Va && (Va.innerHTML = '<div style="color: white; padding: 10px;">Loading Extension...</div>');
nd.createRoot(document.getElementById("root")).render(h.jsx(Yf.StrictMode, {
    children: h.jsx(pd, {})
}));