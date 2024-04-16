(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9326], {
        208160: function(e, t, s) {
            "use strict";
            s.d(t, {
                a: function() {
                    return PointCollector
                }
            });
            var a = s(667294),
                n = s(835704);
            let calculatingPoints = async e => {
                let t = {
                    data: [{
                        userId: e.userId,
                        featureId: e.id,
                        key: e.features,
                        createdTime: new Date().getTime()
                    }],
                    service: {
                        micro: "reward",
                        task: "api/create",
                        token: 12234
                    }
                };
                await n.Z.post(t), e.share && e.setShare(!1)
            };

            function PointCollector(e) {
                return (0, a.useEffect)(() => {
                    calculatingPoints(e)
                }, []), null
            }
            PointCollector.defaultProps = {
                share: null,
                directionName: null,
                directionId: null
            }
        },
        836783: function(e, t, s) {
            "use strict";
            s.d(t, {
                XE: function() {
                    return W
                },
                a5: function() {
                    return w.a
                }
            });
            var a = s(785893),
                n = s(667294),
                c = s(281512),
                r = s.n(c),
                o = s(82278);

            function ContentsComponent(e) {
                var t;
                let s = {
                    contents: {
                        fontSize: e.fontSize,
                        color: e.color,
                        fontWeight: e.fontWeight,
                        fontFamily: o.a.getInclusiveFeature(e.inclusiveContents)
                    }
                };
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: null !== (t = e.className) && void 0 !== t ? t : " ",
                        style: e.className ? {
                            fontFamily: o.a.getInclusiveFeature(e.inclusiveContents)
                        } : e.styles ? e.styles : s.contents,
                        onClick: e.onpress,
                        children: e.content
                    })
                })
            }

            function RowColsContainer(e) {
                let t = {
                    containerStyle: {
                        backgroundColor: e.backgroundColor,
                        minHeight: e.height,
                        display: e.display,
                        width: e.width,
                        flexWrap: e.flexWrap,
                        flexDirection: e.flexDirection,
                        marginLeft: e.marginLeft,
                        marginTop: e.marginTop,
                        alignItems: e.alignItem,
                        justifyContent: e.justifyContent
                    }
                };
                return (0, a.jsx)("div", {
                    className: e.classname ? e.classname : " ",
                    style: e.classname ? {} : e.styles ? e.styles : t.containerStyle,
                    children: e.children
                })
            }
            ContentsComponent.defaultProps = {
                fontSize: 18,
                color: "#666",
                fontWeight: "200",
                onpress: () => {},
                inclusiveContents: null,
                themeStatus: !1
            }, RowColsContainer.defaultProps = {
                backgroundColor: "transparent",
                height: 80,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                flexWrap: "wrap",
                marginLeft: 0,
                marginTop: 0,
                alignItem: "center",
                justifyContent: "flex-start"
            };
            var i = s(881829),
                l = s(14416),
                u = s(811163),
                d = s(624039),
                p = s(81263),
                _ = s(348748),
                m = s(270219),
                j = s(534386),
                b = s(625662),
                h = s(288078),
                g = s(924631),
                f = s(960596),
                v = s(458673),
                x = s(459366),
                C = s(497545),
                y = s(20796),
                S = s(196800),
                I = s(815227);

            function MoreSubjectsComponent(e) {
                var t;
                let s = (0, u.useRouter)(),
                    c = (0, l.I0)(),
                    [W, w] = n.useState([]),
                    {
                        user: N
                    } = (0, d.Z)(),
                    {
                        handleActiveCategory: T
                    } = (0, C.Z)(),
                    {
                        moreText: A,
                        studyText: Z
                    } = e,
                    M = null === (t = e.notes_reducers) || void 0 === t ? void 0 : t.moreContents;
                i.WE;
                let {
                    subjects_data: k,
                    category_data: R,
                    classs_data: D
                } = (0, l.v9)(e => e.pastpaper_data), {
                    discussion_categories: E,
                    fetching_discussions_status: F
                } = (0, l.v9)(e => e.discussions_data), {
                    classes: B
                } = (0, l.v9)(e => e.general_data), {
                    users_published_in_topic: H
                } = (0, l.v9)(e => e.trc_content_data), {
                    public_exam_subject_data: P
                } = (0, l.v9)(e => e.creation_data), L = s.pathname.split("/");
                n.useEffect(() => {
                    if (!M) return () => {};
                    "past_paper" !== e.source && w(Array(M.length).fill().map((e, t) => W[t] || n.createRef()))
                }, [M]), n.useEffect(() => {
                    if (0 === W.length) return () => {};
                    "past_paper" !== e.source && "discussion" !== e.source && "public_exam_subject_data" !== e.source && (null == M || M.map((t, s) => {
                        if (parseInt(t.subjectId) === parseInt(e.notes_reducers.subjectId)) {
                            var a, n;
                            null === (n = W[s]) || void 0 === n || null === (a = n.current) || void 0 === a || a.scrollIntoView({
                                behavior: "smooth",
                                inline: "center"
                            })
                        }
                    }))
                }, [e.notes_reducers.subjectId]), n.useEffect(() => {
                    if (!k.subject_data) return () => {};
                    "past_paper" === e.source && w(Array(k.subject_data.length).fill().map((e, t) => W[t] || n.createRef()))
                }, [k.subject_data]), n.useEffect(() => {
                    if (P) return () => {};
                    "pubilc_exam_data" === e.source && w(Array(P.data.length).fill().map((e, t) => W[t] || n.createRef()))
                }, [P.data]), n.useEffect(() => {
                    if (0 === W.length) return () => {};
                    if ("past_paper" === e.source) {
                        var t;
                        null === (t = k.subject_data) || void 0 === t || t.map((e, t) => {
                            if (parseInt(e.id) === parseInt(k.active_subject.id)) {
                                var s, a;
                                null === (a = W[t]) || void 0 === a || null === (s = a.current) || void 0 === s || s.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center"
                                })
                            }
                        })
                    }
                }, [k.active_subject]), n.useEffect(() => {
                    if (!E.data) return () => {};
                    "discussion" === e.source && w(Array(E.data.length).fill().map((e, t) => W[t] || n.createRef()))
                }, [E.data]), n.useEffect(() => {
                    if (0 === W.length || !F) return () => {};
                    if ("discussion" === e.source) {
                        var t;
                        null === (t = E.data) || void 0 === t || t.map((e, t) => {
                            if (parseInt(e.subjectId) === parseInt(E.active_category.subjectId)) {
                                var s, a;
                                null === (a = W[t]) || void 0 === a || null === (s = a.current) || void 0 === s || s.scrollIntoView({
                                    behavior: "smooth",
                                    inline: "center"
                                })
                            }
                        })
                    }
                }, [E.active_category]);
                let fetchingAnotherSubject = async (t, a) => {
                        var n;
                        m.x.clearRedux(e.dispatch), m.x.scrollToTheTop(document);
                        let c = t ? t + 1 : 2;
                        e.dispatch(p.g.setClasses(B.data)), e.dispatch(p.g.setSubjectId(a)), e.dispatch(p.g.setClassId(c)), (null === (n = e.notes_reducers) || void 0 === n ? void 0 : n.tabs.toLowerCase()) === "syllabus" ? m.x.getSyllabus(parseInt(c - 1), a, e.dispatch, e.notes_reducers.profileId) : await _.Z.processTopics(a, e.dispatch, c, e.profileId, null, null), "syllabus" === e.notes_reducers.tabs.toLowerCase() ? s.push("/notes/list_syllabus/" + c + "/" + a) : s.push("/notes/list_notes/" + c + "/" + a)
                    },
                    O = (o.a.getSpecificInclusiveFeature(e.inclusiveContents, "theme"), e => {
                        c((0, f.Jd)());
                        let t = R.active_category ? R.active_category.name : "",
                            s = D.active_class ? D.active_class.numeral : "";
                        c((0, f.v9)({
                            subject: e,
                            numeral: s,
                            exam_type: t,
                            filter_by_category: null
                        }))
                    }),
                    handleClassSelection = async (e, t) => {
                        if ("notes" === t) {
                            let t = await g.Z.getSubjects(),
                                s = [];
                            t && t.map((t, a) => {
                                t.data.map((t, a) => {
                                    parseInt(t.form.id) === parseInt(e.target.value) && s.push(t.subject.id)
                                })
                            }), fetchingAnotherSubject(parseInt(e.target.value) - 1, s[0])
                        } else if ("discussion" === t) {
                            let t = B.data.filter(t => t.id === e.target.value);
                            c((0, x.iz)(t[0])), c((0, y.dT)(!0)), c((0, y.AL)())
                        }
                    };
                return o.a.getInclusiveFeature(e.inclusiveContents), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: r().classSelectionWrapper,
                        children: [(0, a.jsxs)("div", {
                            className: r().leftHandlerWrapper,
                            children: [L && L.length > 0 && L.includes("past_paper") ? (0, a.jsx)(ContentsComponent, {
                                content: "notes_page_top" === e.position ? "past_paper" !== e.source && "discussion" !== e.source ? "Form ".concat(e.notes_reducers.classId - 1, " Subjects") : "past_paper" === e.source ? "Subjects" : " Discussion Categories" : "More from Shule Direct"
                            }) : null, L && L.length > 0 && L.includes("notes") ? (0, a.jsxs)("select", {
                                onChange: e => handleClassSelection(e, "notes"),
                                children: [(0, a.jsx)("option", {
                                    value: e.notes_reducers.classId,
                                    children: "notes_page_top" === e.position ? "Form ".concat(e.notes_reducers.classId - 1, " Subjects") : ""
                                }), B.data && B.data.length > 0 && B.data.map((t, s) => {
                                    if (e.notes_reducers.classId != t.id) return (0, a.jsx)("option", {
                                        value: t.id,
                                        children: "".concat(t.name, " Subjects")
                                    }, s)
                                })]
                            }) : null, L && L.length > 0 && L.includes("discussion") ? (0, a.jsxs)("select", {
                                onChange: e => handleClassSelection(e, "discussion"),
                                children: [(0, a.jsx)("option", {
                                    value: B.selected && B.selected.id,
                                    children: "".concat(B.selected && B.selected.name, " Discussions")
                                }), B.data && B.data.length > 0 && B.data.map((e, t) => {
                                    if (B.selected && B.selected.id != e.id) return (0, a.jsx)("option", {
                                        value: e.id,
                                        children: "".concat(e.name, " Discussions")
                                    }, t)
                                })]
                            }) : null]
                        }), (0, a.jsxs)("div", {
                            className: r().rightHandlerWrapper,
                            children: [L && L.length > 0 && L.includes("notes") && (0, a.jsx)(a.Fragment, {
                                children: H ? (0, a.jsxs)("div", {
                                    className: r().usersListWrapper,
                                    children: [H.map((e, t) => (0, a.jsx)(j.Z, {
                                        title: "".concat(e.first_name, " ").concat(e.last_name),
                                        arrow: !0,
                                        children: (0, a.jsx)(b.Z, {
                                            className: r()._button,
                                            children: (0, a.jsx)(I.Yt, {
                                                isLoggedIn: !0,
                                                image: e.image,
                                                size: "small"
                                            })
                                        })
                                    }, t)), (0, a.jsx)(b.Z, {
                                        variant: "outlined",
                                        className: r().actionButtonWrapper,
                                        style: {
                                            gap: "5px"
                                        },
                                        onClick: () => {
                                            c((0, S.Xg)(!0))
                                        },
                                        children: "View teacher's notes"
                                    })]
                                }) : (0, a.jsx)(b.Z, {
                                    variant: "outlined",
                                    className: r().actionButtonWrapper,
                                    onClick: () => {
                                        c((0, S.Xg)(!0))
                                    },
                                    children: "More resources to learn"
                                })
                            }), L && L.length > 0 && L.includes("discussion") && (0, a.jsx)(a.Fragment, {
                                children: E.active_category && "syllabus" === E.active_category.type ? (0, a.jsxs)(b.Z, {
                                    className: r().actionButtonWrapper,
                                    onClick: () => {
                                        s.push("/notes/list_notes/".concat(B.selected.id, "/").concat(E.active_category.subjectId))
                                    },
                                    style: {
                                        textTransform: "none"
                                    },
                                    variant: "outlined",
                                    children: ["Study ", E.active_category.subject, " ", B.selected.name]
                                }) : (0, a.jsxs)(b.Z, {
                                    className: r().actionButtonWrapper,
                                    onClick: () => {
                                        s.push("/".concat(B.selected.url))
                                    },
                                    style: {
                                        textTransform: "none"
                                    },
                                    variant: "outlined",
                                    children: ["View ", B.selected && B.selected.name, " notes"]
                                })
                            })]
                        })]
                    }), L && L.length > 0 && L.includes("notes") || L.includes("past_paper") || L.includes("discussion") || L.includes("examination-room") ? (0, a.jsx)(RowColsContainer, {
                        children: (0, a.jsxs)("div", {
                            className: "notes_page_top" === e.position ? "".concat(r().subjectsMainWrapper) : "",
                            children: ["past_paper" !== e.source && "discussion" !== e.source && "public_exam_subject_data" !== e.source && (0, a.jsx)(n.Fragment, {
                                children: M && M.length > 0 ? M.map((t, s) => {
                                    if (t && t.classs && t.subjectId) {
                                        var n, c;
                                        return (0, a.jsx)("div", {
                                            children: (0, a.jsxs)(b.Z, {
                                                className: "notes_page_top" === e.position ? Number(t.subjectId) === Number(e.notes_reducers.subjectId) ? "".concat(r().subjectCardWrapper, " ").concat(r().activeSubject) : "".concat(r().subjectCardWrapper) : "".concat(r().moreActionButton),
                                                onClick: () => fetchingAnotherSubject(parseInt(t.classs), parseInt(t.subjectId)),
                                                "aria-label": "You have clicked ".concat(null !== (n = null == t ? void 0 : t.subject) && void 0 !== n ? n : " "),
                                                ref: W[s],
                                                children: [(0, a.jsx)("div", {
                                                    className: "".concat(r().buttonIcon, " ").concat(null !== (c = null == t ? void 0 : t.subject.replace(/\s+/g, "")) && void 0 !== c ? c : " "),
                                                    children: (0, a.jsx)("img", {
                                                        src: t && t.image ? t.image : " ",
                                                        style: "notes_page_top" !== e.position ? {
                                                            width: 20,
                                                            height: 20,
                                                            marginRight: 5
                                                        } : {}
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: r().buttonText,
                                                    children: t ? "Information and Computer Studies" === t.subject ? "ICS" : t.subject ? t.subject : " " : ""
                                                })]
                                            })
                                        })
                                    }
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: "notes_page_top" === e.position ? [...Array(9)].map(e => (0, a.jsx)(h.Z, {
                                        width: 160,
                                        height: 200
                                    }, e)) : (0, a.jsx)(h.Z, {})
                                })
                            }, 1), "past_paper" === e.source && (0, a.jsx)(n.Fragment, {
                                children: k.subject_data ? k.subject_data.map((t, s) => {
                                    var n;
                                    return (0, a.jsx)("div", {
                                        children: (0, a.jsxs)(b.Z, {
                                            className: "notes_page_top" === e.position ? Number(t.id) === Number(k.active_subject.id) ? "".concat(r().subjectCardWrapper, " ").concat(r().activeSubject) : "".concat(r().subjectCardWrapper) : "".concat(r().moreActionButton),
                                            onClick: () => O(t.name),
                                            ref: W[s],
                                            children: [(0, a.jsx)("div", {
                                                className: "".concat(r().buttonIcon, " ").concat(null !== (n = null == t ? void 0 : t.name.replace(/\s+/g, "")) && void 0 !== n ? n : " "),
                                                children: (0, a.jsx)("img", {
                                                    src: t && t.image ? t.image : " ",
                                                    style: "notes_page_top" !== e.position ? {
                                                        width: 20,
                                                        height: 20,
                                                        marginRight: 5
                                                    } : {}
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: r().buttonText,
                                                children: t ? "INFORMATION AND COMPUTER STUDIES" === t.name ? "ICS" : t.name ? t.name : " " : ""
                                            })]
                                        })
                                    })
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: "notes_page_top" === e.position ? [...Array(9)].map(e => (0, a.jsx)(h.Z, {
                                        width: 160,
                                        height: 200
                                    }, e)) : (0, a.jsx)(h.Z, {})
                                })
                            }, 2), "discussion" === e.source && (0, a.jsx)(n.Fragment, {
                                children: E.data ? E.data.map((t, n) => {
                                    var c;
                                    return (0, a.jsx)("div", {
                                        children: (0, a.jsxs)(b.Z, {
                                            className: "notes_page_top" === e.position ? Number(t.subjectId) === Number(E.active_category.subjectId) ? "".concat(r().subjectCardWrapper, " ").concat(r().activeSubject) : "".concat(r().subjectCardWrapper) : "".concat(r().moreActionButton),
                                            onClick: () => {
                                                T(t), s.push("/discussion/view/".concat(B.selected.id, "/").concat(t.subjectId))
                                            },
                                            ref: W[n],
                                            children: [(0, a.jsx)("div", {
                                                className: "".concat(r().buttonIcon, " ").concat(null !== (c = null == t ? void 0 : t.subject.replace(/\s+/g, "")) && void 0 !== c ? c : " "),
                                                children: (0, a.jsx)("img", {
                                                    src: t && t.image ? t.image : " ",
                                                    style: "notes_page_top" !== e.position ? {
                                                        width: 20,
                                                        height: 20,
                                                        marginRight: 5
                                                    } : {}
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: r().buttonText,
                                                children: t ? "Information and Computer Studies" === t.subject ? "ICS" : t.subject ? t.subject : " " : ""
                                            })]
                                        })
                                    }, n)
                                }) : (0, a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "10px"
                                    },
                                    children: "notes_page_top" === e.position ? [...Array(9)].map(e => (0, a.jsx)(h.Z, {
                                        width: 160,
                                        height: 200
                                    }, e)) : (0, a.jsx)(h.Z, {})
                                })
                            }, 3), "public_exam_subject_data" === e.source && (0, a.jsx)(n.Fragment, {
                                children: P.data && P.data.map((t, s) => (0, a.jsx)("div", {
                                    children: (0, a.jsxs)(b.Z, {
                                        className: parseInt(t.subject.subject_id) === parseInt(P.active.subject.subject_id) ? "".concat(r().subjectCardWrapper, " ").concat(r().activeSubject) : "".concat(r().subjectCardWrapper),
                                        onClick: () => {
                                            c((0, v.J6)({
                                                type: "active",
                                                active: t
                                            }))
                                        },
                                        ref: W[s],
                                        children: [(0, a.jsx)("div", {
                                            className: "".concat(r().buttonIcon, " ").concat(t.subject.subject_class),
                                            children: (0, a.jsx)("img", {
                                                src: t && t.subject.image ? t.subject.image : " ",
                                                style: "notes_page_top" !== e.position ? {
                                                    width: 20,
                                                    height: 20,
                                                    marginRight: 5
                                                } : {}
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: r().buttonText,
                                            children: t ? "INFORMATION AND COMPUTER STUDIES" === t.subject.name ? "ICS" : t.subject.name ? t.subject.name : " " : ""
                                        })]
                                    })
                                }))
                            }, 2)]
                        })
                    }) : null]
                })
            }
            MoreSubjectsComponent.defaultProps = {
                moreText: "More from Shule Direct",
                studyText: "Study more",
                moreContents: [],
                studyContents: []
            };
            let W = (0, l.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(MoreSubjectsComponent);
            var w = s(208160)
        },
        659326: function(e, t, s) {
            "use strict";
            var a = s(785893),
                n = s(667294),
                c = s(625662),
                r = s(146574),
                o = s(811163),
                i = s(14416),
                l = s(708254),
                u = s(478298),
                d = s(348748),
                p = s(270219),
                _ = s(341911),
                m = s(81263),
                j = s(561490),
                b = s.n(j),
                h = s(836783),
                g = s(960596),
                f = s(20796);
            t.Z = (0, i.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(e => {
                var t;
                let s = null === (t = e.notes_reducers) || void 0 === t ? void 0 : t.moreContents,
                    j = (0, i.I0)(),
                    v = (0, o.useRouter)(),
                    [x, C] = n.useState(null),
                    [y, S] = n.useState(null),
                    {
                        subjects_data: I,
                        category_data: W,
                        classs_data: w
                    } = (0, i.v9)(e => e.pastpaper_data),
                    {
                        discussion_categories: N
                    } = (0, i.v9)(e => e.discussions_data);
                n.useEffect(() => {
                    if ("discussion" === e.source) {
                        let e = N.data && N.data.findIndex(e => e.subjectId === N.active_category.subjectId),
                            t = e - 1,
                            s = e + 1,
                            a = N.data && "object" == typeof N.data[s] ? N.data[s] : null;
                        C(N.data && "object" == typeof N.data[t] ? N.data[t] : null), S(a)
                    }
                }, [N]), n.useEffect(() => {
                    if ("past_paper" === e.source) {
                        let e = I.subject_data && I.subject_data.findIndex(e => e.id === I.active_subject.id),
                            t = e - 1,
                            s = e + 1,
                            a = I.subject_data && "object" == typeof I.subject_data[s] ? I.subject_data[s] : null;
                        C(I.subject_data && "object" == typeof I.subject_data[t] ? I.subject_data[t] : null), S(a)
                    }
                }, [I]), n.useEffect(() => {
                    if ("past_paper" !== e.source && "discussion" !== e.source) {
                        s = s && s.length > 0 ? s.map(e => ({ ...e,
                            id: e.subjectId
                        })) : null;
                        let t = s && s.findIndex(t => parseInt(t.id) === parseInt(e.notes_reducers.subjectId)),
                            a = t - 1,
                            n = t + 1,
                            c = s && "object" == typeof s[n] ? s[n] : null;
                        C(s && "object" == typeof s[a] ? s[a] : null), S(c)
                    }
                }, [e.notes_reducers]);
                let handleSubjectNavigation = t => {
                        "past_paper" === e.source && I.subject_data && processPastpapesSubjects(t.id), "discussion" === e.source && N.data && processDiscussionCategories(t.subjectId), "past_paper" !== e.source && s.length > 0 && procesNotesSubjects(parseInt(t.classs), t.id)
                    },
                    processDiscussionCategories = e => {
                        let t = N.data && N.data.filter(t => t.subjectId === e);
                        j((0, f.gG)({ ...N,
                            active_category: t.length > 0 ? t[0] : null
                        }))
                    },
                    processPastpapesSubjects = e => {
                        let t = I.subject_data && I.subject_data.filter(t => t.id === e);
                        j((0, g.g3)({ ...I,
                            active_subject: t.length > 0 ? t[0] : null
                        })), j((0, g.Jd)());
                        let s = W.active_category ? W.active_category.name : "",
                            a = w.active_class ? w.active_class.numeral : "";
                        j((0, g.v9)({
                            subject: t.length > 0 ? t[0].name : "",
                            numeral: a,
                            exam_type: s,
                            filter_by_category: null
                        }))
                    },
                    procesNotesSubjects = async (t, s) => {
                        var a;
                        p.x.clearRedux(e.dispatch), p.x.scrollToTheTop(document);
                        let n = t ? t + 1 : 2,
                            c = _.Z.getClasses();
                        e.dispatch(m.g.setClasses(c)), e.dispatch(m.g.setSubjectId(s)), e.dispatch(m.g.setClassId(n)), (null === (a = e.notes_reducers) || void 0 === a ? void 0 : a.tabs.toLowerCase()) === "syllabus" ? p.x.getSyllabus(parseInt(e.notes_reducers.classId) - 1, s, e.dispatch, e.notes_reducers.profileId) : await d.Z.processTopics(s, e.dispatch, n, e.profileId, null, null), v.push("/notes/list_notes/" + (t + 1) + "/" + s)
                    };
                return (0, a.jsx)("div", {
                    className: "past_paper" === e.source ? "".concat(b().topSubjectsMenuWrapper, " ").concat(b().customWidth, " ") : "discussion" === e.source || "public_exam_subject_data" === e.source ? "".concat(b().topSubjectsMenuWrapper) : "".concat(b().topSubjectsMenuWrapper, " ").concat(b().whiteColor),
                    children: (0, a.jsxs)("div", {
                        className: "discussion" !== e.source ? "".concat(b().topSubjectInnerWrapper) : "".concat(b().topSubjectInnerWrapper, " ").concat(b().hideArrow),
                        children: [(0, a.jsxs)("div", {
                            className: b().sliderArrowWrapper,
                            children: [x && (0, a.jsx)(c.Z, {
                                onClick: () => handleSubjectNavigation(x),
                                className: b().leftArrowWrapper,
                                children: (0, a.jsx)(u.Z, {
                                    style: {
                                        fontSize: "18px"
                                    }
                                })
                            }), y && (0, a.jsx)(c.Z, {
                                onClick: () => handleSubjectNavigation(y),
                                className: b().rightArrowWrapper,
                                children: (0, a.jsx)(l.Z, {
                                    style: {
                                        fontSize: "18px"
                                    }
                                })
                            })]
                        }), (0, a.jsx)(r.Z, {
                            children: (0, a.jsx)(h.XE, {
                                position: "notes_page_top",
                                source: e.source
                            })
                        })]
                    })
                })
            })
        },
        281512: function(e) {
            e.exports = {
                gridmenuContainer: "__CommonStyle_gridmenuContainer__XwFDp",
                tableContainer: "__CommonStyle_tableContainer___fQag",
                tableHeadContainer: "__CommonStyle_tableHeadContainer__bD8Ql",
                moreContents: "__CommonStyle_moreContents__UdTeK",
                moreButton: "__CommonStyle_moreButton__DqHdw",
                subjectsMainWrapper: "__CommonStyle_subjectsMainWrapper__2HwrJ",
                subjectCardWrapper: "__CommonStyle_subjectCardWrapper__6vHDI",
                buttonIcon: "__CommonStyle_buttonIcon__652Oh",
                buttonText: "__CommonStyle_buttonText__qZDfc",
                activeSubject: "__CommonStyle_activeSubject__5R1lg",
                classSelectionWrapper: "__CommonStyle_classSelectionWrapper__SiwCy",
                leftHandlerWrapper: "__CommonStyle_leftHandlerWrapper__cI4J3",
                rightHandlerWrapper: "__CommonStyle_rightHandlerWrapper__3IwkQ",
                usersListWrapper: "__CommonStyle_usersListWrapper__tFYrn",
                _button: "__CommonStyle__button__BEK2H",
                actionButtonWrapper: "__CommonStyle_actionButtonWrapper__2Kmcn",
                moreActionButton: "__CommonStyle_moreActionButton__Oj26Z",
                progressiveBarContainer: "__CommonStyle_progressiveBarContainer__WnX8p"
            }
        },
        561490: function(e) {
            e.exports = {
                topSubjectsMenuWrapper: "TopSubjectMenu_topSubjectsMenuWrapper__cGJIO",
                whiteColor: "TopSubjectMenu_whiteColor___ySBf",
                customWidth: "TopSubjectMenu_customWidth__3n9v9",
                topSubjectInnerWrapper: "TopSubjectMenu_topSubjectInnerWrapper__Rlp6D",
                sliderArrowWrapper: "TopSubjectMenu_sliderArrowWrapper__plflS",
                leftArrowWrapper: "TopSubjectMenu_leftArrowWrapper__bwTUU",
                rightArrowWrapper: "TopSubjectMenu_rightArrowWrapper__wUBRg",
                hideArrow: "TopSubjectMenu_hideArrow__YLrbj"
            }
        }
    }
]);