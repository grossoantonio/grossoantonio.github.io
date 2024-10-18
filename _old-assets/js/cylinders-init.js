$(document).ready(function(){

    // INIT select tools and image
    var catTitle = cat.cat_it;
    var codName = cat.cod_it;

    //check language
    var langEN = false;
    if (window.location.href.indexOf("/en/") > -1) {
        langEN = true;
    }
    if(langEN){
        catTitle = cat.cat_en;
        codName = cat.cod_en;
    }

    $('.controls-wrap .select-cat h3').html(catTitle);
    $('.controls-wrap .select-cyl h3').html(codName);

    $.each(cat.list, function(index, value){

        var catName = this.name_it;
        var catNameEn = this.name_en;

        if(index===0){

            if(langEN){
                catName = this.name_en;
            }
            $('.controls-wrap .select-cat ul').append('<li class="selected" data-cat="'+ catName +'"><span>' + catName+'</span></li>');
            $.each(this["cod-list"], function (i, code) {
                var v = code.replace(/\-/g, " ");
                if(i===0){
                    $('.controls-wrap .select-cyl ul').append('<li class="selected" data-cod="'+ code +'" data-cat-en="'+ catNameEn +'"><span>' + v +'</span></li>');
                    $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(/assets/img/cilindri/' + code + '.jpg)"></div>');
                }else{
                    $('.controls-wrap .select-cyl ul').append('<li data-cod="'+ code +'" data-cat-en="'+ catNameEn +'"><span>' + v +'</span></li>');
                }
           });
        }else{
            if(langEN){
                catName = this.name_en;
            }
            $('.controls-wrap .select-cat ul').append('<li data-cat="'+ catName +'"><span>' + catName +'</span></li>');
        }
    });

    // CLICK ON CATEGORY UPDATE CODE AND SELECT FIRST IMAGE
    $('.controls-wrap .select-cat ul li').click(function(){
        $('.controls-wrap .select-cat ul li.selected').toggleClass('selected');
        $(this).toggleClass('selected');
        var data = $(this).data("cat");

        $.each(cat.list, function(index, value){
            var catNameEn = this.name_en;
            if(value.name_it == data){
                $('.controls-wrap .select-cyl ul').html("");
                $.each(this["cod-list"], function (i, code) {
                    var v = code.replace(/\-/g, " ");
                    var liData = '<li data-cod="'+ code +'" style="display:none;"><span>' + v +'</span></li>';
                    if(i===0){
                        $('<li class="selected" data-cod="'+ code +'" data-cat-en="'+ catNameEn +'" style="display:none;"><span>' + v +'</span></li>').appendTo('.controls-wrap .select-cyl ul').fadeIn(300*i+1);
                        $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
                        $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(/assets/img/cilindri/' + code+'.jpg); display:none;"></div>');
                        $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);
                    }else{
                        $('<li data-cod="'+ code +'" data-cat-en="'+ catNameEn +'" style="display:none;"><span>' + v +'</span></li>').appendTo('.controls-wrap .select-cyl ul').fadeIn(300*i+1);
                    }
               });
            }
        });

        // CLICK ON CODE UPDATE SELECTED AND CHANGE IMAGE
        $('.controls-wrap .select-cyl ul li').click(function(){

            $('.controls-wrap .select-cyl ul li.selected').toggleClass('selected');
            $(this).toggleClass('selected');
            var data = $(this).data("cod");

            var dataCat = $(this).data("cat-en");

            $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
            $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(/assets/img/cilindri/' + data + '.jpg); display:none;"></div>');
            $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);

        });

    });

    // CLICK ON CODE UPDATE SELECTED AND CHANGE IMAGE
    $('.controls-wrap .select-cyl ul li').click(function(){

        $('.controls-wrap .select-cyl ul li.selected').toggleClass('selected');
        $(this).toggleClass('selected');
        var data = $(this).data("cod");

        var dataCat = $(this).data("cat-en");

        $('.elements-wrap .element-img .img-cilindro').fadeOut(500, function() { $(this).remove(); });
        $('.elements-wrap .element-img').append('<div class="img-cilindro" style="background-image:url(/assets/img/cilindri/' + data+'.jpg); display:none;"></div>');
        $('.elements-wrap .element-img .img-cilindro').fadeIn(1000);

    });

    $('.controls-wrap .el-select').click(function(){
        $(this).toggleClass('mobile-open');
    });

});
