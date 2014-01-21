/**
 * jQuery.resBg (responsibleBg)
 * 
 * © 2014 gsgundam - http://gsgundam.com
 * v0.1 2014/1/21
**/
(function($) {
    var resBgDefault = {
        "position": "absolute"
    };
    $.fn.resBg = function(options) {
        function resizeBg() {
            var imgWidth = bgImg.width(), imgHeight = bgImg.height(), docWidth = $(window).width(), docHeight = $(window).height(), widthRatio = docWidth / imgWidth, heightRatio = docHeight / imgHeight, widthTarget = heightRatio * imgWidth, heightTarget = widthRatio * imgHeight;
            heightTarget > docHeight ? bgImg.css({
                "width": "auto",
                "height": heightTarget + "px"
            }) : bgImg.css({
                "width": widthTarget + "px",
                "height": "auto"
            });
        }
        options = options || {};
        var s = $.extend({}, resBgDefault, options);
        $(".resBg").css({
            "position": s.position,
            "top": 0,
            "left": 0,
            "overflow": "hidden",
            "z-index": "-1"
        });
        var bgImg = $(this);
        resizeBg(), $(window).resize(function() {
            resizeBg();
        });
    };
})(jQuery);