!function(){var e=document.querySelector("year__btn"),r=document.querySelector("year__input"),t=document.querySelector("year__resoult");e.addEventListener("click",(function(){isNaN(r.value)||""===r.value?(t.innerHTML="ви гн ввели чесло",t.style.color="true"===localStorage.getItem("theme")?"#fff":"#000"):(t.innerHTML=r.value%4==0?"вии народились у високосний рік":"ви народились не у високосний рік",t.style.color=r.value%4==0?"red":"green",r.value="")}))}();
//# sourceMappingURL=index.3ecef735.js.map