// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


(function (window) {

var helloSpeaker = {
	speak: function() {
	}
}

helloSpeaker.speak = function() {
}

window.helloSpeaker = helloSpeaker;

var speakWord = "Hello";

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

})(window);

