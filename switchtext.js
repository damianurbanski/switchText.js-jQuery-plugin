// The MIT License (MIT)
// switchText.js | Copyright (c) 2016 Damian Urbanski
(function($) {
  "use strict";
 $.fn.switchText = function(words,speed,loop,removeAnim,animation,animDuration) {
// SETTINGS AND CHECKING VARIABLES
var element = this;
var startShuffle;
var defaultSpeed = 1000;
var i = 0;
var pauseWord = '%PAUSE=';
var pauseTime;
if (typeof speed === 'undefined' || isNaN(speed)) { speed = defaultSpeed; }
if (typeof loop === 'undefined' || isNaN(loop)) { loop = false; }
if (typeof removeAnim === 'undefined' || isNaN(removeAnim)) { removeAnim = false; }
if (typeof animDuration === 'undefined' || isNaN(animDuration)) { animDuration = speed; }
element.css('animation-duration',animDuration+'ms');
if(animation){ element.addClass(animation).css('animation-duration',animDuration+'ms'); }

// ------------------------------------------------------------



//---------------------------------------------------------------
function initShuffle(){
startShuffle = setInterval(function(elem){
  elem = element;
  if (loop && i==words.length) i=0;
  
  //PAUSE MODE if true destroy this interval and make new one after pauseTime
  if(words[i].indexOf(pauseWord)!=-1) {

    //-> Cut from string pauseWord phrase text and make as integer
    pauseTime = parseInt(words[i].slice(pauseWord.length,20));  
    reShuffle(pauseTime);
   }

   //Switching normally
   else {
         elem.text(words[i]);
         i++;
         if (!loop && i==words.length) stop(elem);
  }

  },speed); 
}
//---------------------------------------------------------------
function reShuffle(time){
          clearInterval(startShuffle);
          i++;
          setTimeout(function(){
            setInterval(initShuffle(),speed);
          },time);
}
//---------------------------------------------------------------
function stop(elem){
      clearInterval(startShuffle);
      if(removeAnim && !loop) {
        setTimeout(function() {
      elem.removeClass(animation);
   }, speed);}
}

//---------------------------------------------------------------

initShuffle(); //Start, Make first interval

return this;  // Chaining support     

} // .fn
})(jQuery);


