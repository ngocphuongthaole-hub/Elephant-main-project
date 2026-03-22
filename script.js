const target = document.querySelector('#target');
const image = document.querySelector('#elephant-image');
const button = document.querySelector('#button');

// change the content
target.innerHTML= 'Page has loaded.'

button.addEventListener('click', ()  => {
    target.innerHTML ='you cliked the button';
})

image.addEventListener('mouseover', () => {
    target.innerHTML="I am an Elephant";
})