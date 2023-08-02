var intVal, myclock,data_id,str_html='';

$(document).ready(function(){


	for(var i=0;i<time_zones.length;i++) {
		str_html += '<option value="'+time_zones[i].utc+'">'+time_zones[i].city+' ('+time_zones[i].country+')</option>';
	}

	$(".sel").append(str_html);

	$(".btn_add").click(function(){
		data_id = $(this).attr("data-id");
	});

	$(".btn-success").click(function() {

		$('#clock' + data_id).Clock({
			height:200,
			showNumerals:false,
			brandText:'clockpad',
			brandText2:$("#sel option:selected").text(),
			utc_offset:$("#sel").val()
		});
		$("#btn_add_"+data_id).addClass("hide");
		$("#title"+ data_id +" span").text($("#sel option:selected").text());
		$("#title"+ data_id).removeClass("hide");
		$('#myModal').modal('hide');
		$('#sel option:first').prop('selected', true);
	});

	$(".cls").click(function() {
		$("#btn_add_"+$(this).attr("data-id")).removeClass("hide");
		$("#title"+ $(this).attr("data-id") +" span").text("");
		$("#title"+ $(this).attr("data-id")).addClass("hide");
		$("#clock"+$(this).attr("data-id")).html("");
	});
});

