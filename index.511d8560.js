(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const a=document.querySelectorAll(".lista-botones button");function d(){a.forEach(t=>{t.classList.remove("bg-orange-500","text-white","ring-2","ring-white"),t.classList.add("bg-gray-700","text-gray-400","hover:bg-gray-500")})}function f(t){t.classList.remove("bg-gray-700","text-gray-400","hover:bg-gray-500"),t.classList.add("bg-orange-500","text-white","ring-2","ring-white")}a.forEach(t=>{t.addEventListener("click",()=>{d(),f(t)})});let n=0;const g=document.querySelectorAll(".lista-botones button"),m=document.querySelector(".boton-submit"),l=document.querySelector(".container"),i=document.querySelector("img");function y(t){n=t,console.log(n)}function h(t){i.src="/images/illustration-thank-you.svg",i.classList.add("object-contain","w-48","h-36","self-center"),l.innerHTML=`
      <p class="text-orange-500 w-3/5 rounded-full text-center bg-gray-700 self-center">You selected ${n} out of 5</p>
      <h1 class="text-white text-3xl text-center">Than you for your rating!
      </h1>
  `,l.insertAdjacentElement("afterbegin",i)}g.forEach((t,r)=>{t.addEventListener("click",()=>{y(r+1)})});m.addEventListener("click",()=>{n===0?alert("Please select a score"):h()});
