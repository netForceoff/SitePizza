let icons = document.querySelectorAll('.img_menu');
let li = document.querySelectorAll('.MainMenu');
let a = document.querySelectorAll('.forChangeColor');

let arrayWithImg = ['img/pizza2.png', 'img/roll2.png', 'img/zakuski2.png', 'img/soup2.png', 'img/kombo2.png', 'img/desert2.png', 'img/drink2.png', 'img/sous2.png'];
let arrayWithImg2 = ['img/pizza.png', 'img/roll.png', 'img/zakuski.png', 'img/soup.png', 'img/kombo.png', 'img/desert.png', 'img/drink.png', 'img/sous.png'];

li.forEach((elem,idnex)=>{
    elem.addEventListener('mouseover', ()=>{
        icons[idnex].src = arrayWithImg[idnex];
        a[idnex].style.color = '#FCB800';
        elem.removeEventListener('mouseover', this);
    }
    );

    elem.addEventListener('mouseout', ()=>{
        icons[idnex].src = arrayWithImg2[idnex];
        a[idnex].style.color = 'white';
    }
    );
}
);