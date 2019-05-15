$(function(){
    $('[data-toggle="tooltip"]').tooltip();

    var items =$('.carousel-inner .item') 
    $(window).on('resize',function(){

        var width = $(window).width();
        if(width >= 768){
            $(items).each(function(i,e){
                var item = $(this); 
                var imgSrc = item.data("largeImage");
                // console.log(imgSrc);
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            })
        }else{
            $(items).each(function(i,e){
                var item = $(this); 
                var imgSrc = item.data("smallImage");
                item.html('<a href="javascript:;" class="mobilImg"><img src="'+imgSrc+'"></a>');
            })
        }
    }).trigger("resize");

    // 移动端触屏操作
    var startX,endX;
    var carousel_inner = $('.carousel-inner')[0];

    
    var carousel = $('.carousel');

    carousel_inner.addEventListener("touchstart",function(e){
        startX = e.targetTouches[0].clientX;
        // console.log(e.target);
        console.log(startX);
        console.log(e);
    })
    carousel_inner.addEventListener("touchend",function(e){
        endX = e.changedTouches[0].clientX;
        if(endX - startX > 0 ){
            carousel.carousel('prev');
        }
        else if( endX - startX < 0 ){
            carousel.carousel('next');
        }
    })
    
    // 计算产品块导航项的原始宽度
    var ul=$(".wjs_product .nav-tabs");
    var lis=ul.find("li");
    var totalWidth=0;//总宽度
    lis.each(function(index,value){
        totalWidth=totalWidth+$(value).innerWidth();
        console.log($(value).innerWidth());
        /*获取宽度的方法的说明：
        * width():它只能得到当前元素的内容的宽度
        * innerWidth():它能获取当前元素的内容的宽度+padding
        * outerWidth():获取当前元素的内容的宽度+padding+border
        * outerWidth(true):获取元素的内容的宽度+padding+border+margin*/
    });
    ul.width(totalWidth);
    // 使用插件实现导航条的滑动操作
    var myScroll = new IScroll('.tabs_parent',{
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });
});