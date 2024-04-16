(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1601], {
        794229: function(e, t, n) {
            "use strict";
            var o = n(564836);
            t.Z = void 0;
            var r = o(n(864938)),
                s = n(785893);
            t.Z = (0, r.default)((0, s.jsx)("path", {
                d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
            }), "Settings")
        },
        744267: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return g
                }
            });
            var o = n(487462),
                r = n(263366),
                s = n(667294),
                i = n(963961),
                a = n(458510),
                c = n(690948),
                l = n(471657),
                u = n(301977),
                d = n(108027);

            function getCardContentUtilityClass(e) {
                return (0, d.ZP)("MuiCardContent", e)
            }(0, u.Z)("MuiCardContent", ["root"]);
            var p = n(785893);
            let h = ["className", "component"],
                useUtilityClasses = e => {
                    let {
                        classes: t
                    } = e;
                    return (0, a.Z)({
                        root: ["root"]
                    }, getCardContentUtilityClass, t)
                },
                m = (0, c.ZP)("div", {
                    name: "MuiCardContent",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })(() => ({
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                })),
                f = s.forwardRef(function(e, t) {
                    let n = (0, l.Z)({
                            props: e,
                            name: "MuiCardContent"
                        }),
                        {
                            className: s,
                            component: a = "div"
                        } = n,
                        c = (0, r.Z)(n, h),
                        u = (0, o.Z)({}, n, {
                            component: a
                        }),
                        d = useUtilityClasses(u);
                    return (0, p.jsx)(m, (0, o.Z)({
                        as: a,
                        className: (0, i.Z)(d.root, s),
                        ownerState: u,
                        ref: t
                    }, c))
                });
            var g = f
        },
        520704: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/notes/list_notes/[...id]", function() {
                return n(616993)
            }])
        },
        1526: function(e, t, n) {
            "use strict";
            n.d(t, {
                B: function() {
                    return useIsElementVisible
                }
            });
            var o = n(667294);
            let useForceRerender = () => {
                    let [, e] = (0, o.useState)(0);
                    return () => e(e => e + 1)
                },
                useIsElementVisible = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        [n, r] = (0, o.useState)(!1),
                        s = useForceRerender();
                    (0, o.useEffect)(() => {
                        s()
                    }, []), (0, o.useEffect)(() => {
                        if (!e) return;
                        let n = new IntersectionObserver(handleVisibilityChange, t);
                        return n.observe(e), () => n.unobserve(e)
                    }, [e, t]);
                    let handleVisibilityChange = e => {
                        let [t] = e;
                        return r(t.isIntersecting)
                    };
                    return n
                }
        },
        302489: function(e, t, n) {
            "use strict";
            var o = n(785893),
                r = n(667294),
                s = n(112714),
                i = n.n(s),
                a = n(146574),
                c = n(415861),
                l = n(288078),
                u = n(69734),
                d = n(744267),
                p = n(625662);
            n(184248);
            var h = n(386529);
            n(455169);
            var m = n(14416),
                f = n(811163);
            let g = {
                desktop: {
                    breakpoint: {
                        max: 3e3,
                        min: 1024
                    },
                    items: 4,
                    slidesToSlide: 4
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    slidesToSlide: 2
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    slidesToSlide: 1
                }
            };
            t.Z = e => {
                (0, m.I0)();
                let [t, n] = r.useState(null), s = (0, f.useRouter)();
                return r.useEffect(() => {
                    let initConncet = async () => {
                        let e = await u.Z.findTeachersToConnect();
                        if (!e) return () => {};
                        n(e = e.filter(e => e.user && e.user.length > 0).map(e => ({
                            user: e.user.find(e => "0" !== e.first_name || "0" !== e.last_name)
                        })))
                    };
                    initConncet()
                }, []), (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("div", {
                        className: i().teacherConncetRowWrapper,
                        children: (0, o.jsxs)(a.Z, {
                            children: [(0, o.jsx)(c.Z, {
                                variant: "h3",
                                children: (0, o.jsx)("b", {
                                    children: "Connect with teachers"
                                })
                            }), (0, o.jsx)("div", {
                                className: i().innerRowWrapper,
                                children: t ? (0, o.jsx)(h.default, {
                                    responsive: g,
                                    ssr: !0,
                                    containerClass: "carousel-container",
                                    itemClass: "carousel-item-padding-40-p",
                                    children: t.map((e, t) => (0, o.jsxs)(p.Z, {
                                        className: i().cardWrapper,
                                        onClick: () => {
                                            s.push("/users/public/view/".concat(e.user.user_id))
                                        },
                                        children: [(0, o.jsx)("div", {
                                            className: i().imageWrapper,
                                            children: (0, o.jsx)("img", {
                                                src: e.user.image
                                            })
                                        }), (0, o.jsxs)(d.Z, {
                                            children: [(0, o.jsx)(c.Z, {
                                                gutterBottom: !0,
                                                variant: "h6",
                                                component: "div",
                                                children: (0, o.jsx)("b", {
                                                    children: "".concat(e.user.first_name, " ").concat(e.user.last_name)
                                                })
                                            }), (0, o.jsx)(c.Z, {
                                                variant: "body2",
                                                color: "text.secondary"
                                            })]
                                        }), (0, o.jsx)("div", {
                                            className: i().userAvatarWrapper
                                        })]
                                    }, t))
                                }) : (0, o.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "20px"
                                    },
                                    children: [void 0, void 0, void 0, void 0].map(e => (0, o.jsx)(l.Z, {
                                        variant: "rectangular",
                                        className: i().cardWrapper
                                    }, e))
                                })
                            })]
                        })
                    })
                })
            }
        },
        616993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var o = n(785893),
                r = n(667294),
                s = n(811163),
                i = n(14416),
                a = n(675738),
                c = n(618331),
                l = n(111135),
                u = n.n(l),
                d = n(348748),
                p = n(81263),
                h = n(270219),
                m = n(624039),
                f = n(836783),
                g = n(146574),
                v = n(602831),
                C = n.n(v),
                _ = n(105934);

            function ZoomComponent(e) {
                var t, n;
                let r = {
                    zoomContainer: {
                        width: e.width,
                        minHeight: e.height,
                        position: e.position,
                        top: null !== (t = e.top) && void 0 !== t ? t : e.zoomContents.top,
                        left: null !== (n = e.left) && void 0 !== n ? n : e.zoomContents.left,
                        paddingLeft: e.paddingLeft,
                        paddingRight: e.paddingRight,
                        paddingTop: e.paddingTop,
                        paddingBottom: e.paddingBottom,
                        backgroundColor: e.backgroundColor,
                        color: e.color,
                        fontSize: e.fontSize,
                        fontWeight: e.fontWeight,
                        zIndex: 1e7
                    }
                };
                return (0, o.jsx)("div", {
                    style: r.zoomContainer,
                    children: " " !== e.contents ? e.contents : e.zoomContents.contents
                })
            }
            n(291879), ZoomComponent.defaultProps = {
                position: "absolute",
                backgroundColor: "rgba(0,0,0,0.8)",
                width: 400,
                height: 50,
                paddingRight: 10,
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 10,
                color: "white",
                fontSize: 36,
                contents: " ",
                fontWeight: "bold"
            };
            let x = new class {
                getMouseEvent(e, t, n, o) {
                    e && e.target && e.target.innerText ? (o.contents = "", e.target.innerText && "" !== e.target.innerText ? e.target.id && "notesPage" === e.target.id ? t(!1) : (t(!0), o.top = e.pageY + 20, o.left = e.pageX, o.contents = e.target.innerText, n(o)) : t(!1)) : t(!1)
                }
            };
            var w = n(794229),
                j = n(450594),
                b = n(415861),
                y = n(82278),
                T = n(545625),
                I = n.n(T),
                S = n(245111),
                F = n(674005);
            let DropDown = e => {
                var t;
                return (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)("div", {
                        style: e.className ? {} : {
                            width: e.width,
                            minHeight: e.height,
                            borderRadius: e.borderRadius,
                            border: e.border,
                            backgroundColor: e.backgroundColor,
                            color: e.color,
                            display: e.display,
                            alignItems: e.alignItems,
                            marginTop: e.open ? 100 : 0,
                            padding: "1%"
                        },
                        className: null !== (t = e.className) && void 0 !== t ? t : "",
                        children: [(0, o.jsx)("div", {
                            style: {
                                flex: "auto",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: e.content
                        }), (0, o.jsx)("div", {
                            onClick: e.onclick,
                            children: (0, o.jsx)(S.Z, {})
                        })]
                    })
                })
            };
            DropDown.defaultProps = {
                width: "80%",
                height: 35,
                borderRadius: 10,
                border: "1px solid lightgrey",
                backgroundColor: "white",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                content: " ",
                onclick: () => {}
            };
            let MenuContainer = e => {
                var t;
                let [n, s] = r.useState(!1), [i, a] = r.useState(null !== (t = y.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== t ? t : "default"), [c, l] = r.useState(!1), u = {
                    headerContainer: {
                        width: "100%",
                        height: 50,
                        backgroundColor: "grey",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        display: "flex",
                        alignItems: "center"
                    },
                    closeContainer: {
                        width: 30,
                        height: 30,
                        backgroundColor: "white",
                        borderRadius: 30,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "5%"
                    },
                    contentsContainer: {
                        width: "90%",
                        backgroundColor: "white",
                        borderRadius: 10,
                        minHeight: "30%",
                        marginTop: "-10%",
                        marginLeft: "auto",
                        marginRight: "auto",
                        boxShadow: "1px 1px 1px -2px black",
                        marginTop: "2%",
                        paddingBottom: "2%"
                    }
                }, inclusiveController = t => {
                    t && t.feature && t.content && y.a.setInclusiveFeature(e.inclusiveContents, t.feature, t.content, e.dispatch)
                }, controlrDropDown = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    t && n && o && (a(t), y.a.setInclusiveFeature(e.inclusiveContents, n.feature, o, e.dispatch)), l(!c)
                };
                return (0, o.jsxs)("div", {
                    className: I().outerContainerMenu,
                    children: [(0, o.jsx)("div", {
                        style: u.headerContainer,
                        children: (0, o.jsx)("div", {
                            style: u.closeContainer,
                            id: "close",
                            children: (0, o.jsx)(j.Z, {
                                id: "innerClose"
                            })
                        })
                    }), k.map((t, n) => {
                        var s;
                        return (0, o.jsxs)("div", {
                            style: u.contentsContainer,
                            children: [(0, o.jsx)(b.Z, {
                                variant: "h5",
                                sx: {
                                    marginLeft: "5%",
                                    paddingTop: "5%",
                                    fontFamily: null !== (s = y.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== s ? s : ""
                                },
                                children: t.header
                            }), (0, o.jsx)("div", {
                                className: I().contentsContainer,
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    flexDirection: "row",
                                    marginTop: "5%",
                                    marginLeft: "Contents Adjustment" !== t.header ? "2%" : "0%"
                                },
                                children: t.contents.map((t, n) => {
                                    var s, a;
                                    return (0, o.jsxs)(r.Fragment, {
                                        children: [(0, o.jsxs)("button", {
                                            className: "font" !== t.feature && y.a.getSpecificInclusiveFeature(e.inclusiveContents, t.feature) ? I().containerActive : "font" !== t.feature ? I().container : I().containerFont,
                                            onClick: () => {
                                                "font" !== t.feature && inclusiveController(t)
                                            },
                                            style: {
                                                outline: "none",
                                                border: "none",
                                                fontSize: 16,
                                                fontFamily: null !== (s = y.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== s ? s : "",
                                                backgroundColor: "transprent"
                                            },
                                            "aria-label": "You have clicked ".concat(null !== (a = null == t ? void 0 : t.content) && void 0 !== a ? a : ""),
                                            children: [t.content, "zoom" === t.feature ? (0, o.jsx)(F.Z, {
                                                style: {
                                                    width: 50,
                                                    height: 50
                                                }
                                            }) : null, "font" === t.feature ? (0, o.jsx)(DropDown, {
                                                content: i,
                                                onclick: () => controlrDropDown(null, null, null)
                                            }) : null]
                                        }), c && "font" === t.feature ? (0, o.jsx)("div", {
                                            className: I().dropDownMenu,
                                            children: t.childrens && t.childrens.length > 0 ? t.childrens.map((e, n) => (0, o.jsx)("button", {
                                                style: {
                                                    color: "white",
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "5%",
                                                    cursor: "pointer",
                                                    fontFamily: e && e.fontFamily ? e.fontFamily : "TimesNewRoman",
                                                    textAlign: "start",
                                                    border: "none",
                                                    backgroundColor: "transparent",
                                                    outline: "none"
                                                },
                                                onClick: () => controlrDropDown(e && e.content ? e.content : "", t, e && e.fontFamily ? e.fontFamily : "TimesNewRoman"),
                                                children: e && e.content ? e.content : " "
                                            }, "".concat(n) + "dropdown")) : null
                                        }) : null]
                                    }, "".concat(n) + "contents")
                                })
                            })]
                        }, "".concat(n) + "inclusive")
                    })]
                })
            };

            function mapStateToProps(e) {
                return {
                    state: e,
                    showInclusiveMenu: e.showInclusiveMenu,
                    inclusiveContents: e.inclusiveContents
                }
            }(0, i.$j)(mapStateToProps)(function(e) {
                let t = {
                    iconContainer: {
                        backgroundColor: "#871617",
                        height: 80,
                        width: 80,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 40,
                        position: "fixed",
                        top: "85%",
                        left: "2%",
                        right: "89%",
                        bottom: "5%",
                        outline: "none",
                        border: "none"
                    },
                    iconStyle: {
                        width: 50,
                        height: 50,
                        color: "white"
                    }
                };
                return e.showInclusiveMenu ? null : (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)("button", {
                        style: t.iconContainer,
                        onClick: () => {
                            e.dispatch(p.g.setShowInclusiveMenuContainer(!e.showInclusiveMenu))
                        },
                        "aria-label": "You have clicked inclusive button",
                        children: (0, o.jsx)(w.Z, {
                            style: t.iconStyle
                        })
                    })
                })
            }), (0, i.$j)(mapStateToProps)(function(e) {
                let removeMenuContainer = t => {
                    t && t.target && ("outerContainer" === t.target.id || "close" === t.target.id || "innerClose" === t.target.id) && e.dispatch(p.g.setShowInclusiveMenuContainer(!1))
                };
                return e.showInclusiveMenu ? (0, o.jsxs)("div", {
                    style: {
                        position: "fixed",
                        zIndex: 99999999999,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        right: 0,
                        backgroundColor: "rgba(0,0,0,0.2)",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    },
                    onClick: e => removeMenuContainer(e),
                    id: "outerContainer",
                    children: [(0, o.jsx)(_.f, {
                        id: 10,
                        keyName: "inclusiceFeature01",
                        feature: "Inclusive",
                        action: "click-font-timefont"
                    }), (0, o.jsx)(MenuContainer, {
                        dispatch: e.dispatch,
                        inclusiveContents: e.inclusiveContents
                    })]
                }) : null
            });
            let k = [{
                header: "Contents Adjustment",
                contents: [{
                    content: "Readable fonts",
                    feature: "font",
                    childrens: [{
                        content: "default",
                        fontFamily: "none"
                    }, {
                        content: "Chalkboard",
                        fontFamily: "Chalkboard"
                    }, {
                        content: "TimesNewRoman",
                        fontFamily: "TimesNewRoman"
                    }]
                }, {
                    content: "Text magnifier",
                    feature: "zoom",
                    childrens: null
                }]
            }, {
                header: "Color Adjustment",
                contents: [{
                    content: "Theme",
                    feature: "theme",
                    childrens: null
                }]
            }];
            var Z = n(1526),
                N = n(200384),
                W = n(135266);
            let R = (0, W.Z)();
            var M = n(237671),
                E = n(410747),
                U = n(700983),
                P = n.n(U),
                resource_center_TeachersContentByTopic = e => {
                    let {
                        findContentByTopic: t
                    } = (0, E.Z)(), [n, s] = r.useState(null), [i, a] = r.useState("");
                    return r.useEffect(() => {
                        if (!e.data.activeTopic) return () => {};
                        let initFindConetnt = async () => {
                            s(await t(e.data.activeTopic))
                        };
                        initFindConetnt()
                    }, [e.data.activeTopic]), r.useEffect(() => {
                        if (!n) return () => {};
                        let initTopicName = async () => {
                            if (!e.data.activeTopic) return () => {};
                            let t = await d.Z.processTopics(e.data.subjectId, null, e.data.classId, null, e.data.activeTopic, null);
                            a((t.children && t.children.find(t => parseInt(t.id) === parseInt(e.data.activeTopic) && "Topic" === t.type)).content)
                        };
                        initTopicName()
                    }, [n]), (0, o.jsx)(o.Fragment, {
                        children: n && (0, o.jsxs)("div", {
                            className: P().teachersContentByTopicRowWrapper,
                            children: [(0, o.jsx)("div", {
                                className: P().segmentWrapper
                            }), (0, o.jsxs)(R, {
                                children: [(0, o.jsxs)(b.Z, {
                                    variant: "h3",
                                    children: ["Learn ", (0, o.jsx)("br", {}), (0, o.jsx)("b", {
                                        children: i
                                    }), " ", (0, o.jsx)("br", {}), "from the Teachers"]
                                }), (0, o.jsx)(M.Z, {
                                    content: n
                                })]
                            })]
                        })
                    })
                },
                D = n(196800),
                z = n(302489),
                q = (0, i.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(e => {
                    var t;
                    let n = (0, i.I0)(),
                        l = r.useRef(),
                        d = r.useRef(null);
                    r.useRef(null);
                    let [p, h] = r.useState(!1), [v, x] = r.useState(!1), [w, j] = r.useState(null), {
                        user: b
                    } = (0, m.Z)(), [T, I] = r.useState(!1), [S, F] = r.useState(0), [k, W] = r.useState({
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        contents: " "
                    }), R = (0, Z.B)(d.current), {
                        content_scroll_view: M
                    } = (0, i.v9)(e => e.trc_content_data), E = (0, s.useRouter)(), U = null !== (t = y.a.getInclusiveFeature(e.notes_reducers.inclusiveContents)) && void 0 !== t ? t : "", P = y.a.getSpecificInclusiveFeature(e.notes_reducers.inclusiveContents, "theme"), q = y.a.getInclusiveFeature(e.notes_reducers.inclusiveContents, "theme") ? "#121212" : "white";
                    return r.useEffect(() => {
                        var e;
                        if (!M) return () => {};
                        null === (e = d.current) || void 0 === e || e.scrollIntoView(), n((0, D.Xg)(!1))
                    }, [M]), (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)("div", {
                            className: "notesContainerPage",
                            id: "notesPage",
                            style: {
                                fontFamily: U,
                                backgroundColor: P ? q : "white"
                            },
                            children: [T && y.a.getSpecificInclusiveFeature(e.notes_reducers.inclusiveContents, "zoom") ? (0, o.jsx)(ZoomComponent, {
                                zoomContents: k
                            }) : null, (0, o.jsx)(_.f, {
                                page: "notesPage",
                                id: 2,
                                keyName: "page2",
                                end: w,
                                pageType: "notes",
                                className: E.query && E.query.id ? parseInt(E.query.id[0]) - 1 : 1,
                                subjectId: e.notes_reducers.subjectId,
                                topicId: e.notes_reducers.activeTopic,
                                subtopicId: e.notes_reducers.activeSubtopic && e.notes_reducers.activeSubtopic.token ? e.notes_reducers.activeSubtopic.token : null,
                                conceptId: null
                            }), (0, o.jsx)(f.a5, {
                                id: 1,
                                userId: e.notes_reducers.profileId,
                                features: "notesPage"
                            }), (0, o.jsx)(g.Z, {
                                children: (0, o.jsxs)("div", {
                                    className: u().notesFrameWrapper,
                                    children: [(0, o.jsx)("div", {
                                        className: u().notesLeftFrameWrapper,
                                        children: (0, o.jsx)(a.Ne, {
                                            flex: "flex-end",
                                            paddingRight: 0,
                                            teacherContentVissible: R,
                                            className: C().topicsolumn
                                        })
                                    }), (0, o.jsxs)("div", {
                                        className: u().notesRightFrameWrapper,
                                        ref: l,
                                        children: [(0, o.jsx)(a.G3, {}), (0, o.jsx)(g.Z, {
                                            children: (0, o.jsx)(c.Q8, {
                                                className: "syllabus" !== e.notes_reducers.tabs.toLowerCase() ? u().notesColumn : u().notesColumnSyllabus,
                                                scrollSubtopicContentsToTheViewPort: () => {
                                                    window.scroll({
                                                        top: S,
                                                        left: 0,
                                                        behavior: "smooth"
                                                    })
                                                },
                                                setShowQuestions: x
                                            })
                                        })]
                                    })]
                                })
                            }), (0, o.jsxs)("div", {
                                ref: d,
                                children: [(0, o.jsx)(resource_center_TeachersContentByTopic, {
                                    data: e.notes_reducers
                                }), (0, o.jsx)(N.Z, {
                                    title: "More resources to learn"
                                }), (0, o.jsx)(z.Z, {})]
                            })]
                        })
                    })
                }),
                A = n(763560),
                L = n(706032),
                B = n(94746);
            let H = 0;
            var O = (0, i.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(e => {
                var t;
                r.useRef();
                let [n, i] = r.useState(!1), [l, f] = r.useState(!1), [g, v] = r.useState(null), {
                    user: C
                } = (0, m.Z)(), [_, w] = r.useState(!1), [j, b] = r.useState(0), [T, I] = r.useState({
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    contents: " "
                }), S = (0, s.useRouter)(), {
                    trackFeature: F
                } = (0, B.Z)(), [k, Z] = r.useState({
                    subject_name: "",
                    class_name: ""
                }), N = S.query.id[0], W = S.query.id[1], R = S.query.id[2], M = S.query.id[3], fetchingSubjectContents = async function(t, n, o) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    await d.Z.processTopics(n, e.dispatch, t, o, r, s)
                };
                r.useEffect(() => {
                    e.dispatch(p.g.setTabs("Study Notes"))
                }, []);
                let showTopicHeaderOnScroll = t => {
                    document.documentElement.scrollTop > 50 || document.body.scrollTop > 50 ? (e.dispatch(p.g.setNotesHeader(!0)), H !== document.documentElement.scrollTop && e.dispatch(p.g.setNotesHeaderMenu(!1))) : (e.dispatch(p.g.setNotesHeader(!1)), e.dispatch(p.g.setNotesHeaderMenu(!1))), H = document.documentElement.scrollTop
                };
                r.useEffect(() => {
                    let setClientY = e => {
                        b(Math.floor(e.clientY + Math.abs(window.innerHeight - e.clientY / 2))), x.getMouseEvent(e, w, I, T), showTopicHeaderOnScroll()
                    };
                    return window.addEventListener("mouseover", setClientY), () => {
                        window.removeEventListener("mouseover", setClientY)
                    }
                }, []), r.useEffect(() => (h.x.clearRedux(e.dispatch), y.a.getInclusiveContents(e.dispatch), window.addEventListener("scroll", showTopicHeaderOnScroll), () => {
                    window.removeEventListener("scroll", showTopicHeaderOnScroll)
                }), []), r.useEffect(() => {
                    if (!e.notes_reducers.topics) return () => {};
                    let t = e.notes_reducers.topics.topics.find(t => t.id === e.notes_reducers.activeTopic),
                        n = "";
                    t && (n = t.content);
                    let o = e.notes_reducers.topics.subjectName,
                        r = e.notes_reducers.topics.classs <= 6 ? "Form ".concat(e.notes_reducers.topics.classs - 1) : "";
                    Z({
                        subject_name: o,
                        class_name: r,
                        topic: n
                    }), F({
                        feature_name: "notes",
                        feature_description: "Notes studying",
                        platform: "web",
                        action: "view",
                        more_info: {
                            subject_name: o,
                            class_name: r,
                            topic_name: n
                        }
                    })
                }, [S, e.notes_reducers.activeTopic]);
                let fetchingContents = async t => {
                    let o = t && t.id ? t.id : null;
                    if (S.query.id && S.query.id.length >= 2) {
                        let t = await L.Z.findClasses();
                        e.dispatch(p.g.setRenderControl(parseInt(null))), e.dispatch(p.g.setClasses(t)), e.dispatch(p.g.setProfileId(o ? parseInt(o) : null)), e.dispatch(p.g.setSubjectId(S.query.id[1])), e.dispatch(p.g.setClassId(S.query.id[0])), 2 == S.query.id.length ? fetchingSubjectContents(S.query.id[0], S.query.id[1], parseInt(o)) : fetchingSubjectContents(N, W, parseInt(o), R, M)
                    } else i(!n)
                };
                r.useEffect(() => (fetchingContents(null), () => {}), [n, R]);
                let E = null !== (t = y.a.getInclusiveFeature(e.notes_reducers.inclusiveContents)) && void 0 !== t ? t : "",
                    U = y.a.getSpecificInclusiveFeature(e.notes_reducers.inclusiveContents, "theme"),
                    P = y.a.getInclusiveFeature(e.notes_reducers.inclusiveContents, "theme") ? "#121212" : "white";
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(A.o$, {
                        title: "" !== k.subject ? "Notes - ".concat(k.subject_name, " ").concat(k.class_name, "- ").concat(k.topic) : "Notes"
                    }), (0, o.jsxs)("div", {
                        className: "notesContainerPage",
                        id: "notesPage",
                        style: {
                            fontFamily: E,
                            backgroundColor: U ? P : "white",
                            minHeight: "100vh"
                        },
                        children: [e.notes_reducers.notesHeader && !l ? (0, o.jsx)(a.V3, {
                            setPageToIntialPosition: () => {
                                h.x.scrollToTheTop(document)
                            }
                        }) : null, (0, o.jsxs)("div", {
                            children: [(0, o.jsx)(c.zX, {}), "study notes" === e.notes_reducers.tabs.trim().toLowerCase() && (0, o.jsx)(q, {}), (0, o.jsx)("div", {
                                className: u().topicRibbonWrapper,
                                children: (0, o.jsx)(a.mq, {})
                            })]
                        })]
                    })]
                })
            })
        },
        69734: function(e, t, n) {
            "use strict";
            var o = n(835704);
            t.Z = new class {
                async findTeachersToConnect() {
                    try {
                        let e = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_contributor_and_count_contribution",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "contributor_frequency/?page=1&limit=20"
                                }
                            },
                            {
                                data: t,
                                networkError: n,
                                serverError: r
                            } = await o.Z.post(e);
                        if (r || n || !t) return null;
                        return t.results.data
                    } catch (e) {
                        return null
                    }
                }
                async followUser(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = {
                            service: {
                                micro: "user_management",
                                task: "follow-user",
                                token: this.accessToken
                            },
                            POST: {
                                route: "follow-user/".concat(e, "/"),
                                follower_id: t
                            }
                        },
                        {
                            data: r,
                            networkError: s
                        } = await o.Z.post(n);
                    return s || !r || 200 !== r.code ? null : "Follow" === r.Status
                }
                async findFollowData(e, t, n, r) {
                    let s = {
                            service: {
                                micro: "user_management",
                                task: "list-of-followers-and-following",
                                token: this.accessToken
                            },
                            POST: {
                                route: "follows",
                                user_id: e,
                                status: "follower" === t ? "follower" : "following",
                                page: n,
                                limit: r
                            }
                        },
                        {
                            data: i,
                            networkError: a
                        } = await o.Z.post(s);
                    return a || 200 !== i.code ? null : i.data.results.length > 0 ? i.data.results : null
                }
                constructor() {
                    this.accessToken = parseInt("12234")
                }
            }
        },
        184248: function() {},
        545625: function(e) {
            e.exports = {
                container: "InclusiveFeature_container__GDW3Z",
                containerFont: "InclusiveFeature_containerFont__A24Ue",
                containerActive: "InclusiveFeature_containerActive___Cceg",
                outerContainerMenu: "InclusiveFeature_outerContainerMenu__eXZAD",
                contentsContainer: "InclusiveFeature_contentsContainer__aPzeD",
                dropDownMenu: "InclusiveFeature_dropDownMenu__IrC1R"
            }
        },
        112714: function(e) {
            e.exports = {
                teacherConncetRowWrapper: "UserConnect_teacherConncetRowWrapper__AXveY",
                innerRowWrapper: "UserConnect_innerRowWrapper__SIi68",
                cardWrapper: "UserConnect_cardWrapper__DZomI",
                imageWrapper: "UserConnect_imageWrapper__V1kCF",
                descriptiondWrapper: "UserConnect_descriptiondWrapper__wyBvH",
                contentWrapper: "UserConnect_contentWrapper__2Ewt5",
                userAvatarWrapper: "UserConnect_userAvatarWrapper___F0ik",
                commentWrapper: "UserConnect_commentWrapper__DOgtq",
                comments: "UserConnect_comments__B8AYr",
                showAllButtonWrapper: "UserConnect_showAllButtonWrapper__GhiuG",
                userToFollowModalWrapper: "UserConnect_userToFollowModalWrapper__h7U2E",
                innerModalWrapper: "UserConnect_innerModalWrapper__UAJYf",
                headerWrapper: "UserConnect_headerWrapper___UfOa",
                noUserWrapper: "UserConnect_noUserWrapper___tz04"
            }
        }
    },
    function(e) {
        e.O(0, [6529, 132, 1672, 7545, 384, 2069, 9326, 1912, 4914, 9774, 2888, 179], function() {
            return e(e.s = 520704)
        }), _N_E = e.O()
    }
]);