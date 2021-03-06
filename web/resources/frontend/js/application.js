$(function adminScript(){
	$('.tooltips').tooltip({
		animation : false 
	});	
	$('nav a').each(function(){
		var title = $(this).text();
		$(this).attr('title',title);
	});

	$('[type=reset]').attr('tabindex','-1');


});
$(function layout(){
	$('.layout').each(function(){	

		var north 	= $(this).children('.layout-north').outerHeight() || 0,
			south	= $(this).children('.layout-south').outerHeight() || 0,
			east	= $(this).children('.layout-east').outerWidth() || 0,
			west	= $(this).children('.layout-west').outerWidth() || 0;

		$(this).children('.layout-center').css({'top':north, 'right':east, 'bottom':south, 'left':west});
		$(this).children('.layout-west').css({'top':north, 'bottom':south});
		$(this).children('.layout-east').css({'top':north, 'bottom':south});

	});


	/*if (parseInt($(window).width()) > 768){
		relayout();
		$(window).resize(function(){
			relayout();
		});
    }
    function relayout(){		
		$('body').layout({spacing_open : 0});
		$('#admin_sidebar').layout({spacing_open : 0});
		$('#admin_body').layout({spacing_open : 0});
		$('#contentpane').layout({spacing_open : 0});
	}*/
});
$(function checkAll(){
  $('.checkall').click(function () {
		$(this).parents('table').find(':checkbox').attr('checked', this.checked);
	});
});

/* Sidebar Toggler */
$(function(){
	$('.sidebar-toggler').click(function(){
		if($('body').hasClass('fullpage')){
			$('body').removeClass('fullpage');
			$(this).children('.fa').removeClass('fa-arrow-down').addClass('fa-bars');
		} else {
			$('body').addClass('fullpage');
			$(this).children('.fa').removeClass('fa-bars').addClass('fa-arrow-down');
		}
	});
});
$(function(){
	$('.nav-sidebar li ul').parent().children('a').click(function(){
		if($(this).next('ul').is(':hidden')){   
			$(this).parent().siblings('li').removeClass('focus').children('ul').hide(200);
			$(this).parent().addClass('focus').children('ul').show(200);
		} else {
			$(this).parent().removeClass('focus').children('ul').hide(200);
		}
	});
});
$(function pathway(){
	if($('.breadcrumb li').length > 1){
		var primary 	= $('.breadcrumb li').eq(1).text().replace(/ /g,''),
			secondary	= $('.breadcrumb li').eq(2).text().replace(/ /g,''),
			third		= $('.breadcrumb li').eq(3).text().replace(/ /g,'');

		$('.nav-sidebar > li > a').filter(function() {
	        var text = $(this).text().replace(/ /g,''); 
	        return text == primary;
	    }).parent().addClass('active');

	    $('.nav-sidebar > li > ul > li > a').filter(function() {
	        var text = $(this).text().replace(/ /g,''); 
	        var parentText = $(this).parents('li.active').children('a').text().replace(/ /g,''); 

	        return (text == secondary) && (parentText == primary);
	    }).parent().addClass('active').parents('li').addClass('focus').children('ul').show();

	    $('.nav-sidebar > li > ul > li > ul > li > a').filter(function() {
	        var text = $(this).text().replace(/ /g,''); 
	        return (text == third);
	    }).parent().addClass('active').parents('li').addClass('active').children('ul').show();

	} else {
		$('.nav-sidebar > li > a').parent().eq(0).addClass('active');
	}
});

$(function sweetAlert(){
	$('.confirm').click(function(){
		var title 		= $(this).data('title') || 'Alert',
			message		= $(this).data('message') || 'Are You Sure?',
			type  		= $(this).data('type') || 'warning',
			cancel  	= $(this).data('cancel') || true,
			cancelText 	= $(this).data('cancelText') || 'Cancel',
			confirmText = $(this).data('confirmText') || 'OK',
			autoClose 	= $(this).data('autoClose') || true,
			href		= $(this).attr('href');

		swal({   
            title: title,   
            text: message,   
            type: type,   
            showCancelButton: cancel,   
            cancelButtonText:cancelText,
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: confirmText,   
            closeOnConfirm: autoClose
        }, function(){   
            location.href=href;
        });
        return false;
	});
});

function noticeSuccess(message){
	var message = message || 'Proses Berhasil';

    sweetAlert({
    	title 	: 'Success',
    	text 	: message,
    	type	: 'success',
    	timer	: 2000,
    	showCancelButton : false,
    	showConfirmButton : false
    });
}
function noticeFailed(message){
	var message = message || 'Proses Gagal';

    sweetAlert({
    	title 	: 'Error',
    	text 	: message,
    	type	: 'error',
    	timer	: 2000,
    	showCancelButton : false,
    	showConfirmButton : false
    });
}


$(function labelClick(){
    $('input').next('label').click(function(){
        $(this).prev().trigger('click');
        return false;
    });
});


