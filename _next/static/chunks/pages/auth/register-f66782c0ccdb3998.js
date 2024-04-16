(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [461], {
        478298: function(e, t, a) {
            "use strict";
            var r = a(564836);
            t.Z = void 0;
            var n = r(a(864938)),
                i = a(785893);
            t.Z = (0, n.default)((0, i.jsx)("path", {
                d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
            }), "ArrowBackIosNew")
        },
        127036: function(e, t, a) {
            "use strict";
            var r = a(564836);
            t.Z = void 0;
            var n = r(a(864938)),
                i = a(785893);
            t.Z = (0, n.default)((0, i.jsx)("path", {
                d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
            }), "Check")
        },
        576483: function(e, t, a) {
            "use strict";
            var r = a(564836);
            t.Z = void 0;
            var n = r(a(864938)),
                i = a(785893);
            t.Z = (0, n.default)((0, i.jsx)("path", {
                d: "M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"
            }), "GroupAdd")
        },
        794229: function(e, t, a) {
            "use strict";
            var r = a(564836);
            t.Z = void 0;
            var n = r(a(864938)),
                i = a(785893);
            t.Z = (0, n.default)((0, i.jsx)("path", {
                d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
            }), "Settings")
        },
        244386: function(e, t, a) {
            "use strict";
            var r = a(564836);
            t.Z = void 0;
            var n = r(a(864938)),
                i = a(785893);
            t.Z = (0, n.default)((0, i.jsx)("path", {
                d: "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H3V5h18z"
            }), "VideoLabel")
        },
        353829: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/auth/register", function() {
                return a(300216)
            }])
        },
        129210: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return googleauth
                }
            });
            var r = a(785893),
                n = a(667294),
                i = a(686426),
                l = a(571027),
                o = a(845927),
                s = a(811163),
                c = a(835704),
                d = a(675875),
                googleauth_useGoogleAuth = () => {
                    let {
                        userLogin: e
                    } = (0, l.Z)(), {
                        addAlertData: t
                    } = (0, d.Z)(), a = (0, s.useRouter)(), [r, i] = n.useState(null);
                    n.useEffect(() => {
                        if (!r) return () => {};
                        let initGoogleProfile = async () => {
                            let {
                                data: e
                            } = await c.Z.googleProfile(r);
                            googleSignIn(e)
                        };
                        initGoogleProfile()
                    }, [r]);
                    let googleSignInAction = async function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            t(!0), i(e)
                        },
                        googleSignIn = async t => {
                            if (!t) return;
                            let a = {
                                    password: t.id,
                                    email: t.email,
                                    fname: t.given_name,
                                    lname: t.given_name,
                                    image: t.picture,
                                    googel_id: t.id
                                },
                                r = {
                                    email: t.email,
                                    password: t.id,
                                    social_auth: {
                                        id: t.id,
                                        name: "google"
                                    }
                                };
                            await e(r) || googleRegister(a)
                        },
                        googleRegister = async r => {
                            let n = "Student";
                            if (r = { ...r,
                                    email: "",
                                    username: r.email,
                                    create_form: !0,
                                    password: r.password,
                                    username: r.email,
                                    confirm_password: r.password,
                                    phone: "-",
                                    gender: "-",
                                    group: n,
                                    social_auth: {
                                        id: r.password,
                                        name: "google"
                                    }
                                }, !await o.Z.processRegisterData(r, n)) return;
                            let i = {
                                email: r.username,
                                password: r.password,
                                social_auth: {
                                    id: r.password,
                                    name: "google"
                                }
                            };
                            await e(i) && (t({
                                status: "success",
                                content: "You have registered as ".concat(r.lname, " ").concat(r.fname)
                            }), a.push("/auth/edit"))
                        };
                    return {
                        googleSignInAction
                    }
                },
                m = a(947442),
                u = a.n(m),
                p = a(625662),
                h = a(425675),
                g = a.n(h),
                v = {
                    src: "/_next/static/media/googleIcon.05e14379.png",
                    height: 512,
                    width: 512,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mN4V6LL/NLKlAGIWV45m/i/dDYNBWKRl87mDEDMyPCMwQqEtV65mDx/6WT6/4WLDRDbv7gWUi3KAAJvMvVB+OELG7M7b7zVZf8zMIgCsS5DF5AEgV8HGW1+b+f5/38Bg452xzcGIJ7I0PlrgXPL59mOrZ+1GP7vYbD9slvs/9W9bNq+zV8ZgHihR9O3U0DJ/04tnz0YGlZ7gfAj2WUht7yWFcnb9d1iAOI5Ti1f3zl0vuBgYFgcBcI6ZiuCXhovD/lvvMLvv9ni+r/23Y+cGEBg4lp3ZtnlwQxAzGayIijAZHlEpPZWBkH73nsM9r33mAEg4W7q13YOHwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                googleauth = () => {
                    let {
                        googleSignInAction: e
                    } = googleauth_useGoogleAuth(), [t, a] = n.useState(!1), l = (0, i.Nq)({
                        onSuccess: t => e(t, a),
                        enable_serial_consent: !0
                    });
                    return (0, r.jsx)("div", {
                        children: t ? (0, r.jsxs)(p.Z, {
                            style: {
                                textTransform: "none"
                            },
                            variant: "outlined",
                            className: u().signButtonWrapper,
                            disabled: !0,
                            children: [(0, r.jsx)(g(), {
                                src: v,
                                width: 30,
                                height: 30
                            }), "Processing ...."]
                        }) : (0, r.jsxs)(p.Z, {
                            style: {
                                textTransform: "none"
                            },
                            variant: "outlined",
                            className: u().signButtonWrapper,
                            onClick: () => l(),
                            children: [(0, r.jsx)(g(), {
                                src: v,
                                width: 30,
                                height: 30
                            }), "Continue with Google"]
                        })
                    })
                }
        },
        300216: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSP: function() {
                    return ef
                },
                default: function() {
                    return register
                }
            });
            var r, n = a(785893),
                i = a(667294),
                l = a(386886),
                o = a(625662),
                s = a(415861),
                c = a(146574),
                d = a(746901),
                m = a(45697),
                u = a.n(m),
                p = a(690948),
                h = a(263366),
                g = a(487462),
                v = a(963961),
                x = a(458510),
                f = a(471657),
                b = a(301977),
                Z = a(108027);

            function getStepperUtilityClass(e) {
                return (0, Z.ZP)("MuiStepper", e)
            }(0, b.Z)("MuiStepper", ["root", "horizontal", "vertical", "alternativeLabel"]);
            var S = a(998216);
            let j = i.createContext({}),
                y = i.createContext({});

            function getStepConnectorUtilityClass(e) {
                return (0, Z.ZP)("MuiStepConnector", e)
            }
            let C = (0, b.Z)("MuiStepConnector", ["root", "horizontal", "vertical", "alternativeLabel", "active", "completed", "disabled", "line", "lineHorizontal", "lineVertical"]),
                N = ["className"],
                useUtilityClasses = e => {
                    let {
                        classes: t,
                        orientation: a,
                        alternativeLabel: r,
                        active: n,
                        completed: i,
                        disabled: l
                    } = e, o = {
                        root: ["root", a, r && "alternativeLabel", n && "active", i && "completed", l && "disabled"],
                        line: ["line", `line${(0,S.Z)(a)}`]
                    };
                    return (0, x.Z)(o, getStepConnectorUtilityClass, t)
                },
                w = (0, p.ZP)("div", {
                    name: "MuiStepConnector",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: a
                        } = e;
                        return [t.root, t[a.orientation], a.alternativeLabel && t.alternativeLabel, a.completed && t.completed]
                    }
                })(({
                    ownerState: e
                }) => (0, g.Z)({
                    flex: "1 1 auto"
                }, "vertical" === e.orientation && {
                    marginLeft: 12
                }, e.alternativeLabel && {
                    position: "absolute",
                    top: 12,
                    left: "calc(-50% + 20px)",
                    right: "calc(50% + 20px)"
                })),
                L = (0, p.ZP)("span", {
                    name: "MuiStepConnector",
                    slot: "Line",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: a
                        } = e;
                        return [t.line, t[`line${(0,S.Z)(a.orientation)}`]]
                    }
                })(({
                    ownerState: e,
                    theme: t
                }) => {
                    let a = "light" === t.palette.mode ? t.palette.grey[400] : t.palette.grey[600];
                    return (0, g.Z)({
                        display: "block",
                        borderColor: t.vars ? t.vars.palette.StepConnector.border : a
                    }, "horizontal" === e.orientation && {
                        borderTopStyle: "solid",
                        borderTopWidth: 1
                    }, "vertical" === e.orientation && {
                        borderLeftStyle: "solid",
                        borderLeftWidth: 1,
                        minHeight: 24
                    })
                }),
                P = i.forwardRef(function(e, t) {
                    let a = (0, f.Z)({
                            props: e,
                            name: "MuiStepConnector"
                        }),
                        {
                            className: r
                        } = a,
                        l = (0, h.Z)(a, N),
                        {
                            alternativeLabel: o,
                            orientation: s = "horizontal"
                        } = i.useContext(j),
                        {
                            active: c,
                            disabled: d,
                            completed: m
                        } = i.useContext(y),
                        u = (0, g.Z)({}, a, {
                            alternativeLabel: o,
                            orientation: s,
                            active: c,
                            completed: m,
                            disabled: d
                        }),
                        p = useUtilityClasses(u);
                    return (0, n.jsx)(w, (0, g.Z)({
                        className: (0, v.Z)(p.root, r),
                        ref: t,
                        ownerState: u
                    }, l, {
                        children: (0, n.jsx)(L, {
                            className: p.line,
                            ownerState: u
                        })
                    }))
                }),
                _ = ["activeStep", "alternativeLabel", "children", "className", "component", "connector", "nonLinear", "orientation"],
                Stepper_useUtilityClasses = e => {
                    let {
                        orientation: t,
                        alternativeLabel: a,
                        classes: r
                    } = e;
                    return (0, x.Z)({
                        root: ["root", t, a && "alternativeLabel"]
                    }, getStepperUtilityClass, r)
                },
                I = (0, p.ZP)("div", {
                    name: "MuiStepper",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: a
                        } = e;
                        return [t.root, t[a.orientation], a.alternativeLabel && t.alternativeLabel]
                    }
                })(({
                    ownerState: e
                }) => (0, g.Z)({
                    display: "flex"
                }, "horizontal" === e.orientation && {
                    flexDirection: "row",
                    alignItems: "center"
                }, "vertical" === e.orientation && {
                    flexDirection: "column"
                }, e.alternativeLabel && {
                    alignItems: "flex-start"
                })),
                R = (0, n.jsx)(P, {}),
                A = i.forwardRef(function(e, t) {
                    let a = (0, f.Z)({
                            props: e,
                            name: "MuiStepper"
                        }),
                        {
                            activeStep: r = 0,
                            alternativeLabel: l = !1,
                            children: o,
                            className: s,
                            component: c = "div",
                            connector: d = R,
                            nonLinear: m = !1,
                            orientation: u = "horizontal"
                        } = a,
                        p = (0, h.Z)(a, _),
                        x = (0, g.Z)({}, a, {
                            alternativeLabel: l,
                            orientation: u,
                            component: c
                        }),
                        b = Stepper_useUtilityClasses(x),
                        Z = i.Children.toArray(o).filter(Boolean),
                        S = Z.map((e, t) => i.cloneElement(e, (0, g.Z)({
                            index: t,
                            last: t + 1 === Z.length
                        }, e.props))),
                        y = i.useMemo(() => ({
                            activeStep: r,
                            alternativeLabel: l,
                            connector: d,
                            nonLinear: m,
                            orientation: u
                        }), [r, l, d, m, u]);
                    return (0, n.jsx)(j.Provider, {
                        value: y,
                        children: (0, n.jsx)(I, (0, g.Z)({
                            as: c,
                            ownerState: x,
                            className: (0, v.Z)(b.root, s),
                            ref: t
                        }, p, {
                            children: S
                        }))
                    })
                });

            function getStepUtilityClass(e) {
                return (0, Z.ZP)("MuiStep", e)
            }(0, b.Z)("MuiStep", ["root", "horizontal", "vertical", "alternativeLabel", "completed"]);
            let M = ["active", "children", "className", "component", "completed", "disabled", "expanded", "index", "last"],
                Step_useUtilityClasses = e => {
                    let {
                        classes: t,
                        orientation: a,
                        alternativeLabel: r,
                        completed: n
                    } = e;
                    return (0, x.Z)({
                        root: ["root", a, r && "alternativeLabel", n && "completed"]
                    }, getStepUtilityClass, t)
                },
                k = (0, p.ZP)("div", {
                    name: "MuiStep",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: a
                        } = e;
                        return [t.root, t[a.orientation], a.alternativeLabel && t.alternativeLabel, a.completed && t.completed]
                    }
                })(({
                    ownerState: e
                }) => (0, g.Z)({}, "horizontal" === e.orientation && {
                    paddingLeft: 8,
                    paddingRight: 8
                }, e.alternativeLabel && {
                    flex: 1,
                    position: "relative"
                })),
                z = i.forwardRef(function(e, t) {
                    let a = (0, f.Z)({
                            props: e,
                            name: "MuiStep"
                        }),
                        {
                            active: r,
                            children: l,
                            className: o,
                            component: s = "div",
                            completed: c,
                            disabled: d,
                            expanded: m = !1,
                            index: u,
                            last: p
                        } = a,
                        x = (0, h.Z)(a, M),
                        {
                            activeStep: b,
                            connector: Z,
                            alternativeLabel: S,
                            orientation: C,
                            nonLinear: N
                        } = i.useContext(j),
                        [w = !1, L = !1, P = !1] = [r, c, d];
                    b === u ? w = void 0 === r || r : !N && b > u ? L = void 0 === c || c : !N && b < u && (P = void 0 === d || d);
                    let _ = i.useMemo(() => ({
                            index: u,
                            last: p,
                            expanded: m,
                            icon: u + 1,
                            active: w,
                            completed: L,
                            disabled: P
                        }), [u, p, m, w, L, P]),
                        I = (0, g.Z)({}, a, {
                            active: w,
                            orientation: C,
                            alternativeLabel: S,
                            completed: L,
                            disabled: P,
                            expanded: m,
                            component: s
                        }),
                        R = Step_useUtilityClasses(I),
                        A = (0, n.jsxs)(k, (0, g.Z)({
                            as: s,
                            className: (0, v.Z)(R.root, o),
                            ref: t,
                            ownerState: I
                        }, x, {
                            children: [Z && S && 0 !== u ? Z : null, l]
                        }));
                    return (0, n.jsx)(y.Provider, {
                        value: _,
                        children: Z && !S && 0 !== u ? (0, n.jsxs)(i.Fragment, {
                            children: [Z, A]
                        }) : A
                    })
                });
            var U = a(82066),
                W = (0, U.Z)((0, n.jsx)("path", {
                    d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
                }), "CheckCircle"),
                T = (0, U.Z)((0, n.jsx)("path", {
                    d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
                }), "Warning"),
                F = a(453219);

            function getStepIconUtilityClass(e) {
                return (0, Z.ZP)("MuiStepIcon", e)
            }
            let O = (0, b.Z)("MuiStepIcon", ["root", "active", "completed", "error", "text"]),
                E = ["active", "className", "completed", "error", "icon"],
                StepIcon_useUtilityClasses = e => {
                    let {
                        classes: t,
                        active: a,
                        completed: r,
                        error: n
                    } = e;
                    return (0, x.Z)({
                        root: ["root", a && "active", r && "completed", n && "error"],
                        text: ["text"]
                    }, getStepIconUtilityClass, t)
                },
                B = (0, p.ZP)(F.Z, {
                    name: "MuiStepIcon",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })(({
                    theme: e
                }) => ({
                    display: "block",
                    transition: e.transitions.create("color", {
                        duration: e.transitions.duration.shortest
                    }),
                    color: (e.vars || e).palette.text.disabled,
                    [`&.${O.completed}`]: {
                        color: (e.vars || e).palette.primary.main
                    },
                    [`&.${O.active}`]: {
                        color: (e.vars || e).palette.primary.main
                    },
                    [`&.${O.error}`]: {
                        color: (e.vars || e).palette.error.main
                    }
                })),
                D = (0, p.ZP)("text", {
                    name: "MuiStepIcon",
                    slot: "Text",
                    overridesResolver: (e, t) => t.text
                })(({
                    theme: e
                }) => ({
                    fill: (e.vars || e).palette.primary.contrastText,
                    fontSize: e.typography.caption.fontSize,
                    fontFamily: e.typography.fontFamily
                })),
                G = i.forwardRef(function(e, t) {
                    let a = (0, f.Z)({
                            props: e,
                            name: "MuiStepIcon"
                        }),
                        {
                            active: i = !1,
                            className: l,
                            completed: o = !1,
                            error: s = !1,
                            icon: c
                        } = a,
                        d = (0, h.Z)(a, E),
                        m = (0, g.Z)({}, a, {
                            active: i,
                            completed: o,
                            error: s
                        }),
                        u = StepIcon_useUtilityClasses(m);
                    if ("number" == typeof c || "string" == typeof c) {
                        let e = (0, v.Z)(l, u.root);
                        return s ? (0, n.jsx)(B, (0, g.Z)({
                            as: T,
                            className: e,
                            ref: t,
                            ownerState: m
                        }, d)) : o ? (0, n.jsx)(B, (0, g.Z)({
                            as: W,
                            className: e,
                            ref: t,
                            ownerState: m
                        }, d)) : (0, n.jsxs)(B, (0, g.Z)({
                            className: e,
                            ref: t,
                            ownerState: m
                        }, d, {
                            children: [r || (r = (0, n.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "12"
                            })), (0, n.jsx)(D, {
                                className: u.text,
                                x: "12",
                                y: "12",
                                textAnchor: "middle",
                                dominantBaseline: "central",
                                ownerState: m,
                                children: c
                            })]
                        }))
                    }
                    return c
                });

            function getStepLabelUtilityClass(e) {
                return (0, Z.ZP)("MuiStepLabel", e)
            }
            let Y = (0, b.Z)("MuiStepLabel", ["root", "horizontal", "vertical", "label", "active", "completed", "error", "disabled", "iconContainer", "alternativeLabel", "labelContainer"]),
                V = ["children", "className", "componentsProps", "error", "icon", "optional", "slotProps", "StepIconComponent", "StepIconProps"],
                StepLabel_useUtilityClasses = e => {
                    let {
                        classes: t,
                        orientation: a,
                        active: r,
                        completed: n,
                        error: i,
                        disabled: l,
                        alternativeLabel: o
                    } = e;
                    return (0, x.Z)({
                        root: ["root", a, i && "error", l && "disabled", o && "alternativeLabel"],
                        label: ["label", r && "active", n && "completed", i && "error", l && "disabled", o && "alternativeLabel"],
                        iconContainer: ["iconContainer", r && "active", n && "completed", i && "error", l && "disabled", o && "alternativeLabel"],
                        labelContainer: ["labelContainer", o && "alternativeLabel"]
                    }, getStepLabelUtilityClass, t)
                },
                $ = (0, p.ZP)("span", {
                    name: "MuiStepLabel",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: a
                        } = e;
                        return [t.root, t[a.orientation]]
                    }
                })(({
                    ownerState: e
                }) => (0, g.Z)({
                    display: "flex",
                    alignItems: "center",
                    [`&.${Y.alternativeLabel}`]: {
                        flexDirection: "column"
                    },
                    [`&.${Y.disabled}`]: {
                        cursor: "default"
                    }
                }, "vertical" === e.orientation && {
                    textAlign: "left",
                    padding: "8px 0"
                })),
                H = (0, p.ZP)("span", {
                    name: "MuiStepLabel",
                    slot: "Label",
                    overridesResolver: (e, t) => t.label
                })(({
                    theme: e
                }) => (0, g.Z)({}, e.typography.body2, {
                    display: "block",
                    transition: e.transitions.create("color", {
                        duration: e.transitions.duration.shortest
                    }),
                    [`&.${Y.active}`]: {
                        color: (e.vars || e).palette.text.primary,
                        fontWeight: 500
                    },
                    [`&.${Y.completed}`]: {
                        color: (e.vars || e).palette.text.primary,
                        fontWeight: 500
                    },
                    [`&.${Y.alternativeLabel}`]: {
                        marginTop: 16
                    },
                    [`&.${Y.error}`]: {
                        color: (e.vars || e).palette.error.main
                    }
                })),
                q = (0, p.ZP)("span", {
                    name: "MuiStepLabel",
                    slot: "IconContainer",
                    overridesResolver: (e, t) => t.iconContainer
                })(() => ({
                    flexShrink: 0,
                    display: "flex",
                    paddingRight: 8,
                    [`&.${Y.alternativeLabel}`]: {
                        paddingRight: 0
                    }
                })),
                J = (0, p.ZP)("span", {
                    name: "MuiStepLabel",
                    slot: "LabelContainer",
                    overridesResolver: (e, t) => t.labelContainer
                })(({
                    theme: e
                }) => ({
                    width: "100%",
                    color: (e.vars || e).palette.text.secondary,
                    [`&.${Y.alternativeLabel}`]: {
                        textAlign: "center"
                    }
                })),
                Q = i.forwardRef(function(e, t) {
                    var a;
                    let r = (0, f.Z)({
                            props: e,
                            name: "MuiStepLabel"
                        }),
                        {
                            children: l,
                            className: o,
                            componentsProps: s = {},
                            error: c = !1,
                            icon: d,
                            optional: m,
                            slotProps: u = {},
                            StepIconComponent: p,
                            StepIconProps: x
                        } = r,
                        b = (0, h.Z)(r, V),
                        {
                            alternativeLabel: Z,
                            orientation: S
                        } = i.useContext(j),
                        {
                            active: C,
                            disabled: N,
                            completed: w,
                            icon: L
                        } = i.useContext(y),
                        P = d || L,
                        _ = p;
                    P && !_ && (_ = G);
                    let I = (0, g.Z)({}, r, {
                            active: C,
                            alternativeLabel: Z,
                            completed: w,
                            disabled: N,
                            error: c,
                            orientation: S
                        }),
                        R = StepLabel_useUtilityClasses(I),
                        A = null != (a = u.label) ? a : s.label;
                    return (0, n.jsxs)($, (0, g.Z)({
                        className: (0, v.Z)(R.root, o),
                        ref: t,
                        ownerState: I
                    }, b, {
                        children: [P || _ ? (0, n.jsx)(q, {
                            className: R.iconContainer,
                            ownerState: I,
                            children: (0, n.jsx)(_, (0, g.Z)({
                                completed: w,
                                active: C,
                                error: c,
                                icon: P
                            }, x))
                        }) : null, (0, n.jsxs)(J, {
                            className: R.labelContainer,
                            ownerState: I,
                            children: [l ? (0, n.jsx)(H, (0, g.Z)({
                                ownerState: I
                            }, A, {
                                className: (0, v.Z)(R.label, null == A ? void 0 : A.className),
                                children: l
                            })) : null, m]
                        })]
                    }))
                });
            Q.muiName = "StepLabel", a(127036);
            var X = a(794229),
                K = a(576483),
                ee = a(244386),
                et = a(478298),
                ea = a(14416),
                er = a(811163),
                en = a(472581),
                ei = a.n(en),
                el = a(402247),
                eo = a(845927),
                es = a(706032),
                ec = a(571027),
                ed = a(675875),
                em = a(31557),
                eu = a(129210);
            (0, p.ZP)(P)(e => {
                let {
                    theme: t
                } = e;
                return {
                    ["&.".concat(C.alternativeLabel)]: {
                        top: 10,
                        left: "calc(-50% + 16px)",
                        right: "calc(50% + 16px)"
                    },
                    ["&.".concat(C.active)]: {
                        ["& .".concat(C.line)]: {
                            borderColor: "#784af4"
                        }
                    },
                    ["&.".concat(C.completed)]: {
                        ["& .".concat(C.line)]: {
                            borderColor: "#784af4"
                        }
                    },
                    ["& .".concat(C.line)]: {
                        borderColor: "dark" === t.palette.mode ? t.palette.grey[800] : "#eaeaf0",
                        borderTopWidth: 3,
                        borderRadius: 1
                    }
                }
            }), (0, p.ZP)("div")(e => {
                let {
                    theme: t,
                    ownerState: a
                } = e;
                return {
                    color: "dark" === t.palette.mode ? t.palette.grey[700] : "#eaeaf0",
                    display: "flex",
                    height: 22,
                    alignItems: "center",
                    ...a.active && {
                        color: "#784af4"
                    },
                    "& .QontoStepIcon-completedIcon": {
                        color: "#784af4",
                        zIndex: 1,
                        fontSize: 18
                    },
                    "& .QontoStepIcon-circle": {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "currentColor"
                    }
                }
            }), u().bool, u().string, u().bool;
            let ep = (0, p.ZP)(P)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        ["&.".concat(C.alternativeLabel)]: {
                            top: 22
                        },
                        ["&.".concat(C.active)]: {
                            ["& .".concat(C.line)]: {
                                backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
                            }
                        },
                        ["&.".concat(C.completed)]: {
                            ["& .".concat(C.line)]: {
                                backgroundImage: "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"
                            }
                        },
                        ["& .".concat(C.line)]: {
                            height: 3,
                            border: 0,
                            backgroundColor: "dark" === t.palette.mode ? t.palette.grey[800] : "#eaeaf0",
                            borderRadius: 1
                        }
                    }
                }),
                eh = (0, p.ZP)("div")(e => {
                    let {
                        theme: t,
                        ownerState: a
                    } = e;
                    return {
                        backgroundColor: "dark" === t.palette.mode ? t.palette.grey[700] : "#ccc",
                        zIndex: 1,
                        color: "#fff",
                        width: 50,
                        height: 50,
                        display: "flex",
                        borderRadius: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        ...a.active && {
                            backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
                            boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
                        },
                        ...a.completed && {
                            backgroundImage: "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"
                        }
                    }
                });

            function ColorlibStepIcon(e) {
                let {
                    active: t,
                    completed: a,
                    className: r
                } = e, i = {
                    1: (0, n.jsx)(K.Z, {}),
                    2: (0, n.jsx)(X.Z, {}),
                    3: (0, n.jsx)(ee.Z, {})
                };
                return (0, n.jsx)(eh, {
                    ownerState: {
                        completed: a,
                        active: t
                    },
                    className: r,
                    children: i[String(e.icon)]
                })
            }
            ColorlibStepIcon.propTypes = {
                active: u().bool,
                className: u().string,
                completed: u().bool,
                icon: u().node
            };
            let eg = ["Personal Details", "Login Details"],
                getStepContentForm = (e, t, a, r, i, o, s, c, d) => {
                    switch (e) {
                        case 0:
                            return (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.p7, {
                                                handleOnChange: i,
                                                value: c.group,
                                                options: t,
                                                label: "What is your role?",
                                                error: s.group,
                                                fieldName: "group"
                                            })
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsxs)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: [(0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: (0, n.jsx)(el.FY, {
                                                handleOnChange: r,
                                                value: c.fname,
                                                fieldName: "fname",
                                                error: s.fname,
                                                label: "First name"
                                            })
                                        }), (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 6,
                                            md: 6,
                                            lg: 6,
                                            children: (0, n.jsx)(el.FY, {
                                                handleOnChange: r,
                                                value: c.lname,
                                                fieldName: "lname",
                                                error: s.lname,
                                                label: "Last name"
                                            })
                                        })]
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.p7, {
                                                handleOnChange: i,
                                                value: c.gender,
                                                options: a,
                                                label: "What is your gender?",
                                                error: s.gender,
                                                fieldName: "gender"
                                            })
                                        })
                                    })
                                })]
                            });
                        case 1:
                            return (0, n.jsxs)("div", {
                                children: [(0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.FY, {
                                                handleOnChange: r,
                                                value: c.phone,
                                                error: s.phone,
                                                fieldName: "phone",
                                                label: "Phone"
                                            })
                                        })
                                    })
                                }), "Student" !== o && (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.FY, {
                                                handleOnChange: r,
                                                value: c.email,
                                                fieldName: "email",
                                                error: s.email,
                                                label: "Email"
                                            })
                                        })
                                    })
                                }), ("Student" === o || "Teacher" === o) && (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.p7, {
                                                handleOnChange: i,
                                                value: c.class_name,
                                                options: d,
                                                label: "Your class?",
                                                error: s.class_name,
                                                fieldName: "class_name"
                                            })
                                        })
                                    })
                                }), "Student" === o && (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.FY, {
                                                handleOnChange: r,
                                                value: c.username,
                                                fieldName: "username",
                                                error: s.username,
                                                label: "Username/Nickname"
                                            })
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-30",
                                    children: (0, n.jsx)(l.ZP, {
                                        container: !0,
                                        spacing: 2,
                                        children: (0, n.jsx)(l.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            md: 12,
                                            lg: 12,
                                            children: (0, n.jsx)(el.sm, {
                                                handleOnChange: r,
                                                error: s.password,
                                                fieldName: "password",
                                                label: "Password",
                                                value: c.password
                                            })
                                        })
                                    })
                                })]
                            });
                        default:
                            return "Unknown step"
                    }
                };
            var ev = (0, ea.$j)(function(e) {
                    return {
                        classes: e.classes
                    }
                })(e => {
                    let t = (0, er.useRouter)(),
                        {
                            userLogin: a
                        } = (0, ec.Z)(),
                        {
                            user: r
                        } = (0, em.Z)(),
                        {
                            addAlertData: l,
                            openAlert: m
                        } = (0, ed.Z)(),
                        [u, p] = i.useState(0),
                        [h, g] = i.useState(!1),
                        [v, x] = i.useState([{
                            id: "Male",
                            name: "Male"
                        }, {
                            id: "Female",
                            name: "Female"
                        }]),
                        [f, b] = i.useState(!1),
                        [Z, S] = i.useState("Student"),
                        [j, y] = i.useState(!1),
                        [C, N] = i.useState("Create an account"),
                        [w, L] = i.useState(!1),
                        [P, _] = i.useState({
                            image: "",
                            fname: "",
                            lname: "",
                            email: "",
                            phone: "",
                            group: "Student",
                            gender: "",
                            password_form: !0,
                            password: "",
                            username: "",
                            source: "web",
                            school_name: "",
                            class_data: null,
                            region: "",
                            country: "",
                            occupation: "",
                            class_name: "",
                            create_form: !0,
                            social_auth: null
                        }),
                        [I, R] = i.useState({
                            fname: !1,
                            lname: !1,
                            email: !1,
                            username: !1,
                            group: !1,
                            gender: !1,
                            phone: !1,
                            password: !1,
                            class_name: !1
                        }),
                        [M, k] = i.useState(!1),
                        [U, W] = i.useState(!1),
                        handleNext = async () => {
                            if (k(!1), "" === P.group) return R({
                                group: !0
                            }), !1;
                            if ("" === P.fname) return R({
                                fname: !0
                            }), !1;
                            if ("" === P.lname) return R({
                                lname: !0
                            }), !1;
                            if ("" === P.gender) return R({
                                gender: !0
                            }), !1;
                            if (u < 1) return p(e => e + 1), !1;
                            if (1 === u) {
                                var e, n;
                                if ("" === P.phone) return R({
                                    phone: !0
                                }), !1;
                                if ("Student" !== Z && "" === P.email) return R({
                                    email: !0
                                }), !1;
                                if ("Student" === Z && "" === P.username) return R({
                                    username: !0
                                }), !1;
                                if ("Student" === Z && "" === P.class_name) return R({
                                    class_name: !0
                                }), !1;
                                if ("" === P.password) return R({
                                    password: !0
                                }), !1;
                                if (g(!0), !await eo.Z.processRegisterData(P, Z)) return "Student" === Z ? (k("The username already taken please try another"), g(!1), R({
                                    username: !0
                                })) : (k("The email address already registered please try another"), R({
                                    email: !0
                                }), g(!1)), !1;
                                let i = "Student" === Z ? P.username : P.email;
                                return P.email = i, a(P), l({
                                    status: "success",
                                    content: r.isLoggedIn ? "You have registered as ".concat(null === (e = r.data) || void 0 === e ? void 0 : e.first_name, " ").concat(null === (n = r.data) || void 0 === n ? void 0 : n.last_name) : "Successfully registered"
                                }), void t.push("/auth/edit")
                            }
                        },
                        handleSdAccountForm = () => {
                            p(0), b(!f)
                        };
                    return i.useEffect(() => {
                        let findUserGroups = async () => {
                                let {
                                    data: e
                                } = await eo.Z.findAllGroups();
                                y(e.map(e => ({
                                    id: e.name,
                                    name: "Parent" === e.name ? "Parent/Caregiver" : e.name
                                })).filter(e => "Admin" !== e.name && "Staff" !== e.name))
                            },
                            getClasses = async () => {
                                let e = await es.Z.findClasses();
                                e.push({
                                    id: 12,
                                    name: "Other",
                                    roman: "XII"
                                }), W(e)
                            };
                        findUserGroups(), getClasses()
                    }, []), (0, n.jsxs)("div", {
                        className: ei().authFormWrapper,
                        children: [f && (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("div", {
                                className: "mb-30 sd-flex",
                                children: [(0, n.jsx)("div", {
                                    children: (0, n.jsx)(o.Z, {
                                        onClick: handleSdAccountForm,
                                        children: (0, n.jsx)(et.Z, {
                                            className: ei().backButton
                                        })
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "sd-flex-column",
                                    children: (0, n.jsx)(s.Z, {
                                        variant: "h5",
                                        children: C
                                    })
                                })]
                            }), (0, n.jsx)(A, {
                                alternativeLabel: !0,
                                activeStep: 1,
                                connector: (0, n.jsx)(ep, {}),
                                children: eg.map(e => (0, n.jsx)(z, {
                                    children: (0, n.jsx)(Q, {
                                        StepIconComponent: ColorlibStepIcon,
                                        children: e
                                    })
                                }, e))
                            }), (0, n.jsxs)(c.Z, {
                                children: [M && (0, n.jsx)("div", {
                                    className: "".concat(ei().alert, " mt-10"),
                                    children: (0, n.jsxs)(d.Z, {
                                        variant: "outlined",
                                        severity: "error",
                                        onClose: () => {
                                            k(!1)
                                        },
                                        children: [" ", M]
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "",
                                    children: getStepContentForm(u, j, v, e => t => {
                                        _({ ...P,
                                            [e]: t.target.value
                                        })
                                    }, e => t => {
                                        if ("group" === e) S(j.filter(e => e.id === t.target.value)[0].name);
                                        else if ("class_name" === e) {
                                            let e = U.filter(e => e.id === t.target.value);
                                            return _({ ...P,
                                                class_name: t.target.value,
                                                class_data: e[0]
                                            }), !1
                                        }
                                        _({ ...P,
                                            [e]: t.target.value
                                        })
                                    }, Z, I, P, U)
                                }), (0, n.jsx)("div", {
                                    className: M ? ei().errorContainer : ei().registerFormNextButtonWrapper,
                                    children: h ? (0, n.jsx)("div", {
                                        style: {
                                            width: "100%"
                                        },
                                        children: (0, n.jsx)("div", {
                                            style: {
                                                float: "right"
                                            },
                                            children: (0, n.jsx)(o.Z, {
                                                style: {
                                                    textTransform: "capitalize"
                                                },
                                                disabled: !0,
                                                variant: "contained",
                                                color: "primary",
                                                children: "Registering.."
                                            })
                                        })
                                    }) : (0, n.jsx)("div", {
                                        style: {
                                            width: "100%"
                                        },
                                        children: (0, n.jsxs)("div", {
                                            style: {
                                                float: "right"
                                            },
                                            children: [(0, n.jsx)(o.Z, {
                                                style: {
                                                    textTransform: "capitalize"
                                                },
                                                disabled: 0 === u,
                                                onClick: () => {
                                                    p(e => e - 1)
                                                },
                                                children: "Previous"
                                            }), (0, n.jsx)(o.Z, {
                                                variant: "contained",
                                                color: "primary",
                                                onClick: handleNext,
                                                style: {
                                                    textTransform: "capitalize"
                                                },
                                                children: u === eg.length - 1 ? "Register" : "Next"
                                            })]
                                        })
                                    })
                                })]
                            })]
                        }), !f && (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(c.Z, {
                                children: (0, n.jsxs)("div", {
                                    className: "",
                                    children: [(0, n.jsx)(s.Z, {
                                        variant: "h5",
                                        children: "Register"
                                    }), (0, n.jsxs)("div", {
                                        className: "mt-20",
                                        children: ["You dont have an account? ", (0, n.jsx)(o.Z, {
                                            style: {
                                                textTransform: "none"
                                            },
                                            onClick: () => t.push("/auth/login"),
                                            children: "Login here"
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "mt-20",
                                        children: (0, n.jsx)(o.Z, {
                                            onClick: handleSdAccountForm,
                                            className: ei().authActionButton,
                                            variant: "contained",
                                            style: {
                                                textTransform: "capitalize"
                                            },
                                            color: "primary",
                                            children: C
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: ei().separatorContainer,
                                        children: (0, n.jsx)("span", {
                                            className: ei().innerSeparator,
                                            children: (0, n.jsx)("span", {
                                                children: "OR"
                                            })
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-30",
                                        children: (0, n.jsx)(eu.Z, {})
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: ei().registerFormButtonWrapper
                            })]
                        })]
                    })
                }),
                ex = a(763560),
                ef = !0,
                register = () => (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(ex.o$, {
                        title: "Register"
                    }), (0, n.jsx)(ev, {})]
                })
        },
        947442: function(e) {
            e.exports = {
                signButtonWrapper: "GoogleSignInButton_signButtonWrapper__OztBs"
            }
        },
        892703: function(e, t, a) {
            "use strict";
            var r = a(150414);

            function emptyFunction() {}

            function emptyFunctionWithReset() {}
            emptyFunctionWithReset.resetWarningCache = emptyFunction, e.exports = function() {
                function shim(e, t, a, n, i, l) {
                    if (l !== r) {
                        var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
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
        45697: function(e, t, a) {
            e.exports = a(892703)()
        },
        150414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], function() {
            return e(e.s = 353829)
        }), _N_E = e.O()
    }
]);