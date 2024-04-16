(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1912], {
        711719: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/backIconSvg.3702da22.svg",
                height: 512,
                width: 512,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        358653: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/nextIconSvg.d16e3426.svg",
                height: 26,
                width: 26,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        618331: function(e, t, s) {
            "use strict";
            s.d(t, {
                Q8: function() {
                    return S
                },
                $I: function() {
                    return R
                },
                zX: function() {
                    return Z.Z
                }
            });
            var n = s(785893),
                o = s(667294),
                i = s(471733),
                r = s(14416),
                a = s(288078),
                c = s(111135),
                l = s.n(c),
                d = s(245111),
                u = s(721596),
                p = s(467599),
                _ = s(190432),
                h = s(270219),
                b = s(348748),
                g = s(192069),
                m = s(81263);
            s(295774);
            var v = s(82278);
            let y = (0, r.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(function(e) {
                let [t, s] = o.useState(!1), activeSubtopicSetter = (n, o, i, r, a) => {
                    n && n.target && ("bookmark" !== n.target.id.trim().toLowerCase() && "bookmarks" !== n.target.id.trim().toLowerCase() && "path" !== n.target.tagName.toLowerCase() ? (e.scrollSubtopicContentsToTheViewPort(), b.Z.processingAccordionsContents(o, i, e.notes_reducers.activeSubtopic, e.dispatch)) : (s(!t), bookmarkController(r, o, a)))
                }, getTopicName = t => {
                    let s;
                    if (t && t.length > 0) {
                        let n = t.find(t => parseInt(t && t.id ? t.id : 0) === parseInt(e.activeTopic));
                        s = n && n.content ? n.content : " "
                    } else s = " ";
                    return s
                }, bookmarkController = (t, s, n) => {
                    var o;
                    let i = e.bookmarkedNotes,
                        r = null !== (o = e.profileId) && void 0 !== o ? o : 0,
                        a = e.dispatch;
                    if (e.dispatch(m.g.getBookmarkedNotes([])), h.x.checkBookedStatus(n, i, s)) h.x.deleteBookedContent(s, i, r, a);
                    else {
                        let n = {};
                        n.subtopic = {
                            name: t,
                            id: s
                        }, n.subject = {
                            name: e.topics ? e.topics.subjectName ? e.topics.subjectName : " " : "",
                            id: e.topics && e.topics.subjectId ? e.topics.subjectId : 0
                        }, n.topic = {
                            name: getTopicName(e.topics && e.topics.topics ? e.topics.topics : null),
                            id: e.activeTopic
                        }, n.classs = {
                            id: e.classId,
                            name: parseInt(e.classId) - 1
                        }, n.profiles_id = r, n.shortcut_types_id = 1, b.Z.processingBookmarkContents(a, n)
                    }
                };
                return e.notes_reducers.subtopics && e.notes_reducers.subtopics.length > 0 ? (0, n.jsx)(o.Fragment, {
                    children: e.notes_reducers.subtopics.map((t, s) => {
                        var o, r, a, c;
                        return (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(n.Fragment, {
                                children: t && t.type && "subtopic" === t.type.toLowerCase() ? (0, n.jsxs)("div", {
                                    className: e.notes_reducers.activeSubtopic && e.notes_reducers.activeSubtopic.status && parseInt(e.notes_reducers.activeSubtopic.token) === parseInt(t.id) ? l().subtopicAccordionActive : l().subtopicAccordionInActive,
                                    id: t.id,
                                    onClick: e => {
                                        var s;
                                        return activeSubtopicSetter(e, t.id, t.children, null !== (s = t.content) && void 0 !== s ? s : "", t.is_bookmarked)
                                    },
                                    children: [(0, n.jsx)("div", {
                                        style: {
                                            marginLeft: 10,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: t.is_current ? (0, n.jsx)(d.Z, {
                                            style: {
                                                color: "#b96133"
                                            }
                                        }) : e.notes_reducers.activeSubtopic && e.notes_reducers.activeSubtopic.status && parseInt(e.notes_reducers.activeSubtopic.token) === parseInt(t.id) ? (0, n.jsx)(d.Z, {
                                            style: {
                                                color: "#b96133"
                                            }
                                        }) : (0, n.jsx)(u.Z, {
                                            style: {
                                                color: "#b96133"
                                            }
                                        })
                                    }), (0, n.jsxs)("div", {
                                        className: e.activeSubtopic && parseInt(e.notes_reducers.activeSubtopic.token) === parseInt(t.id) ? l().contentTextActive : l().contentTextInActive,
                                        style: v.a.getInclusiveFeature(e.notes_reducers.inclusiveContents) ? {
                                            fontFamily: v.a.getInclusiveFeature(e.notes_reducers.inclusiveContents)
                                        } : {},
                                        children: [t.content ? h.x.checkHtmlTag(t.content) : null, (0, n.jsx)(i.zg, {
                                            mediaContent: t.media ? t.media : null,
                                            fromWhere: "subtopicHeader"
                                        })]
                                    }), (0, n.jsx)("div", {
                                        style: {
                                            marginRight: 10,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: (0, n.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                marginRight: 5,
                                                marginTop: "15%"
                                            },
                                            children: e.notes_reducers.loginStatus ? h.x.checkBookedStatus(null !== (o = t.is_bookmarked) && void 0 !== o ? o : null, null !== (r = e.notes_reducers.bookmarkedNotes) && void 0 !== r ? r : null, null !== (a = t.id) && void 0 !== a ? a : 0) ? (0, n.jsx)(_.Z, {
                                                id: "bookmarks",
                                                style: {
                                                    width: 30,
                                                    height: 30
                                                }
                                            }) : (0, n.jsx)(p.Z, {
                                                id: "bookmark",
                                                style: {
                                                    width: 30,
                                                    height: 30
                                                }
                                            }) : null
                                        })
                                    })]
                                }) : null
                            }), e.notes_reducers.activeSubtopic && e.notes_reducers.activeSubtopic.status && parseInt(e.notes_reducers.activeSubtopic.token) === parseInt(t.id) ? (0, n.jsx)("div", {
                                className: l().subtopicChilrenWrapper,
                                children: (0, n.jsx)(g.P, {
                                    activeSubtopic: e.notes_reducers.activeSubtopic,
                                    setShowQuestions: e.setShowQuestions,
                                    index: s,
                                    isComplete: null !== (c = t.is_completed) && void 0 !== c && c,
                                    getTopicName: getTopicName,
                                    subtopic: t,
                                    show_next_button: !0,
                                    show_quiz_button: !0,
                                    scrollSubtopicContentsToTheViewPort: e.scrollSubtopicContentsToTheViewPort
                                })
                            }) : null]
                        }, s)
                    })
                }) : (0, n.jsxs)("div", {
                    className: l().subtopicAccordionInActive,
                    children: [(0, n.jsx)("div", {
                        style: {
                            marginLeft: 10
                        }
                    }), (0, n.jsx)("div", {
                        style: {
                            flex: "auto"
                        }
                    }), (0, n.jsx)("div", {
                        style: {
                            marginRight: 10
                        }
                    })]
                })
            });
            var x = s(699934),
                f = s(415861),
                j = s(241715);
            let SearchBox = e => (0, n.jsx)("div", {
                    style: {
                        width: "80%",
                        height: 50,
                        border: "1px solid lightgrey",
                        borderRadius: 10,
                        marginBottom: "2%"
                    }
                }),
                PictureBox = e => (0, n.jsx)("div", {
                    style: {
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        backgroundColor: "grey"
                    }
                }),
                DisplayNameAndClass = e => (0, n.jsxs)("div", {
                    style: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        minHeight: 50,
                        marginTop: "2%"
                    },
                    children: [(0, n.jsx)("div", {
                        children: "Clement"
                    }), (0, n.jsx)("div", {
                        children: "Simba Secondary School"
                    })]
                }),
                Users = e => {
                    let t = {
                        boxContainer: {
                            width: "28%",
                            height: 230,
                            backgroundColor: "whitesmoke",
                            marginTop: "5%",
                            borderRadius: 10,
                            boxShadow: "1px 2px 10px -5px black",
                            marginRight: "2%"
                        },
                        contentContainer: {
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10%"
                        },
                        onlineContainer: {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginLeft: "-9%"
                        },
                        onlineCircle: {
                            width: 20,
                            height: 20,
                            borderRadius: 10,
                            backgroundColor: "green",
                            justifySelf: "flex-end"
                        },
                        followContainer: {
                            display: "flex",
                            width: "100%",
                            marginTop: 5,
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        followersText: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: "1%"
                        },
                        followIconContainer: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "1%"
                        }
                    };
                    return (0, n.jsxs)("div", {
                        style: t.boxContainer,
                        children: [(0, n.jsxs)("div", {
                            style: t.contentContainer,
                            children: [(0, n.jsx)(PictureBox, {}), (0, n.jsx)("div", {
                                style: t.onlineContainer,
                                children: (0, n.jsx)("div", {
                                    style: t.onlineCircle
                                })
                            })]
                        }), (0, n.jsx)(DisplayNameAndClass, {}), (0, n.jsxs)("div", {
                            style: t.followContainer,
                            children: [(0, n.jsx)("div", {
                                style: t.followersText,
                                children: "2.45k followers"
                            }), (0, n.jsx)("div", {
                                style: t.followIconContainer,
                                children: (0, n.jsx)(j.Z, {})
                            })]
                        })]
                    })
                },
                C = (0, r.$j)(function(e) {
                    return {
                        state: e
                    }
                })(function(e) {
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(f.Z, {
                            variant: "h4",
                            sx: {
                                fontWeight: "bold",
                                marginBottom: 2
                            },
                            children: "Users"
                        }), (0, n.jsx)(SearchBox, {}), (0, n.jsx)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                overflowY: "auto",
                                height: 500,
                                paddingBottom: "2%"
                            },
                            children: [...Array(9)].map((e, t) => (0, n.jsx)(Users, {}, "".concat(t) + "activeUser"))
                        })]
                    })
                });

            function ContentIntro(e) {
                return (0, n.jsx)("div", {
                    children: (() => {
                        if (!e.subtopics || !(e.subtopics.length > 0)) return " "; {
                            var t;
                            let s = e.subtopics.filter(e => e && e.type ? "paragraph" === e.type.toLowerCase() : null);
                            return s && s.length > 0 ? (0, n.jsx)("div", {
                                className: l().notesIntroductionWrapper,
                                style: {
                                    fontFamily: null !== (t = v.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== t ? t : ""
                                },
                                children: (0, n.jsx)(i.Md, {
                                    contents: s,
                                    inclusiveContents: e.inclusiveContents
                                })
                            }) : " "
                        }
                    })()
                })
            }
            let S = (0, r.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(function(e) {
                return "study notes" === e.notes_reducers.tabs.trim().toLowerCase() ? (0, n.jsx)("div", {
                    children: e.notes_reducers.subtopics && e.notes_reducers.subtopics.length > 0 ? (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(ContentIntro, {
                            subtopics: e.notes_reducers.subtopics,
                            inclusiveContents: e.notes_reducers.inclusiveContents
                        }), (0, n.jsx)(y, {
                            scrollSubtopicContentsToTheViewPort: e.scrollSubtopicContentsToTheViewPort
                        })]
                    }) : (0, n.jsx)("div", {
                        children: [...Array(9)].map(e => (0, n.jsxs)("div", {
                            style: {
                                marginBottom: "15px"
                            },
                            children: [(0, n.jsx)(a.Z, {
                                width: 300,
                                height: 30
                            }), (0, n.jsx)(a.Z, {
                                width: "100%",
                                variant: "rectangular",
                                height: 200
                            })]
                        }, e))
                    })
                }) : "syllabus" === e.notes_reducers.tabs.toLowerCase().trim() ? (0, n.jsx)(x.Z, {}) : "users" === e.notes_reducers.tabs.toLowerCase().trim() ? (0, n.jsx)(C, {}) : () => {}
            });
            var I = s(425675),
                T = s.n(I),
                k = s(625662),
                w = s(360772),
                N = s.n(w),
                W = s(711719),
                M = s(358653),
                A = s(497545),
                L = s(341911),
                B = s(811163),
                R = (0, r.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(e => {
                    var t;
                    (0, r.I0)();
                    let s = (0, B.useRouter)(),
                        [i, a] = o.useState({
                            name: "",
                            status: null
                        }),
                        {
                            handleActiveCategory: c
                        } = (0, A.Z)(),
                        {
                            discussion_categories: l
                        } = (0, r.v9)(e => e.discussions_data),
                        d = null === (t = e.notes_reducers) || void 0 === t ? void 0 : t.moreContents,
                        [u, p] = o.useState(null),
                        [_, g] = o.useState(null);
                    o.useEffect(() => {
                        if ("notes" === e.source) {
                            d = d && d.length > 0 ? d.map(e => ({ ...e,
                                id: e.subjectId
                            })) : null;
                            let t = d && d.findIndex(t => parseInt(t.id) === parseInt(e.notes_reducers.subjectId)),
                                s = t - 1,
                                n = t + 1,
                                o = d && "object" == typeof d[n] ? d[n] : null;
                            g(d && "object" == typeof d[s] ? d[s] : null), p(o)
                        }
                    }, [e.notes_reducers]), o.useEffect(() => {
                        if ("discussion" === e.source && l.data) {
                            let e = l.data && l.data.findIndex(e => e.subjectId === l.active_category.subjectId),
                                t = e - 1,
                                s = e + 1,
                                n = l.data && "object" == typeof l.data[s] ? l.data[s] : null,
                                o = l.data && "object" == typeof l.data[t] ? l.data[t] : null;
                            p(n), g(o)
                        }
                    }, [l.active_category]);
                    let handleMouseEnter = e => {
                            a({
                                name: e.currentTarget.id,
                                status: !0
                            })
                        },
                        handleSubjects = async t => {
                            var n;
                            let o = parseInt(t.classs) + 1,
                                i = t.id;
                            h.x.clearRedux(e.dispatch), h.x.scrollToTheTop(document);
                            let r = L.Z.getClasses();
                            e.dispatch(m.g.setClasses(r)), e.dispatch(m.g.setSubjectId(i)), e.dispatch(m.g.setClassId(o)), (null === (n = e.notes_reducers) || void 0 === n ? void 0 : n.tabs.toLowerCase()) === "syllabus" ? (h.x.getSyllabus(parseInt(e.notes_reducers.classId) - 1, i, e.dispatch, e.notes_reducers.profileId), s.push("/notes/list_syllabus/" + o + "/" + i)) : (await b.Z.processTopics(i, e.dispatch, o, e.profileId, null, null), s.push("/notes/list_notes/" + o + "/" + i))
                        },
                        handleNextDiscussionCategory = e => {
                            c(e, !0)
                        };
                    return (0, n.jsxs)("div", {
                        className: N().notesNavigationArrowWrapper,
                        onMouseLeave: () => {
                            a({ ...i,
                                status: null
                            })
                        },
                        children: [_ && (0, n.jsxs)(k.Z, {
                            id: "leftArraw",
                            onMouseEnter: e => handleMouseEnter(e),
                            className: i.status && "leftArraw" === i.name ? "".concat(N().notesPageLeftArrow, " ").concat(N().activeWrapper) : "".concat(N().notesPageLeftArrow),
                            onClick: "notes" === e.source ? () => handleSubjects(_) : () => handleNextDiscussionCategory(_),
                            children: [(0, n.jsx)("div", {
                                className: N().buttonLeftWrapper,
                                children: (0, n.jsx)(T(), {
                                    src: W.Z,
                                    alt: "Back icon",
                                    width: 50,
                                    height: 100
                                })
                            }), (0, n.jsx)("div", {
                                className: N().contentLeftWrapper,
                                children: (0, n.jsx)(f.Z, {
                                    variant: "h6",
                                    children: _.content
                                })
                            })]
                        }), u && (0, n.jsxs)(k.Z, {
                            id: "rightArrow",
                            onMouseEnter: e => handleMouseEnter(e),
                            className: i.status && "rightArrow" === i.name ? "".concat(N().notesPageRightArrow, " ").concat(N().activeWrapper) : "".concat(N().notesPageRightArrow),
                            onClick: "notes" === e.source ? () => handleSubjects(u) : () => handleNextDiscussionCategory(u),
                            children: [(0, n.jsx)("div", {
                                className: N().contentRightWrapper,
                                children: (0, n.jsx)(f.Z, {
                                    variant: "h6",
                                    children: u.content
                                })
                            }), (0, n.jsx)("div", {
                                className: N().buttonRightWrapper,
                                children: (0, n.jsx)(T(), {
                                    src: M.Z,
                                    alt: "Next icon",
                                    width: 50,
                                    height: 100
                                })
                            })]
                        })]
                    })
                }),
                Z = s(659326)
        },
        699934: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = s(785893),
                o = s(667294),
                i = s(146574),
                r = s(940390),
                a = s.n(r),
                c = s(270219),
                l = s(490094),
                d = s(741664),
                u = s.n(d),
                Subjects = e => (0, n.jsxs)("div", {
                    className: a().subjectContainer,
                    children: [(0, n.jsxs)("h2", {
                        style: {
                            color: "#2ba6cb",
                            fontSize: 32,
                            marginTop: 10
                        },
                        children: [e.data && e.data.length > 0 ? e.data[0].content : null, "  ", "Form", "  ", 5 >= parseInt(e.classs) ? Math.abs(parseInt(e.classs) - 1) : "", "  ", "Syllabus"]
                    }), (0, n.jsx)("div", {
                        children: e.data && e.data.length > 0 ? e.data[0].children.map(function(t, s) {
                            return (0, n.jsxs)("div", {
                                className: a().minContainer,
                                children: [(0, n.jsx)(u(), {
                                    href: "/notes/list_notes/".concat(e.classs, "/").concat(e.data[0].id, "/").concat(t.id),
                                    children: t.content
                                }), (0, n.jsx)("ol", {
                                    children: t.children && t.children.map((e, t) => (0, n.jsxs)("li", {
                                        children: [" ", c.x.checkHtmlTag(e.content), e.children && e.children.map((e, t) => (0, n.jsx)("ul", {
                                            children: (0, n.jsx)("li", {
                                                className: a().mincontainer,
                                                children: c.x.checkHtmlTag(e.content)
                                            }, e)
                                        }, t + "".concat(e.content)))]
                                    }, t + "".concat(e.content)))
                                }, t)]
                            }, s + 1)
                        }) : [void 0, void 0, void 0, void 0, void 0].map((e, t) => (0, n.jsxs)("div", {
                            children: [(0, n.jsx)(l.Kq, {
                                index: "".concat(t) + "inner"
                            }), (0, n.jsx)(l.Kq, {
                                index: "".concat(t) + "inner",
                                left: 50,
                                width: "60%",
                                height: 30
                            }), (0, n.jsx)(l.Kq, {
                                index: "".concat(t) + "inner",
                                left: 100,
                                width: "100%",
                                height: 100
                            })]
                        }, t))
                    })]
                }),
                p = s(228736),
                _ = s(14416),
                h = s(678621);
            s(836783), (0, _.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(e => {
                let {
                    y: t
                } = (0, h.Z)(), [s, i] = o.useState(!1);
                return o.useEffect(() => {
                    t > 230 ? i(!0) : i(!1)
                }, [t]), (0, n.jsx)("div", {
                    className: a().contentsOuterContainer,
                    children: (0, n.jsx)(p.f, {
                        topics: e.data,
                        processTopicToGetSubtopic: () => {},
                        activeTopic: null,
                        tabs: "study notes",
                        classs: e.classs,
                        type: "syllabus",
                        fixMenu: s,
                        subjectId: e.notes_reducers.subjectId,
                        self: e.dispatch,
                        shareAndInviteContainer: e.notes_reducers.shareAndInviteContainer
                    })
                })
            });
            var b = s(111135),
                g = s.n(b),
                m = s(105934),
                v = (0, _.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(e => (0, n.jsxs)(i.Z, {
                    children: [(0, n.jsx)(m.f, {
                        id: 11,
                        keyName: "syllabus05",
                        feature: "syllabus",
                        action: "click"
                    }), (0, n.jsx)("div", {
                        className: g().notesFrameWrapper,
                        children: (0, n.jsx)("div", {
                            className: g().notesRightFrameWrapper,
                            children: (0, n.jsx)(i.Z, {
                                children: (0, n.jsx)(Subjects, {
                                    data: e.notes_reducers.syllabusContents,
                                    classs: e.notes_reducers.classId
                                })
                            })
                        })
                    })]
                }));
            s(348748), s(924631);
            var y = s(811163),
                x = s(81263),
                f = (0, _.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(e => {
                    let [t, s] = o.useState(!1), r = (0, y.useRouter)(), changeSubjectId = () => {
                        e.dispatch(x.g.setSubjectId(null)), e.dispatch(x.g.setMoreSubjects(null)), e.dispatch(x.g.setSyllabusContents(null))
                    };
                    return o.useEffect(() => ((() => {
                        if (r.query.id) {
                            var n;
                            let t = null !== (n = e.notes_reducers.subjectId) && void 0 !== n ? n : r.query.id[1];
                            c.x.getSyllabus(parseInt(e.notes_reducers.classId) - 1, t, e.dispatch, e.notes_reducers.profileId)
                        } else s(!t);
                        r.events.on("routeChangeStart", changeSubjectId)
                    })(), () => {
                        r.events.off("routeChangeStart", changeSubjectId)
                    }), [t]), (0, n.jsx)(i.Z, {
                        style: {
                            marginTop: "0%",
                            marginBottom: "0%"
                        },
                        children: (0, n.jsx)(v, {
                            subjects: e.notes_reducers.moreContents && e.notes_reducers.moreContents.length > 0 ? e.notes_reducers.moreContents : null,
                            classs: e.notes_reducers.classId ? parseInt(e.classId) : null
                        })
                    })
                })
        },
        228736: function(e, t, s) {
            "use strict";
            s.d(t, {
                f: function() {
                    return h
                }
            });
            var n = s(785893),
                o = s(667294),
                i = s(940390),
                r = s.n(i),
                a = s(602831),
                c = s.n(a),
                l = s(270219),
                d = s(81263),
                u = s(14416),
                p = s(82278),
                _ = s(811163);
            let h = (0, u.$j)(function(e) {
                return {
                    notes_reducers: e.notes_reducers
                }
            })(function(e) {
                var t;
                let [s, i] = o.useState(-1);
                (0, _.useRouter)();
                let fetchingSyllabusContents = (t, s, n) => {
                        e.dispatch(d.g.setSpecificClasese([]));
                        let o = parseInt(e.classId) - 1;
                        l.x.setActiveSubjectId(t, s, o, e.profileId), l.x.filterSpecificSubjectClasses(null, e.classes, n, e.dispatch)
                    },
                    a = p.a.getInclusiveFeature(e.inclusiveContents, "theme");
                return (0, n.jsxs)("div", {
                    className: e.fixMenu ? "".concat(c().topicMenuWrapper, " ").concat(c().fixMenu) : "".concat(c().topicMenuWrapper),
                    children: [(0, n.jsxs)("div", {
                        className: "study notes" === e.type.toLowerCase() ? c().subjectTopicInfo : r().subjectTopicInfo,
                        style: {
                            fontFamily: null !== (t = p.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== t ? t : "",
                            color: a ? "white" : "black"
                        },
                        children: [e.topics && e.topics.subjectName ? e.topics.subjectName : " ", " Form ", " ", 5 >= parseInt(e.notes_reducers.classId) ? 1 >= parseInt(e.notes_reducers.classId) ? Math.abs(parseInt(e.notes_reducers.classId)) : Math.abs(parseInt(e.notes_reducers.classId) - 1) : null, "  ", "syllabus" === e.type.toLowerCase() ? "syllabus" : null]
                    }), (0, n.jsx)("div", {
                        className: c().innerTopicMenuWrapper,
                        children: e.topics && e.topics.topics && e.topics.topics.length > 0 ? e.topics.topics.map((t, s) => (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "top",
                                    cursor: "pointer"
                                },
                                children: [parseInt(e.activeTopic) === parseInt(t.id) ? (0, n.jsx)("div", {
                                    className: c().triangLeft
                                }) : (0, n.jsx)("div", {
                                    className: c().triangTransparent
                                }), (0, n.jsx)("div", {
                                    className: c().topicContent,
                                    children: (0, n.jsx)("div", {
                                        className: c().textContainer,
                                        children: (0, n.jsx)("button", {
                                            onClick: () => e.processTopicToGetSubtopic(t.id),
                                            "aria-label": "You have clicked topic for ".concat(null == t ? void 0 : t.content),
                                            style: {
                                                color: parseInt(e.activeTopic) === parseInt(t.id) ? "#b96133" : "#2ba6cb",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                fontSize: "1.1em",
                                                cursor: "pointer",
                                                textAlign: "start"
                                            },
                                            children: t.content
                                        })
                                    })
                                })]
                            })
                        }, s + "menu")) : e.topics && e.topics.length > 0 && "syllabus" === e.type.toLowerCase() ? e.topics.map((t, s) => (0, n.jsx)("div", {
                            children: (0, n.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "top",
                                    cursor: "pointer"
                                },
                                children: [e.subjectId && parseInt(e.subjectId) === parseInt(t.subjectId) ? (0, n.jsx)("div", {
                                    className: r().triangLeft
                                }) : (0, n.jsx)("div", {
                                    className: r().triangTransparent
                                }), (0, n.jsx)("div", {
                                    className: c().topicContent,
                                    children: (0, n.jsx)("div", {
                                        className: c().textContainer,
                                        children: (0, n.jsx)("button", {
                                            onClick: () => fetchingSyllabusContents(t.subjectId, e.self, t.subject),
                                            style: {
                                                color: e.subjectId && parseInt(e.subjectId) === parseInt(t.subjectId) ? "#b96133" : "#2ba6cb",
                                                border: "none",
                                                backgroundColor: "transparent",
                                                fontSize: "1.1em",
                                                cursor: "pointer",
                                                textAlign: "start"
                                            },
                                            children: t.subject
                                        })
                                    })
                                })]
                            })
                        }, s + "syllabus")) : null
                    })]
                })
            })
        },
        105934: function(e, t, s) {
            "use strict";
            s.d(t, {
                f: function() {
                    return a
                }
            });
            var n = s(341911),
                o = s(476216),
                i = s(885518),
                r = s(667294);
            let a = r.memo(e => {
                let [t, s] = r.useState("unknown"), a = e.pageType && "notes" === e.pageType.toLowerCase() ? {
                    className: e.className,
                    subjectId: e.subjectId,
                    topicId: e.topicId,
                    subtopicId: e.subtopicId,
                    conceptId: e.conceptId
                } : null;
                return r.useEffect(() => {
                    let caller = async () => {
                        let e;
                        try {
                            e = await (0, o.zk)()
                        } catch (t) {
                            e = null
                        }
                        s(e)
                    };
                    caller()
                }, [t]), r.useEffect(() => {
                    if (e.page) {
                        let s = {
                            data: {
                                page: {
                                    id: e.id,
                                    key: e.keyName,
                                    name: e.page,
                                    action: e.action,
                                    startTime: new Date,
                                    endTime: e.end ? new Date().getTime() : null
                                },
                                syllabus: a,
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
                                    os: i.BF,
                                    buildVersion: i.TI,
                                    systemVersion: i.MM,
                                    model: i.KC,
                                    brand: i.KC,
                                    manufacturer: i.KC,
                                    deviceId: "unknown",
                                    users_mid: "guest",
                                    device_type_id: 2,
                                    userAgent: i.z$,
                                    ip_address: t
                                }
                            }
                        };
                        n.Z.createJourney(s)
                    }
                }, [e.page]), r.useEffect(() => {
                    if (e.feature) {
                        let t = {
                            id: e.id,
                            key: e.keyName,
                            name: e.feature,
                            action: e.action,
                            startTime: new Date().getTime(),
                            endTime: e.end ? new Date().getTime() : null
                        };
                        n.Z.addJourney(t)
                    }
                }, [e.feature]), () => {}
            });
            a.displayName = "Journey", a.defaultProps = {
                pageType: null,
                page: null,
                feature: null,
                keyName: null,
                action: null
            }
        },
        490094: function(e, t, s) {
            "use strict";
            s.d(t, {
                eD: function() {
                    return SubjectDetailsContents
                },
                Kq: function() {
                    return SyllabusContents
                }
            });
            var n = s(785893),
                o = s(83710),
                i = s.n(o);
            let SubjectDetailsContents = () => (0, n.jsx)("div", {
                    className: i().subjectDetailsContents
                }),
                SyllabusContents = e => (0, n.jsx)("div", {
                    style: {
                        marginLeft: e.left
                    },
                    children: (0, n.jsx)("div", {
                        className: i().syllabusContents,
                        style: {
                            width: e.width,
                            height: e.height
                        }
                    })
                }, e.index);
            SyllabusContents.defaultProps = {
                left: 0,
                index: 0,
                width: "80%",
                height: 40
            }
        },
        360772: function(e) {
            e.exports = {
                notesNavigationArrowWrapper: "NotesNavigationButton_notesNavigationArrowWrapper__srH4x",
                notesPageLeftArrow: "NotesNavigationButton_notesPageLeftArrow__vrS0x",
                buttonLeftWrapper: "NotesNavigationButton_buttonLeftWrapper__d_0mS",
                contentLeftWrapper: "NotesNavigationButton_contentLeftWrapper__GnA7e",
                activeWrapper: "NotesNavigationButton_activeWrapper__ARBIw",
                notesPageRightArrow: "NotesNavigationButton_notesPageRightArrow__LEnOL",
                buttonRightWrapper: "NotesNavigationButton_buttonRightWrapper__iJdPQ",
                contentRightWrapper: "NotesNavigationButton_contentRightWrapper__2HDWb"
            }
        },
        940390: function(e) {
            e.exports = {
                contentsOuterContainer: "syllabus_contentsOuterContainer__8nPY_",
                contentsContainer: "syllabus_contentsContainer__q7id2",
                subjectTopicInfo: "syllabus_subjectTopicInfo__nFltS",
                triangLeft: "syllabus_triangLeft__W6OZN",
                triangTransparent: "syllabus_triangTransparent__hBxBo",
                subjectContainer: "syllabus_subjectContainer__2xNH7",
                mincontainer: "syllabus_mincontainer__zF2S_",
                minContainer: "syllabus_minContainer__dm8C_",
                bigContainer: "syllabus_bigContainer__p5qGb"
            }
        },
        602831: function(e) {
            e.exports = {
                topicMenuContainer: "TopicsStyles_topicMenuContainer__vJbQE",
                topicContent: "TopicsStyles_topicContent__GHPXc",
                textContainer: "TopicsStyles_textContainer__N9auu",
                iconContainer: "TopicsStyles_iconContainer__IgcbZ",
                socialMediaOuterContainer: "TopicsStyles_socialMediaOuterContainer__k97Xb",
                socialMediaContainer: "TopicsStyles_socialMediaContainer__7LKAt",
                socialMediaContainerInactive: "TopicsStyles_socialMediaContainerInactive__mlrdU",
                triangLeft: "TopicsStyles_triangLeft__anjDF",
                triangTransparent: "TopicsStyles_triangTransparent__INIHw",
                subjectTopicInfo: "TopicsStyles_subjectTopicInfo__MC0f_",
                topicMenuWrapper: "TopicsStyles_topicMenuWrapper__Uptuo",
                innerTopicMenuWrapper: "TopicsStyles_innerTopicMenuWrapper__oZXjX",
                fixMenu: "TopicsStyles_fixMenu__Iv_JD",
                notesDetailsContainer: "TopicsStyles_notesDetailsContainer__HvdH9",
                notesTopSubjectCard: "TopicsStyles_notesTopSubjectCard___SY8L",
                notesDetailsImage: "TopicsStyles_notesDetailsImage__VEOWC",
                progressContainerTopicDetails: "TopicsStyles_progressContainerTopicDetails__Ss_2F",
                ribbonContainer: "TopicsStyles_ribbonContainer__2n6lh",
                ribbonContentsContainer: "TopicsStyles_ribbonContentsContainer__BTbTB",
                ribbonIconWrapper: "TopicsStyles_ribbonIconWrapper__hZ6sI",
                textDivStyle: "TopicsStyles_textDivStyle__VG1xg",
                ribbonContentsContainerActive: "TopicsStyles_ribbonContentsContainerActive__MUdvg",
                topicsolumn: "TopicsStyles_topicsolumn__TBavN",
                topicMenuHeaderContainer: "TopicsStyles_topicMenuHeaderContainer__NrP6f",
                rowHeaderContainer: "TopicsStyles_rowHeaderContainer__k837A",
                topicHeaderSubjectDetails: "TopicsStyles_topicHeaderSubjectDetails__QwalV",
                topicDropdownIconContainer: "TopicsStyles_topicDropdownIconContainer__Vz5MB",
                dropdownInactive: "TopicsStyles_dropdownInactive__JY_wZ",
                dropdownActive: "TopicsStyles_dropdownActive__sUWGz",
                topicContents: "TopicsStyles_topicContents__PKz7l",
                progressiveContainer: "TopicsStyles_progressiveContainer__ofGSH",
                completetionText: "TopicsStyles_completetionText__65Vfv",
                topicMenu: "TopicsStyles_topicMenu__zJ0B8",
                topicMenuContents: "TopicsStyles_topicMenuContents__AC4bv",
                progressiveBarContainer: "TopicsStyles_progressiveBarContainer__RpRJn",
                shareContainerActive: "TopicsStyles_shareContainerActive__HxsKg",
                shareContainerInactive: "TopicsStyles_shareContainerInactive__f3UMH",
                mediaContents: "TopicsStyles_mediaContents__Q6N1F",
                mediaContentsHeader: "TopicsStyles_mediaContentsHeader__2W5nK",
                whatsapp: "TopicsStyles_whatsapp__F13Ma",
                whatsapRotate: "TopicsStyles_whatsapRotate__t4lxj",
                facebook: "TopicsStyles_facebook__F4YiK",
                facebookRotate: "TopicsStyles_facebookRotate__pkc_b",
                telegram: "TopicsStyles_telegram__JXtAn",
                telegramRotate: "TopicsStyles_telegramRotate__nkJU4",
                twitter: "TopicsStyles_twitter__kCn8w",
                twitterRotate: "TopicsStyles_twitterRotate__3k6Io",
                topicNameWrapper: "TopicsStyles_topicNameWrapper__cOeI0",
                addToStudyPlanButton: "TopicsStyles_addToStudyPlanButton__74qux",
                addToStudyPlanModal: "TopicsStyles_addToStudyPlanModal__YXFlo",
                addToStudyPlanWrapper: "TopicsStyles_addToStudyPlanWrapper__BXc7_",
                paragraphWrapper: "TopicsStyles_paragraphWrapper__5Soak",
                bottomWrapper: "TopicsStyles_bottomWrapper__Y_Www"
            }
        },
        83710: function(e) {
            e.exports = {
                skeletonWrapper: "Skeleton_skeletonWrapper__y04Oc",
                light: "Skeleton_light__th8LN",
                dark: "Skeleton_dark__HR9sH",
                barGraphSkeleton: "Skeleton_barGraphSkeleton__GIWQM",
                shimmerWrapper: "Skeleton_shimmerWrapper__q45CU",
                loading: "Skeleton_loading__zZ2lg",
                shimmer: "Skeleton_shimmer__RchXh",
                notesContainerSkeleton: "Skeleton_notesContainerSkeleton__eX5s1",
                notesShimer: "Skeleton_notesShimer__CxJvG",
                shine: "Skeleton_shine__KvG6O",
                subjectDetailsContents: "Skeleton_subjectDetailsContents__kcJpM",
                syllabusContents: "Skeleton_syllabusContents__L6fIF",
                imageContainerSkeleton: "Skeleton_imageContainerSkeleton__3fHsm",
                imageSkeletonLoader: "Skeleton_imageSkeletonLoader__Mqw_g"
            }
        }
    }
]);