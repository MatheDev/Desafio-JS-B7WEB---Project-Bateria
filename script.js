// adding an observer to page events
document.body.addEventListener('keyup' ,(event)=> {
  playSound(event.code.toLowerCase());
});




// Functions

// Play sound
function playSound(sound){
    let auditoElement = document.querySelector(`#s_${sound}`); //locating the typed audio
    let keyElement = document.querySelector(`div[data-key = ${sound}]`);
    
    if(auditoElement){ // checking existing sound
        auditoElement.currentTime = 0;
        auditoElement.play();
    }  

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout( () =>{
          keyElement.classList.remove('active');
        }, 300 )
    }
}