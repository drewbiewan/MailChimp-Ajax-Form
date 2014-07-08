<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>InstaFeed PHP</title>
    <link rel="stylesheet" href="css/font-awesome.min.css" />

  </head>
  <body>
    
	  <h2>Ajax Chimp</h2>


		<form action="" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
			<h2>Subscribe to our mailing list</h2>
		<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
		<div class="mc-field-group">
			<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
		</label>
			<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
		</div>
		<div class="mc-field-group">
			<label for="mce-FNAME">First Name </label>
			<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
		</div>
		<div class="mc-field-group">
			<label for="mce-LNAME">Last Name </label>
			<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
		</div>
		<div class="mc-field-group input-group">
		    <strong>Email Format </strong>
		    <ul><li><input type="radio" value="html" name="EMAILTYPE" id="mce-EMAILTYPE-0"><label for="mce-EMAILTYPE-0">html</label></li>
		<li><input type="radio" value="text" name="EMAILTYPE" id="mce-EMAILTYPE-1"><label for="mce-EMAILTYPE-1">text</label></li>
		</ul>
		</div>
			<div id="mce-responses" class="clear">
				<div class="response" id="mce-error-response" style="display:none"></div>
				<div class="response" id="mce-success-response" style="display:none"></div>
			</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		    <div style="position: absolute; left: -5000px;"><input type="text" name="b_2e506d76d4f13a680ed81c612_47e4a9cc66" tabindex="-1" value=""></div>
		    <div class="clear"><input type="submit" value="Subscribe Bitch" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
		</form>


<!--End mc_embed_signup-->
	  
	  
    <script src="js/jquery.js"></script>
    <script src="js/ajaxchimp.js"></script>
    
    <script type="text/javascript">
    	$(document).ready(function(){
			
	    	$('#mc-embedded-subscribe-form').ajaxChimp();

    	});
    </script>
  </body>
</html>