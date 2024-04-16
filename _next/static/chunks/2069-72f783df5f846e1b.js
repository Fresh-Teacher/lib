(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2069], {
        331915: function(e, t, n) {
            "use strict";
            var s = n(334221);
            n(823552);
            var o = n(365701),
                i = n(14416),
                r = n(624039);
            t.Z = () => {
                let {
                    user: e
                } = (0, r.Z)(), t = (0, i.I0)(), saveInteractiveModalQuee = async e => {
                    e.user_id = "ANONYMOUS", await o.Z.saveInteractiveModalQueeData(e), await findInteractiveModal()
                }, findInteractiveModal = async () => {
                    let e = await o.Z.findInteractiveModalData("ANONYMOUS");
                    if (!e) {
                        t((0, s.WD)(null));
                        return
                    }
                    t((0, s.WD)(e[0]))
                };
                return {
                    saveInteractiveModalQuee,
                    findInteractiveModal
                }
            }
        },
        192069: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return x
                }
            });
            var s = n(785893),
                o = n(111135),
                i = n.n(o),
                r = n(625662),
                a = n(471733),
                l = n(309944),
                c = n(270219),
                u = n(14416),
                d = n(92063);
            n(81263);
            var p = n(667294),
                _ = n(348748),
                y = n(82278),
                h = n(613379),
                m = n(519114),
                C = n(823552);
            let CompleteSubtopicComponent = class CompleteSubtopicComponent extends p.Component {
                render() {
                    return (0, s.jsx)("div", {
                        className: i().completeSubtopicContainer,
                        children: (0, s.jsx)("div", {
                            className: i().completeSubtopicButton,
                            children: (0, s.jsxs)(r.Z, {
                                variant: "primary",
                                className: this.props.notes_reducers.isComplete ? i().completeButtonActive : this.props.notes_reducers.completedSubtopics && this.props.notes_reducers.completedSubtopics.length > 0 && this.props.notes_reducers.completedSubtopics.includes(this.props.notes_reducers.subtopicId) ? i().completeButtonActive : i().completeButton,
                                style: y.a.getInclusiveFeature(this.props.notes_reducers.inclusiveContents) ? {
                                    fontFamily: y.a.getInclusiveFeature(this.props.notes_reducers.inclusiveContents)
                                } : {},
                                onClick: () => this.props.notes_reducers.isComplete || this.props.notes_reducers.completedSubtopics.includes(this.props.notes_reducers.subtopicId) ? () => {} : this.completeController(),
                                "aria-label": "You have clicked next button",
                                children: ["Next Concept", (0, s.jsx)(h.Z, {})]
                            })
                        })
                    })
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.returnContents = (e, t, n) => e ? e[t] ? e[t][n] ? e[t][n] : e[t] : void 0 !== e[t] || null !== e[t] ? "object" == typeof e[t] ? " " : 0 : null : null, this.saveConceptComplete = async e => {
                        for (let t in e) {
                            let n = t - 1,
                                s = parseInt(t) + 1,
                                o = e[t].id,
                                i = n < 0 ? 0 : e[n].id,
                                r = s > parseInt(e.length - 1) ? o : e[s].id;
                            if (this.props.study_plan_data.notes_study_plan) {
                                let e = {
                                    subtopic_id: parseInt(this.props.notes_reducers.activeSubtopic.token),
                                    previous_concept_id: parseInt(i),
                                    concept_id: parseInt(o),
                                    study_plan_id: this.props.study_plan_data.notes_study_plan.id,
                                    subtopic_complete: parseInt(o) === parseInt(r)
                                };
                                await m.Z.saveCompletedConceptInStudyPlan(e)
                            }
                        }
                    }, this.checkQuizAttemptInConcept = async function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mull,
                            s = [];
                        if (t.props.user.isLoggedIn)
                            for (let o of e) await d.g.findQuizAttemptsByLevelId({
                                user_id: t.props.user.data.id,
                                level_id: parseInt(o.id)
                            }) || s.push({
                                data: n || null,
                                concept: o
                            });
                        if (s.length > 0) {
                            let e = {
                                subject_id: t.props.notes_reducers.subjectId,
                                topic_id: t.props.notes_reducers.activeSubtopic.token,
                                class_id: t.props.notes_reducers.classId,
                                subtopic_id: t.props.notes_reducers.activeTopic
                            };
                            t.props.saveInteractiveModalQuee({
                                type: C.Q.CONCEPT_NOT_ATTEMPT_QUIZ,
                                body: {
                                    title: t.props.user.isLoggedIn ? "Hey ".concat(t.props.user.data.first_name, " !") : "Hey!",
                                    data: e,
                                    content: s
                                },
                                occurance: C.j.RECURRING,
                                never: !1
                            })
                        }
                    }, this.completeController = async () => {
                        let e = {
                                subject_id: this.props.notes_reducers.subjectId,
                                class_id: this.props.notes_reducers.classId,
                                topic_id: this.props.notes_reducers.activeTopic
                            },
                            t = this.props.notes_reducers.activeSubtopic.subtopicChildrens.filter(e => "Concept" === e.type);
                        this.checkQuizAttemptInConcept(t, e), this.saveConceptComplete(t), c.x.progressBarController(null, this.props.dispatch, this.props.notes_reducers.subtopicId, this.props.notes_reducers.completedSubtopics);
                        let n = this.props.dispatch,
                            s = this.props.object,
                            o = {};
                        o.subtopic = {
                            name: this.returnContents(s, "sub_topic", "name"),
                            id: this.returnContents(s, "sub_topic", "id")
                        }, o.subject = {
                            name: this.returnContents(s, "subject", "name"),
                            id: this.returnContents(s, "subject", "id")
                        }, o.classs = {
                            name: this.returnContents(s, "classs", "name"),
                            id: this.returnContents(s, "classs", "id")
                        }, o.topic = {
                            name: this.props.getTopicName(this.props.topics),
                            id: this.returnContents(s, "topic_id", null)
                        }, o.profiles_id = this.returnContents(s, "profiles_id", null), o.shortcut_types_id = 3, _.Z.processingBookmarkContents(n, o, "complete"), this.props.scrollSubtopicContentsToTheViewPort(), c.x.nextSubtopic(this.props.notes_reducers.subtopics, this.props.notes_reducers.activeSubtopic, this.props.notes_reducers.subtopicLength, this.props.index, this.props.dispatch), this.forceUpdate()
                    }
                }
            };
            let v = (0, u.$j)(function(e) {
                return {
                    study_plan_data: e.study_plan_data,
                    notes_reducers: e.notes_reducers
                }
            })(CompleteSubtopicComponent);
            var b = n(811163),
                g = n(624039),
                S = n(331915);
            let getSubtopicName = (e, t) => {
                let n = t && t.token ? t.token : 0,
                    s = " ";
                if (e && e.length) {
                    let t = e.find(e => {
                        if (e && parseInt(e.id) === n) return e
                    });
                    s = t && t.content ? t.content : " "
                }
                return s
            };

            function ObjectCreator(e, t, n, s, o, i) {
                let r = t && t.classs ? t.classs : 2;
                this.subject = {
                    name: t && t.subjectName ? t.subjectName : " ",
                    id: i
                }, this.sub_topic = {
                    name: getSubtopicName(e, n),
                    id: n && n.token ? n.token : 0
                }, this.classs = {
                    name: parseInt(r) - 1,
                    id: r
                }, this.topic_id = null != o ? o : 0, this.profiles_id = null != s ? s : 0
            }
            let ConceptText = e => {
                    var t;
                    let n = null !== (t = y.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== t ? t : "",
                        o = y.a.getSpecificInclusiveFeature(e.inclusiveContents, "theme");
                    return (0, s.jsx)("div", {
                        className: e.concept && e.concept.type && "paragraph" !== e.concept.type.toLowerCase() && "concept" === e.concept.type.toLowerCase() ? i().conceptContent : i().conceptParagraph,
                        style: {
                            fontFamily: n,
                            color: o ? "white" : e.concept && e.concept.type ? "paragraph" === e.concept.type.toLowerCase() ? "black" : "concept" === e.concept.type.toLowerCase() ? "grey" : "black" : "black"
                        },
                        children: e.concept && e.concept.type ? "paragraph" === e.concept.type.toLowerCase() ? (0, s.jsxs)("div", {
                            style: {
                                fontFamily: n
                            },
                            children: [c.x.checkHtmlTag(e.concept.content ? e.concept.content : null), (0, s.jsx)("div", {
                                children: (0, s.jsx)(a.zg, {
                                    mediaContent: e.concept.childrens
                                })
                            })]
                        }) : "concept" === e.concept.type.toLowerCase() ? c.x.checkHtmlTag(e.concept.content ? e.concept.content : null) : null : null
                    })
                },
                DisplayNameComponent = e => {
                    var t;
                    let n = null !== (t = y.a.getInclusiveFeature(e.inclusiveContents)) && void 0 !== t ? t : "";
                    return (0, s.jsx)(s.Fragment, {
                        children: e.displayName ? (0, s.jsx)("div", {
                            className: i().displayNameWrapper,
                            style: y.a.getInclusiveFeature(e.inclusiveContents) ? {
                                fontFamily: n
                            } : {},
                            children: e.displayName ? c.x.checkHtmlTag(e.displayName) : null
                        }) : null
                    })
                },
                TextYourSelfButton = e => {
                    y.a.getInclusiveFeature(e.inclusiveContents);
                    let {
                        user: t,
                        saveServiceRequireLogin: n,
                        showLoginForm: o
                    } = (0, g.Z)(), a = (0, b.useRouter)(), testYourSelfController = async () => {
                        var s, i, r, l;
                        let c = e.object;
                        ObjectCreator.prototype.classs_id = null !== (s = c.classs.id) && void 0 !== s ? s : 0, ObjectCreator.prototype.subject_id = null !== (i = c.subject.id) && void 0 !== i ? i : 0, ObjectCreator.prototype.level_id = e.activeSubtopic && e.activeSubtopic.token ? e.activeSubtopic.token : 0, ObjectCreator.prototype.indicator = "Mixed", ObjectCreator.prototype.source = "web", ObjectCreator.prototype.board_steps = null;
                        let u = e.item && e.item.id ? e.item.id : 0,
                            d = null !== (r = c.subject.id) && void 0 !== r ? r : 0,
                            p = null !== (l = c.classs.id) && void 0 !== l ? l : 0;
                        if (!t.isLoggedIn) return n({
                            action: "login_to_access_notes_quiz"
                        }), o(), !1;
                        a.push("/quizzes/".concat(d, "/").concat(e.topicId, "/").concat(u, "/").concat(p))
                    };
                    return (0, s.jsx)("div", {
                        className: i().testYourSelfContainer,
                        children: (0, s.jsxs)(r.Z, {
                            style: {
                                textTransform: "none",
                                gap: "10px"
                            },
                            onClick: testYourSelfController,
                            "aria-label": "You have clicked ".concat((e.paymentObject, "Take quiz")),
                            variant: "contained",
                            children: [(0, s.jsx)(l.Z, {}), (0, s.jsx)("b", {
                                children: (e.paymentObject, "Take quiz")
                            })]
                        })
                    })
                },
                x = (0, u.$j)(function(e) {
                    return {
                        notes_reducers: e.notes_reducers
                    }
                })(function(e) {
                    let {
                        user: t
                    } = (0, g.Z)(), {
                        saveInteractiveModalQuee: n
                    } = (0, S.Z)(), filterDisplayName = e => {
                        let t;
                        if (e && e.length > 0) {
                            let n = e.find(e => "displayname" === e.type.toLowerCase());
                            t = n && n.content ? n.content : null
                        } else t = null;
                        return t
                    }, o = new ObjectCreator(e.notes_reducers.subtopics, e.notes_reducers.topics, e.activeSubtopic, e.notes_reducers.profileId, e.notes_reducers.activeTopic, e.notes_reducers.subjectId);
                    if (!e.activeSubtopic || !e.activeSubtopic.subtopicChildrens) return (0, s.jsx)("div", {
                        className: i().conceptContainerInActive
                    });
                    if (e.activeSubtopic.subtopicChildrens.length > 0) {
                        var r;
                        return (0, s.jsxs)("div", {
                            className: i().conceptContainer,
                            children: [e.activeSubtopic.subtopicChildrens.map((t, n) => (0, s.jsxs)("div", {
                                children: [(0, s.jsx)(DisplayNameComponent, {
                                    displayName: filterDisplayName(t && t.children ? t.children : null),
                                    inclusiveContents: e.notes_reducers.inclusiveContents
                                }), (0, s.jsx)(ConceptText, {
                                    concept: t && t.content ? {
                                        content: t.content,
                                        childrens: t.media ? t.media : null,
                                        type: t.type ? t.type : null
                                    } : null,
                                    inclusiveContents: e.notes_reducers.inclusiveContents
                                }), (0, s.jsx)(a.Md, {
                                    contents: t ? t.children ? t.children : t.media ? t.media : null : null,
                                    inclusiveContents: e.notes_reducers.inclusiveContents
                                }), e.show_quiz_button && (0, s.jsx)(s.Fragment, {
                                    children: t && t.type && "paragraph" !== t.type.toLowerCase() ? (0, s.jsx)(TextYourSelfButton, {
                                        setShowQuestions: e.setShowQuestions,
                                        topics: e.notes_reducers.topics,
                                        activeTopic: e.notes_reducers.activeTopic,
                                        subjectId: e.notes_reducers.subjectId,
                                        activeSubtopic: e.activeSubtopic,
                                        dispatch: e.dispatch,
                                        profileId: e.notes_reducers.profileId,
                                        subtopics: e.notes_reducers.subtopics,
                                        object: o,
                                        item: t,
                                        inclusiveContents: e.notes_reducers.inclusiveContents,
                                        topicId: e.notes_reducers.activeTopic,
                                        paymentObject: e.notes_reducers.paymentObject
                                    }) : null
                                })]
                            }, n)), (0, s.jsx)(s.Fragment, {
                                children: e.show_next_button && (0, s.jsx)(v, {
                                    index: e.index,
                                    dispatch: e.dispatch,
                                    saveInteractiveModalQuee: n,
                                    object: o,
                                    user: t,
                                    subtopicId: e.activeSubtopic && null !== (r = e.activeSubtopic.token) && void 0 !== r ? r : 0,
                                    getTopicName: e.getTopicName,
                                    item: e.notes_reducers.subtopic,
                                    scrollSubtopicContentsToTheViewPort: e.scrollSubtopicContentsToTheViewPort,
                                    isComplete: e.notes_reducers.isComplete
                                })
                            })]
                        })
                    }
                    i().conceptContainerInActive
                })
        },
        471733: function(e, t, n) {
            "use strict";
            n.d(t, {
                Md: function() {
                    return ContentsRenderer
                },
                zg: function() {
                    return ImageRenderer
                },
                NJ: function() {
                    return renderUnorderedList
                }
            });
            var s = n(785893),
                o = n(667294),
                i = n(111135),
                r = n.n(i),
                a = n(356310),
                l = n.n(a),
                c = n(270219),
                u = n(14416),
                d = n(82278);
            let splitBodyAndHeadContents = (e, t) => {
                    if (!e || !(e.length > 0)) return null; {
                        let n = e[0];
                        if (n[0]) return n[0]["content-subtype"] ? "unordered" === n[0]["content-subtype"].toLowerCase() ? (0, s.jsx)(TableUnordered, {
                            contents: n[0] && n[0].content && n[0].content.content ? n[0].content.content : null,
                            inclusiveContents: t
                        }) : null : (0, s.jsx)(Tablecontent, {
                            bodyContents: e
                        })
                    }
                },
                Tablecontent = e => {
                    let checkRowSpan = e => e && e.rowspan ? parseInt(e.rowspan) : 1,
                        checkColSpan = e => e && e.colspan ? parseInt(e.colspan) : 1;
                    return (0, s.jsx)("div", {
                        className: r().notesTable,
                        children: (0, s.jsx)("table", {
                            className: r().tableStyle,
                            children: (0, s.jsx)("tbody", {
                                className: r().tbodyStyle,
                                children: e.bodyContents && e.bodyContents.length > 0 ? e.bodyContents.map((e, t) => {
                                    if (e) return (0, s.jsx)("tr", {
                                        children: e && e.length > 0 ? e.map((e, t) => {
                                            var n;
                                            return (0, s.jsx)("td", {
                                                rowSpan: checkRowSpan(e),
                                                colspan: checkColSpan(e),
                                                children: e ? e["content-type"] ? "text" === e["content-type"].toLowerCase() && e.content ? c.x.checkHtmlTag(e.content) : "list" === e["content-type"].toLowerCase() && e.content ? renderUnorderedList(null !== (n = e.content.content) && void 0 !== n ? n : null, null, "table") : null : e.type && "data" === e.type.toLowerCase() && e.content ? c.x.checkHtmlTag(e.content) : null : null
                                            })
                                        }) : null
                                    })
                                }) : null
                            })
                        })
                    })
                };

            function TableUnordered(e) {
                return (0, s.jsx)("div", {
                    className: r().unorderedTableContainer,
                    children: e.contents && e.contents.length > 0 ? e.contents.map((t, n) => (0, s.jsxs)("div", {
                        className: r().unorderedContentsContainer,
                        children: [(0, s.jsx)("div", {
                            className: r().dotContainer,
                            children: (0, s.jsx)("div", {
                                style: {
                                    width: 10,
                                    height: 10,
                                    backgroundColor: "white",
                                    borderRadius: 5
                                }
                            })
                        }), (0, s.jsx)("div", {
                            className: r().contentsContainer,
                            style: d.a.getInclusiveFeature(e.inclusiveContents) ? {
                                fontFamily: d.a.getInclusiveFeature(e.inclusiveContents)
                            } : {},
                            children: t
                        })]
                    }, n + "tableunordered")) : null
                })
            }

            function ActivityContents(e) {
                return (0, s.jsx)("div", {
                    className: r().activityContainer,
                    children: (0, s.jsxs)("div", {
                        className: r().activityInnerContainer,
                        children: [(0, s.jsx)("div", {
                            className: r().activityHeader,
                            children: "Activity " + "".concat(1)
                        }), (0, s.jsx)("div", {
                            className: r().activityContents,
                            children: e.rendererFunction(e.activityContents, "activity", e.inclusiveContents)
                        })]
                    })
                })
            }

            function ExerciseComponent(e) {
                return (0, s.jsx)("div", {
                    className: r().exerciseContainer,
                    children: (0, s.jsxs)("div", {
                        className: r().exerciseInnerContainer,
                        children: [(0, s.jsx)("div", {
                            className: r().exerciseHeader,
                            children: "Exercise " + "".concat(1)
                        }), (0, s.jsx)("div", {
                            className: r().exerciseContents,
                            children: e.rendererFunction(e.exerciseContents, "exercise", e.inclusiveContents)
                        })]
                    })
                })
            }
            let p = (0, u.$j)(function(e) {
                return {
                    inclusiveContents: e.inclusiveContents
                }
            })(function(e) {
                return (0, s.jsx)(s.Fragment, {
                    children: splitBodyAndHeadContents(e.contents && e.contents.length > 0 ? e.contents : null, e.inclusiveContents)
                })
            });
            var _ = n(827856),
                y = n.n(_),
                h = n(588791);
            n(291879);
            var m = n(625662),
                C = n(999045);
            let renderOrderedList = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = d.a.getSpecificInclusiveFeature(t, "theme");
                    return (0, s.jsx)(s.Fragment, {
                        children: e.content.content.map((t, o) => (0, s.jsx)("div", {
                            className: r().unorderedListContainer,
                            children: (0, s.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: e ? e.content && e.content.type && "lower-alpha" === e.content.type.toLowerCase() && t ? String.fromCharCode(o + 1 + 64).toLocaleLowerCase() + ". " + y().sanitize(t) : o + 1 + ". " + y().sanitize(t) : null
                                },
                                style: {
                                    color: n ? "white" : "black"
                                }
                            })
                        }, o + "ordered"))
                    })
                },
                renderUnorderedList = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "contents",
                        o = d.a.getSpecificInclusiveFeature(t, "theme"),
                        i = "contents" === n ? e.content.content : e;
                    return (0, s.jsx)(s.Fragment, {
                        children: i && i.length > 0 ? i.map((e, t) => (0, s.jsxs)("div", {
                            className: "contents" === n ? r().unorderedListContainer : r().unorderedListTable,
                            children: [(0, s.jsx)("div", {
                                children: (0, s.jsx)("div", {
                                    style: {
                                        width: "contents" === n ? 10 : 5,
                                        height: "contents" === n ? 10 : 5,
                                        borderRadius: "contents" === n ? 5 : 2.5,
                                        backgroundColor: o ? "white" : "black",
                                        marginTop: 8,
                                        marginRight: 10,
                                        color: o ? "white" : "black"
                                    }
                                })
                            }), (0, s.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: e ? y().sanitize(e) : null
                                },
                                style: {
                                    color: o ? "White" : "black"
                                }
                            })]
                        }, t + "unordered")) : null
                    })
                },
                imageChecker = function(e, t) {
                    var n, o;
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return e && e.attributes ? "list" === e.attributes.type.toLowerCase() ? e.content.content && e.content.content.length > 0 ? (0, s.jsx)("div", {
                        style: {
                            fontFamily: null !== (n = d.a.getInclusiveFeature(i)) && void 0 !== n ? n : ""
                        },
                        children: e.attributes.subtype && "unordered" === e.attributes.subtype.toLowerCase() ? renderUnorderedList(e, i) : renderOrderedList(e, i)
                    }) : null : "image" === e.attributes.type.toLowerCase() ? (0, s.jsx)("div", {
                        className: r().imageContainer,
                        children: (0, s.jsx)("img", {
                            src: null !== (o = e.content) && void 0 !== o ? o : " ",
                            className: r().contentImage,
                            style: t ? {
                                width: "100%"
                            } : {
                                maxWidth: "80%"
                            }
                        })
                    }) : "youtube" === e.attributes.type.toLowerCase() ? (0, s.jsx)("div", {
                        style: {
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            marginBottom: "4%"
                        },
                        children: (0, s.jsx)(l(), {
                            url: e.content,
                            controls: !0,
                            light: !0,
                            style: {
                                maxWidth: "98%"
                            }
                        })
                    }) : "table" === e.attributes.type.toLowerCase() ? (0, s.jsx)(p, {
                        contents: e && e.content ? e.content : null
                    }) : null : null
                },
                rendererFunction = function(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = (0, u.I0)();
                    o.useRef();
                    let l = null !== (t = d.a.getInclusiveFeature(i)) && void 0 !== t ? t : "",
                        p = d.a.getSpecificInclusiveFeature(i, "theme"),
                        [_, y] = o.useState("");
                    return (0, s.jsxs)(s.Fragment, {
                        children: [e && e.content ? (0, s.jsx)("div", {
                            className: r().subheaderContainer,
                            children: (0, s.jsx)("div", {
                                className: "header" === n ? r().contentsHeader : "paragraph" === n ? r().contentsParagraph : "subheader" === n ? r().contentsSubheader : "subsubheader" === n ? r().contentsSubSubheader : " ",
                                style: {
                                    fontFamily: l,
                                    color: p ? "white" : "black"
                                },
                                onMouseUp: e => {
                                    let t = window.getSelection && window.getSelection(),
                                        n = t.toString();
                                    t.getRangeAt(0), y(n)
                                },
                                children: (0, s.jsx)(h.Z, {
                                    popoverItems: e => (0, s.jsx)("div", {
                                        children: (0, s.jsx)(m.Z, {
                                            onClick: () => {
                                                a((0, C.aT)()), a((0, C.Zn)(_))
                                            },
                                            children: "Ask Teacher Kidevu"
                                        })
                                    }),
                                    children: c.x.checkHtmlTag(e.content)
                                })
                            })
                        }) : null, e && e.media ? (0, s.jsx)(ImageRenderer, {
                            mediaContent: e.media,
                            inclusiveContents: i
                        }) : null, (0, s.jsx)(ComponentsRenderer, {
                            contents: e && e.childrens ? e.childrens : null,
                            inclusiveContents: i
                        })]
                    })
                },
                ComponentsRenderer = e => {
                    let t = e.contents;
                    return t ? (0, s.jsx)(s.Fragment, {
                        children: t.map((t, n) => t ? (0, s.jsx)("div", {
                            children: t.type ? "paragraph" === t.type.toLowerCase() ? (0, s.jsx)(ParagraphRenderer, {
                                paragraphContent: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                inclusiveContents: e.inclusiveContents
                            }) : "header" === t.type.toLowerCase() ? (0, s.jsx)(HeaderRenderer, {
                                headerContent: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                inclusiveContents: e.inclusiveContents
                            }) : "subheader" === t.type.toLowerCase() ? (0, s.jsx)(SubheaderRenderer, {
                                subheaderContent: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                inclusiveContents: e.inclusiveContents
                            }) : "subsubheader" === t.type.toLowerCase() ? (0, s.jsx)(SubSubheaderRenderer, {
                                subsubheaderContent: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                inclusiveContents: e.inclusiveContents
                            }) : "example" === t.type.toLowerCase() ? (0, s.jsx)(ExampleRenderer, {
                                exampleContent: {
                                    content: t.content ? t.content : " ",
                                    media: t.media ? t.media : null,
                                    childrens: t.children ? t.children : null
                                },
                                numberOfExample: n + 1,
                                inclusiveContents: e.inclusiveContents
                            }) : "activity" === t.type.toLowerCase() ? (0, s.jsx)(ActivityContents, {
                                activityContents: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                rendererFunction: rendererFunction,
                                inclusiveContents: e.inclusiveContents
                            }) : "exercise" === t.type.toLowerCase() ? (0, s.jsx)(ExerciseComponent, {
                                exerciseContents: {
                                    content: t.content ? t.content : " ",
                                    childrens: t.children ? t.children : null,
                                    media: t.media ? t.media : null
                                },
                                rendererFunction: rendererFunction,
                                inclusiveContents: e.inclusiveContents
                            }) : t.media ? (0, s.jsx)(ImageRenderer, {
                                mediaContent: t.media ? t.media : null,
                                inclusiveContents: e.inclusiveContents
                            }) : null : null
                        }, n) : null)
                    }) : null
                },
                ExampleRenderer = e => (0, s.jsxs)("div", {
                    className: r().exampleContentsContainer,
                    children: [(0, s.jsx)("div", {
                        className: r().exampleHeader,
                        children: "Example " + "".concat(e.numberOfExample)
                    }), (0, s.jsx)("div", {
                        className: r().exampleInnerContentWrapper,
                        children: rendererFunction(e.exampleContent, "example", e.inclusiveContents)
                    })]
                }),
                HeaderRenderer = e => (0, s.jsx)(s.Fragment, {
                    children: rendererFunction(e.headerContent, "header", e.inclusiveContents)
                }),
                ParagraphRenderer = e => (0, s.jsx)(s.Fragment, {
                    children: rendererFunction(e.paragraphContent, "paragraph", e.inclusiveContents)
                }),
                SubheaderRenderer = e => (0, s.jsx)(s.Fragment, {
                    children: rendererFunction(e.subheaderContent, "subheader", e.inclusiveContents)
                }),
                SubSubheaderRenderer = e => (0, s.jsx)(s.Fragment, {
                    children: rendererFunction(e.subsubheaderContent, "subsubheader", e.inclusiveContents)
                }),
                ImageRenderer = e => (0, s.jsxs)(s.Fragment, {
                    children: [e.mediaContent && e.mediaContent.length > 0 ? e.mediaContent.map((t, n) => (0, s.jsx)("div", {
                        children: imageChecker(t, e.fromWhere, e.inclusiveContents)
                    }, n + "img")) : null, (0, s.jsx)(ComponentsRenderer, {
                        contents: e.mediaContent && e.mediaContent.length > 0 ? e.mediaContent : null
                    })]
                });

            function ContentsRenderer(e) {
                return e.contents && e.contents.length > 0 ? (0, s.jsx)(ComponentsRenderer, {
                    contents: e.contents,
                    inclusiveContents: e.inclusiveContents
                }) : null
            }
            ComponentsRenderer.displayName = "ComponentsRenderer", ExampleRenderer.displayName = "ExampleRenderer", ImageRenderer.defaultProps = {
                fromWhere: null
            }
        },
        82278: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return i
                }
            });
            var s = n(81263),
                o = n(341911);
            let i = new class {
                setInclusiveContents(e) {
                    o.Z.setInclusiveFeature(e)
                }
                getInclusiveContents(e) {
                    let t = o.Z.getInclusiveContents();
                    e(s.g.setInclusiveContents(t))
                }
                setInclusiveFeature(e, t, n, o) {
                    let i = [];
                    if (e && e.length > 0) {
                        let i = e.findIndex(e => e.feature === t);
                        if (-1 !== i) e[i].content = n, e[i].status = !e[i].status, o(s.g.setInclusiveContents(e)), this.setInclusiveContents(e);
                        else {
                            let i = this.createObject(n, t, !0);
                            e.push(i), o(s.g.setInclusiveContents(e)), this.setInclusiveContents(e)
                        }
                    } else {
                        let e = this.createObject(n, t, !0);
                        i.push(e), o(s.g.setInclusiveContents(i)), this.setInclusiveContents(i)
                    }
                }
                createObject(e, t, n) {
                    let s = {};
                    return s.content = e, s.feature = t, s.status = n, s
                }
                getSpecificInclusiveFeature(e, t) {
                    let n = !1;
                    if (e && e.length > 0) {
                        let s = e.find(e => {
                            if (e && e.feature && e.feature.trim().toLowerCase() === t.trim().toLowerCase()) return e
                        });
                        n = !!s && !!s.status
                    }
                    return n
                }
                constructor() {
                    this.getInclusiveFeature = e => {
                        let t = null;
                        if (e && e.length > 0) {
                            let n = e.filter(e => {
                                    if (e && e.feature && "font" === e.feature.trim().toLowerCase()) return e
                                }),
                                s = n[0] && n.length > 0 && n[0].content ? n[0].content : null;
                            t = "none" !== s ? s : null
                        }
                        return t
                    }, this.getInclusiveFeature = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "font",
                            n = null;
                        if (e && e.length > 0) {
                            let s = e.filter(e => {
                                    if (e && e.feature && e.feature.trim().toLowerCase() === t) return e
                                }),
                                o = s[0] && s.length > 0 && s[0].content ? s[0].content : null;
                            n = "none" !== o ? o : null
                        }
                        return n
                    }
                }
            }
        },
        92063: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return i
                }
            });
            var s = n(835704),
                o = n(282784);
            let i = new class {
                async processQuiz(e) {
                    let {
                        subject_id: t,
                        level_id: n,
                        indicator: o,
                        classs_id: i,
                        profiles_id: r,
                        topic_id: a,
                        source: l,
                        subject: c,
                        sub_topic: u,
                        classs: d,
                        board_steps: p
                    } = e, _ = {
                        service: {
                            micro: "response",
                            task: "getQuestionContent",
                            token: this.accessToken
                        }
                    }, y = { ..._,
                        where: {
                            source: l,
                            subject_id: t,
                            classs_id: i,
                            profiles_id: r,
                            level_id: n,
                            topic_id: a,
                            indicator: o,
                            subject: c,
                            sub_topic: u,
                            classs: d,
                            board_steps: p
                        }
                    }, h = await s.Z.post(y);
                    return this.getQuiz(h)
                }
                getQuiz(e) {
                    let t = null;
                    if (e && e.data) {
                        let n = e.data.data ? e.data.data : null;
                        if (n && n.length > 0) {
                            let e = n.find(e => e);
                            t = e && e.questionContents ? e.questionContents : null
                        }
                    }
                    return t
                }
                async findQuizAttemptsByLevelId(e) {
                    let t = {
                            service: {
                                task: "quizAttemptsHistory",
                                micro: "response",
                                token: 12234
                            },
                            data: {
                                user_id: e.user_id,
                                rule: {
                                    level_id: e.level_id
                                }
                            }
                        },
                        {
                            data: n,
                            networkError: o
                        } = await s.Z.post(t);
                    return !o && (n && n.data && n.data.length > 0 ? n.data : null)
                }
                constructor() {
                    var e = this;
                    this.getAPIQuestions = async function(t) {
                        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        let n = "quiz_batch_".concat(t.subject_id, "_").concat(t.notes_id, "}"),
                            {
                                data: i
                            } = await o.Z.findLocalData(n);
                        if (i) return i;
                        let r = {
                                service: {
                                    micro: "response",
                                    task: "getQuestionContent",
                                    token: e.accessToken
                                },
                                where: {
                                    subject_id: t.subject_id,
                                    classs_id: t.class_id,
                                    profiles_id: t.user_id,
                                    level_id: t.level_id,
                                    topic_id: t.notes_id,
                                    indicator: t.indicator,
                                    quiz_type: ["multiplechoice"],
                                    direction: "concept",
                                    schoollevels_id: parseInt(t.levelId),
                                    source: "web",
                                    subject: {
                                        name: t.subject_name,
                                        id: t.subject_id
                                    },
                                    sub_topic: {
                                        name: t.concept,
                                        id: t.notes_id
                                    },
                                    classs: {
                                        name: t.class_name,
                                        id: t.class_id
                                    },
                                    board_steps: null,
                                    is_multiple_answer: !1
                                }
                            },
                            {
                                data: a,
                                networkError: l,
                                serverError: c
                            } = await s.Z.post(r);
                        return !l && a && a.data && 0 !== a.data.length ? (await o.Z.saveDataLocal(n, a.data), a.data) : null
                    }, this.removeLocalQuizBatch = async e => {
                        let t = "quiz_batch_".concat(e.subject_id, "_").concat(e.notes_id, "}");
                        return await o.Z.removeDoc(t), !0
                    }, this.getQuizDifficulties = async (e, t) => {
                        let n = {
                                service: {
                                    task: "getSubtopicAndDifficulty",
                                    micro: "response",
                                    token: this.accessToken
                                },
                                where: {
                                    subject_id: e,
                                    notes_id: t,
                                    direction: "concept"
                                }
                            },
                            {
                                data: o,
                                networkError: i,
                                serverError: r
                            } = await s.Z.post(n),
                            a = null,
                            l = null;
                        return i ? {
                            levelArray: a,
                            activeLevelData: l
                        } : (l = (l = o && o.data && o.data.length > 0 ? o.data[0].levels : null) ? l.filter(e => e.is_current) : null, {
                            levelArray: a = o && o.data && o.data.length > 0 ? o.data[0].activeStage : null,
                            activeLevelData: l,
                            _data: o && o.data && o.data.length > 0 ? o.data[0] : null
                        })
                    }, this.saveUserQuestionAttempt = async (e, t, n, o) => {
                        e = e[0];
                        let i = {
                                service: {
                                    micro: "response",
                                    task: "saveQuestionResponse",
                                    token: this.accessToken
                                },
                                data: {
                                    profiles_id: t,
                                    quizGroup: n,
                                    deviceId: null,
                                    question: [{
                                        answer: e.content,
                                        answerId: e.id,
                                        questionId: e.questionId,
                                        status: e.isCorrect,
                                        speed: 0,
                                        sqn: o
                                    }]
                                }
                            },
                            {
                                data: r,
                                networkError: a
                            } = await s.Z.post(i);
                        return !a && (r && r.data && r.data.length > 0 ? r.data : null)
                    }, this.getQuizLeaderBoardData = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = {
                                where: {
                                    notesId: e.level.id,
                                    notesType: "concept",
                                    schoolLevel: 2,
                                    limit: 10
                                }
                            },
                            {
                                data: n,
                                networkError: o,
                                serverError: i
                            } = await s.Z.__post(t, "quiz/quizLeaderBoard");
                        return o ? null : n && n.data && n.data.leadersBoard && n.data.leadersBoard.length > 0 ? n.data : null
                    }, this.getUserQuizReports = async e => {
                        let t = {
                                service: {
                                    micro: "response",
                                    task: "getReportHistory",
                                    token: this.accessToken
                                },
                                where: {
                                    profiles_id: e
                                }
                            },
                            {
                                data: n,
                                networkError: o
                            } = await s.Z.post(t);
                        return !o && (n && n.data && n.data.length > 0 ? n.data : null)
                    }, this.accessToken = parseInt("12234")
                }
            }
        },
        519114: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            let s = [{
                id: "21115",
                total_concept: 4,
                concept: ["21117", "21119", "21121", "21123"],
                completed: !0
            }, {
                id: "21124",
                total_concept: 3,
                concept: ["21126", "21128", "21130"],
                completed: !0
            }];
            var o = n(835704),
                i = new class {
                    async findUserLearnigProgress(e) {
                        return s
                    }
                    async findCompletedConcept(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "completed-study-plan-contents",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "".concat(e)
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s || 0 === n.results.results.length ? null : n.results.results
                    }
                    async findStudyPlanCommentData(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "get_study_plan_comments",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: e
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s || 0 === n.results.results.length ? [] : n.results.results
                    }
                    async saveCommentData(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "new_study_plan_comment",
                                    token: this.accessToken
                                },
                                BULK_POST: {
                                    route: "".concat(e.study_plan_parent_id, "/"),
                                    data: {
                                        user_id: e.user_id,
                                        comment: e.content
                                    }
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s ? null : n.results.comment
                    }
                    async findUserStudyPlanData(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = {
                                service: {
                                    micro: "user_profiling",
                                    task: "get-user-study-plan",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: t ? "".concat(e, "/").concat(t, "/notes") : "".concat(e, "/study_plan")
                                }
                            },
                            {
                                data: s,
                                networkError: i
                            } = await o.Z.post(n);
                        return i || 0 === s.results.results.length ? null : s.results.results
                    }
                    async saveStudyPlan(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "new-study-plan",
                                    token: this.accessToken
                                },
                                BULK_POST: {
                                    route: "new",
                                    data: {
                                        user_id: e.user_id,
                                        topic_id: e.topic_id,
                                        subject_id: e.subject_id,
                                        class_id: e.class_id,
                                        total_subtopics: e.total_subtopics,
                                        type: e.type,
                                        start_date: e.start_date,
                                        end_date: e.end_date,
                                        duration: 5
                                    }
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s ? null : 400 === n.code && "object" == typeof n.error.error ? {
                            id: n.error.error.study_plan_id
                        } : n.results
                    }
                    async inviteUserData(e, t, n) {
                        let s = {
                                service: {
                                    micro: "user_profiling",
                                    task: "share-plan",
                                    token: this.accessToken
                                },
                                BULK_POST: {
                                    route: "".concat(e, "/").concat(t, "/"),
                                    data: {
                                        user_to: n,
                                        study_plan: e
                                    }
                                }
                            },
                            {
                                data: i,
                                networkError: r
                            } = await o.Z.post(s);
                        return !r && 400 !== i.code || null
                    }
                    async findUserSharedOnStudyPlan(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "invited-users-study-plan",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "".concat(e)
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s || 0 === n.results.results.length ? null : n.results.results.map(e => ({
                            is_accepted: e.is_accepted,
                            user: e.user_to
                        }))
                    }
                    async findStudyPlanById(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "get_study_plan_by_id",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "".concat(e)
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return s ? null : n.results
                    }
                    async saveCompletedConceptInStudyPlan(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "new-content-progress",
                                    token: this.accessToken
                                },
                                BULK_POST: {
                                    route: "new",
                                    data: {
                                        concept_id: parseInt(e.concept_id),
                                        subtopic_id: parseInt(e.subtopic_id),
                                        study_plan: parseInt(e.study_plan_id),
                                        previous_concept_id: parseInt(e.previous_concept_id),
                                        subtopic_complete: e.subtopic_complete
                                    }
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return !0
                    }
                    async deleteStudyPlan(e) {
                        let t = {
                                service: {
                                    micro: "user_profiling",
                                    task: "delete_study_plan",
                                    token: this.accessToken
                                },
                                DELETE: {
                                    route: e
                                }
                            },
                            {
                                data: n,
                                networkError: s
                            } = await o.Z.post(t);
                        return !s || null
                    }
                    constructor() {
                        this.accessToken = parseInt("12234")
                    }
                }
        },
        111135: function(e) {
            e.exports = {
                notesFrameWrapper: "NotesDisplayStyles_notesFrameWrapper__xqv7t",
                notesRightFrameWrapper: "NotesDisplayStyles_notesRightFrameWrapper__NfVJx",
                notesLeftFrameWrapper: "NotesDisplayStyles_notesLeftFrameWrapper__If8df",
                notesIntroductionWrapper: "NotesDisplayStyles_notesIntroductionWrapper__aqT3l",
                topicRibbonWrapper: "NotesDisplayStyles_topicRibbonWrapper__zCizP",
                notesContainer: "NotesDisplayStyles_notesContainer__4Idv_",
                notesColumn: "NotesDisplayStyles_notesColumn__g2ZuX",
                notesColumnSyllabus: "NotesDisplayStyles_notesColumnSyllabus__8Pw3O",
                subtopicChilrenWrapper: "NotesDisplayStyles_subtopicChilrenWrapper__IUgSw",
                contentIntroParagraph: "NotesDisplayStyles_contentIntroParagraph__CSXWw",
                subtopicAccordionInActive: "NotesDisplayStyles_subtopicAccordionInActive__WOTh3",
                subtopicAccordionActive: "NotesDisplayStyles_subtopicAccordionActive__8RG7R",
                contentTextInActive: "NotesDisplayStyles_contentTextInActive__mqH8P",
                contentTextActive: "NotesDisplayStyles_contentTextActive__1sAm7",
                conceptContainerInActive: "NotesDisplayStyles_conceptContainerInActive__yfTuV",
                conceptContainer: "NotesDisplayStyles_conceptContainer__Swg6a",
                displayNameWrapper: "NotesDisplayStyles_displayNameWrapper__WtIoN",
                testYourSelfContainer: "NotesDisplayStyles_testYourSelfContainer__PYrbI",
                testYourSelefButton: "NotesDisplayStyles_testYourSelefButton__ugCXY",
                completeSubtopicContainer: "NotesDisplayStyles_completeSubtopicContainer__Jm_a2",
                completeSubtopicButton: "NotesDisplayStyles_completeSubtopicButton__TIai4",
                completeButtonActive: "NotesDisplayStyles_completeButtonActive__2boNW",
                completeButton: "NotesDisplayStyles_completeButton__36yay",
                conceptContent: "NotesDisplayStyles_conceptContent__SPJ_N",
                conceptParagraph: "NotesDisplayStyles_conceptParagraph__O1EdS",
                paragraphContainer: "NotesDisplayStyles_paragraphContainer__WPwhe",
                headerContainer: "NotesDisplayStyles_headerContainer__he1y5",
                subheaderContainer: "NotesDisplayStyles_subheaderContainer__lJz8o",
                contentsHeader: "NotesDisplayStyles_contentsHeader__Z1V8e",
                contentsParagraph: "NotesDisplayStyles_contentsParagraph__DMv7p",
                contentsSubheader: "NotesDisplayStyles_contentsSubheader__84OXT",
                contentsSubSubheader: "NotesDisplayStyles_contentsSubSubheader__oUDXP",
                unorderedListContainer: "NotesDisplayStyles_unorderedListContainer__ukfKd",
                unorderedListTable: "NotesDisplayStyles_unorderedListTable__LVXCr",
                imageContainer: "NotesDisplayStyles_imageContainer__R7lUX",
                contentImage: "NotesDisplayStyles_contentImage__6Dg3v",
                youtubeLinkContainer: "NotesDisplayStyles_youtubeLinkContainer__DxMUZ",
                exampleContentsContainer: "NotesDisplayStyles_exampleContentsContainer__dnoew",
                exampleHeader: "NotesDisplayStyles_exampleHeader__Og_hi",
                exampleInnerContentWrapper: "NotesDisplayStyles_exampleInnerContentWrapper___W1Gh",
                notesTable: "NotesDisplayStyles_notesTable__klOtt",
                tableStyle: "NotesDisplayStyles_tableStyle__m8WTK",
                tbodyStyle: "NotesDisplayStyles_tbodyStyle__J7D81",
                trStyle: "NotesDisplayStyles_trStyle__lW2iy",
                tdStyle: "NotesDisplayStyles_tdStyle__RdMNn",
                thStyle: "NotesDisplayStyles_thStyle__4gcQW",
                tableContainer: "NotesDisplayStyles_tableContainer__rHz5f",
                tableHead: "NotesDisplayStyles_tableHead__WpbCx",
                tableHeadRow: "NotesDisplayStyles_tableHeadRow__eqqk3",
                tableHeadContents: "NotesDisplayStyles_tableHeadContents__5GAqT",
                tableBody: "NotesDisplayStyles_tableBody__tz2Fy",
                tableBodyRow: "NotesDisplayStyles_tableBodyRow__weuIY",
                tableBodyContentsContainer: "NotesDisplayStyles_tableBodyContentsContainer__6IEWm",
                tableBodyContents: "NotesDisplayStyles_tableBodyContents__NEmOb",
                activityContainer: "NotesDisplayStyles_activityContainer__wXq1s",
                activityInnerContainer: "NotesDisplayStyles_activityInnerContainer__iru7U",
                activityHeader: "NotesDisplayStyles_activityHeader__x7I6p",
                activityContents: "NotesDisplayStyles_activityContents__lWgST",
                exerciseContainer: "NotesDisplayStyles_exerciseContainer__JsFgb",
                exerciseInnerContainer: "NotesDisplayStyles_exerciseInnerContainer__iOuS_",
                exerciseHeader: "NotesDisplayStyles_exerciseHeader__vtKjl",
                exerciseContents: "NotesDisplayStyles_exerciseContents__cDjDQ",
                unorderedTableContainer: "NotesDisplayStyles_unorderedTableContainer__BVXrq",
                unorderedContentsContainer: "NotesDisplayStyles_unorderedContentsContainer__YxNDC",
                dotContainer: "NotesDisplayStyles_dotContainer__UiNdy",
                contentsContainer: "NotesDisplayStyles_contentsContainer__VTGr2",
                bookmarkButton: "NotesDisplayStyles_bookmarkButton__dt5k2",
                leftBookmarkButtonContents: "NotesDisplayStyles_leftBookmarkButtonContents__Vbx8L",
                topicStyle: "NotesDisplayStyles_topicStyle__hQ6N6",
                subjectStyle: "NotesDisplayStyles_subjectStyle__a_Oog",
                dateStyle: "NotesDisplayStyles_dateStyle__kxmV2",
                rightBookmarkButtonContents: "NotesDisplayStyles_rightBookmarkButtonContents__BKE4e",
                removeStyle: "NotesDisplayStyles_removeStyle__pGOSC",
                favoriteText: "NotesDisplayStyles_favoriteText__YPgni",
                noBookmarkContent: "NotesDisplayStyles_noBookmarkContent__QKhOx",
                plus: "NotesDisplayStyles_plus__IQu2P",
                favouriteContainer: "NotesDisplayStyles_favouriteContainer__rgoKM",
                heartIcon: "NotesDisplayStyles_heartIcon__fO7N8",
                activeIconsContainer: "NotesDisplayStyles_activeIconsContainer__HoCns",
                progressiveCircle: "NotesDisplayStyles_progressiveCircle__loemD"
            }
        }
    }
]);