(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5669], {
        478298: function(e, a, i) {
            "use strict";
            var o = i(564836);
            a.Z = void 0;
            var d = o(i(864938)),
                s = i(785893);
            a.Z = (0, d.default)((0, s.jsx)("path", {
                d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
            }), "ArrowBackIosNew")
        },
        753074: function(e, a, i) {
            "use strict";
            var o = i(564836);
            a.Z = void 0;
            var d = o(i(864938)),
                s = i(785893);
            a.Z = (0, d.default)((0, s.jsx)("path", {
                d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1"
            }), "Forum")
        },
        870655: function(e, a, i) {
            "use strict";
            var o = i(564836);
            a.Z = void 0;
            var d = o(i(864938)),
                s = i(785893);
            a.Z = (0, d.default)((0, s.jsx)("path", {
                d: "M8 5v14l11-7z"
            }), "PlayArrow")
        },
        376870: function(e, a, i) {
            "use strict";
            var o = i(564836);
            a.Z = void 0;
            var d = o(i(864938)),
                s = i(785893);
            a.Z = (0, d.default)((0, s.jsx)("path", {
                d: "M1 21h4V9H1zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73z"
            }), "ThumbUp")
        },
        795842: function(e, a, i) {
            "use strict";
            var o = i(785893),
                d = i(625662),
                s = i(606251),
                r = i.n(s),
                t = i(492227),
                n = i(14416),
                c = i(870655);
            a.Z = e => {
                let {
                    findVideoById: a
                } = (0, t.Z)(), {
                    selected_video_group: i
                } = (0, n.v9)(e => e.videos_data);
                return (0, o.jsx)("div", {
                    className: "modal" == e.source ? "".concat(r().videoCardMainWrapper, " ").concat(r().smallVideoCard) : "".concat(r().videoCardMainWrapper),
                    children: e.video_array && e.video_array.map((s, t) => (0, o.jsxs)("div", {
                        className: i.selected_video.data && parseInt(i.selected_video.data.id) === parseInt(s.id) ? "".concat(r().videoCard, " ").concat(r().activeCard) : "".concat(r().videoCard),
                        children: [(0, o.jsxs)(d.Z, {
                            className: r().actionButton,
                            onClick: () => a(s, e.data),
                            children: [(0, o.jsx)("div", {
                                className: r().imageCover,
                                style: {
                                    backgroundImage: "url(https://i1.ytimg.com/vi/".concat(s.video_url, "/mqdefault.jpg)")
                                }
                            }), (0, o.jsxs)("div", {
                                className: r().videoDescriptins,
                                children: [(0, o.jsx)("b", {
                                    children: s.video_name
                                }), "modal" !== e.source && (0, o.jsx)("div", {
                                    style: {
                                        fontSize: "16px"
                                    },
                                    children: s.concept_name
                                })]
                            })]
                        }), (0, o.jsx)("div", {
                            className: r().videoOverlayWrapper,
                            onClick: () => a(s, e.data),
                            children: (0, o.jsx)(d.Z, {
                                children: (0, o.jsx)(c.Z, {
                                    style: {
                                        fontSize: "50px"
                                    }
                                })
                            })
                        })]
                    }, t))
                })
            }
        },
        735669: function(e, a, i) {
            "use strict";
            i.d(a, {
                Z: function() {
                    return videos_VideoModal
                }
            });
            var o = i(785893),
                d = i(667294),
                s = i(606251),
                r = i.n(s),
                t = i(484818),
                n = i(14416),
                c = i(795842),
                l = i(625662),
                _ = i(492227),
                p = i(478298),
                v = i(415861),
                u = i(753074),
                m = i(376870),
                V = i(622961),
                W = i(815227),
                videos_VideoDetails = e => (0, o.jsxs)("div", {
                    className: r().videoDetailsWrapper,
                    children: [(0, o.jsx)(W.XY, {
                        size: "medium",
                        image: e.videos.group_videos.subject.url,
                        name: e.videos.selected_video.data.test_name,
                        description: e.videos.group_videos.subject.name
                    }), (0, o.jsx)(v.Z, {
                        style: {
                            marginTop: "10px"
                        },
                        children: (0, o.jsx)("b", {
                            children: e.videos.selected_video.data.video_name
                        })
                    }), (0, o.jsxs)("div", {
                        className: r().videoStatsMainWrapper,
                        children: [(0, o.jsx)(l.Z, {
                            startIcon: (0, o.jsx)(u.Z, {}),
                            children: e.videos.selected_video.data.counts.total_comments
                        }), (0, o.jsx)(l.Z, {
                            startIcon: (0, o.jsx)(m.Z, {}),
                            children: e.videos.selected_video.data.counts.total_likes
                        }), (0, o.jsx)(l.Z, {
                            startIcon: (0, o.jsx)(V.Z, {}),
                            children: e.videos.selected_video.data.counts.total_views
                        })]
                    })]
                }),
                h = i(624039),
                f = i(811163),
                j = i(94746),
                videos_VideoModal = () => {
                    var e;
                    let a = (0, f.useRouter)(),
                        {
                            user: i,
                            showLoginForm: s,
                            saveServiceRequireLogin: v
                        } = (0, h.Z)(),
                        {
                            allowScroll: u,
                            blockScroll: m
                        } = (0, t.Z)(),
                        {
                            selected_video_group: V
                        } = (0, n.v9)(e => e.videos_data),
                        {
                            saveVideoComment: x,
                            handleOpenVideoModal: g
                        } = (0, _.Z)(),
                        {
                            trackFeature: y
                        } = (0, j.Z)();
                    return d.useEffect(() => {
                        m()
                    }, []), d.useEffect(() => {
                        y({
                            feature_name: "practical_video",
                            feature_description: "Watch a video",
                            platform: "web",
                            action: "watch_video",
                            more_info: {
                                subject_name: V.selected_video.data.subject_name,
                                video_name: V.selected_video.data.video_name
                            }
                        })
                    }, [a]), (0, o.jsxs)("div", {
                        className: "".concat(r().videoModalWrapper, " scale-in-ver-center_"),
                        children: [(0, o.jsxs)("div", {
                            className: r().videoModalLeft,
                            children: [(0, o.jsx)("div", {
                                className: r().backButtonWrapper,
                                children: (0, o.jsxs)(l.Z, {
                                    onClick: () => {
                                        u(), g()
                                    },
                                    children: [(0, o.jsx)(p.Z, {}), " Back"]
                                })
                            }), (0, o.jsxs)("div", {
                                className: r().videoPlayerMainWrapper,
                                children: [(0, o.jsxs)("div", {
                                    className: r().videoPlayerWrapper,
                                    children: [(0, o.jsx)("iframe", {
                                        className: r().youtubeVideoFrameWrapper,
                                        src: "https://www.youtube.com/embed/".concat(V.selected_video.data.video_url, "?rel=0&enablejsapi=1"),
                                        frameBorder: "0"
                                    }), (0, o.jsx)("div", {
                                        className: r().videoDetailsHolderMobile,
                                        children: (0, o.jsx)(videos_VideoDetails, {
                                            videos: V
                                        })
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: r().videoSuggestionsWrapper,
                                    children: (0, o.jsx)("div", {
                                        className: r().videoSuggestionInnderWrapper,
                                        children: (0, o.jsx)(c.Z, {
                                            data: V.group_videos,
                                            video_array: V.group_videos.videos,
                                            source: "modal"
                                        })
                                    })
                                })]
                            })]
                        }), (0, o.jsxs)("div", {
                            className: r().videoModalRight,
                            children: [(0, o.jsx)("div", {
                                className: r().videoDetailsHolderWeb,
                                children: (0, o.jsx)(videos_VideoDetails, {
                                    videos: V
                                })
                            }), (0, o.jsxs)("div", {
                                className: r().commentWrapper,
                                children: [(0, o.jsxs)("div", {
                                    className: r().commentHeader,
                                    children: ["Comments (", V.selected_video.data.counts.total_comments, ")"]
                                }), (0, o.jsx)(W.EQ, {
                                    isLoggedIn: i.isLoggedIn,
                                    handleSaveComment: () => {
                                        if (!i.isLoggedIn) {
                                            v({
                                                action: "aceess_video_comment_form"
                                            }), s();
                                            return
                                        }
                                        y({
                                            feature_name: "practical_video",
                                            feature_description: "Comment on a practical video",
                                            platform: "web",
                                            action: "comment",
                                            more_info: {
                                                subject_name: V.selected_video.data.subject_name,
                                                video_name: V.selected_video.data.video_name
                                            }
                                        }), x(V.selected_video.data)
                                    },
                                    avatar: null === (e = i.data) || void 0 === e ? void 0 : e.image
                                }), (0, o.jsx)(W.Qv, {
                                    data_array: V.selected_video.comments
                                })]
                            })]
                        })]
                    })
                }
        },
        492227: function(e, a, i) {
            "use strict";
            i.d(a, {
                Z: function() {
                    return useVideos_DataProcess
                }
            });
            var o = i(14416),
                d = i(835704);
            i(282784), i(881829);
            var s = new class {
                    async fuidAllVideosData() {
                        let e = {
                                service: {
                                    micro: "sd-middleware",
                                    task: "practical-video-groups",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "groups"
                                }
                            },
                            {
                                data: a,
                                networkError: i
                            } = await d.Z.post(e);
                        return i || 200 !== a.results.code ? null : a.results.data.map(e => ({ ...e,
                            subject: {
                                name: e.subject_name,
                                url: e.subject_icon ? e.subject_icon : "https://sdimg.blob.core.windows.net/images/ShuleDirect/20446/Original/ChemistryIcon_1451933893645.png"
                            }
                        }))
                    }
                    async findVideoCommentsData(e) {
                        let a = {
                                service: {
                                    micro: "sd-middleware",
                                    task: "practical-comments",
                                    token: this.accessToken
                                },
                                GET: {
                                    route: "".concat(e.id)
                                }
                            },
                            {
                                data: i,
                                networkError: o
                            } = await d.Z.post(a);
                        return o || 200 !== i.results.code ? null : i.results.data.map(e => ({ ...e,
                            user: e.user_info
                        }))
                    }
                    async saveVideosCommentData(e) {
                        let a = {
                                service: {
                                    micro: "sd-middleware",
                                    task: "practical-post-comment",
                                    token: this.accessToken
                                },
                                POST: {
                                    route: "post-comment",
                                    video_id: parseInt(e.video_id),
                                    user_id: parseInt(e.user_id),
                                    type: "comment",
                                    comment_content: e.content
                                }
                            },
                            {
                                data: i,
                                networkError: o
                            } = await d.Z.post(a);
                        if (o) return null;
                        if (200 !== i.code) return !1;
                        let s = [i.results];
                        return s.map(e => ({ ...e,
                            user: e.user_info
                        }))
                    }
                    constructor() {
                        this.accessToken = parseInt("12234"), this.docValue = ""
                    }
                },
                r = i(640952),
                t = i(624039),
                n = i(810026),
                c = i(846615),
                useVideos_DataProcess = () => {
                    let e = (0, o.I0)(),
                        {
                            user: a
                        } = (0, t.Z)(),
                        {
                            validateContent: i
                        } = (0, c.Z)(),
                        {
                            textblock_data: d
                        } = (0, o.v9)(e => e.texteditor_data),
                        findAllVideos = async () => {
                            let a = await s.fuidAllVideosData();
                            e((0, r.Gl)(a))
                        },
                        findVideoById = async (a, i) => {
                            e((0, r.TX)(!0)), e((0, r.G7)({
                                selected_video: {
                                    data: a,
                                    comments: null
                                },
                                group_videos: i
                            })), findVideoComments(a)
                        },
                        findVideoComments = async a => {
                            let i = await s.findVideoCommentsData(a);
                            e((0, r.Z_)({
                                type: "replace",
                                data: i
                            }))
                        },
                        saveVideoComment = async o => {
                            let t = null == a ? void 0 : a.data.id,
                                c = {
                                    video_id: o.id,
                                    user_id: t,
                                    content: d
                                };
                            if (!i(d)) return null;
                            let l = await s.saveVideosCommentData(c);
                            l && (e((0, n.E8)()), e((0, r.Z_)({
                                type: "prepend",
                                data: l
                            })))
                        };
                    return {
                        findAllVideos,
                        findVideoById,
                        handleOpenVideoModal: () => {
                            e((0, r.ji)())
                        },
                        saveVideoComment
                    }
                }
        },
        606251: function(e) {
            e.exports = {
                videoModalWrapper: "Videos_videoModalWrapper__zUqwH",
                videoModalLeft: "Videos_videoModalLeft__yShsZ",
                backButtonWrapper: "Videos_backButtonWrapper__3UWMY",
                videoPlayerMainWrapper: "Videos_videoPlayerMainWrapper__J48e5",
                videoPlayerWrapper: "Videos_videoPlayerWrapper__qPJXT",
                youtubeVideoFrameWrapper: "Videos_youtubeVideoFrameWrapper__lhQpa",
                videoFrameWrapper: "Videos_videoFrameWrapper__yirW0",
                videoSuggestionsWrapper: "Videos_videoSuggestionsWrapper__AIPN6",
                videoSuggestionInnderWrapper: "Videos_videoSuggestionInnderWrapper__kunD6",
                videoModalRight: "Videos_videoModalRight__gsOH3",
                commentWrapper: "Videos_commentWrapper__4lCDE",
                commentHeader: "Videos_commentHeader__TgKxc",
                videoDetailsWrapper: "Videos_videoDetailsWrapper__QtuRI",
                videoStatsMainWrapper: "Videos_videoStatsMainWrapper__MDfJN",
                mainVideoCarouselWrapper: "Videos_mainVideoCarouselWrapper__FM01B",
                videoCarouselWrapper: "Videos_videoCarouselWrapper__Tnfu0",
                carouselLeftWrapper: "Videos_carouselLeftWrapper__YNs_D",
                headerWraper: "Videos_headerWraper__jGMWB",
                videoDescriptionWrapper: "Videos_videoDescriptionWrapper__8dyPM",
                carouselRightWrapper: "Videos_carouselRightWrapper__xtMw_",
                videoButtonWrapper: "Videos_videoButtonWrapper__lNQNj",
                playButton: "Videos_playButton__Lv_Px",
                backgroundVideoWrapper: "Videos_backgroundVideoWrapper__IQGlR",
                videoOverlay: "Videos_videoOverlay__c_VLh",
                videoGroupMainWrapper: "Videos_videoGroupMainWrapper__QSAHd",
                videoGroupListWrapper: "Videos_videoGroupListWrapper__Nol56",
                wrapper: "Videos_wrapper__VAroW",
                playAllButton: "Videos_playAllButton__fc0TA",
                videoGroupDetails: "Videos_videoGroupDetails__iDfc4",
                avatarWrapper: "Videos_avatarWrapper__W61cw",
                videoCardMainWrapper: "Videos_videoCardMainWrapper__kMARv",
                videoCard: "Videos_videoCard__dXu9o",
                videoOverlayWrapper: "Videos_videoOverlayWrapper__XBmpz",
                videoHoverActionButton: "Videos_videoHoverActionButton__fT8tk",
                videoDescriptins: "Videos_videoDescriptins__PtFlZ",
                actionButton: "Videos_actionButton__VMXPk",
                imageCover: "Videos_imageCover__uuBQu",
                activeCard: "Videos_activeCard__fqbQm",
                smallVideoCard: "Videos_smallVideoCard__xTYed",
                videoDetailsHolderWeb: "Videos_videoDetailsHolderWeb__ichia",
                videoDetailsHolderMobile: "Videos_videoDetailsHolderMobile__lcWOT",
                segmentWrapper: "Videos_segmentWrapper__36oDW"
            }
        }
    }
]);