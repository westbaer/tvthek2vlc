// copyright 2010 nicolas haunold <nicolas@haunold.me>

function ___tvthek2vlcize___() {
    var playlist_button = document.getElementById('open_playlist');
    if(playlist_button != null) {
	var playlist_url = playlist_button.href;
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", playlist_url, true);
	xhr.onreadystatechange = function() {
	    if(xhr.readyState == 4) {
		var parser = new DOMParser();
		doc = parser.parseFromString(xhr.responseText, "text/xml");

		if(doc != null) {
		    var new_url = doc.getElementsByTagName('ref')[0];
		    if(new_url != 'undefined' && new_url != null) {
			new_url = new_url.getAttribute('href');
			if(new_url != '' && new_url != 'undefined' && new_url != null) {
			    playlist_button.href=new_url;
			}
		    }
		}
	    }
	};

	xhr.send();
    }
}

___tvthek2vlcize___();
