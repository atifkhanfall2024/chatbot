 

 const btn = document.querySelector(".talk")
 const h1 = document.querySelector(".content")



 // now we create a function for speak text 

   function speak(text){
        const speechh =   new SpeechSynthesisUtterance(text);
        speechh.rate = 1 ; 
        speechh.volume = 1 ; 
        speechh.pitch = 1 ;

        window.speechSynthesis.speak(speechh);
   }

   // now i want to create a function to tell me about date 

        function timing(){
            var day = new Date();
           var hours =  day.getHours();
           if(hours>0 && hours<12){
            speak("Good Morning boss")
           }
         else  if(hours>=12 && hours<17){
            speak("Good afternoon Mister")
           }
           else{
            speak("good evening sir")
           }
        }

   // now we create an event 

   window.addEventListener("load" , ()=>{

        speak("Hello Muhammad Atttif khan how are you boss  how can i help you ");
        timing()
   })

      const SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition

      // make an object of SpeechRecognition

      const recognition = new SpeechRecognition();

      recognition.onresult= (event)=>{
        const currentIndex =   event.resultIndex ;
        const transcript = event.results[currentIndex][0].transcript;
       h1.textContent = transcript ;
       takeCommand(transcript.toLowerCase())

      }

      btn.addEventListener("click" , ()=>{
        h1.textContent = "Listening.....";
        recognition.start();
      })
      function takeCommand(message){
        if(message.includes('hey') || message.includes('hello')){
            speak("Hello Sir, How May I Help You?");
        }
        else if(message.includes("open google")){
            window.open("https://google.com", "_blank");
            speak("Opening Google...")
        }
        else if(message.includes("open youtube")){
            window.open("https://youtube.com", "_blank");
            speak("Opening Youtube...")
        }
        else if(message.includes("open facebook")){
            window.open("https://facebook.com", "_blank");
            speak("Opening Facebook...")
        }
    
        else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what i found on internet regarding " + message;
            speak(finalText);
      
        }
    
        else if(message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            const finalText = "This is what i found on wikipedia regarding " + message;
            speak(finalText);
        }
    
        else if(message.includes('time')) {
            const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
            const finalText = time;
            speak(finalText);
        }
    
        else if(message.includes('date')) {
            const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
            const finalText = date;
            speak(finalText);
        }
    
        else if(message.includes('calculator')) {
            window.open('Calculator:///')
            const finalText = "Opening Calculator";
            speak(finalText);
        }
     
        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on google";
            speak(finalText);
        }
    }
