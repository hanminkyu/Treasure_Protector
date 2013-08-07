var xhr = null;
function getXMLHttpRequest() {
	if( window.ActiveXObject ){
		try{
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch( e1 ){
			try{
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch( e2 ){
				return null;
			}
		}
	} else if( window.XMLHttpRequest ){
		return new XMLHttpRequest();
	} else{
		return null;
	}
};

function requestHello( URL ){
	param = f.name.value;
	URL = URL + "?name=" + encodeURIComponent(param);
	xhr = new getXMLHttpRequest();
	xhr.onreadystatechange = responseHello;
	xhr.open("GET", URL, true);
	xhr.send();
};

function responseHello(){
	if( xhr.readyState == 4 ){
		if( xhr.status == 200 ){
			var str = xhr.responseText;
			document.getElementById("message").innerHTML = str;
		} else {
			alert("Fail : " + httpRequest.status);
		}
	}
};