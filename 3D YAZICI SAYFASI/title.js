// window.onload = function() {

//     var pageTitle = document.title;
//     var attentionMessage = 'Geri Dön Kopek :)';
//     // var blinkEvent = null;
  
//     document.addEventListener('visibilitychange', function(e) {
//       var isPageActive = !document.hidden;
  
//       if(!isPageActive){
//         blink();
//       }else {
//         document.title = pageTitle;
//         clearInterval(blinkEvent);
//       }
//     });
  
//     function blink(){
//       blinkEvent = setInterval(function() {
//         if(document.title === attentionMessage){
//           document.title = pageTitle;
//         }else {
//           document.title = attentionMessage;
//         }
//       }, 5000);
//     }
//   };

  window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Geri Dön Kopek :)';
    
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        document.title = attentionMessage
      }else {
        document.title = pageTitle;
      }
    });
  };