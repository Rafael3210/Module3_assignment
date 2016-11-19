(function (window) {

var byeSpeaker = {
	speak: function() {
	}
}

var speakWord = "Good Bye";

byeSpeaker.speak = function() {
}

window.byeSpeaker = byeSpeaker;

byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}

})(window);

