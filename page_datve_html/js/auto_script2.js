$(document).ready(function () {
    $("#av").append("<div class='container' id='contain'>");
        $("#contain").append("<div class='box-search-wiget col-lg-4' id='form'>");
        $("#form").append("<form id='fly-search' action='file:///C:/xampp/htdocs/page_datve_html-1/page_datve_html/index.html' method='get'>");
            $("#fly-search").append("<div class='fly-search-item col-sm-12'><img src='imgs/LogoANVUI.png' class='img-responsive cus-img2' alt='An Vui' height='100px' width='150px'/><hr></div>");

            $("#fly-search").append("<div class='row fly-search widget-form' id='form-search'>");
                $("#form-search").append("<input type='hidden' name='chuyenav' id='chuyenavInput'>");

                $("#form-search").append("<div class='fly-search-item col-sm-12' id='start-point'>");
                    $("#start-point").append("<h2 class='cus-h2'>Điểm xuất phát</h2>");
                    $("#start-point").append("<select class='selectpicker' value='startPoint' id='startPoint' data-live-search='true'>");
                    $("#start-point").append("<input type='hidden' name='startPoint' id='startPointInput'>");

                $("#form-search").append("<div class='fly-search-item col-sm-12' style='margin-top: 17px;'><a id='chuyendoi' class='chuyendoi2' href='#'><span class='glyphicon glyphicon-resize-vertical'></span></a></div>");

                $("#form-search").append("<div class='fly-search-item col-sm-12' id='end-point'>");
                    $("#end-point").append("<h2 class='cus-h2'>Điểm đến</h2>");
                    $("#end-point").append("<select class='selectpicker' value='endPoint' id='endPoint' data-live-search='true'>");
                    $("#end-point").append("<input type='hidden' name='endPoint' id='endPointInput'>");

                $("#form-search").append("<div class='fly-search-item col-sm-12' id='date-time'>");
                    $("#date-time").append("<h2 class='cus-h2'>Thời gian</h2>");
                    $("#date-time").append("<input type='text' name='date' value='' class='form-control cus-form' id='datetimepicker' />");

                $("#form-search").append("<div class='fly-search-item' id='btn-search'>");
                    $("#btn-search").append("<button type='submit' id='TimChuyen' class='BNC-search-product btn btn-danger' style='margin-top: 72px;'>Tìm kiếm</button>");

    $("#TimChuyen").click(function () {
        $("#startPointInput").val($("#startPoint").val());
        $("#endPointInput").val($("#endPoint").val());
    });
});