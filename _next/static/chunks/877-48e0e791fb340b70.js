(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [877], {
        36714: function(e, s, r) {
            "use strict";
            var a = r(564836);
            s.Z = void 0;
            var t = a(r(864938)),
                n = r(785893);
            s.Z = (0, t.default)((0, n.jsx)("path", {
                d: "m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"
            }), "East")
        },
        744267: function(e, s, r) {
            "use strict";
            r.d(s, {
                Z: function() {
                    return x
                }
            });
            var a = r(487462),
                t = r(263366),
                n = r(667294),
                i = r(963961),
                o = r(458510),
                l = r(690948),
                c = r(471657),
                d = r(301977),
                p = r(108027);

            function getCardContentUtilityClass(e) {
                return (0, p.ZP)("MuiCardContent", e)
            }(0, d.Z)("MuiCardContent", ["root"]);
            var u = r(785893);
            let m = ["className", "component"],
                useUtilityClasses = e => {
                    let {
                        classes: s
                    } = e;
                    return (0, o.Z)({
                        root: ["root"]
                    }, getCardContentUtilityClass, s)
                },
                _ = (0, l.ZP)("div", {
                    name: "MuiCardContent",
                    slot: "Root",
                    overridesResolver: (e, s) => s.root
                })(() => ({
                    padding: 16,
                    "&:last-child": {
                        paddingBottom: 24
                    }
                })),
                h = n.forwardRef(function(e, s) {
                    let r = (0, c.Z)({
                            props: e,
                            name: "MuiCardContent"
                        }),
                        {
                            className: n,
                            component: o = "div"
                        } = r,
                        l = (0, t.Z)(r, m),
                        d = (0, a.Z)({}, r, {
                            component: o
                        }),
                        p = useUtilityClasses(d);
                    return (0, u.jsx)(_, (0, a.Z)({
                        as: o,
                        className: (0, i.Z)(p.root, n),
                        ownerState: d,
                        ref: s
                    }, l))
                });
            var x = h
        },
        751233: function(e, s, r) {
            "use strict";
            r.d(s, {
                Z: function() {
                    return b
                }
            });
            var a = r(263366),
                t = r(487462),
                n = r(667294),
                i = r(470828),
                o = r(568027),
                l = r(108027),
                c = r(458510),
                d = r(513264),
                p = r(629628),
                u = r(139707),
                m = r(588647),
                _ = r(495408),
                h = r(998700),
                x = r(785893);
            let v = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"],
                f = (0, m.Z)(),
                j = (0, d.Z)("div", {
                    name: "MuiStack",
                    slot: "Root",
                    overridesResolver: (e, s) => s.root
                });

            function useThemePropsDefault(e) {
                return (0, p.Z)({
                    props: e,
                    name: "MuiStack",
                    defaultTheme: f
                })
            }
            let getSideFromDirection = e => ({
                    row: "Left",
                    "row-reverse": "Right",
                    column: "Top",
                    "column-reverse": "Bottom"
                })[e],
                style = ({
                    ownerState: e,
                    theme: s
                }) => {
                    let r = (0, t.Z)({
                        display: "flex",
                        flexDirection: "column"
                    }, (0, _.k9)({
                        theme: s
                    }, (0, _.P$)({
                        values: e.direction,
                        breakpoints: s.breakpoints.values
                    }), e => ({
                        flexDirection: e
                    })));
                    if (e.spacing) {
                        let a = (0, h.hB)(s),
                            t = Object.keys(s.breakpoints.values).reduce((s, r) => (("object" == typeof e.spacing && null != e.spacing[r] || "object" == typeof e.direction && null != e.direction[r]) && (s[r] = !0), s), {}),
                            n = (0, _.P$)({
                                values: e.direction,
                                base: t
                            }),
                            i = (0, _.P$)({
                                values: e.spacing,
                                base: t
                            });
                        "object" == typeof n && Object.keys(n).forEach((e, s, r) => {
                            let a = n[e];
                            if (!a) {
                                let a = s > 0 ? n[r[s - 1]] : "column";
                                n[e] = a
                            }
                        }), r = (0, o.Z)(r, (0, _.k9)({
                            theme: s
                        }, i, (s, r) => e.useFlexGap ? {
                            gap: (0, h.NA)(a, s)
                        } : {
                            "& > :not(style):not(style)": {
                                margin: 0
                            },
                            "& > :not(style) ~ :not(style)": {
                                [`margin${getSideFromDirection(r?n[r]:e.direction)}`]: (0, h.NA)(a, s)
                            }
                        }))
                    }
                    return (0, _.dt)(s.breakpoints, r)
                };
            var W = r(690948),
                C = r(471657);
            let g = function(e = {}) {
                let {
                    createStyledComponent: s = j,
                    useThemeProps: r = useThemePropsDefault,
                    componentName: o = "MuiStack"
                } = e, useUtilityClasses = () => (0, c.Z)({
                    root: ["root"]
                }, e => (0, l.ZP)(o, e), {}), d = s(style), p = n.forwardRef(function(e, s) {
                    let o = r(e),
                        l = (0, u.Z)(o),
                        {
                            component: c = "div",
                            direction: p = "column",
                            spacing: m = 0,
                            divider: _,
                            children: h,
                            className: f,
                            useFlexGap: j = !1
                        } = l,
                        W = (0, a.Z)(l, v),
                        C = useUtilityClasses();
                    return (0, x.jsx)(d, (0, t.Z)({
                        as: c,
                        ownerState: {
                            direction: p,
                            spacing: m,
                            useFlexGap: j
                        },
                        ref: s,
                        className: (0, i.Z)(C.root, f)
                    }, W, {
                        children: _ ? function(e, s) {
                            let r = n.Children.toArray(e).filter(Boolean);
                            return r.reduce((e, a, t) => (e.push(a), t < r.length - 1 && e.push(n.cloneElement(s, {
                                key: `separator-${t}`
                            })), e), [])
                        }(h, _) : h
                    }))
                });
                return p
            }({
                createStyledComponent: (0, W.ZP)("div", {
                    name: "MuiStack",
                    slot: "Root",
                    overridesResolver: (e, s) => s.root
                }),
                useThemeProps: e => (0, C.Z)({
                    props: e,
                    name: "MuiStack"
                })
            });
            var b = g
        },
        600068: function(e, s, r) {
            "use strict";
            var a = r(785893),
                t = r(304298),
                n = r.n(t),
                i = r(624039);
            s.Z = e => {
                var s;
                let {
                    user: r
                } = (0, i.Z)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(), {
                        strategy: "lazyOnload",
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat("'G-6GSRTB9YKG'")
                    }), r.isLoggedIn && (0, a.jsx)(n(), {
                        strategy: "lazyOnload",
                        children: "\n                            window.dataLayer = window.dataLayer || [];\n                            window.dataLayer.push({\n                                'event' : '".concat(e.event_name, "',\n                                'userId' : ").concat(null === (s = r.data) || void 0 === s ? void 0 : s.id, "\n                            })\n                        ")
                    })]
                })
            }
        },
        485043: function(e, s, r) {
            "use strict";
            r.d(s, {
                C: function() {
                    return LastReadingContent
                }
            });
            var a = r(785893),
                t = r(667294),
                n = r(146574),
                i = r(415861),
                o = r(625662),
                l = r(67147),
                c = r.n(l),
                d = r(588595),
                p = r(624039),
                u = r(811163);
            let LastReadingContent = () => {
                let {
                    user: e
                } = (0, p.Z)(), s = (0, u.useRouter)(), [r, l] = t.useState(null);
                return t.useEffect(() => {
                    let initTopicUserStudying = async () => {
                        let s = e.isLoggedIn ? e.data.id : "",
                            r = await d.Z.findTopicsUserStudying(s);
                        if (!r) return () => {};
                        l(r[0])
                    };
                    initTopicUserStudying()
                }, [e.isLoggedIn]), (0, a.jsx)(a.Fragment, {
                    children: r ? (0, a.jsx)("div", {
                        className: c().lastContentUserReadingWrapper,
                        children: (0, a.jsxs)(n.Z, {
                            children: [(0, a.jsx)(i.Z, {
                                variant: "h5",
                                children: (0, a.jsx)("b", {
                                    children: "Last topic your were studying"
                                })
                            }), (0, a.jsxs)("div", {
                                className: c().latestTopicMainWrapper,
                                children: [(0, a.jsxs)("div", {
                                    style: {
                                        flex: "1"
                                    },
                                    children: [(0, a.jsx)(i.Z, {
                                        variant: "h6",
                                        children: r.topic.content
                                    }), (0, a.jsxs)("div", {
                                        style: {
                                            color: "#aaa"
                                        },
                                        children: [r.subject.name, " ", r.classs.name]
                                    })]
                                }), (0, a.jsx)(o.Z, {
                                    variant: "contained",
                                    onClick: () => {
                                        s.push("/notes/list_notes/".concat(r.classs.id, "/").concat(r.subject_id, "/").concat(r.topic.id))
                                    },
                                    children: "Continue studying"
                                })]
                            })]
                        })
                    }) : (0, a.jsx)(a.Fragment, {})
                })
            }
        },
        442159: function(e, s, r) {
            "use strict";
            r.d(s, {
                v: function() {
                    return PopularTopics
                }
            });
            var a = r(785893),
                t = r(667294),
                n = r(67147),
                i = r.n(n),
                o = r(415861),
                l = r(625662),
                c = r(706032),
                d = r(348748),
                p = r(14416),
                u = r(811163),
                m = r(386529),
                _ = r(288078),
                h = r(751233);
            let x = {
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
                },
                v = [1, 2, 3, 4, 5],
                PopularTopics = e => {
                    let s = (0, u.useRouter)(),
                        r = (0, p.I0)(),
                        [n, f] = t.useState(null);
                    return (t.useEffect(() => {
                        let initPopularTopics = async () => {
                            let e = await d.Z.findMostVisitedTopics();
                            return e && ((e = e.filter(e => v.includes(parseInt(e.class_id)))).pop(), e) ? void f(e = await Promise.all(e.map(async e => {
                                let s = await d.Z.processTopics(e.subject_id, r, e.class_id, null, e.topic_id, null),
                                    a = s.children && s.children.find(s => parseInt(s.id) === parseInt(e.topic_id) && "Topic" === s.type),
                                    t = await c.Z.findClasses();
                                return t = t.find(s => parseInt(s.id) === parseInt(e.class_id)), { ...e,
                                    subject: { ...s.subject_default,
                                        subject_class: s.subject_default ? s.subject_default.name.replace(/\s+/g, "") : ""
                                    },
                                    topic: "object" == typeof a ? a : null,
                                    classs: t,
                                    id: e.id
                                }
                            }))) : () => {}
                        };
                        initPopularTopics()
                    }, []), e.source && "discussion" === e.source) ? (0, a.jsxs)("div", {
                        className: i().popularTopicsInDiscussionListWrapper,
                        children: [(0, a.jsx)(o.Z, {
                            variant: "h6",
                            children: (0, a.jsx)("b", {
                                children: "Trending topics in notes"
                            })
                        }), n ? (0, a.jsx)(a.Fragment, {
                            children: n.map((e, r) => (0, a.jsxs)(l.Z, {
                                className: i().actionButtonWrapper,
                                variant: "outlined",
                                onClick: () => {
                                    s.push("/notes/list_notes/".concat(e.classs.id, "/").concat(e.subject_id, "/").concat(e.topic.id))
                                },
                                children: [(0, a.jsx)("b", {
                                    children: e.topic ? e.topic.content : ""
                                }), (0, a.jsxs)("div", {
                                    style: {
                                        color: "#666",
                                        fontSize: "14px"
                                    },
                                    children: [e.subject.name, " ", e.classs.name]
                                })]
                            }))
                        }) : (0, a.jsx)(a.Fragment, {
                            children: [void 0, void 0, void 0, void 0, void 0].map(e => (0, a.jsx)(_.Z, {
                                style: {
                                    marginTop: "10px"
                                },
                                variant: "rectangular",
                                width: "100%",
                                height: 30
                            }))
                        })]
                    }) : (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsxs)("div", {
                            className: i().crollFixContentFrameWrapper,
                            children: [(0, a.jsx)("div", {
                                className: i().scrollingContent,
                                children: (0, a.jsx)("div", {
                                    className: i().contentListWrapper,
                                    children: (0, a.jsx)(o.Z, {
                                        variant: "h3",
                                        children: (0, a.jsx)("b", {
                                            children: "Trending topics"
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: i().fixedConteneMainWrapper,
                                children: (0, a.jsx)("div", {
                                    className: i().fixedWrapper,
                                    children: n ? (0, a.jsx)("div", {
                                        className: i().popularTopicsListWrapper,
                                        children: (0, a.jsx)(m.default, {
                                            responsive: x,
                                            ssr: !0,
                                            containerClass: "carousel-container",
                                            itemClass: "carousel-item-padding-40-p",
                                            children: n.map((e, r) => (0, a.jsxs)(l.Z, {
                                                className: "".concat(i().cardWrapper),
                                                onClick: () => {
                                                    s.push("/notes/list_notes/".concat(e.classs.id, "/").concat(e.subject_id, "/").concat(e.topic.id))
                                                },
                                                children: [(0, a.jsx)("div", {
                                                    className: "".concat(i().coverWrapper, " ").concat(e.subject.subject_class),
                                                    children: (0, a.jsx)("img", {
                                                        src: e.subject.image
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: i().descriptiondWrapper,
                                                    children: (0, a.jsx)(o.Z, {
                                                        variant: "h5",
                                                        children: e.topic ? e.topic.content : ""
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: i().userAvatarWrapper,
                                                    children: [e.subject.name, " ", e.classs.name]
                                                })]
                                            }, r))
                                        })
                                    }) : (0, a.jsx)("div", {
                                        className: i().skeletonLoaderWrapper,
                                        children: [void 0, void 0, void 0, void 0].map(e => (0, a.jsxs)(h.Z, {
                                            spacing: 1,
                                            className: i().cardWrapper,
                                            style: {
                                                background: "transparent"
                                            },
                                            children: [(0, a.jsx)(_.Z, {
                                                variant: "rectangular",
                                                height: 100
                                            }), (0, a.jsx)(_.Z, {
                                                variant: "circular",
                                                width: 60,
                                                height: 60
                                            }), (0, a.jsx)(_.Z, {
                                                variant: "text",
                                                sx: {
                                                    fontSize: "1rem"
                                                }
                                            }), (0, a.jsx)(_.Z, {
                                                variant: "rectangular",
                                                width: "100%",
                                                height: "100%"
                                            })]
                                        }))
                                    })
                                })
                            })]
                        })
                    })
                }
        },
        331915: function(e, s, r) {
            "use strict";
            var a = r(334221);
            r(823552);
            var t = r(365701),
                n = r(14416),
                i = r(624039);
            s.Z = () => {
                let {
                    user: e
                } = (0, i.Z)(), s = (0, n.I0)(), saveInteractiveModalQuee = async e => {
                    e.user_id = "ANONYMOUS", await t.Z.saveInteractiveModalQueeData(e), await findInteractiveModal()
                }, findInteractiveModal = async () => {
                    let e = await t.Z.findInteractiveModalData("ANONYMOUS");
                    if (!e) {
                        s((0, a.WD)(null));
                        return
                    }
                    s((0, a.WD)(e[0]))
                };
                return {
                    saveInteractiveModalQuee,
                    findInteractiveModal
                }
            }
        },
        105934: function(e, s, r) {
            "use strict";
            r.d(s, {
                f: function() {
                    return o
                }
            });
            var a = r(341911),
                t = r(476216),
                n = r(885518),
                i = r(667294);
            let o = i.memo(e => {
                let [s, r] = i.useState("unknown"), o = e.pageType && "notes" === e.pageType.toLowerCase() ? {
                    className: e.className,
                    subjectId: e.subjectId,
                    topicId: e.topicId,
                    subtopicId: e.subtopicId,
                    conceptId: e.conceptId
                } : null;
                return i.useEffect(() => {
                    let caller = async () => {
                        let e;
                        try {
                            e = await (0, t.zk)()
                        } catch (s) {
                            e = null
                        }
                        r(e)
                    };
                    caller()
                }, [s]), i.useEffect(() => {
                    if (e.page) {
                        let r = {
                            data: {
                                page: {
                                    id: e.id,
                                    key: e.keyName,
                                    name: e.page,
                                    action: e.action,
                                    startTime: new Date,
                                    endTime: e.end ? new Date().getTime() : null
                                },
                                syllabus: o,
                                features: [{
                                    id: e.id,
                                    key: e.keyName,
                                    name: e.feature,
                                    action: e.action,
                                    startTime: new Date().getTime(),
                                    endTime: null
                                }],
                                device: {
                                    host: "unknown",
                                    os: n.BF,
                                    buildVersion: n.TI,
                                    systemVersion: n.MM,
                                    model: n.KC,
                                    brand: n.KC,
                                    manufacturer: n.KC,
                                    deviceId: "unknown",
                                    users_mid: "guest",
                                    device_type_id: 2,
                                    userAgent: n.z$,
                                    ip_address: s
                                }
                            }
                        };
                        a.Z.createJourney(r)
                    }
                }, [e.page]), i.useEffect(() => {
                    if (e.feature) {
                        let s = {
                            id: e.id,
                            key: e.keyName,
                            name: e.feature,
                            action: e.action,
                            startTime: new Date().getTime(),
                            endTime: e.end ? new Date().getTime() : null
                        };
                        a.Z.addJourney(s)
                    }
                }, [e.feature]), () => {}
            });
            o.displayName = "Journey", o.defaultProps = {
                pageType: null,
                page: null,
                feature: null,
                keyName: null,
                action: null
            }
        },
        887467: function(e, s, r) {
            "use strict";
            var a = r(785893),
                t = r(667294),
                n = r(837722),
                i = r.n(n),
                o = r(36714),
                l = r(415861),
                c = r(625662);
            r(484818), r(184248);
            var d = r(386529);
            let p = {
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
            s.Z = e => {
                let [s, r] = t.useState([]), [n, u] = t.useState(2), [m, _] = t.useState(0);
                return t.useEffect(() => {
                    let a = Array(e.data.length).fill().map((e, r) => s[r] || t.createRef());
                    r(a)
                }, [e]), (0, a.jsx)("div", {
                    className: i().toolsMainWrapperCard,
                    children: (0, a.jsx)("div", {
                        className: i().toolsCardMainWrapper,
                        children: (0, a.jsx)("div", {
                            className: i().toolsCardWrapper,
                            children: (0, a.jsx)(d.default, {
                                responsive: p,
                                ssr: !0,
                                containerClass: "carousel-container",
                                itemClass: "carousel-item-padding-40-p",
                                children: e.data.map((r, t) => (0, a.jsxs)("div", {
                                    className: "".concat(i().card),
                                    ref: s[t],
                                    children: [(0, a.jsx)(l.Z, {
                                        className: i().header,
                                        variant: "h5",
                                        children: r.name
                                    }), (0, a.jsx)("p", {
                                        className: i().contentWrapper,
                                        children: r.content
                                    }), (0, a.jsxs)(c.Z, {
                                        className: i().actionButtonWrapper,
                                        onClick: () => e.handleActionUrl(r.action.url, r.action.action_name),
                                        children: [r.action.name, " \xa0 ", (0, a.jsx)(o.Z, {})]
                                    })]
                                }, t))
                            })
                        })
                    })
                })
            }
        },
        1526: function(e, s, r) {
            "use strict";
            r.d(s, {
                B: function() {
                    return useIsElementVisible
                }
            });
            var a = r(667294);
            let useForceRerender = () => {
                    let [, e] = (0, a.useState)(0);
                    return () => e(e => e + 1)
                },
                useIsElementVisible = function(e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        [r, t] = (0, a.useState)(!1),
                        n = useForceRerender();
                    (0, a.useEffect)(() => {
                        n()
                    }, []), (0, a.useEffect)(() => {
                        if (!e) return;
                        let r = new IntersectionObserver(handleVisibilityChange, s);
                        return r.observe(e), () => r.unobserve(e)
                    }, [e, s]);
                    let handleVisibilityChange = e => {
                        let [s] = e;
                        return t(s.isIntersecting)
                    };
                    return r
                }
        },
        157809: function(e, s, r) {
            "use strict";
            var a = r(785893),
                t = r(834146),
                n = r.n(t);
            s.Z = e => (0, a.jsx)(a.Fragment, {
                children: e.testimonials && e.testimonials.length > 0 && e.testimonials.map((s, r) => e.testimonials.length === r + 1 ? (0, a.jsx)("div", {
                    className: "".concat(n().quoteWrapper),
                    ref: e.lastPostsElementRef,
                    children: (0, a.jsx)("blockquote", {
                        children: (0, a.jsx)("p", {
                            children: s.content
                        })
                    })
                }, r) : (0, a.jsx)("div", {
                    className: "".concat(n().quoteWrapper),
                    children: (0, a.jsxs)("blockquote", {
                        children: [(0, a.jsx)("p", {
                            children: s.content
                        }), (0, a.jsx)("div", {
                            className: n().fullnameWrapper,
                            children: s.fullname
                        })]
                    })
                }, r))
            })
        },
        302489: function(e, s, r) {
            "use strict";
            var a = r(785893),
                t = r(667294),
                n = r(112714),
                i = r.n(n),
                o = r(146574),
                l = r(415861),
                c = r(288078),
                d = r(69734),
                p = r(744267),
                u = r(625662);
            r(184248);
            var m = r(386529);
            r(455169);
            var _ = r(14416),
                h = r(811163);
            let x = {
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
            s.Z = e => {
                (0, _.I0)();
                let [s, r] = t.useState(null), n = (0, h.useRouter)();
                return t.useEffect(() => {
                    let initConncet = async () => {
                        let e = await d.Z.findTeachersToConnect();
                        if (!e) return () => {};
                        r(e = e.filter(e => e.user && e.user.length > 0).map(e => ({
                            user: e.user.find(e => "0" !== e.first_name || "0" !== e.last_name)
                        })))
                    };
                    initConncet()
                }, []), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: i().teacherConncetRowWrapper,
                        children: (0, a.jsxs)(o.Z, {
                            children: [(0, a.jsx)(l.Z, {
                                variant: "h3",
                                children: (0, a.jsx)("b", {
                                    children: "Connect with teachers"
                                })
                            }), (0, a.jsx)("div", {
                                className: i().innerRowWrapper,
                                children: s ? (0, a.jsx)(m.default, {
                                    responsive: x,
                                    ssr: !0,
                                    containerClass: "carousel-container",
                                    itemClass: "carousel-item-padding-40-p",
                                    children: s.map((e, s) => (0, a.jsxs)(u.Z, {
                                        className: i().cardWrapper,
                                        onClick: () => {
                                            n.push("/users/public/view/".concat(e.user.user_id))
                                        },
                                        children: [(0, a.jsx)("div", {
                                            className: i().imageWrapper,
                                            children: (0, a.jsx)("img", {
                                                src: e.user.image
                                            })
                                        }), (0, a.jsxs)(p.Z, {
                                            children: [(0, a.jsx)(l.Z, {
                                                gutterBottom: !0,
                                                variant: "h6",
                                                component: "div",
                                                children: (0, a.jsx)("b", {
                                                    children: "".concat(e.user.first_name, " ").concat(e.user.last_name)
                                                })
                                            }), (0, a.jsx)(l.Z, {
                                                variant: "body2",
                                                color: "text.secondary"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: i().userAvatarWrapper
                                        })]
                                    }, s))
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "20px"
                                    },
                                    children: [void 0, void 0, void 0, void 0].map(e => (0, a.jsx)(c.Z, {
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
        303171: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                Home: function() {
                    return Home
                },
                __N_SSP: function() {
                    return K
                },
                default: function() {
                    return J
                }
            });
            var a = r(785893);
            r(105934);
            var t = r(348748),
                n = r(667294);
            r(887467);
            var i = r(811163),
                o = r(994068),
                l = r.n(o),
                c = r(146574),
                d = r(415861),
                p = r(625662),
                u = r(288078),
                m = r(575503),
                _ = r(741664),
                h = r.n(_),
                x = r(957442),
                v = r.n(x),
                f = r(815227),
                j = r(425675),
                W = r.n(j),
                carousel_Carousel = e => {
                    let s = (0, i.useRouter)(),
                        r = null;
                    return r = "syllabus" == e.data.source ? e.data.subjects.filter(e => "Girls Leadership" != e.name && "Life Skills" != e.name && "Literature" != e.name) : e.data.subjects, (0, a.jsxs)("div", {
                        className: v().mainContainer,
                        ref: e.carouselScrollRef,
                        children: [(0, a.jsx)(c.Z, {
                            children: (0, a.jsxs)("div", {
                                className: v().carouselWrapper,
                                children: [(0, a.jsx)("div", {
                                    className: "mb-10",
                                    children: "syllabus" === e.data.source ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(d.Z, {
                                            className: v().headerWrapper,
                                            variant: "h1",
                                            children: (0, a.jsx)("b", {
                                                children: "Syllabus subjects"
                                            })
                                        }), (0, a.jsx)("div", {
                                            style: {
                                                marginTop: "10px",
                                                marginBottom: "30px"
                                            }
                                        })]
                                    }) : (0, a.jsx)(d.Z, {
                                        className: v().headerWrapper,
                                        variant: "h2",
                                        children: (0, a.jsx)("b", {
                                            children: "Start learning"
                                        })
                                    })
                                }), (0, a.jsx)(p.Z, {
                                    className: "".concat(v().hadithHadithButtonWrapper, " bounce-in-fwd-", 1, "s"),
                                    onClick: () => {
                                        s.push("/hadithi-hadithi")
                                    },
                                    children: (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)(d.Z, {
                                            variant: "h5",
                                            style: {
                                                color: "#fff"
                                            },
                                            children: (0, a.jsx)("b", {
                                                children: "Hadithi"
                                            })
                                        }), (0, a.jsx)(d.Z, {
                                            variant: "h5",
                                            style: {
                                                color: "#ffef25"
                                            },
                                            children: (0, a.jsx)("b", {
                                                children: "Hadithi"
                                            })
                                        })]
                                    })
                                }), r ? r.map((s, r) => {
                                    let t = r + 2;
                                    return r > 7 && (t = r - 6), (0, a.jsxs)("div", {
                                        className: "".concat(v().cardContainer, " ").concat(v().effectHover, " bounce-in-fwd-").concat(t, "s"),
                                        children: [(0, a.jsx)("div", {
                                            className: "".concat(v().cardFront, " ").concat(s.style_name),
                                            children: (0, a.jsxs)("div", {
                                                className: v().subjectImageContainer,
                                                children: [(0, a.jsx)(d.Z, {
                                                    variant: "h6",
                                                    className: v().subjectName,
                                                    children: s.name
                                                }), (0, a.jsx)("div", {
                                                    className: v().subjectIcon,
                                                    children: s.image && (0, a.jsx)("img", {
                                                        src: s.image,
                                                        alt: s.name
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "".concat(v().cardBack, " ").concat(s.style_name),
                                            children: [(0, a.jsx)(d.Z, {
                                                variant: "h6",
                                                className: v().subjectName,
                                                children: s.name
                                            }), (0, a.jsx)("ul", {
                                                children: s.data.map((s, r) => (0, a.jsx)("li", {
                                                    children: "syllabus" === e.data.source ? (0, a.jsx)(h(), {
                                                        href: "/notes/list_syllabus/".concat(s.form.id, "/").concat(s.subject.id),
                                                        passHref: !0,
                                                        children: s.form.name
                                                    }) : (0, a.jsx)(h(), {
                                                        href: "/notes/list_notes/".concat(s.form.id, "/").concat(s.subject.id),
                                                        passHref: !0,
                                                        children: s.form.name
                                                    })
                                                }, r))
                                            })]
                                        })]
                                    }, r)
                                }) : (0, a.jsx)("div", {
                                    className: v().skeletonCardsWrapper,
                                    children: [...Array(16)].map(e => {
                                        let s = e + 2;
                                        return e > 7 && (s = e - 6), (0, a.jsx)(u.Z, {
                                            className: "".concat(v().skeletonCard, " bounce-in-fwd-").concat(s, "s"),
                                            variant: "rectangular",
                                            width: 130,
                                            height: 90
                                        }, e)
                                    })
                                }), (0, a.jsx)("div", {
                                    className: v().moreArrowWrapper,
                                    children: (0, a.jsx)(p.Z, {
                                        className: v().arrowButton,
                                        onClick: e.scrollToSection,
                                        label: "Click to scroll down to view more",
                                        children: (0, a.jsx)(m.Z, {})
                                    })
                                })]
                            })
                        }), (0, a.jsx)(f.oq, {}), (0, a.jsx)("div", {
                            className: v().segmentWrapper
                        })]
                    })
                };
            r(585035);
            var C = r(500431);
            r(157809), r(184248);
            var g = r(386529);
            let b = {
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
            var home_TestimonialsRow = () => {
                    let [e, s] = n.useState(null);
                    return n.useEffect(() => {
                        let findTestimonials = async () => {
                            s(await C.Z.findAllTestimonialsData(1, 10))
                        };
                        if (e) return () => {};
                        findTestimonials()
                    }, []), (0, a.jsx)("div", {
                        className: l().testimonialsRowWrapper,
                        children: (0, a.jsx)("div", {
                            className: l().overlayWrapper,
                            children: (0, a.jsx)("div", {
                                className: l().testimonialInnerWrapper,
                                children: (0, a.jsxs)(c.Z, {
                                    children: [(0, a.jsx)("div", {
                                        className: l().testimonialHeaderWrapper,
                                        children: (0, a.jsx)(d.Z, {
                                            variant: "h2",
                                            children: (0, a.jsx)("b", {
                                                children: "Testimonials"
                                            })
                                        })
                                    }), e && (0, a.jsx)(g.default, {
                                        responsive: b,
                                        ssr: !0,
                                        infinite: !0,
                                        autoPlay: !0,
                                        containerClass: "carousel-container",
                                        children: e && e.map((e, s) => (0, a.jsxs)("div", {
                                            className: l().testimonialListWrapper,
                                            children: [(0, a.jsx)("div", {
                                                className: l().contentWrapper,
                                                children: e.content
                                            }), (0, a.jsx)("div", {
                                                className: l().footerWrapper,
                                                children: (0, a.jsx)("b", {
                                                    children: e.fullname
                                                })
                                            })]
                                        }, s))
                                    })]
                                })
                            })
                        })
                    })
                },
                y = r(610352),
                T = r(999452),
                home_MobileDownloadRow = () => (window.location.origin, (0, a.jsx)("div", {
                    className: l().mobileDownloadRowWrapper,
                    children: (0, a.jsxs)(c.Z, {
                        className: l().mainWrapper,
                        children: [(0, a.jsxs)("div", {
                            className: l().headerWrapper,
                            children: [(0, a.jsx)(d.Z, {
                                variant: "h1",
                                className: l().headerName,
                                children: (0, a.jsxs)("b", {
                                    children: ["Learn on ", (0, a.jsx)("br", {}), "your mobile"]
                                })
                            }), (0, a.jsxs)("div", {
                                className: l().appDownloadWrapper,
                                children: [(0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://apps.apple.com/us/app/shule-direct/id1323956808",
                                    children: (0, a.jsx)(W(), {
                                        src: T.Z,
                                        width: 200,
                                        alt: "Download app store"
                                    })
                                }), (0, a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://play.google.com/store/apps/details?id=shuledirect.co.tz.shuledirect&hl=en",
                                    children: (0, a.jsx)(W(), {
                                        src: y.Z,
                                        width: 200,
                                        alt: "Download app store"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: l().videoClipWrapper,
                            children: (0, a.jsx)("div", {
                                className: l().videoFrameWrapper,
                                children: (0, a.jsx)("video", {
                                    autoPlay: !0,
                                    loop: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    disableRemotePlayback: !0,
                                    className: l().videoPlayerWrapper,
                                    children: (0, a.jsx)("source", {
                                        src: "https://shulemedia.s3.amazonaws.com/video/1664319669_e2da502151e0bb968204.mp4",
                                        type: "video/mp4"
                                    })
                                })
                            })
                        })]
                    })
                }));
            r(200384);
            var N = r(600068),
                S = r(678621),
                w = r(1526);
            let Z = {
                TOP_DISCUSSING_TOPICS: "top_discussion_topic",
                TOP_VISITED_SUBJECTS: "top_visited_subjects",
                TOP_USER_WITH_DISCUSSIONS: "top_users_with_discussions",
                DISCUSSIONS: "discussions",
                LAST_READING_CONTENT: "last_reading_content",
                POPULAR_TOPICS: "popular_topics"
            };
            var k = r(67147),
                I = r.n(k),
                scroll_content_TopDiscussingTopics = e => (0, a.jsxs)("div", {
                    className: I().crollFixContentFrameWrapper,
                    children: [(0, a.jsx)("div", {
                        className: I().scrollingContent,
                        children: (0, a.jsx)("div", {
                            className: I().contentListWrapper,
                            children: "content Top Discussing topics"
                        })
                    }), (0, a.jsx)("div", {
                        className: I().fixedConteneMainWrapper,
                        children: (0, a.jsx)("div", {
                            className: e.fixed ? "".concat(I().fixedWrapper, " ").concat(I().fixed) : "".concat(I().fixedWrapper),
                            children: "Fixed content"
                        })
                    })]
                }),
                scroll_content_TopVisitedSubjects = e => (0, a.jsxs)("div", {
                    className: I().crollFixContentFrameWrapper,
                    children: [(0, a.jsx)("div", {
                        className: I().scrollingContent,
                        children: (0, a.jsx)("div", {
                            className: I().contentListWrapper,
                            children: "content Top Discussing topics"
                        })
                    }), (0, a.jsx)("div", {
                        className: I().fixedConteneMainWrapper,
                        children: (0, a.jsx)("div", {
                            className: e.fixed ? "".concat(I().fixedWrapper, " ").concat(I().fixed) : "".concat(I().fixedWrapper),
                            children: "Fixed content"
                        })
                    })]
                }),
                scroll_content_TopUsersWithDiscussion = e => (0, a.jsxs)("div", {
                    className: I().crollFixContentFrameWrapper,
                    children: [(0, a.jsx)("div", {
                        className: I().scrollingContent,
                        children: (0, a.jsx)("div", {
                            className: I().contentListWrapper,
                            children: "content Top Discussing topics"
                        })
                    }), (0, a.jsx)("div", {
                        className: I().fixedConteneMainWrapper,
                        children: (0, a.jsx)("div", {
                            className: e.fixed ? "".concat(I().fixedWrapper, " ").concat(I().fixed) : "".concat(I().fixedWrapper),
                            children: "Fixed content"
                        })
                    })]
                });
            r(14416), r(497545);
            var D = r(827856),
                R = r.n(D),
                M = r(131120),
                U = r(991811),
                L = r(732964),
                H = r(371508),
                F = r(706032),
                P = r(751233);
            let E = {
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
                },
                LatestDiscussions = () => {
                    let e = (0, i.useRouter)(),
                        [s, r] = n.useState(null);
                    return n.useEffect(() => {
                        let _initDiscussions = async () => {
                            let e = await H.Z.findLatestDiscussions();
                            if (!e) return () => {};
                            r(e = await Promise.all(e.map(async e => {
                                let s = await t.Z.processTopics(e.subject_id, null, e.class_id, null, e.topic_id, null),
                                    r = s.children.find(s => parseInt(s.id) === parseInt(e.topic_id) && "Topic" === s.type),
                                    a = await F.Z.findClasses();
                                return a = a.find(s => parseInt(s.id) === parseInt(e.class_id)), { ...e,
                                    subject: { ...s.subject_default,
                                        subject_class: s.subject_default.name.replace(/\s+/g, "")
                                    },
                                    topic: r,
                                    classs: a,
                                    id: e.id
                                }
                            })))
                        };
                        _initDiscussions()
                    }, []), (0, a.jsx)("div", {
                        className: I().latestDiscussionsMainWrapper,
                        children: s ? (0, a.jsx)(g.default, {
                            responsive: E,
                            ssr: !0,
                            containerClass: "carousel-container",
                            itemClass: "carousel-item-padding-40-p",
                            children: s.length > 0 && s.map((s, r) => (0, a.jsxs)(p.Z, {
                                className: I().cardWrapper,
                                onClick: () => {
                                    let r = "eca" === s.post_type ? "/discussion/eca/view/".concat(s.id) : "/discussion/syllab/view/".concat(s.id);
                                    e.push(r)
                                },
                                style: {
                                    minHeight: "450px"
                                },
                                children: [(0, a.jsx)("div", {
                                    className: "".concat(I().coverWrapper, " ").concat(s.subject.subject_class),
                                    children: (0, a.jsx)("img", {
                                        src: s.subject.image
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: I().descriptiondWrapper,
                                    children: ["" !== s.title && (0, a.jsx)("div", {
                                        className: I().headerWrapper,
                                        children: (0, a.jsx)(d.Z, {
                                            variant: "h6",
                                            className: I().postHeaderWrapper,
                                            children: (0, a.jsx)("b", {
                                                children: s.title
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: I().contentWrapper,
                                        children: (s.content, "string" == typeof s.content) ? (0, a.jsx)("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: R().sanitize(s.content)
                                            }
                                        }) : (0, a.jsx)(M.Z, {
                                            content: s.content
                                        })
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsx)(f.XY, {
                                            image: s.user.avatar,
                                            name: "".concat(s.user.first_name, " ").concat(s.user.last_name),
                                            size: "tin"
                                        })
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: I().userAvatarWrapper,
                                    children: (0, a.jsxs)("div", {
                                        className: I().commentWrapper,
                                        children: [(0, a.jsxs)("div", {
                                            className: I().comments,
                                            children: [(0, a.jsx)(U.Z, {}), (0, a.jsx)("div", {
                                                children: s.data.likes
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: I().comments,
                                            children: [(0, a.jsx)(L.Z, {}), (0, a.jsx)("div", {
                                                children: s.data.comments
                                            })]
                                        })]
                                    })
                                })]
                            }, r))
                        }) : (0, a.jsx)("div", {
                            className: I().skeletonLoaderWrapper,
                            children: [void 0, void 0, void 0, void 0].map(e => (0, a.jsxs)(P.Z, {
                                spacing: 1,
                                className: I().cardWrapper,
                                style: {
                                    background: "transparent"
                                },
                                children: [(0, a.jsx)(u.Z, {
                                    variant: "rectangular",
                                    height: 100
                                }), (0, a.jsx)(u.Z, {
                                    variant: "circular",
                                    width: 60,
                                    height: 60
                                }), (0, a.jsx)(u.Z, {
                                    variant: "text",
                                    sx: {
                                        fontSize: "1rem"
                                    }
                                }), (0, a.jsx)(u.Z, {
                                    variant: "rectangular",
                                    width: "100%",
                                    height: "100%"
                                })]
                            }))
                        })
                    })
                },
                DiscussionsContent = e => ((0, i.useRouter)(), (0, a.jsxs)("div", {
                    className: "".concat(I().crollFixContentFrameWrapper, " ").concat(I().dicsussionContainerWrapper),
                    children: [(0, a.jsx)("div", {
                        className: I().scrollingContent,
                        children: (0, a.jsx)("div", {
                            className: I().contentListWrapper,
                            children: (0, a.jsx)(d.Z, {
                                variant: "h3",
                                children: (0, a.jsx)("b", {
                                    children: "Join discussions"
                                })
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: I().fixedConteneMainWrapper,
                        children: (0, a.jsx)("div", {
                            className: e.fixed ? "".concat(I().fixedWrapper, " ").concat(I().fixed) : "".concat(I().fixedWrapper),
                            children: (0, a.jsx)(LatestDiscussions, {})
                        })
                    })]
                }));
            r(492227), r(735669);
            var A = r(485043),
                O = r(442159),
                scroll_content = e => {
                    let {
                        y: s
                    } = (0, S.Z)(), r = n.useRef(null), [t, i] = n.useState(!1), o = (0, w.B)(r.current);
                    return n.useEffect(() => {
                        var s = r.current.getBoundingClientRect().top;
                        o && !e.isElementVissbile && s <= 100 ? i(!0) : (e.isElementVissbile || s > 200) && i(!1)
                    }, [s]), (0, a.jsxs)("div", {
                        ref: r,
                        children: [e.scroll_type === Z.TOP_DISCUSSING_TOPICS && (0, a.jsx)(scroll_content_TopDiscussingTopics, {
                            fixed: t
                        }), e.scroll_type === Z.TOP_VISITED_SUBJECTS && (0, a.jsx)(scroll_content_TopVisitedSubjects, {
                            fixed: t
                        }), e.scroll_type === Z.TOP_USER_WITH_DISCUSSIONS && (0, a.jsx)(scroll_content_TopUsersWithDiscussion, {
                            fixed: t
                        }), e.scroll_type === Z.DISCUSSIONS && (0, a.jsx)(DiscussionsContent, {
                            fixed: t
                        }), e.scroll_type === Z.LAST_READING_CONTENT && (0, a.jsx)(A.C, {
                            fixed: t
                        }), e.scroll_type === Z.POPULAR_TOPICS && (0, a.jsx)(O.v, {
                            fixed: t,
                            scrollToSubjectsCards: e.scrollToSubjectsCards
                        })]
                    })
                },
                B = r(331915),
                G = r(823552),
                V = r(588595),
                z = r(624039),
                q = r(302489),
                Y = r(94746),
                K = !0;
            let Home = e => {
                let s = (0, i.useRouter)(),
                    r = n.useRef(null),
                    o = n.useRef(null),
                    d = n.useRef(null),
                    p = (0, w.B)(r.current),
                    {
                        saveInteractiveModalQuee: u
                    } = (0, B.Z)(),
                    {
                        user: m
                    } = (0, z.Z)(),
                    {
                        trackFeature: _
                    } = (0, Y.Z)();
                n.useEffect(() => {
                    t.Z.processStudyMoreSubjects(null, null, null, null, "home")
                }, []), n.useEffect(() => {
                    initModalMessage(), _({
                        feature_name: "home",
                        feature_description: "Home page",
                        platform: "web",
                        action: "view",
                        more_info: {
                            page: "home"
                        }
                    })
                }, [s]);
                let initModalMessage = async () => {
                    let e = m.isLoggedIn ? m.data.id : "",
                        s = "",
                        r = "";
                    m.isLoggedIn && (s = m.data.first_name, r = "Student" === m.data.profile_type.name ? "my star Student" : "");
                    let a = await V.Z.findTopicsUserStudying(e);
                    a ? u({
                        type: G.Q.LAST_TOPIC_STUDYING,
                        body: {
                            data: a[0],
                            title: m.isLoggedIn ? "Hey it’s you ".concat(m.data.first_name, " ").concat(r) : "Hey it’s you"
                        },
                        occurance: G.j.ONE_TIME,
                        never: !1
                    }) : u({
                        type: G.Q.WELCOME_MODAL,
                        body: {
                            title: m.isLoggedIn ? "Welcome #ShuleDirector ".concat(s, ",") : "Hey!",
                            content: "I am happy you joined my classroom. Are there specific areas you would like me to help you with in your studies:"
                        },
                        occurance: G.j.ONE_TIME,
                        never: !1
                    })
                };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(N.Z, {
                        event_name: "home_page"
                    }), (0, a.jsx)(carousel_Carousel, {
                        data: e,
                        scrollToSection: () => {
                            window.scrollTo({
                                top: o.current.offsetTop,
                                behavior: "smooth"
                            })
                        },
                        carouselScrollRef: d
                    }), (0, a.jsxs)("div", {
                        className: l().homePageWrapper,
                        ref: o,
                        children: [(0, a.jsxs)("div", {
                            style: {
                                background: "#fff"
                            },
                            children: [(0, a.jsx)(q.Z, {}), (0, a.jsx)(c.Z, {
                                children: (0, a.jsx)(scroll_content, {
                                    isElementVissbile: p,
                                    scrollToSubjectsCards: () => {
                                        window.scrollTo({
                                            top: d.current.offsetTop,
                                            behavior: "smooth"
                                        })
                                    },
                                    scroll_type: Z.POPULAR_TOPICS
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            style: {
                                background: "#f0f2f5"
                            },
                            children: (0, a.jsx)(c.Z, {
                                children: (0, a.jsx)(scroll_content, {
                                    isElementVissbile: p,
                                    scroll_type: Z.DISCUSSIONS
                                })
                            })
                        }), (0, a.jsx)(home_MobileDownloadRow, {}), (0, a.jsx)(home_TestimonialsRow, {})]
                    })]
                })
            };
            var J = Home
        },
        500431: function(e, s, r) {
            "use strict";
            var a = r(835704);
            s.Z = new class {
                async findAllTestimonialsData(e, s) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    try {
                        let t = {
                                service: {
                                    micro: "sd-middleware",
                                    task: "all-testimonials",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "all",
                                    query: "limit=".concat(s, "&page=").concat(e)
                                }
                            },
                            {
                                data: n,
                                networkError: i
                            } = await a.Z.post(t);
                        if (i) return null;
                        return r && r(!1), n.results.results && n.results.results.length > 0 ? n.results.results : null
                    } catch (e) {
                        return null
                    }
                }
                constructor() {
                    this.accessToken = parseInt("12234")
                }
            }
        },
        69734: function(e, s, r) {
            "use strict";
            var a = r(835704);
            s.Z = new class {
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
                                data: s,
                                networkError: r,
                                serverError: t
                            } = await a.Z.post(e);
                        if (t || r || !s) return null;
                        return s.results.data
                    } catch (e) {
                        return null
                    }
                }
                async followUser(e) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        r = {
                            service: {
                                micro: "user_management",
                                task: "follow-user",
                                token: this.accessToken
                            },
                            POST: {
                                route: "follow-user/".concat(e, "/"),
                                follower_id: s
                            }
                        },
                        {
                            data: t,
                            networkError: n
                        } = await a.Z.post(r);
                    return n || !t || 200 !== t.code ? null : "Follow" === t.Status
                }
                async findFollowData(e, s, r, t) {
                    let n = {
                            service: {
                                micro: "user_management",
                                task: "list-of-followers-and-following",
                                token: this.accessToken
                            },
                            POST: {
                                route: "follows",
                                user_id: e,
                                status: "follower" === s ? "follower" : "following",
                                page: r,
                                limit: t
                            }
                        },
                        {
                            data: i,
                            networkError: o
                        } = await a.Z.post(n);
                    return o || 200 !== i.code ? null : i.data.results.length > 0 ? i.data.results : null
                }
                constructor() {
                    this.accessToken = parseInt("12234")
                }
            }
        },
        184248: function() {},
        585035: function() {},
        957442: function(e) {
            e.exports = {
                mainContainer: "Carousel_mainContainer__kluFY",
                carouselWrapper: "Carousel_carouselWrapper__2F_Ks",
                headerWrapper: "Carousel_headerWrapper__Xex6T",
                moreArrowWrapper: "Carousel_moreArrowWrapper__EPdw2",
                arrowButton: "Carousel_arrowButton__TkKb0",
                hadithHadithButtonWrapper: "Carousel_hadithHadithButtonWrapper__vvzi0",
                cardContainer: "Carousel_cardContainer__tszf6",
                cardFront: "Carousel_cardFront__ystSg",
                cardBack: "Carousel_cardBack__Lw0dH",
                subjectName: "Carousel_subjectName__e4TUk",
                subjectImageContainer: "Carousel_subjectImageContainer__y8FTk",
                effectHover: "Carousel_effectHover__MhGKu",
                skeletonCardsWrapper: "Carousel_skeletonCardsWrapper__1Vo_5",
                skeletonCard: "Carousel_skeletonCard__HJqPq",
                segmentWrapper: "Carousel_segmentWrapper__lgAfs"
            }
        },
        67147: function(e) {
            e.exports = {
                crollFixContentFrameWrapper: "ScrollContent_crollFixContentFrameWrapper__XWLPb",
                fixedConteneMainWrapper: "ScrollContent_fixedConteneMainWrapper__aUbN9",
                fixedWrapper: "ScrollContent_fixedWrapper__DUtoI",
                dicsussionContainerWrapper: "ScrollContent_dicsussionContainerWrapper__Ts3FB",
                latestDiscussionsMainWrapper: "ScrollContent_latestDiscussionsMainWrapper__K64wc",
                latestDiscussionsCadWrapper: "ScrollContent_latestDiscussionsCadWrapper__Mh9WT",
                actionWrapper: "ScrollContent_actionWrapper__dsc9Z",
                postHeaderWrapper: "ScrollContent_postHeaderWrapper__iDWGE",
                postContentWrapper: "ScrollContent_postContentWrapper__JbKN9",
                postContent: "ScrollContent_postContent__Xjgo1",
                commentWrapper: "ScrollContent_commentWrapper__OkBu_",
                comments: "ScrollContent_comments__aPniR",
                latestVideosMainWrapper: "ScrollContent_latestVideosMainWrapper__8C6dq",
                latestVideosCardWrapper: "ScrollContent_latestVideosCardWrapper__sFuF1",
                latestVideoCadWrapper: "ScrollContent_latestVideoCadWrapper__2yemP",
                imageCover: "ScrollContent_imageCover__ERZvx",
                videoDescriptins: "ScrollContent_videoDescriptins__iGG2F",
                lastContentUserReadingWrapper: "ScrollContent_lastContentUserReadingWrapper__yT_4A",
                latestTopicMainWrapper: "ScrollContent_latestTopicMainWrapper__3h3oh",
                cardWrapper: "ScrollContent_cardWrapper__lfhQl",
                coverWrapper: "ScrollContent_coverWrapper__nyN16",
                descriptiondWrapper: "ScrollContent_descriptiondWrapper__vb1u_",
                contentWrapper: "ScrollContent_contentWrapper__M6NXz",
                userAvatarWrapper: "ScrollContent_userAvatarWrapper__yk2XG",
                skeletonLoaderWrapper: "ScrollContent_skeletonLoaderWrapper__8tITn",
                popularTopicsInDiscussionListWrapper: "ScrollContent_popularTopicsInDiscussionListWrapper__OwlLR",
                actionButtonWrapper: "ScrollContent_actionButtonWrapper__7qGO8",
                fixed: "ScrollContent_fixed__zuD0Q"
            }
        },
        994068: function(e) {
            e.exports = {
                homePageWrapper: "Home_homePageWrapper__hY8xT",
                featuresRowWrapper: "Home_featuresRowWrapper__UkUBW",
                featureInnerWrapper: "Home_featureInnerWrapper__qw7tA",
                headerWrapper: "Home_headerWrapper__vCor_",
                mobileDownloadRowWrapper: "Home_mobileDownloadRowWrapper__EYq3G",
                mainWrapper: "Home_mainWrapper__vAxoI",
                videoClipWrapper: "Home_videoClipWrapper__Hsf_f",
                videoFrameWrapper: "Home_videoFrameWrapper__e_8da",
                videoPlayerWrapper: "Home_videoPlayerWrapper__VBgXg",
                appDownloadWrapper: "Home_appDownloadWrapper__t_cG5",
                testimonialsRowWrapper: "Home_testimonialsRowWrapper__PkLed",
                testimonialListWrapper: "Home_testimonialListWrapper__2GMkC",
                contentWrapper: "Home_contentWrapper__vDLFi",
                footerWrapper: "Home_footerWrapper__pRru9",
                overlayWrapper: "Home_overlayWrapper__zBv61",
                testimonialInnerWrapper: "Home_testimonialInnerWrapper__KkLtj",
                testimonialHeaderWrapper: "Home_testimonialHeaderWrapper__459VC",
                featuresWrapper: "Home_featuresWrapper__h9fk1",
                featureDescriptions: "Home_featureDescriptions__3jiby",
                featureIcon: "Home_featureIcon__OG2Rh",
                icon: "Home_icon__56IMc",
                testimonialsInnerWrapper: "Home_testimonialsInnerWrapper__FArL4",
                testimonialsListWrapper: "Home_testimonialsListWrapper__c6gZG",
                headerName: "Home_headerName__XBUbO"
            }
        },
        834146: function(e) {
            e.exports = {
                testimonialsMainWrapper: "Testimonials_testimonialsMainWrapper__5G_EN",
                mainWrapper: "Testimonials_mainWrapper__urLY2",
                leftWrapper: "Testimonials_leftWrapper__RCgr3",
                rightWrapper: "Testimonials_rightWrapper__sw_hp",
                testimonialsWrapper: "Testimonials_testimonialsWrapper__AnFV1",
                testimonialsBannerWrapper: "Testimonials_testimonialsBannerWrapper__0PhwG",
                header: "Testimonials_header__ze8l0",
                feedbackActionWrapper: "Testimonials_feedbackActionWrapper__q_ZWS",
                quoteWrapper: "Testimonials_quoteWrapper__7Ozh_",
                fullnameWrapper: "Testimonials_fullnameWrapper__VxE5t",
                quoteArrow: "Testimonials_quoteArrow__np6UB"
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
    }
]);