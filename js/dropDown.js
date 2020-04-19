function DropDown(el) {
    this.dd = el;
        var obj = this;

        $(obj.dd).on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        }); 

        $('ul').on('click', function(event){
            $(this.parent).toggleClass('active');
            event.stopPropagation();
        }); 
}

