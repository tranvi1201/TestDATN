$(function () {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function () {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});


//edit






function changeContentThumbnail() {
    document.getElementById('panel-title').innerText = "Ảnh Bìa sản phẩm";
    document.getElementById('panel-body').innerHTML = "<div><p><span>- Tham khảo hướng dẫn hình ảnh sản phẩm khi đăng bán</span><a  > <strong>tại đây</strong></a></p><p><span>- Tham khảo hướng dẫn cho Shopee Mall</span><strong> </strong><a ><strong>tại đây</strong></a></p></div>";
    document.getElementById('panel-guide').style.display = "block";

}

function changeContentImage() {
    document.getElementById('panel-title').innerText = "Hình ảnh sản phẩm";
    document.getElementById('panel-body').innerHTML = "<p><span>- Tham khảo hướng dẫn hình ảnh sản phẩm khi đăng bán</span><a > <strong>tại đây</strong></a></p><p><span>- Tham khảo hướng dẫn cho Shopee Mall</span><strong> </strong><a ><strong>tại đây</strong></a></p>";
    document.getElementById('panel-guide').style.display = "block";

}

function changeContentNamePro() {
    document.getElementById('panel-title').innerHTML = "Tên sản phẩm";
    document.getElementById('panel-body').innerHTML = "<div ><div ><div><p>- Tham khảo quy định đặt tên <a ><strong>tại đây</strong></a>.</p><p>- Với Shopee Mall, xem thêm quy định <a ><strong>tại đây</strong></a>.</p><p>Sử dụng tiếng Việt có dấu, không viết tắt, tối thiểu 10 ký tự, 20 ký tự đối với Shopee Mall. Độ dài tối đa của tên sản phẩm cho tất cả các Shop là 120 ký tự (bao gồm cả khoảng trắng).</p></div></div></div>";
        document.getElementById('panel-guide').style.display = "block";

}
<div ><p><strong>Lưu ý:</strong> Đối với một số mặt hàng nhất định, Người bán cần cung cấp các thông tin sau tại mục "Mô tả sản phẩm" theo quy định của Nghị định 85/2021/NĐ-CP (Xem Hướng dẫn chi tiết <a  target="_blank"><strong>tại đây</strong></a>)</p><p>- Số chứng nhận phê duyệt kiểu</p><p>- Khuyến cáo</p><p>- Hướng dẫn sử dụng</p><p>- Thông số kỹ thuật</p><p>- Thông tin cảnh báo</p></div>



function changeContentNamePro() {
    document.getElementById('panel-title').innerHTML = "";
    document.getElementById('panel-body').innerHTML = "";
        document.getElementById('panel-guide').style.display = "block";

}