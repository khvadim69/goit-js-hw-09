const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");e.addEventListener("click",r);let o=null;function r(){o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o&&e.removeEventListener("click",r)}n.addEventListener("click",(()=>{clearInterval(o),e.addEventListener("click",r)}));
//# sourceMappingURL=01-color-switcher.8495b3e5.js.map