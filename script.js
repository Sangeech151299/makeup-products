const item=document.getElementById('item');
const oneline=document.getElementById('oneline');
const img=document.getElementById('img');
const products=document.getElementById('products');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

const makeupitems=[
    {
        id:1,
        item:"Product item1",
        oneline:"Foundation liquid",
        img:"images/1.jpg",
        product:"lakme",
        desc: " for instant glow and fresh look"
    },
    {
        id:2,
        item:"Product item2",
        oneline:"foundation powder",
        img:"images/2.jpg",
        product:"lakme",
        desc: " for instant glow and fresh look"
    },
    {
        id:3,
        item:"Product item3",
        oneline:"foundation set",
        img:"images/3.jpg",
        product:"lakme",
        desc: " for instant glow and fresh look"
    },
    {
        id:4,
        item:"Product item4",
        oneline:"Kajal",
        img:"images/4.jpg",
        product:"clamy",
        desc: "waterproof kajal"
    },
    {
        id:5,
        item:"Product item5",
        oneline:"mascara,eyelashes",
        img:"images/5.jpg",
        product:"mascara",
        desc: " water proof eyelashes and mascara"
    },
    {
        id:6,
        item:"Product item6",
        oneline:"lipstick set",
        img:"images/6.jpg",
        product:"sugar",
        desc: "good looking"
    },
    {
        id:7,
        item:"Product item7",
        oneline:"lipliner ,eyeliner combo",
        img:"images/7.jpg",
        product:"dynamic",
        desc: "good looking"
    },
    {
        id:8,
        item:"Product item8",
        oneline:"Nailpolish",
        img:"images/8.jpg",
        product:"Lakme",
        desc: "good looking"
    },
    {
        id:9,
        item:"Product item9",
        oneline:"Nailpolishremover",
        img:"images/9.jpg",
        product:"sugar",
        desc: "removes the nailpolish"
    },
    {
        id:10,
        item:"Product item10",
        oneline:"eyebrowpencil",
        img:"images/10.png",
        product:"sugar",
        desc: "good looking"
    },
]

let currentmenu=0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentmenu);
});


const allMenu=() =>{
    let menu=makeupitems[currentmenu]
    item.textContent=menu.item;
    oneline.textContent=menu.oneline;
    img.src=menu.img;
    products.textContent=menu.products;
    desc.textContent=menu.desc;
}
//random
random.addEventListener('click',()=>{
    currentmenu=Math.floor(Math.random()*makeupitems.length)
    //console.log(currentmenu)
    allMenu(currentmenu);
})
//previous
prev.addEventListener('click',() =>{
      currentmenu--;
      if(currentmenu<0){
        currentmenu=makeupitems.length-1;
    
          }
          allMenu(currentmenu);
})
//next button
next.addEventListener('click',()=>{
    currentmenu++;
    if(currentmenu>makeupitems.length){
            currentmenu=0;
    }
   allMenu(currentmenu)
})

