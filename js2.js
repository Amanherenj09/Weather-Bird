(this.webpackJsonprainbow = this.webpackJsonprainbow || []).push([[0], {
    11: function(e, t, c) {},
    13: function(e, t, c) {},
    15: function(e, t, c) {
        "use strict";
        c.r(t);
        var s = c(1)
          , n = c.n(s)
          , a = c(6)
          , i = c.n(a)
          , r = (c(11),
        c(5))
          , o = c(2)
          , j = c(3)
          , l = c.n(j)
          , b = (c(13),
        c(0));
        var d = function() {
            var e, t, c = Object(s.useState)(""), n = Object(o.a)(c, 2), a = n[0], i = n[1], j = Object(s.useState)(), d = Object(o.a)(j, 2), h = d[0], u = d[1], m = Object(s.useState)(), O = Object(o.a)(m, 2), x = O[0], p = O[1], f = Object(s.useState)(""), g = Object(o.a)(f, 2), v = g[0], y = g[1], w = Object(s.useState)(60), N = Object(o.a)(w, 2), S = N[0], M = N[1], C = Object(s.useState)({}), k = Object(o.a)(C, 2), F = k[0], D = k[1], A = Object(s.useState)({}), P = Object(o.a)(A, 2), J = P[0], T = P[1], _ = function() {
                var e = Object(r.a)(l.a.mark((function e() {
                    var t, c;
                    return l.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a, "&APPID=2be1f1e49570c72ca21bafa4dbda1d4f"));
                            case 2:
                                return t = e.sent,
                                e.next = 5,
                                t.json();
                            case 5:
                                c = e.sent,
                                console.log(c),
                                D(c),
                                i(""),
                                "404" !== c.cod && (u(c.coord.lat),
                                p(c.coord.lon),
                                y("more details"));
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }(), q = function(e) {
                var t = e.getHours()
                  , c = e.getMinutes();
                return (t = (t %= 12) || 12) + ":" + (c = c < 10 ? "0" + c : c) + " "
            }, z = function() {
                var e = Object(r.a)(l.a.mark((function e() {
                    var t, c;
                    return l.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return console.log("clicked"),
                                e.next = 3,
                                fetch("https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(h, "&lon=").concat(x, "&appid=2be1f1e49570c72ca21bafa4dbda1d4f"));
                            case 3:
                                return t = e.sent,
                                e.next = 6,
                                t.json();
                            case 6:
                                c = e.sent,
                                T(c),
                                y("less"),
                                M(100);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return Object(b.jsx)(b.Fragment, {
                children: Object(b.jsxs)("div", {
                    className: "app container ",
                    children: [Object(b.jsxs)("div", {
                        className: "input-group input-group-lg mt-3",
                        children: [Object(b.jsx)("input", {
                            onChange: function(e) {
                                i(e.target.value)
                            },
                            type: "text",
                            placeholder: "Search...",
                            value: a,
                            className: "form-control focus-none"
                        }), Object(b.jsx)("button", {
                            onClick: _,
                            className: "btn btn-primary",
                            children: "\ud83d\udd0d"
                        })]
                    }), Object(b.jsxs)("div", {
                        className: "card  box",
                        style: {
                            width: "100%",
                            height: "".concat(S, "vh")
                        },
                        children: ["undefined" !== typeof F.main ? Object(b.jsxs)("div", {
                            className: "card-body",
                            children: [Object(b.jsxs)("h1", {
                                className: "card-title text-center",
                                children: [F.name, ", ", F.sys.country, Object(b.jsx)("br", {}), Object(b.jsx)("span", {
                                    style: {
                                        fontSize: "10.9px"
                                    },
                                    children: function(e) {
                                        var t = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"][e.getDay()]
                                          , c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()]
                                          , s = e.getDate()
                                          , n = e.getFullYear();
                                        return "".concat(t, ", ").concat(s, " ").concat(c, " ").concat(n)
                                    }(new Date)
                                })]
                            }), Object(b.jsx)("br", {}), Object(b.jsxs)("div", {
                                className: "row ",
                                children: [Object(b.jsxs)("div", {
                                    className: "col-6",
                                    children: [Object(b.jsxs)("div", {
                                        className: "temp",
                                        children: [Object(b.jsxs)("h4", {
                                            children: ["\ud83c\udf21", Math.ceil(F.main.temp - 273.15), " \xb0C"]
                                        }), Object(b.jsxs)("h6", {
                                            children: ["Feels like ", Math.ceil(F.main.feels_like - 273.15), " \xb0C"]
                                        }), Object(b.jsx)("br", {}), Object(b.jsxs)("h6", {
                                            children: ["Min. ", Math.ceil(F.main.temp_min - 273.15), " \xb0C"]
                                        }), Object(b.jsxs)("h6", {
                                            children: ["Max. ", Math.ceil(F.main.temp_max - 273.15), " \xb0C"]
                                        }), Object(b.jsx)("br", {})]
                                    }), Object(b.jsxs)("h6", {
                                        children: ["\ud83c\udf05Sunrise: ", q(new Date(F.sys.sunrise)), "A.M."]
                                    }), Object(b.jsx)("br", {}), Object(b.jsxs)("h6", {
                                        children: ["\ud83c\udf07 Sunset: ", q(new Date(F.sys.sunset)), "P.M."]
                                    })]
                                }), Object(b.jsxs)("div", {
                                    className: "col-6",
                                    children: [Object(b.jsxs)("div", {
                                        className: "main-weather",
                                        children: [Object(b.jsx)("h4", {
                                            children: F.weather[0].main
                                        }), Object(b.jsx)("img", {
                                            src: (t = F.weather[0].main,
                                            "Clouds" === t ? "https://img.icons8.com/office/16/000000/cloud.png" : "Sunny" === t ? "https://img.icons8.com/office/16/000000/sun--v1.png" : "Rain" === t ? "https://img.icons8.com/office/16/000000/rain.png" : "Haze" === t ? "https://img.icons8.com/office/16/000000/fog-day--v1.png" : "Mist" === t ? "https://img.icons8.com/office/16/000000/fog-night.png" : "Smoke" === t ? "https://img.icons8.com/office/16/000000/light-rain.png" : "Clear" === t ? "https://img.icons8.com/office/16/000000/sun--v1.png" : void 0),
                                            alt: "weather",
                                            style: {
                                                width: "30px",
                                                marginLeft: "20px"
                                            }
                                        }), Object(b.jsx)("h6", {
                                            children: F.weather[0].description
                                        })]
                                    }), Object(b.jsx)("br", {}), Object(b.jsxs)("h6", {
                                        children: ["\u2193 Pressure: ", F.main.pressure, " hPa"]
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("br", {}), Object(b.jsxs)("h6", {
                                        children: ["\ud83d\udca7 Humidity: ", F.main.humidity, " %"]
                                    }), Object(b.jsx)("br", {}), Object(b.jsxs)("h6", {
                                        children: ["\ud83d\udca8 Wind: ", F.wind.speed, " km/h"]
                                    })]
                                })]
                            }), Object(b.jsxs)("div", {
                                className: "text-center mt-5",
                                children: [" ", Object(b.jsxs)("button", {
                                    onClick: "less" === v ? function() {
                                        T({}),
                                        y("more details"),
                                        M(60)
                                    }
                                    : z,
                                    className: "btn-sm btn-primary",
                                    children: ["View ", v]
                                })]
                            }), "less" === v ? Object(b.jsxs)("div", {
                                className: "row",
                                children: [Object(b.jsxs)("div", {
                                    className: "text-center mt-3",
                                    children: [Object(b.jsx)("h3", {
                                        children: "Air Quality"
                                    }), Object(b.jsx)("br", {}), Object(b.jsx)("br", {}), Object(b.jsxs)("h5", {
                                        children: ["The air quality is ", (e = J.list[0].main.aqi,
                                        ["good \ud83e\udd29", "fair \ud83d\ude03", "moderate \ud83d\ude05", "poor \ud83d\ude41", "very poor \ud83d\ude25"][e - 1])]
                                    })]
                                }), Object(b.jsxs)("div", {
                                    className: "col-6",
                                    children: [Object(b.jsx)("br", {}), Object(b.jsx)("h5", {
                                        children: "Air composition:"
                                    })]
                                }), Object(b.jsxs)("div", {
                                    className: "col-6",
                                    children: [Object(b.jsx)("br", {}), Object(b.jsxs)("ul", {
                                        className: "text-size",
                                        children: [Object(b.jsxs)("li", {
                                            children: ["CO: \xa0\xa0    ", J.list[0].components.co, " "]
                                        }), Object(b.jsxs)("li", {
                                            children: ["NO:  \xa0\xa0    ", J.list[0].components.no]
                                        }), Object(b.jsxs)("li", {
                                            children: ["NO", Object(b.jsx)("sub", {
                                                children: "2"
                                            }), ":   \xa0\xa0  ", J.list[0].components.no2]
                                        }), Object(b.jsxs)("li", {
                                            children: ["O", Object(b.jsx)("sub", {
                                                children: "3"
                                            }), ":    \xa0\xa0\xa0  ", J.list[0].components.o3]
                                        }), Object(b.jsxs)("li", {
                                            children: ["SO", Object(b.jsx)("sub", {
                                                children: "2"
                                            }), ":    \xa0\xa0 ", J.list[0].components.so2]
                                        })]
                                    })]
                                }), Object(b.jsxs)("h6", {
                                    children: ["* All measurements are in \xb5/m", Object(b.jsx)("sup", {
                                        children: "3"
                                    })]
                                })]
                            }) : ""]
                        }) : "Search a valid city name...", Object(b.jsx)("br", {})]
                    })]
                })
            })
        }
          , h = function(e) {
            e && e instanceof Function && c.e(3).then(c.bind(null, 16)).then((function(t) {
                var c = t.getCLS
                  , s = t.getFID
                  , n = t.getFCP
                  , a = t.getLCP
                  , i = t.getTTFB;
                c(e),
                s(e),
                n(e),
                a(e),
                i(e)
            }
            ))
        };
        i.a.render(Object(b.jsx)(n.a.StrictMode, {
            children: Object(b.jsx)(d, {})
        }), document.getElementById("root")),
        h()
    }
}, [[15, 1, 2]]]);
//# sourceMappingURL=main.eaa5a318.chunk.js.map
