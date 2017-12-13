$(document).ready(function() {
	var param = {
		city: "杭州"
	};

    getHotelList(param);
});

function getHotelList(param) {
	$.ajax({
		// url: 'http://127.0.0.1:8082/hotelList',
        url: 'https://api.ueocean.com/hotelList',
        type: 'GET',
        data: param,
        dataType: 'json',
        success: function(data) {
            console.log(data);
			showHotelList(data);
        },
        error: function() {
            console.log('错误');
        }
    });
}

function showHotelList(data) {
	$('.hotel-list')[0].innerHTML = "";

	for (var i = 0; i < data.result.data.length; i++) {
		var template = '<div class="hotel"><a href="#">\
				<img src="'+ data.result.data[i].img +'" alt="">\
			</a>\
			<div class="hotel-info">\
				<div class="ht-name">\
					<h1 class="cn-name">'+ data.result.data[i].name +'</h1>\
					<span class="en-name">'+ data.result.data[i].enName +'</span>\
					<p class="brief">'+ data.result.data[i].des +'</p>\
				</div>\
			</div>\
		</div>';

		$('.hotel-list').append(template);
	}
}
