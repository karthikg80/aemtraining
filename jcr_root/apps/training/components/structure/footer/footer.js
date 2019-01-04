"use strict";
use(function() {
	// currentStyle is a global object that gets policy properties 
	// from the design dialog for this component
	var pagePaths = currentStyle.get("pages");

	if(pagePaths == null){ // If no paths were entered into the design dialog, set default content
		pagePaths = currentPage.getPath();
	}
	
	// Create an array of pages for all pagePaths
	var pages = [];
	if(pagePaths instanceof Array){ // Use case for multiple paths
		pagePaths.forEach( function (arrayItem)
				{
				    var pageObject = pageManager.getPage(arrayItem);
				    pages.push(pageObject);
				});
	}else{ // Use case for only a single path
		var pageObject = pageManager.getPage(pagePaths);
	    pages.push(pageObject);
	}
	
	//Get the current year
	var curYear = (new Date()).getFullYear();
	
    return {
        items: pages,
        currentYear: curYear
    }		
});