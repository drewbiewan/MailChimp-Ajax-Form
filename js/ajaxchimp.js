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
			

			
			$(buttonInput).css('background-color', '#B1E0EC').html('<i class="fa-spinner fa-spin fa"></i>');
			
			register(chimpform); //Send it to process!
			
		});
    	
    	// Register Function
    	function register(chimpform){
    		
    		$.ajax({
	    		type 		: chimpform.attr('method'),
	    		url			: chimpform.attr('action'),
	    		data 		: chimpform.serialize(),
	    		cache 		: false,
				dataType	: 'jsonp',
				contentType	: "application/json; charset=utf-8",
				error       : function(data,textStaus) { 
					var message = data.msg;
					$('.mce-error-response').show().html(message);
					$(buttonInput).css('background-color', '#EE836E').html('<i class="fa fa-times"></i>');
					$('#mce-responses').show().html('Looks like something went wrong. Try Again.');
			        $('input', chimpform).click(function(){
				        $(buttonInput).css('background-color', '#6DC5DC').html('<i class="fa fa-envelope"></i>');
			        });
			        			
				},
				success     : function(data) {
			     	
			     	if (data.result != "success") {
			        	var message = data.msg.substring(4);
						$(buttonInput).css('background-color', '#EE836E').html('<i class="fa fa-times"></i>');
						$('#mce-responses').show().html(message);
			      } 
			 
			      else {
			        var message = data.msg;
						$(buttonInput).css('background-color', '#95D1C4').html('<i class="fa fa-check"></i>');
			        	$('#mce-responses').show().html(message);
			        	$(':input','#life_contact')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected')

			      }			
				}									

									    		
    		});
    		
    	}
    	
      
      
    }

}(jQuery));