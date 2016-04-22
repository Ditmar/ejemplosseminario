$.fn.botones=function()
{
	console.log($(this))
	$(this).mouseover(function(event) {
		
		
		console.log("OVER")
		$(this).animate({
			"margin-left":"10px"},
			500, function() {
				
			});
	});
	$(this).mouseout(function(event) {
		console.log("OUT")
		$(this).animate({
			"margin-left":"0px"},
			500, function() {
				
			}
		);
	});
}