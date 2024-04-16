"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7545], {
        497545: function(t, s, e) {
            e(667294);
            var a = e(14416),
                i = e(371508),
                n = e(624039),
                o = e(20796),
                c = e(810026),
                l = e(811163),
                u = e(846615);
            s.Z = () => {
                let t = (0, a.I0)(),
                    {
                        user: s
                    } = (0, n.Z)(),
                    e = (0, l.useRouter)(),
                    {
                        validateContent: r
                    } = (0, u.Z)(),
                    {
                        discussion_categories: d,
                        discussion_properties: p
                    } = (0, a.v9)(t => t.discussions_data),
                    {
                        textblock_data: m
                    } = (0, a.v9)(t => t.texteditor_data),
                    {
                        classes: y
                    } = (0, a.v9)(t => t.general_data),
                    saveDiscussion = async a => {
                        var n;
                        let l = "";
                        if (Array.isArray(m))
                            for (let t of m) "paragraph" === t.type && t.data && t.data.content && (l += t.data.content);
                        let u = {
                            route: a.type,
                            title: a.title,
                            topic_id: a.topic_id,
                            image_url: a.image,
                            subject_id: parseInt(a.subject_id),
                            user_id: parseInt(null === (n = s.data) || void 0 === n ? void 0 : n.id),
                            class_id: parseInt(a.classs_id),
                            content: l
                        };
                        if (!r(m)) return null;
                        let d = await i.Z.saveDiscussionData(u),
                            p = "syllabus" === a.type ? "syllab" : a.type;
                        return d && d.length > 0 && e.push("/discussion/".concat(p, "/view/").concat(d[0].id)), t((0, c.E8)()), t((0, o.mi)(d)), t((0, o._h)(!1)), d
                    },
                    saveTkCommentAI = async (t, s, e) => {
                        let a = {
                                route: "kidevu-discussion",
                                topic: t.title,
                                content: "object" == typeof t.content ? t.content[0].data.content : t.content,
                                level: "",
                                comments: 0 === t.comments.length ? [] : t.comments.map(t => ({
                                    name: "".concat(t.user.first_name, " ").concat(t.user.last_name),
                                    comment: "object" == typeof t.content ? t.content[0].data.content : t.content
                                }))
                            },
                            n = await i.Z.saveTKCommentsAI(a);
                        n && saveComment({ ...e,
                            tk_comment: n,
                            tk_user_id: s.user_id,
                            tk_save: !0
                        })
                    },
                    saveComment = async e => {
                        var a;
                        let n = "boolean" == typeof e.tk_save,
                            l = {
                                route: e.post_type,
                                user_id: n ? e.tk_user_id : parseInt(null === (a = s.data) || void 0 === a ? void 0 : a.id),
                                discussion_id: e.id,
                                content: n ? e.tk_comment : m[0].data.content
                            };
                        if (n || m.map(t => {
                                t.tk_tagged && saveTkCommentAI(e, t.tk_tagged, e)
                            }), !r(m)) return null;
                        let u = await i.Z.saveCommentData(l);
                        if (u) return t((0, o.$1)({
                            type: "prepend",
                            data: u
                        })), t((0, c.E8)()), !0
                    },
                    findDiscussionByCategory = async function(e) {
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (a) {
                            let a = await i.Z.findDiscussionByCategoryData(e, p, s);
                            if (!a.data) return;
                            t((0, o.dT)(!1)), t((0, o.Vh)(a.data))
                        }
                    },
                    findDiccussionByid = async function(e) {
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                        if (t((0, o.bj)(!0)), t((0, o.dT)(!1)), n) {
                            let n = await i.Z.findDiscussionByIdData(e, a, s);
                            t((0, o.Z$)(n))
                        }
                        findDiscussionComment(e, a)
                    },
                    findDiscussionComment = async (s, e) => {
                        let a = await i.Z.findDiscussionCommentData(s, e);
                        a && t((0, o.$1)({
                            type: "replace",
                            data: a
                        }))
                    },
                    findDiscussionCategoriesByClass = async function(s) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        t((0, o.Ob)());
                        let a = await i.Z.findDiscussionCategoriesByClassData(s);
                        if (!a) return !1;
                        a.unshift({
                            classs: "",
                            image: "https://sdimg.blob.core.windows.net/images/ShuleDirect/45475/Original/lifeskill_logo(1)_1472117855120.png",
                            subject: "All",
                            subjectId: "all-posts",
                            total_post: "",
                            type: ""
                        }), a = a ? a.map(t => ({ ...t,
                            subject: "Information and Computer Studies" === t.subject ? "ICS" : t.subject
                        })) : null;
                        let n = e && a.filter(t => parseInt(t.subjectId) === parseInt(e))[0] ? a.filter(t => parseInt(t.subjectId) === parseInt(e))[0] : null;
                        t((0, o.gG)({
                            active_category: n || a[0],
                            data: a
                        }))
                    },
                    saveUserLikes = async (e, a, n) => {
                        var c;
                        let l = {
                                user_id: parseInt(null === (c = s.data) || void 0 === c ? void 0 : c.id),
                                discussion_id: e.id,
                                post_type: e.post_type
                            },
                            u = await i.Z.saveDiscussionLikes(l);
                        if (!u) return !1;
                        let r = "like" === u.status ? parseInt(e.data.likes) + 1 : e.data.likes > 0 ? parseInt(e.data.likes) - 1 : 0,
                            d = "like" === u.status;
                        t((0, o.TQ)({
                            source: n,
                            index: a,
                            likes: r,
                            liked_it: d
                        }))
                    },
                    deleteDiscussion = async (s, e) => {
                        t((0, o.VC)({
                            index: e
                        })), await i.Z.deletePostData(s)
                    },
                    findPopularDiscussions = async () => {
                        let s = await i.Z.findPopularDiscussionsData();
                        s && t((0, o.fy)(s))
                    },
                    saveCommentLike = async (s, e, a, n) => {
                        let c = await i.Z.saveCommentLikes({
                            user_id: a,
                            comment_id: e
                        });
                        t((0, o.dR)({
                            comment_index: n,
                            likes: c
                        }))
                    };
                return {
                    saveDiscussion,
                    findDiscussionByCategory,
                    findDiscussionComment,
                    saveComment,
                    validateForm: (s, e) => {
                        if (t((0, o.B1)(!0)), s[e].data.content.length <= 3) return !1;
                        t((0, o.B1)(!1))
                    },
                    findDiscussionCategoriesByClass,
                    saveUserLikes,
                    findDiccussionByid,
                    deleteDiscussion,
                    handleDiscussionByCategory: s => {
                        t((0, o.gG)({ ...d,
                            active_category: s
                        })), findDiscussionByCategory(s, !0)
                    },
                    handleActiveCategory: s => {
                        t((0, o.dT)(!0)), t((0, o.AL)()), t((0, o.gG)({ ...d,
                            active_category: s
                        }))
                    },
                    saveCommentLike,
                    findPopularDiscussions
                }
            }
        },
        846615: function(t, s) {
            s.Z = () => ({
                validateContent: t => 1 === t.length && "" === t[0].data.content ? null : 1 !== t.length || "" !== t[0].data.content || 0 !== t[0].data.children.length || null
            })
        },
        371508: function(t, s, e) {
            var a = e(835704),
                i = e(282784);
            s.Z = new class {
                async findCategoryByType(t, s) {
                    let e = {
                            service: {
                                micro: "discussion",
                                task: "get-categories",
                                token: this.accessToken
                            },
                            GET: {
                                route: "eca" === s ? "eca/all" : "syllabus/".concat(t)
                            }
                        },
                        {
                            data: i,
                            networkError: n
                        } = await a.Z.post(e);
                    return n || !i || 200 !== i.results.code ? null : (i = i.results.data && i.results.data.length > 0 && i.results.data.map((t, e) => ({ ...t,
                        subject: "sports and games" === t.subject.toLowerCase() ? "Sports - Games " : t.subject,
                        classs: t.classs ? t.classs : "",
                        type: "".concat(s)
                    }))).filter(t => "wajibu club" !== t.subject.toLowerCase())
                }
                async findDiscussionCategoriesByClassData(t) {
                    this.docValue = "discussion_categories_".concat(t.name.replace(/\s+/g, ""));
                    let {
                        data: s
                    } = await i.Z.findLocalData(this.docValue);
                    if (s) return s;
                    let e = await this.findCategoryByType(t.id, "syllabus"),
                        a = await this.findCategoryByType(t.id, "eca"),
                        n = e && e.length > 0 ? a.concat(e) : e && e.length > 0 ? e : null;
                    return n ? (await i.Z.saveDataLocal(this.docValue, n), n) : null
                }
                async findDiscussionByCategoryData(t) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        e = arguments.length > 2 ? arguments[2] : void 0,
                        i = null;
                    console.log("Discussion data *****", i = t && "all-posts" === t.subjectId ? {
                        service: {
                            micro: "discussion",
                            task: "all",
                            token: this.accessToken
                        },
                        GET: {
                            query: "limit=".concat(s.limit, "&page=").concat(s.current_page, "&user_id=").concat(e.isLoggedIn ? e.data.id : null)
                        }
                    } : {
                        service: {
                            micro: "discussion",
                            task: "all",
                            token: this.accessToken
                        },
                        GET: {
                            query: "limit=".concat(s.limit, "&category_id=").concat(t && t.subjectId, "&page=").concat(s.current_page, "&user_id=").concat(e.isLoggedIn ? e.data.id : null)
                        }
                    });
                    let {
                        data: n,
                        networkError: o
                    } = await a.Z.post(i);
                    return !o && (!!n || 200 === n.results.code) && {
                        data: n && n.results.data && n.results.data.length > 0 ? n.results.data : null,
                        total_pages: n.results.total_pages,
                        next_page: n.results.next_page,
                        total_results: n.results.total_results,
                        current_page: n.results.current_page
                    }
                }
                async saveDiscussionData(t) {
                    let s = {
                            service: {
                                micro: "discussion",
                                task: "new-discussion",
                                token: this.accessToken
                            },
                            POST: t
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    return i ? null : e.data && e.data.length > 0 ? e.data : null
                }
                async saveCommentData(t) {
                    let s = {
                            service: {
                                micro: "discussion",
                                task: "new-comment",
                                token: this.accessToken
                            },
                            POST: t
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    return i ? null : 200 === e.code && (e.data && e.data.length > 0 ? e.data : [])
                }
                async findDiscussionCommentData(t, s) {
                    let e = {
                            service: {
                                micro: "discussion",
                                task: "get-comments",
                                token: 12234
                            },
                            GET: {
                                route: "".concat(s, "/").concat(t)
                            }
                        },
                        {
                            data: i,
                            networkError: n
                        } = await a.Z.post(e);
                    return n || 200 !== i.results.code ? null : i.results.data && i.results.data.length > 0 ? i.results.data : null
                }
                async findPopularDiscussionsData() {
                    let t = {
                            service: {
                                micro: "discussion",
                                task: "popular-discussion",
                                token: this.accessToken
                            },
                            GET: {
                                route: "popular-posts",
                                query: "user_id=10354"
                            }
                        },
                        {
                            data: s,
                            networkError: e
                        } = await a.Z.post(t);
                    return e || !s.results || 200 !== s.results.code || s.results.data && 0 === s.results.data.length ? null : s.results.data
                }
                async saveDiscussionLikes(t) {
                    let s = {
                            service: {
                                micro: "discussion",
                                task: "new-reaction",
                                token: this.accessToken
                            },
                            POST: {
                                route: "syllabus" === t.post_type ? "syllabus" : "eca",
                                user_id: t.user_id,
                                discussion_id: t.discussion_id,
                                reaction_type: "like"
                            }
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    return i || 200 !== e.code ? null : e
                }
                async saveCommentLikes(t) {
                    let s = {
                            service: {
                                micro: "discussion",
                                task: "like-comment",
                                token: 12234
                            },
                            POST: {
                                user_id: t.user_id,
                                comment_id: t.comment_id,
                                reaction_type: "like"
                            }
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    return i || 200 !== e.code ? null : e.data.reactions
                }
                async findDiscussionByIdData(t, s, e) {
                    let i = {
                            service: {
                                micro: "discussion",
                                task: "single-post",
                                token: this.accessToken
                            },
                            GET: {
                                route: "single/".concat(s, "/").concat(t),
                                query: "user_id=".concat(e.isLoggedIn ? e.data.id : null)
                            }
                        },
                        {
                            data: n,
                            networkError: o
                        } = await a.Z.post(i);
                    return o || 200 !== n.results.code ? null : n.results.data && n.results.data.length > 0 ? n.results.data : null
                }
                async deletePostData(t) {
                    let s = {
                            service: {
                                micro: "discussion",
                                task: "deletePost",
                                token: this.accessToken
                            },
                            GET: {
                                route: "".concat(t.post_type, "/").concat(t.id)
                            }
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    if (i) return !1
                }
                async findLatestDiscussions() {
                    let t = {
                            service: {
                                micro: "discussion",
                                task: "latest-discussion",
                                token: this.accessToken
                            },
                            GET: {}
                        },
                        {
                            data: s,
                            networkError: e
                        } = await a.Z.post(t);
                    return !e && (200 !== parseInt(s.results.code) ? null : s.results.data)
                }
                async findUserDicsussion(t) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        e = {
                            service: {
                                micro: "discussion",
                                task: "single-post",
                                token: this.accessToken
                            },
                            GET: {
                                route: "user/".concat(t),
                                query: s ? "user_id=".concat(s) : ""
                            }
                        },
                        {
                            data: i,
                            networkError: n
                        } = await a.Z.post(e);
                    return !n && (i.results && 200 === i.results.code && i.results.data && i.results.data.length > 0 ? i.results.data : null)
                }
                async saveTKCommentsAI(t) {
                    let s = {
                            service: {
                                micro: "tichakidevu",
                                task: "kidevu-tasks",
                                token: this.accessToken
                            },
                            POST: t
                        },
                        {
                            data: e,
                            networkError: i
                        } = await a.Z.post(s);
                    return 200 !== e.code ? null : e.data
                }
                constructor() {
                    this.accessToken = parseInt("12234"), this.docValue = ""
                }
            }
        }
    }
]);