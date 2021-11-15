// Events

// adding an observer to page events
document.body.addEventListener('keyup' ,(event)=> {
  playSound(event.code.toLowerCase());
});


// composer
document.querySelector('.composer button').addEventListener('click', () => {
  let song = document.querySelector('#input').value;

  if(song !== ''){
    let songArray = song.split('');
    playComposition(songArray);
  }
  
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

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){
        setTimeout( () => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }

}