(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [132], {
        613379: function(e, t, n) {
            "use strict";
            var l = n(564836);
            t.Z = void 0;
            var u = l(n(864938)),
                c = n(785893);
            t.Z = (0, u.default)((0, c.jsx)("path", {
                d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
            }), "ArrowForwardIos")
        },
        309944: function(e, t, n) {
            "use strict";
            var l = n(564836);
            t.Z = void 0;
            var u = l(n(864938)),
                c = n(785893);
            t.Z = (0, u.default)((0, c.jsx)("path", {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"
            }), "Help")
        },
        436259: function(e) {
            e.exports = function(e, t) {
                var n = [];
                t = t || noop;
                do n.push(e), e = e.parentNode; while (e && e.tagName && t(e));
                return n.slice(1)
            };

            function noop(e) {
                return !0
            }
        },
        609996: function(e) {
            "use strict";
            var isMergeableObject = function(e) {
                    var n;
                    return !!e && "object" == typeof e && "[object RegExp]" !== (n = Object.prototype.toString.call(e)) && "[object Date]" !== n && e.$$typeof !== t
                },
                t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function cloneUnlessOtherwiseSpecified(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? deepmerge(Array.isArray(e) ? [] : {}, e, t) : e
            }

            function defaultArrayMerge(e, t, n) {
                return e.concat(t).map(function(e) {
                    return cloneUnlessOtherwiseSpecified(e, n)
                })
            }

            function getKeys(e) {
                return Object.keys(e).concat(Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
                    return Object.propertyIsEnumerable.call(e, t)
                }) : [])
            }

            function propertyIsOnObject(e, t) {
                try {
                    return t in e
                } catch (e) {
                    return !1
                }
            }

            function deepmerge(e, t, n) {
                (n = n || {}).arrayMerge = n.arrayMerge || defaultArrayMerge, n.isMergeableObject = n.isMergeableObject || isMergeableObject, n.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var l, u, c = Array.isArray(t);
                return c !== Array.isArray(e) ? cloneUnlessOtherwiseSpecified(t, n) : c ? n.arrayMerge(e, t, n) : (u = {}, (l = n).isMergeableObject(e) && getKeys(e).forEach(function(t) {
                    u[t] = cloneUnlessOtherwiseSpecified(e[t], l)
                }), getKeys(t).forEach(function(n) {
                    (!propertyIsOnObject(e, n) || Object.hasOwnProperty.call(e, n) && Object.propertyIsEnumerable.call(e, n)) && (propertyIsOnObject(e, n) && l.isMergeableObject(t[n]) ? u[n] = (function(e, t) {
                        if (!t.customMerge) return deepmerge;
                        var n = t.customMerge(e);
                        return "function" == typeof n ? n : deepmerge
                    })(n, l)(e[n], t[n], l) : u[n] = cloneUnlessOtherwiseSpecified(t[n], l))
                }), u)
            }
            deepmerge.all = function(e, t) {
                if (!Array.isArray(e)) throw Error("first argument should be an array");
                return e.reduce(function(e, n) {
                    return deepmerge(e, n, t)
                }, {})
            }, e.exports = deepmerge
        },
        63604: function(e, t, n) {
            e.exports = n(227771).default
        },
        227771: function(e, t, n) {
            "use strict";
            t.default = function(e, t) {
                if (4 !== e.whatToShow) throw Error("Argument 1 of seek must use filter NodeFilter.SHOW_TEXT.");
                var n = 0,
                    c = e.referenceNode,
                    d = null;
                if (!isNaN(parseInt(t)) && isFinite(t)) d = {
                    forward: function() {
                        return n < t
                    },
                    backward: function() {
                        return n > t
                    }
                };
                else if (3 === t.nodeType) d = {
                    forward: ! function(e, t) {
                        if (e === t) return !1;
                        for (var n = null, c = [e].concat((0, l.default)(e)).reverse(), d = [t].concat((0, l.default)(t)).reverse(); c[0] === d[0];) n = c.shift(), d.shift();
                        return c = c[0], d = d[0], (0, u.default)(n.childNodes, c) > (0, u.default)(n.childNodes, d)
                    }(c, t) ? function() {
                        return c !== t
                    } : function() {
                        return !1
                    },
                    backward: function() {
                        return c != t || !e.pointerBeforeReferenceNode
                    }
                };
                else throw Error("Argument 2 of seek must be a number or a Text Node.");
                for (; d.forward() && null !== (c = e.nextNode());) n += c.nodeValue.length;
                for (; d.backward() && null !== (c = e.previousNode());) n -= c.nodeValue.length;
                return n
            };
            var l = _interopRequireDefault(n(436259)),
                u = _interopRequireDefault(n(511684));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        534906: function(e) {
            e.exports = function getDocument(e) {
                if (isDocument(e)) return e;
                if (isDocument(e.ownerDocument)) return e.ownerDocument;
                if (isDocument(e.document)) return e.document;
                if (e.parentNode) return getDocument(e.parentNode);
                if (e.commonAncestorContainer) return getDocument(e.commonAncestorContainer);
                if (e.startContainer) return getDocument(e.startContainer);
                if (e.anchorNode) return getDocument(e.anchorNode)
            };

            function isDocument(e) {
                return e && 9 === e.nodeType
            }
        },
        511684: function(e) {
            "use strict";
            /*!
             * index-of <https://github.com/jonschlinkert/index-of>
             *
             * Copyright (c) 2014-2015 Jon Schlinkert.
             * Licensed under the MIT license.
             */
            e.exports = function(e, t, n) {
                if (n = n || 0, null == e) return -1;
                var l = e.length,
                    u = n < 0 ? l + n : n;
                if (u >= e.length) return -1;
                for (; u < l;) {
                    if (e[u] === t) return u;
                    u++
                }
                return -1
            }
        },
        49090: function(e) {
            function stdOnEnd(e, t) {
                e.onload = function() {
                    this.onerror = this.onload = null, t(null, e)
                }, e.onerror = function() {
                    this.onerror = this.onload = null, t(Error("Failed to load " + this.src), e)
                }
            }
            e.exports = function(e, t, n) {
                var l = document.head || document.getElementsByTagName("head")[0],
                    u = document.createElement("script");
                "function" == typeof t && (n = t, t = {}), t = t || {}, n = n || function() {}, u.type = t.type || "text/javascript", u.charset = t.charset || "utf8", u.async = !("async" in t) || !!t.async, u.src = e, t.attrs && function(e, t) {
                    for (var n in t) e.setAttribute(n, t[n])
                }(u, t.attrs), t.text && (u.text = "" + t.text), ("onload" in u ? stdOnEnd : function(e, t) {
                    e.onreadystatechange = function() {
                        ("complete" == this.readyState || "loaded" == this.readyState) && (this.onreadystatechange = null, t(null, e))
                    }
                })(u, n), u.onload || stdOnEnd(u, n), l.appendChild(u)
            }
        },
        130845: function(e, t, n) {
            "use strict";
            n.r(t);
            var l = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function areInputsEqual(e, t) {
                if (e.length !== t.length) return !1;
                for (var n, u, c = 0; c < e.length; c++)
                    if (!((n = e[c]) === (u = t[c]) || l(n) && l(u))) return !1;
                return !0
            }
            t.default = function(e, t) {
                void 0 === t && (t = areInputsEqual);
                var n, l, u = [],
                    c = !1;
                return function() {
                    for (var d = [], f = 0; f < arguments.length; f++) d[f] = arguments[f];
                    return c && n === this && t(d, u) || (l = e.apply(this, d), c = !0, n = this, u = d), l
                }
            }
        },
        892703: function(e, t, n) {
            "use strict";
            var l = n(150414);

            function emptyFunction() {}

            function emptyFunctionWithReset() {}
            emptyFunctionWithReset.resetWarningCache = emptyFunction, e.exports = function() {
                function shim(e, t, n, u, c, d) {
                    if (d !== l) {
                        var f = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw f.name = "Invariant Violation", f
                    }
                }

                function getShim() {
                    return shim
                }
                shim.isRequired = shim;
                var e = {
                    array: shim,
                    bigint: shim,
                    bool: shim,
                    func: shim,
                    number: shim,
                    object: shim,
                    string: shim,
                    symbol: shim,
                    any: shim,
                    arrayOf: getShim,
                    element: shim,
                    elementType: shim,
                    instanceOf: getShim,
                    node: shim,
                    objectOf: getShim,
                    oneOf: getShim,
                    oneOfType: getShim,
                    shape: getShim,
                    exact: getShim,
                    checkPropTypes: emptyFunctionWithReset,
                    resetWarningCache: emptyFunction
                };
                return e.PropTypes = e, e
            }
        },
        45697: function(e, t, n) {
            e.exports = n(892703)()
        },
        150414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        469590: function(e) {
            var t = "undefined" != typeof Element,
                n = "function" == typeof Map,
                l = "function" == typeof Set,
                u = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            e.exports = function(e, c) {
                try {
                    return function equal(e, c) {
                        if (e === c) return !0;
                        if (e && c && "object" == typeof e && "object" == typeof c) {
                            var d, f, y, h;
                            if (e.constructor !== c.constructor) return !1;
                            if (Array.isArray(e)) {
                                if ((d = e.length) != c.length) return !1;
                                for (f = d; 0 != f--;)
                                    if (!equal(e[f], c[f])) return !1;
                                return !0
                            }
                            if (n && e instanceof Map && c instanceof Map) {
                                if (e.size !== c.size) return !1;
                                for (h = e.entries(); !(f = h.next()).done;)
                                    if (!c.has(f.value[0])) return !1;
                                for (h = e.entries(); !(f = h.next()).done;)
                                    if (!equal(f.value[1], c.get(f.value[0]))) return !1;
                                return !0
                            }
                            if (l && e instanceof Set && c instanceof Set) {
                                if (e.size !== c.size) return !1;
                                for (h = e.entries(); !(f = h.next()).done;)
                                    if (!c.has(f.value[0])) return !1;
                                return !0
                            }
                            if (u && ArrayBuffer.isView(e) && ArrayBuffer.isView(c)) {
                                if ((d = e.length) != c.length) return !1;
                                for (f = d; 0 != f--;)
                                    if (e[f] !== c[f]) return !1;
                                return !0
                            }
                            if (e.constructor === RegExp) return e.source === c.source && e.flags === c.flags;
                            if (e.valueOf !== Object.prototype.valueOf && "function" == typeof e.valueOf && "function" == typeof c.valueOf) return e.valueOf() === c.valueOf();
                            if (e.toString !== Object.prototype.toString && "function" == typeof e.toString && "function" == typeof c.toString) return e.toString() === c.toString();
                            if ((d = (y = Object.keys(e)).length) !== Object.keys(c).length) return !1;
                            for (f = d; 0 != f--;)
                                if (!Object.prototype.hasOwnProperty.call(c, y[f])) return !1;
                            if (t && e instanceof Element) return !1;
                            for (f = d; 0 != f--;)
                                if (("_owner" !== y[f] && "__v" !== y[f] && "__o" !== y[f] || !e.$$typeof) && !equal(e[y[f]], c[y[f]])) return !1;
                            return !0
                        }
                        return e != e && c != c
                    }(e, c)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        588791: function(e, t, n) {
            "use strict";
            var l = n(667294);

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
                }
            }

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }! function(e, t) {
                void 0 === t && (t = {});
                var n = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var l = document.head || document.getElementsByTagName("head")[0],
                        u = document.createElement("style");
                    u.type = "text/css", "top" === n && l.firstChild ? l.insertBefore(u, l.firstChild) : l.appendChild(u), u.styleSheet ? u.styleSheet.cssText = e : u.appendChild(document.createTextNode(e))
                }
            }(".h-popover {\n  padding: 6px 10px;\n  background: #333;\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 50;\n  transform: translate(-50%, -100%);\n  transition: 0.2s all;\n  display: flex;\n  align-items: center;\n}\n\n.h-popover:after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: -5px;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid #333;\n}\n\n.h-popover-item {\n  color: #fff;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n}\n\n.h-popover-item + .h-popover-item {\n  margin-left: 10px;\n}\n");
            var u = function(e) {
                var t, n;

                function s(e) {
                    var t, n;
                    return function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, s), t = (n = i(s).call(this, e)) && ("object" == typeof n || "function" == typeof n) ? n : p(this), r(p(p(t)), "hidePopover", function() {
                        t.setState({
                            showPopover: !1
                        })
                    }), r(p(p(t)), "onMouseUp", function() {
                        var e = window.getSelection(),
                            n = e.toString().trim();
                        if (n) {
                            var l = e.getRangeAt(0),
                                u = l.startContainer.parentNode,
                                c = l.endContainer.parentNode,
                                d = t.highlight.current,
                                f = d.querySelector(".h-popable");
                            if (f) {
                                if (!f.contains(u) || !f.contains(c)) return void t.hidePopover()
                            } else if (!d.contains(u) || !d.contains(c)) return void t.hidePopover();
                            if (u.isSameNode(c)) {
                                var y = l.getBoundingClientRect(),
                                    h = y.x,
                                    m = y.y,
                                    b = y.width;
                                if (b) {
                                    t.setState({
                                        x: h + b / 2,
                                        y: m + window.scrollY - 10,
                                        selectedText: n,
                                        showPopover: !0
                                    });
                                    var g = t.props.onHighlightPop;
                                    (void 0 === g ? function() {} : g)(n)
                                } else t.hidePopover()
                            } else t.hidePopover()
                        } else t.hidePopover()
                    }), t.state = {
                        showPopover: !1,
                        x: 0,
                        y: 0,
                        selectedText: ""
                    }, t.highlight = (0, l.createRef)(), t
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t)
                }(s, l.Component), t = [{
                    key: "componentDidMount",
                    value: function() {
                        window.addEventListener("mouseup", this.onMouseUp)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        window.removeEventListener("mouseup", this.onMouseUp)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.showPopover,
                            n = e.x,
                            u = e.y,
                            c = this.props,
                            d = c.children,
                            f = c.popoverItems;
                        return l.createElement("div", {
                            ref: this.highlight
                        }, t && l.createElement("div", {
                            className: "h-popover",
                            style: {
                                left: "".concat(n, "px"),
                                top: "".concat(u, "px")
                            },
                            role: "presentation",
                            onMouseDown: function(e) {
                                return e.preventDefault()
                            }
                        }, f ? f("h-popover-item") : l.createElement("span", {
                            role: "button",
                            className: "h-popover-item"
                        }, "Add yours")), d)
                    }
                }], o(s.prototype, t), n && o(s, n), s
            }();
            u.defaultProps = {
                onHighlightComment: null,
                onExitHighlight: null,
                popoverItems: null,
                children: null
            }, t.Z = u
        },
        659605: function(e, t, n) {
            var l = Object.create,
                u = Object.defineProperty,
                c = Object.getOwnPropertyDescriptor,
                d = Object.getOwnPropertyNames,
                f = Object.getPrototypeOf,
                y = Object.prototype.hasOwnProperty,
                __defNormalProp = (e, t, n) => t in e ? u(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                __copyProps = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let f of d(t)) y.call(e, f) || f === n || u(e, f, {
                            get: () => t[f],
                            enumerable: !(l = c(t, f)) || l.enumerable
                        });
                    return e
                },
                __toESM = (e, t, n) => (n = null != e ? l(f(e)) : {}, __copyProps(!t && e && e.__esModule ? n : u(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                __publicField = (e, t, n) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n),
                h = {};
            ((e, t) => {
                for (var n in t) u(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(h, {
                default: () => Player
            }), e.exports = __copyProps(u({}, "__esModule", {
                value: !0
            }), h);
            var m = __toESM(n(667294)),
                b = __toESM(n(469590)),
                g = n(629448),
                _ = n(56281);
            let Player = class Player extends m.Component {
                constructor() {
                    super(...arguments), __publicField(this, "mounted", !1), __publicField(this, "isReady", !1), __publicField(this, "isPlaying", !1), __publicField(this, "isLoading", !0), __publicField(this, "loadOnReady", null), __publicField(this, "startOnPlay", !0), __publicField(this, "seekOnPlay", null), __publicField(this, "onDurationCalled", !1), __publicField(this, "handlePlayerMount", e => {
                        if (this.player) {
                            this.progress();
                            return
                        }
                        this.player = e, this.player.load(this.props.url), this.progress()
                    }), __publicField(this, "getInternalPlayer", e => this.player ? this.player[e] : null), __publicField(this, "progress", () => {
                        if (this.props.url && this.player && this.isReady) {
                            let e = this.getCurrentTime() || 0,
                                t = this.getSecondsLoaded(),
                                n = this.getDuration();
                            if (n) {
                                let l = {
                                    playedSeconds: e,
                                    played: e / n
                                };
                                null !== t && (l.loadedSeconds = t, l.loaded = t / n), (l.playedSeconds !== this.prevPlayed || l.loadedSeconds !== this.prevLoaded) && this.props.onProgress(l), this.prevPlayed = l.playedSeconds, this.prevLoaded = l.loadedSeconds
                            }
                        }
                        this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval)
                    }), __publicField(this, "handleReady", () => {
                        if (!this.mounted) return;
                        this.isReady = !0, this.isLoading = !1;
                        let {
                            onReady: e,
                            playing: t,
                            volume: n,
                            muted: l
                        } = this.props;
                        e(), l || null === n || this.player.setVolume(n), this.loadOnReady ? (this.player.load(this.loadOnReady, !0), this.loadOnReady = null) : t && this.player.play(), this.handleDurationCheck()
                    }), __publicField(this, "handlePlay", () => {
                        this.isPlaying = !0, this.isLoading = !1;
                        let {
                            onStart: e,
                            onPlay: t,
                            playbackRate: n
                        } = this.props;
                        this.startOnPlay && (this.player.setPlaybackRate && 1 !== n && this.player.setPlaybackRate(n), e(), this.startOnPlay = !1), t(), this.seekOnPlay && (this.seekTo(this.seekOnPlay), this.seekOnPlay = null), this.handleDurationCheck()
                    }), __publicField(this, "handlePause", e => {
                        this.isPlaying = !1, this.isLoading || this.props.onPause(e)
                    }), __publicField(this, "handleEnded", () => {
                        let {
                            activePlayer: e,
                            loop: t,
                            onEnded: n
                        } = this.props;
                        e.loopOnEnded && t && this.seekTo(0), t || (this.isPlaying = !1, n())
                    }), __publicField(this, "handleError", (...e) => {
                        this.isLoading = !1, this.props.onError(...e)
                    }), __publicField(this, "handleDurationCheck", () => {
                        clearTimeout(this.durationCheckTimeout);
                        let e = this.getDuration();
                        e ? this.onDurationCalled || (this.props.onDuration(e), this.onDurationCalled = !0) : this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100)
                    }), __publicField(this, "handleLoaded", () => {
                        this.isLoading = !1
                    })
                }
                componentDidMount() {
                    this.mounted = !0
                }
                componentWillUnmount() {
                    clearTimeout(this.progressTimeout), clearTimeout(this.durationCheckTimeout), this.isReady && this.props.stopOnUnmount && (this.player.stop(), this.player.disablePIP && this.player.disablePIP()), this.mounted = !1
                }
                componentDidUpdate(e) {
                    if (!this.player) return;
                    let {
                        url: t,
                        playing: n,
                        volume: l,
                        muted: u,
                        playbackRate: c,
                        pip: d,
                        loop: f,
                        activePlayer: y,
                        disableDeferredLoading: h
                    } = this.props;
                    if (!(0, b.default)(e.url, t)) {
                        if (this.isLoading && !y.forceLoad && !h && !(0, _.isMediaStream)(t)) {
                            console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`), this.loadOnReady = t;
                            return
                        }
                        this.isLoading = !0, this.startOnPlay = !0, this.onDurationCalled = !1, this.player.load(t, this.isReady)
                    }
                    e.playing || !n || this.isPlaying || this.player.play(), e.playing && !n && this.isPlaying && this.player.pause(), !e.pip && d && this.player.enablePIP && this.player.enablePIP(), e.pip && !d && this.player.disablePIP && this.player.disablePIP(), e.volume !== l && null !== l && this.player.setVolume(l), e.muted !== u && (u ? this.player.mute() : (this.player.unmute(), null !== l && setTimeout(() => this.player.setVolume(l)))), e.playbackRate !== c && this.player.setPlaybackRate && this.player.setPlaybackRate(c), e.loop !== f && this.player.setLoop && this.player.setLoop(f)
                }
                getDuration() {
                    return this.isReady ? this.player.getDuration() : null
                }
                getCurrentTime() {
                    return this.isReady ? this.player.getCurrentTime() : null
                }
                getSecondsLoaded() {
                    return this.isReady ? this.player.getSecondsLoaded() : null
                }
                seekTo(e, t, n) {
                    if (!this.isReady) {
                        0 !== e && (this.seekOnPlay = e, setTimeout(() => {
                            this.seekOnPlay = null
                        }, 5e3));
                        return
                    }
                    let l = t ? "fraction" === t : e > 0 && e < 1;
                    if (l) {
                        let t = this.player.getDuration();
                        if (!t) {
                            console.warn("ReactPlayer: could not seek using fraction –\xa0duration not yet available");
                            return
                        }
                        this.player.seekTo(t * e, n);
                        return
                    }
                    this.player.seekTo(e, n)
                }
                render() {
                    let e = this.props.activePlayer;
                    return e ? m.default.createElement(e, { ...this.props,
                        onMount: this.handlePlayerMount,
                        onReady: this.handleReady,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onEnded: this.handleEnded,
                        onLoaded: this.handleLoaded,
                        onError: this.handleError
                    }) : null
                }
            };
            __publicField(Player, "displayName", "Player"), __publicField(Player, "propTypes", g.propTypes), __publicField(Player, "defaultProps", g.defaultProps)
        },
        71276: function(e, t, n) {
            var l = Object.create,
                u = Object.defineProperty,
                c = Object.getOwnPropertyDescriptor,
                d = Object.getOwnPropertyNames,
                f = Object.getPrototypeOf,
                y = Object.prototype.hasOwnProperty,
                __defNormalProp = (e, t, n) => t in e ? u(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                __copyProps = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let f of d(t)) y.call(e, f) || f === n || u(e, f, {
                            get: () => t[f],
                            enumerable: !(l = c(t, f)) || l.enumerable
                        });
                    return e
                },
                __toESM = (e, t, n) => (n = null != e ? l(f(e)) : {}, __copyProps(!t && e && e.__esModule ? n : u(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                __publicField = (e, t, n) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n),
                h = {};
            ((e, t) => {
                for (var n in t) u(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(h, {
                createReactPlayer: () => createReactPlayer
            }), e.exports = __copyProps(u({}, "__esModule", {
                value: !0
            }), h);
            var m = __toESM(n(667294)),
                b = __toESM(n(609996)),
                g = __toESM(n(130845)),
                _ = __toESM(n(469590)),
                P = n(629448),
                v = n(56281),
                w = __toESM(n(659605));
            let O = (0, v.lazy)(() => n.e(7664).then(n.t.bind(n, 957284, 23))),
                S = "undefined" != typeof window && window.document && "undefined" != typeof document,
                E = void 0 !== n.g && n.g.window && n.g.window.document,
                k = Object.keys(P.propTypes),
                T = S || E ? m.Suspense : () => null,
                x = [],
                createReactPlayer = (e, t) => {
                    var n;
                    return n = class extends m.Component {
                        constructor() {
                            super(...arguments), __publicField(this, "state", {
                                showPreview: !!this.props.light
                            }), __publicField(this, "references", {
                                wrapper: e => {
                                    this.wrapper = e
                                },
                                player: e => {
                                    this.player = e
                                }
                            }), __publicField(this, "handleClickPreview", e => {
                                this.setState({
                                    showPreview: !1
                                }), this.props.onClickPreview(e)
                            }), __publicField(this, "showPreview", () => {
                                this.setState({
                                    showPreview: !0
                                })
                            }), __publicField(this, "getDuration", () => this.player ? this.player.getDuration() : null), __publicField(this, "getCurrentTime", () => this.player ? this.player.getCurrentTime() : null), __publicField(this, "getSecondsLoaded", () => this.player ? this.player.getSecondsLoaded() : null), __publicField(this, "getInternalPlayer", (e = "player") => this.player ? this.player.getInternalPlayer(e) : null), __publicField(this, "seekTo", (e, t, n) => {
                                if (!this.player) return null;
                                this.player.seekTo(e, t, n)
                            }), __publicField(this, "handleReady", () => {
                                this.props.onReady(this)
                            }), __publicField(this, "getActivePlayer", (0, g.default)(n => {
                                for (let t of [...x, ...e])
                                    if (t.canPlay(n)) return t;
                                return t || null
                            })), __publicField(this, "getConfig", (0, g.default)((e, t) => {
                                let {
                                    config: n
                                } = this.props;
                                return b.default.all([P.defaultProps.config, P.defaultProps.config[t] || {}, n, n[t] || {}])
                            })), __publicField(this, "getAttributes", (0, g.default)(e => (0, v.omit)(this.props, k))), __publicField(this, "renderActivePlayer", e => {
                                if (!e) return null;
                                let t = this.getActivePlayer(e);
                                if (!t) return null;
                                let n = this.getConfig(e, t.key);
                                return m.default.createElement(w.default, { ...this.props,
                                    key: t.key,
                                    ref: this.references.player,
                                    config: n,
                                    activePlayer: t.lazyPlayer || t,
                                    onReady: this.handleReady
                                })
                            })
                        }
                        shouldComponentUpdate(e, t) {
                            return !(0, _.default)(this.props, e) || !(0, _.default)(this.state, t)
                        }
                        componentDidUpdate(e) {
                            let {
                                light: t
                            } = this.props;
                            !e.light && t && this.setState({
                                showPreview: !0
                            }), e.light && !t && this.setState({
                                showPreview: !1
                            })
                        }
                        renderPreview(e) {
                            if (!e) return null;
                            let {
                                light: t,
                                playIcon: n,
                                previewTabIndex: l,
                                oEmbedUrl: u,
                                previewAriaLabel: c
                            } = this.props;
                            return m.default.createElement(O, {
                                url: e,
                                light: t,
                                playIcon: n,
                                previewTabIndex: l,
                                previewAriaLabel: c,
                                oEmbedUrl: u,
                                onClick: this.handleClickPreview
                            })
                        }
                        render() {
                            let {
                                url: e,
                                style: t,
                                width: n,
                                height: l,
                                fallback: u,
                                wrapper: c
                            } = this.props, {
                                showPreview: d
                            } = this.state, f = this.getAttributes(e), y = "string" == typeof c ? this.references.wrapper : void 0;
                            return m.default.createElement(c, {
                                ref: y,
                                style: { ...t,
                                    width: n,
                                    height: l
                                },
                                ...f
                            }, m.default.createElement(T, {
                                fallback: u
                            }, d ? this.renderPreview(e) : this.renderActivePlayer(e)))
                        }
                    }, __publicField(n, "displayName", "ReactPlayer"), __publicField(n, "propTypes", P.propTypes), __publicField(n, "defaultProps", P.defaultProps), __publicField(n, "addCustomPlayer", e => {
                        x.push(e)
                    }), __publicField(n, "removeCustomPlayers", () => {
                        x.length = 0
                    }), __publicField(n, "canPlay", t => {
                        for (let n of [...x, ...e])
                            if (n.canPlay(t)) return !0;
                        return !1
                    }), __publicField(n, "canEnablePIP", t => {
                        for (let n of [...x, ...e])
                            if (n.canEnablePIP && n.canEnablePIP(t)) return !0;
                        return !1
                    }), n
                }
        },
        356310: function(e, t, n) {
            var l, u, c = Object.create,
                d = Object.defineProperty,
                f = Object.getOwnPropertyDescriptor,
                y = Object.getOwnPropertyNames,
                h = Object.getPrototypeOf,
                m = Object.prototype.hasOwnProperty,
                __copyProps = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let u of y(t)) m.call(e, u) || u === n || d(e, u, {
                            get: () => t[u],
                            enumerable: !(l = f(t, u)) || l.enumerable
                        });
                    return e
                },
                b = {};
            ((e, t) => {
                for (var n in t) d(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(b, {
                default: () => v
            }), e.exports = __copyProps(d({}, "__esModule", {
                value: !0
            }), b);
            var g = (u = null != (l = n(529760)) ? c(h(l)) : {}, __copyProps(l && l.__esModule ? u : d(u, "default", {
                    value: l,
                    enumerable: !0
                }), l)),
                _ = n(71276);
            let P = g.default[g.default.length - 1];
            var v = (0, _.createReactPlayer)(g.default, P)
        },
        499790: function(e, t, n) {
            var l = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                c = Object.getOwnPropertyNames,
                d = Object.prototype.hasOwnProperty,
                f = {};
            ((e, t) => {
                for (var n in t) l(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(f, {
                AUDIO_EXTENSIONS: () => M,
                DASH_EXTENSIONS: () => C,
                FLV_EXTENSIONS: () => N,
                HLS_EXTENSIONS: () => R,
                MATCH_URL_DAILYMOTION: () => E,
                MATCH_URL_FACEBOOK: () => _,
                MATCH_URL_FACEBOOK_WATCH: () => P,
                MATCH_URL_KALTURA: () => x,
                MATCH_URL_MIXCLOUD: () => k,
                MATCH_URL_MUX: () => g,
                MATCH_URL_SOUNDCLOUD: () => m,
                MATCH_URL_STREAMABLE: () => v,
                MATCH_URL_TWITCH_CHANNEL: () => S,
                MATCH_URL_TWITCH_VIDEO: () => O,
                MATCH_URL_VIDYARD: () => T,
                MATCH_URL_VIMEO: () => b,
                MATCH_URL_WISTIA: () => w,
                MATCH_URL_YOUTUBE: () => h,
                VIDEO_EXTENSIONS: () => j,
                canPlay: () => D
            }), e.exports = ((e, t, n, f) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of c(t)) d.call(e, n) || void 0 === n || l(e, n, {
                        get: () => t[n],
                        enumerable: !(f = u(t, n)) || f.enumerable
                    });
                return e
            })(l({}, "__esModule", {
                value: !0
            }), f);
            var y = n(56281);
            let h = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
                m = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/,
                b = /vimeo\.com\/(?!progressive_redirect).+/,
                g = /stream\.mux\.com\/(\w+)/,
                _ = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,
                P = /^https?:\/\/fb\.watch\/.+$/,
                v = /streamable\.com\/([a-z0-9]+)$/,
                w = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
                O = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
                S = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,
                E = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,
                k = /mixcloud\.com\/([^/]+\/[^/]+)/,
                T = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,
                x = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,
                M = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
                j = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
                R = /\.(m3u8)($|\?)/i,
                C = /\.(mpd)($|\?)/i,
                N = /\.(flv)($|\?)/i,
                canPlayFile = e => {
                    if (e instanceof Array) {
                        for (let t of e)
                            if ("string" == typeof t && canPlayFile(t) || canPlayFile(t.src)) return !0;
                        return !1
                    }
                    return !!((0, y.isMediaStream)(e) || (0, y.isBlobUrl)(e)) || M.test(e) || j.test(e) || R.test(e) || C.test(e) || N.test(e)
                },
                D = {
                    youtube: e => e instanceof Array ? e.every(e => h.test(e)) : h.test(e),
                    soundcloud: e => m.test(e) && !M.test(e),
                    vimeo: e => b.test(e) && !j.test(e) && !R.test(e),
                    mux: e => g.test(e),
                    facebook: e => _.test(e) || P.test(e),
                    streamable: e => v.test(e),
                    wistia: e => w.test(e),
                    twitch: e => O.test(e) || S.test(e),
                    dailymotion: e => E.test(e),
                    mixcloud: e => k.test(e),
                    vidyard: e => T.test(e),
                    kaltura: e => x.test(e),
                    file: canPlayFile
                }
        },
        529760: function(e, t, n) {
            var l = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                c = Object.getOwnPropertyNames,
                d = Object.prototype.hasOwnProperty,
                f = {};
            ((e, t) => {
                for (var n in t) l(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(f, {
                default: () => m
            }), e.exports = ((e, t, n, f) => {
                if (t && "object" == typeof t || "function" == typeof t)
                    for (let n of c(t)) d.call(e, n) || void 0 === n || l(e, n, {
                        get: () => t[n],
                        enumerable: !(f = u(t, n)) || f.enumerable
                    });
                return e
            })(l({}, "__esModule", {
                value: !0
            }), f);
            var y = n(56281),
                h = n(499790),
                m = [{
                    key: "youtube",
                    name: "YouTube",
                    canPlay: h.canPlay.youtube,
                    lazyPlayer: (0, y.lazy)(() => n.e(4439).then(n.t.bind(n, 585034, 23)))
                }, {
                    key: "soundcloud",
                    name: "SoundCloud",
                    canPlay: h.canPlay.soundcloud,
                    lazyPlayer: (0, y.lazy)(() => n.e(6125).then(n.t.bind(n, 476655, 23)))
                }, {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: h.canPlay.vimeo,
                    lazyPlayer: (0, y.lazy)(() => n.e(3743).then(n.t.bind(n, 686746, 23)))
                }, {
                    key: "mux",
                    name: "Mux",
                    canPlay: h.canPlay.mux,
                    lazyPlayer: (0, y.lazy)(() => n.e(4258).then(n.t.bind(n, 491618, 23)))
                }, {
                    key: "facebook",
                    name: "Facebook",
                    canPlay: h.canPlay.facebook,
                    lazyPlayer: (0, y.lazy)(() => n.e(2121).then(n.t.bind(n, 226429, 23)))
                }, {
                    key: "streamable",
                    name: "Streamable",
                    canPlay: h.canPlay.streamable,
                    lazyPlayer: (0, y.lazy)(() => n.e(2546).then(n.t.bind(n, 476479, 23)))
                }, {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: h.canPlay.wistia,
                    lazyPlayer: (0, y.lazy)(() => n.e(8055).then(n.t.bind(n, 413134, 23)))
                }, {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: h.canPlay.twitch,
                    lazyPlayer: (0, y.lazy)(() => n.e(6216).then(n.t.bind(n, 289743, 23)))
                }, {
                    key: "dailymotion",
                    name: "DailyMotion",
                    canPlay: h.canPlay.dailymotion,
                    lazyPlayer: (0, y.lazy)(() => n.e(7596).then(n.t.bind(n, 565134, 23)))
                }, {
                    key: "mixcloud",
                    name: "Mixcloud",
                    canPlay: h.canPlay.mixcloud,
                    lazyPlayer: (0, y.lazy)(() => n.e(4667).then(n.t.bind(n, 499734, 23)))
                }, {
                    key: "vidyard",
                    name: "Vidyard",
                    canPlay: h.canPlay.vidyard,
                    lazyPlayer: (0, y.lazy)(() => n.e(8888).then(n.t.bind(n, 741533, 23)))
                }, {
                    key: "kaltura",
                    name: "Kaltura",
                    canPlay: h.canPlay.kaltura,
                    lazyPlayer: (0, y.lazy)(() => n.e(9039).then(n.t.bind(n, 549289, 23)))
                }, {
                    key: "file",
                    name: "FilePlayer",
                    canPlay: h.canPlay.file,
                    canEnablePIP: e => h.canPlay.file(e) && (document.pictureInPictureEnabled || (0, y.supportsWebKitPresentationMode)()) && !h.AUDIO_EXTENSIONS.test(e),
                    lazyPlayer: (0, y.lazy)(() => n.e(6011).then(n.t.bind(n, 133364, 23)))
                }]
        },
        629448: function(e, t, n) {
            var l, u, c = Object.create,
                d = Object.defineProperty,
                f = Object.getOwnPropertyDescriptor,
                y = Object.getOwnPropertyNames,
                h = Object.getPrototypeOf,
                m = Object.prototype.hasOwnProperty,
                __copyProps = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let u of y(t)) m.call(e, u) || u === n || d(e, u, {
                            get: () => t[u],
                            enumerable: !(l = f(t, u)) || l.enumerable
                        });
                    return e
                },
                b = {};
            ((e, t) => {
                for (var n in t) d(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(b, {
                defaultProps: () => M,
                propTypes: () => x
            }), e.exports = __copyProps(d({}, "__esModule", {
                value: !0
            }), b);
            var g = (u = null != (l = n(45697)) ? c(h(l)) : {}, __copyProps(l && l.__esModule ? u : d(u, "default", {
                value: l,
                enumerable: !0
            }), l));
            let {
                string: _,
                bool: P,
                number: v,
                array: w,
                oneOfType: O,
                shape: S,
                object: E,
                func: k,
                node: T
            } = g.default, x = {
                url: O([_, w, E]),
                playing: P,
                loop: P,
                controls: P,
                volume: v,
                muted: P,
                playbackRate: v,
                width: O([_, v]),
                height: O([_, v]),
                style: E,
                progressInterval: v,
                playsinline: P,
                pip: P,
                stopOnUnmount: P,
                light: O([P, _, E]),
                playIcon: T,
                previewTabIndex: v,
                previewAriaLabel: _,
                fallback: T,
                oEmbedUrl: _,
                wrapper: O([_, k, S({
                    render: k.isRequired
                })]),
                config: S({
                    soundcloud: S({
                        options: E
                    }),
                    youtube: S({
                        playerVars: E,
                        embedOptions: E,
                        onUnstarted: k
                    }),
                    facebook: S({
                        appId: _,
                        version: _,
                        playerId: _,
                        attributes: E
                    }),
                    dailymotion: S({
                        params: E
                    }),
                    vimeo: S({
                        playerOptions: E,
                        title: _
                    }),
                    mux: S({
                        attributes: E,
                        version: _
                    }),
                    file: S({
                        attributes: E,
                        tracks: w,
                        forceVideo: P,
                        forceAudio: P,
                        forceHLS: P,
                        forceSafariHLS: P,
                        forceDisableHls: P,
                        forceDASH: P,
                        forceFLV: P,
                        hlsOptions: E,
                        hlsVersion: _,
                        dashVersion: _,
                        flvVersion: _
                    }),
                    wistia: S({
                        options: E,
                        playerId: _,
                        customControls: w
                    }),
                    mixcloud: S({
                        options: E
                    }),
                    twitch: S({
                        options: E,
                        playerId: _
                    }),
                    vidyard: S({
                        options: E
                    })
                }),
                onReady: k,
                onStart: k,
                onPlay: k,
                onPause: k,
                onBuffer: k,
                onBufferEnd: k,
                onEnded: k,
                onError: k,
                onDuration: k,
                onSeek: k,
                onPlaybackRateChange: k,
                onPlaybackQualityChange: k,
                onProgress: k,
                onClickPreview: k,
                onEnablePIP: k,
                onDisablePIP: k
            }, noop = () => {}, M = {
                playing: !1,
                loop: !1,
                controls: !1,
                volume: null,
                muted: !1,
                playbackRate: 1,
                width: "640px",
                height: "360px",
                style: {},
                progressInterval: 1e3,
                playsinline: !1,
                pip: !1,
                stopOnUnmount: !0,
                light: !1,
                fallback: null,
                wrapper: "div",
                previewTabIndex: 0,
                previewAriaLabel: "",
                oEmbedUrl: "https://noembed.com/embed?url={url}",
                config: {
                    soundcloud: {
                        options: {
                            visual: !0,
                            buying: !1,
                            liking: !1,
                            download: !1,
                            sharing: !1,
                            show_comments: !1,
                            show_playcount: !1
                        }
                    },
                    youtube: {
                        playerVars: {
                            playsinline: 1,
                            showinfo: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            modestbranding: 1
                        },
                        embedOptions: {},
                        onUnstarted: noop
                    },
                    facebook: {
                        appId: "1309697205772819",
                        version: "v3.3",
                        playerId: null,
                        attributes: {}
                    },
                    dailymotion: {
                        params: {
                            api: 1,
                            "endscreen-enable": !1
                        }
                    },
                    vimeo: {
                        playerOptions: {
                            autopause: !1,
                            byline: !1,
                            portrait: !1,
                            title: !1
                        },
                        title: null
                    },
                    mux: {
                        attributes: {},
                        version: "2"
                    },
                    file: {
                        attributes: {},
                        tracks: [],
                        forceVideo: !1,
                        forceAudio: !1,
                        forceHLS: !1,
                        forceDASH: !1,
                        forceFLV: !1,
                        hlsOptions: {},
                        hlsVersion: "1.1.4",
                        dashVersion: "3.1.3",
                        flvVersion: "1.5.0",
                        forceDisableHls: !1
                    },
                    wistia: {
                        options: {},
                        playerId: null,
                        customControls: null
                    },
                    mixcloud: {
                        options: {
                            hide_cover: 1
                        }
                    },
                    twitch: {
                        options: {},
                        playerId: null
                    },
                    vidyard: {
                        options: {}
                    }
                },
                onReady: noop,
                onStart: noop,
                onPlay: noop,
                onPause: noop,
                onBuffer: noop,
                onBufferEnd: noop,
                onEnded: noop,
                onError: noop,
                onDuration: noop,
                onSeek: noop,
                onPlaybackRateChange: noop,
                onPlaybackQualityChange: noop,
                onProgress: noop,
                onClickPreview: noop,
                onEnablePIP: noop,
                onDisablePIP: noop
            }
        },
        56281: function(e, t, n) {
            var l = Object.create,
                u = Object.defineProperty,
                c = Object.getOwnPropertyDescriptor,
                d = Object.getOwnPropertyNames,
                f = Object.getPrototypeOf,
                y = Object.prototype.hasOwnProperty,
                __copyProps = (e, t, n, l) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let f of d(t)) y.call(e, f) || f === n || u(e, f, {
                            get: () => t[f],
                            enumerable: !(l = c(t, f)) || l.enumerable
                        });
                    return e
                },
                __toESM = (e, t, n) => (n = null != e ? l(f(e)) : {}, __copyProps(!t && e && e.__esModule ? n : u(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                h = {};
            ((e, t) => {
                for (var n in t) u(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(h, {
                callPlayer: () => callPlayer,
                getConfig: () => getConfig,
                getSDK: () => getSDK,
                isBlobUrl: () => isBlobUrl,
                isMediaStream: () => isMediaStream,
                lazy: () => lazy,
                omit: () => omit,
                parseEndTime: () => parseEndTime,
                parseStartTime: () => parseStartTime,
                queryString: () => queryString,
                randomString: () => randomString,
                supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
            }), e.exports = __copyProps(u({}, "__esModule", {
                value: !0
            }), h);
            var m = __toESM(n(667294)),
                b = __toESM(n(49090)),
                g = __toESM(n(609996));
            let lazy = e => m.default.lazy(async () => {
                    let t = await e();
                    return "function" == typeof t.default ? t : t.default
                }),
                _ = /[?&#](?:start|t)=([0-9hms]+)/,
                P = /[?&#]end=([0-9hms]+)/,
                v = /(\d+)(h|m|s)/g,
                w = /^\d+$/;

            function parseTimeParam(e, t) {
                if (e instanceof Array) return;
                let n = e.match(t);
                if (n) {
                    let e = n[1];
                    if (e.match(v)) return function(e) {
                        let t = 0,
                            n = v.exec(e);
                        for (; null !== n;) {
                            let [, l, u] = n;
                            "h" === u && (t += 3600 * parseInt(l, 10)), "m" === u && (t += 60 * parseInt(l, 10)), "s" === u && (t += parseInt(l, 10)), n = v.exec(e)
                        }
                        return t
                    }(e);
                    if (w.test(e)) return parseInt(e)
                }
            }

            function parseStartTime(e) {
                return parseTimeParam(e, _)
            }

            function parseEndTime(e) {
                return parseTimeParam(e, P)
            }

            function randomString() {
                return Math.random().toString(36).substr(2, 5)
            }

            function queryString(e) {
                return Object.keys(e).map(t => `${t}=${e[t]}`).join("&")
            }

            function getGlobal(e) {
                return window[e] ? window[e] : window.exports && window.exports[e] ? window.exports[e] : window.module && window.module.exports && window.module.exports[e] ? window.module.exports[e] : null
            }
            let O = {},
                getSDK = function(e, t, n = null, l = () => !0, u = b.default) {
                    let c = getGlobal(t);
                    return c && l(c) ? Promise.resolve(c) : new Promise((l, c) => {
                        if (O[e]) {
                            O[e].push({
                                resolve: l,
                                reject: c
                            });
                            return
                        }
                        O[e] = [{
                            resolve: l,
                            reject: c
                        }];
                        let onLoaded = t => {
                            O[e].forEach(e => e.resolve(t))
                        };
                        if (n) {
                            let e = window[n];
                            window[n] = function() {
                                e && e(), onLoaded(getGlobal(t))
                            }
                        }
                        u(e, l => {
                            l ? (O[e].forEach(e => e.reject(l)), O[e] = null) : n || onLoaded(getGlobal(t))
                        })
                    })
                };

            function getConfig(e, t) {
                return (0, g.default)(t.config, e.config)
            }

            function omit(e, ...t) {
                let n = [].concat(...t),
                    l = {},
                    u = Object.keys(e);
                for (let t of u) - 1 === n.indexOf(t) && (l[t] = e[t]);
                return l
            }

            function callPlayer(e, ...t) {
                if (!this.player || !this.player[e]) {
                    let t = `ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;
                    return this.player ? this.player[e] || (t += "The method was not available") : t += "The player was not available", console.warn(t, "font-weight: bold", ""), null
                }
                return this.player[e](...t)
            }

            function isMediaStream(e) {
                return "undefined" != typeof window && void 0 !== window.MediaStream && e instanceof window.MediaStream
            }

            function isBlobUrl(e) {
                return /^blob:/.test(e)
            }

            function supportsWebKitPresentationMode(e = document.createElement("video")) {
                let t = !1 === /iPhone|iPod/.test(navigator.userAgent);
                return e.webkitSupportsPresentationMode && "function" == typeof e.webkitSetPresentationMode && t
            }
        },
        339690: function(e, t, n) {
            e.exports = n(811887)
        },
        316177: function(e, t) {
            "use strict";
            t.__esModule = !0;
            var DOMException = function DOMException(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, DOMException), this.message = e, this.name = t, this.stack = Error().stack
            };
            t.default = DOMException, DOMException.prototype = Error(), DOMException.prototype.toString = function() {
                return this.name + ": " + this.message
            }
        },
        811887: function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.fromNode = function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                if (void 0 === e) throw Error('missing required parameter "node"');
                t = t || (0, l.default)(e);
                for (var n = "/"; e !== t;) {
                    if (!e) throw new u.default("The supplied node is not contained by the root node.", "InvalidNodeTypeError");
                    n = "/" + nodeName(e) + "[" + function(e) {
                        for (var t = e.nodeName, n = 1; e = e.previousSibling;) e.nodeName === t && (n += 1);
                        return n
                    }(e) + "]" + n, e = e.parentNode
                }
                return n.replace(/\/$/, "")
            }, t.toNode = function(e, t) {
                var n, u = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
                if (void 0 === e) throw Error('missing required parameter "path"');
                if (void 0 === t) throw Error('missing required parameter "root"');
                var c = (0, l.default)(t);
                t !== c && (e = e.replace(/^\//, "./"));
                var d = c.documentElement;
                return null === u && d.lookupNamespaceURI && (n = d.lookupNamespaceURI(null) || "http://www.w3.org/1999/xhtml", u = function(e) {
                        return ({
                            _default_: n
                        })[e] || d.lookupNamespaceURI(e)
                    }),
                    function(e, t, n) {
                        try {
                            var u;
                            return u = e.replace(/\/(?!\.)([^\/:\(]+)(?=\/|$)/g, "/_default_:$1"), (0, l.default)(t).evaluate(u, t, n, 9, null).singleNodeValue
                        } catch (n) {
                            return function(e, t) {
                                for (var n = e.split("/"), l = t; l;) {
                                    var u = n.shift();
                                    if (void 0 === u) break;
                                    if ("." !== u) {
                                        var c = u.split(/[\[\]]/),
                                            d = c[0],
                                            f = c[1];
                                        l = function(e, t, n) {
                                            for (e = e.firstChild; e && (nodeName(e) !== t || 0 != --n); e = e.nextSibling);
                                            return e
                                        }(l, d = d.replace("_default_:", ""), f = f ? parseInt(f) : 1)
                                    }
                                }
                                return l
                            }(e, t)
                        }
                    }(e, t, u)
            };
            var l = _interopRequireDefault(n(534906)),
                u = _interopRequireDefault(n(316177));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function nodeName(e) {
                switch (e.nodeName) {
                    case "#text":
                        return "text()";
                    case "#comment":
                        return "comment()";
                    case "#cdata-section":
                        return "cdata-section()";
                    default:
                        return e.nodeName.toLowerCase()
                }
            }
        },
        291879: function(e, t, n) {
            e.exports = n(833553)
        },
        833553: function(e, t, n) {
            "use strict";
            t.fromRange = function(e, t) {
                var n = e.startContainer,
                    l = e.startOffset,
                    u = e.endContainer,
                    d = e.endOffset;
                return {
                    start: c.fromNode(n, t),
                    end: c.fromNode(u, t),
                    startOffset: l,
                    endOffset: d
                }
            }, t.toRange = function(e, t, n, d, f) {
                var y = (0, l.default)(f),
                    h = c.toNode(e, f);
                if (null === h) throw notFound("start");
                var m = y.createNodeIterator(h, 4),
                    b = t - (0, u.default)(m, t);
                if (h = m.referenceNode, !m.pointerBeforeReferenceNode) {
                    if (b > 0) throw indexSize("start");
                    b += h.length
                }
                var g = c.toNode(n, f);
                if (null === g) throw notFound("end");
                var _ = y.createNodeIterator(g, 4),
                    P = d - (0, u.default)(_, d);
                if (g = _.referenceNode, !_.pointerBeforeReferenceNode) {
                    if (P > 0) throw indexSize("end");
                    P += g.length
                }
                var v = y.createRange();
                return v.setStart(h, b), v.setEnd(g, P), v;

                function notFound(e) {
                    var t = Error("The " + e + " node was not found.");
                    return t.name = "NotFoundError", t
                }

                function indexSize(e) {
                    var t = Error("There is no text at the requested " + e + " offset.");
                    return t.name = "IndexSizeError", t
                }
            };
            var l = _interopRequireDefault(n(534906)),
                u = _interopRequireDefault(n(63604)),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(339690));

            function _interopRequireDefault(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }
    }
]);