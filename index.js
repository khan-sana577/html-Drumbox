 /*Explanation
  Instead of this funtion using we make it more easier to click the button
 //1. single button to click after we got a on pop box "I got clicked!" using with named function
 
 document.querySelector("button").addEventListener("click", handleClick);
  function handleClick(){
    alert("I got Clicked!");
 }


  //2.Modify version of  step1 here funtion is anonymous means without name & it combine within the addEventListener also work for single button
  
  document.querySelector("button").addEventListener("click",function (){
    alert("I got Clicked!"); 
});

 
  //3.Modify version of above code to make it more versatile to work for all button using for loop
 
  var numberOfDrumButtons=document.querySelectorAll("button").length;
  for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
    alert("I got Clicked!"); 
});
  }


 // 4.Second Method of for loop just modify ver
     //select all button elements on the page 

 document.querySelectorAll("button").forEach(function(button){
   
    // Add a click event listener to each button 

    button.addEventListener("click",function (){
    alert("I got Clicked!");
 });
});


//5.Adding audio to play sounds using javascript
  var  numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
 
      });   
}
   6.Adding background images using CSS.

  // 7.Using "this" operator to identify the button that triggered the event listener.

    var  numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
         console.log(this); //IT RETURNS basically class of that button after clicking on it in a console section  
         console.log(this.innerHTML); //TO ACCES THE ELEMENT OF THE DRUM KIT which inside the button section of the element tag
    });   
}

  
// 8.To change the color of the each button using this element tag
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
 
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    
        console.log(this.innerHTML);
        console.log(this.style.color="white");

    });
}

//9.Switch statment

var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
 
     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     
var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
             break;

        case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
                

        case "d":
                    var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;            
    

                    case "j":
                        var crash= new Audio("sounds/crash.mp3");
                        crash.play();
                        break;
         
                        
                        case "k":
                            var kick= new Audio("sounds/kick-bass.mp3");
                            kick.play();
                            break;

                            case "l":
                                var snare= new Audio("sounds/snare.mp3");
                                snare.play();
                                break;
        default:
            console.log(buttonInnerHTML);
            break;
    }

     });
    }*/


 //10. Adding eventListener using keyboard to check for key press to play the song.
 
    // 1. funtion without parameters
    // document.addEventListener("keydown",function(){
    //     alert("key was pressed");
    // });

    //2. funtion with parameter event
    // document.addEventListener("keydown",function(event){
    //     console.log(event);
    // });

    //3.using above code we optimize the code so the drum kit accordingly gives us playsound when enter the required given button on drum kit
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
             break;

        case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
                
                

        case "d":
                    var tom4= new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;            
    

                    case "j":
                        var crash= new Audio("sounds/crash.mp3");
                        crash.play();
                        break;
         
                        
                        case "k":
                            var kick= new Audio("sounds/kick-bass.mp3");
                            kick.play();
                            break;

                            case "l":
                                var snare= new Audio("sounds/snare.mp3");
                                snare.play();
                                break;
        default:
            console.log(key);
            break;
    }

}