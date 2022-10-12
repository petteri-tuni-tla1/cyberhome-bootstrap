// resize header to size of browser window

var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight + "px";
})

// set modal time delay before loading
 
 /* Uncomment this to enable the modal - CYBER 2022 ---
setTimeout(function() {
	$('#demo-modal').modal();
}, 500);
--- Commented out - CYBER */
