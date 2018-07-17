function toggleTab() {
    var $btn = $('.toggleTab_item');
    var $contents = $('.toggleContents');
    $btn.on('click', function(){
        var index = $btn.index(this);
        $btn.removeClass('on');
        $(this).addClass('on');
        $contents.hide();
        $contents.eq(index).fadeIn('fast');
    });
}
$(function(){
    toggleTab();
})
