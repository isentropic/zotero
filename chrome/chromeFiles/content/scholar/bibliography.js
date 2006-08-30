//////////////////////////////////////////////////////////////////////////////
//
// Scholar_File_Interface_Bibliography
//
//////////////////////////////////////////////////////////////////////////////

// Class to provide options for bibliography

var Scholar_File_Interface_Bibliography = new function() {
	var _io;
	
	this.init = init;
	this.acceptSelection = acceptSelection;
	
	/*
	 * Initialize some variables and prepare event listeners for when chrome is done
	 * loading
	 */
	function init() {
		_io = window.arguments[0];
		
		var listbox = document.getElementById("style-popup");
		var styleMenu = document.getElementById("style-menu");
		var styles = Scholar.Cite.getStyles();
		
		// add styles to list
		for(i in styles) {
			var itemNode = document.createElement("menuitem");
			itemNode.setAttribute("value", i);
			itemNode.setAttribute("label", styles[i]);
			listbox.appendChild(itemNode);
			
			if(i == _io.style) {
				styleMenu.selectedItem = itemNode;
			}
		}
		
		// select first item by default
		if(styleMenu.selectedIndex == -1) {
			styleMenu.selectedIndex = 0;
		}
		
		if(document.getElementById("copy-to-clipboard") && navigator.appVersion.indexOf('Mac') != -1) {
			document.getElementById("copy-to-clipboard").hidden = "true";
		}
	}

	function acceptSelection() {
		// collect code
		_io.style = document.getElementById("style-menu").selectedItem.value;
		if(document.getElementById("output-radio")) {
			_io.output = document.getElementById("output-radio").selectedItem.id;
		}
	}
}