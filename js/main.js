$(document).ready(function () {
		$(".tell").mask("+38 (099) 999-99-99");
		$('.huk').click(function() {
			$(this).hide(); 
		});
        $(".btn_slide, .btn_present").click(function () {
            $.fancybox({
				href : "#zakaz",
				'padding' : '0'
			});
        });
		$("#text1").click(function () {
            $.fancybox({
				href : "#delivery_text",
				'padding' : '0'
			});
        });
		$("#read_m1").click(function () {
            $.fancybox({
				href : "#read_more1",
				'padding' : '0'
			});
        });
		$("#read_m2").click(function () {
            $.fancybox({
				href : "#read_more2",
				'padding' : '0'
			});
        });
		$("#read_m3").click(function () {
            $.fancybox({
				href : "#read_more3",
				'padding' : '0'
			});
        });
		$("#text2").click(function () {
            $.fancybox({
				href : "#garant_text",
				'padding' : '0'
			});
        });
		$("#text3").click(function () {
            $.fancybox({
				href : "#about_company",
				'padding' : '0'
			});
        });
		$(".open_vid").click(function () {
            $.fancybox({
				href : "#gallery_video",
				'padding' : '0'
			});
        });
        $('.bxslider1').bxSlider({
            pagerCustom: '.pager',
            mode: 'fade',
            auto: true,
            pause: 6000,
            responsive: true
        });
        $('.bxslider2').bxSlider({
            pagerCustom: '#bx-pager',
            auto: true,
            pause: 6000,
            responsive: true
        });
		$(".form").submit(function () {
			if ($(this).find('input[name="phone"]').val() == "") {
				alert("Заполните телефон");
				return false;
			} else {
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $(this).serialize()
				}).done(function () {
					$(this).find("input").val("");
					alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
					$(".form").trigger("reset");
				});
			}

        return false;
		});

			
    $('.block_item_del .item__1_del').hover(
    function(){
        $('.item__1_del').css('background-color','#fbe000');
        $('.item__2_del').css('background-color','#fff');
        $('.item__3_del').css('background-color','#fff');
    }
    );
    $('.block_item_del .item__2_del').hover(
        function(){
            $('.item__1_del').css('background-color','#fff');
            $('.item__2_del').css('background-color','#fbe000');
            $('.item__3_del').css('background-color','#fff');
            
        }
    );
    $('.block_item_del .item__3_del').hover(
        function(){
            $('.item__1_del').css('background-color','#fff');
            $('.item__2_del').css('background-color','#fff');
            $('.item__3_del').css('background-color','#fbe000');
        }
    );
	$('#tab1').on("click", function(){
        $('#content-tab1, #title-tab1').css('display','block');
        $('#content-tab2, #title-tab2').css('display','none');
        $('#content-tab3, #title-tab3').css('display','none');
		$('#content-tab4, #title-tab4').css('display','none');
		}
	);
	$('#tab2').on("click", function(){			
			$('#content-tab2, #title-tab2').css('display','block');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab3, #title-tab3').css('display','none');
			$('#content-tab4, #title-tab4').css('display','none');
		}
	);
	$('#tab3').on("click", function(){
			$('#content-tab4, #title-tab4').css('display','none');
			$('#content-tab3, #title-tab3').css('display','block');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab2, #title-tab2').css('display','none');
		}
	);
	$('#tab4').on("click", function(){
			$('#content-tab4, #title-tab4').css('display','block');
			$('#content-tab3, #title-tab3').css('display','none');
			$('#content-tab1, #title-tab1').css('display','none');
			$('#content-tab2, #title-tab2').css('display','none');
		}
	);
});