!function(){var t=document.querySelector(".time__calculator_input"),e=document.querySelector(".time__calculator_btn"),c=document.querySelector(".time__calculator_text");e.addEventListener("click",(function(){var e=t.value;if(!e||isNaN(e)||e<0)c.textContent="Будь ласка, введіть коректне число!";else{var o=parseInt(e,10),n=Math.floor(o/1440),a=Math.floor(o%1440/60),r=o%60;c.textContent="".concat(n," дн. ").concat(a," : ").concat(r)}}))}();
//# sourceMappingURL=index.536956da.js.map