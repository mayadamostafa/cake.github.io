   




  $(function () {
  	//to make nave top//
    
    $('body').css('paddingTop', $('#mainNav').innerheight() + 20);

  	//scroll//
  	$('#mainNav li a').click(function (e){
  		e.preventDefult();
        $('html,body').animate({
         scrollTop:$('#' + $(this).data('scroll')).offset().top
            },1000);

  	});//
  	//end scroll//

  	

  });//

