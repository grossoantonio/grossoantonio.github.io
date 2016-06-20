$(document).ready(function(){
    // INIT select tools and image
    var catName = cat.cat_it;
    var codName = cat.cod_it;
    $('.controls-wrap .select-cat h3').html(catName);
    $('.controls-wrap .select-cyl h3').html(codName);

    $.each(cat.list, function(index, value){
        if(index===0){
            $('.controls-wrap .select-cat ul').append('<li class="selected" data-cat="'+ this.name_it +'"><span>' + this.name_it+'</span></li>');
            $.each(this["cod-list"], function (i, v) {
                var code = v.replace(" ", "-");
                if(i===0){
                    $('.controls-wrap .select-cyl ul').append('<li class="selected" data-cod="'+ code +'"><span>' + v +'</span></li>');
                    $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(assets/img/cilindri/'+code+'.jpg)"></div>');
                }else{
                    $('.controls-wrap .select-cyl ul').append('<li data-cod="'+ code +'"><span>' + v +'</span></li>');
                }
           });
        }else{
            $('.controls-wrap .select-cat ul').append('<li data-cat="'+ this.name_it +'"><span>' + this.name_it+'</span></li>');
        }
    });

    // CLICK ON CATEGORY UPDATE CODE AND SELECT FIRST IMAGE
    $('.controls-wrap .select-cat ul li').click(function(){
        $('.controls-wrap .select-cat ul li.selected').toggleClass('selected');
        $(this).toggleClass('selected');
        var data = $(this).data("cat");

        $.each(cat.list, function(index, value){
            if(value.name_it == data){
                $('.controls-wrap .select-cyl ul').html("");
                $.each(this["cod-list"], function (i, v) {
                    var code = v.replace(" ", "-");
                    var liData = '<li data-cod="'+ code +'" style="display:none;"><span>' + v +'</span></li>';
                    if(i===0){
                        $('<li class="selected" data-cod="'+ code +'" style="display:none;"><span>' + v +'</span></li>').appendTo('.controls-wrap .select-cyl ul').fadeIn(300*i+1);
                        $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
                        $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(assets/img/cilindri/'+code+'.jpg); display:none;"></div>');
                        $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);
                    }else{
                        $('<li data-cod="'+ code +'" style="display:none;"><span>' + v +'</span></li>').appendTo('.controls-wrap .select-cyl ul').fadeIn(300*i+1);
                    }
               });
            }
        });

        // CLICK ON CODE UPDATE SELECTED AND CHANGE IMAGE
        $('.controls-wrap .select-cyl ul li').click(function(){

            $('.controls-wrap .select-cyl ul li.selected').toggleClass('selected');
            $(this).toggleClass('selected');
            var data = $(this).data("cod");

            $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
            $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(assets/img/cilindri/'+data+'.jpg); display:none;"></div>');
            $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);

        });

    });

    // CLICK ON CODE UPDATE SELECTED AND CHANGE IMAGE
    $('.controls-wrap .select-cyl ul li').click(function(){

        $('.controls-wrap .select-cyl ul li.selected').toggleClass('selected');
        $(this).toggleClass('selected');
        var data = $(this).data("cod");

        $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
        $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(assets/img/cilindri/'+data+'.jpg); display:none;"></div>');
        $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);

    });

    $('.controls-wrap .el-select').click(function(){
        $(this).toggleClass('mobile-open');
    });

});
