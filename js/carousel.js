function carouselSwitch(el) {
    //el is carousel-container
    this.cont = el;
    var kids = this.cont.children;

    var i = 0;
    var firstNonImage = 100;
    var numOfImage = 0;

    var lArrow;
    var rArrow;
    var keyCont;
    var keysContent;

    while(kids.length > i){

        if(kids[i].text != ""){
            firstNonImage = i;
            numOfImage = i;
            lArrow = kids[i];
            rArrow = kids[i+1];
            keyCont = kids[i+2];
            i = i + 2;
        i++;
        }
    }


    keys = keyCont.children;
    keyContentCont = this.cont.nextElementSibling;
    keysContent = keyContentCont.children;

    i=0;
    var activeImg = 0;
    while(i < numOfImage){
        if($(kids[i]).attr('id') == 'active'){
            activeImg = i;
            break;
        }
        i++;
    }

        // document.getElementById('carousel-container-1').style.backgroundImage = document.getElementById('clouds').src;
        var c = $(kids[activeImg]).attr('src');
        el.style.backgroundImage = "url('" + c + "')";


if(numOfImage > 1){

    $(lArrow).on('click', function(event){
        if(activeImg == 0){
            $(kids[activeImg]).toggleClass('active');
            $(kids[numOfImage-1]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keys[numOfImage-1]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            $(keysContent[numOfImage-1]).toggleClass('active');
            activeImg = numOfImage - 1;
        }else{
            $(kids[activeImg]).toggleClass('active');
            $(kids[activeImg-1]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keys[activeImg-1]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            $(keysContent[activeImg-1]).toggleClass('active');
            activeImg = activeImg-1;
        }
        var c = $(kids[activeImg]).attr('src');
        el.style.backgroundImage = "url('" + c + "')";
        event.stopPropagation();
    }); 

    $(rArrow).on('click', function(event){
        if(activeImg == numOfImage-1){
            $(kids[activeImg]).toggleClass('active');
            $(kids[0]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keys[0]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            $(keysContent[0]).toggleClass('active');
            activeImg=0;
        }else{
            $(kids[activeImg]).toggleClass('active');
            $(kids[activeImg+1]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keys[activeImg+1]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            $(keysContent[activeImg+1]).toggleClass('active');
            activeImg=activeImg+1;
        }
        var c = $(kids[activeImg]).attr('src');
        el.style.backgroundImage = "url('" + c + "')";
        event.stopPropagation();
    }); 


    $(keys[0]).on('click', function(event){

            $(kids[0]).toggleClass('active');
            $(kids[activeImg]).toggleClass('active');
            $(keys[0]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keysContent[0]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            activeImg = 0;
            var c = $(kids[activeImg]).attr('src');
            el.style.backgroundImage = "url('" + c + "')";
            event.stopPropagation();
        }); 


    $(keys[1]).on('click', function(event){

            $(kids[1]).toggleClass('active');
            $(kids[activeImg]).toggleClass('active');
            $(keys[1]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keysContent[1]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            activeImg = 1;
            var c = $(kids[activeImg]).attr('src');
            el.style.backgroundImage = "url('" + c + "')";
            event.stopPropagation();
        }); 


    $(keys[2]).on('click', function(event){

            $(kids[2]).toggleClass('active');
            $(kids[activeImg]).toggleClass('active');
            $(keys[2]).toggleClass('active');
            $(keys[activeImg]).toggleClass('active');
            $(keysContent[2]).toggleClass('active');
            $(keysContent[activeImg]).toggleClass('active');
            activeImg = 2;
            var c = $(kids[activeImg]).attr('src');
            el.style.backgroundImage = "url('" + c + "')";
            event.stopPropagation();
        }); 
}

}
