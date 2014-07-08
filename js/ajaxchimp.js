(function($) {

    $.fn.ajaxChimp = function(options) {
		
		//Set Up Settings for plugin (Do we even need this?)
		var settings =  $.extend({
			

			
		}, options);
		
		//Create a variable from the form id passed into the plugin
    	var chimpform = $(this);
    	
    	//Change Submit button to Button
    	var submitInput = $('input:submit', chimpform);
    	var buttonInput = document.createElement('button');
    	$(buttonInput).addClass('button').html('<i class="fa fa-envelope"></i>');
		submitInput.after(buttonInput);    	
    	submitInput.remove();
		
    	
    	//Create variables for inputs
		
				
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;		
				
		//Start Submission Validation
		$(chimpform).submit(function(e){
		
			e.preventDefault();
			
			var emailInput = $('input[type=email]', chimpform).val();
			var textInput = $('input[type=text]', chimpform).val();

			
			if(emailInput == '') {
				
				alert('email empty');
					
			} else {		

				
				$(buttonInput).html('<i class="fa-spinner fa-spin fa"></i>');
			
				register(chimpform); //Send it to process!
			
			}
			
		});
    	
    	// Register Function
    	function register(chimpform){
    		
    		$.ajax({
	    		type : chimpform.attr('method'),
	    		url	: chimpform.attr('action'),
	    		data : chimpform.serialize(),
	    		cache : false,
				dataType	: 'jsonp',
				contentType	: "application/json; charset=utf-8",
				error       : function(err) { 
			 	$('#mc-embedded-subscribe-form').hide();
				$('#notification_container').show().html('<span class="alert">Something went wrong. Please try again later.</span><a href="#" id="dismisserr"><i class="fa fa-times"></i> Close</a><div style="clear: both;"></div>');
				$('#dismisserr').click(function(){
					$('#notification_container').hide();
					$('#mc-embedded-subscribe-form').show();
					$('#mc-embedded-subscribe').html('<i class="fa fa-times"></i>');
					return false;
				});
			},
				success     : function(data) {
		      if (data.result != "success") {
		        var message = data.msg.substring(4);
		        $(chimpform).fadeOut();
		        $('#notification_container').show().html('<span class="alert">'+message+'</span>');
		        
		      } 
		 
		      else {
		        var message = data.msg;
		        $('#mc-embedded-subscribe-form').fadeOut();
		        $('#notification_container').show().html('<span class="success">'+message+'</span>');
		      }			
			}
									    		
    		});
    		
    	}
    	
      
      
    }

}(jQuery));