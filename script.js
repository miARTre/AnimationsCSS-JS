let textTag = document.querySelector('.section1 h1');
// console.log(textTag);

// let text = textTag.textContent;
// console.log(text);

// textTag.className = 'fadeMove';

let text = textTag.textContent;

let splittedText = text.split('');
// console.log(typeof(splittedText));
// console.log(splittedText);

textTag.innerHTML = '';

for(let i = 0; i < splittedText.length; i++) {

    if(splittedText[i] == " ") {
        splittedText[i] = "&nbsp";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;

} 

let singleSpan = textTag.querySelectorAll('span');
let k = 0;
let  interval = setInterval(() => {
    // console.log("test " + k);

    let singleSpan1 = singleSpan[k];

    singleSpan1.className = 'fadeMove';
    
    // console.log(singleSpan[k]);

    k++;

    if(k === singleSpan.length) {
        clearInterval(interval);
    }

}, 70);


let border = document.querySelector('.border-line');
let animationWidht = 0;

window.onscroll = () => {
    
    // let border = document.querySelector('.border-line');
    // console.log(border);

    // console.log(this.scrollY);

    
    // border.style.width = '50%';
    
    // animationWidht += 10;

    if (this.oldScroll > this.scrollY) {
        // console.log('Na gore');
        animationWidht -= 1.5;
    } 
    
    else {
        // console.log('Prema dole');
        animationWidht += 1.5;
    }

    if (animationWidht >= 100) {
        animationWidht = 100;
    } 

    if (animationWidht <= 0) {
        animationWidht = 0;
    }
    
    // else {
    //     animationWidht += 1;
    // }

    animationWidht += 1;
    
    border.style.width = animationWidht + '%';
    
    // console.log(animationWidht);

    this.oldScroll = this.scrollY;

    // for img

    // let sectionForAnimations = document.querySelector ('.section2 .images');
    // let sectionPosition = sectionForAnimations.getBoundingClientRect().top;
    
    // console.log('sectionP: ' + sectionPosition);
    
    // let screenPosition = window.innerHeight / 1.3;
    // console.log('screenP: ' + screenPosition);

    // let leftImage = document.querySelector('.slideFromLeft');
    // let rightImage = document.querySelector('.slideFromRight');

    // if (sectionPosition < screenPosition) {

    //     leftImage.classList.add('animated');
    //     rightImage.classList.add('animated');

    // }

    // leftImage.classList.add('animated');
    // rightImage.classList.add('animated');

    imageAnimation();

}

const imageAnimation = () => {


    // for img

    let sectionForAnimations = document.querySelector ('.section2 .images');
    let sectionPosition = sectionForAnimations.getBoundingClientRect().top;
    
    console.log('sectionP: ' + sectionPosition);
    
    let screenPosition = window.innerHeight / 1.3;
    console.log('screenP: ' + screenPosition);

    let leftImage = document.querySelector('.slideFromLeft');
    let rightImage = document.querySelector('.slideFromRight');

    if (sectionPosition < screenPosition) {

        leftImage.classList.add('animated');
        rightImage.classList.add('animated');
    }

    // leftImage.classList.add('animated');
    // rightImage.classList.add('animated');

}



