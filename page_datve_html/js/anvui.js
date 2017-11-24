function setPoint(e) {
    $.ajax({
        type: "POST", url: "http://anvui.vn/pointNX", data: {routeId: e}, success: function (e) {
            $("#startPoint").html(""), $("#endPoint").html(""), $.each(e.a1, function (e, t) {
                var n = '<option value="' + t.pointId + '">' + t.pointName + "</option>";
                $("#startPoint").append(n)
            }), $("#startPoint").selectpicker("refresh"), $.each(e.a2, function (e, t) {
                var n = '<option value="' + t.pointId + '">' + t.pointName + "</option>";
                $("#endPoint").append(n)
            }), $("#endPoint").selectpicker("refresh")
        }
    })
}

function chon_chuyen(e) {
    var t = "#chon_chuyen_" + e;
    if (ghedachon = [], tripId = $(t).attr("data-id"), scheduleId = $(t).attr("data-scheduleId"), getOffPointId = $(t).attr("data-getOffPointId"), getInPointId = $(t).attr("data-getInPointId"), getInTime = $(t).attr("data-getInTime"), ticketPrice = $(t).attr("data-ticketPrice"), companyStatus = $(t).attr("data-companyStatus"), startDate = $(t).attr("data-startDate"), 1 == companyStatus) return $("#goidien").show(), !1;
    $(".chuyendi").removeClass("selected"), $(this).addClass("selected"), $(".box-chonghe").html("<center>Loading...</center>"), $("#chonghe").show(), $("#thongtin").show();
    console.log(tripId), console.log(scheduleId), $.getJSON("http://demo.nhaxe.vn/dat-ve?tripId=" + tripId + "&scheduleId=" + scheduleId, function (e) {
        $("#loading").show();console.log(e.seatMap.numberOfFloors);
        for (var t = "", n = 1; n < e.seatMap.numberOfFloors + 1; n++) {
            t += '<div class="col-md-6 tachtang"><div class="col-md-12 col-sm-12 col-xs-12 tang2">Tầng ' + n + "</div>";
            for (var a = 1; a < e.seatMap.numberOfRows + 1; a++) for (var i = 1; i < e.seatMap.numberOfColumns + 1; i++) coghe = !1, iddd = "", $.each(e.seatMap.seatList, function (d, o) {
                var h = o.seatId, c = h.replace(",", "_");
                iddd = n + " " + a + " " + i, o.floor != n || o.row != a || o.column != i || (coghe = !0, t += 2 == o.seatType ? '<div data-id="' + iddd + '" class="col-md-2 ghe_' + e.seatMap.numberOfColumns + '"><div class="chonghe chonghekodcchon" >Tài</div></div>' : 1 == o.seatType ? '<div data-id="' + iddd + '" class="col-md-2 ghe_' + e.seatMap.numberOfColumns + '"><div class="chonghe chonghekodcchon" >Cửa</div></div>' : 5 == o.seatType ? '<div data-id="' + iddd + '" class="col-md-2 ghe_' + e.seatMap.numberOfColumns + '"><div class="chonghe chonghekodcchon" >WC</div></div>' : 6 == o.seatType ? '<div data-id="' + iddd + '" class="col-md-2 ghe_' + e.seatMap.numberOfColumns + '"><div class="chonghe chonghekodcchon" >Phụ</div></div>' : 1 == o.seatStatus ? '<div data=id="' + iddd + '" class="col-md-1 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '"><div class="chonghe" id="chonghe_' + c + '" onclick="chonghe(\'' + h + "')\">" + h + "</div></div>" : '<div data=id="' + iddd + '"  class="col-md-2 ghe_' + e.seatMap.numberOfColumns + " gheloai_" + o.seatType + '"><div class="chonghe chonghekodcchon" >' + h + "</div></div>")
            }), coghe || (t += '<div data=id="' + iddd + '"  class="col-md-2 ghe_' + e.seatMap.numberOfColumns + ' kocoghe"> </div>');
            t += "</div>"
        }
        $(".box-chonghe").html(t), $("#loading").hide()
    })
}

function chonghe(e) {
    var t = e.replace(",", "_"), n = ghedachon.indexOf(e);
    if (n > -1) $("#chonghe_" + t).removeClass("chonghechon"), ghedachon.splice(n, 1); else {
        if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
        $("#chonghe_" + t).addClass("chonghechon"), ghedachon.push(e)
    }
    xacnhan()
}

function checknumbaby(e) {
    return e > ghedachon.length ? ($("#numberBayby").val(ghedachon.length), alert("Số trẻ em phải nhỏ hơn số ghế!"), !0) : !0
}

function xacnhan() {
    if (console.log(ghedachon), 0 == ghedachon.length) return alert("Hãy chọn ghế!"), !1;
    if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
    var e = "";
    $.each(ghedachon, function (t, n) {
        e += n + ","
    }), $("#ghedachonspan").html(e), $(".xacnhanbtn").hide(), $("#thongtin").show();
    var t = $("#numberBayby").val(), n = ghedachon.length - t;
    0 > n && (n = 0, $("#numberBayby").val(ghedachon.length)), $("#numberMan").val(n);
    var a = ghedachon.length * ticketPrice;
    console.log(a), $("#priceneedpay").text(a.format())
}

function hoanthanh() {
    if (0 == ghedachon.length) return alert("Hãy chọn ghế!"), !1;
    if (ghedachon.length > 10) return alert("Chỉ được chọn dưới 10 ghế!"), !1;
    var e = $("input[name=paymenttype]:checked").val(), t = $("#fullName").val(), n = $("#phoneNumber").val();
    if ("" == t) return alert("Hãy nhập tên!"), $("#fullName").focus(), !1;
    if ("" == n) return alert("Hãy nhập số điện thoại!"), $("#phoneNumber").focus(), !1;

    var lenght_requied = 0;

    switch (n.substring(0, 2)) {
        case "01" :
            lenght_requied = 11;
            break;
        case "09" :
        case "08" :
            lenght_requied = 10;
            break;
        default :
            return alert("Không đúng định dạng điện thoại!"), $("#phoneNumber").focus(), !1;

    }

    if(n.indexOf(".") || n.indexOf(",")) return alert("Không đúng định dạng điện thoại!"), $("#phoneNumber").focus(), !1;

    if(n.length < lenght_requied || n.length > lenght_requied) return alert("Số điện thoại phải " + lenght_requied + " số"), $("#phoneNumber").focus(), !1;


    if ("" == tripId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getInPointId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getOffPointId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == scheduleId) return alert("Thiếu dữ liệu!"), !1;
    if ("" == getInTime) return alert("Thiếu dữ liệu!"), !1;
    if (0 == ticketPrice) return alert("Thiếu dữ liệu!"), !1;
    var a = $("#numberBayby").val(), i = ghedachon.length, d = ticketPrice * i;
    $("#hoanthanhbtn").hide(), $("#loadingbtn").show(), $.ajax({
        type: "POST",
        url: "http://demo.nhaxe.vn/dat-ve?sub=order",
        data: {
            listSeatId: JSON.stringify(ghedachon),
            fullName: t,
            phoneNumber: n,
            getInPointId: getInPointId,
            startDate: startDate,
            getOffPointId: getOffPointId,
            scheduleId: scheduleId,
            getInTimePlan: getInTime,
            originalTicketPrice: d,
            paymentTicketPrice: d,
            paymentType: e,
            paidMoney: 0,
            tripId: tripId,
            numberOfAdults: i,
            numberOfChildren: a
        },
        success: function (t) {
            if ($("#loading").show(), console.log(t), 200 != t.code) alert("Đã có lỗi xảy ra, hãy đặt lại!"), $("#hoanthanhbtn").show(), $("#loadingbtn").hide(); else if (1 == e) {
                var a = "https://dobody-anvui.appspot.com/payment/dopay?vpc_OrderInfo=" + t.results.ticketId + "&vpc_Amount=" + 100 * d + "&phoneNumber=" + n;
                window.location.href = a
            } else $("#datthanhcong").show(), $("#hoanthanhbtn").hide(), $("#loadingbtn").hide(), $("#gohomebtn").show();
            $("#loading").hide()
        }
    })
}

Number.prototype.format = function (e, t) {
    var n = "\\d(?=(\\d{" + (t || 3) + "})+" + (e > 0 ? "\\." : "$") + ")";
    return this.toFixed(Math.max(0, ~~e)).replace(new RegExp(n, "g"), "$&,")
};
var idAV = $("base").attr("id"), ghedachon = [], tripId = "", getInPointId = "", getOffPointId = "", scheduleId = "",
    getInTime = "", ticketPrice = 0, can_chon_ghe = !0, dateToday = new Date, startPoint = "", endPoint = "", date = "";
$(function () {
    $("#datetimepicker").datetimepicker({format: "DD-MM-YYYY", minDate: dateToday})
}), $.ajax({
    type: "POST", url: "http://anvui.vn/chuyenAV", data: {idAV: idAV}, success: function (e) {
        $("#loading").show(), $.each(e.chuyen, function (e, t) {
            // var n = '<option value="' + t.routeId + '">' + t.routeName + "</option>";
            var n = '<button type="button" class="d-inline cus-btn" value="' + t.routeId + '">' + t.routeName + '</button>';
            $("#chuyenav").append(n)
        }), $(".selectpicker").selectpicker("refresh");
        var t = e.chuyen[0].routeId;
        $("#chuyenavInput").val(t);
        $(".cus-btn").click(function () {
            var t = $(this).val();
            setPoint(t);
        });

        setPoint(t), $("#loading").hide()
    }
}), $(document).ready(function () {
    $("#bus-line").hide();
    var chuyenav = getParameterByName('chuyenav');
    var startPoint = getParameterByName('startPoint');
    var endPoint = getParameterByName('endPoint');
    var date = getParameterByName('date');

    if(chuyenav !== '' && chuyenav !== null  && startPoint !== '' && startPoint !== null && endPoint !== '' && endPoint !== null && date !== '' && date !== null)
    {
        setPoint(chuyenav);
        setTimeout(function(){
            $("#startPoint").val(startPoint);
            $("#startPoint").change();
            $("#endPoint").val(endPoint);
            $("#endPoint").change();
            getChuyenDi(startPoint, endPoint, date, chuyenav);
        }, 1000);
    }

    $("#TimChuyen").click(function () {
        var e = $("#startPoint").val(), t = $("#endPoint").val(), n = $("#datetimepicker").val(),
            a = $("#chuyenav").val();
        ("" == t || "" == e) && alert("Hãy chọn điểm đi và điểm đến"), getChuyenDi(e, t, n, a)
    }), $("#chuyenav").on("changed.bs.select", function (e, t, n, a) {
        setPoint($("#chuyenav").val())
    }), $("#chuyendoi").click(function () {
        var temp = $("#startPoint").val();
        $("#startPoint").val($("#endPoint").val());
        $("#startPoint").change();
        $("#endPoint").val(temp);
        $("#endPoint").change();
        return false;
    });
    var e = new Date, t = e.getDate(), n = e.getMonth() + 1, a = e.getFullYear();
    10 > t && (t = "0" + t), 10 > n && (n = "0" + n);
    var e = t + "-" + n + "-" + a;
    $("#datetimepicker").val(e)
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getChuyenDi(e, t, n, a) {
    $.ajax({
        type: "POST",
        url: "http://anvui.vn/listSchedule",
        data: {startPoint: e, endPoint: t, timeStart: n, routeId: a},
        success: function (e) {
            $("#loading").show(), $(".listchuyen").html(""), console.log(e);
            // $("#form").hide();
            var t = !0;
            $.each(e, function (e, n) {
                var a = '<li id="chon_chuyen_' + e + '" onclick="javascript: chon_chuyen(' + e + ');" class="bus-item" data-id="' + n.tripId + '" data-scheduleId="' + n.scheduleId + '" data-getInPointId="' + n.getInPointId + '" data-getOffPointId="' + n.getOffPointId + '" data-getInTime="' + n.getInTime + '" data-ticketPrice="' + n.ticketPrice + '" data-companyStatus="' + n.companyStatus + '" data-startDate="' + n.startDate + '" >' +
                    '<div class="bus-item-fixer">' +
                    '<div class="bus-view-container">' +
                    '<div class="clearfix main-body bus-tupple" data-routeid="' + n.tripId + '">' +
                    '<div class="clearfix op-cmpg-wrapper to-be-hidden"></div>' +
                    '<div class="fl w-10 icon-div"><img src="http://anvui.vn/themes/icon/iConAnVuiVang.png" width="60px" height="50px"></div>' +
                    '<div class="fl w-25">' +
                    '<div class="service-name"> ' + n.companyName + ' </div>' +
                    '<div class="service-type">' + n.routeName + '</div>' +
                    '<div class="service-bp-dp"><span class="service-src"> Xuất phát từ ' + n.getInPointName + '</span><i class="icon"> - </i><span class="service-dest"> đến ' + n.getOffPointAddress + '</span></div>' +
                    '</div>' +
                    '<div class="w-25 fl"><div class="clearfix"><div class="fl depart">Giờ xuất phát: ' + n.startTime + '</div></div>' +
                    '</div>' +
                    '<div class="fl w-15"><div class="clearfix"><div class="window-seats fare">' + n.ticketPrice1 + 'VNĐ</div></div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div></li>';
                $(".listchuyen").html(a), $("#bus-line").show(), $("#chonghe").hide(), $("#thongtin").hide(), t = !1
            }), $("#beginmes").hide(), t && ($("#chonghe").hide(), $("#thongtin").hide(), $("#emptymes").show()), $("#loading").hide()
        }
    })
}