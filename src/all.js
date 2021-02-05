import { FormTextareaPlugin } from 'bootstrap-vue';
import $ from 'jquery'
function ReadWebSiteWidth(value, direction){
    if(value>1024){
        let scale = (direction==='L')? -370 : 370;
        return scale;
    } else if(value<=1024 && value>768){
        let scale = (direction==='L')? -310 : 310;
        return scale;
    } else {
        let scale = (direction==='L')? -230 : 230;
        return scale;
    }
}




$(document).ready(function(){
    let scrollScale = 0;
    
    $('.MoveToLeft').click(function (e) { 
        scrollScale = 0;
        scrollScale += ReadWebSiteWidth(document.body.clientWidth, 'L');
        console.log(scrollScale)
        scrollScale = scrollScale*3;
        console.log(scrollScale)
        $('.Recommended_class').css("transform","translateX(" + scrollScale + "px)");
        $('.MoveToRight').css('opacity', '1');    
        $(this).css('opacity', 0);
    });
    $('.MoveToRight').click(function (e) { 
        scrollScale = 0;
        $('.Recommended_class').css("transform","translateX(" + scrollScale + "px)");   
        $('.MoveToLeft').css('opacity', '1');    
        $(this).css('opacity', 0); 
    });
    $('.scrollTop').click(function(e){
        $('html,body').animate({
            scrollTop:0
        }, 1000)
    })
    $(window).scroll(function(e){
        if($(this).scrollTop()>400){
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    })
})