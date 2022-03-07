"use strict";(()=>{var ie=Object.defineProperty;var o=(O,x)=>ie(O,"name",{value:x,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github_behaviors_check-all_ts-github_behaviors_details_ts-github_behaviors_filterable_ts-gith-2ae856"],{3238:(O,x,c)=>{c.d(x,{N:()=>h,x:()=>_});var y=c(2998);let p=null;(async function(){await y.x,l()})();function h(i){_(a(i))}o(h,"announceFromElement");function _(i){!p||(p.textContent="",p.textContent=i)}o(_,"announce");function l(){p=document.createElement("div"),p.setAttribute("aria-live","polite"),p.classList.add("sr-only"),document.body.append(p)}o(l,"createNoticeContainer");function a(i){return(i.getAttribute("aria-label")||i.innerText||"").trim()}o(a,"getTextContent")},16354:(O,x,c)=>{var y=c(30762),p=c(72822);(0,y.N7)(".js-check-all-container",{constructor:HTMLElement,subscribe:p.Z})},99481:(O,x,c)=>{c.d(x,{O4:()=>R,jo:()=>D,Qp:()=>P});var y=c(47789),p=c(11427);const h="ontransitionend"in window;function _(f,w){if(!h){w();return}const T=Array.from(f.querySelectorAll(".js-transitionable"));f.classList.contains("js-transitionable")&&T.push(f);for(const L of T){const I=l(L);L instanceof HTMLElement&&(L.addEventListener("transitionend",()=>{L.style.display="",L.style.visibility="",I&&a(L,function(){L.style.height=""})},{once:!0}),L.style.boxSizing="content-box",L.style.display="block",L.style.visibility="visible",I&&a(L,function(){L.style.height=getComputedStyle(L).height}),L.offsetHeight)}w();for(const L of T)if(L instanceof HTMLElement&&l(L)){const I=getComputedStyle(L).height;L.style.boxSizing="",I==="0px"?L.style.height=`${L.scrollHeight}px`:L.style.height="0px"}}o(_,"performTransition");function l(f){return getComputedStyle(f).transitionProperty==="height"}o(l,"isTransitioningHeight");function a(f,w){f.style.transition="none",w(),f.offsetHeight,f.style.transition=""}o(a,"withoutTransition");var i=c(84028);function n(f,w){w.find(T=>{const L=f.querySelectorAll(T),I=L[L.length-1];if(I&&document.activeElement!==I)return I.focus(),!0})}o(n,"findAndFocusByQuerySelector");function t(f){n(f,[".js-focus-on-dismiss","input[autofocus], textarea[autofocus]"])}o(t,"restoreAutofocus");function s(f){!f.classList.contains("tooltipped")||(f.classList.remove("tooltipped"),f.addEventListener("mouseleave",()=>{f.classList.add("tooltipped"),f.blur()},{once:!0}))}o(s,"hideTooltip");function u(f){return[...document.querySelectorAll(".js-details-container")].filter(w=>w.getAttribute("data-details-container-group")===f)}o(u,"groupMembers");function C(f){return[...f.querySelectorAll(".js-details-target")].filter(w=>w.closest(".js-details-container")===f)}o(C,"containerTargets");function S(f,w){const T=f.getAttribute("data-details-container-group");return T?((0,i.uQ)(f,()=>{for(const L of u(T))L!==f&&M(L,w)}),T):null}o(S,"toggleGroup");function M(f,w){f.classList.toggle("open",w),f.classList.toggle("Details--on",w);for(const T of C(f))T.setAttribute("aria-expanded",w.toString())}o(M,"updateOpenState");function P(f,w){var T,L;const I=f.getAttribute("data-details-container")||".js-details-container",$=f.closest(I),z=(T=w==null?void 0:w.force)!=null?T:!$.classList.contains("open"),V=(L=w==null?void 0:w.withGroup)!=null?L:!1;_($,()=>{M($,z);const r=V?S($,z):null;Promise.resolve().then(()=>{t($),s(f),$.dispatchEvent(new CustomEvent("details:toggled",{bubbles:!0,cancelable:!1,detail:{open:z}})),r&&$.dispatchEvent(new CustomEvent("details:toggled-group",{bubbles:!0,cancelable:!1,detail:{open:z,group:r}}))})})}o(P,"toggleDetailsTarget");function D(f){const w=f.getAttribute("data-details-container")||".js-details-container",L=f.closest(w).classList;return L.contains("Details--on")||L.contains("open")}o(D,"isDetailsTargetExpanded");function H(f){const w=f.altKey,T=f.currentTarget;P(T,{withGroup:w}),f.preventDefault()}o(H,"handleDetailsTargetClick"),(0,p.on)("click",".js-details-target",H),(0,y.Z)(function({target:f}){f&&R(f)});function R(f){let w=!1,T=f.parentElement;for(;T;)T.classList.contains("Details-content--shown")&&(w=!0),T.classList.contains("js-details-container")&&(T.classList.toggle("open",!w),T.classList.toggle("Details--on",!w),w=!1),T=T.parentElement}o(R,"ensureExpanded")},22303:(O,x,c)=>{var y=c(73650),p=c(11427),h=c(3238);function _(e,d,g,v={}){var m;const E=(m=v.limit)!=null?m:1/0;let k=0;for(const W of e.children){const A=g(W,d);A==null||(A&&k<E?(k++,l(W,!0)):l(W,!1))}return k}o(_,"filterList");function l(e,d){e.style.display=d?"":"none",e.hidden=!d}o(l,"toggle");var a=c(63370),i=c(29818);const n=new WeakMap;function t(e,d,g){const v=d.toLowerCase(),m=g.limit;let E=n.get(e);const k=e.querySelector('input[type="radio"]:checked'),W=Array.from(e.children);E||(E=Array.from(e.children),n.set(e,E));for(const U of W)e.removeChild(U),U instanceof HTMLElement&&(U.style.display="");const A=v?(0,i.W)(E,g.sortKey,a.qu):E,K=m==null?A:A.slice(0,m),F=K.length,B=document.createDocumentFragment();for(const U of K)B.appendChild(U);let N=!1;if(k instanceof HTMLInputElement)for(const U of B.querySelectorAll('input[type="radio"]:checked'))U instanceof HTMLInputElement&&U.value!==k.value&&(U.checked=!1,N=!0);e.appendChild(B),k&&N&&k.dispatchEvent(new Event("change",{bubbles:!0}));const X=e.querySelectorAll(".js-divider");for(const U of X)U.classList.toggle("d-none",Boolean(v&&v.trim().length>0));return F}o(t,"filterSortList");var s=c(46193),u=c(30762),C=c(79030);let S=new AbortController;const M=new WeakMap,P=new WeakMap,D=new WeakMap;async function H(e,d,g,v){g&&!M.has(e)&&w(e);const m=await R(e,d,g,v);return e.hasAttribute("data-filterable-data-pre-rendered")&&(m.suggestions=f(e,g)),m}o(H,"getData");async function R(e,d,g,v){const m=new URL(e.getAttribute("data-filterable-src")||"",window.location.origin);if(m.pathname==="/")throw new Error("could not get data-filterable-src");if(g){const E=M.get(e),k=d.trim();if(E.lastSearchText===k)return E.lastSearchResult;const W=E.lastSearchText===void 0;E.lastSearchText=k;const A=e.getAttribute("data-filterable-for")||"",K=document.getElementById(A);if(S.abort(),k===""&&!v)E.lastSearchResult={suggestions:[],users:[]};else{S=new AbortController;const F={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"},signal:S.signal},B=m.searchParams||new URLSearchParams;B.set("q",d),B.set("typeAhead","true"),m.search=B.toString(),W||K==null||K.classList.add("is-loading");const N=await fetch(m.toString(),F);E.lastSearchResult=await N.json()}return K==null||K.classList.remove("is-loading"),E.lastSearchResult}else{const E={headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}};return await(await fetch(m.toString(),E)).json()}}o(R,"fetchQueryIfNeeded");function f(e,d){const g=[],v=e.querySelectorAll(".js-filterable-suggested-user");if(v.length>0)for(const m of e.querySelectorAll(".js-filterable-suggested-user"))m.classList.remove("js-filterable-suggested-user"),g.push({name:m.querySelector(".js-description").textContent,login:m.querySelector(".js-username").textContent,selected:m.getAttribute("aria-checked")==="true",element:m,suggestion:!0});if(d){const m=M.get(e);return v.length>0&&(m.cachedSuggestions=g,m.userResultCache.clear()),m.cachedSuggestions}return g}o(f,"getPreRenderedUsers");function w(e){M.set(e,{lastSearchResult:{suggestions:[],users:[]},cachedSuggestions:[],userResultCache:new Map})}o(w,"initializeTypeAheadCache");async function T(e,d,g){var v,m;D.set(e,d),await(0,C.Z)();const E=e.hasAttribute("data-filterable-show-suggestion-header"),k=e.hasAttribute("data-filterable-type-ahead"),W=e.hasAttribute("data-filterable-type-ahead-query-on-empty");let A=P.get(e);if(!A)try{A=await H(e,d,k,W),k||P.set(e,A)}catch(j){if(j.name==="AbortError")return-1;throw j}if(!k&&D.get(e)!==d)return-1;const K=g.limit,F=e.querySelector("template"),B={};for(const j of e.querySelectorAll("input[type=hidden]"))B[`${j.name}${j.value}`]=j;let N=F.nextElementSibling;for(;N;){const j=N;N=j.nextElementSibling,j instanceof HTMLElement&&(k||j.getAttribute("aria-checked")==="true"||j.classList.contains("select-menu-divider"))?j.hidden=!0:j.remove()}let X=0;const U=d.trim()==="",G=document.createDocumentFragment(),Z=e.querySelector(".js-divider-suggestions"),J=e.querySelector(".js-divider-rest"),oe=M.get(e);function Y(j){const te=`${j.login} ${j.name}`.toLowerCase().trim().includes(d),Q=!(K!=null&&X>=K)&&te;if(Q||j.selected||j.suggestion){const q=L(j,F,B,oe);q.hidden=!Q,Q&&X++,G.appendChild(q)}}o(Y,"addItem");let ee=!1;if(Z&&(((v=A.suggestions)==null?void 0:v.length)>0||E&&A.users.length>0)){const j=(m=A.suggestions)!=null?m:[],te=j.filter(q=>q.selected),Q=j.filter(q=>!q.selected);for(const q of te)Y(q);G.appendChild(Z);const ne=X;for(const q of Q)Y(q);ee=X>ne,Z.hidden=!ee||k&&!U,E&&A.users.length>0&&(Z.hidden=!U)}J&&G.appendChild(J);const se=X;for(const j of A.users)Y(j);return J&&(J.hidden=se===X||!ee),e.append(G),X}o(T,"substringMemoryFilterList");function L(e,d,g,v){if(e.element!=null)return e.element;if(v==null?void 0:v.userResultCache.has(e.id))return v.userResultCache.get(e.id);const m=d.content.cloneNode(!0),E=m.querySelector("input[type=checkbox], input[type=radio]");e.type&&(E.name=`reviewer_${e.type}_ids[]`),E.value=e.id;const k=`${E.name}${e.id}`;let W=e.selected;g[k]&&(W=!0,g[k].remove(),delete g[k]);const A=m.querySelector("[role^=menuitem]");W&&(A.setAttribute("aria-checked","true"),E.checked=!0),e.disabled&&A.setAttribute("aria-disabled","true");const K=m.querySelector(".js-username");K&&(K.textContent=e.login);const F=m.querySelector(".js-description");F&&(F.textContent=e.name);const B=m.querySelector(".js-extended-description");B&&(e.description?B.textContent=e.description:B.remove());const N=m.querySelector(".js-avatar");return N.className=`${N.className} ${e.class}`,N.src=e.avatar,e.element=A,v==null||v.userResultCache.set(e.id,A),e.element}o(L,"createReviewerItem"),(0,u.N7)(".js-filterable-field",{constructor:HTMLInputElement,initialize(e){e.autocomplete||(e.autocomplete="off");const d=e.hasAttribute("type-ahead")?200:null;let g=e.value;async function v(E){g!==E.value&&(g=E.value,await(0,s.gJ)(),(0,p.f)(E,"filterable:change"))}o(v,"onInputChange");async function m(){g=e.value,await(0,s.gJ)(),(0,p.f)(e,"filterable:change")}return o(m,"onFocus"),{add(E){E.addEventListener("focus",m),(0,y.oq)(E,v,{wait:d}),document.activeElement===E&&m()},remove(E){E.removeEventListener("focus",m),(0,y.iU)(E,v)}}}}),(0,p.on)("filterable:change",".js-filterable-field",async function(e){const d=e.currentTarget,g=d.value.trim().toLowerCase(),v=document.querySelectorAll(`[data-filterable-for="${d.id}"]`);for(const m of v){const E=await $(m,g);if(E===-1)return;document.activeElement&&d===document.activeElement&&(0,h.x)(`${E} results found.`),m.dispatchEvent(new CustomEvent("filterable:change",{bubbles:!0,cancelable:!1,detail:{inputField:d}}))}});function I(e){return e.hasAttribute("data-filter-value")?e.getAttribute("data-filter-value").toLowerCase().trim():e.textContent.toLowerCase().trim()}o(I,"defaultText");async function $(e,d){const g=parseInt(e.getAttribute("data-filterable-limit"),10)||null;let v=0;switch(e.getAttribute("data-filterable-type")){case"fuzzy":{const m=d.toLowerCase();v=t(e,d,{limit:g,sortKey:o(k=>{const W=I(k),A=(0,a.EW)(W,m);return A>0?{score:A,text:W}:null},"sortKey")});break}case"substring":v=_(e,d.toLowerCase(),V,{limit:g});break;case"substring-memory":v=await T(e,d,{limit:g});break;default:v=_(e,d.toLowerCase(),z,{limit:g});break}return e.classList.toggle("filterable-active",d.length>0),e.classList.toggle("filterable-empty",v===0),v}o($,"filter");function z(e,d){return e.textContent.toLowerCase().trim().startsWith(d)}o(z,"prefix");function V(e,d){return e.hasAttribute("data-skip-substring-filter")||e.classList.contains("select-menu-no-results")?null:(e.querySelector("[data-filterable-item-text]")||e).textContent.toLowerCase().trim().includes(d)}o(V,"substring"),(0,p.on)("filterable:change","details-menu .select-menu-list",function(e){const d=e.currentTarget,g=d.querySelector(".js-new-item-form");g&&r(d,g,e.detail.inputField.value)});function r(e,d,g){const v=g.length>0&&!b(e,g);if(e.classList.toggle("is-showing-new-item-form",v),!v)return;d.querySelector(".js-new-item-name").textContent=g;const m=d.querySelector(".js-new-item-value");(m instanceof HTMLInputElement||m instanceof HTMLButtonElement)&&(m.value=g)}o(r,"toggleForm");function b(e,d){for(const g of e.querySelectorAll("[data-menu-button-text]"))if(g.textContent.toLowerCase().trim()===d.toLowerCase())return!0;return!1}o(b,"itemExists"),(0,u.N7)("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty",{add(e){e.closest(".select-menu-list").classList.add("filterable-empty")},remove(e){e.closest(".select-menu-list").classList.remove("filterable-empty")}})},16172:(O,x,c)=>{var y=c(11427);(0,y.on)("click",".js-flash-close",function(p){const h=p.currentTarget.closest(".flash-messages");p.currentTarget.closest(".flash").remove(),h&&!h.querySelector(".flash")&&h.remove()})},47789:(O,x,c)=>{c.d(x,{Z:()=>_});var y=c(2998);const p=[];let h=0;function _(t){(async function(){p.push(t),await y.x,l()})()}o(_,"hashChange"),_.clear=()=>{p.length=h=0};function l(){const t=h;h=p.length,a(p.slice(t),null,window.location.href)}o(l,"runRemainingHandlers");function a(t,s,u){const C=window.location.hash.slice(1),S=C?document.getElementById(C):null,M={oldURL:s,newURL:u,target:S};for(const P of t)P.call(null,M)}o(a,"runHandlers");let i=window.location.href;window.addEventListener("popstate",function(){i=window.location.href}),window.addEventListener("hashchange",function(t){const s=window.location.href;try{a(p,t.oldURL||i,s)}finally{i=s}});let n=null;document.addEventListener("pjax:start",function(){n=window.location.href}),document.addEventListener("pjax:end",function(){a(p,n,window.location.href)})},57147:(O,x,c)=>{c.d(x,{h:()=>p});var y=c(11427);(0,y.on)("click",".js-skip-to-content",function(n){const t=document.getElementById("start-of-content");if(t){const s=t.nextElementSibling;s instanceof HTMLElement&&(s.setAttribute("tabindex","-1"),s.setAttribute("data-skipped-to-content","1"),s.focus())}n.preventDefault()});function p(){let n=!1;const t=document.getElementById("start-of-content");if(t){const s=t.nextElementSibling;if(s instanceof HTMLElement)return n=s.getAttribute("data-skipped-to-content")==="1",n&&s.removeAttribute("data-skipped-to-content"),n}}o(p,"hasSkippedToContent");const h="ontouchstart"in document;function _(){return window.innerWidth>1012}o(_,"compatibleDesktop");for(const n of document.querySelectorAll(".HeaderMenu-details"))n.addEventListener("toggle",a),h||(n.addEventListener("mouseover",i),n.addEventListener("mouseleave",i));let l=!1;function a(n){if(!l){l=!0;for(const t of document.querySelectorAll(".HeaderMenu-details"))t!==n.currentTarget&&t.removeAttribute("open");setTimeout(()=>l=!1)}}o(a,"onMenuToggle");function i(n){const{currentTarget:t}=n;!(t instanceof HTMLElement)||!_()||(n.type==="mouseover"&&n instanceof MouseEvent?n.target instanceof Node&&n.relatedTarget instanceof Node&&t.contains(n.target)&&!t.contains(n.relatedTarget)&&t.setAttribute("open",""):t.removeAttribute("open"))}o(i,"onMenuHover")},89400:(O,x,c)=>{var y=c(83895),p=c(13178),h=c(30762);(0,h.N7)("[data-hotkey]",{constructor:HTMLElement,add(l){if((0,y.Ty)())(0,p.N9)(l);else{const a=l.getAttribute("data-hotkey");if(a){const i=_(a);i.length>0&&(l.setAttribute("data-hotkey",i),(0,p.N9)(l))}}},remove(l){(0,p.Tz)(l)}});function _(l){return l.split(",").filter(i=>(0,y.YE)(i)).join(",")}o(_,"filterOutCharacterKeyShortcuts")},49602:(O,x,c)=>{function y(l){const a=l.createElement("textarea");return a.style.position="fixed",a.style.top="0",a.style.left="0",a.style.opacity="0",l.body.appendChild(a),a.focus(),()=>(a.blur(),a.remove(),a.value)}o(y,"captureKeypresses");var p=c(65889),h=c(11427);let _=null;(0,h.on)("pjax:click",".js-pjax-capture-input",function(){_=y(document)}),(0,h.on)("pjax:end","#js-repo-pjax-container",function(){if(_){const l=_(),a=document.querySelector(".js-pjax-restore-captured-input");a instanceof HTMLInputElement&&l&&(0,p.Se)(a,l),_=null}})},27525:(O,x,c)=>{var y=c(68842),p=c(11427);(0,p.on)("pjax:click",".js-pjax-history-navigate",function(h){h.currentTarget instanceof HTMLAnchorElement&&(h.currentTarget.href===(0,y._C)()?(history.back(),h.detail.relatedEvent.preventDefault(),h.preventDefault()):h.currentTarget.href===(0,y.Mw)()&&(history.forward(),h.detail.relatedEvent.preventDefault(),h.preventDefault()))})},46547:(O,x,c)=>{var y=c(14448),p=c(30762);function h(l){if(l.id)return`#${l.id}`;throw new Error("pjax container has no id")}o(h,"getContainerSelector");function _(l,a){const i=(0,y.W)(l),n=h(i),t=new URL(l.href,window.location.origin),s=new URLSearchParams(t.search.slice(1));return t.search=s.toString(),fetch(t.href,{headers:Object.assign({Accept:"text/html","X-PJAX":"true","X-PJAX-Container":n,"X-Requested-With":"XMLHttpRequest"},a&&a.headers)})}o(_,"pjaxFetch"),(0,p.N7)("[data-pjax-container] link[rel=pjax-prefetch]",{constructor:HTMLLinkElement,initialize(l){_(l,{headers:{Purpose:"prefetch"}})}})},14448:(O,x,c)=>{c.d(x,{r:()=>y,W:()=>p});function y(h){return h.getAttribute("data-pjax-preserve-scroll")!=null?!1:0}o(y,"preserveScrollTo");function p(h){let _=h;for(;_;){const l=_.getAttribute("data-pjax");if(l&&l!=="true")return document.querySelector(l);_=_.parentElement&&_.parentElement.closest("[data-pjax]")}return h.closest("[data-pjax-container]")}o(p,"detectContainer")},21127:(O,x,c)=>{var y=c(67647),p=c(11427);(0,p.on)("click",".js-smoothscroll-anchor",function(h){const _=h.currentTarget;if(!(_ instanceof HTMLAnchorElement))return;const l=(0,y.Kt)(document,_.hash);!l||(l.scrollIntoView({behavior:"smooth"}),h.preventDefault())})},1868:(O,x,c)=>{c.d(x,{H:()=>s});var y=c(57147),p=c(2998),h=c(30762);let _=!1,l=0;const a=[];function i(){a.length?n():t()}o(i,"manageObservers");function n(){_||(window.addEventListener("resize",u),document.addEventListener("scroll",u),_=!0)}o(n,"addObservers");function t(){window.removeEventListener("resize",u),document.removeEventListener("scroll",u),_=!1}o(t,"removeObservers");function s(){C(!0)}o(s,"forceStickyRelayout");function u(){C()}o(u,"checkElementsForStickingHandler");function C(r=!1){for(const b of a)if(b.element.offsetHeight>0){const{element:e,placeholder:d,top:g}=b,v=e.getBoundingClientRect();if(d){const m=d.getBoundingClientRect();e.classList.contains("is-stuck")?m.top>z(e,g)?P(b):D(b):v.top<=z(e,g)?M(b):r&&D(b)}else v.top-z(e,g)<.1?M(b):P(b)}}o(C,"checkElementsForSticking");function S(r){const{position:b}=window.getComputedStyle(r);return/sticky/.test(b)}o(S,"browserHasSticky");function M({element:r,placeholder:b,top:e}){if(b){const d=r.getBoundingClientRect();V(r,z(r,e)),r.style.left=`${d.left}px`,r.style.width=`${d.width}px`,r.style.marginTop="0",r.style.position="fixed",b.style.display="block"}r.classList.add("is-stuck")}o(M,"pinSet");function P({element:r,placeholder:b}){b&&(r.style.position="static",r.style.marginTop=b.style.marginTop,b.style.display="none"),r.classList.remove("is-stuck")}o(P,"unpinSet");function D({element:r,placeholder:b,offsetParent:e,top:d}){if(b&&!(0,y.h)()){const g=r.getBoundingClientRect(),v=b.getBoundingClientRect();if(V(r,z(r,d)),r.style.left=`${v.left}px`,r.style.width=`${v.width}px`,e){const m=e.getBoundingClientRect();m.bottom<g.height+parseInt(String(d))&&(r.style.top=`${m.bottom-g.height}px`)}}}o(D,"updatePinnedSet");function H(r){if(S(r))return null;const b=r.previousElementSibling;if(b&&b.classList.contains("is-placeholder"))return b;const e=document.createElement("div");return e.style.visibility="hidden",e.style.display="none",e.style.height=window.getComputedStyle(r).height,e.className=r.className,e.classList.remove("js-sticky"),e.classList.add("is-placeholder"),r.parentNode.insertBefore(e,r)}o(H,"findOrCreatePlaceholder");function R(r){const b=H(r),e=window.getComputedStyle(r).position;r.style.position="static";const d=r.offsetParent;r.style.position="fixed";const g=$(r),v={element:r,placeholder:b,offsetParent:d,top:g==="auto"?0:parseInt(g||"0")};r.style.position=e,a.push(v)}o(R,"createSet");function f(r){const b=a.map(e=>e.element).indexOf(r);a.splice(b,1)}o(f,"removeSet");async function w(r){await p.C,R(r),C(),i()}o(w,"initializeSet"),(0,h.N7)(".js-sticky",{constructor:HTMLElement,add(r){w(r)},remove(r){f(r),i()}}),(0,h.N7)(".js-notification-top-shelf",{constructor:HTMLElement,add(r){T(r)},remove(){for(const r of document.querySelectorAll(".js-notification-top-shelf"))r.remove();l>0&&(l=0,L(),s())}}),(0,h.N7)(".js-notification-shelf-offset-top, .js-position-sticky",{constructor:HTMLElement,add:I});async function T(r){if(r.offsetParent===null)return;await p.C;const b=Math.floor(r.getBoundingClientRect().height);b>0&&(l=b,L(),s())}o(T,"initializeNotificationShelf");function L(){for(const r of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top"))I(r)}o(L,"updateTopOffsets");function I(r){if(r.classList.contains("js-notification-top-shelf"))return;const b=parseInt($(r))||0;V(r,b+l)}o(I,"updateTopOffset");function $(r){const b=r.getAttribute("data-original-top");if(b!=null)return b;const e=window.getComputedStyle(r).top;return r.setAttribute("data-original-top",e),e}o($,"getOriginalTop");function z(r,b){return r.classList.contains("js-notification-top-shelf")?b:b+l}o(z,"withShelfOffset");function V(r,b){r.style.setProperty("top",`${b}px`,"important")}o(V,"setTopImportant")},68559:(O,x,c)=>{c.d(x,{cv:()=>y,VZ:()=>p,_C:()=>h,oE:()=>_});function y(i){const n=i.getBoundingClientRect();return{top:n.top+window.pageYOffset,left:n.left+window.pageXOffset}}o(y,"offset");function p(i){let n=i;const t=n.ownerDocument;if(!t||!n.offsetParent)return;const s=t.defaultView.HTMLElement;if(n!==t.body){for(;n!==t.body;){if(n.parentElement instanceof s)n=n.parentElement;else return;const{position:u,overflowY:C,overflowX:S}=getComputedStyle(n);if(u==="fixed"||C==="auto"||S==="auto"||C==="scroll"||S==="scroll")break}return n instanceof Document?null:n}}o(p,"overflowParent");function h(i,n){let t=n;const s=i.ownerDocument;if(!s)return;const u=s.documentElement;if(!u||i===u)return;const C=_(i,t);if(!C)return;t=C._container;const S=t===s.documentElement&&s.defaultView?{top:s.defaultView.pageYOffset,left:s.defaultView.pageXOffset}:{top:t.scrollTop,left:t.scrollLeft},M=C.top-S.top,P=C.left-S.left,D=t.clientHeight,H=t.clientWidth,R=D-(M+i.offsetHeight),f=H-(P+i.offsetWidth);return{top:M,left:P,bottom:R,right:f,height:D,width:H}}o(h,"overflowOffset");function _(i,n){let t=i;const s=t.ownerDocument;if(!s)return;const u=s.documentElement;if(!u)return;const C=s.defaultView.HTMLElement;let S=0,M=0;const P=t.offsetHeight,D=t.offsetWidth;for(;!(t===s.body||t===n);)if(S+=t.offsetTop||0,M+=t.offsetLeft||0,t.offsetParent instanceof C)t=t.offsetParent;else return;let H,R,f;if(!n||n===s||n===s.defaultView||n===s.documentElement||n===s.body)f=u,H=l(s.body,u),R=a(s.body,u);else if(n instanceof C)f=n,H=n.scrollHeight,R=n.scrollWidth;else return;const w=H-(S+P),T=R-(M+D);return{top:S,left:M,bottom:w,right:T,_container:f}}o(_,"positionedOffset");function l(i,n){return Math.max(i.scrollHeight,n.scrollHeight,i.offsetHeight,n.offsetHeight,n.clientHeight)}o(l,"getDocumentHeight");function a(i,n){return Math.max(i.scrollWidth,n.scrollWidth,i.offsetWidth,n.offsetWidth,n.clientWidth)}o(a,"getDocumentWidth")},46193:(O,x,c)=>{c.d(x,{gJ:()=>y,rs:()=>p,Dc:()=>_,g:()=>a});function y(){return Promise.resolve()}o(y,"microtask");function p(){return new Promise(window.requestAnimationFrame)}o(p,"animationFrame");async function h(i,n){let t;const s=new Promise((u,C)=>{t=self.setTimeout(()=>C(new Error("timeout")),i)});if(!n)return s;try{await Promise.race([s,l(n)])}catch(u){throw self.clearTimeout(t),u}}o(h,"timeout");async function _(i,n){let t;const s=new Promise(u=>{t=self.setTimeout(u,i)});if(!n)return s;try{await Promise.race([s,l(n)])}catch(u){throw self.clearTimeout(t),u}}o(_,"wait");function l(i){return new Promise((n,t)=>{const s=new Error("aborted");s.name="AbortError",i.aborted?t(s):i.addEventListener("abort",()=>t(s))})}o(l,"whenAborted");function a(i){const n=[];return function(t){n.push(t),n.length===1&&queueMicrotask(()=>{const s=[...n];n.length=0,i(s)})}}o(a,"taskQueue")},29818:(O,x,c)=>{c.d(x,{W:()=>p});function*y(h,_){for(const l of h){const a=_(l);a!=null&&(yield a)}}o(y,"filterMap");function p(h,_,l){return[...y(h,o(i=>{const n=_(i);return n!=null?[i,n]:null},"sortKey"))].sort((i,n)=>l(i[1],n[1])).map(([i])=>i)}o(p,"filterSort")},63370:(O,x,c)=>{c.d(x,{EW:()=>y,Qw:()=>h,qu:()=>l});function y(a,i){let n=_(a,i);if(n&&i.indexOf("/")===-1){const t=a.substring(a.lastIndexOf("/")+1);n+=_(t,i)}return n}o(y,"fuzzyScore");function p(a){const i=a.toLowerCase().split("");let n="";for(let t=0;t<i.length;t++){const u=i[t].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");t===0?n+=`(.*)(${u})`:n+=`([^${u}]*?)(${u})`}return new RegExp(`${n}(.*?)$`,"i")}o(p,"fuzzyRegexp");function h(a,i,n){if(i){const t=a.innerHTML.trim().match(n||p(i));if(!t)return;let s=!1;const u=[];for(let C=1;C<t.length;++C){const S=t[C];!S||(C%2===0?s||(u.push("<mark>"),s=!0):s&&(u.push("</mark>"),s=!1),u.push(S))}a.innerHTML=u.join("")}else{const t=a.innerHTML.trim(),s=t.replace(/<\/?mark>/g,"");t!==s&&(a.innerHTML=s)}}o(h,"fuzzyHighlightElement");function _(a,i){let n=a;if(n===i)return 1;const t=n.length;let s=0,u=0;for(let P=0;P<i.length;P++){const D=i[P],H=n.indexOf(D.toLowerCase()),R=n.indexOf(D.toUpperCase()),f=Math.min(H,R),w=f>-1?f:Math.max(H,R);if(w===-1)return 0;s+=.1,n[w]===D&&(s+=.1),w===0&&(s+=.8,P===0&&(u=1)),n.charAt(w-1)===" "&&(s+=.8),n=n.substring(w+1,t)}const C=i.length,S=s/C;let M=(S*(C/t)+S)/2;return u&&M+.1<1&&(M+=.1),M}o(_,"stringScore");function l(a,i){return a.score>i.score?-1:a.score<i.score?1:a.text<i.text?-1:a.text>i.text?1:0}o(l,"compare")},73650:(O,x,c)=>{c.d(x,{oq:()=>a,iU:()=>i,dY:()=>n});const y=new WeakMap;function p(t){const s=y.get(t);!s||(s.timer!=null&&clearTimeout(s.timer),s.timer=window.setTimeout(()=>{s.timer!=null&&(s.timer=null),s.inputed=!1,s.listener.call(null,t)},s.wait))}o(p,"schedule");function h(t){const s=t.currentTarget,u=y.get(s);!u||(u.keypressed=!0,u.timer!=null&&clearTimeout(u.timer))}o(h,"onKeydownInput");function _(t){const s=t.currentTarget,u=y.get(s);!u||(u.keypressed=!1,u.inputed&&p(s))}o(_,"onKeyupInput");function l(t){const s=t.currentTarget,u=y.get(s);!u||(u.inputed=!0,u.keypressed||p(s))}o(l,"onInputInput");function a(t,s,u={wait:null}){y.set(t,{keypressed:!1,inputed:!1,timer:void 0,listener:s,wait:u.wait!=null?u.wait:100}),t.addEventListener("keydown",h),t.addEventListener("keyup",_),t.addEventListener("input",l)}o(a,"addThrottledInputEventListener");function i(t,s){t.removeEventListener("keydown",h),t.removeEventListener("keyup",_),t.removeEventListener("input",l);const u=y.get(t);u&&(u.timer!=null&&u.listener===s&&clearTimeout(u.timer),y.delete(t))}o(i,"removeThrottledInputEventListener");function n(t){const s=y.get(t);s&&s.listener.call(null,t)}o(n,"dispatchThrottledInputEvent")},44088:(O,x,c)=>{c.d(x,{Z:()=>p});function y(h){return h.offsetWidth<=0&&h.offsetHeight<=0}o(y,"hidden");function p(h){return!y(h)}o(p,"visible")}}]);})();

//# sourceMappingURL=github_behaviors_check-all_ts-github_behaviors_details_ts-github_behaviors_filterable_ts-gith-2ae856-75a843a62f1b1d07867972d96660933a06664c920898bf054e92e69c39237cf8f474f9bf11f844ebf9bd13604fc737ce2c88567a77c20a62c3dbbc6922778025.js.map