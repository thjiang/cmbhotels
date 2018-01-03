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
			showHotelList(data);
        }
    });
}

function showHotelList(data) {
	var template = '';
	var bedTemplate = [];
	$('.hotel-list')[0].innerHTML = "";
	for (var i = 0; i < data.result.data.length; i++) {
		bedTemplate = [];
		for (var j = 0; j < data.result.data[i].room.length; j++) {
			bedTemplate.push('<tr>\n' +
				'<td class="bedname">钻石兑换专享</td>\n' +
				'<td>大床</td><td>双早</td>\n' +
				'<td><span>提前</span><em style="font-size:12px;">15天</em><span>预定</span></td>\n' +
				'<td><span class="price">￥  </span><em>1100+100</em><span>  积分 起</span></td>\n' +
			'</tr>');
		}
		template = '<div class="hotel"><a href="#">\n' +
				'<img src="' + data.result.data[i].img + '" alt="">\n' +
			'</a>\n' +
			'<div class="hotel-info">\n' +
				'<div class="ht-name">\n' +
					'<h1 class="cn-name">' + data.result.data[i].name + '</h1>\n' +
					'<span class="en-name">' + data.result.data[i].enName + '</span>\n' +
					'<p class="brief">' + data.result.data[i].des + '</p>\n' +
				'</div>\n' +
				'<div class="configuration">\n' +
					'<dl>\n' +
						'<dt>区域</dt>\n' +
						'<dd>\n' +
							'<span class="ht-label">' + data.result.data[i].location.district + '</span>\n' +
							'<span class="ht-label">' + data.result.data[i].location.street + '</span>\n' +
							'<a href="#" class="blue">查看地图</a>\n' +
						'</dd>\n' +
					'</dl>\n' +
					'<dl>\n' +
						'<dt>设施</dt>\n' +
						'<dd><span class="ht-label">宽带</span></dd>\n' +
					'</dl>\n' +
				'</div>\n' +
				'<div class="hotel-price">\n' +
					'<span class="price">市场参考价<s>¥' + data.result.data[i].referencePrice + '</s>起</span>\n' +
				'</div>\n' +
			'</div>\n' +
			'<table class="room"><thead><tr><th>房型</th><th>床型</th><th>早餐</th><th>预定时间</th><th>兑换价格</th></tr></thead>\n' +
				'<tbody>\n' +
					'<tr><td colspan="6" class="spec">(预)豪华大床房<span class="tag">66平</span><span class="tag">3层</span></td></tr>\n' +
					bedTemplate +
				'</tbody>\n' +
			'</table>\n' +
		'</div>';

		$('.hotel-list').append(template);
	}
}

// "room":[
// 	{"roomType":"(预)豪华房","size":36,"floor":"4-7",
// 		"roomList":[
// 			{"bed":3,"breakfast":0,"bookTime":1,"price":500,"guestKind":1},
// 			{"bed":3,"breakfast":1,"bookTime":1,"price":600,"guestKind":1},
// 			{"bed":3,"breakfast":2,"bookTime":1,"price":800,"guestKind":1}
// 		]
// 	}
// ]