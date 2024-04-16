(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [384], {
        200384: function(e, t, r) {
            "use strict";
            var a = r(785893),
                n = r(667294),
                c = r(837722),
                s = r.n(c),
                o = r(146574),
                i = r(415861),
                _ = r(625662),
                l = r(237671),
                p = r(410747),
                u = r(811163),
                d = r(14416);
            t.Z = e => {
                let t = (0, u.useRouter)(),
                    {
                        findLatestContent: r
                    } = (0, p.Z)(),
                    {
                        load_TRC_content: c,
                        latest_content: h
                    } = (0, d.v9)(e => e.trc_content_data);
                return n.useEffect(() => {
                    let initData = async () => {
                        await r()
                    };
                    if (!c.latest_content) return () => {};
                    initData()
                }, []), (0, a.jsx)("div", {
                    className: s().latestContentRowWrapper,
                    ref: e.elementRef,
                    children: (0, a.jsxs)(o.Z, {
                        children: [(0, a.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [(0, a.jsx)(i.Z, {
                                style: {
                                    flex: "1"
                                },
                                variant: "h3",
                                children: (0, a.jsx)("b", {
                                    children: e.title
                                })
                            }), (0, a.jsx)(_.Z, {
                                variant: "outlined",
                                style: {
                                    textTransform: "none"
                                },
                                onClick: () => {
                                    t.push("/resource-center/public")
                                },
                                children: "View all"
                            })]
                        }), (0, a.jsx)(l.Z, {
                            content: h
                        }), (0, a.jsx)("div", {
                            style: {
                                float: "right"
                            },
                            children: (0, a.jsx)(_.Z, {
                                variant: "outlined",
                                style: {
                                    textTransform: "none"
                                },
                                onClick: () => {
                                    t.push("/resource-center/public")
                                },
                                children: "View all"
                            })
                        })]
                    })
                })
            }
        },
        237671: function(e, t, r) {
            "use strict";
            var a = r(785893),
                n = r(667294),
                c = r(700983),
                s = r.n(c),
                o = r(415861),
                i = r(625662),
                _ = r(288078),
                l = r(811163),
                p = r(815227),
                u = r(741664),
                d = r.n(u),
                h = r(924631);
            let Card = e => {
                let [t, r] = n.useState(null);
                return n.useEffect(() => {
                    let initSubjectInfo = async () => {
                        if (!e.data.extra_info) return () => {};
                        let t = [];
                        if (e.data.category_details && "curricular" === e.data.category_details.category_type)
                            for (let r of (await h.Z.getSubjects())) {
                                let a = r.data.filter(t => t && parseInt(t.subject.id) === parseInt(e.data.extra_info.subject_id));
                                a.length > 0 && t.push(a[0])
                            }
                        if (t.length > 0) {
                            let e = t[0].subject.subject_default;
                            return r({ ...e,
                                subject_class: e.name.replace(/\s+/g, "")
                            }), () => {}
                        }
                    };
                    initSubjectInfo()
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: ["" !== e.data.content_image ? (0, a.jsx)("div", {
                        className: s().coverWrapper,
                        style: {
                            backgroundImage: "url(".concat(e.data.content_image, ")")
                        }
                    }) : (0, a.jsx)(a.Fragment, {
                        children: t ? (0, a.jsx)("div", {
                            className: "".concat(s().subjectCoverWrapper, " ").concat(t.subject_class),
                            children: (0, a.jsx)("img", {
                                src: t.image
                            })
                        }) : (0, a.jsx)("div", {
                            className: s().coverWrapper,
                            style: {
                                backgroundImage: "url(".concat(e.data.content_image, ")")
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: s().descriptiondWrapper,
                        children: [(0, a.jsx)(o.Z, {
                            variant: "h6",
                            className: s().header,
                            children: e.data.title
                        }), e.data.extra_info && (0, a.jsxs)("div", {
                            children: [e.data.extra_info.topic_info[0].subject_content, " -", " ", e.data.extra_info.topic_info[0].content]
                        }), e.data.category_details && "extracurricular" === e.data.category_details.category_type && (0, a.jsx)("div", {
                            children: e.data.category_details.category_name
                        })]
                    }), (0, a.jsx)("div", {
                        className: s().userAvatarWrapper,
                        children: e.data.user && (0, a.jsx)(p.XY, {
                            size: "tin",
                            image: e.data.user[0].image,
                            name: "".concat("0" !== e.data.user[0].first_name ? e.data.user[0].first_name : "", " ").concat("0" !== e.data.user[0].first_name ? e.data.user[0].last_name : "")
                        })
                    })]
                })
            };
            t.Z = e => ((0, l.useRouter)(), (0, a.jsx)("div", {
                className: s().contentListWrapper,
                children: e.content && (0, a.jsx)(a.Fragment, {
                    children: e.content.length > 0 ? e.content.map((t, r) => e.content.length === r + 1 ? (0, a.jsx)(d(), {
                        href: "/resource-center/public/view/".concat(t.id),
                        children: (0, a.jsx)(i.Z, {
                            className: s().contentCardWrapper,
                            ref: e.lastContentElementRef,
                            children: (0, a.jsx)(Card, {
                                data: t
                            })
                        })
                    }, r) : (0, a.jsx)(d(), {
                        href: "/resource-center/public/view/".concat(t.id),
                        children: (0, a.jsx)(i.Z, {
                            className: s().contentCardWrapper,
                            children: (0, a.jsx)(Card, {
                                data: t
                            })
                        })
                    }, r)) : (0, a.jsx)(a.Fragment, {
                        children: [void 0, void 0, void 0].map(e => (0, a.jsx)(_.Z, {
                            height: 400
                        }))
                    })
                })
            }))
        },
        410747: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return resource_center_useTRC_dataProcess
                }
            });
            var a = r(835704),
                n = new class {
                    async findLatestContentData() {
                        let e = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_content_specify_how_many",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content_first/8/?limit=8&page=1&content_filter=published"
                                }
                            },
                            {
                                data: t,
                                networkError: r
                            } = await a.Z.post(e);
                        return r || !t || t.results && 200 !== t.results.code || t.results && t.results.data && 0 === t.results.data.length ? null : t.results.data
                    }
                    async findContentBySubjectData(e) {
                        let t = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_teacher_content_by_subject",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content_subject/".concat(e)
                                }
                            },
                            {
                                data: r,
                                networkError: n
                            } = await a.Z.post(t);
                        return n || !r || r && r.results && 0 === r.results.length ? null : r.results.data
                    }
                    async findConentByTopicIdData(e) {
                        let t = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_content_by_topic",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content_topic/".concat(e, "/")
                                }
                            },
                            {
                                data: r,
                                networkError: n
                            } = await a.Z.post(t);
                        return n || !r.results ? null : r.results.data.length > 0 ? r.results.data : null
                    }
                    async saveContentCommentData(e) {
                        let t = {
                                service: {
                                    micro: "teacher_and_parent_resources_center",
                                    task: "content/comment/",
                                    token: this.accessToken
                                },
                                POST: e
                            },
                            {
                                data: r,
                                networkError: n
                            } = await a.Z.post(t);
                        if (n || 200 !== r.code) return null;
                        let c = r.data.user ? { ...r.data.user[0],
                            avatar: r.data.user[0].image
                        } : {
                            avatar: "",
                            first_name: "",
                            last_name: ""
                        };
                        return [{
                            content: r.data.comment_content,
                            user_info: c,
                            user: c,
                            date_added: r.data.date_added
                        }]
                    }
                    async findContentByIdData(e) {
                        let t = {
                                cache: !0,
                                service: {
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_content_by_id",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content_spec/".concat(e)
                                }
                            },
                            {
                                data: r,
                                networkError: n
                            } = await a.Z.post(t);
                        return n || r.results && 0 === r.results.length ? null : r.results
                    }
                    async findContentCommentsData(e) {
                        let t = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_content_comment",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content/comment/".concat(e)
                                }
                            },
                            {
                                data: r,
                                networkError: n
                            } = await a.Z.post(t);
                        return n ? null : !r.results || r.results && 0 === r.results.length ? [] : r.results && r.results.map((e, t) => {
                            let r = e.user ? { ...e.user[0],
                                avatar: e.user[0].image
                            } : {
                                first_name: "",
                                last_name: "",
                                avatar: ""
                            };
                            return {
                                content: e.comment_content,
                                user_info: r,
                                user: r,
                                date_added: e.date_added
                            }
                        })
                    }
                    async findAllContentData(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_all_content_curricular_extracurricular",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: t ? "content_all/?page=".concat(e, "&limit=").concat(t, "&publish_filter=published") : "content_all/?page=".concat(e, "&limit=12&publish_filter=published")
                                }
                            },
                            {
                                data: n,
                                networkError: c
                            } = await a.Z.post(r);
                        return c || 500 === n.code || 200 !== n.results.code || n.results && n.results.data && 0 === n.results.data.length ? null : n.results.data
                    }
                    async findParentContent() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                            r = {
                                service: {
                                    cache: !0,
                                    micro: "teacher_and_parent_resources_center",
                                    task: "get_all_parent_content",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "content/?page=".concat(e, "&limit=").concat(t, "&publish_status=published&payment_status=all")
                                }
                            },
                            {
                                data: n,
                                networkError: c
                            } = await a.Z.post(r);
                        return c || 500 === n.code || 200 !== n.results.code || n.results && n.results.data && 0 === n.results.data.length ? null : n.results.data
                    }
                    async findHadithHadithiContent() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        let e = {
                                service: {
                                    micro: "teacher_and_parent_resources_center",
                                    task: "category/",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "extra_content/?name=hadithi-hadithi&publish_status=published&page=1"
                                }
                            },
                            {
                                data: t,
                                networkError: r
                            } = await a.Z.post(e);
                        return r || 500 === t.code || 200 !== t.results.code || t.results && t.results.data && 0 === t.results.data.length ? null : t.results.data
                    }
                    constructor() {
                        this.accessToken = parseInt("12234")
                    }
                },
                c = r(14416),
                s = r(810026),
                o = r(624039),
                i = r(846615),
                _ = r(196800),
                resource_center_useTRC_dataProcess = () => {
                    let e = (0, c.I0)(),
                        {
                            validateContent: t
                        } = (0, i.Z)(),
                        {
                            textblock_data: r
                        } = (0, c.v9)(e => e.texteditor_data),
                        {
                            user: a
                        } = (0, o.Z)(),
                        findContentById = async e => await n.findContentByIdData(e),
                        findContentComments = async e => await n.findContentCommentsData(e),
                        saveContentComment = async c => {
                            if (e((0, s.E8)()), !Array.isArray(r) || !(r.length > 0)) return console.error("textBlock is not in the expected format."), null; {
                                let e = r[0];
                                if (!e.data || !e.data.content) return console.error("textBlock does not have the expected data.content property."), null; {
                                    var o;
                                    let s = {
                                        user_id: null === (o = a.data) || void 0 === o ? void 0 : o.id,
                                        cornercontent: c.id,
                                        comment_content: e.data.content
                                    };
                                    return t(r) ? await n.saveContentCommentData(s) : null
                                }
                            }
                        },
                        findContentBySubject = async e => await n.findContentBySubjectData(e),
                        findContentByTopic = async t => {
                            let r = [],
                                a = await n.findConentByTopicIdData(t);
                            return a && 0 !== (a = a.filter(e => "published" === e.publish_status).map((e, t) => (e && r.push(e.user[0]), e))).length ? (e((0, _.Bk)(r)), a) : (e((0, _.Bk)(null)), null)
                        },
                        findLatestContent = async () => {
                            let t = await n.findLatestContentData();
                            return e((0, _.LR)(t)), e((0, _.Z)({
                                type: "latest_content",
                                data: !1
                            })), t
                        },
                        findAllPublicContent = async t => {
                            let r = await n.findAllContentData(t);
                            return r ? (e((0, _.$f)(r)), e((0, _.Z)({
                                type: "public_content",
                                data: !1
                            })), r) : null
                        };
                    return {
                        saveContentComment,
                        findContentById,
                        findContentComments,
                        findLatestContent,
                        findAllPublicContent,
                        findContentBySubject,
                        findContentByTopic
                    }
                }
        },
        837722: function(e) {
            e.exports = {
                resourceCenterMainWrapper: "Resource_resourceCenterMainWrapper__eZet6",
                grey: "Resource_grey__xZxdV",
                resourceCarouselWrapper: "Resource_resourceCarouselWrapper__PCO_U",
                resourceCarouselInnerWrapper: "Resource_resourceCarouselInnerWrapper__0dp4u",
                rightWrapper: "Resource_rightWrapper__3oSKv",
                headerWrapper: "Resource_headerWrapper__UHi4T",
                descriptionHeader: "Resource_descriptionHeader__z7OsG",
                actionButtonWrapper: "Resource_actionButtonWrapper__9xIMf",
                stepsCardWrapper: "Resource_stepsCardWrapper___vpdB",
                column: "Resource_column__tyuOa",
                card: "Resource_card__zuqMH",
                cardBg1: "Resource_cardBg1__cH3jq",
                cardBg2: "Resource_cardBg2__1_x2o",
                cardBg3: "Resource_cardBg3__q3bLB",
                cardBg4: "Resource_cardBg4__6EDNd",
                arrowLineWrapper: "Resource_arrowLineWrapper__9ISOw",
                teachingToolsWrapper: "Resource_teachingToolsWrapper__8_dWR",
                toolsCardMainWrapper: "Resource_toolsCardMainWrapper__kGkPO",
                toolsHeaderWrapper: "Resource_toolsHeaderWrapper__2O_59",
                arrowWrapper: "Resource_arrowWrapper__20qmu",
                toolsCardWrapper: "Resource_toolsCardWrapper__3T1l2",
                header: "Resource_header__6axPn",
                thirdPartiesMainRowWrapper: "Resource_thirdPartiesMainRowWrapper__whUg5",
                columnWrapper: "Resource_columnWrapper__NEZvZ",
                columnLeftWrapper: "Resource_columnLeftWrapper__EE2aA",
                columnRightWrapper: "Resource_columnRightWrapper__3r8r9",
                importanceRowWrapper: "Resource_importanceRowWrapper__tPxUm",
                columWrapper: "Resource_columWrapper__2VhTN",
                benefitListWrapper: "Resource_benefitListWrapper__PIao1",
                listWrapper: "Resource_listWrapper__60WD9",
                checkIcon: "Resource_checkIcon__6pNHT",
                latestContentRowWrapper: "Resource_latestContentRowWrapper__w2aVI",
                leftWrapper: "Resource_leftWrapper__X6lPY",
                headerName: "Resource_headerName__IWJkZ"
            }
        },
        700983: function(e) {
            e.exports = {
                publicContentViewMainWrapper: "TRCcontent_publicContentViewMainWrapper__APUNu",
                contentViewWrapper: "TRCcontent_contentViewWrapper__Gz7Gh",
                contentMonetaryWrapper: "TRCcontent_contentMonetaryWrapper__JHU2O",
                premiumWrapper: "TRCcontent_premiumWrapper__Z6ZIP",
                contentViewOverlayWrapper: "TRCcontent_contentViewOverlayWrapper__p4OHq",
                contentImageCoverWrapper: "TRCcontent_contentImageCoverWrapper__fST6d",
                attachmentWrapper: "TRCcontent_attachmentWrapper__Rxb8v",
                contentCommentWrapper: "TRCcontent_contentCommentWrapper__2mWvJ",
                contentListWrapper: "TRCcontent_contentListWrapper__T_uhp",
                contentCardWrapper: "TRCcontent_contentCardWrapper__nYKf0",
                coverWrapper: "TRCcontent_coverWrapper__FkvSO",
                subjectCoverWrapper: "TRCcontent_subjectCoverWrapper__6ow5E",
                descriptiondWrapper: "TRCcontent_descriptiondWrapper__i___r",
                ribbonWrapper: "TRCcontent_ribbonWrapper__WjfUc",
                header: "TRCcontent_header__7MoRA",
                userAvatarWrapper: "TRCcontent_userAvatarWrapper__6QEAX",
                publicContentPageWrapper: "TRCcontent_publicContentPageWrapper__z2qLu",
                publicContentCarousel: "TRCcontent_publicContentCarousel__hwWXi",
                contentWrapper: "TRCcontent_contentWrapper__4YtWs",
                teachersContentByTopicRowWrapper: "TRCcontent_teachersContentByTopicRowWrapper__ftfdK",
                segmentWrapper: "TRCcontent_segmentWrapper__63gv7"
            }
        }
    }
]);