import{i as a,S as c}from"./assets/vendor-9e112560.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d="https://pixabay.com/api/",u="43029074-bbcb488b86e9977f1b5ed3d25",f=document.querySelector(".loader-container");function p(s){return fetch(`${d}?key=${u}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>e.json()).then(e=>e).catch(e=>{a.error({message:e.message,backgroundColor:"#FC3D03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),console.log(e),f.classList.add("hidden")})}function g(s){return s.map(e=>`
      <li>
      <a href="${e.largeImageURL}" alt="${e.tags}">
      <img width="300" src="${e.webformatURL}" alt="${e.tags}"/>
      <ul class="gallery__description-list gallery-description-list">
         <li class="gallery-description-list__item">
           <h3>Likes</h3>
           <p>${e.likes}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Views</h3>
           <p>${e.views}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Comments</h3>
           <p>${e.comments}</p>
         </li>
         <li class="gallery-description-list__item">
           <h3>Downloads</h3>
           <p>${e.downloads}</p>
         </li>
       </ul>

      </a>
    
      </li>
      `).join("")}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".loader-container")};let h=new c(".gallery a",{captions:!0,captionsData:"alt"});o.form.addEventListener("submit",m);function m(s){s.preventDefault(),o.spinner.classList.remove("hidden"),p(s.target.elements.request.value).then(e=>{if(e.hits.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#FC3D03",messageColor:"#fff",close:!1,progressBarColor:"#fff",position:"topRight",timeout:1e3}),o.spinner.classList.add("hidden"),s.target.reset();return}o.gallery.innerHTML="",o.gallery.insertAdjacentHTML("afterbegin",g(e.hits)),h.refresh(),o.spinner.classList.add("hidden"),s.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
