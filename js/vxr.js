(function(n, t) {
    function r(n, i) {
        return i ? i.getElementsByClassName(n)[0] : t.getElementsByClassName(n)[0]
    }

    function vt(n, i) {
        return i ? i.getElementById(n) : t.getElementById(n)
    }

    function g(n) {
        return n = n.toLowerCase(), n = n.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a"), n = n.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e"), n = n.replace(/ì|í|ị|ỉ|ĩ/g, "i"), n = n.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o"), n = n.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u"), n = n.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y"), n = n.replace(/đ/g, "d"), n = n.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-"), n = n.replace(/-+-/g, "-"), n.replace(/^\-+|\-+$/g, "")
    }

    function bt() {
        var u = a.value,
            f = e.value,
            h = "utm_source=" + n.location.hostname + "&utm_medium=widget_search&utm_campaign=vxr_widget",
            i, o, s;
        if ((u = u.trim(), f = f.trim(), u == "" || u == "" && f == "") || f == "" || isNaN(b.value) || isNaN(k.value) || (i = y.value, i != null && (i = i.replace(/\//gi, "")), i == null || i == "")) return n.open("https://vexere.com/?" + h), !1;
        o = g(u);
        s = g(f);
        "ho-chi-minh" == o && (o = "sai-gon");
        "ho-chi-minh" == s && (s = "sai-gon");
        var c = wt.value,
            r = yt.value,
            l = pt.value,
            t = "/";
        c == "en" ? (r != null && r.trim() != "" && (t += l.trim() + "-"), t += "bus-ticket-booking", t += "-from-" + o + "-to-" + s + "-") : (t += "ve-xe-khach", r != null && r.trim() != "" && (t += "-" + l.trim()), t += "-tu-" + o + "-di-" + s + "-");
        var v = nt.value,
            p = b.value,
            w = tt.value,
            d = k.value;
        return v != "" && p != "" && w != "" && d != "" ? (t += v + "" + p + "t" + w + "" + d + "1", r != null && r.trim() != "" && (t += "-" + r), t += ".html", i = i.replace(/-/g, ""), c == "vn" ? n.open("https://vexere.com/vi-VN" + t + "?" + h + "#" + i) : n.open("https://vexere.com/en-US" + t + "?" + h + "#" + i)) : n.open("https://vexere.com/?" + h), !1
    }

    function kt() {
        function n(n) {
            var t = n.keyCode || n.which;
            if (t == 9) return n.preventDefault(), !1
        }
        a.addEventListener("keypress", function(n) {
            n.keyCode == 13 && (this.value ? e.focus() : this.focus(), n.preventDefault())
        });
        a.addEventListener("keydown", function(n) {
            n.keyCode == 13 ? (this.value ? e.focus() : this.focus(), n.preventDefault()) : n.keyCode == 9 && e.focus()
        });
        a.addEventListener("focus", function() {
            this.value = " ";
            this.VxrAutoComplete.input_VxrAutoComplete_startFetcher()
        });
        at.enable(a, {
            hintsFetcher: function(n, t) {
                var i = [],
                    r = w(n);
                h.forEach(function(n) {
                    if (n && n[0]) {
                        var t = w(n[0]);
                        t.indexOf(r) >= 0 && i.push(n[0])
                    }
                });
                i.length > 5;
                t(i)
            }
        });
        a.VxrAutoComplete.setListener("select", function() {
            var t = this.value,
                n = h.find(function(n) {
                    return n[0] == t ? !0 : !1
                });
            n && (n[2] > 0 ? (nt.value = 2, b.value = n[2]) : (nt.value = 1, b.value = n[1]))
        });
        document.addEventListener("keydown", n)
    }

    function dt() {
        e.addEventListener("keypress", function(n) {
            n.keyCode == 13 && (this.value ? y.focus() : this.focus(), n.preventDefault())
        });
        e.addEventListener("keydown", function(n) {
            n.keyCode == 13 ? (this.value ? y.focus() : this.focus(), n.preventDefault()) : n.keyCode == 9 && y.focus()
        });
        e.addEventListener("focus", function() {
            this.value = " ";
            this.VxrAutoComplete.input_VxrAutoComplete_startFetcher()
        });
        at.enable(e, {
            hintsFetcher: function(n, t) {
                var i = [],
                    r = w(n);
                d.forEach(function(n) {
                    if (n && n[0]) {
                        var t = w(n[0]);
                        t.indexOf(r) >= 0 && i.push(n[0])
                    }
                });
                i.length > 5;
                t(i)
            }
        });
        e.VxrAutoComplete.setListener("select", function() {
            var t = this.value,
                n = d.find(function(n) {
                    return n[0] == t ? !0 : !1
                });
            n && (n[2] > 0 ? (tt.value = 2, k.value = n[2]) : (tt.value = 1, k.value = n[1]))
        })
    }

    function gt() {
        var n = new Vxr_Picaday({
            field: y,
            format: "DD-MM-YYYY",
            firstDay: 1,
            minDate: new Date,
            i18n: {
                previousMonth: ct,
                nextMonth: lt,
                months: ot,
                weekdays: st,
                weekdaysShort: ht
            }
        })
    }

    function ni() {}

    function ti() {}

    function ii() {
        r("searchForm", i).addEventListener("click", function(n) {
            return bt(!0), n.preventDefault(), !1
        });
        r("btn-switch-route", i).addEventListener("click", function() {
            var n = r("depart-place", i).value;
            r("depart-place", i).value = r("destination", i).value;
            r("destination", i).value = n;
            n = r("start-point-type", i).value;
            r("start-point-type", i).value = r("stop-point-type", i).value;
            r("stop-point-type", i).value = n;
            n = r("start-point-id", i).value;
            r("start-point-id", i).value = r("stop-point-id", i).value;
            r("stop-point-id", i).value = n
        })
    }

    function ri() {
        h = h.sort(function(n, t) {
            return n[3] > t[3] ? 1 : n[3] < t[3] ? -1 : n[0] > t[0] ? 1 : n[0] < t[0] ? -1 : 0
        })
    }
    var p = "https://static.vexere.com/fe/widget2.1",
        w = function(n) {
            var i, r, t, u;
            for (n = n.replace(/^\s+|\s+$/g, ""), n = n.toLowerCase(), n = n.replace(/thành\s+ph?\s+/g, ""), n = n.replace(/thanh\spho/g, ""), i = "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ", r = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd", t = 0, u = i.length; t < u; t++) n = n.replace(new RegExp(i.charAt(t), "g"), r.charAt(t));
            return n = n.replace("-", "qwerty"), n.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "").replace(/-+/g, "").replace(/tp/g, "")
        },
        it = "vexere-widget-" + Math.random().toString().split(".")[1],
        f = '<div class="vxr-widget-form-body"><div class="vxr-widget-form"><input type="hidden" class="vxr-company-id" value="{vxr-company-id}"/><input type="hidden" class="vxr-company-name" value="{vxr-company-name}"/><input type="hidden" class="vxr-lang" value="{vxr-lang}"/><div class="vxr-widget-note">{vxr-company-NameDisplay}<\/div><div class="vxr-widget-group-content"><form class="form vxr-widget-form-horizontal"><div class="vxr-widget-form-group vxr-widget-group-logo-lg"><img class="vxr-widget-logo-lg" src="' + p + '/images/logo-bl.svg?v=10" /><\/div><div class="vxr-widget-form-group"><input type="text" name="depart-place" onfocus="this.select();" onmouseup="return false;" class="depart-place vxr-widget-form-control place ui-autocomplete-input" placeholder="Gõ vào nơi đi" accesskey="1" tabindex="1" autocomplete="off"><input type="hidden" class="start-point-type" value="2"><input type="hidden" class="start-point-id" value="424"><\/div><div class="vxr-widget-form-group  vxr-widget-mgl50 vxr-widget-mgr0" style="position:relative"><a class="btn-switch-route" ><\/a><input type="text" name="destination" onfocus="this.select();" onmouseup="return false;" class="destination vxr-widget-form-control place ui-autocomplete-input" placeholder="Gõ vào nơi đến" accesskey="2" tabindex="2" autocomplete="off"><input type="hidden" class="stop-point-type" value="1"><input type="hidden" class="stop-point-id" value="24"><\/div><div class="vxr-widget-form-group"><input type="text" readonly name="departDate" class="vxr-widget-form-control date depart-date" placeholder="Chọn Ngày Đi" accesskey="3" tabindex="3" autocomplete="off"><\/div><div class="vxr-widget-form-group  vxr-widget-mgl20 vxr-widget-mgr0 vxr-widget-mgr0-lg"><button name="searchSubmit" class="vxr-widget-submit-btn searchForm" tabindex="4">Tìm Vé Xe Rẻ<\/button><\/div><\/form><\/div><\/div><\/div>',
        i, u, ft, et, v, s;
    t.write('<div id="' + it + '" class="vexere-widget"><\/div>');
    i = vt(it);
    u = {};
    try {
        u = function(n) {
            var r, t, i;
            if (n == "") return {};
            for (r = {}, t = 0; t < n.length; ++t) i = n[t].split("=", 2), r[i[0]] = i.length == 1 ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
            return r
        }(i.previousSibling.src.split("?")[1].split("&"))
    } catch (ui) {
        u = {}
    }
    var rt = u && u.lang ? u.lang : "vn",
        ut = u && u.v ? u.v : 1,
        o = u && u.cname ? u.cname : " ";
    o != " " && (o = " " + o + " ");
    ft = g(o);
    et = u && u.cid ? u.cid : "";
    f = f.replace("{vxr-company-name}", ft);
    f = f.replace("{vxr-company-id}", et);
    f = f.replace("{vxr-lang}", rt);
    ut == "3" && (f = f.replace("/images/logo-bl.svg?v=10", "/images/logo-or.svg"));
    var ot = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        st = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ Nhật"],
        ht = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        ct = "Trước",
        lt = "Sau";
    rt == "en" ? (f = f.replace("Gõ vào nơi đi", "Enter from").replace("Gõ vào nơi đến", "Enter to").replace("Chọn Ngày Đi", "Select Day Depart").replace("Đặt vé xe" + o + "trực tuyến", "Book your" + o + "tickets online").replace("Tìm Vé Xe Rẻ", "Search Buses"), f = f.replace("{vxr-company-NameDisplay}", "Book tickets " + o + " online"), ot = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], st = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ht = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ct = "Prev", lt = "Next") : f = f.replace("{vxr-company-NameDisplay}", "Đặt vé xe " + o + "  trực tuyến");
    i.style.width = "100%";
    i.innerHTML = f;
    i.className += " form-" + ut;
    v = document.getElementsByClassName("vexere-widget")[0].offsetWidth;
    s = t.createElement("link");
    s.type = "text/css";
    s.rel = "stylesheet";
    v < 500 ? s.href = p + "/css/vxr-widget2.0.min.css?v=" + Date.now() : v >= 500 & v <= 800 && (s.href = p + "/css/vxr-widget-ipad2.0.min.css?v=" + Date.now());
    v > 800 && (s.href = p + "/css/vxr-widget-destop2.0.min.css?v=" + Date.now());
    t.getElementsByTagName("head")[0].appendChild(s);
    var a = r("depart-place", i),
        e = r("destination", i),
        y = r("depart-date", i),
        nt = r("start-point-type", i),
        b = r("start-point-id", i),
        tt = r("stop-point-type", i),
        yt = r("vxr-company-id", i),
        pt = r("vxr-company-name", i),
        wt = r("vxr-lang", i),
        k = r("stop-point-id", i);
    (function(n) {
        function it(n, t, i) {
            switch (arguments.length) {
                case 2:
                    return n != null ? n : t;
                case 3:
                    return n != null ? n : t != null ? t : i;
                default:
                    throw new Error("Implement me");
            }
        }

        function p(n, t) {
            return uf.call(n, t)
        }

        function ot() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function ri(n) {
            t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + n)
        }

        function o(n, t) {
            var i = !0;
            return w(function() {
                return i && (ri(n), i = !1), t.apply(this, arguments)
            }, t)
        }

        function dr(n, t) {
            br[n] || (ri(t), br[n] = !0)
        }

        function ui(n, t) {
            return function(i) {
                return r(n.call(this, i), t)
            }
        }

        function gr(n, t) {
            return function(i) {
                return this.localeData().ordinal(n.call(this, i), t)
            }
        }

        function nu(n, t) {
            var r = (t.year() - n.year()) * 12 + (t.month() - n.month()),
                i = n.clone().add(r, "months"),
                u, f;
            return t - i < 0 ? (u = n.clone().add(r - 1, "months"), f = (t - i) / (i - u)) : (u = n.clone().add(r + 1, "months"), f = (t - i) / (u - i)), -(r + f)
        }

        function tu(n, t, i) {
            var r;
            return i == null ? t : n.meridiemHour != null ? n.meridiemHour(t, i) : n.isPM != null ? (r = n.isPM(i), r && t < 12 && (t += 12), r || t !== 12 || (t = 0), t) : t
        }

        function fi() {}

        function rt(n, i) {
            i !== !1 && pi(n);
            ei(this, n);
            this._d = new Date(+n._d);
            ii === !1 && (ii = !0, t.updateOffset(this), ii = !1)
        }

        function st(n) {
            var i = li(n),
                r = i.year || 0,
                u = i.quarter || 0,
                f = i.month || 0,
                e = i.week || 0,
                o = i.day || 0,
                s = i.hour || 0,
                h = i.minute || 0,
                c = i.second || 0,
                l = i.millisecond || 0;
            this._milliseconds = +l + c * 1e3 + h * 6e4 + s * 36e5;
            this._days = +o + e * 7;
            this._months = +f + u * 3 + r * 12;
            this._data = {};
            this._locale = t.localeData();
            this._bubble()
        }

        function w(n, t) {
            for (var i in t) p(t, i) && (n[i] = t[i]);
            return p(t, "toString") && (n.toString = t.toString), p(t, "valueOf") && (n.valueOf = t.valueOf), n
        }

        function ei(n, t) {
            var u, i, r;
            if (typeof t._isAMomentObject != "undefined" && (n._isAMomentObject = t._isAMomentObject), typeof t._i != "undefined" && (n._i = t._i), typeof t._f != "undefined" && (n._f = t._f), typeof t._l != "undefined" && (n._l = t._l), typeof t._strict != "undefined" && (n._strict = t._strict), typeof t._tzm != "undefined" && (n._tzm = t._tzm), typeof t._isUTC != "undefined" && (n._isUTC = t._isUTC), typeof t._offset != "undefined" && (n._offset = t._offset), typeof t._pf != "undefined" && (n._pf = t._pf), typeof t._locale != "undefined" && (n._locale = t._locale), ft.length > 0)
                for (u in ft) i = ft[u], r = t[i], typeof r != "undefined" && (n[i] = r);
            return n
        }

        function s(n) {
            return n < 0 ? Math.ceil(n) : Math.floor(n)
        }

        function r(n, t, i) {
            for (var r = "" + Math.abs(n), u = n >= 0; r.length < t;) r = "0" + r;
            return (u ? i ? "+" : "" : "-") + r
        }

        function oi(n, t) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = t.month() - n.month() + (t.year() - n.year()) * 12, n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
        }

        function iu(n, t) {
            var i;
            return t = lt(t, n), n.isBefore(t) ? i = oi(n, t) : (i = oi(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i
        }

        function si(n, i) {
            return function(r, u) {
                var f, e;
                return u === null || isNaN(+u) || (dr(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period)."), e = r, r = u, u = e), r = typeof r == "string" ? +r : r, f = t.duration(r, u), hi(this, f, n), this
            }
        }

        function hi(n, i, r, u) {
            var o = i._milliseconds,
                f = i._days,
                e = i._months;
            u = u == null ? !0 : u;
            o && n._d.setTime(+n._d + o * r);
            f && rr(n, "Date", bt(n, "Date") + f * r);
            e && ir(n, bt(n, "Month") + e * r);
            u && t.updateOffset(n, f || e)
        }

        function ut(n) {
            return Object.prototype.toString.call(n) === "[object Array]"
        }

        function ht(n) {
            return Object.prototype.toString.call(n) === "[object Date]" || n instanceof Date
        }

        function ci(n, t, r) {
            for (var e = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), f = 0, u = 0; u < e; u++)(r && n[u] !== t[u] || !r && i(n[u]) !== i(t[u])) && f++;
            return f + o
        }

        function f(n) {
            if (n) {
                var t = n.toLowerCase().replace(/(.)s$/, "$1");
                n = ne[n] || te[t] || t
            }
            return n
        }

        function li(n) {
            var r = {},
                t;
            for (var i in n) p(n, i) && (t = f(i), t && (r[t] = n[i]));
            return r
        }

        function ru(i) {
            var r, u;
            if (i.indexOf("week") === 0) r = 7, u = "day";
            else if (i.indexOf("month") === 0) r = 12, u = "month";
            else return;
            t[i] = function(f, e) {
                var o, s, c = t._locale[i],
                    h = [];
                if (typeof f == "number" && (e = f, f = n), s = function(n) {
                        var i = t().utc().set(u, n);
                        return c.call(t._locale, i, f || "")
                    }, e != null) return s(e);
                for (o = 0; o < r; o++) h.push(s(o));
                return h
            }
        }

        function i(n) {
            var t = +n,
                i = 0;
            return t !== 0 && isFinite(t) && (i = t >= 0 ? Math.floor(t) : Math.ceil(t)), i
        }

        function ct(n, t) {
            return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
        }

        function ai(n, i, r) {
            return b(t([n, 11, 31 + i - r]), i, r).week
        }

        function vi(n) {
            return yi(n) ? 366 : 365
        }

        function yi(n) {
            return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
        }

        function pi(n) {
            var t;
            n._a && n._pf.overflow === -2 && (t = n._a[a] < 0 || n._a[a] > 11 ? a : n._a[h] < 1 || n._a[h] > ct(n._a[l], n._a[a]) ? h : n._a[e] < 0 || n._a[e] > 24 || n._a[e] === 24 && (n._a[d] !== 0 || n._a[g] !== 0 || n._a[nt] !== 0) ? e : n._a[d] < 0 || n._a[d] > 59 ? d : n._a[g] < 0 || n._a[g] > 59 ? g : n._a[nt] < 0 || n._a[nt] > 999 ? nt : -1, n._pf._overflowDayOfYear && (t < l || t > h) && (t = h), n._pf.overflow = t)
        }

        function wi(t) {
            return t._isValid == null && (t._isValid = !isNaN(t._d.getTime()) && t._pf.overflow < 0 && !t._pf.empty && !t._pf.invalidMonth && !t._pf.nullInput && !t._pf.invalidFormat && !t._pf.userInvalidated, t._strict && (t._isValid = t._isValid && t._pf.charsLeftOver === 0 && t._pf.unusedTokens.length === 0 && t._pf.bigHour === n)), t._isValid
        }

        function bi(n) {
            return n ? n.toLowerCase().replace("_", "-") : n
        }

        function uu(n) {
            for (var r = 0, i, t, f, u; r < n.length;) {
                for (u = bi(n[r]).split("-"), i = u.length, t = bi(n[r + 1]), t = t ? t.split("-") : null; i > 0;) {
                    if (f = ki(u.slice(0, i).join("-")), f) return f;
                    if (t && t.length >= i && ci(u, t, !0) >= i - 1) break;
                    i--
                }
                r++
            }
            return null
        }

        function ki(n) {
            var i = null;
            if (!tt[n] && sr) try {
                i = t.locale();
                require("./locale/" + n);
                t.locale(i)
            } catch (r) {}
            return tt[n]
        }

        function lt(n, i) {
            var r, u;
            return i._isUTC ? (r = i.clone(), u = (t.isMoment(n) || ht(n) ? +n : +t(n)) - +r, r._d.setTime(+r._d + u), t.updateOffset(r, !1), r) : t(n).local()
        }

        function fu(n) {
            return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
        }

        function eu(n) {
            for (var i = n.match(hr), t = 0, r = i.length; t < r; t++) i[t] = v[i[t]] ? v[i[t]] : fu(i[t]);
            return function(u) {
                var f = "";
                for (t = 0; t < r; t++) f += i[t] instanceof Function ? i[t].call(u, n) : i[t];
                return f
            }
        }

        function at(n, t) {
            return n.isValid() ? (t = di(t, n.localeData()), ti[t] || (ti[t] = eu(t)), ti[t](n)) : n.localeData().invalidDate()
        }

        function di(n, t) {
            function r(n) {
                return t.longDateFormat(n) || n
            }
            var i = 5;
            for (et.lastIndex = 0; i >= 0 && et.test(n);) n = n.replace(et, r), et.lastIndex = 0, i -= 1;
            return n
        }

        function ou(n, t) {
            var i = t._strict;
            switch (n) {
                case "Q":
                    return lr;
                case "DDDD":
                    return vr;
                case "YYYY":
                case "GGGG":
                case "gggg":
                    return i ? wf : hf;
                case "Y":
                case "G":
                case "g":
                    return kf;
                case "YYYYYY":
                case "YYYYY":
                case "GGGGG":
                case "ggggg":
                    return i ? bf : cf;
                case "S":
                    if (i) return lr;
                case "SS":
                    if (i) return ar;
                case "SSS":
                    if (i) return vr;
                case "DDD":
                    return sf;
                case "MMM":
                case "MMMM":
                case "dd":
                case "ddd":
                case "dddd":
                    return af;
                case "a":
                case "A":
                    return t._locale._meridiemParse;
                case "x":
                    return yf;
                case "X":
                    return pf;
                case "Z":
                case "ZZ":
                    return dt;
                case "T":
                    return vf;
                case "SSSS":
                    return lf;
                case "MM":
                case "DD":
                case "YY":
                case "GG":
                case "gg":
                case "HH":
                case "hh":
                case "mm":
                case "ss":
                case "ww":
                case "WW":
                    return i ? ar : cr;
                case "M":
                case "D":
                case "d":
                case "H":
                case "h":
                case "m":
                case "s":
                case "w":
                case "W":
                case "e":
                case "E":
                    return cr;
                case "Do":
                    return i ? t._locale._ordinalParse : t._locale._ordinalParseLenient;
                default:
                    return new RegExp(vu(au(n.replace("\\", "")), "i"))
            }
        }

        function vt(n) {
            n = n || "";
            var r = n.match(dt) || [],
                f = r[r.length - 1] || [],
                t = (f + "").match(gf) || ["-", 0, 0],
                u = +(t[1] * 60) + i(t[2]);
            return t[0] === "+" ? u : -u
        }

        function su(n, r, u) {
            var o, f = u._a;
            switch (n) {
                case "Q":
                    r != null && (f[a] = (i(r) - 1) * 3);
                    break;
                case "M":
                case "MM":
                    r != null && (f[a] = i(r) - 1);
                    break;
                case "MMM":
                case "MMMM":
                    o = u._locale.monthsParse(r, n, u._strict);
                    o != null ? f[a] = o : u._pf.invalidMonth = r;
                    break;
                case "D":
                case "DD":
                    r != null && (f[h] = i(r));
                    break;
                case "Do":
                    r != null && (f[h] = i(parseInt(r.match(/\d{1,2}/)[0], 10)));
                    break;
                case "DDD":
                case "DDDD":
                    r != null && (u._dayOfYear = i(r));
                    break;
                case "YY":
                    f[l] = t.parseTwoDigitYear(r);
                    break;
                case "YYYY":
                case "YYYYY":
                case "YYYYYY":
                    f[l] = i(r);
                    break;
                case "a":
                case "A":
                    u._meridiem = r;
                    break;
                case "h":
                case "hh":
                    u._pf.bigHour = !0;
                case "H":
                case "HH":
                    f[e] = i(r);
                    break;
                case "m":
                case "mm":
                    f[d] = i(r);
                    break;
                case "s":
                case "ss":
                    f[g] = i(r);
                    break;
                case "S":
                case "SS":
                case "SSS":
                case "SSSS":
                    f[nt] = i(("0." + r) * 1e3);
                    break;
                case "x":
                    u._d = new Date(i(r));
                    break;
                case "X":
                    u._d = new Date(parseFloat(r) * 1e3);
                    break;
                case "Z":
                case "ZZ":
                    u._useUTC = !0;
                    u._tzm = vt(r);
                    break;
                case "dd":
                case "ddd":
                case "dddd":
                    o = u._locale.weekdaysParse(r);
                    o != null ? (u._w = u._w || {}, u._w.d = o) : u._pf.invalidWeekday = r;
                    break;
                case "w":
                case "ww":
                case "W":
                case "WW":
                case "d":
                case "e":
                case "E":
                    n = n.substr(0, 1);
                case "gggg":
                case "GGGG":
                case "GGGGG":
                    n = n.substr(0, 2);
                    r && (u._w = u._w || {}, u._w[n] = i(r));
                    break;
                case "gg":
                case "GG":
                    u._w = u._w || {};
                    u._w[n] = t.parseTwoDigitYear(r)
            }
        }

        function hu(n) {
            var i, o, f, u, r, e, s;
            i = n._w;
            i.GG != null || i.W != null || i.E != null ? (r = 1, e = 4, o = it(i.GG, n._a[l], b(t(), 1, 4).year), f = it(i.W, 1), u = it(i.E, 1)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = it(i.gg, n._a[l], b(t(), r, e).year), f = it(i.w, 1), i.d != null ? (u = i.d, u < r && ++f) : u = i.e != null ? i.e + r : r);
            s = tf(o, f, u, e, r);
            n._a[l] = s.year;
            n._dayOfYear = s.dayOfYear
        }

        function yt(n) {
            var t, i, r = [],
                u, f;
            if (!n._d) {
                for (u = lu(n), n._w && n._a[h] == null && n._a[a] == null && hu(n), n._dayOfYear && (f = it(n._a[l], u[l]), n._dayOfYear > vi(f) && (n._pf._overflowDayOfYear = !0), i = wt(f, 0, n._dayOfYear), n._a[a] = i.getUTCMonth(), n._a[h] = i.getUTCDate()), t = 0; t < 3 && n._a[t] == null; ++t) n._a[t] = r[t] = u[t];
                for (; t < 7; t++) n._a[t] = r[t] = n._a[t] == null ? t === 2 ? 1 : 0 : n._a[t];
                n._a[e] === 24 && n._a[d] === 0 && n._a[g] === 0 && n._a[nt] === 0 && (n._nextDay = !0, n._a[e] = 0);
                n._d = (n._useUTC ? wt : ku).apply(null, r);
                n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
                n._nextDay && (n._a[e] = 24)
            }
        }

        function cu(n) {
            var t;
            n._d || (t = li(n._i), n._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], yt(n))
        }

        function lu(n) {
            var t = new Date;
            return n._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
        }

        function pt(i) {
            if (i._f === t.ISO_8601) {
                gi(i);
                return
            }
            i._a = [];
            i._pf.empty = !0;
            for (var r = "" + i._i, u, f, o, l = r.length, h = 0, c = di(i._f, i._locale).match(hr) || [], s = 0; s < c.length; s++) f = c[s], u = (r.match(ou(f, i)) || [])[0], u && (o = r.substr(0, r.indexOf(u)), o.length > 0 && i._pf.unusedInput.push(o), r = r.slice(r.indexOf(u) + u.length), h += u.length), v[f] ? (u ? i._pf.empty = !1 : i._pf.unusedTokens.push(f), su(f, u, i)) : i._strict && !u && i._pf.unusedTokens.push(f);
            i._pf.charsLeftOver = l - h;
            r.length > 0 && i._pf.unusedInput.push(r);
            i._pf.bigHour === !0 && i._a[e] <= 12 && (i._pf.bigHour = n);
            i._a[e] = tu(i._locale, i._a[e], i._meridiem);
            yt(i);
            pi(i)
        }

        function au(n) {
            return n.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
                return t || i || r || u
            })
        }

        function vu(n) {
            return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function yu(n) {
            var t, f, u, r, i;
            if (n._f.length === 0) {
                n._pf.invalidFormat = !0;
                n._d = new Date(NaN);
                return
            }
            for (r = 0; r < n._f.length; r++)(i = 0, t = ei({}, n), n._useUTC != null && (t._useUTC = n._useUTC), t._pf = ot(), t._f = n._f[r], pt(t), wi(t)) && (i += t._pf.charsLeftOver, i += t._pf.unusedTokens.length * 10, t._pf.score = i, (u == null || i < u) && (u = i, f = t));
            w(n, f || t)
        }

        function gi(n) {
            var t, i, r = n._i,
                u = df.exec(r);
            if (u) {
                for (n._pf.iso = !0, t = 0, i = gt.length; t < i; t++)
                    if (gt[t][1].exec(r)) {
                        n._f = gt[t][0] + (u[6] || " ");
                        break
                    }
                for (t = 0, i = ni.length; t < i; t++)
                    if (ni[t][1].exec(r)) {
                        n._f += ni[t][0];
                        break
                    }
                r.match(dt) && (n._f += "Z");
                pt(n)
            } else n._isValid = !1
        }

        function pu(n) {
            gi(n);
            n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))
        }

        function wu(n, t) {
            for (var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
            return r
        }

        function bu(i) {
            var r = i._i,
                u;
            r === n ? i._d = new Date : ht(r) ? i._d = new Date(+r) : (u = ff.exec(r)) !== null ? i._d = new Date(+u[1]) : typeof r == "string" ? pu(i) : ut(r) ? (i._a = wu(r.slice(0), function(n) {
                return parseInt(n, 10)
            }), yt(i)) : typeof r == "object" ? cu(i) : typeof r == "number" ? i._d = new Date(r) : t.createFromInputFallback(i)
        }

        function ku(n, t, i, r, u, f, e) {
            var o = new Date(n, t, i, r, u, f, e);
            return n < 1970 && o.setFullYear(n), o
        }

        function wt(n) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return n < 1970 && t.setUTCFullYear(n), t
        }

        function du(n, t) {
            if (typeof n == "string")
                if (isNaN(n)) {
                    if (n = t.weekdaysParse(n), typeof n != "number") return null
                } else n = parseInt(n, 10);
            return n
        }

        function gu(n, t, i, r, u) {
            return u.relativeTime(t || 1, !!i, n, r)
        }

        function nf(n, i, r) {
            var u = t.duration(n).abs(),
                c = k(u.as("s")),
                e = k(u.as("m")),
                o = k(u.as("h")),
                s = k(u.as("d")),
                h = k(u.as("M")),
                l = k(u.as("y")),
                f = c < y.s && ["s", c] || e === 1 && ["m"] || e < y.m && ["mm", e] || o === 1 && ["h"] || o < y.h && ["hh", o] || s === 1 && ["d"] || s < y.d && ["dd", s] || h === 1 && ["M"] || h < y.M && ["MM", h] || l === 1 && ["y"] || ["yy", l];
            return f[2] = i, f[3] = +n > 0, f[4] = r, gu.apply({}, f)
        }

        function b(n, i, r) {
            var e = r - i,
                u = r - n.day(),
                f;
            return u > e && (u -= 7), u < e - 7 && (u += 7), f = t(n).add(u, "d"), {
                week: Math.ceil(f.dayOfYear() / 7),
                year: f.year()
            }
        }

        function tf(n, t, i, r, u) {
            var f = wt(n, 0, 1).getUTCDay(),
                o, e;
            return f = f === 0 ? 7 : f, i = i != null ? i : u, o = u - f + (f > r ? 7 : 0) - (f < u ? 7 : 0), e = 7 * (t - 1) + (i - u) + o + 1, {
                year: e > 0 ? n : n - 1,
                dayOfYear: e > 0 ? e : vi(n - 1) + e
            }
        }

        function nr(i) {
            var r = i._i,
                f = i._f,
                u;
            return (i._locale = i._locale || t.localeData(i._l), r === null || f === n && r === "") ? t.invalid({
                nullInput: !0
            }) : (typeof r == "string" && (i._i = r = i._locale.preparse(r)), t.isMoment(r)) ? new rt(r, !0) : (f ? ut(f) ? yu(i) : pt(i) : bu(i), u = new rt(i), u._nextDay && (u.add(1, "d"), u._nextDay = n), u)
        }

        function tr(n, i) {
            var u, r;
            if (i.length === 1 && ut(i[0]) && (i = i[0]), !i.length) return t();
            for (u = i[0], r = 1; r < i.length; ++r) i[r][n](u) && (u = i[r]);
            return u
        }

        function ir(n, t) {
            var i;
            return typeof t == "string" && (t = n.localeData().monthsParse(t), typeof t != "number") ? n : (i = Math.min(n.date(), ct(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n)
        }

        function bt(n, t) {
            return n._d["get" + (n._isUTC ? "UTC" : "") + t]()
        }

        function rr(n, t, i) {
            return t === "Month" ? ir(n, i) : n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
        }

        function c(n, i) {
            return function(r) {
                return r != null ? (rr(this, n, r), t.updateOffset(this, i), this) : bt(this, n)
            }
        }

        function ur(n) {
            return n * 400 / 146097
        }

        function fr(n) {
            return n * 146097 / 400
        }

        function rf(n) {
            t.duration.fn[n] = function() {
                return this._data[n]
            }
        }

        function er(n) {
            typeof ender == "undefined" && (or = kt.moment, kt.moment = n ? o("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", t) : t)
        }
        for (var t, kt = typeof global != "undefined" && (typeof window == "undefined" || window === global.window) ? global : this, or, k = Math.round, uf = Object.prototype.hasOwnProperty, u, l = 0, a = 1, h = 2, e = 3, d = 4, g = 5, nt = 6, tt = {}, ft = [], sr = typeof module != "undefined" && module && module.exports, ff = /^\/?Date\((\-?\d+)/i, ef = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, of = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, hr = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, et = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, cr = /\d\d?/, sf = /\d{1,3}/, hf = /\d{1,4}/, cf = /[+\-]?\d{1,6}/, lf = /\d+/, af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, dt = /Z|[\+\-]\d\d:?\d\d/gi, vf = /T/i, yf = /[\+\-]?\d+/, pf = /[\+\-]?\d+(\.\d{1,3})?/, lr = /\d/, ar = /\d\d/, vr = /\d{3}/, wf = /\d{4}/, bf = /[+-]?\d{6}/, kf = /[+-]?\d+/, df = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gt = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ], ni = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ], gf = /([\+\-]|\d\d)/gi, ie = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), yr = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        }, ne = {
            ms: "millisecond",
            s: "second",
            m: "minute",
            h: "hour",
            d: "day",
            D: "date",
            w: "week",
            W: "isoWeek",
            M: "month",
            Q: "quarter",
            y: "year",
            DDD: "dayOfYear",
            e: "weekday",
            E: "isoWeekday",
            gg: "weekYear",
            GG: "isoWeekYear"
        }, te = {
            dayofyear: "dayOfYear",
            isoweekday: "isoWeekday",
            isoweek: "isoWeek",
            weekyear: "weekYear",
            isoweekyear: "isoWeekYear"
        }, ti = {}, y = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }, pr = "DDD w W M D d".split(" "), wr = "M D H h m s w W".split(" "), v = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(n) {
                return this.localeData().monthsShort(this, n)
            },
            MMMM: function(n) {
                return this.localeData().months(this, n)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                return this.dayOfYear()
            },
            d: function() {
                return this.day()
            },
            dd: function(n) {
                return this.localeData().weekdaysMin(this, n)
            },
            ddd: function(n) {
                return this.localeData().weekdaysShort(this, n)
            },
            dddd: function(n) {
                return this.localeData().weekdays(this, n)
            },
            w: function() {
                return this.week()
            },
            W: function() {
                return this.isoWeek()
            },
            YY: function() {
                return r(this.year() % 100, 2)
            },
            YYYY: function() {
                return r(this.year(), 4)
            },
            YYYYY: function() {
                return r(this.year(), 5)
            },
            YYYYYY: function() {
                var n = this.year(),
                    t = n >= 0 ? "+" : "-";
                return t + r(Math.abs(n), 6)
            },
            gg: function() {
                return r(this.weekYear() % 100, 2)
            },
            gggg: function() {
                return r(this.weekYear(), 4)
            },
            ggggg: function() {
                return r(this.weekYear(), 5)
            },
            GG: function() {
                return r(this.isoWeekYear() % 100, 2)
            },
            GGGG: function() {
                return r(this.isoWeekYear(), 4)
            },
            GGGGG: function() {
                return r(this.isoWeekYear(), 5)
            },
            e: function() {
                return this.weekday()
            },
            E: function() {
                return this.isoWeekday()
            },
            a: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return i(this.milliseconds() / 100)
            },
            SS: function() {
                return r(i(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return r(this.milliseconds(), 3)
            },
            SSSS: function() {
                return r(this.milliseconds(), 3)
            },
            Z: function() {
                var n = this.utcOffset(),
                    t = "+";
                return n < 0 && (n = -n, t = "-"), t + r(i(n / 60), 2) + ":" + r(i(n) % 60, 2)
            },
            ZZ: function() {
                var n = this.utcOffset(),
                    t = "+";
                return n < 0 && (n = -n, t = "-"), t + r(i(n / 60), 2) + r(i(n) % 60, 2)
            },
            z: function() {
                return this.zoneAbbr()
            },
            zz: function() {
                return this.zoneName()
            },
            x: function() {
                return this.valueOf()
            },
            X: function() {
                return this.unix()
            },
            Q: function() {
                return this.quarter()
            }
        }, br = {}, kr = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], ii = !1; pr.length;) u = pr.pop(), v[u + "o"] = gr(v[u], u);
        while (wr.length) u = wr.pop(), v[u + u] = ui(v[u], 2);
        for (v.DDDD = ui(v.DDD, 3), w(fi.prototype, {
            set: function(n) {
                var t;
                for (var i in n) t = n[i], typeof t == "function" ? this[i] = t : this["_" + i] = t;
                this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            },
            _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            months: function(n) {
                return this._months[n.month()]
            },
            _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            monthsShort: function(n) {
                return this._monthsShort[n.month()]
            },
            monthsParse: function(n, i, r) {
                var u, f, e;
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), u = 0; u < 12; u++)
                    if ((f = t.utc([2e3, u]), r && !this._longMonthsParse[u] && (this._longMonthsParse[u] = new RegExp("^" + this.months(f, "").replace(".", "") + "$", "i"), this._shortMonthsParse[u] = new RegExp("^" + this.monthsShort(f, "").replace(".", "") + "$", "i")), r || this._monthsParse[u] || (e = "^" + this.months(f, "") + "|^" + this.monthsShort(f, ""), this._monthsParse[u] = new RegExp(e.replace(".", ""), "i")), r && i === "MMMM" && this._longMonthsParse[u].test(n)) || r && i === "MMM" && this._shortMonthsParse[u].test(n) || !r && this._monthsParse[u].test(n)) return u
            },
            _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdays: function(n) {
                return this._weekdays[n.day()]
            },
            _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysShort: function(n) {
                return this._weekdaysShort[n.day()]
            },
            _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            weekdaysMin: function(n) {
                return this._weekdaysMin[n.day()]
            },
            weekdaysParse: function(n) {
                var i, r, u;
                for (this._weekdaysParse || (this._weekdaysParse = []), i = 0; i < 7; i++)
                    if (this._weekdaysParse[i] || (r = t([2e3, 1]).day(i), u = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(u.replace(".", ""), "i")), this._weekdaysParse[i].test(n)) return i
            },
            _longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            longDateFormat: function(n) {
                var t = this._longDateFormat[n];
                return !t && this._longDateFormat[n.toUpperCase()] && (t = this._longDateFormat[n.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(n) {
                    return n.slice(1)
                }), this._longDateFormat[n] = t), t
            },
            isPM: function(n) {
                return (n + "").toLowerCase().charAt(0) === "p"
            },
            _meridiemParse: /[ap]\.?m?\.?/i,
            meridiem: function(n, t, i) {
                return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
            },
            _calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            calendar: function(n, t, i) {
                var r = this._calendar[n];
                return typeof r == "function" ? r.apply(t, [i]) : r
            },
            _relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            relativeTime: function(n, t, i, r) {
                var u = this._relativeTime[i];
                return typeof u == "function" ? u(n, t, i, r) : u.replace(/%d/i, n)
            },
            pastFuture: function(n, t) {
                var i = this._relativeTime[n > 0 ? "future" : "past"];
                return typeof i == "function" ? i(t) : i.replace(/%s/i, t)
            },
            ordinal: function(n) {
                return this._ordinal.replace("%d", n)
            },
            _ordinal: "%d",
            _ordinalParse: /\d{1,2}/,
            preparse: function(n) {
                return n
            },
            postformat: function(n) {
                return n
            },
            week: function(n) {
                return b(n, this._week.dow, this._week.doy).week
            },
            _week: {
                dow: 0,
                doy: 6
            },
            firstDayOfWeek: function() {
                return this._week.dow
            },
            firstDayOfYear: function() {
                return this._week.doy
            },
            _invalidDate: "Invalid date",
            invalidDate: function() {
                return this._invalidDate
            }
        }), t = function(t, i, r, u) {
            var f;
            return typeof r == "boolean" && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._i = t, f._f = i, f._l = r, f._strict = u, f._isUTC = !1, f._pf = ot(), nr(f)
        }, t.suppressDeprecationWarnings = !1, t.createFromInputFallback = o("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
            n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
        }), t.min = function() {
            var n = [].slice.call(arguments, 0);
            return tr("isBefore", n)
        }, t.max = function() {
            var n = [].slice.call(arguments, 0);
            return tr("isAfter", n)
        }, t.utc = function(t, i, r, u) {
            var f;
            return typeof r == "boolean" && (u = r, r = n), f = {}, f._isAMomentObject = !0, f._useUTC = !0, f._isUTC = !0, f._l = r, f._i = t, f._f = i, f._strict = u, f._pf = ot(), nr(f).utc()
        }, t.unix = function(n) {
            return t(n * 1e3)
        }, t.duration = function(n, r) {
            var u = n,
                f = null,
                o, c, s, l;
            return t.isDuration(n) ? u = {
                ms: n._milliseconds,
                d: n._days,
                M: n._months
            } : typeof n == "number" ? (u = {}, r ? u[r] = n : u.milliseconds = n) : (f = ef.exec(n)) ? (o = f[1] === "-" ? -1 : 1, u = {
                y: 0,
                d: i(f[h]) * o,
                h: i(f[e]) * o,
                m: i(f[d]) * o,
                s: i(f[g]) * o,
                ms: i(f[nt]) * o
            }) : (f = of .exec(n)) ? (o = f[1] === "-" ? -1 : 1, s = function(n) {
                var t = n && parseFloat(n.replace(",", "."));
                return (isNaN(t) ? 0 : t) * o
            }, u = {
                y: s(f[2]),
                M: s(f[3]),
                d: s(f[4]),
                h: s(f[5]),
                m: s(f[6]),
                s: s(f[7]),
                w: s(f[8])
            }) : u == null ? u = {} : typeof u == "object" && ("from" in u || "to" in u) && (l = iu(t(u.from), t(u.to)), u = {}, u.ms = l.milliseconds, u.M = l.months), c = new st(u), t.isDuration(n) && p(n, "_locale") && (c._locale = n._locale), c
        }, t.version = "2.9.0", t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.ISO_8601 = function() {}, t.momentProperties = ft, t.updateOffset = function() {}, t.relativeTimeThreshold = function(t, i) {
            return y[t] === n ? !1 : i === n ? y[t] : (y[t] = i, !0)
        }, t.lang = o("moment.lang is deprecated. Use moment.locale instead.", function(n, i) {
            return t.locale(n, i)
        }), t.locale = function(n, i) {
            var r;
            return n && (r = typeof i != "undefined" ? t.defineLocale(n, i) : t.localeData(n), r && (t.duration._locale = t._locale = r)), t._locale._abbr
        }, t.defineLocale = function(n, i) {
            return i !== null ? (i.abbr = n, tt[n] || (tt[n] = new fi), tt[n].set(i), t.locale(n), tt[n]) : (delete tt[n], null)
        }, t.langData = o("moment.langData is deprecated. Use moment.localeData instead.", function(n) {
            return t.localeData(n)
        }), t.localeData = function(n) {
            var i;
            if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return t._locale;
            if (!ut(n)) {
                if (i = ki(n), i) return i;
                n = [n]
            }
            return uu(n)
        }, t.isMoment = function(n) {
            return n instanceof rt || n != null && p(n, "_isAMomentObject")
        }, t.isDuration = function(n) {
            return n instanceof st
        }, u = kr.length - 1; u >= 0; --u) ru(kr[u]);
        t.normalizeUnits = function(n) {
            return f(n)
        };
        t.invalid = function(n) {
            var i = t.utc(NaN);
            return n != null ? w(i._pf, n) : i._pf.userInvalidated = !0, i
        };
        t.parseZone = function() {
            return t.apply(null, arguments).parseZone()
        };
        t.parseTwoDigitYear = function(n) {
            return i(n) + (i(n) > 68 ? 1900 : 2e3)
        };
        t.isDate = ht;
        w(t.fn = rt.prototype, {
            clone: function() {
                return t(this)
            },
            valueOf: function() {
                return +this._d - (this._offset || 0) * 6e4
            },
            unix: function() {
                return Math.floor(+this / 1e3)
            },
            toString: function() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            },
            toDate: function() {
                return this._offset ? new Date(+this) : this._d
            },
            toISOString: function() {
                var n = t(this).utc();
                return 0 < n.year() && n.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : at(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : at(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            },
            toArray: function() {
                var n = this;
                return [n.year(), n.month(), n.date(), n.hours(), n.minutes(), n.seconds(), n.milliseconds()]
            },
            isValid: function() {
                return wi(this)
            },
            isDSTShifted: function() {
                return this._a ? this.isValid() && ci(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
            },
            parsingFlags: function() {
                return w({}, this._pf)
            },
            invalidAt: function() {
                return this._pf.overflow
            },
            utc: function(n) {
                return this.utcOffset(0, n)
            },
            local: function(n) {
                return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(this._dateUtcOffset(), "m")), this
            },
            format: function(n) {
                var i = at(this, n || t.defaultFormat);
                return this.localeData().postformat(i)
            },
            add: si(1, "add"),
            subtract: si(-1, "subtract"),
            diff: function(n, t, i) {
                var e = lt(n, this),
                    o = (e.utcOffset() - this.utcOffset()) * 6e4,
                    u, r;
                return t = f(t), t === "year" || t === "month" || t === "quarter" ? (r = nu(this, e), t === "quarter" ? r = r / 3 : t === "year" && (r = r / 12)) : (u = this - e, r = t === "second" ? u / 1e3 : t === "minute" ? u / 6e4 : t === "hour" ? u / 36e5 : t === "day" ? (u - o) / 864e5 : t === "week" ? (u - o) / 6048e5 : u), i ? r : s(r)
            },
            from: function(n, i) {
                return t.duration({
                    to: this,
                    from: n
                }).locale(this.locale()).humanize(!i)
            },
            fromNow: function(n) {
                return this.from(t(), n)
            },
            calendar: function(n) {
                var r = n || t(),
                    u = lt(r, this).startOf("day"),
                    i = this.diff(u, "days", !0),
                    f = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
                return this.format(this.localeData().calendar(f, this, t(r)))
            },
            isLeapYear: function() {
                return yi(this.year())
            },
            isDST: function() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            },
            day: function(n) {
                var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return n != null ? (n = du(n, this.localeData()), this.add(n - t, "d")) : t
            },
            month: c("Month", !0),
            startOf: function(n) {
                n = f(n);
                switch (n) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return n === "week" ? this.weekday(0) : n === "isoWeek" && this.isoWeekday(1), n === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
            },
            endOf: function(t) {
                return (t = f(t), t === n || t === "millisecond") ? this : this.startOf(t).add(1, t === "isoWeek" ? "week" : t).subtract(1, "ms")
            },
            isAfter: function(n, i) {
                var r;
                return i = f(typeof i != "undefined" ? i : "millisecond"), i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this > +n) : (r = t.isMoment(n) ? +n : +t(n), r < +this.clone().startOf(i))
            },
            isBefore: function(n, i) {
                var r;
                return i = f(typeof i != "undefined" ? i : "millisecond"), i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this < +n) : (r = t.isMoment(n) ? +n : +t(n), +this.clone().endOf(i) < r)
            },
            isBetween: function(n, t, i) {
                return this.isAfter(n, i) && this.isBefore(t, i)
            },
            isSame: function(n, i) {
                var r;
                return i = f(i || "millisecond"), i === "millisecond" ? (n = t.isMoment(n) ? n : t(n), +this == +n) : (r = +t(n), +this.clone().startOf(i) <= r && r <= +this.clone().endOf(i))
            },
            min: o("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function(n) {
                return n = t.apply(null, arguments), n < this ? this : n
            }),
            max: o("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function(n) {
                return n = t.apply(null, arguments), n > this ? this : n
            }),
            zone: o("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(n, t) {
                return n != null ? (typeof n != "string" && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
            }),
            utcOffset: function(n, i) {
                var r = this._offset || 0,
                    u;
                return n != null ? (typeof n == "string" && (n = vt(n)), Math.abs(n) < 16 && (n = n * 60), !this._isUTC && i && (u = this._dateUtcOffset()), this._offset = n, this._isUTC = !0, u != null && this.add(u, "m"), r !== n && (!i || this._changeInProgress ? hi(this, t.duration(n - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : this._dateUtcOffset()
            },
            isLocal: function() {
                return !this._isUTC
            },
            isUtcOffset: function() {
                return this._isUTC
            },
            isUtc: function() {
                return this._isUTC && this._offset === 0
            },
            zoneAbbr: function() {
                return this._isUTC ? "UTC" : ""
            },
            zoneName: function() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            },
            parseZone: function() {
                return this._tzm ? this.utcOffset(this._tzm) : typeof this._i == "string" && this.utcOffset(vt(this._i)), this
            },
            hasAlignedHourOffset: function(n) {
                return n = n ? t(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0
            },
            daysInMonth: function() {
                return ct(this.year(), this.month())
            },
            dayOfYear: function(n) {
                var i = k((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
                return n == null ? i : this.add(n - i, "d")
            },
            quarter: function(n) {
                return n == null ? Math.ceil((this.month() + 1) / 3) : this.month((n - 1) * 3 + this.month() % 3)
            },
            weekYear: function(n) {
                var t = b(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
                return n == null ? t : this.add(n - t, "y")
            },
            isoWeekYear: function(n) {
                var t = b(this, 1, 4).year;
                return n == null ? t : this.add(n - t, "y")
            },
            week: function(n) {
                var t = this.localeData().week(this);
                return n == null ? t : this.add((n - t) * 7, "d")
            },
            isoWeek: function(n) {
                var t = b(this, 1, 4).week;
                return n == null ? t : this.add((n - t) * 7, "d")
            },
            weekday: function(n) {
                var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return n == null ? t : this.add(n - t, "d")
            },
            isoWeekday: function(n) {
                return n == null ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7)
            },
            isoWeeksInYear: function() {
                return ai(this.year(), 1, 4)
            },
            weeksInYear: function() {
                var n = this.localeData()._week;
                return ai(this.year(), n.dow, n.doy)
            },
            get: function(n) {
                return n = f(n), this[n]()
            },
            set: function(n, t) {
                var i;
                if (typeof n == "object")
                    for (i in n) this.set(i, n[i]);
                else n = f(n), typeof this[n] == "function" && this[n](t);
                return this
            },
            locale: function(i) {
                var r;
                return i === n ? this._locale._abbr : (r = t.localeData(i), r != null && (this._locale = r), this)
            },
            lang: o("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return t === n ? this.localeData() : this.locale(t)
            }),
            localeData: function() {
                return this._locale
            },
            _dateUtcOffset: function() {
                return -Math.round(this._d.getTimezoneOffset() / 15) * 15
            }
        });
        t.fn.millisecond = t.fn.milliseconds = c("Milliseconds", !1);
        t.fn.second = t.fn.seconds = c("Seconds", !1);
        t.fn.minute = t.fn.minutes = c("Minutes", !1);
        t.fn.hour = t.fn.hours = c("Hours", !0);
        t.fn.date = c("Date", !0);
        t.fn.dates = o("dates accessor is deprecated. Use date instead.", c("Date", !0));
        t.fn.year = c("FullYear", !0);
        t.fn.years = o("years accessor is deprecated. Use year instead.", c("FullYear", !0));
        t.fn.days = t.fn.day;
        t.fn.months = t.fn.month;
        t.fn.weeks = t.fn.week;
        t.fn.isoWeeks = t.fn.isoWeek;
        t.fn.quarters = t.fn.quarter;
        t.fn.toJSON = t.fn.toISOString;
        t.fn.isUTC = t.fn.isUtc;
        w(t.duration.fn = st.prototype, {
            _bubble: function() {
                var o = this._milliseconds,
                    t = this._days,
                    i = this._months,
                    n = this._data,
                    u, f, e, r = 0;
                n.milliseconds = o % 1e3;
                u = s(o / 1e3);
                n.seconds = u % 60;
                f = s(u / 60);
                n.minutes = f % 60;
                e = s(f / 60);
                n.hours = e % 24;
                t += s(e / 24);
                r = s(ur(t));
                t -= s(fr(r));
                i += s(t / 30);
                t %= 30;
                r += s(i / 12);
                i %= 12;
                n.days = t;
                n.months = i;
                n.years = r
            },
            abs: function() {
                return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
            },
            weeks: function() {
                return s(this.days() / 7)
            },
            valueOf: function() {
                return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + i(this._months / 12) * 31536e6
            },
            humanize: function(n) {
                var t = nf(this, !n, this.localeData());
                return n && (t = this.localeData().pastFuture(+this, t)), this.localeData().postformat(t)
            },
            add: function(n, i) {
                var r = t.duration(n, i);
                return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
            },
            subtract: function(n, i) {
                var r = t.duration(n, i);
                return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
            },
            get: function(n) {
                return n = f(n), this[n.toLowerCase() + "s"]()
            },
            as: function(n) {
                var t, i;
                if (n = f(n), n === "month" || n === "year") return t = this._days + this._milliseconds / 864e5, i = this._months + ur(t) * 12, n === "month" ? i : i / 12;
                t = this._days + Math.round(fr(this._months / 12));
                switch (n) {
                    case "week":
                        return t / 7 + this._milliseconds / 6048e5;
                    case "day":
                        return t + this._milliseconds / 864e5;
                    case "hour":
                        return t * 24 + this._milliseconds / 36e5;
                    case "minute":
                        return t * 1440 + this._milliseconds / 6e4;
                    case "second":
                        return t * 86400 + this._milliseconds / 1e3;
                    case "millisecond":
                        return Math.floor(t * 864e5) + this._milliseconds;
                    default:
                        throw new Error("Unknown unit " + n);
                }
            },
            lang: t.fn.lang,
            locale: t.fn.locale,
            toIsoString: o("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function() {
                return this.toISOString()
            }),
            toISOString: function() {
                var r = Math.abs(this.years()),
                    u = Math.abs(this.months()),
                    f = Math.abs(this.days()),
                    n = Math.abs(this.hours()),
                    t = Math.abs(this.minutes()),
                    i = Math.abs(this.seconds() + this.milliseconds() / 1e3);
                return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (u ? u + "M" : "") + (f ? f + "D" : "") + (n || t || i ? "T" : "") + (n ? n + "H" : "") + (t ? t + "M" : "") + (i ? i + "S" : "") : "P0D"
            },
            localeData: function() {
                return this._locale
            },
            toJSON: function() {
                return this.toISOString()
            }
        });
        t.duration.fn.toString = t.duration.fn.toISOString;
        for (u in yr) p(yr, u) && rf(u.toLowerCase());
        t.duration.fn.asMilliseconds = function() {
            return this.as("ms")
        };
        t.duration.fn.asSeconds = function() {
            return this.as("s")
        };
        t.duration.fn.asMinutes = function() {
            return this.as("m")
        };
        t.duration.fn.asHours = function() {
            return this.as("h")
        };
        t.duration.fn.asDays = function() {
            return this.as("d")
        };
        t.duration.fn.asWeeks = function() {
            return this.as("weeks")
        };
        t.duration.fn.asMonths = function() {
            return this.as("M")
        };
        t.duration.fn.asYears = function() {
            return this.as("y")
        };
        t.locale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(n) {
                var t = n % 10,
                    r = i(n % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
                return n + r
            }
        });
        sr ? module.exports = t : typeof define == "function" && define.amd ? (define(function(n, i, r) {
            return r.config && r.config() && r.config().noGlobal === !0 && (kt.moment = or), t
        }), er(!0)) : er()
    }).call(this);
    ! function(n, t) {
        "use strict";
        var i;
        if ("object" == typeof exports) {
            try {
                i = require("moment")
            } catch (r) {}
            module.exports = t(i)
        } else "function" == typeof define && define.amd ? define(function(n) {
            try {
                i = n("moment")
            } catch (r) {}
            return t(i)
        }) : n.Vxr_Picaday = t(n.moment)
    }(this, function(n) {
        "use strict";
        var e = "function" == typeof n,
            l = !!window.addEventListener,
            t = window.document,
            s = window.setTimeout,
            u = function(n, t, i, r) {
                l ? n.addEventListener(t, i, !!r) : n.attachEvent("on" + t, i)
            },
            f = function(n, t, i, r) {
                l ? n.removeEventListener(t, i, !!r) : n.detachEvent("on" + t, i)
            },
            v = function(n, i, r) {
                var u;
                t.createEvent ? (u = t.createEvent("HTMLEvents"), u.initEvent(i, !0, !1), u = o(u, r), n.dispatchEvent(u)) : t.createEventObject && (u = t.createEventObject(), u = o(u, r), n.fireEvent("on" + i, u))
            },
            k = function(n) {
                return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
            },
            r = function(n, t) {
                return -1 !== (" " + n.className + " ").indexOf(" " + t + " ")
            },
            d = function(n, t) {
                r(n, t) || (n.className = "" === n.className ? t : n.className + " " + t)
            },
            g = function(n, t) {
                n.className = k((" " + n.className + " ").replace(" " + t + " ", " "))
            },
            a = function(n) {
                return /Array/.test(Object.prototype.toString.call(n))
            },
            i = function(n) {
                return /Date/.test(Object.prototype.toString.call(n)) && !isNaN(n.getTime())
            },
            nt = function(n) {
                var t = n.getDay();
                return 0 === t || 6 === t
            },
            tt = function(n) {
                return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
            },
            it = function(n, t) {
                return [31, tt(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            },
            h = function(n) {
                i(n) && n.setHours(0, 0, 0, 0)
            },
            c = function(n, t) {
                return n.getTime() === t.getTime()
            },
            o = function(n, t, r) {
                var u, f;
                for (u in t) f = void 0 !== n[u], f && "object" == typeof t[u] && null !== t[u] && void 0 === t[u].nodeName ? i(t[u]) ? r && (n[u] = new Date(t[u].getTime())) : a(t[u]) ? r && (n[u] = t[u].slice(0)) : n[u] = o({}, t[u], r) : (r || !f) && (n[u] = t[u]);
                return n
            },
            y = function(n) {
                return n.month < 0 && (n.year -= Math.ceil(Math.abs(n.month) / 12), n.month += 12), n.month > 11 && (n.year += Math.floor(Math.abs(n.month) / 12), n.month -= 12), n
            },
            p = {
                field: null,
                bound: void 0,
                position: "bottom left",
                reposition: !0,
                format: "YYYY-MM-DD",
                defaultDate: null,
                setDefaultDate: !1,
                firstDay: 0,
                minDate: null,
                maxDate: null,
                yearRange: 10,
                showWeekNumber: !1,
                minYear: 0,
                maxYear: 9999,
                minMonth: void 0,
                maxMonth: void 0,
                startRange: null,
                endRange: null,
                isRTL: !1,
                yearSuffix: "",
                showMonthAfterYear: !1,
                numberOfMonths: 1,
                mainCalendar: "left",
                container: void 0,
                i18n: {
                    previousMonth: "Previous Month",
                    nextMonth: "Next Month",
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                },
                theme: null,
                onSelect: null,
                onOpen: null,
                onClose: null,
                onDraw: null
            },
            w = function(n, t, i) {
                for (t += n.firstDay; t >= 7;) t -= 7;
                return i ? n.i18n.weekdaysShort[t] : n.i18n.weekdays[t]
            },
            rt = function(n) {
                if (n.isEmpty) return '<td class="is-empty"><\/td>';
                var t = [];
                return n.isDisabled && t.push("is-disabled"), n.isToday && t.push("is-today"), n.isSelected && t.push("is-selected"), n.isInRange && t.push("is-inrange"), n.isStartRange && t.push("is-startrange"), n.isEndRange && t.push("is-endrange"), '<td data-day="' + n.day + '" class="' + t.join(" ") + '"><button class="vxr-pika-button vxr-pika-day" type="button" data-vxr-pika-year="' + n.year + '" data-vxr-pika-month="' + n.month + '" data-vxr-pika-day="' + n.day + '">' + n.day + "<\/button><\/td>"
            },
            ut = function(n, t, i) {
                var r = new Date(i, 0, 1),
                    u = Math.ceil(((new Date(i, t, n) - r) / 864e5 + r.getDay() + 1) / 7);
                return '<td class="vxr-pika-week">' + u + "<\/td>"
            },
            ft = function(n, t) {
                return "<tr>" + (t ? n.reverse() : n).join("") + "<\/tr>"
            },
            et = function(n) {
                return "<tbody>" + n.join("") + "<\/tbody>"
            },
            ot = function(n) {
                var t, i = [];
                for (n.showWeekNumber && i.push("<th><\/th>"), t = 0; 7 > t; t++) i.push('<th scope="col"><abbr title="' + w(n, t) + '">' + w(n, t, !0) + "<\/abbr><\/th>");
                return "<thead>" + (n.isRTL ? i.reverse() : i).join("") + "<\/thead>"
            },
            st = function(n, t, i, r, u) {
                for (var h, c, l, f = n._o, v = i === f.minYear, y = i === f.maxYear, s = '<div class="vxr-pika-title">', p = !0, w = !0, o = [], e = 0; 12 > e; e++) o.push('<option value="' + (i === u ? e - t : 12 + e - t) + '"' + (e === r ? " selected" : "") + (v && e < f.minMonth || y && e > f.maxMonth ? "disabled" : "") + ">" + f.i18n.months[e] + "<\/option>");
                for (c = '<div class="vxr-pika-label">' + f.i18n.months[r] + '<select class="vxr-pika-select vxr-pika-select-month" tabindex="-1">' + o.join("") + "<\/select><\/div>", a(f.yearRange) ? (e = f.yearRange[0], h = f.yearRange[1] + 1) : (e = i - f.yearRange, h = 1 + i + f.yearRange), o = []; h > e && e <= f.maxYear; e++) e >= f.minYear && o.push('<option value="' + e + '"' + (e === i ? " selected" : "") + ">" + e + "<\/option>");
                return l = '<div class="vxr-pika-label">' + i + f.yearSuffix + '<select class="vxr-pika-select vxr-pika-select-year" tabindex="-1">' + o.join("") + "<\/select><\/div>", s += f.showMonthAfterYear ? l + c : c + l, v && (0 === r || f.minMonth >= r) && (p = !1), y && (11 === r || f.maxMonth <= r) && (w = !1), 0 === t && (s += '<button class="vxr-pika-prev' + (p ? "" : " is-disabled") + '" type="button">' + f.i18n.previousMonth + "<\/button>"), t === n._o.numberOfMonths - 1 && (s += '<button class="vxr-pika-next' + (w ? "" : " is-disabled") + '" type="button">' + f.i18n.nextMonth + "<\/button>"), s + "<\/div>"
            },
            ht = function(n, t) {
                return '<table cellpadding="0" cellspacing="0" class="vxr-pika-table">' + ot(n) + et(t) + "<\/table>"
            },
            b = function(f) {
                var o = this,
                    h = o.config(f),
                    c;
                o._onMouseDown = function(n) {
                    if (o._v) {
                        n = n || window.event;
                        var t = n.target || n.srcElement;
                        if (t)
                            if (r(t.parentNode, "is-disabled") || (r(t, "vxr-pika-button") && !r(t, "is-empty") ? (o.setDate(new Date(t.getAttribute("data-vxr-pika-year"), t.getAttribute("data-vxr-pika-month"), t.getAttribute("data-vxr-pika-day"))), h.bound && s(function() {
                                    o.hide();
                                    h.field && h.field.blur()
                                }, 100)) : r(t, "vxr-pika-prev") ? o.prevMonth() : r(t, "vxr-pika-next") && o.nextMonth()), r(t, "vxr-pika-select")) o._c = !0;
                            else {
                                if (!n.preventDefault) return n.returnValue = !1, !1;
                                n.preventDefault()
                            }
                    }
                };
                o._onChange = function(n) {
                    n = n || window.event;
                    var t = n.target || n.srcElement;
                    t && (r(t, "vxr-pika-select-month") ? o.gotoMonth(t.value) : r(t, "vxr-pika-select-year") && o.gotoYear(t.value))
                };
                o._onInputChange = function(t) {
                    var r;
                    t.firedBy !== o && (e ? (r = n(h.field.value, h.format), r = r && r.isValid() ? r.toDate() : null) : r = new Date(Date.parse(h.field.value)), i(r) && o.setDate(r), o._v || o.show())
                };
                o._onInputFocus = function() {
                    o.show()
                };
                o._onInputClick = function() {
                    o.show()
                };
                o._onInputBlur = function() {
                    var n = t.activeElement;
                    do
                        if (r(n, "vxr-pika-single")) return; while (n = n.parentNode);
                    o._c || (o._b = s(function() {
                        o.hide()
                    }, 50));
                    o._c = !1
                };
                o._onClick = function(n) {
                    n = n || window.event;
                    var t = n.target || n.srcElement,
                        i = t;
                    if (t) {
                        !l && r(t, "vxr-pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), u(t, "change", o._onChange)));
                        do
                            if (r(i, "vxr-pika-single") || i === h.trigger) return; while (i = i.parentNode);
                        o._v && t !== h.trigger && i !== h.trigger && o.hide()
                    }
                };
                o.el = t.createElement("div");
                o.el.className = "vxr-pika-single" + (h.isRTL ? " is-rtl" : "") + (h.theme ? " " + h.theme : "");
                u(o.el, "mousedown", o._onMouseDown, !0);
                u(o.el, "touchend", o._onMouseDown, !0);
                u(o.el, "change", o._onChange);
                h.field && (h.container ? h.container.appendChild(o.el) : h.bound ? t.body.appendChild(o.el) : h.field.parentNode.insertBefore(o.el, h.field.nextSibling), u(h.field, "change", o._onInputChange), h.defaultDate || (h.defaultDate = e && h.field.value ? n(h.field.value, h.format).toDate() : new Date(Date.parse(h.field.value)), h.setDefaultDate = !0));
                c = h.defaultDate;
                i(c) ? h.setDefaultDate ? o.setDate(c, !0) : o.gotoDate(c) : o.gotoDate(new Date);
                h.bound ? (this.hide(), o.el.className += " is-bound", u(h.trigger, "click", o._onInputClick), u(h.trigger, "focus", o._onInputFocus), u(h.trigger, "blur", o._onInputBlur)) : this.show()
            };
        return b.prototype = {
            config: function(n) {
                var t, r, u;
                return this._o || (this._o = o({}, p, !0)), t = o(this._o, n, !0), t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null, r = parseInt(t.numberOfMonths, 10) || 1, (t.numberOfMonths = r > 4 ? 4 : r, i(t.minDate) || (t.minDate = !1), i(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && (h(t.maxDate), t.maxYear = t.maxDate.getFullYear(), t.maxMonth = t.maxDate.getMonth()), a(t.yearRange)) ? (u = (new Date).getFullYear() - 10, t.yearRange[0] = parseInt(t.yearRange[0], 10) || u, t.yearRange[1] = parseInt(t.yearRange[1], 10) || u) : (t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || p.yearRange, t.yearRange > 100 && (t.yearRange = 100)), t
            },
            toString: function(t) {
                return i(this._d) ? e ? n(this._d).format(t || this._o.format) : this._d.toDateString() : ""
            },
            getMoment: function() {
                return e ? n(this._d) : null
            },
            setMoment: function(t, i) {
                e && n.isMoment(t) && this.setDate(t.toDate(), i)
            },
            getDate: function() {
                return i(this._d) ? new Date(this._d.getTime()) : null
            },
            setDate: function(n, t) {
                if (!n) return this._d = null, this._o.field && (this._o.field.value = "", v(this._o.field, "change", {
                    firedBy: this
                })), this.draw();
                if ("string" == typeof n && (n = new Date(Date.parse(n))), i(n)) {
                    var r = this._o.minDate,
                        u = this._o.maxDate;
                    i(r) && r > n ? n = r : i(u) && n > u && (n = u);
                    this._d = new Date(n.getTime());
                    h(this._d);
                    this.gotoDate(this._d);
                    this._o.field && (this._o.field.value = this.toString(), v(this._o.field, "change", {
                        firedBy: this
                    }));
                    t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate())
                }
            },
            gotoDate: function(n) {
                var r = !0;
                if (i(n)) {
                    if (this.calendars) {
                        var f = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                            t = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                            u = n.getTime();
                        t.setMonth(t.getMonth() + 1);
                        t.setDate(t.getDate() - 1);
                        r = u < f.getTime() || t.getTime() < u
                    }
                    r && (this.calendars = [{
                        month: n.getMonth(),
                        year: n.getFullYear()
                    }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths));
                    this.adjustCalendars()
                }
            },
            adjustCalendars: function() {
                this.calendars[0] = y(this.calendars[0]);
                for (var n = 1; n < this._o.numberOfMonths; n++) this.calendars[n] = y({
                    month: this.calendars[0].month + n,
                    year: this.calendars[0].year
                });
                this.draw()
            },
            gotoToday: function() {
                this.gotoDate(new Date)
            },
            gotoMonth: function(n) {
                isNaN(n) || (this.calendars[0].month = parseInt(n, 10), this.adjustCalendars())
            },
            nextMonth: function() {
                this.calendars[0].month++;
                this.adjustCalendars()
            },
            prevMonth: function() {
                this.calendars[0].month--;
                this.adjustCalendars()
            },
            gotoYear: function(n) {
                isNaN(n) || (this.calendars[0].year = parseInt(n, 10), this.adjustCalendars())
            },
            setMinDate: function(n) {
                h(n);
                this._o.minDate = n;
                this._o.minYear = n.getFullYear();
                this._o.minMonth = n.getMonth()
            },
            setMaxDate: function(n) {
                this._o.maxDate = n
            },
            setStartRange: function(n) {
                this._o.startRange = n
            },
            setEndRange: function(n) {
                this._o.endRange = n
            },
            draw: function(n) {
                var i, f;
                if (this._v || n) {
                    var t = this._o,
                        e = t.minYear,
                        o = t.maxYear,
                        r = t.minMonth,
                        u = t.maxMonth,
                        h = "";
                    for (this._y <= e && (this._y = e, !isNaN(r) && this._m < r && (this._m = r)), this._y >= o && (this._y = o, !isNaN(u) && this._m > u && (this._m = u)), i = 0; i < t.numberOfMonths; i++) h += '<div class="vxr-pika-lendar">' + st(this, i, this.calendars[i].year, this.calendars[i].month, this.calendars[0].year) + this.render(this.calendars[i].year, this.calendars[i].month) + "<\/div>";
                    (this.el.innerHTML = h, t.bound && "hidden" !== t.field.type && s(function() {
                        t.trigger.focus()
                    }, 1), "function" == typeof this._o.onDraw) && (f = this, s(function() {
                        f._o.onDraw.call(f)
                    }, 0))
                }
            },
            adjustPosition: function() {
                var n, i, f, e, s, h, c, r, u, o;
                if (!this._o.container) {
                    if (this.el.style.position = "absolute", n = this._o.trigger, i = n, f = this.el.offsetWidth, e = this.el.offsetHeight, s = window.innerWidth || t.documentElement.clientWidth, h = window.innerHeight || t.documentElement.clientHeight, c = window.pageYOffset || t.body.scrollTop || t.documentElement.scrollTop, "function" == typeof n.getBoundingClientRect) o = n.getBoundingClientRect(), r = o.left + window.pageXOffset, u = o.bottom + window.pageYOffset;
                    else
                        for (r = i.offsetLeft, u = i.offsetTop + i.offsetHeight; i = i.offsetParent;) r += i.offsetLeft, u += i.offsetTop;
                    (this._o.reposition && r + f > s || this._o.position.indexOf("right") > -1 && r - f + n.offsetWidth > 0) && (r = r - f + n.offsetWidth);
                    (this._o.reposition && u + e > h + c || this._o.position.indexOf("top") > -1 && u - e - n.offsetHeight > 0) && (u = u - e - n.offsetHeight);
                    this.el.style.left = r + "px";
                    this.el.style.top = u + "px"
                }
            },
            render: function(n, t) {
                var r = this._o,
                    v = new Date,
                    y = it(n, t),
                    f = new Date(n, t, 1).getDay(),
                    p = [],
                    o = [],
                    s, l, e, a;
                for (h(v), r.firstDay > 0 && (f -= r.firstDay, 0 > f && (f += 7)), s = y + f, l = s; l > 7;) l -= 7;
                for (s += 7 - l, e = 0, a = 0; s > e; e++) {
                    var u = new Date(n, t, 1 + (e - f)),
                        w = i(this._d) ? c(u, this._d) : !1,
                        b = c(u, v),
                        k = f > e || e >= y + f,
                        d = r.startRange && c(r.startRange, u),
                        g = r.endRange && c(r.endRange, u),
                        tt = r.startRange && r.endRange && r.startRange < u && u < r.endRange,
                        et = r.minDate && u < r.minDate || r.maxDate && u > r.maxDate || r.disableWeekends && nt(u) || r.disableDayFn && r.disableDayFn(u),
                        ot = {
                            day: 1 + (e - f),
                            month: t,
                            year: n,
                            isSelected: w,
                            isToday: b,
                            isDisabled: et,
                            isEmpty: k,
                            isStartRange: d,
                            isEndRange: g,
                            isInRange: tt
                        };
                    o.push(rt(ot));
                    7 == ++a && (r.showWeekNumber && o.unshift(ut(e - f, t, n)), p.push(ft(o, r.isRTL)), o = [], a = 0)
                }
                return ht(r, p)
            },
            isVisible: function() {
                return this._v
            },
            show: function() {
                this._v || (g(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (u(t, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
            },
            hide: function() {
                var n = this._v;
                n !== !1 && (this._o.bound && f(t, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", d(this.el, "is-hidden"), this._v = !1, void 0 !== n && "function" == typeof this._o.onClose && this._o.onClose.call(this))
            },
            destroy: function() {
                this.hide();
                f(this.el, "mousedown", this._onMouseDown, !0);
                f(this.el, "touchend", this._onMouseDown, !0);
                f(this.el, "change", this._onChange);
                this._o.field && (f(this._o.field, "change", this._onInputChange), this._o.bound && (f(this._o.trigger, "click", this._onInputClick), f(this._o.trigger, "focus", this._onInputFocus), f(this._o.trigger, "blur", this._onInputBlur)));
                this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        }, b
    });
    var at = function() {
            "use strict";
            Array.prototype.indexOf || (Array.prototype.indexOf = function(n, t) {
                if (this === undefined || this === null) throw new TypeError('"this" is null or not defined');
                var i = this.length >>> 0;
                for (t = +t || 0, Math.abs(t) === Infinity && (t = 0), t < 0 && (t += i, t < 0 && (t = 0)); t < i; t++)
                    if (this[t] === n) return t;
                return -1
            });
            var s = function() {
                    var n = -1,
                        t, i;
                    return navigator.appName == "Microsoft Internet Explorer" && (t = navigator.userAgent, i = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), i.exec(t) != null && (n = +RegExp.$1)), n === -1 ? NaN : n
                },
                u = function() {
                    var t = window.navigator.userAgent.toLowerCase();
                    return t.search(/mobile|windows phone/) >= 0 ? n.modeMobile : s() <= 9 ? n.modePC : h().windowWidth > n.modeMobileW ? n.modePC : n.modeMobile
                },
                h = function() {
                    return window.innerWidth ? {
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight
                    } : document.documentElement.offsetHeight ? {
                        windowWidth: document.documentElement.offsetWidth,
                        windowHeight: document.documentElement.offsetHeight
                    } : document.body.offsetHeight ? {
                        windowWidth: document.body.offsetWidth,
                        windowHeight: document.body.offsetHeight
                    } : document.documentElement.clientHeight ? {
                        windowWidth: document.documentElement.clientWidth,
                        windowHeight: document.documentElement.clientHeight
                    } : document.body.clientHeight ? {
                        windowWidth: document.body.clientWidth,
                        windowHeight: document.body.clientHeight
                    } : {
                        windowWidth: -1,
                        windowHeight: -1
                    }
                },
                n = function(t) {
                    return n = t, t.modePC = "modePC", t.modeMobile = "modeMobile", t.modeMobileW = 768, t.VxrAutoCompleteListClass = "VxrAutoComplete-list", t.VxrAutoCompleteHintClass = "VxrAutoComplete-hint", t.VxrAutoCompleteHintSelectedClass = "VxrAutoComplete-hint-selected", t.maxHintNum = u() === n.modePC ? 10 : 5, t.VxrAutoCompleteDelay = 250, t.hiddenArg_close_list_n_make_final_selection = "hiddenArg_close_list_n_make_final_selection", t.listStatus = {
                        attr: "data-listStatus",
                        open: "open"
                    }, t.keyCode = {
                        up: 38,
                        down: 40,
                        esc: 27,
                        enter: 13
                    }, t.defaultStyles = {
                        VxrAutoCompleteList: {
                            maxHeight: "none",
                            border: "1px solid #aaa",
                            padding: "0",
                            margin: "0",
                            zIndex: 99,
                            overflowX: "hidden",
                            overflowY: "auto",
                            display: "none",
                            position: "absolute",
                            backgroundColor: "#fff"
                        },
                        VxrAutoCompleteHint: {
                            height: "1.5em",
                            padding: u() === n.modePC ? "2px 6px 2px 10px" : "6px 6px 6px 10px",
                            margin: "6px 0",
                            overflow: "hidden",
                            listStyleType: "none",
                            color: "#000",
                            backgroundColor: "#fff",
                            cursor: "default",
                            fontSize: "1em"
                        },
                        VxrAutoCompleteHintSelected: {
                            color: "#fff",
                            backgroundColor: "#3399ff"
                        }
                    }, t.adjStyleAttrs = {
                        VxrAutoCompleteList: ["border", "maxHeight", "backgroundColor"],
                        VxrAutoCompleteHint: ["height", "padding", "margin", "color", "backgroundColor", "fontSize"],
                        VxrAutoCompleteHintSelected: ["color", "backgroundColor"]
                    }, t.listenersSupported = ["select"], n
                }({}),
                f = function(n) {
                    return n || (n = window.event), n.target || (n.target = n.srcElement), n.stopBubble = function() {
                        this.cancelBubble = !0;
                        this.stopPropoagation && this.stopPropoagation()
                    }, n.stopDefault = function() {
                        return this.preventDefault && this.preventDefault(), this.returnValue = !1, !1
                    }, n
                },
                r = function(n, t, i) {
                    n.addEventListener ? n.addEventListener(t, i) : n.attachEvent && n.attachEvent("on" + t, i)
                },
                e = function(n, t, i) {
                    n.removeEventListener ? n.removeEventListener(t, i) : n.detachEvent && n.detachEvent("on" + t, i)
                },
                i = function(n, t) {
                    var r = null,
                        f, u, i;
                    return window.getComputedStyle ? r = window.getComputedStyle(n)[t] || null : n.currentStyle && (r = n.currentStyle && n.currentStyle[t], i = n.style, r == null && i && i[t] && (r = i[t]), f = i.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), i.left = t === "fontSize" ? "1em" : r, r = i.pixelLeft + "px", i.left = f, u && (n.runtimeStyle.left = u)), r
                },
                o = {
                    buildElem: function(n) {
                        var t = document.createElement("DIV");
                        return t.innerHTML = n, t.firstChild.cloneNode(!0)
                    },
                    buildHint: function(t, i) {
                        return typeof t == "string" && t ? (t = this.buildElem('<li class="' + n.VxrAutoCompleteHintClass + '">' + t + "<\/li>"), t.style.height = t.style.lineHeight = i.VxrAutoCompleteHint.height, t.style.padding = i.VxrAutoCompleteHint.padding, t.style.margin = i.VxrAutoCompleteHint.margin, t.style.overflow = i.VxrAutoCompleteHint.overflow, t.style.listStyleType = i.VxrAutoCompleteHint.listStyleType, t.style.color = i.VxrAutoCompleteHint.color, t.style.backgroundColor = i.VxrAutoCompleteHint.backgroundColor, t.style.cursor = i.VxrAutoCompleteHint.cursor, t.style.fontSize = i.VxrAutoCompleteHint.fontSize, t) : null
                    },
                    buildList: function(t) {
                        var i = this.buildElem('<ul class="' + n.VxrAutoCompleteListClass + '"><\/ul>');
                        return i.style.maxHeight = t.VxrAutoCompleteList.maxHeight, i.style.border = t.VxrAutoCompleteList.border, i.style.padding = t.VxrAutoCompleteList.padding, i.style.margin = t.VxrAutoCompleteList.margin, i.style.zIndex = t.VxrAutoCompleteList.zIndex, i.style.overflowX = t.VxrAutoCompleteList.overflowX, i.style.overflowY = t.VxrAutoCompleteList.overflowY, i.style.display = t.VxrAutoCompleteList.display, i.style.position = t.VxrAutoCompleteList.position, i.style.backgroundColor = t.VxrAutoCompleteList.backgroundColor, i
                    }
                },
                t = function(t) {
                    this.uiElem = null;
                    this.assocInput = t;
                    this.mouseOnList = !1;
                    this.onMouseSelectionListener = null;
                    this.maxHintNum = n.maxHintNum;
                    this.styles = JSON.parse(JSON.stringify(n.defaultStyles))
                };
            return t.prototype.genList = function() {
                if (!this.uiElem) {
                    var n = this;
                    this.uiElem = o.buildList(this.styles);
                    r(this.uiElem, "mouseover", function(t) {
                        t = f(t);
                        n.isHint(t.target) && (n.pick(t.target), n.autoScroll())
                    });
                    r(this.uiElem, "mouseout", function() {
                        n.unpick()
                    });
                    r(this.uiElem, "mousedown", function() {
                        n.mouseOnList = !0;
                        setTimeout(function() {
                            n.assocInput.focus()
                        }, 50)
                    });
                    r(this.uiElem, "mouseup", function(t) {
                        t = f(t);
                        n.isHint(t.target) && (n.pick(t.target), typeof n.onMouseSelectionListener == "function" && n.onMouseSelectionListener())
                    });
                    document.body.appendChild(this.uiElem)
                }
            }, t.prototype.isHint = function(t) {
                if (t && typeof t == "object" && t.nodeType === 1) {
                    var i = " " + t.className + " ";
                    return i.indexOf(" " + n.VxrAutoCompleteHintClass + " ") >= 0
                }
                return !1
            }, t.prototype.putHints = function(n) {
                var r = 0,
                    t, f, i, u;
                if (n instanceof Array) {
                    for (i = [], f = Math.min(n.length, this.maxHintNum), t = 0; t < f; t++) i.push(o.buildHint(n[t], this.styles)), i[i.length - 1] || i.pop();
                    if (i.length > 0) {
                        for (u = document.createDocumentFragment(), t = 0, r = i.length; t < r; t++) u.appendChild(i[t]);
                        this.clearHints();
                        this.genList();
                        this.uiElem.appendChild(u)
                    }
                }
                return r
            }, t.prototype.clearHints = function() {
                this.uiElem && (this.uiElem.innerHTML = "")
            }, t.prototype.isOpen = function() {
                return this.uiElem ? this.uiElem.getAttribute(n.listStatus.attr) == n.listStatus.open : !1
            }, t.prototype.open = function() {
                var t, u, r;
                if (this.uiElem && (t = this.uiElem.querySelectorAll("." + n.VxrAutoCompleteHintClass)) && t.length) {
                    for (r = this.assocInput.getBoundingClientRect(), this.uiElem.style.top = (document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + r.bottom + "px", this.uiElem.style.left = r.left + "px", r = r.right - r.left - parseFloat(i(this.uiElem, "borderLeftWidth")) - parseFloat(i(this.uiElem, "borderRightWidth")), this.uiElem.style.width = r + "px", u = 0, r = 0; u < t.length; u++) r += parseFloat(i(t[u], "height")) + parseFloat(i(t[u], "paddingTop")) + parseFloat(i(t[u], "paddingBottom")), t[u + 1] && (r += Math.max(parseFloat(i(t[u], "marginBottom")), parseFloat(i(t[u + 1], "marginTop"))));
                    r += parseFloat(i(t[0], "marginTop")) + parseFloat(i(t[t.length - 1], "marginBottom"));
                    this.uiElem.style.height = r + 1 + "px";
                    this.uiElem.setAttribute(n.listStatus.attr, n.listStatus.open);
                    this.uiElem.style.display = "block"
                }
            }, t.prototype.close = function() {
                this.uiElem && (this.mouseOnList = !1, this.uiElem.parentNode.removeChild(this.uiElem), this.uiElem = null)
            }, t.prototype.autoScroll = function() {
                var n = this.getPicked();
                if (n) {
                    for (var t = 0, f = 0, e = n.clientHeight, u = parseFloat(i(n, "marginTop")), o = parseFloat(i(n, "marginBottom")), r = n.previousSibling, f = e + (r ? Math.max(u, o) : u); r;) t += e, r = r.previousSibling, t += r ? Math.max(u, o) : u;
                    (this.uiElem.clientHeight + this.uiElem.scrollTop - t < f || t - this.uiElem.scrollTop < f) && (this.uiElem.scrollTop = t)
                }
            }, t.prototype.pick = function(t) {
                var i, r;
                this.uiElem && (i = null, this.isHint(t) ? i = t : typeof t == "number" && (t >= 0 || t === -1) && (r = this.uiElem.querySelectorAll("." + n.VxrAutoCompleteHintClass), r.length > 0 && (i = +t, i = i === -1 || i > r.length - 1 ? r.length - 1 : i, i = r[i])), i !== null && (this.unpick(), i.className += " " + n.VxrAutoCompleteHintSelectedClass, i.style.color = this.styles.VxrAutoCompleteHintSelected.color, i.style.backgroundColor = this.styles.VxrAutoCompleteHintSelected.backgroundColor))
            }, t.prototype.unpick = function() {
                if (this.uiElem) {
                    var t = this.getPicked();
                    t && (t.className = n.VxrAutoCompleteHintClass, t.style.color = this.styles.VxrAutoCompleteHint.color, t.style.backgroundColor = this.styles.VxrAutoCompleteHint.backgroundColor)
                }
            }, t.prototype.getPicked = function() {
                return this.uiElem ? this.uiElem.querySelector("." + n.VxrAutoCompleteHintSelectedClass) || null : null
            }, {
                enable: function(i, o) {
                    if (i && typeof i == "object" && typeof i.tagName == "string" && i.tagName.toLowerCase() == "input" && i.type == "text" && i.nodeType === 1 && !i.VxrAutoComplete) {
                        i.VxrAutoComplete = {};
                        var w = n.VxrAutoCompleteDelay,
                            h = !0,
                            c = "",
                            v = null,
                            l = null,
                            s = new t(i),
                            y = function() {
                                if (i.value.length > 0 && h && typeof v == "function" && c !== i.value) {
                                    var n = {
                                        that: i,
                                        compltTarget: c = i.value,
                                        compltTargetMatchCurrentTarget: function() {
                                            return n.compltTarget === c
                                        },
                                        call: function() {
                                            n.compltTargetMatchCurrentTarget() && v.call(n.that, n.compltTarget, n.openHint)
                                        },
                                        openHint: function(t) {
                                            n.compltTargetMatchCurrentTarget() && (s.putHints(t) ? s.open() : n.that.VxrAutoComplete.close())
                                        }
                                    };
                                    setTimeout(n.call, w)
                                }
                            },
                            p = function() {
                                if (h) {
                                    var n = s.getPicked();
                                    i.value = n ? n.innerHTML : c
                                }
                            },
                            b = function() {
                                s.mouseOnList ? (i.focus(), s.mouseOnList = !1) : s.isOpen() && i.VxrAutoComplete.close(n.hiddenArg_close_list_n_make_final_selection)
                            },
                            a = function(t) {
                                var r, e;
                                if (u() !== n.modeMobile && (t = f(t), h))
                                    if (t.type == "keydown" && s.isOpen() && (t.keyCode === n.keyCode.up || t.keyCode === n.keyCode.down)) r = s.getPicked(), t.keyCode === n.keyCode.up ? r ? r.previousSibling ? s.pick(r.previousSibling) : s.unpick() : s.pick(-1) : t.keyCode === n.keyCode.down && (r ? r.nextSibling ? s.pick(r.nextSibling) : s.unpick() : s.pick(0)), s.autoScroll(), p();
                                    else if (t.type == "keyup") {
                                        e = !1;
                                        switch (t.keyCode) {
                                            case n.keyCode.up:
                                            case n.keyCode.down:
                                                s.isOpen() || (e = !0);
                                                break;
                                            case n.keyCode.esc:
                                                s.isOpen() && (i.value = c, i.VxrAutoComplete.close(n.hiddenArg_close_list_n_make_final_selection));
                                                break;
                                            case n.keyCode.enter:
                                                s.isOpen() && (p(), i.VxrAutoComplete.close(n.hiddenArg_close_list_n_make_final_selection));
                                                break;
                                            default:
                                                e = !0
                                        }
                                        e && (i.value.length > 0 ? y() : i.VxrAutoComplete.close())
                                    }
                            },
                            k = function() {
                                u() !== n.modePC && (i.value.length > 0 ? y() : i.VxrAutoComplete.close())
                            },
                            d = function(n) {
                                l != null && typeof l[n] == "function" && l[n].call(i)
                            };
                        return i.VxrAutoComplete.setHintsFetcher = function(n) {
                            return n === null || typeof n == "function" ? (v = n, !0) : !1
                        }, i.VxrAutoComplete.setListener = function(t, i) {
                            return (i === null || typeof i == "function") && n.listenersSupported.indexOf(t) >= 0 ? (l == null && (l = {}), l[t] = i, !0) : !1
                        }, i.VxrAutoComplete.input_VxrAutoComplete_startFetcher = y, i.VxrAutoComplete.setStyles = function(t, i) {
                            var f, r, e = !1,
                                u;
                            switch (t) {
                                case n.VxrAutoCompleteListClass:
                                    f = s.styles.VxrAutoCompleteList;
                                    r = n.adjStyleAttrs.VxrAutoCompleteList;
                                    break;
                                case n.VxrAutoCompleteHintClass:
                                    f = s.styles.VxrAutoCompleteHint;
                                    r = n.adjStyleAttrs.VxrAutoCompleteHint;
                                    break;
                                case n.VxrAutoCompleteHintSelectedClass:
                                    f = s.styles.VxrAutoCompleteHintSelected;
                                    r = n.adjStyleAttrs.VxrAutoCompleteHintSelected
                            }
                            if (i instanceof Object && f && r)
                                for (u = 0; u < r.length; u++)(typeof i[r[u]] == "string" || typeof i[r[u]] == "number") && (e || (e = {}), e[r[u]] = f[r[u]] = i[r[u]]);
                            return e
                        }, i.VxrAutoComplete.config = function(n) {
                            var t = !1,
                                i;
                            return n instanceof Object && (n.delay !== undefined && (i = Math.floor(n.delay)) > 0 && (t || (t = {}), w = t.delay = i), n.maxHintNum !== undefined && (i = Math.floor(n.maxHintNum)) > 0 && (t || (t = {}), s.maxHintNum = t.maxHintNum = i)), t
                        }, i.VxrAutoComplete.close = function() {
                            c = "";
                            s.close();
                            h && i.value !== "" && arguments[0] === n.hiddenArg_close_list_n_make_final_selection && d("select")
                        }, i.VxrAutoComplete.enable = function() {
                            h = !0
                        }, i.VxrAutoComplete.disable = function() {
                            h = !1;
                            this.close()
                        }, i.VxrAutoComplete.destroy = function() {
                            e(i, "blur", b);
                            e(i, "keyup", a);
                            e(i, "keydown", a);
                            this.disable();
                            delete i.VxrAutoComplete
                        }, s.onMouseSelectionListener = function() {
                            p();
                            i.VxrAutoComplete.close(n.hiddenArg_close_list_n_make_final_selection)
                        }, r(i, "blur", b), r(i, "keyup", a), r(i, "keydown", a), r(i, "input", k), o instanceof Object && (i.VxrAutoComplete.config(o), i.VxrAutoComplete.setHintsFetcher(o.hintsFetcher)), i
                    }
                    return null
                }
            }
        }(),
        h = [
            ["Hà Nội", 24, 0, 1],
            ["Hải Phòng", 27, 0, 1],
            ["Bắc Giang", 3, 0, 1],
            ["Bắc Kạn", 4, 0, 1],
            ["Bắc Ninh", 6, 0, 1],
            ["Cao Bằng", 14, 0, 1],
            ["Điện Biên", 18, 0, 1],
            ["Hà Giang", 22, 0, 1],
            ["Hà Nam", 23, 0, 1],
            ["Hải Dương", 26, 0, 1],
            ["Hòa Bình", 30, 0, 1],
            ["Hưng Yên", 31, 0, 1],
            ["Lạng Sơn", 37, 0, 1],
            ["Lào Cai", 38, 0, 1],
            ["Nam Định", 40, 0, 1],
            ["Ninh Bình", 42, 0, 1],
            ["Phú Thọ", 44, 0, 1],
            ["Thái Bình", 54, 0, 1],
            ["Tuyên Quang", 60, 0, 1],
            ["Vĩnh Phúc", 62, 0, 1],
            ["Yên Bái", 63, 0, 1],
            ["Đà Nẵng", 15, 0, 1],
            ["Bình Định", 8, 0, 1],
            ["Bình Thuận", 11, 0, 1],
            ["Đắk Lắk", 16, 0, 1],
            ["Đăk Nông", 17, 0, 1],
            ["Gia Lai", 21, 0, 1],
            ["Hà Tĩnh", 25, 0, 1],
            ["Khánh Hòa", 32, 0, 1],
            ["Kon Tum", 34, 0, 1],
            ["Lai Châu", 35, 0, 1],
            ["Lâm Đồng", 36, 0, 1],
            ["Nghệ An", 41, 0, 1],
            ["Ninh Thuận", 43, 0, 1],
            ["Phú Yên", 45, 0, 1],
            ["Quảng Bình", 46, 0, 1],
            ["Quảng Nam", 47, 0, 1],
            ["Quảng Ngãi", 48, 0, 1],
            ["Quảng Ninh", 49, 0, 1],
            ["Quảng Trị", 50, 0, 1],
            ["Sơn La", 52, 0, 1],
            ["Thái Nguyên", 55, 0, 1],
            ["Thanh Hóa", 56, 0, 1],
            ["Thừa Thiên-Huế", 57, 0, 1],
            ["Hồ Chí Minh", 29, 0, 1],
            ["Sài Gòn", 29, 0, 1],
            ["Cần Thơ", 13, 0, 1],
            ["An Giang", 1, 0, 1],
            ["Bà Rịa-Vũng Tàu", 2, 0, 1],
            ["Bạc Liêu", 5, 0, 1],
            ["Bến Tre", 7, 0, 1],
            ["Bình Dương", 9, 0, 1],
            ["Bình Phước", 10, 0, 1],
            ["Cà Mau", 12, 0, 1],
            ["Đồng Nai", 19, 0, 1],
            ["Đồng Tháp", 20, 0, 1],
            ["Hậu Giang", 28, 0, 1],
            ["Kiên Giang", 33, 0, 1],
            ["Long An", 39, 0, 1],
            ["Sóc Trăng", 51, 0, 1],
            ["Tây Ninh", 53, 0, 1],
            ["Tiền Giang", 58, 0, 1],
            ["Trà Vinh", 59, 0, 1],
            ["Vĩnh Long", 61, 0, 1],
            ["Lào - Viêng Chăn", 64, 0, 1],
            ["Lào - Pakse", 65, 0, 1],
            ["Viêng Chăn - Lào", 64, 0, 1],
            ["Campuchia - Phnôm Pênh", 49118, 0, 1],
            ["Pakse - Lào", 65, 0, 1],
            ["Vientiane - Lào", 28300, 0, 1],
            ["Bến xe Miền Đông - Hồ Chí Minh", 29, 0, 3],
            ["Bến xe Miền Tây - Hồ Chí Minh", 29, 0, 3],
            ["Bến xe An Sương - Hồ Chí Minh", 29, 0, 3],
            ["Bến xe Mỹ Đình - Hà Nội", 24, 0, 3],
            ["Bến xe Gia Lâm - Hà Nội", 24, 0, 3],
            ["Bến xe Giáp Bát - Hà Nội", 24, 0, 3],
            ["Bến xe Nước Ngầm - Hà Nội", 24, 0, 3],
            ["Bến xe Lương Yên - Hà Nội", 24, 0, 3],
            ["Bến xe Yên Nghĩa - Hà Nội", 24, 0, 3],
            ["Bến xe Trung tâm - Đà Nẵng", 15, 0, 3],
            ["Bến xe Khách phía nam - Đà Nẵng", 15, 0, 3],
            ["Bến xe Khách - Đà Nẵng", 15, 0, 3],
            ["Bến xe - Cần Thơ", 13, 0, 3],
            ["Bến xe Thạch An - Cần Thơ", 13, 0, 3],
            ["Bến xe Thốt Nốt - Cần Thơ", 13, 0, 3],
            ["Bến xe Bình Thủy - Cần Thơ", 13, 0, 3],
            ["Bến xe Phong Điền - Cần Thơ", 13, 0, 3],
            ["Bến xe Khu đô thị nam - Cần Thơ", 13, 0, 3],
            ["Bến xe Cờ Đỏ - Cần Thơ", 13, 0, 3],
            ["Bến xe 91B - Cần Thơ", 13, 0, 3],
            ["Bến xe Tàu - Cần Thơ", 13, 0, 3],
            ["Bến xe Hùng Vương - Cần Thơ", 13, 0, 3],
            ["Bến xe Ô Môn - Cần Thơ", 13, 0, 3],
            ["An Dương - Hải Phòng", 27, 285, 2],
            ["An Lão - Hải Phòng", 27, 286, 2],
            ["Bạch Long Vĩ - Hải Phòng", 27, 287, 2],
            ["Cát Hải - Hải Phòng", 27, 288, 2],
            ["Cát Bà - Hải Phòng", 27, 114248, 2],
            ["Dương Kinh - Hải Phòng", 27, 289, 2],
            ["Đồ Sơn - Hải Phòng", 27, 290, 2],
            ["Hải An - Hải Phòng", 27, 291, 2],
            ["Hồng Bàng - Hải Phòng", 27, 292, 2],
            ["Kiến An - Hải Phòng", 27, 293, 2],
            ["Kiến Thụy - Hải Phòng", 27, 294, 2],
            ["Lê Chân - Hải Phòng", 27, 295, 2],
            ["Ngô Quyền - Hải Phòng", 27, 296, 2],
            ["Thuỷ Nguyên - Hải Phòng", 27, 297, 2],
            ["Tiên Lãng - Hải Phòng", 27, 298, 2],
            ["Vĩnh Bảo - Hải Phòng", 27, 299, 2],
            ["An Phú - An Giang", 1, 1, 2],
            ["Châu Đốc - An Giang", 1, 2, 2],
            ["Châu Phú - An Giang", 1, 3, 2],
            ["Châu Thành - An Giang", 1, 4, 2],
            ["Chợ Mới - An Giang", 1, 5, 2],
            ["Long Xuyên - An Giang", 1, 6, 2],
            ["Phú Tân - An Giang", 1, 7, 2],
            ["Tân Châu - An Giang", 1, 8, 2],
            ["Thoại Sơn - An Giang", 1, 9, 2],
            ["Tịnh Biên - An Giang", 1, 10, 2],
            ["Tri Tôn - An Giang", 1, 11, 2],
            ["Tân Thành - Bà Rịa-Vũng Tàu", 2, 12, 2],
            ["Vũng Tàu - Bà Rịa-Vũng Tàu", 2, 13, 2],
            ["Xuyên Mộc - Bà Rịa-Vũng Tàu", 2, 14, 2],
            ["Bà Rịa - Bà Rịa-Vũng Tàu", 2, 15, 2],
            ["Châu Đức - Bà Rịa-Vũng Tàu", 2, 16, 2],
            ["Côn Đảo - Bà Rịa-Vũng Tàu", 2, 17, 2],
            ["Đất Đỏ - Bà Rịa-Vũng Tàu", 2, 18, 2],
            ["Long Điền - Bà Rịa-Vũng Tàu", 2, 19, 2],
            ["Bạc Liêu - Bạc Liêu", 5, 38, 2],
            ["Đông Hải - Bạc Liêu", 5, 39, 2],
            ["Giá Rai - Bạc Liêu", 5, 40, 2],
            ["Hoà Bình - Bạc Liêu", 5, 41, 2],
            ["Hồng Dân - Bạc Liêu", 5, 42, 2],
            ["Phước Long - Bạc Liêu", 5, 43, 2],
            ["Vĩnh Lợi - Bạc Liêu", 5, 44, 2],
            ["Ba Bể - Bắc Kạn", 4, 30, 2],
            ["Bạch Thông - Bắc Kạn", 4, 31, 2],
            ["Bắc Kạn - Bắc Kạn", 4, 32, 2],
            ["Chợ Đồn - Bắc Kạn", 4, 33, 2],
            ["Chợ Mới - Bắc Kạn", 4, 34, 2],
            ["Na Rì - Bắc Kạn", 4, 35, 2],
            ["Ngân Sơn - Bắc Kạn", 4, 36, 2],
            ["Pác Nặm - Bắc Kạn", 4, 37, 2],
            ["Bắc Giang - Bắc Giang", 3, 20, 2],
            ["Hiệp Hòa - Bắc Giang", 3, 21, 2],
            ["Lạng Giang - Bắc Giang", 3, 22, 2],
            ["Lục Nam - Bắc Giang", 3, 23, 2],
            ["Lục Ngạn - Bắc Giang", 3, 24, 2],
            ["Sơn Động - Bắc Giang", 3, 25, 2],
            ["Tân Yên - Bắc Giang", 3, 26, 2],
            ["Việt Yên - Bắc Giang", 3, 27, 2],
            ["Yên Dũng - Bắc Giang", 3, 28, 2],
            ["Yên Thế - Bắc Giang", 3, 29, 2],
            ["Bắc Ninh - Bắc Ninh", 6, 45, 2],
            ["Gia Bình - Bắc Ninh", 6, 46, 2],
            ["Lương Tài - Bắc Ninh", 6, 47, 2],
            ["Quế Võ - Bắc Ninh", 6, 48, 2],
            ["Thuận Thành - Bắc Ninh", 6, 49, 2],
            ["Tiên Du - Bắc Ninh", 6, 50, 2],
            ["Từ Sơn - Bắc Ninh", 6, 51, 2],
            ["Yên Phong - Bắc Ninh", 6, 52, 2],
            ["Ba Tri - Bến Tre", 7, 53, 2],
            ["Bến Tre - Bến Tre", 7, 54, 2],
            ["Bình Đại - Bến Tre", 7, 55, 2],
            ["Châu Thành - Bến Tre", 7, 56, 2],
            ["Chợ Lách - Bến Tre", 7, 57, 2],
            ["Giồng Trôm - Bến Tre", 7, 58, 2],
            ["Mỏ Cày Bắc - Bến Tre", 7, 59, 2],
            ["Mỏ Cày Nam - Bến Tre", 7, 60, 2],
            ["Thạnh Phú - Bến Tre", 7, 61, 2],
            ["Bến Cát - Bình Dương", 9, 73, 2],
            ["Dầu Tiếng - Bình Dương", 9, 74, 2],
            ["Dĩ An - Bình Dương", 9, 75, 2],
            ["Phú Giáo - Bình Dương", 9, 76, 2],
            ["Tân Uyên - Bình Dương", 9, 77, 2],
            ["Thủ Dầu Một - Bình Dương", 9, 78, 2],
            ["Thuận An - Bình Dương", 9, 79, 2],
            ["An Lão - Bình Định", 8, 62, 2],
            ["An Nhơn - Bình Định", 8, 63, 2],
            ["Hoài Ân - Bình Định", 8, 64, 2],
            ["Hoài Nhơn - Bình Định", 8, 65, 2],
            ["Phù Cát - Bình Định", 8, 66, 2],
            ["Phù Mỹ - Bình Định", 8, 67, 2],
            ["Qui Nhơn - Bình Định", 8, 68, 2],
            ["Tây Sơn - Bình Định", 8, 69, 2],
            ["Tuy Phước - Bình Định", 8, 70, 2],
            ["Vân Canh - Bình Định", 8, 71, 2],
            ["Vĩnh Thạnh - Bình Định", 8, 72, 2],
            ["Bình Long - Bình Phước", 10, 80, 2],
            ["Bù Đăng - Bình Phước", 10, 81, 2],
            ["Bù Đốp - Bình Phước", 10, 82, 2],
            ["Bù Gia Mập - Bình Phước", 10, 83, 2],
            ["Chơn Thành - Bình Phước", 10, 84, 2],
            ["Đồng Phú - Bình Phước", 10, 85, 2],
            ["Đồng Xoài - Bình Phước", 10, 86, 2],
            ["Hớn Quản - Bình Phước", 10, 87, 2],
            ["Lộc Ninh - Bình Phước", 10, 88, 2],
            ["Phước Long - Bình Phước", 10, 89, 2],
            ["Bắc Bình - Bình Thuận", 11, 90, 2],
            ["Đức Linh - Bình Thuận", 11, 91, 2],
            ["Hàm Tân - Bình Thuận", 11, 92, 2],
            ["Hàm Thuận Bắc - Bình Thuận", 11, 93, 2],
            ["Hàm Thuận Nam - Bình Thuận", 11, 94, 2],
            ["La Gi - Bình Thuận", 11, 95, 2],
            ["Phan Thiết - Bình Thuận", 11, 96, 2],
            ["Mũi Né - Bình Thuận", 11, 96, 2],
            ["Phú Quý - Bình Thuận", 11, 97, 2],
            ["Tánh Linh - Bình Thuận", 11, 98, 2],
            ["Tuy Phong - Bình Thuận", 11, 99, 2],
            ["Cà Mau - Cà Mau", 12, 100, 2],
            ["Cái Nước - Cà Mau", 12, 101, 2],
            ["Đầm Dơi - Cà Mau", 12, 102, 2],
            ["Năm Căn - Cà Mau", 12, 103, 2],
            ["Ngọc Hiển - Cà Mau", 12, 104, 2],
            ["Phú Tân - Cà Mau", 12, 105, 2],
            ["Thới Bình - Cà Mau", 12, 106, 2],
            ["Trần Văn Thời - Cà Mau", 12, 107, 2],
            ["U Minh - Cà Mau", 12, 108, 2],
            ["Bảo Lạc - Cao Bằng", 14, 119, 2],
            ["Bảo Lâm - Cao Bằng", 14, 120, 2],
            ["Cao Bằng - Cao Bằng", 14, 121, 2],
            ["Hà Quảng - Cao Bằng", 14, 122, 2],
            ["Hạ Lang - Cao Bằng", 14, 123, 2],
            ["Hòa An - Cao Bằng", 14, 124, 2],
            ["Nguyên Bình - Cao Bằng", 14, 125, 2],
            ["Phục Hòa - Cao Bằng", 14, 126, 2],
            ["Quảng Uyên - Cao Bằng", 14, 127, 2],
            ["Thạch An - Cao Bằng", 14, 128, 2],
            ["Thông Nông - Cao Bằng", 14, 129, 2],
            ["Trà Lĩnh - Cao Bằng", 14, 130, 2],
            ["Trùng Khánh - Cao Bằng", 14, 131, 2],
            ["Buôn Đôn - Đắk Lắk", 16, 141, 2],
            ["Buôn Hồ - Đắk Lắk", 16, 142, 2],
            ["Buôn Ma Thuột - Đắk Lắk", 16, 143, 2],
            ["Cư Kuin - Đắk Lắk", 16, 144, 2],
            ["Cư M'gar - Đắk Lắk", 16, 145, 2],
            ["Ea H'leo - Đắk Lắk", 16, 146, 2],
            ["Ea Kar - Đắk Lắk", 16, 147, 2],
            ["Ea Súp - Đắk Lắk", 16, 148, 2],
            ["Krông Ana - Đắk Lắk", 16, 149, 2],
            ["Krông Bông - Đắk Lắk", 16, 150, 2],
            ["Krông Búk - Đắk Lắk", 16, 151, 2],
            ["Krông Năng - Đắk Lắk", 16, 152, 2],
            ["Krông Pắk - Đắk Lắk", 16, 153, 2],
            ["Lắk - Đắk Lắk", 16, 154, 2],
            ["M'Đrăk - Đắk Lắk", 16, 155, 2],
            ["Cư Jút - Đăk Nông", 17, 156, 2],
            ["Đăk Glong - Đăk Nông", 17, 157, 2],
            ["Đăk Mil - Đăk Nông", 17, 158, 2],
            ["Đăk R'Lấp - Đăk Nông", 17, 159, 2],
            ["Đăk Song - Đăk Nông", 17, 160, 2],
            ["Gia Nghĩa - Đăk Nông", 17, 161, 2],
            ["Krông Nô - Đăk Nông", 17, 162, 2],
            ["Tuy Đức - Đăk Nông", 17, 163, 2],
            ["Điện Biên - Điện Biên", 18, 164, 2],
            ["Điện Biên Đông - Điện Biên", 18, 165, 2],
            ["Điện Biên Phủ - Điện Biên", 18, 166, 2],
            ["Mường Ảng - Điện Biên", 18, 167, 2],
            ["Mường Chà - Điện Biên", 18, 168, 2],
            ["Mường Lay - Điện Biên", 18, 169, 2],
            ["Mường Nhé - Điện Biên", 18, 170, 2],
            ["Nậm Pồ - Điện Biên", 18, 171, 2],
            ["Tủa Chùa - Điện Biên", 18, 172, 2],
            ["Tuần Giáo - Điện Biên", 18, 173, 2],
            ["Biên Hòa - Đồng Nai", 19, 174, 2],
            ["Cẩm Mỹ - Đồng Nai", 19, 175, 2],
            ["Định Quán - Đồng Nai", 19, 176, 2],
            ["Long Khánh - Đồng Nai", 19, 177, 2],
            ["Long Thành - Đồng Nai", 19, 178, 2],
            ["Nhơn Trạch - Đồng Nai", 19, 179, 2],
            ["Tân Phú - Đồng Nai", 19, 180, 2],
            ["Thống Nhất - Đồng Nai", 19, 181, 2],
            ["Trảng Bom - Đồng Nai", 19, 182, 2],
            ["Vĩnh Cửu - Đồng Nai", 19, 183, 2],
            ["Xuân Lộc - Đồng Nai", 19, 184, 2],
            ["Cao Lãnh - Đồng Tháp", 20, 185, 2],
            ["Cao Lãnh - Đồng Tháp", 20, 186, 2],
            ["Châu Thành - Đồng Tháp", 20, 187, 2],
            ["Hồng Ngự - Đồng Tháp", 20, 188, 2],
            ["Hồng Ngự - Đồng Tháp", 20, 189, 2],
            ["Lai Vung - Đồng Tháp", 20, 190, 2],
            ["Lấp Vò - Đồng Tháp", 20, 191, 2],
            ["Sa Đéc - Đồng Tháp", 20, 192, 2],
            ["Tam Nông - Đồng Tháp", 20, 193, 2],
            ["Tân Hồng - Đồng Tháp", 20, 194, 2],
            ["Thanh Bình - Đồng Tháp", 20, 195, 2],
            ["Tháp Mười - Đồng Tháp", 20, 196, 2],
            ["An Khê - Gia Lai", 21, 197, 2],
            ["Ayun Pa - Gia Lai", 21, 198, 2],
            ["Chư Păh - Gia Lai", 21, 199, 2],
            ["Chư Prông - Gia Lai", 21, 200, 2],
            ["Chư Pưh - Gia Lai", 21, 201, 2],
            ["Chư Sê - Gia Lai", 21, 202, 2],
            ["Đăk Đoa - Gia Lai", 21, 203, 2],
            ["Đắk Pơ - Gia Lai", 21, 204, 2],
            ["Đức Cơ - Gia Lai", 21, 205, 2],
            ["Ia Grai - Gia Lai", 21, 206, 2],
            ["Ia Pa - Gia Lai", 21, 207, 2],
            ["KBang - Gia Lai", 21, 208, 2],
            ["Kông Chro - Gia Lai", 21, 209, 2],
            ["Krông Pa - Gia Lai", 21, 210, 2],
            ["Mang Yang - Gia Lai", 21, 211, 2],
            ["Phú Thiện - Gia Lai", 21, 212, 2],
            ["Pleiku - Gia Lai", 21, 213, 2],
            ["Bắc Mê - Hà Giang", 22, 214, 2],
            ["Bắc Quang - Hà Giang", 22, 215, 2],
            ["Đồng Văn - Hà Giang", 22, 216, 2],
            ["Hà Giang - Hà Giang", 22, 217, 2],
            ["Hoàng Su Phì - Hà Giang", 22, 218, 2],
            ["Mèo Vạc - Hà Giang", 22, 219, 2],
            ["Quản Bạ - Hà Giang", 22, 220, 2],
            ["Quang Bình - Hà Giang", 22, 221, 2],
            ["Vị Xuyên - Hà Giang", 22, 222, 2],
            ["Xín Mần - Hà Giang", 22, 223, 2],
            ["Yên Minh - Hà Giang", 22, 224, 2],
            ["Bình Lục - Hà Nam", 23, 225, 2],
            ["Duy Tiên - Hà Nam", 23, 226, 2],
            ["Kim Bảng - Hà Nam", 23, 227, 2],
            ["Lý Nhân - Hà Nam", 23, 228, 2],
            ["Phủ Lý - Hà Nam", 23, 229, 2],
            ["Thanh Liêm - Hà Nam", 23, 230, 2],
            ["Can Lộc - Hà Tĩnh", 25, 261, 2],
            ["Cẩm Xuyên - Hà Tĩnh", 25, 262, 2],
            ["Đức Thọ - Hà Tĩnh", 25, 263, 2],
            ["Hà Tĩnh - Hà Tĩnh", 25, 264, 2],
            ["Hồng Lĩnh - Hà Tĩnh", 25, 265, 2],
            ["Hương Khê - Hà Tĩnh", 25, 266, 2],
            ["Hương Sơn - Hà Tĩnh", 25, 267, 2],
            ["Kỳ Anh - Hà Tĩnh", 25, 268, 2],
            ["Lộc Hà - Hà Tĩnh", 25, 269, 2],
            ["Nghi Xuân - Hà Tĩnh", 25, 270, 2],
            ["Thạch Hà - Hà Tĩnh", 25, 271, 2],
            ["Vũ Quang - Hà Tĩnh", 25, 272, 2],
            ["Bình Giang - Hải Dương", 26, 273, 2],
            ["Cẩm Giàng - Hải Dương", 26, 274, 2],
            ["Chí Linh - Hải Dương", 26, 275, 2],
            ["Gia Lộc - Hải Dương", 26, 276, 2],
            ["Hải Dương - Hải Dương", 26, 277, 2],
            ["Kim Thành - Hải Dương", 26, 278, 2],
            ["Kinh Môn - Hải Dương", 26, 279, 2],
            ["Nam Sách - Hải Dương", 26, 280, 2],
            ["Ninh Giang - Hải Dương", 26, 281, 2],
            ["Thanh Hà - Hải Dương", 26, 282, 2],
            ["Thanh Miện - Hải Dương", 26, 283, 2],
            ["Tứ Kỳ - Hải Dương", 26, 284, 2],
            ["Châu Thành - Hậu Giang", 28, 301, 2],
            ["Châu Thành A - Hậu Giang", 28, 302, 2],
            ["Long Mỹ - Hậu Giang", 28, 303, 2],
            ["Ngã Bảy - Hậu Giang", 28, 304, 2],
            ["Phụng Hiệp - Hậu Giang", 28, 305, 2],
            ["Vị Thanh - Hậu Giang", 28, 306, 2],
            ["Vị Thủy - Hậu Giang", 28, 307, 2],
            ["Cao Phong - Hòa Bình", 30, 333, 2],
            ["Đà Bắc - Hòa Bình", 30, 334, 2],
            ["Hoà Bình - Hòa Bình", 30, 335, 2],
            ["Kim Bôi - Hòa Bình", 30, 336, 2],
            ["Kỳ Sơn - Hòa Bình", 30, 337, 2],
            ["Lạc Sơn - Hòa Bình", 30, 338, 2],
            ["Lạc Thủy - Hòa Bình", 30, 339, 2],
            ["Lương Sơn - Hòa Bình", 30, 340, 2],
            ["Mai Châu - Hòa Bình", 30, 341, 2],
            ["Tân Lạc - Hòa Bình", 30, 342, 2],
            ["Yên Thủy - Hòa Bình", 30, 343, 2],
            ["Ân Thi - Hưng Yên", 31, 344, 2],
            ["Hưng Yên - Hưng Yên", 31, 345, 2],
            ["Khoái Châu - Hưng Yên", 31, 346, 2],
            ["Kim Động - Hưng Yên", 31, 347, 2],
            ["Mỹ Hào - Hưng Yên", 31, 348, 2],
            ["Phù Cừ - Hưng Yên", 31, 349, 2],
            ["Tiên Lữ - Hưng Yên", 31, 350, 2],
            ["Văn Giang - Hưng Yên", 31, 351, 2],
            ["Văn Lâm - Hưng Yên", 31, 352, 2],
            ["Yên Mỹ - Hưng Yên", 31, 353, 2],
            ["Cam Lâm - Khánh Hòa", 32, 354, 2],
            ["Cam Ranh - Khánh Hòa", 32, 355, 2],
            ["Diên Khánh - Khánh Hòa", 32, 356, 2],
            ["Khánh Sơn - Khánh Hòa", 32, 357, 2],
            ["Khánh Vĩnh - Khánh Hòa", 32, 358, 2],
            ["Nha Trang - Khánh Hòa", 32, 359, 2],
            ["Ninh Hòa - Khánh Hòa", 32, 360, 2],
            ["Trường Sa - Khánh Hòa", 32, 361, 2],
            ["Vạn Ninh - Khánh Hòa", 32, 362, 2],
            ["Vạn Giã - Khánh Hòa", 32, 362, 2],
            ["An Biên - Kiên Giang", 33, 363, 2],
            ["An Minh - Kiên Giang", 33, 364, 2],
            ["Châu Thành - Kiên Giang", 33, 365, 2],
            ["Giang Thành - Kiên Giang", 33, 366, 2],
            ["Giồng Riềng - Kiên Giang", 33, 367, 2],
            ["Gò Quao - Kiên Giang", 33, 368, 2],
            ["Hà Tiên - Kiên Giang", 33, 369, 2],
            ["Hòn Đất - Kiên Giang", 33, 370, 2],
            ["Kiên Hải - Kiên Giang", 33, 371, 2],
            ["Kiên Lương - Kiên Giang", 33, 372, 2],
            ["Phú Quốc - Kiên Giang", 33, 373, 2],
            ["Rạch Giá - Kiên Giang", 33, 374, 2],
            ["Tân Hiệp - Kiên Giang", 33, 375, 2],
            ["U Minh Thượng - Kiên Giang", 33, 376, 2],
            ["Vĩnh Thuận - Kiên Giang", 33, 377, 2],
            ["Đắk Glei - Kon Tum", 34, 378, 2],
            ["Đắk Hà - Kon Tum", 34, 379, 2],
            ["Đăk Tô - Kon Tum", 34, 380, 2],
            ["Kon Plông - Kon Tum", 34, 381, 2],
            ["Kon Rẫy - Kon Tum", 34, 382, 2],
            ["Kon Tum - Kon Tum", 34, 383, 2],
            ["Ngọc Hồi - Kon Tum", 34, 384, 2],
            ["Sa Thầy - Kon Tum", 34, 385, 2],
            ["Tu Mơ Rông - Kon Tum", 34, 386, 2],
            ["Lai Châu - Lai Châu", 35, 387, 2],
            ["Mường Tè - Lai Châu", 35, 388, 2],
            ["Nậm Nhùn - Lai Châu", 35, 389, 2],
            ["Phong Thổ - Lai Châu", 35, 390, 2],
            ["Sìn Hồ - Lai Châu", 35, 391, 2],
            ["Tam Đường - Lai Châu", 35, 392, 2],
            ["Tân Uyên - Lai Châu", 35, 393, 2],
            ["Than Uyên - Lai Châu", 35, 394, 2],
            ["Bảo Lâm - Lâm Đồng", 36, 395, 2],
            ["Bảo Lộc - Lâm Đồng", 36, 396, 2],
            ["Cát Tiên - Lâm Đồng", 36, 397, 2],
            ["Di Linh - Lâm Đồng", 36, 398, 2],
            ["Đà Lạt - Lâm Đồng", 36, 399, 2],
            ["Đạ Huoai - Lâm Đồng", 36, 400, 2],
            ["Đạ Tẻh - Lâm Đồng", 36, 401, 2],
            ["Đam Rông - Lâm Đồng", 36, 402, 2],
            ["Đơn Dương - Lâm Đồng", 36, 403, 2],
            ["Đức Trọng - Lâm Đồng", 36, 404, 2],
            ["Lạc Dương - Lâm Đồng", 36, 405, 2],
            ["Lâm Hà - Lâm Đồng", 36, 406, 2],
            ["Bắc Sơn - Lạng Sơn", 37, 407, 2],
            ["Bình Gia - Lạng Sơn", 37, 408, 2],
            ["Cao Lộc - Lạng Sơn", 37, 409, 2],
            ["Chi Lăng - Lạng Sơn", 37, 410, 2],
            ["Đình Lập - Lạng Sơn", 37, 411, 2],
            ["Hữu Lũng - Lạng Sơn", 37, 412, 2],
            ["Lạng Sơn - Lạng Sơn", 37, 413, 2],
            ["Lộc Bình - Lạng Sơn", 37, 414, 2],
            ["Tràng Định - Lạng Sơn", 37, 415, 2],
            ["Vãn Lãng - Lạng Sơn", 37, 416, 2],
            ["Văn Quan - Lạng Sơn", 37, 417, 2],
            ["Bảo Thắng - Lào Cai", 38, 418, 2],
            ["Bảo Yên - Lào Cai", 38, 419, 2],
            ["Bát Xát - Lào Cai", 38, 420, 2],
            ["Bắc Hà - Lào Cai", 38, 421, 2],
            ["Lào Cai - Lào Cai", 38, 422, 2],
            ["Mường Khương - Lào Cai", 38, 423, 2],
            ["Sa Pa - Lào Cai", 38, 424, 2],
            ["Si Ma Cai - Lào Cai", 38, 425, 2],
            ["Văn Bàn - Lào Cai", 38, 426, 2],
            ["Bến Lức - Long An", 39, 427, 2],
            ["Cần Đước - Long An", 39, 428, 2],
            ["Cần Giuộc - Long An", 39, 429, 2],
            ["Châu Thành - Long An", 39, 430, 2],
            ["Đức Hòa - Long An", 39, 431, 2],
            ["Đức Huệ - Long An", 39, 432, 2],
            ["Kiến Tường - Long An", 39, 433, 2],
            ["Mộc Hóa - Long An", 39, 434, 2],
            ["Tân An - Long An", 39, 435, 2],
            ["Tân Hưng - Long An", 39, 436, 2],
            ["Tân Thạnh - Long An", 39, 437, 2],
            ["Tân Trụ - Long An", 39, 438, 2],
            ["Thạnh Hóa - Long An", 39, 439, 2],
            ["Thủ Thừa - Long An", 39, 440, 2],
            ["Vĩnh Hưng - Long An", 39, 441, 2],
            ["Giao Thủy - Nam Định", 40, 442, 2],
            ["Hải Hậu - Nam Định", 40, 443, 2],
            ["Mỹ Lộc - Nam Định", 40, 444, 2],
            ["Nam Định - Nam Định", 40, 445, 2],
            ["Nam Trực - Nam Định", 40, 446, 2],
            ["Nghĩa Hưng - Nam Định", 40, 447, 2],
            ["Trực Ninh - Nam Định", 40, 448, 2],
            ["Vụ Bản - Nam Định", 40, 449, 2],
            ["Xuân Trường - Nam Định", 40, 450, 2],
            ["Ý Yên - Nam Định", 40, 451, 2],
            ["Anh Sơn - Nghệ An", 41, 452, 2],
            ["Con Cuông - Nghệ An", 41, 453, 2],
            ["Cửa Lò - Nghệ An", 41, 454, 2],
            ["Diễn Châu - Nghệ An", 41, 455, 2],
            ["Đô Lương - Nghệ An", 41, 456, 2],
            ["Hưng Nguyên - Nghệ An", 41, 457, 2],
            ["Kỳ Sơn - Nghệ An", 41, 458, 2],
            ["Nam Đàn - Nghệ An", 41, 459, 2],
            ["Nghi Lộc - Nghệ An", 41, 460, 2],
            ["Nghĩa Đàn - Nghệ An", 41, 461, 2],
            ["Quế Phong - Nghệ An", 41, 462, 2],
            ["Quỳ Châu - Nghệ An", 41, 463, 2],
            ["Quỳ Hợp - Nghệ An", 41, 464, 2],
            ["Quỳnh Lưu - Nghệ An", 41, 465, 2],
            ["Tân Kỳ - Nghệ An", 41, 466, 2],
            ["Thái Hòa - Nghệ An", 41, 467, 2],
            ["Thanh Chương - Nghệ An", 41, 468, 2],
            ["Tương Dương - Nghệ An", 41, 469, 2],
            ["Vinh - Nghệ An", 41, 470, 2],
            ["Yên Thành - Nghệ An", 41, 471, 2],
            ["Gia Viễn - Ninh Bình", 42, 472, 2],
            ["Hoa Lư - Ninh Bình", 42, 473, 2],
            ["Kim Sơn - Ninh Bình", 42, 474, 2],
            ["Nho Quan - Ninh Bình", 42, 475, 2],
            ["Ninh Bình - Ninh Bình", 42, 476, 2],
            ["Tam Điệp - Ninh Bình", 42, 477, 2],
            ["Yên Khánh - Ninh Bình", 42, 478, 2],
            ["Yên Mô - Ninh Bình", 42, 479, 2],
            ["Bác Ái - Ninh Thuận", 43, 480, 2],
            ["Ninh Hải - Ninh Thuận", 43, 481, 2],
            ["Ninh Phước - Ninh Thuận", 43, 482, 2],
            ["Ninh Sơn - Ninh Thuận", 43, 483, 2],
            ["Phan Rang-Tháp Chàm - Ninh Thuận", 43, 484, 2],
            ["Thuận Bắc - Ninh Thuận", 43, 485, 2],
            ["Thuận Nam - Ninh Thuận", 43, 486, 2],
            ["Cẩm Khê - Phú Thọ", 44, 487, 2],
            ["Đoan Hùng - Phú Thọ", 44, 488, 2],
            ["Hạ Hòa - Phú Thọ", 44, 489, 2],
            ["Lâm Thao - Phú Thọ", 44, 490, 2],
            ["Phú Thọ - Phú Thọ", 44, 491, 2],
            ["Phù Ninh - Phú Thọ", 44, 492, 2],
            ["Tam Nông - Phú Thọ", 44, 493, 2],
            ["Tân Sơn - Phú Thọ", 44, 494, 2],
            ["Thanh Ba - Phú Thọ", 44, 495, 2],
            ["Thanh Sơn - Phú Thọ", 44, 496, 2],
            ["Thanh Thủy - Phú Thọ", 44, 497, 2],
            ["Việt Trì - Phú Thọ", 44, 498, 2],
            ["Yên Lập - Phú Thọ", 44, 499, 2],
            ["Đông Hòa - Phú Yên", 45, 500, 2],
            ["Đồng Xuân - Phú Yên", 45, 501, 2],
            ["Phú Hòa - Phú Yên", 45, 502, 2],
            ["Sông Cầu - Phú Yên", 45, 503, 2],
            ["Sông Hinh - Phú Yên", 45, 504, 2],
            ["Sơn Hòa - Phú Yên", 45, 505, 2],
            ["Tây Hòa - Phú Yên", 45, 506, 2],
            ["Tuy An - Phú Yên", 45, 507, 2],
            ["Tuy Hòa - Phú Yên", 45, 508, 2],
            ["Bố Trạch - Quảng Bình", 46, 509, 2],
            ["Đồng Hới - Quảng Bình", 46, 510, 2],
            ["Lệ Thủy - Quảng Bình", 46, 511, 2],
            ["Minh Hóa - Quảng Bình", 46, 512, 2],
            ["Quảng Ninh - Quảng Bình", 46, 513, 2],
            ["Quảng Trạch - Quảng Bình", 46, 514, 2],
            ["Tuyên Hóa - Quảng Bình", 46, 515, 2],
            ["Bắc Trà My - Quảng Nam", 47, 516, 2],
            ["Duy Xuyên - Quảng Nam", 47, 517, 2],
            ["Đại Lộc - Quảng Nam", 47, 518, 2],
            ["Điện Bàn - Quảng Nam", 47, 519, 2],
            ["Đông Giang - Quảng Nam", 47, 520, 2],
            ["Hiệp Đức - Quảng Nam", 47, 521, 2],
            ["Hội An - Quảng Nam", 47, 522, 2],
            ["Nam Giang - Quảng Nam", 47, 523, 2],
            ["Nam Trà My - Quảng Nam", 47, 524, 2],
            ["Nông Sơn - Quảng Nam", 47, 525, 2],
            ["Núi Thành - Quảng Nam", 47, 526, 2],
            ["Phú Ninh - Quảng Nam", 47, 527, 2],
            ["Phước Sơn - Quảng Nam", 47, 528, 2],
            ["Quế Sơn - Quảng Nam", 47, 529, 2],
            ["Tam Kỳ - Quảng Nam", 47, 530, 2],
            ["Tây Giang - Quảng Nam", 47, 531, 2],
            ["Thăng Bình - Quảng Nam", 47, 532, 2],
            ["Tiên Phước - Quảng Nam", 47, 533, 2],
            ["Ba Tơ - Quảng Ngãi", 48, 534, 2],
            ["Bình Sơn - Quảng Ngãi", 48, 535, 2],
            ["Đức Phổ - Quảng Ngãi", 48, 536, 2],
            ["Lý Sơn - Quảng Ngãi", 48, 537, 2],
            ["Minh Long - Quảng Ngãi", 48, 538, 2],
            ["Mộ Đức - Quảng Ngãi", 48, 539, 2],
            ["Nghĩa Hành - Quảng Ngãi", 48, 540, 2],
            ["Quảng Ngãi - Quảng Ngãi", 48, 541, 2],
            ["Sơn Hà - Quảng Ngãi", 48, 542, 2],
            ["Sơn Tây - Quảng Ngãi", 48, 543, 2],
            ["Sơn Tịnh - Quảng Ngãi", 48, 544, 2],
            ["Tây Trà - Quảng Ngãi", 48, 545, 2],
            ["Trà Bồng - Quảng Ngãi", 48, 546, 2],
            ["Tư Nghĩa - Quảng Ngãi", 48, 547, 2],
            ["Ba Chẽ - Quảng Ninh", 49, 548, 2],
            ["Bình Liêu - Quảng Ninh", 49, 549, 2],
            ["Cẩm Phả - Quảng Ninh", 49, 550, 2],
            ["Cô Tô - Quảng Ninh", 49, 551, 2],
            ["Đầm Hà - Quảng Ninh", 49, 552, 2],
            ["Đông Triều - Quảng Ninh", 49, 553, 2],
            ["Hạ Long - Quảng Ninh", 49, 554, 2],
            ["Hải Hà - Quảng Ninh", 49, 555, 2],
            ["Hoành Bồ - Quảng Ninh", 49, 556, 2],
            ["Móng Cái - Quảng Ninh", 49, 557, 2],
            ["Quảng Yên - Quảng Ninh", 49, 558, 2],
            ["Tiên Yên - Quảng Ninh", 49, 559, 2],
            ["Uông Bí - Quảng Ninh", 49, 560, 2],
            ["Vân Đồn - Quảng Ninh", 49, 561, 2],
            ["Cam Lộ - Quảng Trị", 50, 562, 2],
            ["Cồn Cỏ - Quảng Trị", 50, 563, 2],
            ["Đa Krông - Quảng Trị", 50, 564, 2],
            ["Đông Hà - Quảng Trị", 50, 565, 2],
            ["Gio Linh - Quảng Trị", 50, 566, 2],
            ["Hải Lăng - Quảng Trị", 50, 567, 2],
            ["Hướng Hóa - Quảng Trị", 50, 568, 2],
            ["Quảng Trị - Quảng Trị", 50, 569, 2],
            ["Triệu Phong - Quảng Trị", 50, 570, 2],
            ["Vĩnh Linh - Quảng Trị", 50, 571, 2],
            ["Châu Thành - Sóc Trăng", 51, 572, 2],
            ["Cù Lao Dung - Sóc Trăng", 51, 573, 2],
            ["Kế Sách - Sóc Trăng", 51, 574, 2],
            ["Long Phú - Sóc Trăng", 51, 575, 2],
            ["Mỹ Tú - Sóc Trăng", 51, 576, 2],
            ["Mỹ Xuyên - Sóc Trăng", 51, 577, 2],
            ["Ngã Năm - Sóc Trăng", 51, 578, 2],
            ["Sóc Trăng - Sóc Trăng", 51, 579, 2],
            ["Thạnh Trị - Sóc Trăng", 51, 580, 2],
            ["Trần Đề - Sóc Trăng", 51, 581, 2],
            ["Vĩnh Châu - Sóc Trăng", 51, 582, 2],
            ["Bắc Yên - Sơn La", 52, 583, 2],
            ["Mai Sơn - Sơn La", 52, 584, 2],
            ["Mộc Châu - Sơn La", 52, 585, 2],
            ["Mường La - Sơn La", 52, 586, 2],
            ["Phù Yên - Sơn La", 52, 587, 2],
            ["Quỳnh Nhai - Sơn La", 52, 588, 2],
            ["Sông Mã - Sơn La", 52, 589, 2],
            ["Sốp Cộp - Sơn La", 52, 590, 2],
            ["Sơn La - Sơn La", 52, 591, 2],
            ["Thuận Châu - Sơn La", 52, 592, 2],
            ["Yên Châu - Sơn La", 52, 593, 2],
            ["Bến Cầu - Tây Ninh", 53, 594, 2],
            ["Châu Thành - Tây Ninh", 53, 595, 2],
            ["Dương Minh Châu - Tây Ninh", 53, 596, 2],
            ["Gò Dầu - Tây Ninh", 53, 597, 2],
            ["Hòa Thành - Tây Ninh", 53, 598, 2],
            ["Tân Biên - Tây Ninh", 53, 599, 2],
            ["Tân Châu - Tây Ninh", 53, 600, 2],
            ["Tây Ninh - Tây Ninh", 53, 601, 2],
            ["Trảng Bàng - Tây Ninh", 53, 602, 2],
            ["Đông Hưng - Thái Bình", 54, 603, 2],
            ["Hưng Hà - Thái Bình", 54, 604, 2],
            ["Kiến Xương - Thái Bình", 54, 605, 2],
            ["Quỳnh Phụ - Thái Bình", 54, 606, 2],
            ["Thái Bình - Thái Bình", 54, 607, 2],
            ["Thái Thụy - Thái Bình", 54, 608, 2],
            ["Tiền Hải - Thái Bình", 54, 609, 2],
            ["Vũ Thư - Thái Bình", 54, 610, 2],
            ["Đại Từ - Thái Nguyên", 55, 611, 2],
            ["Định Hóa - Thái Nguyên", 55, 612, 2],
            ["Đồng Hỷ - Thái Nguyên", 55, 613, 2],
            ["Phổ Yên - Thái Nguyên", 55, 614, 2],
            ["Phú Bình - Thái Nguyên", 55, 615, 2],
            ["Phú Lương - Thái Nguyên", 55, 616, 2],
            ["Sông Công - Thái Nguyên", 55, 617, 2],
            ["Thái Nguyên - Thái Nguyên", 55, 618, 2],
            ["Võ Nhai - Thái Nguyên", 55, 619, 2],
            ["Bá Thước - Thanh Hóa", 56, 620, 2],
            ["Bỉm Sơn - Thanh Hóa", 56, 621, 2],
            ["Cẩm Thủy - Thanh Hóa", 56, 622, 2],
            ["Đông Sơn - Thanh Hóa", 56, 623, 2],
            ["Hà Trung - Thanh Hóa", 56, 624, 2],
            ["Hậu Lộc - Thanh Hóa", 56, 625, 2],
            ["Hoằng Hóa - Thanh Hóa", 56, 626, 2],
            ["Lang Chánh - Thanh Hóa", 56, 627, 2],
            ["Mường Lát - Thanh Hóa", 56, 628, 2],
            ["Nga Sơn - Thanh Hóa", 56, 629, 2],
            ["Ngọc Lặc - Thanh Hóa", 56, 630, 2],
            ["Như Thanh - Thanh Hóa", 56, 631, 2],
            ["Như Xuân - Thanh Hóa", 56, 632, 2],
            ["Nông Cống - Thanh Hóa", 56, 633, 2],
            ["Quan Hóa - Thanh Hóa", 56, 634, 2],
            ["Quan Sơn - Thanh Hóa", 56, 635, 2],
            ["Quảng Xương - Thanh Hóa", 56, 636, 2],
            ["Sầm Sơn - Thanh Hóa", 56, 637, 2],
            ["Thạch Thành - Thanh Hóa", 56, 638, 2],
            ["Thanh Hóa - Thanh Hóa", 56, 639, 2],
            ["Thiệu Hóa - Thanh Hóa", 56, 640, 2],
            ["Thọ Xuân - Thanh Hóa", 56, 641, 2],
            ["Thường Xuân - Thanh Hóa", 56, 642, 2],
            ["Tĩnh Gia - Thanh Hóa", 56, 643, 2],
            ["Triệu Sơn - Thanh Hóa", 56, 644, 2],
            ["Vĩnh Lộc - Thanh Hóa", 56, 645, 2],
            ["Yên Định - Thanh Hóa", 56, 646, 2],
            ["Huế - Thừa Thiên-Huế", 57, 647, 2],
            ["Hương Thủy - Thừa Thiên-Huế", 57, 648, 2],
            ["Hương Trà - Thừa Thiên-Huế", 57, 649, 2],
            ["Nam Đông - Thừa Thiên-Huế", 57, 650, 2],
            ["A Lưới - Thừa Thiên-Huế", 57, 651, 2],
            ["Phong Điền - Thừa Thiên-Huế", 57, 652, 2],
            ["Phú Lộc - Thừa Thiên-Huế", 57, 653, 2],
            ["Phú Vang - Thừa Thiên-Huế", 57, 654, 2],
            ["Quảng Điền - Thừa Thiên-Huế", 57, 655, 2],
            ["Cai Lậy - Tiền Giang", 58, 656, 2],
            ["Cái Bè - Tiền Giang", 58, 657, 2],
            ["Châu Thành - Tiền Giang", 58, 658, 2],
            ["Chợ Gạo - Tiền Giang", 58, 659, 2],
            ["Gò Công - Tiền Giang", 58, 660, 2],
            ["Gò Công Đông - Tiền Giang", 58, 661, 2],
            ["Gò Công Tây - Tiền Giang", 58, 662, 2],
            ["Mỹ Tho - Tiền Giang", 58, 663, 2],
            ["Tân Phú Đông - Tiền Giang", 58, 664, 2],
            ["Tân Phước - Tiền Giang", 58, 665, 2],
            ["Càng Long - Trà Vinh", 59, 666, 2],
            ["Cầu Kè - Trà Vinh", 59, 667, 2],
            ["Cầu Ngang - Trà Vinh", 59, 668, 2],
            ["Châu Thành - Trà Vinh", 59, 669, 2],
            ["Duyên Hải - Trà Vinh", 59, 670, 2],
            ["Tiểu Cần - Trà Vinh", 59, 671, 2],
            ["Trà Cú - Trà Vinh", 59, 672, 2],
            ["Trà Vinh - Trà Vinh", 59, 673, 2],
            ["Chiêm Hóa - Tuyên Quang", 60, 674, 2],
            ["Hàm Yên - Tuyên Quang", 60, 675, 2],
            ["Lâm Bình - Tuyên Quang", 60, 676, 2],
            ["Na Hang - Tuyên Quang", 60, 677, 2],
            ["Sơn Dương - Tuyên Quang", 60, 678, 2],
            ["Tuyên Quang - Tuyên Quang", 60, 679, 2],
            ["Yên Sơn - Tuyên Quang", 60, 680, 2],
            ["Bình Minh - Vĩnh Long", 61, 681, 2],
            ["Bình Tân - Vĩnh Long", 61, 682, 2],
            ["Long Hồ - Vĩnh Long", 61, 683, 2],
            ["Mang Thít - Vĩnh Long", 61, 684, 2],
            ["Tam Bình - Vĩnh Long", 61, 685, 2],
            ["Trà Ôn - Vĩnh Long", 61, 686, 2],
            ["Vĩnh Long - Vĩnh Long", 61, 687, 2],
            ["Vũng Liêm - Vĩnh Long", 61, 688, 2],
            ["Bình Xuyên - Vĩnh Phúc", 62, 689, 2],
            ["Lập Thạch - Vĩnh Phúc", 62, 690, 2],
            ["Phúc Yên - Vĩnh Phúc", 62, 691, 2],
            ["Sông Lô - Vĩnh Phúc", 62, 692, 2],
            ["Tam Dương - Vĩnh Phúc", 62, 693, 2],
            ["Tam Đảo - Vĩnh Phúc", 62, 694, 2],
            ["Vĩnh Tường - Vĩnh Phúc", 62, 695, 2],
            ["Vĩnh Yên - Vĩnh Phúc", 62, 696, 2],
            ["Yên Lạc - Vĩnh Phúc", 62, 697, 2],
            ["Lục Yên - Yên Bái", 63, 698, 2],
            ["Mù Căng Chải - Yên Bái", 63, 699, 2],
            ["Nghĩa Lộ - Yên Bái", 63, 700, 2],
            ["Trạm Tấu - Yên Bái", 63, 701, 2],
            ["Trấn Yên - Yên Bái", 63, 702, 2],
            ["Văn Chấn - Yên Bái", 63, 703, 2],
            ["Văn Yên - Yên Bái", 63, 704, 2],
            ["Yên Bái - Yên Bái", 63, 705, 2],
            ["Yên Bình - Yên Bái", 63, 706, 2]
        ],
        d = h.slice(0),
        c = u && u.fromlist ? JSON.parse(u.fromlist) : [],
        l = u && u.tolist ? JSON.parse(u.tolist) : [];
    c != null && c.length > 0 && (h = h.filter(function(n) {
        for (var t = 0; t < c.length; t++)
            if (n[2] != 0 && n[2] == c[t][0] && n[3] == c[t][1] || n[2] == 0 && n[1] == c[t][0] && n[3] == c[t][1]) return !0;
        return !1
    }));
    l != null && l.length > 0 && (d = d.filter(function(n) {
        for (var t = 0; t < l.length; t++)
            if (n[2] != 0 && n[2] == l[t][0] && n[3] == l[t][1] || n[2] == 0 && n[1] == l[t][0] && n[3] == l[t][1]) return !0;
        return !1
    })),
        function() {
            ri();
            kt();
            dt();
            gt();
            ni();
            ti();
            ii()
        }()
})(window, document);
//# sourceMappingURL=VxrWidget2.1.min.js.map