"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4914], {
        675738: function(e, t, s) {
            s.d(t, {
                mq: function() {
                    return X
                },
                G3: function() {
                    return J
                },
                Ne: function() {
                    return A
                },
                V3: function() {
                    return M
                }
            });
            var n = s(785893),
                r = s(667294),
                a = s(602831),
                o = s.n(a),
                i = s(490094),
                c = s(575503);
            s(836783);
            var l = s(14416),
                d = s(348748),
                u = s(924631),
                p = s(81263),
                h = s(270219),
                m = s(228736);
            let _ = new class {
                deviceChecker() {
                    return /(android|mobile|ipad|iphone)/i.test(navigator.userAgent)
                }
                assert(e, t) {}
                getParams(e) {
                    if (e) {
                        let t = Object.entries(e);
                        if (t && t.length > 0) try {
                            let e = t.filter(e => {
                                let [, t] = e;
                                return null != t
                            }).map(e => {
                                let [t, s] = e;
                                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(s))
                            });
                            return e.length > 0 ? "?".concat(e.join("&")) : " "
                        } catch (e) {
                            return ""
                        }
                    }
                }
            };
            var f = s(208160);

            function createShareButton(e, t, s, r, a) {
                return (0, n.jsx)(ShareComponent, {
                    styles: s,
                    className: r,
                    url: t,
                    type: null != e ? e : " ",
                    children: a
                })
            }

            function ShareComponent(e) {
                var t;
                let [s, a] = r.useState(!1);
                return (0, n.jsxs)("button", {
                    style: !e.className && e.styles ? e.styles : {},
                    className: e.className ? e.className : " ",
                    onClick: () => {
                        a(!0), window.open(e.url)
                    },
                    "aria-label": "You share to ".concat(null !== (t = null == e ? void 0 : e.type) && void 0 !== t ? t : ""),
                    children: [s ? (0, n.jsx)(f.a, {
                        id: 8,
                        userId: 12,
                        features: "feature8",
                        share: s,
                        setShare: a
                    }) : null, e.children]
                })
            }
            let WhatsappShareButton = e => {
                    var t, s;
                    return (0, n.jsx)(n.Fragment, {
                        children: createShareButton("whatsapp", (t = e.title, s = e.url, _.assert(s, "whatsap"), "https://" + (_.deviceChecker() ? "api" : "web.whatsapp.com/send" + _.getParams({
                            text: t ? t + s : s
                        }))), e.styles, e.className, e.children)
                    })
                },
                TelegramShareButton = e => {
                    var t, s;
                    return (0, n.jsx)(n.Fragment, {
                        children: createShareButton("telegram", (t = e.title, s = e.url, _.assert(s, "telegram"), "https://telegram.me/share/url" + _.getParams({
                            url: s,
                            text: null != t ? t : " "
                        })), e.styles, e.className, e.children)
                    })
                },
                TwitterShareButton = e => {
                    var t, s;
                    return (0, n.jsx)(n.Fragment, {
                        children: createShareButton("twitter", (t = e.title, s = e.url, _.assert(s), "https://twitter.com/share" + _.getParams({
                            url: s,
                            text: null != t ? t : " "
                        })), e.styles, e.className, e.children)
                    })
                },
                FacebookShareButton = e => {
                    var t, s;
                    return (0, n.jsx)(n.Fragment, {
                        children: createShareButton("facebook", (t = e.title, s = e.url, "https://www.facebook.com/sharer/sharer.php" + _.getParams({
                            u: s,
                            quote: t,
                            hashtag: "#facebook"
                        })), e.styles, e.className, e.children)
                    })
                };
            var v = s(784007),
                g = s(260802),
                C = s(725128),
                b = s(225084),
                y = s(211359);

            function ShareContainerComponent(e) {
                var t, s, r, a, i, c, l, d, u;
                let p = {
                    shareContainer: {
                        height: e.containerHeight,
                        backgroundColor: e.backgroundColor,
                        display: e.display,
                        alignItems: e.alignItems,
                        justifyContent: e.justifyContent,
                        border: e.borderStatus ? e.border : "none",
                        flexDirection: e.flexDirection,
                        transition: "linear 0.3s",
                        flex: e.flex
                    },
                    shareContainerInactive: {
                        width: 0,
                        height: 0,
                        borderRadius: 20,
                        backgroundColor: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "2%",
                        transition: "linear 0.3s",
                        border: "header" === e.from ? "none" : e.border,
                        flexDirection: e.flexDirection
                    },
                    mediaContents: {
                        marginLeft: "1%",
                        width: 40,
                        height: 40,
                        backgroundColor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        outline: "none",
                        border: "none"
                    },
                    mediaContentsHeader: {
                        marginLeft: "1%",
                        width: 40,
                        height: 40,
                        backgroundColor: "lightgrey",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        outline: "none",
                        border: "none"
                    }
                };
                return (0, n.jsx)("div", {
                    style: e.classname ? {} : e.notes_reducers.shareAndInviteContainer ? p.shareContainer : p.shareButtonContainerInactive,
                    className: null !== (t = e.classname) && void 0 !== t ? t : " ",
                    children: e.notes_reducers.shareAndInviteContainer ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(FacebookShareButton, {
                            url: null !== (s = e.url) && void 0 !== s ? s : "https://www.shuledirect.co.tz/notes/list_notes/2/21113",
                            title: null !== (r = e.title) && void 0 !== r ? r : "Shule direct",
                            styles: e.innerContainerClassName ? null : "header" !== e.from ? p.mediaContents : p.mediaContentsHeader,
                            className: e.innerContainerClassName ? e.innerContainerClassName + " " + o().facebook : o().facebook,
                            children: (0, n.jsx)(g.Z, {})
                        }), (0, n.jsx)(WhatsappShareButton, {
                            url: null !== (a = e.url) && void 0 !== a ? a : "https://www.shuledirect.co.tz/notes/list_notes/2/21113",
                            title: null !== (i = e.title) && void 0 !== i ? i : "Shule direct",
                            styles: e.innerContainerClassName ? null : "header" !== e.from ? p.mediaContents : p.mediaContentsHeader,
                            className: e.innerContainerClassName ? e.innerContainerClassName + " " + o().whatsapp : o().whatsapp,
                            children: (0, n.jsx)(v.Z, {})
                        }), (0, n.jsx)(TelegramShareButton, {
                            url: null !== (c = e.url) && void 0 !== c ? c : "https://www.shuledirect.co.tz/notes/list_notes/2/21113",
                            title: null !== (l = e.title) && void 0 !== l ? l : "Shule direct",
                            styles: e.innerContainerClassName ? null : "header" !== e.from ? p.mediaContents : p.mediaContentsHeader,
                            className: e.innerContainerClassName ? e.innerContainerClassName + " " + o().telegram : o().telegram,
                            children: (0, n.jsx)(C.Z, {})
                        }), (0, n.jsx)(TwitterShareButton, {
                            url: null !== (d = e.url) && void 0 !== d ? d : "https://www.shuledirect.co.tz/notes/list_notes/2/21113",
                            title: null !== (u = e.title) && void 0 !== u ? u : "Shule direct",
                            styles: e.innerContainerClassName ? null : "header" !== e.from ? p.mediaContents : p.mediaContentsHeader,
                            className: e.innerContainerClassName ? e.innerContainerClassName + " " + o().twitter : o().telegram,
                            children: (0, n.jsx)(b.Z, {})
                        })]
                    }) : null
                })
            }

            function ShareButtonComponent(e) {
                let t = {
                    shareButtonContainer: {
                        width: 30,
                        height: 30,
                        borderRadius: 20,
                        fontSize: 14,
                        backgroundColor: "details" === e.type ? "white" : "lightgrey",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "2%",
                        cursor: "pointer",
                        outline: "none",
                        border: "none"
                    }
                };
                return (0, n.jsx)("button", {
                    style: e.className ? {
                        outline: "none",
                        border: "none"
                    } : e.styles ? e.styles : t.shareButtonContainer,
                    className: e.className ? e.className : " ",
                    onClick: () => {
                        h.x.shareController(e.dispatch, e.notes_reducers.shareAndInviteContainer)
                    },
                    id: "shareButtonContainer",
                    "aria-label": "You have clicked share",
                    children: (0, n.jsx)(y.Z, {
                        style: {
                            width: e.iconSize,
                            height: e.iconSize,
                            color: e.iconColor
                        },
                        id: "shareButton"
                    })
                })
            }

            function mapStateToProps(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            }
            ShareContainerComponent.defaultProps = {
                containerHeight: 40,
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                border: "1px solid transparent",
                from: "header",
                flex: "auto",
                borderStatus: !1,
                alignment: "straight"
            }, ShareButtonComponent.defaultProps = {
                type: "details",
                iconSize: 18,
                iconColor: "black"
            };
            let j = (0, l.$j)(mapStateToProps)(ShareButtonComponent),
                x = (0, l.$j)(mapStateToProps)(ShareContainerComponent);
            var S = s(811163),
                I = s(678621),
                w = s(288078),
                T = s(82278),
                N = s(624039),
                k = s(588595),
                Z = s(519114);
            let P = r.memo(e => {
                let t = e.notes_reducers.topics ? e.notes_reducers.topics.classs : null;
                (0, S.useRouter)();
                let {
                    user: s
                } = (0, N.Z)(), {
                    y: a
                } = (0, I.Z)(), [i, c] = r.useState(!1);
                r.useEffect(() => {
                    let caller = async () => {
                        let t = await u.Z.getSubjects();
                        e.notes_reducers.topics && e.notes_reducers.topics.classs && d.Z.processStudyMoreSubjects(t, parseInt(e.notes_reducers.topics.classs) - 1, e.dispatch, e.notes_reducers.profileId, "notes"), saveUserTopicVisit(), addTopicToStudyPlan()
                    };
                    caller()
                }, [t]), r.useEffect(() => {
                    a > 230 && !e.teacherContentVissible ? c(!0) : c(!1)
                }, [a, e.teacherContentVissible]);
                let fetchingSubtopics = t => {
                        e.dispatch(p.g.completedSubtopics(null)), d.Z.processSubtopic(e.notes_reducers.topics.subjectId, t, e.dispatch)
                    },
                    processTopicToGetSubtopic = async t => {
                        e.notes_reducers.activeSubtopic && e.notes_reducers.activeSubtopic.subtopicChildrens && e.notes_reducers.activeSubtopic.subtopicChildrens.length, fetchingSubtopics(t), saveUserTopicVisit(t), addTopicToStudyPlan(t)
                    },
                    saveUserTopicVisit = async function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (!e.notes_reducers.subjectId || !e.notes_reducers.classId || !(t = t || e.notes_reducers.activeTopic)) return;
                        let n = {
                            classs_id: e.notes_reducers.classId,
                            subject_id: e.notes_reducers.subjectId,
                            topic_id: t || e.notes_reducers.activeTopic,
                            user_id: s.isLoggedIn ? s.data.id : ""
                        };
                        await k.Z.saveUserTopicsStudying(n), s.isLoggedIn && await d.Z.saveTopicUserVisit(n)
                    },
                    addTopicToStudyPlan = async function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (!e.notes_reducers.subjectId || !e.notes_reducers.classId || !s.isLoggedIn) return;
                        let n = {
                            subject_id: e.notes_reducers.subjectId,
                            class_id: e.notes_reducers.classId,
                            topic_id: t || e.notes_reducers.activeTopic,
                            total_subtopics: 20,
                            user_id: s.isLoggedIn ? s.data.id : "",
                            type: "notes",
                            start_date: "2023-02-01",
                            end_date: "2023-03-03"
                        };
                        await Z.Z.saveStudyPlan(n)
                    };
                return e.notes_reducers.topics && e.notes_reducers.topics.topics && e.notes_reducers.topics.topics.length > 0 ? (0, n.jsx)("div", {
                    className: o().topicMenuContainer,
                    children: (0, n.jsx)(m.f, {
                        topics: e.notes_reducers.topics,
                        processTopicToGetSubtopic: processTopicToGetSubtopic,
                        activeTopic: e.notes_reducers.activeTopic,
                        tabs: e.notes_reducers.tabs,
                        type: "study notes",
                        fixMenu: i,
                        self: e.dispatch,
                        shareAndInviteContainer: e.notes_reducers.shareAndInviteContainer
                    })
                }) : (0, n.jsxs)("div", {
                    style: {
                        borderLeft: "1px solid #ccc",
                        paddingLeft: "20px"
                    },
                    children: [(0, n.jsx)(w.Z, {
                        width: 190,
                        height: 40
                    }), [...Array(9)].map((e, t) => (0, n.jsx)(w.Z, {
                        width: 220,
                        height: 40
                    }, t))]
                })
            });

            function TopicsDisplayMenu_mapStateToProps(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            }
            P.displayName = "TopicsMenu";
            let A = (0, l.$j)(TopicsDisplayMenu_mapStateToProps)(P),
                M = (0, l.$j)(TopicsDisplayMenu_mapStateToProps)(function(e) {
                    let t = e.notes_reducers.topics && e.notes_reducers.topics.subjectName ? e.notes_reducers.topics.subjectName : " ",
                        s = e.notes_reducers.topics && e.notes_reducers.topics.classs ? e.notes_reducers.topics.classs : 2,
                        activeTopicAndContentsSetter = t => {
                            d.Z.processSubtopic(e.notes_reducers.topics.subjectId, t, e.dispatch), e.dispatch(p.g.setNotesHeader(!1)), e.dispatch(p.g.setNotesHeaderMenu(!1)), h.x.scrollToTheTop(document)
                        },
                        headerActivator = t => {
                            t && t.target ? "shareButton" !== t.target.id && "shareButtonContainer" !== t.target.id ? e.dispatch(p.g.setNotesHeaderMenu(!e.notes_reducers.notesHeaderMenu)) : h.x.shareController(e.dispatch, e.notes_reducers.shareAndInviteContainer) : e.dispatch(p.g.setNotesHeaderMenu(!e.notes_reducers.notesHeaderMenu))
                        };
                    return T.a.getInclusiveFeature(e.notes_reducers.inclusiveContents, "theme"), (0, n.jsxs)("div", {
                        className: o().topicMenuHeaderContainer,
                        children: [(0, n.jsxs)("div", {
                            className: o().rowHeaderContainer,
                            onClick: e => headerActivator(e),
                            children: [(0, n.jsx)("div", {
                                className: o().topicHeaderSubjectDetails,
                                children: (0, n.jsxs)("div", {
                                    className: o().topicContents,
                                    children: [(0, n.jsx)("b", {
                                        children: (() => {
                                            let t;
                                            if (e.notes_reducers.topics) {
                                                if (e.notes_reducers.topics.topics && e.notes_reducers.topics.topics.length > 0) {
                                                    let s = e.notes_reducers.topics.topics.find(t => parseInt(t.id) === parseInt(e.notes_reducers.activeTopic));
                                                    t = s && s.content ? s.content : " "
                                                } else t = " "
                                            } else t = " ";
                                            return t
                                        })(e.notes_reducers.topics, e.notes_reducers.activeTopicId)
                                    }), (0, n.jsx)("br", {}), (0, n.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [(0, n.jsx)("span", {
                                            style: {
                                                fontSize: 12,
                                                color: "#bbbbbb"
                                            },
                                            children: t + " form " + (parseInt(s) - 1)
                                        }), (0, n.jsx)(j, {
                                            type: "header",
                                            iconColor: "black"
                                        }), (0, n.jsx)(x, {
                                            from: "header",
                                            innerContainerClassName: o().mediaContentsHeader
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)("button", {
                                className: o().topicDropdownIconContainer,
                                "aria-label": "You have clicked drop down from top header",
                                children: (0, n.jsx)(c.Z, {
                                    style: {
                                        width: 50,
                                        height: 50,
                                        color: "grey"
                                    },
                                    className: e.notes_reducers.notesHeaderMenu ? o().dropdownActive : o().dropdownInactive
                                })
                            })]
                        }), e.notes_reducers.notesHeaderMenu ? (0, n.jsxs)("div", {
                            className: o().topicMenu,
                            children: [(0, n.jsx)("div", {
                                style: {
                                    color: "black",
                                    fontWeight: "bolder"
                                },
                                children: "Others Topics"
                            }), e.notes_reducers.topics && e.notes_reducers.topics.topics && e.notes_reducers.topics.topics.length > 0 ? (0, n.jsx)(n.Fragment, {
                                children: e.notes_reducers.topics.topics.map((t, s) => {
                                    var r;
                                    return t && parseInt(t.id) !== parseInt(e.notes_reducers.activeTopic) && "topic" === t.type.toLowerCase() ? (0, n.jsx)("button", {
                                        className: o().topicMenuContents,
                                        onClick: () => activeTopicAndContentsSetter(t.id),
                                        style: {
                                            fontSize: "1.1em",
                                            borderBottom: "1px solid #fff",
                                            padding: "0 20px"
                                        },
                                        "aria-label": "You have clicked topic for ".concat(null !== (r = null == t ? void 0 : t.content) && void 0 !== r ? r : " "),
                                        children: t.content
                                    }, s) : null
                                })
                            }) : null]
                        }) : null]
                    })
                });
            var B = s(625662),
                L = s(146574);
            let D = (0, l.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(function(e) {
                r.useEffect(() => {
                    h.x.filterSpecificSubjectClasses(e.topics, e.classes, null, e.dispatch)
                }, [e.topics, e.classes]);
                let fetchingNotes = async (t, s) => {
                        e.dispatch(p.g.setMoreSubjects(null)), e.dispatch(p.g.setClassId(parseInt(s))), h.x.clearRedux(e.dispatch), s && e.profileId && h.x.setActiveSubjectId(t, e.dispatch, s, e.profileId), await d.Z.processTopics(t, e.dispatch, s, e.profileId, null, null)
                    },
                    fetchingSubjectContents = async (t, s) => {
                        e.dispatch(p.g.setMoreSubjects(null)), e.dispatch(p.g.setClassId(parseInt(s))), h.x.clearRedux(e.dispatch), "syllabus" === e.tabs.trim().toLowerCase() ? h.x.getSyllabus(s, t, e.dispatch, e.profileId) : fetchingNotes(t, s)
                    };
                return e.notes_reducers.specificClasses && e.notes_reducers.specificClasses.length > 0 ? (0, n.jsx)("div", {
                    style: {
                        display: "flex",
                        flex: "auto",
                        marginTop: 20,
                        marginBottom: 20,
                        flexWrap: "wrap"
                    },
                    children: e.notes_reducers.specificClasses.map((t, s) => {
                        if (t && t.form && t.form.numeral && t.form.name) {
                            var r, a;
                            return (0, n.jsx)(B.Z, {
                                style: {
                                    width: 100,
                                    height: 30,
                                    backgroundColor: parseInt(e.classId) - 1 === parseInt(t.form.numeral) ? "#871617" : "lightgrey",
                                    borderRadius: 15,
                                    marginRight: 10,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: 5,
                                    fontFamily: null !== (a = T.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== a ? a : "chalkboard",
                                    cursor: "pointer",
                                    color: parseInt(e.classId) - 1 === parseInt(t.form.numeral) ? "white" : "black"
                                },
                                onClick: () => fetchingSubjectContents(t.subject && t.subject.id ? t.subject.id : 0, parseInt(t.form.id)),
                                "aria-label": "Clicking button for class ".concat(null == t ? void 0 : null === (r = t.form) || void 0 === r ? void 0 : r.name),
                                children: t.form && t.form.name ? t.form.name : " "
                            }, s + "".concat(t.form.numeral))
                        }
                    })
                }) : null
            });
            var F = s(415861),
                H = s(196540),
                R = s(534386),
                z = s(484818),
                $ = s(471802),
                U = s(757078);
            s(727484);
            var W = s(561903),
                E = s(26829),
                V = s(52359),
                Y = s(166672),
                G = s(331915),
                O = s(823552),
                q = s(910113);
            let Q = [{
                    target: ".add-study-plan-action-button",
                    content: "Add this topic to a study plan. Study plan help you track your learning progress, invite friends to learn together on the same topic, and discuss as you learn",
                    placement: "auto"
                }, {
                    target: ".view-study-plan-action-button",
                    content: "Learn this topic in a study plan, where you can track your learning progress, invite friends to learn together on the same topic, and discuss as you learn",
                    placement: "auto"
                }],
                AddToStudyPlanActionModal = e => {
                    let {
                        allowScroll: t,
                        blockScroll: s
                    } = (0, z.Z)();
                    return r.useEffect(() => {
                        s()
                    }, []), (0, n.jsx)("div", {
                        className: o().addToStudyPlanModal,
                        children: (0, n.jsxs)("div", {
                            className: "".concat(o().addToStudyPlanWrapper, " scale-in-ver-center_"),
                            children: [(0, n.jsx)(F.Z, {
                                variant: "h5",
                                children: "Add this topic to your study plan"
                            }), (0, n.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "top",
                                    gap: "20px"
                                },
                                children: [(0, n.jsx)(V._, {
                                    dateAdapter: E.y,
                                    children: (0, n.jsx)(Y.M, {
                                        label: "Start date",
                                        views: ["year", "month", "day"],
                                        value: e._date.start_date,
                                        onChange: t => {
                                            e.setDate(e => ({ ...e,
                                                start_date: t
                                            }))
                                        },
                                        renderInput: e => (0, n.jsx)(W.Z, { ...e
                                        })
                                    })
                                }), (0, n.jsx)(V._, {
                                    dateAdapter: E.y,
                                    children: (0, n.jsx)(Y.M, {
                                        label: "End date",
                                        views: ["year", "month", "day"],
                                        value: e._date.end_date,
                                        onChange: t => {
                                            e.setDate(e => ({ ...e,
                                                end_date: t
                                            }))
                                        },
                                        renderInput: e => (0, n.jsx)(W.Z, { ...e
                                        })
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: o().bottomWrapper,
                                children: [(0, n.jsx)(B.Z, {
                                    variant: "outlined",
                                    onClick: () => {
                                        e.setShowModal(!1), t()
                                    },
                                    children: "Cancel"
                                }), e.isLoading ? (0, n.jsx)(B.Z, {
                                    variant: "contained",
                                    disabled: !0,
                                    children: "Adding..."
                                }) : (0, n.jsx)(B.Z, {
                                    variant: "contained",
                                    onClick: e.addTopicTStudyPlan,
                                    children: "Add"
                                })]
                            })]
                        })
                    })
                },
                J = (0, l.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(function(e) {
                    var t, s, a;
                    let c, u;
                    let {
                        user: p,
                        saveServiceRequireLogin: h,
                        showLoginForm: m
                    } = (0, N.Z)(), _ = (0, S.useRouter)(), [f, v] = r.useState(!1), [g, C] = r.useState(!1), [b, y] = r.useState(null), I = (null === (t = e.notes_reducers) || void 0 === t ? void 0 : t.topics) && e.notes_reducers.topics.subjectName ? e.notes_reducers.topics.subjectName : " ";
                    e.notes_reducers.topics && e.notes_reducers.topics.subjectCover && e.notes_reducers.topics.subjectCover, T.a.getInclusiveFeature(e.notes_reducers.inclusiveContents);
                    let [w, k] = r.useState({
                        start_date: null,
                        end_date: null
                    }), P = (0, l.I0)(), {
                        saveInteractiveModalQuee: A
                    } = (0, G.Z)();
                    r.useEffect(() => {
                        if (!e.notes_reducers.activeTopic) return y(null), () => {};
                        let initCheckUserTopicStudyPlan = async () => {
                            let t = [];
                            if (p.isLoggedIn) {
                                let t = await Z.Z.findUserStudyPlanData(p.data.id, e.notes_reducers.activeTopic);
                                t && (P((0, q.v9)(t[0])), y(t))
                            }
                            let s = await d.Z.processTopics(e.notes_reducers.subjectId, null, e.notes_reducers.classId, null, e.notes_reducers.activeTopic, null);
                            s = s.children.find(t => parseInt(t.id) === parseInt(e.notes_reducers.activeTopic));
                            let n = await d.Z.processSubtopic(e.notes_reducers.subjectId, e.notes_reducers.activeTopic, null, null, null);
                            n && n.data.data[0].notesResults.subtopics.filter(e => "subtopic" === e.type).map((e, s) => {
                                e.children.map((e, s) => {
                                    "Concept" === e.type && t.push(e.content)
                                })
                            }), A({
                                type: O.Q.TOPIC_IN_STUDY_PLAN,
                                body: {
                                    title: p.isLoggedIn ? "Welcome ".concat(p.data.first_name) : "Welcome",
                                    data: t,
                                    content: s.content
                                },
                                occurance: O.j.RECURRING,
                                never: !1
                            })
                        };
                        initCheckUserTopicStudyPlan()
                    }, [e.notes_reducers.activeTopic]);
                    let addTopicTStudyPlan = async () => {
                        if (!p.isLoggedIn) return h({
                            action: "login_to_add_study_plan"
                        }), m(), !1;
                        let t = "".concat(w.start_date.$y, "-").concat(w.start_date.$M + 1, "-").concat(w.start_date.$D),
                            s = "".concat(w.end_date.$y, "-").concat(w.end_date.$M + 1, "-").concat(w.end_date.$D),
                            n = {
                                subject_id: parseInt(e.notes_reducers.subjectId),
                                class_id: parseInt(e.notes_reducers.classId),
                                topic_id: parseInt(e.notes_reducers.activeTopic),
                                total_subtopics: e.notes_reducers.subtopics.length,
                                user_id: p.data.id,
                                start_date: t,
                                type: "study_plan",
                                end_date: s
                            };
                        P((0, q.y)(!0)), v(!0);
                        let r = await Z.Z.saveStudyPlan(n);
                        _.push("/study-plan/view/".concat(r.id)), _.events.off("routeChangeStart", () => {
                            v(!1)
                        })
                    };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [g && (0, n.jsx)(AddToStudyPlanActionModal, {
                            addTopicTStudyPlan: addTopicTStudyPlan,
                            setShowModal: C,
                            isLoading: f,
                            setDate: k,
                            _date: w
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(L.Z, {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: (0, n.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        width: "100%"
                                    },
                                    children: e.notes_reducers.topics ? e.notes_reducers.topics.subjectImage ? (0, n.jsxs)(n.Fragment, {
                                        children: [(0, n.jsxs)("div", {
                                            style: {
                                                width: "100%"
                                            },
                                            children: [(0, n.jsx)(F.Z, {
                                                variant: "h4",
                                                sx: {
                                                    color: "black",
                                                    fontFamily: null !== (s = T.a.getInclusiveFeature(e.notes_reducers.inclusiveContents)) && void 0 !== s ? s : ""
                                                },
                                                children: (u = (c = e.notes_reducers.topics && e.notes_reducers.topics.topics && e.notes_reducers.topics.topics.length > 0 ? e.notes_reducers.topics.topics.find(t => parseInt(t.id) === parseInt(e.notes_reducers.activeTopic)) : null) && c.content ? c.content : " ", (0, n.jsxs)(n.Fragment, {
                                                    children: [(0, n.jsx)($.ZP, {
                                                        steps: Q,
                                                        disableScrolling: !0
                                                    }), (0, n.jsxs)("div", {
                                                        className: "".concat(o().topicNameWrapper),
                                                        children: [u, (0, n.jsx)("div", {
                                                            className: "".concat(o().addToStudyPlanButton),
                                                            children: b ? (0, n.jsx)(R.Z, {
                                                                title: "View this topic in your study plan",
                                                                arrow: !0,
                                                                children: (0, n.jsxs)(B.Z, {
                                                                    style: {
                                                                        gap: "10px"
                                                                    },
                                                                    variant: "outlined",
                                                                    onClick: () => {
                                                                        _.push("/study-plan/view/".concat(b[0].id))
                                                                    },
                                                                    children: [(0, n.jsx)(U.Z, {}), " View your plan"]
                                                                })
                                                            }) : (0, n.jsx)(R.Z, {
                                                                title: "Add this topic to your study plan",
                                                                arrow: !0,
                                                                children: (0, n.jsxs)(B.Z, {
                                                                    onClick: () => {
                                                                        C(!0)
                                                                    },
                                                                    variant: "outlined",
                                                                    children: [(0, n.jsx)(H.Z, {}), "Add to study plan"]
                                                                })
                                                            })
                                                        })]
                                                    })]
                                                }))
                                            }), (0, n.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    width: "100%"
                                                },
                                                children: [(0, n.jsxs)("div", {
                                                    style: {
                                                        fontSize: 18,
                                                        color: "black",
                                                        fontFamily: null !== (a = T.a.getInclusiveFeature(e.notes_reducers.inclusiveContents)) && void 0 !== a ? a : ""
                                                    },
                                                    children: [I + "  Form  ", parseInt(e.notes_reducers.classId) - 1]
                                                }), (0, n.jsxs)("div", {
                                                    style: {
                                                        flex: "1",
                                                        display: "flex"
                                                    },
                                                    children: [(0, n.jsx)(j, {}), (0, n.jsx)(x, {
                                                        from: "details",
                                                        innerContainerClassName: o().mediaContents
                                                    })]
                                                })]
                                            })]
                                        }), (0, n.jsx)(D, {})]
                                    }) : [void 0, void 0, void 0].map((e, t) => (0, n.jsx)("div", {
                                        children: (0, n.jsx)(i.eD, {})
                                    }, t)) : [void 0, void 0, void 0].map((e, t) => (0, n.jsx)("div", {
                                        children: (0, n.jsx)(i.eD, {})
                                    }, t))
                                })
                            })
                        })]
                    })
                }),
                K = [{
                    name: "Study Notes",
                    icon: "https://www.shuledirect.co.tz/assets/public/img/files-120.png",
                    route: "/notes/list_notes/4/21401/1#"
                }, {
                    name: "Syllabus",
                    icon: "https://www.shuledirect.co.tz/assets/public/img/files-120.png",
                    route: "/notes/list_syllabus"
                }, {
                    name: "Discussions",
                    icon: "https://www.shuledirect.co.tz/assets/public/img/files-120.png",
                    route: "/discussion"
                }],
                X = (0, l.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(function(e) {
                    let t = (0, S.useRouter)(),
                        tabController = (s, n) => {
                            "study notes" === s.toLowerCase() ? (t.push("/notes/list_notes/".concat(e.notes_reducers.classId, "/").concat(e.notes_reducers.subjectId)), e.dispatch(p.g.setTabs(s))) : "syllabus" === s.toLowerCase() ? (e.dispatch(p.g.setTabs(s)), t.push("/notes/list_syllabus/".concat(e.notes_reducers.classId, "/").concat(e.notes_reducers.subjectId))) : "discussions" === s.toLowerCase() && t.push("/discussion/view/".concat(e.notes_reducers.classId, "/").concat(e.notes_reducers.subjectId))
                        };
                    return T.a.getSpecificInclusiveFeature(e.notes_reducers.inclusiveContents, "theme"), (0, n.jsx)("div", {
                        className: o().ribbonContainer,
                        children: (0, n.jsx)(L.Z, {
                            style: {
                                display: "flex",
                                flex: "auto",
                                alignItems: "center",
                                flexWrap: "wrap"
                            },
                            children: K.map((t, s) => {
                                var r;
                                return (0, n.jsx)(B.Z, {
                                    className: e.notes_reducers.tabs && e.notes_reducers.tabs.toLowerCase() === t.name.toLowerCase() ? "".concat(o().ribbonContentsContainer, " ").concat(o().ribbonContentsContainerActive) : o().ribbonContentsContainer,
                                    onClick: () => tabController(t.name, t.route),
                                    children: (0, n.jsx)("div", {
                                        className: o().textDivStyle,
                                        "aria-label": "You have clicked ".concat(null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : " "),
                                        children: t.name
                                    })
                                }, s)
                            })
                        })
                    })
                })
        }
    }
]);