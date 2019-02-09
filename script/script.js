let icons = document.querySelectorAll('.img_menu');
let li = document.querySelectorAll('.MainMenu');
let a = document.querySelectorAll('.forChangeColor');

let arrayWithImg = ['img/pizza2.png', 'img/roll2.png', 'img/zakuski2.png', 'img/soup2.png', 'img/kombo2.png', 'img/desert2.png', 'img/drink2.png', 'img/sous2.png'];
let arrayWithImg2 = ['img/pizza.png', 'img/roll.png', 'img/zakuski.png', 'img/soup.png', 'img/kombo.png', 'img/desert.png', 'img/drink.png', 'img/sous.png'];

let box = document.querySelector('.filter-box');
let selectBox = document.querySelector('.select-box');

let closeBox = document.querySelector('.close-box');

let checkboxAll = document.querySelectorAll('.checkbox_f');
let buttonCloseBlock = document.getElementById('buttonCloseBlock');

let img = document.querySelector('.image-filter-box');
let blackBackground = 'img/menu (1).png';
let whiteBackground = 'img/menu white.png';

let accountButton = document.querySelector('.account');
let windowModelAccount = document.querySelector('.bg-modal');
let inBlock = document.querySelector('.model-account');
let registrationBlock = document.querySelector('.model-account-second');

let buttonCloseBlockAccount = document.querySelector('.close-account');
let buttonCloseBlockAccountSecond = document.querySelector('.close-account-second');
let buttonForRegistration = document.querySelector('.registration-button');
let buttonForIn = document.querySelector('.in-button');

let inputPhone = document.getElementById('phone');
let inputPassword = document.getElementById('password');
let buttonShowPassword = document.querySelector('.showPassword');

inputPhone.addEventListener('input', mask, false);
inputPhone.addEventListener("focus", mask, false);
inputPhone.addEventListener("blur", mask, false);

buttonForIn.addEventListener('click', () => {
    registrationBlock.style.display = 'none';
    inBlock.style.display = 'block';
});

buttonForRegistration.addEventListener('click', () => {
    registrationBlock.style.display = 'block';
    inBlock.style.display = 'none';
});


buttonShowPassword.addEventListener('click', swapOnRed);

 function swapOnRed() {
    buttonShowPassword.style.background = 'red';
    inputPassword.type = 'text';
    buttonShowPassword.removeEventListener('click', swapOnRed);
    buttonShowPassword.addEventListener('click', swapOnGreen);
}

function swapOnGreen() {
    buttonShowPassword.style.background = 'green';
    inputPassword.type = 'password';
    buttonShowPassword.removeEventListener('click', swapOnGreen);
    buttonShowPassword.addEventListener('click', swapOnRed);
}


function mask(event) {
    var matrix = "+7 (___) ___ ____",
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) val = def;

    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this)
};

buttonCloseBlockAccount.addEventListener('click', () => {
    windowModelAccount.style.display = 'none';
     document.body.style.overflowX = 'hidden';
     document.body.style.overflowY = 'auto';
});

buttonCloseBlockAccountSecond.addEventListener('click', () => {
    windowModelAccount.style.display = 'none';
     document.body.style.overflowX = 'hidden';
     document.body.style.overflowY = 'auto';
});

accountButton.addEventListener('click', () => {
    windowModelAccount.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

visitAndPaint(li, icons, a);
openBox(box, selectBox);

function giveActiveStatusToMenuItem(li, icons, a) {
    li.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            icons[idnex].src = arrayWithImg[idnex];
            a[idnex].style.color = '#FCB800';
        });
    });
}

function visitAndPaint(li, icons, a) {
    li.forEach((elem,idnex) => {
        elem.addEventListener('mouseover', ()=> {
            icons[idnex].src = arrayWithImg[idnex];
            a[idnex].style.color = '#FCB800';
            elem.removeEventListener('mouseover', this);
        });

        elem.addEventListener('mouseout', () => {
            icons[idnex].src = arrayWithImg2[idnex];
            a[idnex].style.color = 'white';
        });
    });
}

box.addEventListener('mouseover', () => {
    box.style.color = 'white';
    img.src = whiteBackground;
    box.removeEventListener('mouseover', this);
});

box.addEventListener('mouseout', () => {
    box.style.color = 'black';
    img.src = blackBackground;
});

function openBox(box, selectBox) {
    box.addEventListener('click', open);
    
    function open() {
        selectBox.style.display = 'block';
        box.removeEventListener('click', open);
        box.addEventListener('click', close);
    }

    function close() {
        selectBox.style.display = 'none';
        box.removeEventListener('click', close);
        box.addEventListener('click', open);
    }
}


buttonCloseBlock.addEventListener('click', () => {
    for (let elem of checkboxAll) {
        elem.checked = false;
    }
    openBox(box, selectBox);
});

closeBox.addEventListener('click', () => {
    selectBox.style.display = 'none';
    openBox(box, selectBox);
});

window.onscroll = () => {
    if (this.pageYOffset < 300) {
    box.style.display = 'none';
    selectBox.style.display = 'none';
} else {
    box.style.display = 'block';
}
}