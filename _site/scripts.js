var previewOn = "preview1";

function showpreview(caption, imageFile, workID) {
	if (imageFile != " ") {
		if (previewOn != " ") {
			document.getElementById(previewOn).style.color="#000080"; 
		}
		previewOn=workID;
		document.getElementById(previewOn).style.color="#cc0000"; 
		document.getElementById('imgCaption').firstChild.nodeValue=caption;
		var newImage = 'images/' + imageFile;
		document.getElementById('previewImg').src=newImage;
	}
}
