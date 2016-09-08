// 选择框与按钮样式绑定
// 选择框类checkbox-bind-btn，按钮类btn-bind-checkbox

(function() {
	$(".checkbox-bind-btn").on('click',function(){
	if($(".checkbox-bind-btn").prop("checked")==true){
		$('.btn-bind-checkbox').attr("href",href="javascript:carInfoSubmit()");
		$('.btn-bind-checkbox').removeClass('btn-disabled');
	}else{
		$('.btn-bind-checkbox').attr("href",href="#");
		$('.btn-bind-checkbox').addClass('btn-disabled');
		// $('.btnClick').attr('contenteditable','false');
	 }
	})
})();