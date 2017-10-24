
// $(document).ready(function () {

	// for offer section 
	$("#offerSlider .owl-carousel").owlCarousel({
		navigation: true,
		items: 6,
		sideSpeed: 300,
		singleItems: true,
		paginationSpeed: 400,
		nav: true,
		dots: false,
		loop:true,
		margin: 25,
		stagePadding: 10,
		autoWidth: true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			390: {
				items: 3,  
				nav: true
			},
			1078: {
				items: 3,
				nav: true
			},
			1180: {
				items: 6,
				nav: true
			}
		}

	});
	// for client section
	$("#client .owl-carousel").owlCarousel({
		navigation: true,
		items: 4,
		sideSpeed: 300,
		singleItems: true,
		paginationSpeed: 400,
		nav: false,
		dots: false,
		loop:true,
		margin: 10,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1180: {
				items: 3
			},
			1250: {
				items: 4
			}
		}
	});
	// $(function () {
	// 	$('#datetimepicker1').datetimepicker();
	// });
// });


// search  input  (navbar section)
$(".js_search").click(function () {
	if ($(this).hasClass("fa-times")) {
		$(this).removeClass("fa-times")
	}
	else {
		$(this).addClass("fa-times")
	}
	$(".js_input").fadeToggle("slow");
});
// scrolltop button
$(".js_button").click(function () {
	$('html,body').animate({ scrollTop: 0 }, 'slow');
	return false;
});
