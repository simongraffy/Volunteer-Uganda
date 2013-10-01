    //SETTING UP OUR POPUP  
    //0=none, 1=contact, 2=enquire
    var popupStatus = 0;  
	var popups=new Array();
	popups[1]="#Contact";
	popups[2]="#Enquire";
	popups[3]="#Sponsor";
	popups[4]="#Donate";
			
    //loading popup with jQuery 
    function loadPopup(popup){  
    //loads popup only if it is disabled  
    if(popupStatus==0){  
	    $("#Obscure").css({ "opacity": "0.7" });  
    	$("#Obscure").fadeIn("slow");  
		$(popups[popup]).fadeIn("slow");
    	popupStatus = popup;  
    }  
    }  
	
	//disabling popup with jQuery 
    function disablePopup(){  
    //disables popup only if it is enabled  
    if(popupStatus != 0){ 
		$("#Obscure").fadeOut("slow"); 
		$(popups[popupStatus]).fadeOut("slow");
	}	
    popupStatus = 0;  
    }  
	
	//centering popup  
    function centerPopup(popup){  
    //request data for centering  
    var windowWidth = document.documentElement.clientWidth;  
    var windowHeight = document.documentElement.clientHeight;  
    var popupHeight = $(popups[popup]).height();  
    var popupWidth = $(popups[popup]).width();  
    //centering  
    $(popups[popup]).css({  
    "position": "absolute",  
    "top": windowHeight/2-popupHeight/2,  
    "left": windowWidth/2-popupWidth/2  
    });  
    //only need force for IE6  
      
    $("#backgroundPopup").css({  
    "height": windowHeight  
    });  
      
    }  
	
	$(document).ready(function(){  
		
	//LOADING POPUP  
	//Click the button event!  
	$("#contact").click(function(){	centerPopup(1); loadPopup(1); }); 
	$("#enquire").click(function(){	centerPopup(2); loadPopup(2); }); 
	$("#sponsor").click(function(){	centerPopup(3); loadPopup(3); }); 
	$("#donate").click(function(){	centerPopup(4); loadPopup(4); }); 

    //CLOSING POPUP  
    //Click the x event
    $("a.close").click(function(){ disablePopup(); });  
	
    //Click out event 
    $("#Obscure").click(function(){  disablePopup();  });  
	
    //Press Escape event 
    $(document).keypress(function(e){  
    if(e.keyCode==27 && popupStatus!=0){disablePopup();}     });  


    // bind enquiry form using ajaxForm 
    $('#enquiryform').ajaxForm({ 
        target: '#status', 
	error: function(result, status, err) {alert('Error response: '+result.status + ' ' + result.statusText); },
    }); 
	
	
	// bind application form using ajaxForm 
    $('#applicationform').ajaxForm({ 
        target: '#applystatus', 
	error: function(result, status, err) {alert('Error response: '+result.status + ' ' + result.statusText); },
    }); 
	
	
	
}); 
    
   

   

	
	