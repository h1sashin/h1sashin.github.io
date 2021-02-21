;(this.webpackJsonpunnamed = this.webpackJsonpunnamed || []).push([
    [0],
    {
        20: function (n) {
            n.exports = JSON.parse('{"zIndex":1}')
        },
        55: function (n, e, t) {
            'use strict'
            t.r(e)
            var i = t(0),
                r = t(1),
                c = t(9),
                a = t.n(c),
                o = t(2),
                s = t(3),
                l = t.p + 'static/media/wallpaper.06c1738c.jpg'
            function u() {
                var n = Object(o.a)([
                    "\n  body {\n    font-family: 'Ubuntu', sans-serif;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    position: relative;\n    padding: 0;\n    background-image: url(",
                    ');\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n\n  button:focus {\n    outline: 0;\n  }\n\n  h1 {\n    margin: 0; \n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n',
                ])
                return (
                    (u = function () {
                        return n
                    }),
                    n
                )
            }
            var d = Object(s.a)(u(), l),
                g = t(4),
                A = function (n) {
                    return { type: 'OPEN_APP', payload: { app: n } }
                },
                p = function (n) {
                    return {
                        type: 'MINIMIZE_APP',
                        payload: { app: n },
                    }
                }
            function h() {
                var n = Object(o.a)([
                    "\n        &:after {\n            content: '';\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            height: 4px;\n            width: 100%;\n            background: red;\n        }\n    ",
                ])
                return (
                    (h = function () {
                        return n
                    }),
                    n
                )
            }
            function b() {
                var n = Object(o.a)([
                    "\n    height: 100%;\n    margin-left: 64px;\n    border: none;\n    background: transparent;\n    font-size: 1em;\n    font-family: 'Ubuntu', sans-serif;\n    font-weight: 300;\n    color: white;\n    position: relative;\n    &:focus {\n        outline: 0;\n    }\n    ",
                    '\n',
                ])
                return (
                    (b = function () {
                        return n
                    }),
                    n
                )
            }
            var f = s.c.button(b(), function (n) {
                    return n.isActive && Object(s.b)(h())
                }),
                j = Object(g.b)(null, function (n) {
                    return {
                        openApp: function (e) {
                            return n(A(e))
                        },
                        minimizeApp: function (e) {
                            return n(p(e))
                        },
                    }
                })(function (n) {
                    var e = n.isActive,
                        t = n.appName,
                        r = n.openApp,
                        c = n.minimizeApp
                    return Object(i.jsx)(f, {
                        onClick: function () {
                            e ? c(t) : r(t)
                        },
                        isActive: e,
                        children: t,
                    })
                }),
                x = Object(g.b)(function (n) {
                    return { files: n.files }
                })(function (n) {
                    var e = n.files,
                        t = e.isOpen,
                        r = e.appName
                    return Object(i.jsx)(j, {
                        appName: r,
                        isActive: t,
                    })
                }),
                m = Object(g.b)(function (n) {
                    return { settings: n.settings }
                })(function (n) {
                    var e = n.settings,
                        t = e.isOpen,
                        r = e.appName
                    return Object(i.jsx)(j, {
                        appName: r,
                        isActive: t,
                    })
                }),
                O = t(6)
            function w() {
                var n = Object(o.a)([
                    '\n    font-size: 1em;\n    height: 100%;\n    display: flex;\n    align-items: center;\n',
                ])
                return (
                    (w = function () {
                        return n
                    }),
                    n
                )
            }
            var C = s.c.div(w()),
                B = function () {
                    var n = Object(r.useState)(new Date()),
                        e = Object(O.a)(n, 2),
                        t = e[0],
                        c = e[1]
                    Object(r.useEffect)(function () {
                        setInterval(function () {
                            c(new Date())
                        }, 6e4)
                    })
                    var a = function (n) {
                        return n < 10 ? '0'.concat(n) : n
                    }
                    return Object(i.jsxs)(C, {
                        children: [
                            a(t.getHours()),
                            ' : ',
                            a(t.getMinutes()),
                        ],
                    })
                },
                E = Object(g.b)(function (n) {
                    return { mailbox: n.mailbox }
                })(function (n) {
                    var e = n.mailbox,
                        t = e.isOpen,
                        r = e.appName
                    return Object(i.jsx)(j, {
                        appName: r,
                        isActive: t,
                    })
                }),
                v = Object(g.b)(function (n) {
                    return { console: n.console }
                })(function (n) {
                    var e = n.console,
                        t = e.isOpen,
                        r = e.appName
                    return Object(i.jsx)(j, {
                        appName: r,
                        isActive: t,
                    })
                })
            function Q() {
                var n = Object(o.a)([
                    '\n    width: 98vw;\n    height: 4vh;\n    background: #181818;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    padding: 0 1vw;\n    color: white;\n    justify-content: space-between;\n    opacity: 0.9;\n    font-size: 1.5em;\n    \n    div {\n        height: 100%;\n        display: flex;\n        align-items: center;\n    }\n',
                ])
                return (
                    (Q = function () {
                        return n
                    }),
                    n
                )
            }
            var y = s.c.div(Q()),
                z = function () {
                    return Object(i.jsxs)(y, {
                        children: [
                            Object(i.jsxs)('div', {
                                children: [
                                    'Apps:',
                                    Object(i.jsx)(x, {}),
                                    Object(i.jsx)(E, {}),
                                    Object(i.jsx)(v, {}),
                                    Object(i.jsx)(m, {}),
                                ],
                            }),
                            Object(i.jsx)(B, {}),
                        ],
                    })
                },
                I = t.p + 'static/media/zse.81ceb844.png',
                k = t.p + 'static/media/clevercode.9c4dcf8c.png',
                D = t.p + 'static/media/eduweb.b12733e3.png',
                M = t.p + 'static/media/zetosa.79c7fcc4.png',
                P = t.p + 'static/media/cke.3cc35668.png',
                S = t.p + 'static/media/strefakursow.544b84db.png',
                J = t.p + 'static/media/js-certificate.e7ecb28a.pdf',
                F =
                    t.p +
                    'static/media/python-certificate.65ae3063.pdf',
                U = t.p + 'static/media/html.33745ead.png',
                Y = t.p + 'static/media/javascript.2e10b2a2.png',
                T = t.p + 'static/media/css.4e67641b.png',
                K = t.p + 'static/media/react.cd4ab684.png',
                R = t.p + 'static/media/php.1ec17c11.png',
                G = t.p + 'static/media/mysql.4676ad98.png',
                q = [
                    {
                        assign: 'portfolio',
                        status: 'done',
                        name: 'Portfolio',
                        photo:
                            t.p +
                            'static/media/portfolio.94b033f1.png',
                        github:
                            'https://github.com/Hisashin7331/portfolio',
                        live: '',
                    },
                    {
                        assign: 'portfolio',
                        status: 'undone',
                        name: 'exPortfolio',
                        photo: '',
                        github:
                            'https://github.com/Hisashin7331/notPortfolio',
                        live: '',
                    },
                ],
                Z = [
                    {
                        name: 'education',
                        assign: 'resume',
                        education: [
                            {
                                id: 1,
                                school:
                                    'Zesp\xf3\u0142 Szk\xf3\u0142 Elektrycznych',
                                field: 'IT Specialist',
                                year: '2016 - 2020',
                                logo: I,
                            },
                        ],
                    },
                    {
                        name: 'experience',
                        assign: 'resume',
                        experience: [
                            {
                                id: 1,
                                type: 'practice',
                                company: 'ZETO S.A.',
                                position: 'PC Service',
                                year: '2018',
                                logo: M,
                            },
                            {
                                id: 2,
                                type: 'intern',
                                company: 'Clever Code',
                                position: 'PHP dev',
                                year: '2019',
                                logo: k,
                            },
                        ],
                    },
                    {
                        name: 'certificates',
                        assign: 'resume',
                        certificates: [
                            {
                                id: 1,
                                name: 'IT Specialist',
                                organizer: 'CKE',
                                year: '2020',
                                logo: P,
                                doc: '',
                            },
                            {
                                id: 2,
                                name:
                                    'Foundations of Python Programming',
                                organizer: 'strefakursow.pl',
                                year: '2020',
                                logo: S,
                                doc: F,
                            },
                            {
                                id: 3,
                                name:
                                    'JavaScript Ecosystem: Introduction',
                                organizer: 'strefakursow.pl',
                                year: '2020',
                                logo: S,
                                doc: J,
                            },
                            {
                                id: 4,
                                name: 'React path',
                                organizer: 'eduweb.pl',
                                year: '2020',
                                logo: D,
                                doc: '',
                            },
                        ],
                    },
                    {
                        name: 'skills',
                        assign: 'resume',
                        skills: [
                            {
                                id: 1,
                                name: 'HTML',
                                level: 4,
                                icon: U,
                            },
                            { id: 2, name: 'CSS', level: 4, icon: T },
                            {
                                id: 3,
                                name: 'JavaScript',
                                level: 3,
                                icon: Y,
                            },
                            {
                                id: 4,
                                name: 'React',
                                level: 3,
                                icon: K,
                            },
                            { id: 5, name: 'php', level: 1, icon: R },
                            {
                                id: 6,
                                name: 'Python',
                                level: 1,
                                icon:
                                    'data:image/png;base64,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',
                            },
                            {
                                id: 7,
                                name: 'MySQL',
                                level: 2,
                                icon: G,
                            },
                        ],
                    },
                ],
                N = t(33),
                L = t.p + 'static/media/close-white.b92a3e65.svg',
                V = t.p + 'static/media/minimize-white.e3f92c39.svg',
                H =
                    t.p +
                    'static/media/fullscreen-white.f3e57bce.svg',
                W =
                    t.p +
                    'static/media/fullscreen_exit-white.9691f7ef.svg'
            function X() {
                var n = Object(o.a)([
                    '\n        background-image: url(',
                    ');\n        &:hover {\n            background-color: red;\n        }\n    ',
                ])
                return (
                    (X = function () {
                        return n
                    }),
                    n
                )
            }
            function _() {
                var n = Object(o.a)([
                    '\n        background-image: url(',
                    ');\n    ',
                ])
                return (
                    (_ = function () {
                        return n
                    }),
                    n
                )
            }
            function $() {
                var n = Object(o.a)([
                    '\n        background-image: url(',
                    ');\n    ',
                ])
                return (
                    ($ = function () {
                        return n
                    }),
                    n
                )
            }
            function nn() {
                var n = Object(o.a)([
                    '\n    height: 100%;\n    width: 56px;\n    background-size: 35%;\n    background-repeat: no-repeat;\n    background-color: transparent;\n    border: none;\n    background-position: center;\n    &:focus {\n        outline: 0;\n    }\n    &:hover {\n        background-color: #141414;\n    }\n    ',
                    '\n    ',
                    '\n    ',
                    '\n',
                ])
                return (
                    (nn = function () {
                        return n
                    }),
                    n
                )
            }
            var en = s.c.button(
                    nn(),
                    function (n) {
                        return (
                            'minimize' === n.action &&
                            Object(s.b)($(), V)
                        )
                    },
                    function (n) {
                        return (
                            'maximize' === n.action &&
                            Object(s.b)(_(), n.isMaximized ? W : H)
                        )
                    },
                    function (n) {
                        return (
                            'exit' === n.action && Object(s.b)(X(), L)
                        )
                    },
                ),
                tn = function (n) {
                    var e = n.onClick,
                        t = n.action,
                        r = n.appName,
                        c = n.isMaximized
                    return Object(i.jsx)(en, {
                        onClick: function () {
                            return e(r)
                        },
                        action: t,
                        isMaximized: c,
                    })
                }
            function rn() {
                var n = Object(o.a)(['\n    height: 100%;\n'])
                return (
                    (rn = function () {
                        return n
                    }),
                    n
                )
            }
            function cn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 40px;\n    background: black;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: white;\n    overflow: auto;\n    h1 {\n        font-size: 16px;\n        padding-left: 16px;\n    }\n',
                ])
                return (
                    (cn = function () {
                        return n
                    }),
                    n
                )
            }
            var an = s.c.div(cn()),
                on = s.c.div(rn()),
                sn = function (n) {
                    var e = n.exit,
                        t = n.minimize,
                        r = n.maximize,
                        c = n.appName,
                        a = n.isMaximized
                    return Object(i.jsxs)(an, {
                        className: 'dragHandler',
                        children: [
                            Object(i.jsx)('h1', { children: c }),
                            Object(i.jsxs)(on, {
                                children: [
                                    Object(i.jsx)(tn, {
                                        onClick: t,
                                        action: 'minimize',
                                        appName: c,
                                    }),
                                    Object(i.jsx)(tn, {
                                        onClick: r,
                                        action: 'maximize',
                                        appName: c,
                                        isMaximized: a,
                                    }),
                                    Object(i.jsx)(tn, {
                                        onClick: e,
                                        action: 'exit',
                                        appName: c,
                                    }),
                                ],
                            }),
                        ],
                    })
                },
                ln = t(20)
            function un() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: calc(100% - 40px);\n    position: relative;\n    bottom: 0;\n    overflow: auto;\n',
                ])
                return (
                    (un = function () {
                        return n
                    }),
                    n
                )
            }
            var dn = s.c.div(un()),
                gn = Object(g.b)(null, function (n) {
                    return {
                        openApp: function (e) {
                            return n(A(e))
                        },
                        minimizeApp: function (e) {
                            return n(p(e))
                        },
                        maximizeApp: function (e) {
                            return n(
                                (function (n) {
                                    return {
                                        type: 'MAXIMIZE_APP',
                                        payload: { app: n },
                                    }
                                })(e),
                            )
                        },
                        updateSize: function (e, t, i, r, c, a) {
                            return n(
                                (function (n, e, t, i, r, c) {
                                    return {
                                        type: 'UPDATE_SIZE',
                                        payload: {
                                            app: n,
                                            ref: i,
                                            position: c,
                                        },
                                    }
                                })(e, 0, 0, r, 0, a),
                            )
                        },
                        updatePosition: function (e, t, i) {
                            return n(
                                (function (n, e, t) {
                                    return {
                                        type: 'UPDATE_POSITION',
                                        payload: {
                                            app: n,
                                            e: e,
                                            d: t,
                                        },
                                    }
                                })(e, t, i),
                            )
                        },
                    }
                })(function (n) {
                    var e = n.children,
                        t = n.isOpen,
                        c = n.isMinimized,
                        a = n.isMaximized,
                        o = n.x,
                        s = n.y,
                        l = n.width,
                        u = n.height,
                        d = n.appName,
                        g = n.openApp,
                        A = n.minimizeApp,
                        p = n.maximizeApp,
                        h = n.updateSize,
                        b = n.updatePosition,
                        f = Object(r.useState)((ln.zIndex += 1)),
                        j = Object(O.a)(f, 2),
                        x = j[0],
                        m = j[1]
                    return t
                        ? Object(i.jsxs)(N.a, {
                              style: {
                                  background: '#2A2D38',
                                  border: '1px solid red',
                                  zIndex: ln.zIndex,
                              },
                              size: a
                                  ? { width: '100%', height: '100%' }
                                  : c
                                  ? { width: 0, height: 0 }
                                  : { width: l, height: u },
                              minWidth: '640',
                              minHeight: '360',
                              onDragStart: function () {
                                  return m((x += 1))
                              },
                              onResizeStart: function () {
                                  return m((x += 1))
                              },
                              position: a
                                  ? { x: 0, y: 0 }
                                  : { x: o, y: s },
                              onDragStop: function (n, e) {
                                  return b(d, n, e)
                              },
                              onResizeStop: function (n, e, t, i, r) {
                                  return h(d, n, e, t, i, r)
                              },
                              dragHandleClassName: 'dragHandler',
                              enableResizing: !a,
                              disableDragging: a,
                              children: [
                                  Object(i.jsx)(sn, {
                                      appName: d,
                                      exit: g,
                                      minimize: A,
                                      maximize: p,
                                      isMaximized: a,
                                  }),
                                  Object(i.jsx)(dn, { children: e }),
                              ],
                          })
                        : null
                }),
                An =
                    t.p +
                    'static/media/description-black.6e3c5a0d.svg',
                pn = t.p + 'static/media/folder-black.cfa93423.svg'
            function hn() {
                var n = Object(o.a)([
                    "\n    left: 0;\n    top: 0;\n    width: calc(256px - 32px);\n    height: calc(100% - 64px);\n    padding: 32px 16px;\n    color: #FFFFFF;\n    font-size: 16px;\n    background: #000000;\n    overflow: auto;\n    position: sticky;\n    box-shadow: 0 0 20px 0 black;\n    h1, h3 {\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        &:before {\n            margin-right: 10px;\n            content: '';\n            display: inline-block;\n            height: 22px;\n            width: 22px;\n            background-image: url(",
                    ");\n            background-size: 100%;\n            background-position: center;\n            background-repeat: no-repeat;\n            font-weight: 700;\n            font-family: 'Ubuntu', sans-serif;\n        }\n    }\n\n    h1 {\n        font-size: 1em;\n    }\n\n    h3 {\n        font-size: 1em;\n        margin-left: 10px;\n    }\n",
                ])
                return (
                    (hn = function () {
                        return n
                    }),
                    n
                )
            }
            var bn = s.c.div(hn(), pn)
            function fn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    color: #FFFFFF;\n',
                ])
                return (
                    (fn = function () {
                        return n
                    }),
                    n
                )
            }
            var jn = s.c.div(fn())
            function xn() {
                var n = Object(o.a)([
                    '\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: calc(100% - 256px);\n    height: 100%;\n    right: 0;\n    top: 0;\n    display: flex;\n',
                ])
                return (
                    (xn = function () {
                        return n
                    }),
                    n
                )
            }
            var mn = s.c.div(xn())
            function On() {
                var n = Object(o.a)([
                    '\n    width: 384px;\n    height: 196px;\n    background: #878f99;\n    padding: 16px;\n    position: relative;\n    box-shadow: 0 0 10px 0 black;\n    div {\n        header {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            h1 {\n                margin: 0;\n                padding: 0;\n            }\n            img {\n                width: 72px;\n            }\n        }\n        h2,h3 {\n            margin: 0;\n            padding: 0;\n            font-weight: 500;\n        }\n        h3 {\n            font-weight: 300;\n            font-size: 1em;\n        }\n    }\n    h4 {\n        margin: 0;\n        padding: 0;\n        position: absolute;\n        left: 16px;\n        bottom: 16px;\n    }\n    a {\n        text-decoration: underline;\n        position: absolute;\n        right: 16px;\n        bottom: 16px;\n    }\n',
                ])
                return (
                    (On = function () {
                        return n
                    }),
                    n
                )
            }
            function wn() {
                var n = Object(o.a)([
                    '\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: calc(100% - 72px);\n    height: calc(100% - 72px);\n    padding: 36px;\n    display: grid;\n    grid-gap: 96px;\n    grid-template-columns: repeat(auto-fit, 384px);\n    grid-template-rows: repeat(auto-fill, 196px);\n',
                ])
                return (
                    (wn = function () {
                        return n
                    }),
                    n
                )
            }
            function Cn() {
                var n = Object(o.a)([
                    '\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: calc(100% - 72px);\n    height: calc(100% - 72px);\n    display: grid;\n    grid-gap: 32px;\n    grid-template-columns: repeat(auto-fit, 128px);\n    grid-template-rows: repeat(auto-fill, 128px);\n    padding: 36px;\n',
                ])
                return (
                    (Cn = function () {
                        return n
                    }),
                    n
                )
            }
            function Bn() {
                var n = Object(o.a)([
                    '\n    position: relative;\n    height: 128px;\n    width: 128px;\n    border-radius: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 32px;\n    img {\n        height: 75%;\n    }\n    h3 {\n        font-size: 16px;\n    }\n',
                ])
                return (
                    (Bn = function () {
                        return n
                    }),
                    n
                )
            }
            function En() {
                var n = Object(o.a)([
                    '\n        text-decoration: line-through;\n        color: white;;\n    ',
                ])
                return (
                    (En = function () {
                        return n
                    }),
                    n
                )
            }
            function vn() {
                var n = Object(o.a)([
                    '\n    margin-right: 20px;\n    ',
                    '\n',
                ])
                return (
                    (vn = function () {
                        return n
                    }),
                    n
                )
            }
            function Qn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 32px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    overflow: none;\n    h6 {\n        font-size: 1em;\n        margin-right: 20px;\n    }\n    background: #191B21;\n',
                ])
                return (
                    (Qn = function () {
                        return n
                    }),
                    n
                )
            }
            function yn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n        width: 80%;\n    }\n',
                ])
                return (
                    (yn = function () {
                        return n
                    }),
                    n
                )
            }
            function zn() {
                var n = Object(o.a)([
                    '\n        margin-left: -20px;\n    ',
                ])
                return (
                    (zn = function () {
                        return n
                    }),
                    n
                )
            }
            function In() {
                var n = Object(o.a)([
                    '\n        margin-left: -10px;\n    ',
                ])
                return (
                    (In = function () {
                        return n
                    }),
                    n
                )
            }
            function kn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 100%;\n    border: none;\n    background: transparent;\n    margin: 0;\n    margin-left: -35px;\n    color: #FFFFFF;\n    ',
                    '\n    ',
                    "\n    li {\n        list-style: none;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        margin-left: -15px;\n        &:before {\n            margin-right: 5px;\n            content: '';\n            display: inline-block;\n            height: 20px;\n            width: 20px;\n            background-image: url(",
                    ");\n            background-size: 100%;\n            background-position: center;\n            background-repeat: no-repeat;\n        }\n        font-weight: 700;\n        font-family: 'Ubuntu', sans-serif;\n    }\n",
                ])
                return (
                    (kn = function () {
                        return n
                    }),
                    n
                )
            }
            var Dn = s.c.button(
                    kn(),
                    function (n) {
                        return n.portfolio && Object(s.b)(In())
                    },
                    function (n) {
                        return n.resume && Object(s.b)(zn())
                    },
                    An,
                ),
                Mn = s.c.div(yn()),
                Pn = s.c.div(Qn()),
                Sn = s.c.a(vn(), function (n) {
                    return '' === n.linkExists && Object(s.b)(En())
                }),
                Jn = s.c.div(Bn()),
                Fn = s.c.div(Cn()),
                Un = s.c.div(wn()),
                Yn = s.c.div(On()),
                Tn = Object(r.createContext)({
                    currentIndex: 1,
                    setIndex: function () {},
                }),
                Kn = [].concat(q, Z),
                Rn = function () {
                    var n = Object(r.useContext)(Tn).setIndex
                    return Object(i.jsxs)(bn, {
                        children: [
                            Object(i.jsx)('h1', {
                                children: 'Portfolio',
                            }),
                            Object(i.jsx)('h3', { children: 'Done' }),
                            Object(i.jsx)('ul', {
                                children: Kn.map(function (e, t) {
                                    return 'done' === e.status &&
                                        'portfolio' === e.assign
                                        ? Object(i.jsx)(
                                              Dn,
                                              {
                                                  onClick: function () {
                                                      return n(t + 1)
                                                  },
                                                  type: 'button',
                                                  portfolio: !0,
                                                  children: Object(
                                                      i.jsx,
                                                  )('li', {
                                                      children:
                                                          e.name,
                                                  }),
                                              },
                                              e.name,
                                          )
                                        : null
                                }),
                            }),
                            Object(i.jsx)('h3', {
                                children: 'Undone',
                            }),
                            Object(i.jsx)('ul', {
                                children: Kn.map(function (e, t) {
                                    return 'undone' === e.status &&
                                        'portfolio' === e.assign
                                        ? Object(i.jsx)(
                                              Dn,
                                              {
                                                  onClick: function () {
                                                      return n(t + 1)
                                                  },
                                                  type: 'button',
                                                  portfolio: !0,
                                                  children: Object(
                                                      i.jsx,
                                                  )('li', {
                                                      children:
                                                          e.name,
                                                  }),
                                              },
                                              e.name,
                                          )
                                        : null
                                }),
                            }),
                            Object(i.jsx)('h1', {
                                children: 'Resume',
                            }),
                            Object(i.jsx)('ul', {
                                children: Kn.map(function (e, t) {
                                    return 'resume' === e.assign
                                        ? Object(i.jsx)(
                                              Dn,
                                              {
                                                  onClick: function () {
                                                      return n(t + 1)
                                                  },
                                                  type: 'button',
                                                  resume: !0,
                                                  children: Object(
                                                      i.jsx,
                                                  )('li', {
                                                      children:
                                                          e.name,
                                                  }),
                                              },
                                              e.name,
                                          )
                                        : null
                                }),
                            }),
                        ],
                    })
                },
                Gn = function (n) {
                    var e = n.children,
                        t = Object(r.useContext)(Tn).currentIndex
                    return Object(i.jsx)(mn, {
                        children: Object(i.jsx)(jn, {
                            children: e[t - 1],
                        }),
                    })
                },
                qn = function (n) {
                    var e = n.children,
                        t = Object(r.useState)(1),
                        c = Object(O.a)(t, 2),
                        a = c[0],
                        o = c[1]
                    return Object(i.jsx)(Tn.Provider, {
                        value: { currentIndex: a, setIndex: o },
                        children: e,
                    })
                },
                Zn = Object(g.b)(function (n) {
                    return { files: n.files }
                })(function (n) {
                    var e = n.files,
                        t = e.isOpen,
                        c = e.isMinimized,
                        a = e.isMaximized,
                        o = e.x,
                        s = e.y,
                        l = e.width,
                        u = e.height,
                        d = e.appName
                    return Object(i.jsx)(gn, {
                        isOpen: t,
                        isMinimized: c,
                        isMaximized: a,
                        x: o,
                        y: s,
                        width: l,
                        height: u,
                        appName: d,
                        children: Object(i.jsxs)(qn, {
                            children: [
                                Object(i.jsx)(Rn, {}),
                                Object(i.jsx)(Gn, {
                                    children: Kn.map(function (n) {
                                        var e = null
                                        if ('portfolio' === n.assign)
                                            e = Object(i.jsxs)(
                                                'div',
                                                {
                                                    children: [
                                                        Object(
                                                            i.jsx,
                                                        )(Pn, {
                                                            children: Object(
                                                                i.jsxs,
                                                            )('div', {
                                                                children: [
                                                                    Object(
                                                                        i.jsx,
                                                                    )(
                                                                        Sn,
                                                                        {
                                                                            href:
                                                                                n.github,
                                                                            target:
                                                                                '_blank',
                                                                            rel:
                                                                                'noreferrer',
                                                                            linkExists:
                                                                                n.github,
                                                                            children:
                                                                                'github',
                                                                        },
                                                                    ),
                                                                    Object(
                                                                        i.jsx,
                                                                    )(
                                                                        Sn,
                                                                        {
                                                                            href:
                                                                                n.linkedin,
                                                                            target:
                                                                                '_blank',
                                                                            rel:
                                                                                'noreferrer',
                                                                            linkExists:
                                                                                n.live,
                                                                            children:
                                                                                'live',
                                                                        },
                                                                    ),
                                                                ],
                                                            }),
                                                        }),
                                                        Object(
                                                            i.jsx,
                                                        )(Mn, {
                                                            children: Object(
                                                                i.jsx,
                                                            )('img', {
                                                                src:
                                                                    n.photo,
                                                                alt:
                                                                    n.name,
                                                            }),
                                                        }),
                                                    ],
                                                },
                                                n.id,
                                            )
                                        else if (
                                            'resume' === n.assign
                                        )
                                            if (
                                                'education' === n.name
                                            )
                                                e = Object(i.jsx)(
                                                    Un,
                                                    {
                                                        children: n.education.map(
                                                            function (
                                                                n,
                                                            ) {
                                                                return Object(
                                                                    i.jsxs,
                                                                )(
                                                                    Yn,
                                                                    {
                                                                        children: [
                                                                            Object(
                                                                                i.jsxs,
                                                                            )(
                                                                                'div',
                                                                                {
                                                                                    children: [
                                                                                        Object(
                                                                                            i.jsxs,
                                                                                        )(
                                                                                            'header',
                                                                                            {
                                                                                                children: [
                                                                                                    Object(
                                                                                                        i.jsx,
                                                                                                    )(
                                                                                                        'h1',
                                                                                                        {
                                                                                                            children:
                                                                                                                n.school,
                                                                                                        },
                                                                                                    ),
                                                                                                    Object(
                                                                                                        i.jsx,
                                                                                                    )(
                                                                                                        'img',
                                                                                                        {
                                                                                                            src:
                                                                                                                n.logo,
                                                                                                            alt:
                                                                                                                n.school,
                                                                                                        },
                                                                                                    ),
                                                                                                ],
                                                                                            },
                                                                                        ),
                                                                                        Object(
                                                                                            i.jsx,
                                                                                        )(
                                                                                            'h3',
                                                                                            {
                                                                                                children:
                                                                                                    n.field,
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                                },
                                                                            ),
                                                                            Object(
                                                                                i.jsx,
                                                                            )(
                                                                                'h4',
                                                                                {
                                                                                    children:
                                                                                        n.year,
                                                                                },
                                                                            ),
                                                                        ],
                                                                    },
                                                                    n.id,
                                                                )
                                                            },
                                                        ),
                                                    },
                                                    n.name,
                                                )
                                            else if (
                                                'experience' ===
                                                n.name
                                            )
                                                e = Object(i.jsx)(
                                                    Un,
                                                    {
                                                        children: n.experience.map(
                                                            function (
                                                                n,
                                                            ) {
                                                                return Object(
                                                                    i.jsxs,
                                                                )(
                                                                    Yn,
                                                                    {
                                                                        children: [
                                                                            Object(
                                                                                i.jsxs,
                                                                            )(
                                                                                'div',
                                                                                {
                                                                                    children: [
                                                                                        Object(
                                                                                            i.jsxs,
                                                                                        )(
                                                                                            'header',
                                                                                            {
                                                                                                children: [
                                                                                                    Object(
                                                                                                        i.jsx,
                                                                                                    )(
                                                                                                        'h1',
                                                                                                        {
                                                                                                            children:
                                                                                                                n.company,
                                                                                                        },
                                                                                                    ),
                                                                                                    Object(
                                                                                                        i.jsx,
                                                                                                    )(
                                                                                                        'img',
                                                                                                        {
                                                                                                            src:
                                                                                                                n.logo,
                                                                                                            alt:
                                                                                                                n.company,
                                                                                                        },
                                                                                                    ),
                                                                                                ],
                                                                                            },
                                                                                        ),
                                                                                        Object(
                                                                                            i.jsx,
                                                                                        )(
                                                                                            'h2',
                                                                                            {
                                                                                                children:
                                                                                                    n.position,
                                                                                            },
                                                                                        ),
                                                                                        Object(
                                                                                            i.jsxs,
                                                                                        )(
                                                                                            'h3',
                                                                                            {
                                                                                                children: [
                                                                                                    'type: ',
                                                                                                    n.type,
                                                                                                ],
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                                },
                                                                            ),
                                                                            Object(
                                                                                i.jsx,
                                                                            )(
                                                                                'h4',
                                                                                {
                                                                                    children:
                                                                                        n.year,
                                                                                },
                                                                            ),
                                                                        ],
                                                                    },
                                                                    n.id,
                                                                )
                                                            },
                                                        ),
                                                    },
                                                    n.name,
                                                )
                                            else if (
                                                'certificates' ===
                                                n.name
                                            )
                                                e = Object(i.jsx)(
                                                    Un,
                                                    {
                                                        children: n.certificates.map(
                                                            function (
                                                                n,
                                                            ) {
                                                                return Object(
                                                                    i.jsxs,
                                                                )(
                                                                    Yn,
                                                                    {
                                                                        children: [
                                                                            Object(
                                                                                i.jsx,
                                                                            )(
                                                                                'div',
                                                                                {
                                                                                    children: Object(
                                                                                        i.jsxs,
                                                                                    )(
                                                                                        'header',
                                                                                        {
                                                                                            children: [
                                                                                                Object(
                                                                                                    i.jsx,
                                                                                                )(
                                                                                                    'h1',
                                                                                                    {
                                                                                                        children:
                                                                                                            n.name,
                                                                                                    },
                                                                                                ),
                                                                                                Object(
                                                                                                    i.jsx,
                                                                                                )(
                                                                                                    'img',
                                                                                                    {
                                                                                                        src:
                                                                                                            n.logo,
                                                                                                        alt:
                                                                                                            n.organizer,
                                                                                                    },
                                                                                                ),
                                                                                            ],
                                                                                        },
                                                                                    ),
                                                                                },
                                                                            ),
                                                                            Object(
                                                                                i.jsxs,
                                                                            )(
                                                                                'div',
                                                                                {
                                                                                    children: [
                                                                                        Object(
                                                                                            i.jsx,
                                                                                        )(
                                                                                            'h4',
                                                                                            {
                                                                                                children:
                                                                                                    n.year,
                                                                                            },
                                                                                        ),
                                                                                        Object(
                                                                                            i.jsx,
                                                                                        )(
                                                                                            'a',
                                                                                            {
                                                                                                href:
                                                                                                    n.doc,
                                                                                                children:
                                                                                                    'view',
                                                                                            },
                                                                                        ),
                                                                                    ],
                                                                                },
                                                                            ),
                                                                        ],
                                                                    },
                                                                    n.id,
                                                                )
                                                            },
                                                        ),
                                                    },
                                                    n.id,
                                                )
                                            else if (
                                                'skills' === n.name
                                            ) {
                                                var t = Object(
                                                        r.useState,
                                                    )(''),
                                                    c = Object(O.a)(
                                                        t,
                                                        2,
                                                    ),
                                                    a = c[0],
                                                    o = c[1],
                                                    s = Object(
                                                        r.useState,
                                                    )(''),
                                                    l = Object(O.a)(
                                                        s,
                                                        2,
                                                    ),
                                                    u = l[0],
                                                    d = l[1]
                                                e = Object(i.jsxs)(
                                                    Fn,
                                                    {
                                                        children: [
                                                            Object(
                                                                i.jsx,
                                                            )(Pn, {
                                                                children:
                                                                    '' ===
                                                                    a
                                                                        ? Object(
                                                                              i.jsx,
                                                                          )(
                                                                              'h6',
                                                                              {
                                                                                  children:
                                                                                      'select skill to display level',
                                                                              },
                                                                          )
                                                                        : Object(
                                                                              i.jsxs,
                                                                          )(
                                                                              'h6',
                                                                              {
                                                                                  children: [
                                                                                      u,
                                                                                      ' level: ',
                                                                                      a,
                                                                                      '/5',
                                                                                  ],
                                                                              },
                                                                          ),
                                                            }),
                                                            n.skills.map(
                                                                function (
                                                                    e,
                                                                ) {
                                                                    return Object(
                                                                        i.jsxs,
                                                                    )(
                                                                        Jn,
                                                                        {
                                                                            onClick: function () {
                                                                                o(
                                                                                    e.level,
                                                                                ),
                                                                                    d(
                                                                                        e.name,
                                                                                    )
                                                                            },
                                                                            level:
                                                                                e.level,
                                                                            skill:
                                                                                n.name,
                                                                            children: [
                                                                                Object(
                                                                                    i.jsx,
                                                                                )(
                                                                                    'img',
                                                                                    {
                                                                                        src:
                                                                                            e.icon,
                                                                                        alt:
                                                                                            e.name,
                                                                                    },
                                                                                ),
                                                                                Object(
                                                                                    i.jsxs,
                                                                                )(
                                                                                    'h3',
                                                                                    {
                                                                                        children: [
                                                                                            e.name,
                                                                                            '.skill',
                                                                                        ],
                                                                                    },
                                                                                ),
                                                                            ],
                                                                        },
                                                                        e.id,
                                                                    )
                                                                },
                                                            ),
                                                        ],
                                                    },
                                                    n.name,
                                                )
                                            } else
                                                e = Object(i.jsx)(
                                                    'h1',
                                                    {
                                                        children:
                                                            'ERROR 404',
                                                    },
                                                    'unknown',
                                                )
                                        return e
                                    }),
                                }),
                            ],
                        }),
                    })
                })
            function Nn() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n',
                ])
                return (
                    (Nn = function () {
                        return n
                    }),
                    n
                )
            }
            var Ln = s.c.h1(Nn()),
                Vn = Object(g.b)(function (n) {
                    return { settings: n.settings }
                })(function (n) {
                    var e = n.settings,
                        t = e.isOpen,
                        r = e.isMinimized,
                        c = e.isMaximized,
                        a = e.x,
                        o = e.y,
                        s = e.width,
                        l = e.height,
                        u = e.appName
                    return Object(i.jsx)(gn, {
                        isOpen: t,
                        isMinimized: r,
                        isMaximized: c,
                        x: a,
                        y: o,
                        width: s,
                        height: l,
                        appName: u,
                        children: Object(i.jsx)(Ln, {
                            children: 'Work in progress',
                        }),
                    })
                })
            function Hn() {
                var n = Object(o.a)([
                    '\n    position: absolute;\n    right: 8px;\n    bottom: 8px;\n    font-size: 8px;\n    opacity: 0.5;\n',
                ])
                return (
                    (Hn = function () {
                        return n
                    }),
                    n
                )
            }
            function Wn() {
                var n = Object(o.a)(['\n    font-size: 12px;\n'])
                return (
                    (Wn = function () {
                        return n
                    }),
                    n
                )
            }
            function Xn() {
                var n = Object(o.a)([
                    '\n        background-color: rgb(176,224,230, 0.3);\n    ',
                ])
                return (
                    (Xn = function () {
                        return n
                    }),
                    n
                )
            }
            function _n() {
                var n = Object(o.a)([
                    '\n    position: relative;\n    width: 100%;\n    height: 64px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: 0 0 2px 0 black;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    ',
                    '\n    align-items: ',
                    ';\n    justify-content: ',
                    ';\n    span {\n        margin: ',
                    ' 0 0 ',
                    ';\n    }\n',
                ])
                return (
                    (_n = function () {
                        return n
                    }),
                    n
                )
            }
            var $n = s.c.div(
                    _n(),
                    function (n) {
                        return 0 === n.index && Object(s.b)(Xn())
                    },
                    function (n) {
                        return 0 === n.index ? 'center' : 'flex-start'
                    },
                    function (n) {
                        return 0 !== n.index ? 'flex-start' : 'center'
                    },
                    function (n) {
                        return 0 !== n.index && '8px'
                    },
                    function (n) {
                        return 0 !== n.index && '8px'
                    },
                ),
                ne = s.c.span(Wn()),
                ee = s.c.span(Hn()),
                te = function (n) {
                    var e = n.onClick,
                        t = n.from,
                        r = n.message,
                        c = n.title,
                        a = n.index
                    return r
                        ? Object(i.jsxs)($n, {
                              onClick: function () {
                                  return e(a)
                              },
                              index: a,
                              children: [
                                  Object(i.jsx)('span', {
                                      children: c,
                                  }),
                                  'addNew' === r
                                      ? null
                                      : Object(i.jsxs)(ne, {
                                            children: [
                                                r.slice(0, 18),
                                                '...',
                                            ],
                                        }),
                                  '' === t
                                      ? null
                                      : Object(i.jsx)(ee, {
                                            children: t,
                                        }),
                              ],
                          })
                        : null
                },
                ie = t(31),
                re = t.n(ie)
            function ce() {
                var n = Object(o.a)([
                    '\n    width: 90%;\n    height: 50%;\n    textarea {\n        color: white;\n        width: 100%;\n        height: 100%;\n        background: none;\n        border: none;\n        border-bottom: 1px solid white;\n        margin-top: 16px;\n        &:focus {\n            outline: 0;\n        }\n    }\n',
                ])
                return (
                    (ce = function () {
                        return n
                    }),
                    n
                )
            }
            function ae() {
                var n = Object(o.a)([
                    '\n    width: ',
                    ';\n    height: 32px;\n    position: relative;\n    margin-top: 16px;\n    input {\n        width: 100%;\n        height: 100%;\n        background: none;\n        border: none;\n        border-bottom: 1px solid white;\n        color: white;\n        &:focus {\n            outline: 0;\n            background: none;\n        }\n    }\n    label {\n        position: absolute;\n        left: 0;\n        top: 0;\n        font-size: 24px;\n        &.active {\n            font-size: 2px;\n        }\n    }\n',
                ])
                return (
                    (ae = function () {
                        return n
                    }),
                    n
                )
            }
            function oe() {
                var n = Object(o.a)([
                    '\n    margin-top: 16px;\n    width: 90%;\n    display: flex;\n    justify-content: space-between;\n',
                ])
                return (
                    (oe = function () {
                        return n
                    }),
                    n
                )
            }
            function se() {
                var n = Object(o.a)([
                    "\n    position: absolute;\n    right: 16px;\n    bottom: 16px;\n    border-radius: 50px;\n    box-shadow: 0 0 10px 0 black;\n    width: 96px;\n    height: 48px;\n    border: none;\n    background: purple;\n    font-size: 16px;\n    font-family: 'Ubuntu';\n    &:focus {\n        outline: 0;\n        background: none;\n    }\n",
                ])
                return (
                    (se = function () {
                        return n
                    }),
                    n
                )
            }
            function le() {
                var n = Object(o.a)([
                    '\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    position: relative;\n',
                ])
                return (
                    (le = function () {
                        return n
                    }),
                    n
                )
            }
            var ue = s.c.form(le()),
                de = s.c.input(se()),
                ge = s.c.div(oe()),
                Ae = s.c.span(ae(), function (n) {
                    return 'email' === n.type ? '45%' : '90%'
                }),
                pe = s.c.span(ce()),
                he = function () {
                    var n = Object(r.useState)('hiszaszin@gmail.com'),
                        e = Object(O.a)(n, 2),
                        t = e[0],
                        c = e[1],
                        a = Object(r.useState)(''),
                        o = Object(O.a)(a, 2),
                        s = o[0],
                        l = o[1],
                        u = Object(r.useState)(''),
                        d = Object(O.a)(u, 2),
                        g = d[0],
                        A = d[1],
                        p = Object(r.useState)(''),
                        h = Object(O.a)(p, 2),
                        b = h[0],
                        f = h[1],
                        j = { to: t, from: s, subject: g, message: b }
                    return Object(i.jsxs)(ue, {
                        id: 'mailbox_form',
                        onSubmit: function (n) {
                            return (
                                n.preventDefault(),
                                void ('hiszaszin@gmail.com' === t
                                    ? re.a
                                          .send(
                                              'service_04cxlcu',
                                              'template_mfwycql',
                                              j,
                                              'user_eu2xVs25l5ZqMyIpbGQ1R',
                                          )
                                          .then(
                                              function (n) {
                                                  console.log(
                                                      'SUCCESS!',
                                                      n.status,
                                                      n.text,
                                                  )
                                              },
                                              function (n) {
                                                  console.log(
                                                      'FAILED...',
                                                      n,
                                                  )
                                              },
                                          )
                                    : console.log('gowno'))
                            )
                        },
                        children: [
                            Object(i.jsxs)(ge, {
                                children: [
                                    Object(i.jsx)(Ae, {
                                        type: 'email',
                                        children: Object(i.jsx)(
                                            'input',
                                            {
                                                type: 'email',
                                                placeholder: 'from:',
                                                id: 'from',
                                                value: s,
                                                onChange: function (
                                                    n,
                                                ) {
                                                    return l(
                                                        n.target
                                                            .value,
                                                    )
                                                },
                                            },
                                        ),
                                    }),
                                    Object(i.jsx)(Ae, {
                                        type: 'email',
                                        children: Object(i.jsx)(
                                            'input',
                                            {
                                                type: 'email',
                                                placeholder: 'to:',
                                                id: 'to',
                                                value: t,
                                                onChange: function (
                                                    n,
                                                ) {
                                                    return c(
                                                        n.target
                                                            .value,
                                                    )
                                                },
                                            },
                                        ),
                                    }),
                                ],
                            }),
                            Object(i.jsx)(Ae, {
                                children: Object(i.jsx)('input', {
                                    type: 'text',
                                    placeholder: 'title:',
                                    id: 'subject',
                                    value: g,
                                    onChange: function (n) {
                                        return A(n.target.value)
                                    },
                                }),
                            }),
                            Object(i.jsx)(pe, {
                                children: Object(i.jsx)('textarea', {
                                    name: 'message',
                                    form: 'mailbox_form',
                                    value: b,
                                    onChange: function (n) {
                                        return f(n.target.value)
                                    },
                                }),
                            }),
                            Object(i.jsx)(de, {
                                type: 'submit',
                                value: 'Submit',
                            }),
                        ],
                    })
                }
            function be() {
                var n = Object(o.a)(['\n\n'])
                return (
                    (be = function () {
                        return n
                    }),
                    n
                )
            }
            function fe() {
                var n = Object(o.a)(['\n    margin-bottom: 8px;\n'])
                return (
                    (fe = function () {
                        return n
                    }),
                    n
                )
            }
            function je() {
                var n = Object(o.a)(['\n    margin-bottom: 16px;\n'])
                return (
                    (je = function () {
                        return n
                    }),
                    n
                )
            }
            function xe() {
                var n = Object(o.a)([
                    '\n    padding: 16px;\n    width: calc(100% - 32px);\n    height: calc(100% - 32px);\n    display: flex;\n    flex-direction: column;\n',
                ])
                return (
                    (xe = function () {
                        return n
                    }),
                    n
                )
            }
            var me = s.c.div(xe()),
                Oe = s.c.h1(je()),
                we = s.c.header(fe()),
                Ce = s.c.article(be()),
                Be = Object(r.createContext)({
                    currentIndex: null,
                    setIndex: function () {},
                }),
                Ee = [
                    {
                        id: 0,
                        title: 'New message',
                        message: 'addNew',
                    },
                    {
                        id: 1,
                        from: 'cdprfannumber1@gmail.com',
                        title: 'Fix cyberpunk',
                        message:
                            "fix these bugs, this game is unplayable. Refund me my money you don't deserve it.",
                    },
                    {
                        id: 2,
                        from: 'unknown',
                        title: '01001110',
                        message:
                            '00110010 00110001 00110011 00110111 00100000 00111001 00111001 00110111 00100000 00110010 00110001 00110001 00110101',
                    },
                    {
                        id: 3,
                        from: 'hiszaszin@gmail.com',
                        title: 'About the website',
                        message:
                            "This website isn't currently what I want it to be, It's not fully styled as should be, and not fully functional as I want it to be. I'll keep updating it till it is what I hava in my mind. New apps, new features, more personalisation, more console functionality, pseudo web browser, cookies etc.",
                    },
                ],
                ve = function () {
                    var n = Object(r.useContext)(Be).setIndex
                    return Object(i.jsx)(bn, {
                        children: Ee.map(function (e) {
                            return Object(i.jsx)(
                                te,
                                {
                                    onClick: n,
                                    from: e.from,
                                    message: e.message,
                                    title: e.title,
                                    index: e.id,
                                },
                                e.id,
                            )
                        }),
                    })
                },
                Qe = function (n) {
                    var e = n.children,
                        t = Object(r.useContext)(Be).currentIndex
                    return Object(i.jsx)(mn, {
                        children: Object(i.jsx)(jn, {
                            children: null === t ? null : e[t],
                        }),
                    })
                },
                ye = function (n) {
                    var e = n.children,
                        t = Object(r.useState)(null),
                        c = Object(O.a)(t, 2),
                        a = c[0],
                        o = c[1]
                    return Object(i.jsx)(Be.Provider, {
                        value: { currentIndex: a, setIndex: o },
                        children: e,
                    })
                },
                ze = Object(g.b)(function (n) {
                    return { mailbox: n.mailbox }
                })(function (n) {
                    var e = n.mailbox,
                        t = e.isOpen,
                        r = e.isMinimized,
                        c = e.isMaximized,
                        a = e.x,
                        o = e.y,
                        s = e.width,
                        l = e.height,
                        u = e.appName
                    return Object(i.jsx)(gn, {
                        isOpen: t,
                        isMinimized: r,
                        isMaximized: c,
                        x: a,
                        y: o,
                        width: s,
                        height: l,
                        appName: u,
                        children: Object(i.jsxs)(ye, {
                            children: [
                                Object(i.jsx)(ve, {}),
                                Object(i.jsx)(Qe, {
                                    children: Ee.map(function (n) {
                                        return 0 === n.id
                                            ? Object(i.jsx)(
                                                  he,
                                                  {},
                                                  n.id,
                                              )
                                            : Object(i.jsxs)(
                                                  me,
                                                  {
                                                      children: [
                                                          Object(
                                                              i.jsx,
                                                          )(Oe, {
                                                              children:
                                                                  n.title,
                                                          }),
                                                          Object(
                                                              i.jsxs,
                                                          )(we, {
                                                              children: [
                                                                  'New message from: ',
                                                                  n.from,
                                                              ],
                                                          }),
                                                          Object(
                                                              i.jsx,
                                                          )(Ce, {
                                                              children:
                                                                  n.message,
                                                          }),
                                                      ],
                                                  },
                                                  n.id,
                                              )
                                    }),
                                }),
                            ],
                        }),
                    })
                }),
                Ie = t(32),
                ke = t(13),
                De = t(7),
                Me = t(5),
                Pe = {
                    files: {
                        isOpen: !0,
                        isMinimized: !1,
                        isMaximized: !1,
                        x: 100,
                        y: 100,
                        width: 800,
                        height: 450,
                        appName: 'files',
                        version: '0.1',
                    },
                    settings: {
                        isOpen: !1,
                        isMinimized: !1,
                        isMaximized: !1,
                        x: 100,
                        y: 100,
                        width: 800,
                        height: 450,
                        appName: 'settings',
                        version: '0.1',
                    },
                    mailbox: {
                        isOpen: !1,
                        isMinimized: !1,
                        isMaximized: !1,
                        x: 100,
                        y: 100,
                        width: 800,
                        height: 450,
                        appName: 'mailbox',
                        version: '0.1',
                    },
                    console: {
                        isOpen: !1,
                        isMinimized: !1,
                        isMaximized: !1,
                        x: 100,
                        y: 100,
                        width: 800,
                        height: 450,
                        appName: 'console',
                        version: '0.1',
                    },
                },
                Se = function () {
                    var n =
                            arguments.length > 0 &&
                            void 0 !== arguments[0]
                                ? arguments[0]
                                : Pe,
                        e =
                            arguments.length > 1
                                ? arguments[1]
                                : void 0
                    switch (e.type) {
                        case 'OPEN_APP':
                            return Object(Me.a)(
                                Object(Me.a)({}, n),
                                {},
                                Object(De.a)(
                                    {},
                                    e.payload.app,
                                    Object(Me.a)(
                                        Object(Me.a)(
                                            {},
                                            n[e.payload.app],
                                        ),
                                        {},
                                        {
                                            isOpen: !n[e.payload.app]
                                                .isOpen,
                                        },
                                    ),
                                ),
                            )
                        case 'MINIMIZE_APP':
                            return Object(Me.a)(
                                Object(Me.a)({}, n),
                                {},
                                Object(De.a)(
                                    {},
                                    e.payload.app,
                                    Object(Me.a)(
                                        Object(Me.a)(
                                            {},
                                            n[e.payload.app],
                                        ),
                                        {},
                                        {
                                            isMinimized: !n[
                                                e.payload.app
                                            ].isMinimized,
                                        },
                                    ),
                                ),
                            )
                        case 'MAXIMIZE_APP':
                            return Object(Me.a)(
                                Object(Me.a)({}, n),
                                {},
                                Object(De.a)(
                                    {},
                                    e.payload.app,
                                    Object(Me.a)(
                                        Object(Me.a)(
                                            {},
                                            n[e.payload.app],
                                        ),
                                        {},
                                        {
                                            isMaximized: !n[
                                                e.payload.app
                                            ].isMaximized,
                                        },
                                    ),
                                ),
                            )
                        case 'UPDATE_SIZE':
                            return Object(Me.a)(
                                Object(Me.a)({}, n),
                                {},
                                Object(De.a)(
                                    {},
                                    e.payload.app,
                                    Object(Me.a)(
                                        Object(Me.a)(
                                            {},
                                            n[e.payload.app],
                                        ),
                                        {},
                                        {
                                            height: [
                                                e.payload.ref
                                                    .offsetHeight,
                                            ],
                                            width: [
                                                e.payload.ref
                                                    .offsetWidth,
                                            ],
                                            x: [e.payload.position.x],
                                            y: [e.payload.position.y],
                                        },
                                    ),
                                ),
                            )
                        case 'UPDATE_POSITION':
                            return Object(Me.a)(
                                Object(Me.a)({}, n),
                                {},
                                Object(De.a)(
                                    {},
                                    e.payload.app,
                                    Object(Me.a)(
                                        Object(Me.a)(
                                            {},
                                            n[e.payload.app],
                                        ),
                                        {},
                                        {
                                            x: [e.payload.d.x],
                                            y: [e.payload.d.y],
                                        },
                                    ),
                                ),
                            )
                        default:
                            return n
                    }
                },
                Je = Object(ke.b)(Se),
                Fe = function (n) {
                    if (n) {
                        var e = n.split(' ')
                        switch (e[0]) {
                            case 'help':
                                return Object(i.jsxs)('div', {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                    },
                                    children: [
                                        'list of available commands: ',
                                        Object(i.jsx)('br', {}),
                                        Object(i.jsxs)('div', {
                                            style: {
                                                display: 'flex',
                                                marginBottom: '8px',
                                            },
                                            children: [
                                                Object(i.jsx)('div', {
                                                    style: {
                                                        width: '64px',
                                                    },
                                                    children: 'help',
                                                }),
                                                'Displays list of available commands',
                                            ],
                                        }),
                                        Object(i.jsxs)('div', {
                                            style: {
                                                display: 'flex',
                                                marginBottom: '8px',
                                            },
                                            children: [
                                                Object(i.jsx)('div', {
                                                    style: {
                                                        width: '64px',
                                                    },
                                                    children: 'clear',
                                                }),
                                                'Clears the console logs',
                                            ],
                                        }),
                                        Object(i.jsxs)('div', {
                                            style: {
                                                display: 'flex',
                                                marginBottom: '8px',
                                            },
                                            children: [
                                                Object(i.jsx)('div', {
                                                    style: {
                                                        width: '64px',
                                                    },
                                                    children: 'run',
                                                }),
                                                'Opens/closes the app passed in second parameter example: `run files`',
                                                Object(i.jsx)(
                                                    'br',
                                                    {},
                                                ),
                                                'available parameters: -v',
                                            ],
                                        }),
                                        Object(i.jsxs)('div', {
                                            style: {
                                                display: 'flex',
                                                marginBottom: '8px',
                                            },
                                            children: [
                                                Object(i.jsx)('div', {
                                                    style: {
                                                        width: '64px',
                                                    },
                                                    children: 'style',
                                                }),
                                                'Changes the style of this website, try typing `style help` to display possible changes',
                                            ],
                                        }),
                                    ],
                                })
                            case 'clear':
                                return null
                            case 'run':
                                switch (e[1]) {
                                    case 'files':
                                        if (!e[2])
                                            return (
                                                Je.dispatch(A(e[1])),
                                                Je.getState()[
                                                    e[1].toString()
                                                ].isOpen
                                                    ? 'Opening '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                                    : 'Closing '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                            )
                                        switch (e[2]) {
                                            case '-v':
                                                return Je.getState()[
                                                    e[1].toString()
                                                ].version
                                            default:
                                                return 'parameter not recognized'
                                        }
                                    case 'console':
                                        if (!e[2])
                                            return (
                                                Je.dispatch(A(e[1])),
                                                Je.getState()[
                                                    e[1].toString()
                                                ].isOpen
                                                    ? 'Opening '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                                    : 'Closing '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                            )
                                        switch (e[2]) {
                                            case '-v':
                                                return Je.getState()[
                                                    e[1].toString()
                                                ].version
                                            default:
                                                return 'parameter not recognized'
                                        }
                                    case 'settings':
                                        if (!e[2])
                                            return (
                                                Je.dispatch(A(e[1])),
                                                Je.getState()[
                                                    e[1].toString()
                                                ].isOpen
                                                    ? 'Opening '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                                    : 'Closing '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                            )
                                        switch (e[2]) {
                                            case '-v':
                                                return Je.getState()[
                                                    e[1].toString()
                                                ].version
                                            default:
                                                return 'parameter not recognized'
                                        }
                                    case 'mailbox':
                                        if (!e[2])
                                            return (
                                                Je.dispatch(A(e[1])),
                                                Je.getState()[
                                                    e[1].toString()
                                                ].isOpen
                                                    ? 'Opening '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                                    : 'Closing '.concat(
                                                          e[1],
                                                          '...',
                                                      )
                                            )
                                        switch (e[2]) {
                                            case '-v':
                                                return Je.getState()[
                                                    e[1].toString()
                                                ].version
                                            default:
                                                return 'parameter not recognized'
                                        }
                                    case 'help':
                                        return 'run [app-name]'
                                    default:
                                        return "app not found: '".concat(
                                            e[1],
                                            "'",
                                        )
                                }
                            case 'style':
                                return 'Stylig through the console is not ready yet'
                            case 'pope':
                                return 'John Paul the Second '
                            case 'jd':
                                return 'Confirmed!'
                            default:
                                return ''.concat(
                                    e[0],
                                    ' is not recognized as internal command',
                                )
                        }
                    }
                    return null
                }
            function Ue() {
                var n = Object(o.a)([
                    '\n    display: flex;\n    flex-direction: column;\n    \n    h6{\n        margin: 0;\n        padding: 0;\n    }\n',
                ])
                return (
                    (Ue = function () {
                        return n
                    }),
                    n
                )
            }
            function Ye() {
                var n = Object(o.a)([
                    '\n    height: auto;\n    width: 90%;\n    font-size: 14px;\n    color: #00FF00;\n    background: transparent;\n    border: none;\n    font-weight: 300;\n    display: flex;\n    align-items: center;\n    font-size: 1em;\n    &:focus {\n        outline: 0;\n    }\n    font-weight: 300;\n',
                ])
                return (
                    (Ye = function () {
                        return n
                    }),
                    n
                )
            }
            function Te() {
                var n = Object(o.a)([
                    '\n    width: calc(100% - 4px);\n    height: calc(100% - 4px);\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: flex-start;\n    color: #00FF00;\n    padding: 2px;\n    font-size: 1.2em;\n    span {\n        display: flex;\n        font-size: 0.7em;\n        align-items: center;\n        width: 100%;\n        align-items: flex-start;\n    }\n',
                ])
                return (
                    (Te = function () {
                        return n
                    }),
                    n
                )
            }
            var Ke = s.c.div(Te()),
                Re = s.c.input(Ye()),
                Ge = s.c.div(Ue()),
                qe = Object(g.b)(function (n) {
                    return { console: n.console }
                })(function (n) {
                    var e = n.console,
                        t = e.isOpen,
                        c = e.isMinimized,
                        a = e.isMaximized,
                        o = e.x,
                        s = e.y,
                        l = e.width,
                        u = e.height,
                        d = e.appName,
                        g = Object(r.useState)(''),
                        A = Object(O.a)(g, 2),
                        p = A[0],
                        h = A[1],
                        b = Object(r.useState)([
                            'WebConsole [Version 0.1]',
                        ]),
                        f = Object(O.a)(b, 2),
                        j = f[0],
                        x = f[1],
                        m = null
                    return (
                        Object(r.useEffect)(function () {
                            m && m.focus()
                        }),
                        Object(i.jsx)(gn, {
                            isOpen: t,
                            isMinimized: c,
                            isMaximized: a,
                            x: o,
                            y: s,
                            width: l,
                            height: u,
                            appName: d,
                            children: Object(i.jsxs)(Ke, {
                                children: [
                                    Object(i.jsx)(Ge, {
                                        children: j.map(function (
                                            n,
                                            e,
                                        ) {
                                            return Object(i.jsx)(
                                                'h6',
                                                { children: n },
                                                e,
                                            )
                                        }),
                                    }),
                                    Object(i.jsxs)('span', {
                                        children: [
                                            '$/root/',
                                            Object(i.jsx)(Re, {
                                                type: 'text',
                                                maxLength: '96',
                                                ref: function (n) {
                                                    m = n
                                                },
                                                spellcheck: 'false',
                                                value: p,
                                                onChange: function (
                                                    n,
                                                ) {
                                                    return h(
                                                        n.target
                                                            .value,
                                                    )
                                                },
                                                onKeyDown: function (
                                                    n,
                                                ) {
                                                    return (function (
                                                        n,
                                                    ) {
                                                        return (
                                                            'Enter' ===
                                                                n.key &&
                                                                ('clear' ===
                                                                p
                                                                    ? (x(
                                                                          [
                                                                              '',
                                                                          ],
                                                                      ),
                                                                      h(
                                                                          '',
                                                                      ))
                                                                    : (x(
                                                                          [].concat(
                                                                              Object(
                                                                                  Ie.a,
                                                                              )(
                                                                                  j,
                                                                              ),
                                                                              [
                                                                                  '$/root/ '.concat(
                                                                                      p,
                                                                                  ),
                                                                                  Fe(
                                                                                      p,
                                                                                  ),
                                                                              ],
                                                                          ),
                                                                      ),
                                                                      h(
                                                                          '',
                                                                      ))),
                                                            null
                                                        )
                                                    })(n)
                                                },
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        })
                    )
                })
            function Ze() {
                var n = Object(o.a)([
                    '\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    left: 0;\n    top: 0;\n    overflow: hidden;\n',
                ])
                return (
                    (Ze = function () {
                        return n
                    }),
                    n
                )
            }
            function Ne() {
                var n = Object(o.a)([
                    '\n    height: 96vh;\n    width: 100vw;\n    position: absolute;\n    left: 0;\n    top: 0;\n    color: black;\n',
                ])
                return (
                    (Ne = function () {
                        return n
                    }),
                    n
                )
            }
            var Le = s.c.div(Ne()),
                Ve = s.c.div(Ze()),
                He = function () {
                    return Object(i.jsxs)(Ve, {
                        children: [
                            Object(i.jsxs)(Le, {
                                children: [
                                    Object(i.jsx)(qe, {}),
                                    Object(i.jsx)(ze, {}),
                                    Object(i.jsx)(Zn, {}),
                                    Object(i.jsx)(Vn, {}),
                                ],
                            }),
                            Object(i.jsx)(z, {}),
                        ],
                    })
                },
                We = t(21),
                Xe = t.p + 'static/media/inprogress.7c4ef097.gif'
            function _e() {
                var n = Object(o.a)([
                    "\n    text-align: center;\n    width: 80%; \n    font-family: 'Ubuntu';\n    font-size: 1.5rem;\n",
                ])
                return (
                    (_e = function () {
                        return n
                    }),
                    n
                )
            }
            function $e() {
                var n = Object(o.a)([
                    '\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    img {\n        width: 80%;\n    }\n',
                ])
                return (
                    ($e = function () {
                        return n
                    }),
                    n
                )
            }
            var nt = s.c.div($e()),
                et = s.c.h1(_e()),
                tt = function () {
                    return Object(i.jsxs)(nt, {
                        children: [
                            Object(i.jsx)('img', {
                                src: Xe,
                                alt: 'programmer gif',
                            }),
                            Object(i.jsx)(et, {
                                children:
                                    'This app is currently Browser-only, I am working on mobile app and I will annouce it as soon as possible',
                            }),
                        ],
                    })
                },
                it = function () {
                    return Object(i.jsxs)(g.a, {
                        store: Je,
                        children: [
                            We.isBrowser &&
                                Object(i.jsxs)(i.Fragment, {
                                    children: [
                                        Object(i.jsx)(d, {}),
                                        Object(i.jsx)(He, {}),
                                    ],
                                }),
                            We.isMobile &&
                                Object(i.jsx)(i.Fragment, {
                                    children: Object(i.jsx)(tt, {}),
                                }),
                        ],
                    })
                }
            a.a.render(
                Object(i.jsx)(it, {}),
                document.getElementById('root'),
            )
        },
    },
    [[55, 1, 2]],
])
//# sourceMappingURL=main.b9e79643.chunk.js.map
