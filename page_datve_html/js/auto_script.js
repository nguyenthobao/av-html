$(document).ready(function () {

    $("#av").append("<div class='container' id='contain'>");
        $("#contain").append("<center> <h2 id='beginmes'>Hãy chọn Chuyến, Điểm đi, Điểm đến và thời gian!</h2></center>");
        $("#contain").append("<center> <h2 id='emptymes' style='display:none'>Không có tuyến nào, hãy chọn lại!</h2></center>");
        $("#contain").append("<div class='box-search-body' id='form'>");
        $("#form").append("<form id='fly-search' action='' method='get'>");

        $("#fly-search").append("<div class='row fly-search-inner cus-search' id='form-search'>");
            $("#form-search").append("<div class='fly-search-item' id='av-logo'>");
                $("#av-logo").append("<img src='imgs/LogoANVUI.png' class='img-responsive cus-img' alt='An Vui' height='50px' width='80px'/>");
            $("#form-search").append("<div class='fly-search-item col-md-3 col-sm-6 col-xs-12' id='start-point'>");
                $("#start-point").append("<h2 class='cus-h2'>Điểm xuất phát</h2>");
                $("#start-point").append("<select class='selectpicker' value='startPoint' id='startPoint' data-live-search='true'>");
            $("#form-search").append("<div class='fly-search-item col-md-3 col-sm-6 col-xs-12' id='end-point'>");
                $("#end-point").append("<h2 class='cus-h2'>Điểm đến</h2>");
                $("#end-point").append("<a id='chuyendoi' class='chuyendoi' href='#'><span class='glyphicon glyphicon-resize-horizontal'></span></a>");
                $("#end-point").append("<select class='selectpicker' value='endPoint' id='endPoint' data-live-search='true'>");
            $("#form-search").append("<div class='fly-search-item col-md-3 col-sm-6 col-xs-12' id='date-time'>");
                $("#date-time").append("<h2 class='cus-h2'>Thời gian</h2>");
                $("#date-time").append("<input type='text' name='date' value='' class='form-control pick-date' id='datetimepicker' />");
            $("#form-search").append("<div class='fly-search-item' id='btn-search'>");
                $("#btn-search").append("<button type='button' id='TimChuyen' class='BNC-search-product btn btn-danger' style='margin-top: 72px;'>Tìm kiếm</button>");

    $("#av").append("<div class='container-fluid' id='bus-line-info'>");
        $("#bus-line-info").append("<h2 class='text-center' id='bus-line'>CÁC TUYẾN XE HIỆN CÓ</h2>");
        $("#bus-line-info").append("<ul class='listchuyen row'>");
        $("#bus-line-info").append("<div class='row' id='row-chon-ghe'>");
            $("#row-chon-ghe").append("<div class='f-center-body col-md-6 col-md-offset-3' id='chonghe' style='display:none'>");
                $("#chonghe").append("<div class='f-center-title'> <i></i><span>Chọn ghế</span></div>");
                $("#chonghe").append("<div class='chuthich row' id='chuthich'>");
                    $("#chuthich").append("<i style='color:red; display:none' class='treemmes'>* Trẻ em vẫn được tính chỗ và giá vé bằng <span id='childrenTicketRatio'></span> vé người lớn. </i>");
                    $("#chuthich").append("<br />");
                    $("#chuthich").append("<span class='chuthich_dachon'>Ghế đã đặt</span>");
                    $("#chuthich").append("<span class='chuthich_chuachon'>Ghế chưa chọn</span>");
                    $("#chuthich").append("<span class='chuthich_banchon'>Ghế bạn vừa chọn</span>");
                $("#chonghe").append("<div class='box-chonghe row'><center>Loading...</center></div>");

            $("#row-chon-ghe").append("<div class='f-center-body col-md-6 col-md-offset-3' id='thongtin' style='display:none'>");
                $("#thongtin").append("<div class='panel panel-default packagesFilter' style='width: 100%; float:left' id='info'>");
                    $("#info").append("<div class='panel-heading'><h3 class='panel-title'>Thông tin khách hàng</h3></div>");
                    $("#info").append("<div class='panel-body transaction' style='padding: 10px;' id='datghe'>");
                        $("#datghe").append("<div class='box-thongtin row' id='thongtin-datghe'>");
                            $("#thongtin-datghe").append("<div class='form-group'><label for='inputEmail3' class='col-sm-3 control-label'>Ghế đã chọn:</label><div class='col-sm-9' id='ghedachonspan'></div></div>");
                            $("#thongtin-datghe").append("<div class='form-group'><label for='inputEmail3' class='col-sm-3 control-label'>Tên của bạn</label><div class='col-sm-9'><input type='text' id='fullName' class='form-control' placeholder='Tên của bạn'></div></div>");
                            $("#thongtin-datghe").append("<div class='form-group'><label for='inputEmail3' class='col-sm-3 control-label'>Số điện thoại</label><div class='col-sm-9'><input type='number' id='phoneNumber' class='form-control no-spinners' placeholder='Số điện thoại'></div></div>");
                            $("#thongtin-datghe").append("<div class='form-group'>" +
                                "<label for='inputEmail3' class='col-sm-3 control-label'>Số người lớn</label>" +
                                "<div class='col-sm-2'><input type='text' style='width: 93px;' id='numberMan' class='form-control' value='' disabled>" +
                                "</div><label for='inputEmail3' class='col-sm-1 control-label'></label>" +
                                "<label for='inputEmail3' class='col-sm-3 control-label'>Số trẻ em</label>" +
                                "<div class='col-sm-2'><input type='number' style='width: 93px;' id='numberBayby' onchange='checknumbaby(this.value)' class='form-control' value='0' min='0'></div>" +
                                "</div>");
                $("#thongtin").append("<div class='panel panel-default packagesFilter' style='width: 100%; float:left' id='hinhthuc'>");
                    $("#hinhthuc").append("<div class='panel-heading'><h3 class='panel-title'>Hình thức giao dịch</h3></div>");
                    $("#hinhthuc").append("<div class='panel-body transaction' style='padding: 10px;' id='loaigd'>");
                        $("#loaigd").append("<div class='radio'>Số tiền cần thanh toán: <span id='priceneedpay'></span> VNĐ<br /><i style='color:red; display:none' class='treemmes'>* Trẻ em vẫn được tính chỗ và giá vé bằng <span id='childrenTicketRatio'></span>% vé người lớn. </i></div>");
                        $("#loaigd").append("<div class='radio'><label><input type='radio' name='paymenttype' value='1'> Thanh toán đảm bảo trực tuyến - Thẻ nội địa</label></div>");
                        $("#loaigd").append("<div class='row'><div class='col-sm-12 col-xs-12'><img class='img-responsive' src='http://demo.nhaxe.vn/themes/1/statics/imgs/ATMnoidia_logongang.png' style='width:100%'></div></div>");
                        $("#loaigd").append("<div class='radio'><label><input type='radio' name='paymenttype' value='5' checked> Thanh toán tại quầy</label></div>");
                $("#thongtin").append("<div class='clearfix'></div>");
                $("#thongtin").append("<center><button type='button' id='hoanthanhbtn' onclick='hoanthanh()' class='btn btn-danger'>Xác nhận đặt vé</button></center>");
                $("#thongtin").append("<span id='loadingbtn' style='display: none;    text-align: center; font-size: 20px; width: 100%; float: left'>Đang đặt vé ...</span>");
});