(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818], {
        478298: function(e, s, a) {
            "use strict";
            var n = a(564836);
            s.Z = void 0;
            var i = n(a(864938)),
                l = a(785893);
            s.Z = (0, i.default)((0, l.jsx)("path", {
                d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"
            }), "ArrowBackIosNew")
        },
        662674: function(e, s, a) {
            "use strict";
            var n = a(564836);
            s.Z = void 0;
            var i = n(a(864938)),
                l = a(785893);
            s.Z = (0, i.default)((0, l.jsx)("path", {
                d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
            }), "RemoveCircleOutlineSharp")
        },
        511958: function(e, s, a) {
            "use strict";
            var n = a(564836);
            s.Z = void 0;
            var i = n(a(864938)),
                l = a(785893);
            s.Z = (0, i.default)((0, l.jsx)("path", {
                d: "M12.5 10c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m6.5 2c1.11 0 2-.89 2-2 0-1.11-.89-2-2-2-1.11 0-2.01.89-2 2 0 1.11.89 2 2 2M11.99 2.01c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10M5.84 17.12c.68-.54 2.27-1.11 3.66-1.11.07 0 .15.01.23.01.24-.64.67-1.29 1.3-1.86-.56-.1-1.09-.16-1.53-.16-1.3 0-3.39.45-4.73 1.43-.5-1.04-.78-2.2-.78-3.43 0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.2-.27 2.34-.75 3.37-1-.59-2.36-.87-3.24-.87-1.52 0-4.5.81-4.5 2.7v2.78c-2.27-.13-4.29-1.21-5.66-2.86"
            }), "SupervisedUserCircleOutlined")
        },
        950818: function(e, s, a) {
            "use strict";
            var n = a(785893),
                i = a(667294),
                l = a(625662),
                t = a(146574),
                r = a(415861),
                o = a(746901),
                c = a(478298),
                d = a(511958),
                h = a(662674),
                m = a(811163),
                u = a(472581),
                g = a.n(u),
                x = a(402247),
                v = a(341911),
                p = a(815227),
                j = a(571027),
                f = a(675875),
                A = a(588595),
                N = a(31557),
                Z = a(129210);
            s.Z = e => {
                let s = (0, m.useRouter)(),
                    {
                        user: a
                    } = (0, N.Z)(),
                    {
                        addAlertData: u,
                        openAlert: w
                    } = (0, f.Z)(),
                    {
                        userLogin: C
                    } = (0, j.Z)(),
                    [y, k] = i.useState(!1),
                    [S, L] = i.useState(""),
                    [_, b] = i.useState({
                        email: !1,
                        password: !1,
                        social_auth: null
                    }),
                    [W, B] = i.useState({
                        password: "",
                        email: ""
                    }),
                    [I, E] = i.useState(!1),
                    [F, R] = i.useState(!0),
                    [z, G] = i.useState({
                        clicked: !1
                    }),
                    [D, O] = i.useState(null),
                    [P, M] = i.useState(!1),
                    [T, Y] = i.useState(!1);
                i.useState(() => {
                    let initSingle = async () => {
                        let e = v.Z.findAllLoggedAccounts();
                        await A.Z.findInteractionProcess("CHANGE_PASSWORD") ? O(null) : O(e)
                    };
                    initSingle()
                }, []);
                let handleFormChange = e => s => {
                        B({ ...W,
                            social_auth: "",
                            [e]: s.target.value
                        })
                    },
                    handleFormClick = async () => {
                        var e, s;
                        if (E(!1), b({
                                email: !1,
                                password: !1
                            }), k(!0), "" === W.email) return b({
                            email: !0
                        }), k(!1), !1;
                        if ("" === W.password) return b({
                            password: !0
                        }), k(!1), !1;
                        await A.Z.removeInteractionProcess("CHANGE_PASSWORD");
                        let n = await C(W);
                        if (k(!1), !n && void 0 !== n) return E(!0), !1;
                        u({
                            status: "success",
                            content: a.isLoggedIn ? "You have logged in as ".concat(null === (e = a.data) || void 0 === e ? void 0 : e.first_name, " ").concat(null === (s = a.data) || void 0 === s ? void 0 : s.last_name) : ""
                        })
                    },
                    hideErrorAlert = () => {
                        E(!1), k(!1)
                    },
                    handleSingleAccount = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (b({
                                password: !1
                            }), E(!1), e && "number" != typeof e && B({
                                email: W.email,
                                password: ""
                            }), e && "number" == typeof e) {
                            let s = v.Z.findLoggedAcctountById(e);
                            B({
                                email: s[0].user_token.token_id,
                                passowrd: ""
                            }), M(s)
                        }
                        Y(!T)
                    },
                    removeAccounts = e => {
                        v.Z.removeUserAccount(e), O(v.Z.findAllLoggedAccounts())
                    },
                    showRemoveAccountMode = () => {
                        !1 === z.clicked ? G({
                            clicked: !z.clicked
                        }) : !0 === z.clicked && G({
                            clicked: !z.clicked
                        })
                    },
                    showHideLoginForm = () => {
                        B({
                            password: "",
                            email: "",
                            social_auth: ""
                        }), D ? (R(!1), O(!1)) : !1 === D && R(!0)
                    },
                    accountList = e => (0, n.jsx)("div", {
                        children: z.clicked ? (0, n.jsx)(l.Z, {
                            className: g().buttonListWrapper,
                            onClick: () => removeAccounts(e.id),
                            children: (0, n.jsxs)("div", {
                                className: "sd-flex",
                                children: [(0, n.jsx)(p.Yt, {
                                    isLoggedIn: !0,
                                    image: e.image,
                                    size: "tin"
                                }), (0, n.jsxs)("div", {
                                    className: "sd-flex-column p-10",
                                    style: {
                                        width: "200px"
                                    },
                                    children: [(0, n.jsxs)("span", {
                                        className: "fullname",
                                        children: [e.first_name, " ", e.last_name]
                                    }), (0, n.jsx)("div", {
                                        children: (0, n.jsx)("span", {
                                            className: "belowtext",
                                            children: e.email
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    children: (0, n.jsx)("span", {
                                        style: {
                                            fontSize: "13px",
                                            color: "red",
                                            float: "right"
                                        },
                                        children: "Remove"
                                    })
                                })]
                            })
                        }, e.id) : (0, n.jsx)(l.Z, {
                            className: g().buttonListWrapper,
                            onClick: () => handleSingleAccount(e.id),
                            children: (0, n.jsxs)("div", {
                                className: "sd-flex",
                                children: [(0, n.jsx)("div", {
                                    children: (0, n.jsx)(p.Yt, {
                                        isLoggedIn: !0,
                                        image: e.image,
                                        size: "tin"
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "sd-flex-column p-10",
                                    children: [(0, n.jsxs)("span", {
                                        className: "fullname",
                                        children: [e.first_name, " ", e.last_name]
                                    }), (0, n.jsx)("div", {
                                        children: (0, n.jsx)("span", {
                                            className: "belowtext",
                                            children: e.username
                                        })
                                    })]
                                })]
                            })
                        })
                    }, e.id),
                    loggedInAccount = () => (0, n.jsxs)("div", {
                        className: g().sdAccountsWrapper,
                        children: [z.clicked ? (0, n.jsxs)("div", {
                            className: "sd-flex",
                            children: [(0, n.jsx)(l.Z, {
                                onClick: showRemoveAccountMode,
                                children: (0, n.jsx)(c.Z, {})
                            }), (0, n.jsxs)("div", {
                                className: "sd-flex-column",
                                children: [(0, n.jsx)(r.Z, {
                                    variant: "h5",
                                    children: "Remove an account"
                                }), (0, n.jsx)("div", {
                                    children: "From this browser"
                                })]
                            })]
                        }) : (0, n.jsxs)(t.Z, {
                            children: [(0, n.jsx)(r.Z, {
                                variant: "h5",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "Login to Continue"
                            }), (0, n.jsxs)("div", {
                                style: {
                                    fontSize: "16px"
                                },
                                children: ["These are the accounts previous logged in with this browser. ", (0, n.jsx)("b", {
                                    children: "Choose your account to login"
                                })]
                            })]
                        }), (0, n.jsxs)(t.Z, {
                            children: [(0, n.jsx)("div", {
                                className: "mt-30"
                            }), D && D.map(e => accountList(e)), (0, n.jsx)(l.Z, {
                                onClick: showHideLoginForm,
                                className: g().buttonListWrapper,
                                children: (0, n.jsxs)("div", {
                                    className: "sd-flex",
                                    children: [(0, n.jsx)("div", {
                                        style: {
                                            width: "30px"
                                        },
                                        children: (0, n.jsx)(d.Z, {
                                            className: g().authActionButton
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "sd-flex-column p-10",
                                        children: (0, n.jsx)("span", {
                                            className: "fullname",
                                            children: "Use another account"
                                        })
                                    })]
                                })
                            }), !z.clicked && loggedInAccount && (0, n.jsx)(l.Z, {
                                className: g().buttonListWrapper,
                                children: (0, n.jsxs)("div", {
                                    className: "sd-flex",
                                    onClick: showRemoveAccountMode,
                                    children: [(0, n.jsx)("div", {
                                        style: {
                                            width: "30px"
                                        },
                                        children: (0, n.jsx)(h.Z, {
                                            className: g().authActionButton
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "sd-flex-column p-10",
                                        children: (0, n.jsx)("span", {
                                            className: "fullname",
                                            children: "Remove an account"
                                        })
                                    })]
                                })
                            }), (0, n.jsxs)("div", {
                                style: {
                                    marginTop: "20px",
                                    borderTop: "1px solid #ccc",
                                    padding: "10px",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [(0, n.jsx)("div", {
                                    children: "Not registered?"
                                }), (0, n.jsx)(l.Z, {
                                    style: {
                                        textTransform: "none",
                                        textAlign: "left"
                                    },
                                    onClick: () => {
                                        s.push("/auth/register")
                                    },
                                    children: (0, n.jsx)("b", {
                                        children: "Create an account"
                                    })
                                })]
                            })]
                        })]
                    });
                return (0, n.jsxs)("div", {
                    className: g().authFormWrapper,
                    children: [T && (0, n.jsx)("div", {
                        className: "",
                        children: (0, n.jsxs)("div", {
                            noValidate: !0,
                            autoComplete: "off",
                            children: [(0, n.jsxs)("div", {
                                className: "mb-30 sd-flex",
                                children: [(0, n.jsx)(l.Z, {
                                    onClick: handleSingleAccount,
                                    children: (0, n.jsx)(c.Z, {
                                        className: g().cancelButton
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "sd-flex-column",
                                    children: (0, n.jsx)(r.Z, {
                                        variant: "h5",
                                        children: "Login to continue"
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: g().sdSingleFormWrapper,
                                children: (0, n.jsxs)(t.Z, {
                                    children: [P && P.map(e => (0, n.jsxs)("div", {
                                        className: "sd-flex",
                                        children: [(0, n.jsx)("div", {
                                            children: (0, n.jsx)(p.Yt, {
                                                isLoggedIn: !0,
                                                image: e.image,
                                                size: "large"
                                            })
                                        }), (0, n.jsxs)("div", {
                                            className: "sd-flex-column p-10",
                                            children: [(0, n.jsxs)(r.Z, {
                                                variant: "h5",
                                                children: ["Hi, ", "".concat(e.first_name)]
                                            }), (0, n.jsx)("div", {
                                                children: (0, n.jsx)("span", {
                                                    className: "",
                                                    children: e.username
                                                })
                                            }), (0, n.jsx)(x.Pv, {
                                                handleOnChange: handleFormChange,
                                                value: W.email,
                                                fieldName: "email"
                                            })]
                                        })]
                                    }, e.id)), I && (0, n.jsx)("div", {
                                        className: "".concat(g().alert, " mt-10"),
                                        children: (0, n.jsx)(o.Z, {
                                            variant: "outlined",
                                            severity: "error",
                                            onClose: hideErrorAlert,
                                            children: "Wrong password. Please try again"
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-10",
                                        children: (0, n.jsx)(x.sm, {
                                            handleOnChange: handleFormChange,
                                            fieldName: "password",
                                            error: _.password,
                                            value: W.password,
                                            label: "Enter your password"
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-30",
                                        children: y ? (0, n.jsx)(l.Z, {
                                            disabled: !0,
                                            onClick: handleFormClick,
                                            className: g().authActionButton,
                                            variant: "contained",
                                            color: "primary",
                                            children: "Loading"
                                        }) : (0, n.jsx)(l.Z, {
                                            onClick: handleFormClick,
                                            className: g().authActionButton,
                                            variant: "contained",
                                            color: "primary",
                                            children: "Login"
                                        })
                                    }), (0, n.jsx)("div", {
                                        className: "mt-30",
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: (0, n.jsx)(l.Z, {
                                            style: {
                                                textTransform: "none"
                                            },
                                            onClick: () => s.push("/auth/forgot-password"),
                                            children: "Forgot password?"
                                        })
                                    })]
                                })
                            })]
                        })
                    }), !T && (0, n.jsx)("div", {
                        children: D && loggedInAccount()
                    }), !D && (0, n.jsxs)("div", {
                        children: [F ? (0, n.jsx)(t.Z, {
                            children: (0, n.jsx)(r.Z, {
                                variant: "h5",
                                children: "Login to continue"
                            })
                        }) : (0, n.jsxs)("div", {
                            className: "sd-flex",
                            children: [(0, n.jsx)(l.Z, {
                                onClick: showHideLoginForm,
                                children: (0, n.jsx)(c.Z, {
                                    className: g().cancelButton
                                })
                            }), (0, n.jsx)("div", {
                                className: "sd-flex-column",
                                children: (0, n.jsx)(r.Z, {
                                    variant: "h5",
                                    children: "Login to continue"
                                })
                            })]
                        }), (0, n.jsx)(t.Z, {
                            children: I && (0, n.jsx)("div", {
                                className: "".concat(g().alertError, " mt-10"),
                                children: (0, n.jsx)(o.Z, {
                                    variant: "outlined",
                                    severity: "error",
                                    onClose: hideErrorAlert,
                                    children: "Wrong login credentials. Please try again"
                                })
                            })
                        }), (0, n.jsxs)(t.Z, {
                            children: [(0, n.jsxs)("form", {
                                children: [(0, n.jsx)("div", {
                                    className: "mt-30",
                                    children: (0, n.jsx)(x.FY, {
                                        handleOnChange: handleFormChange,
                                        value: W.email,
                                        fieldName: "email",
                                        error: _.email,
                                        label: "Username or email"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-20",
                                    children: (0, n.jsx)(x.sm, {
                                        handleOnChange: handleFormChange,
                                        fieldName: "password",
                                        error: _.password,
                                        value: W.password,
                                        label: "Enter your password"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "mt-30",
                                    children: y ? (0, n.jsx)(l.Z, {
                                        disabled: !0,
                                        style: {
                                            textTransform: "capitalize"
                                        },
                                        onClick: handleFormClick,
                                        className: g().authActionButton,
                                        variant: "contained",
                                        color: "primary",
                                        children: "Loading"
                                    }) : (0, n.jsx)(l.Z, {
                                        onClick: handleFormClick,
                                        style: {
                                            textTransform: "capitalize"
                                        },
                                        className: g().authActionButton,
                                        variant: "contained",
                                        color: "primary",
                                        children: "Login"
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "mt-20",
                                    children: ["Not registered? ", (0, n.jsx)(l.Z, {
                                        style: {
                                            textTransform: "none"
                                        },
                                        onClick: () => s.push("/auth/register"),
                                        children: "Create account"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "mt-10",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: (0, n.jsx)(l.Z, {
                                        style: {
                                            textTransform: "none"
                                        },
                                        onClick: () => s.push("/auth/forgot-password"),
                                        children: "Forgot password?"
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: g().separatorContainer,
                                children: (0, n.jsx)("span", {
                                    className: g().innerSeparator,
                                    children: (0, n.jsx)("span", {
                                        children: "OR"
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "mt-30",
                                children: (0, n.jsx)(Z.Z, {})
                            })]
                        })]
                    })]
                })
            }
        },
        129210: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return googleauth
                }
            });
            var n = a(785893),
                i = a(667294),
                l = a(686426),
                t = a(571027),
                r = a(845927),
                o = a(811163),
                c = a(835704),
                d = a(675875),
                googleauth_useGoogleAuth = () => {
                    let {
                        userLogin: e
                    } = (0, t.Z)(), {
                        addAlertData: s
                    } = (0, d.Z)(), a = (0, o.useRouter)(), [n, l] = i.useState(null);
                    i.useEffect(() => {
                        if (!n) return () => {};
                        let initGoogleProfile = async () => {
                            let {
                                data: e
                            } = await c.Z.googleProfile(n);
                            googleSignIn(e)
                        };
                        initGoogleProfile()
                    }, [n]);
                    let googleSignInAction = async function(e) {
                            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            s(!0), l(e)
                        },
                        googleSignIn = async s => {
                            if (!s) return;
                            let a = {
                                    password: s.id,
                                    email: s.email,
                                    fname: s.given_name,
                                    lname: s.given_name,
                                    image: s.picture,
                                    googel_id: s.id
                                },
                                n = {
                                    email: s.email,
                                    password: s.id,
                                    social_auth: {
                                        id: s.id,
                                        name: "google"
                                    }
                                };
                            await e(n) || googleRegister(a)
                        },
                        googleRegister = async n => {
                            let i = "Student";
                            if (n = { ...n,
                                    email: "",
                                    username: n.email,
                                    create_form: !0,
                                    password: n.password,
                                    username: n.email,
                                    confirm_password: n.password,
                                    phone: "-",
                                    gender: "-",
                                    group: i,
                                    social_auth: {
                                        id: n.password,
                                        name: "google"
                                    }
                                }, !await r.Z.processRegisterData(n, i)) return;
                            let l = {
                                email: n.username,
                                password: n.password,
                                social_auth: {
                                    id: n.password,
                                    name: "google"
                                }
                            };
                            await e(l) && (s({
                                status: "success",
                                content: "You have registered as ".concat(n.lname, " ").concat(n.fname)
                            }), a.push("/auth/edit"))
                        };
                    return {
                        googleSignInAction
                    }
                },
                h = a(947442),
                m = a.n(h),
                u = a(625662),
                g = a(425675),
                x = a.n(g),
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
                    } = googleauth_useGoogleAuth(), [s, a] = i.useState(!1), t = (0, l.Nq)({
                        onSuccess: s => e(s, a),
                        enable_serial_consent: !0
                    });
                    return (0, n.jsx)("div", {
                        children: s ? (0, n.jsxs)(u.Z, {
                            style: {
                                textTransform: "none"
                            },
                            variant: "outlined",
                            className: m().signButtonWrapper,
                            disabled: !0,
                            children: [(0, n.jsx)(x(), {
                                src: v,
                                width: 30,
                                height: 30
                            }), "Processing ...."]
                        }) : (0, n.jsxs)(u.Z, {
                            style: {
                                textTransform: "none"
                            },
                            variant: "outlined",
                            className: m().signButtonWrapper,
                            onClick: () => t(),
                            children: [(0, n.jsx)(x(), {
                                src: v,
                                width: 30,
                                height: 30
                            }), "Continue with Google"]
                        })
                    })
                }
        },
        947442: function(e) {
            e.exports = {
                signButtonWrapper: "GoogleSignInButton_signButtonWrapper__OztBs"
            }
        }
    }
]);