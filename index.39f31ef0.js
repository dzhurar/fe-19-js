document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".gallery__card"),t=document.querySelector(".carousel__btn-left"),n=document.querySelector(".carousel__btn-right");let c=0;function l(t){e.forEach(((e,n)=>{e.classList.toggle("active",n===t)}))}t.addEventListener("click",(()=>{c=(c-1+e.length)%e.length,l(c)})),n.addEventListener("click",(()=>{c=(c+1)%e.length,l(c)})),l(c)}));
//# sourceMappingURL=index.39f31ef0.js.map