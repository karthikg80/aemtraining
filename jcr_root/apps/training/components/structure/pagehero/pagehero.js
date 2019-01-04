"use strict";
use( function(){

    var hero = {}
    
    //Check for file reference from the DAM
    var image = properties.get("fileReference", String.class);
   
    if(image == "undefined"){
    	//Check for file upload
    	var res = resource.getChild("file");
    	if(res != null){
    		image = res.getPath();
    	}
    }
    
    if(image != "undefined"){
    	hero.style = "background-image:url(" + image + ");";
    }
    
    return hero;
});