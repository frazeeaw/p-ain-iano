const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

function playNote(key) {


  const noteAudio = document.getElementById(key.dataset.note);
// Note Cooldown
noteAudio.currentTime = 0;



// Play note
  noteAudio.play();



  // Add class active
    key.classList.add('active');

    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
        });
}