import{d as j,r as L,a as v,w as P,b as O,e as f,f as i,g as _,v as w,F as h,i as y,j as S,u as x,o as g,t as M,k as A}from"./@vue-11dfae10.js";import{V as C}from"./vue3-ace-editor-8b66b410.js";import{a as t,m as J,b as T,c as R,d as B,e as V,f as D,g as N,h as q,t as H,i as $,j as I,k as F,l as K,n as W,w as Y,o as z,p as G,q as Q,r as X,s as Z,u as ee,v as te,x as oe,y as re,z as se,A as ne,B as ae}from"./ace-builds-75329b35.js";import"./resize-observer-polyfill-0f9f8adb.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();const le="modulepreload",ie=function(d,l){return new URL(d,l).href},k={},U=function(l,u,a){if(!u||u.length===0)return l();const e=document.getElementsByTagName("link");return Promise.all(u.map(o=>{if(o=ie(o,a),o in k)return;k[o]=!0;const n=o.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(!!a)for(let r=e.length-1;r>=0;r--){const p=e[r];if(p.href===o&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":le,n||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),n)return new Promise((r,p)=>{s.addEventListener("load",r),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>l()).catch(o=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o})};t.config.setModuleUrl("ace/mode/json",J);t.config.setModuleUrl("ace/mode/javascript",T);t.config.setModuleUrl("ace/mode/html",R);t.config.setModuleUrl("ace/mode/yaml",B);t.config.setModuleUrl("ace/mode/python",V);t.config.setModuleUrl("ace/mode/java",D);t.config.setModuleUrl("ace/mode/kotlin",N);t.config.setModuleUrl("ace/mode/c_cpp",q);t.config.setModuleUrl("ace/theme/github",H);t.config.setModuleUrl("ace/theme/chrome",$);t.config.setModuleUrl("ace/theme/monokai",I);t.config.setModuleUrl("ace/theme/dracula",F);t.config.setModuleUrl("ace/theme/twilight",K);t.config.setModuleUrl("ace/theme/tomorrow_night",W);t.config.setModuleUrl("ace/mode/base",Y);t.config.setModuleUrl("ace/mode/json_worker",z);t.config.setModuleUrl("ace/mode/javascript_worker",G);t.config.setModuleUrl("ace/mode/html_worker",Q);t.config.setModuleUrl("ace/mode/yaml_worker",X);t.config.setModuleUrl("ace/snippets/html",Z);t.config.setModuleUrl("ace/snippets/javascript",ee);t.config.setModuleUrl("ace/snippets/javascript",te);t.config.setModuleUrl("ace/snippets/json",oe);t.config.setModuleUrl("ace/snippets/python",re);t.config.setModuleUrl("ace/snippets/java",se);t.config.setModuleUrl("ace/snippets/kotlin",ne);t.config.setModuleUrl("ace/snippets/c_cpp",ae);t.require("ace/ext/language_tools");const ce=["value"],ue=["value"],pe=["innerHTML"],de=j({__name:"App",setup(d){const l=["java","python","JavaScript"],u=["github","chrome","monokai","dracula","twilight","tomorrow_night"],a=L(""),e=v({lang:"python",theme:"tomorrow_night",content:""});P(()=>e.lang,async c=>{e.content=(await{java:U(()=>import("./default_java-26455a20.js"),[],import.meta.url),python:U(()=>import("./default_python-ef74213d.js"),[],import.meta.url),JavaScript:U(()=>import("./default_javascript-c0799e13.js"),[],import.meta.url)}[c]).default,a.value=""},{immediate:!0});const o=async()=>{try{const c={language:e.lang,code:e.content},s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},r=await fetch("https://orchestrated-microservice-hvqffcpyoq-uc.a.run.app/execute",s);if(r.ok){let E=(await r.json()).output.split(`
`).map(b=>`~code ]> ${b}`).join(`
`);a.value=E}else{const p=await r.text();throw new Error(p)}}catch(c){console.error("Error:",c),a.value=c.message}},n=O(()=>a.value?a.value.replace(/ {2}/g,"&nbsp;").replace(/~code ]>/g,'<span class="prefix">🐦[~code]></span>').replace(/\n/g,"<br />"):""),m=v({useWorker:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,fontSize:"18px"});return(c,s)=>(g(),f(h,null,[i("header",null,[_(i("select",{"onUpdate:modelValue":s[0]||(s[0]=r=>e.lang=r),class:"dropdown"},[(g(),f(h,null,y(l,r=>i("option",{value:r},M(r),9,ce)),64))],512),[[w,e.lang]]),_(i("select",{"onUpdate:modelValue":s[1]||(s[1]=r=>e.theme=r),class:"dropdown"},[(g(),f(h,null,y(u,r=>i("option",{value:r},M(r),9,ue)),64))],512),[[w,e.theme]]),i("button",{onClick:s[2]||(s[2]=r=>e.content=""),class:"dropdown"},"Limpiar"),i("button",{onClick:o,class:"execute-button"},"Ejecutar")]),i("main",null,[S(x(C),{ref:"aceRef",value:e.content,"onUpdate:value":s[3]||(s[3]=r=>e.content=r),class:"vue-ace-editor",lang:e.lang,theme:e.theme,options:m},null,8,["value","lang","theme","options"]),i("div",{class:"result-panel",innerHTML:n.value},null,8,pe)])],64))}});A(de).mount("#app");
