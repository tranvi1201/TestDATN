$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
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
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});


//edit


$(document).ready(function() {
    var sidebarMainMenu = $('#sidebar-menu .main-menu');
	var staticContent = $('#static-content');
	staticContent.find('div').each(function() {
		sidebarMainMenu.append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
		title = sidebarMainMenu.find('#' + $(this).attr('id'));
	});
	staticContent.find('div').each(function() {
		prevTitle = sidebarMainMenu.find('#' + $(this).prevAll('h1').first().attr('id') + '-menu');
		prevTitle.not(":has(ul)").append('<ul class="sub-menu"></ul>');
		prevTitle.find('.sub-menu').append('<li id="'+ $(this).attr('id') + '-menu"><a href="#' + $(this).attr('id') + '">' + $(this).html() + '</li>');
	});
	
	sidebarMainMenu.affix({
	      offset: {
	        top: 0  
	      }
	});
});



function changeContentImage() {
    document.getElementById('panel-title').innerText  = "Hình ảnh sản phẩm";
    document.getElementById('panel-body').innerHTML  = "<div><p><span>- Tham khảo hướng dẫn hình ảnh sản phẩm khi đăng bán</span><a href="" > <strong>tại đây</strong></a></p><p><span>- Tham khảo hướng dẫn cho Shopee Mall</span><strong> </strong><a href="" ><strong>tại đây</strong></a></p></div>";
    document.getElementById('panel-guide').style.display = "block";
    
}
function changeContentNamePro() {
    document.getElementById('panel-title').innerHTML  = "Tên sản phẩm";
    document.getElementById('panel-body').innerHTML = "<div data-v-a7f2dbae="" class="education-card"><div data-v-a7f2dbae="" class="education-card-top"><i data-v-a7f2dbae="" class="education-card-bg shopee-icon"><svg viewBox="0 0 34 53" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1604_57992)" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.703 5.997c-6.371-3.935-14.518-1.6-18.197 5.216-3.623 6.714-1.122 14.722 5.297 18.686 1.3.803 2.366 2.152 3.255 3.865.893 1.72 1.656 3.903 2.309 6.509l.272 1.086 11.513-3.3-.273-1.086c-.652-2.606-1.011-4.904-1.042-6.872-.031-1.959.262-3.697 1.012-5.088 3.837-7.11 2.144-15.13-4.146-19.016zM3.078 9.713C7.53 1.463 17.392-1.364 25.105 3.4c7.793 4.814 9.688 14.748 5.173 23.114-.406.752-.663 1.889-.637 3.538.025 1.639.33 3.68.947 6.145l.998 3.985-16.93 4.853-.998-3.985c-.617-2.465-1.308-4.396-2.052-5.829-.748-1.442-1.502-2.288-2.205-2.723-7.562-4.67-10.83-14.431-6.323-22.784zm15.287 39.984l12.19-3.494.725 2.898-12.19 3.494-.725-2.898z"></path><path d="M28.599 34.05l-14.221 4.076-.726-2.898 14.221-4.076.726 2.898z"></path></g><defs><clipPath><path d="M0 0h34v53H0z"></path></clipPath></defs></svg></i> <p data-v-a7f2dbae="" class="education-card-title">
    Tên sản phẩm
  </p></div> <div data-v-a7f2dbae="" class="education-card-scroll"><div data-v-a7f2dbae="" class="education-card-scroll-content"><div data-v-a7f2dbae="" class="src-components-education---education-card-content--25sL8"><p>- Tham khảo quy định đặt tên <strong>   </strong><a href="https://banhang.shopee.vn/edu/article/2100" target="_blank"><strong>tại đây</strong></a>.</p><p>- Với Shopee Mall, xem thêm quy định <a href="https://banhang.shopee.vn/edu/article/3531" target="_blank"><strong>tại đây</strong></a>.</p><p>Sử dụng tiếng Việt có dấu, không viết tắt, tối thiểu 10 ký tự, 20 ký tự đối với Shopee Mall. Độ dài tối đa của tên sản phẩm cho tất cả các Shop là 120 ký tự (bao gồm cả khoảng trắng).</p></div></div></div></div>";
    document.getElementById('panel-guide').style.display = "block";
    
}


