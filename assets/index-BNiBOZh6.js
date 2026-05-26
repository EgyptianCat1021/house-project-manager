(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lo(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Bn=[],It=()=>{},hc=()=>!1,Hs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vs=t=>t.startsWith("onUpdate:"),De=Object.assign,co=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rf=Object.prototype.hasOwnProperty,pe=(t,e)=>rf.call(t,e),te=Array.isArray,Hn=t=>Vi(t)==="[object Map]",fc=t=>Vi(t)==="[object Set]",Fa=t=>Vi(t)==="[object Date]",ie=t=>typeof t=="function",Re=t=>typeof t=="string",At=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",dc=t=>(ve(t)||ie(t))&&ie(t.then)&&ie(t.catch),pc=Object.prototype.toString,Vi=t=>pc.call(t),of=t=>Vi(t).slice(8,-1),gc=t=>Vi(t)==="[object Object]",uo=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$s=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},af=/-\w/g,ht=$s(t=>t.replace(af,e=>e.slice(1).toUpperCase())),lf=/\B([A-Z])/g,On=$s(t=>t.replace(lf,"-$1").toLowerCase()),mc=$s(t=>t.charAt(0).toUpperCase()+t.slice(1)),vr=$s(t=>t?`on${mc(t)}`:""),wt=(t,e)=>!Object.is(t,e),_r=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vc=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},cf=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ja;const Gs=()=>ja||(ja=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ho(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Re(i)?df(i):ho(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Re(t)||ve(t))return t}const uf=/;(?![^(]*\))/g,hf=/:([^]+)/,ff=/\/\*[^]*?\*\//g;function df(t){const e={};return t.replace(ff,"").split(uf).forEach(n=>{if(n){const i=n.split(hf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fo(t){let e="";if(Re(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=fo(t[n]);i&&(e+=i+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gf=lo(pf);function _c(t){return!!t||t===""}function mf(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=po(t[i],e[i]);return n}function po(t,e){if(t===e)return!0;let n=Fa(t),i=Fa(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=At(t),i=At(e),n||i)return t===e;if(n=te(t),i=te(e),n||i)return n&&i?mf(t,e):!1;if(n=ve(t),i=ve(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const l in t){const u=t.hasOwnProperty(l),h=e.hasOwnProperty(l);if(u&&!h||!u&&h||!po(t[l],e[l]))return!1}}return String(t)===String(e)}const yc=t=>!!(t&&t.__v_isRef===!0),Vn=t=>Re(t)?t:t==null?"":te(t)||ve(t)&&(t.toString===pc||!ie(t.toString))?yc(t)?Vn(t.value):JSON.stringify(t,wc,2):String(t),wc=(t,e)=>yc(e)?wc(t,e.value):Hn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[yr(i,o)+" =>"]=r,n),{})}:fc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yr(n))}:At(e)?yr(e):ve(e)&&!te(e)&&!gc(e)?String(e):e,yr=(t,e="")=>{var n;return At(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class Ec{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ke&&(ke.active?(this.parent=ke,this.index=(ke.scopes||(ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ke;try{return ke=this,e()}finally{ke=n}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){if(this._on>0&&--this._on===0){if(ke===this)ke=this.prevScope;else{let e=ke;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function vf(t){return new Ec(t)}function _f(){return ke}let ye;const wr=new WeakSet;class Ic{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&(ke.active?ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wr.has(this)&&(wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Tc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ba(this),Ac(this);const e=ye,n=ft;ye=this,ft=!0;try{return this.fn()}finally{Sc(this),ye=e,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vo(e);this.deps=this.depsTail=void 0,Ba(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jr(this)&&this.run()}get dirty(){return jr(this)}}let bc=0,Ii,bi;function Tc(t,e=!1){if(t.flags|=8,e){t.next=bi,bi=t;return}t.next=Ii,Ii=t}function go(){bc++}function mo(){if(--bc>0)return;if(bi){let e=bi;for(bi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ii;){let e=Ii;for(Ii=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ac(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sc(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),vo(i),yf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function jr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xi)||(t.globalVersion=xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!jr(t))))return;t.flags|=2;const e=t.dep,n=ye,i=ft;ye=t,ft=!0;try{Ac(t);const r=t.fn(t._value);(e.version===0||wt(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ye=n,ft=i,Sc(t),t.flags&=-3}}function vo(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)vo(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function yf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ft=!0;const Cc=[];function Vt(){Cc.push(ft),ft=!1}function $t(){const t=Cc.pop();ft=t===void 0?!0:t}function Ba(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let xi=0;class wf{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _o{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ye||!ft||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new wf(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Pc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=i)}return n}trigger(e){this.version++,xi++,this.notify(e)}notify(e){go();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mo()}}}function Pc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pc(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Br=new WeakMap,An=Symbol(""),Hr=Symbol(""),ki=Symbol("");function Fe(t,e,n){if(ft&&ye){let i=Br.get(t);i||Br.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new _o),r.map=i,r.key=n),r.track()}}function Lt(t,e,n,i,r,o){const l=Br.get(t);if(!l){xi++;return}const u=h=>{h&&h.trigger()};if(go(),e==="clear")l.forEach(u);else{const h=te(t),d=h&&uo(n);if(h&&n==="length"){const p=Number(i);l.forEach((v,T)=>{(T==="length"||T===ki||!At(T)&&T>=p)&&u(v)})}else switch((n!==void 0||l.has(void 0))&&u(l.get(n)),d&&u(l.get(ki)),e){case"add":h?d&&u(l.get("length")):(u(l.get(An)),Hn(t)&&u(l.get(Hr)));break;case"delete":h||(u(l.get(An)),Hn(t)&&u(l.get(Hr)));break;case"set":Hn(t)&&u(l.get(An));break}}mo()}function Un(t){const e=de(t);return e===t?e:(Fe(e,"iterate",ki),dt(t)?e:e.map(Gt))}function yo(t){return Fe(t=de(t),"iterate",ki),t}function _t(t,e){return fn(t)?Di($n(t)?Gt(e):e):Gt(e)}const Ef={__proto__:null,[Symbol.iterator](){return Er(this,Symbol.iterator,t=>_t(this,t))},concat(...t){return Un(this).concat(...t.map(e=>te(e)?Un(e):e))},entries(){return Er(this,"entries",t=>(t[1]=_t(this,t[1]),t))},every(t,e){return Ot(this,"every",t,e,void 0,arguments)},filter(t,e){return Ot(this,"filter",t,e,n=>n.map(i=>_t(this,i)),arguments)},find(t,e){return Ot(this,"find",t,e,n=>_t(this,n),arguments)},findIndex(t,e){return Ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ot(this,"findLast",t,e,n=>_t(this,n),arguments)},findLastIndex(t,e){return Ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ir(this,"includes",t)},indexOf(...t){return Ir(this,"indexOf",t)},join(t){return Un(this).join(t)},lastIndexOf(...t){return Ir(this,"lastIndexOf",t)},map(t,e){return Ot(this,"map",t,e,void 0,arguments)},pop(){return mi(this,"pop")},push(...t){return mi(this,"push",t)},reduce(t,...e){return Ha(this,"reduce",t,e)},reduceRight(t,...e){return Ha(this,"reduceRight",t,e)},shift(){return mi(this,"shift")},some(t,e){return Ot(this,"some",t,e,void 0,arguments)},splice(...t){return mi(this,"splice",t)},toReversed(){return Un(this).toReversed()},toSorted(t){return Un(this).toSorted(t)},toSpliced(...t){return Un(this).toSpliced(...t)},unshift(...t){return mi(this,"unshift",t)},values(){return Er(this,"values",t=>_t(this,t))}};function Er(t,e,n){const i=yo(t),r=i[e]();return i!==t&&!dt(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const If=Array.prototype;function Ot(t,e,n,i,r,o){const l=yo(t),u=l!==t&&!dt(t),h=l[e];if(h!==If[e]){const v=h.apply(t,o);return u?Gt(v):v}let d=n;l!==t&&(u?d=function(v,T){return n.call(this,_t(t,v),T,t)}:n.length>2&&(d=function(v,T){return n.call(this,v,T,t)}));const p=h.call(l,d,i);return u&&r?r(p):p}function Ha(t,e,n,i){const r=yo(t),o=r!==t&&!dt(t);let l=n,u=!1;r!==t&&(o?(u=i.length===0,l=function(d,p,v){return u&&(u=!1,d=_t(t,d)),n.call(this,d,_t(t,p),v,t)}):n.length>3&&(l=function(d,p,v){return n.call(this,d,p,v,t)}));const h=r[e](l,...i);return u?_t(t,h):h}function Ir(t,e,n){const i=de(t);Fe(i,"iterate",ki);const r=i[e](...n);return(r===-1||r===!1)&&Io(n[0])?(n[0]=de(n[0]),i[e](...n)):r}function mi(t,e,n=[]){Vt(),go();const i=de(t)[e].apply(t,n);return mo(),$t(),i}const bf=lo("__proto__,__v_isRef,__isVue"),Oc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(At));function Tf(t){At(t)||(t=String(t));const e=de(this);return Fe(e,"has",t),e.hasOwnProperty(t)}class Nc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Df:Lc:o?Dc:kc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const l=te(e);if(!r){let h;if(l&&(h=Ef[n]))return h;if(n==="hasOwnProperty")return Tf}const u=Reflect.get(e,n,je(e)?e:i);if((At(n)?Oc.has(n):bf(n))||(r||Fe(e,"get",n),o))return u;if(je(u)){const h=l&&uo(n)?u:u.value;return r&&ve(h)?$r(h):h}return ve(u)?r?$r(u):Ws(u):u}}class xc extends Nc{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const l=te(e)&&uo(n);if(!this._isShallow){const d=fn(o);if(!dt(i)&&!fn(i)&&(o=de(o),i=de(i)),!l&&je(o)&&!je(i))return d||(o.value=i),!0}const u=l?Number(n)<e.length:pe(e,n),h=Reflect.set(e,n,i,je(e)?e:r);return e===de(r)&&(u?wt(i,o)&&Lt(e,"set",n,i):Lt(e,"add",n,i)),h}deleteProperty(e,n){const i=pe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Lt(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!At(n)||!Oc.has(n))&&Fe(e,"has",n),i}ownKeys(e){return Fe(e,"iterate",te(e)?"length":An),Reflect.ownKeys(e)}}class Af extends Nc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Sf=new xc,Rf=new Af,Cf=new xc(!0);const Vr=t=>t,us=t=>Reflect.getPrototypeOf(t);function Pf(t,e,n){return function(...i){const r=this.__v_raw,o=de(r),l=Hn(o),u=t==="entries"||t===Symbol.iterator&&l,h=t==="keys"&&l,d=r[t](...i),p=n?Vr:e?Di:Gt;return!e&&Fe(o,"iterate",h?Hr:An),De(Object.create(d),{next(){const{value:v,done:T}=d.next();return T?{value:v,done:T}:{value:u?[p(v[0]),p(v[1])]:p(v),done:T}}})}}function hs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Of(t,e){const n={get(r){const o=this.__v_raw,l=de(o),u=de(r);t||(wt(r,u)&&Fe(l,"get",r),Fe(l,"get",u));const{has:h}=us(l),d=e?Vr:t?Di:Gt;if(h.call(l,r))return d(o.get(r));if(h.call(l,u))return d(o.get(u));o!==l&&o.get(r)},get size(){const r=this.__v_raw;return!t&&Fe(de(r),"iterate",An),r.size},has(r){const o=this.__v_raw,l=de(o),u=de(r);return t||(wt(r,u)&&Fe(l,"has",r),Fe(l,"has",u)),r===u?o.has(r):o.has(r)||o.has(u)},forEach(r,o){const l=this,u=l.__v_raw,h=de(u),d=e?Vr:t?Di:Gt;return!t&&Fe(h,"iterate",An),u.forEach((p,v)=>r.call(o,d(p),d(v),l))}};return De(n,t?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(r){const o=de(this),l=us(o),u=de(r),h=!e&&!dt(r)&&!fn(r)?u:r;return l.has.call(o,h)||wt(r,h)&&l.has.call(o,r)||wt(u,h)&&l.has.call(o,u)||(o.add(h),Lt(o,"add",h,h)),this},set(r,o){!e&&!dt(o)&&!fn(o)&&(o=de(o));const l=de(this),{has:u,get:h}=us(l);let d=u.call(l,r);d||(r=de(r),d=u.call(l,r));const p=h.call(l,r);return l.set(r,o),d?wt(o,p)&&Lt(l,"set",r,o):Lt(l,"add",r,o),this},delete(r){const o=de(this),{has:l,get:u}=us(o);let h=l.call(o,r);h||(r=de(r),h=l.call(o,r)),u&&u.call(o,r);const d=o.delete(r);return h&&Lt(o,"delete",r,void 0),d},clear(){const r=de(this),o=r.size!==0,l=r.clear();return o&&Lt(r,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Pf(r,t,e)}),n}function wo(t,e){const n=Of(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pe(n,r)&&r in i?n:i,r,o)}const Nf={get:wo(!1,!1)},xf={get:wo(!1,!0)},kf={get:wo(!0,!1)};const kc=new WeakMap,Dc=new WeakMap,Lc=new WeakMap,Df=new WeakMap;function Lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mf(t){return t.__v_skip||!Object.isExtensible(t)?0:Lf(of(t))}function Ws(t){return fn(t)?t:Eo(t,!1,Sf,Nf,kc)}function Mc(t){return Eo(t,!1,Cf,xf,Dc)}function $r(t){return Eo(t,!0,Rf,kf,Lc)}function Eo(t,e,n,i,r){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Mf(t);if(o===0)return t;const l=r.get(t);if(l)return l;const u=new Proxy(t,o===2?i:n);return r.set(t,u),u}function $n(t){return fn(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function dt(t){return!!(t&&t.__v_isShallow)}function Io(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Uc(t){return!pe(t,"__v_skip")&&Object.isExtensible(t)&&vc(t,"__v_skip",!0),t}const Gt=t=>ve(t)?Ws(t):t,Di=t=>ve(t)?$r(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Li(t){return Fc(t,!1)}function Uf(t){return Fc(t,!0)}function Fc(t,e){return je(t)?t:new Ff(t,e)}class Ff{constructor(e,n){this.dep=new _o,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||dt(e)||fn(e);e=i?e:de(e),wt(e,n)&&(this._rawValue=e,this._value=i?e:Gt(e),this.dep.trigger())}}function Sn(t){return je(t)?t.value:t}const jf={get:(t,e,n)=>e==="__v_raw"?t:Sn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return je(r)&&!je(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function jc(t){return $n(t)?t:new Proxy(t,jf)}class Bf{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _o(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Tc(this,!0),!0}get value(){const e=this.dep.track();return Rc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hf(t,e,n=!1){let i,r;return ie(t)?i=t:(i=t.get,r=t.set),new Bf(i,r,n)}const fs={},bs=new WeakMap;let wn;function Vf(t,e=!1,n=wn){if(n){let i=bs.get(n);i||bs.set(n,i=[]),i.push(t)}}function $f(t,e,n=we){const{immediate:i,deep:r,once:o,scheduler:l,augmentJob:u,call:h}=n,d=K=>r?K:dt(K)||r===!1||r===0?rn(K,1):rn(K);let p,v,T,C,L=!1,M=!1;if(je(t)?(v=()=>t.value,L=dt(t)):$n(t)?(v=()=>d(t),L=!0):te(t)?(M=!0,L=t.some(K=>$n(K)||dt(K)),v=()=>t.map(K=>{if(je(K))return K.value;if($n(K))return d(K);if(ie(K))return h?h(K,2):K()})):ie(t)?e?v=h?()=>h(t,2):t:v=()=>{if(T){Vt();try{T()}finally{$t()}}const K=wn;wn=p;try{return h?h(t,3,[C]):t(C)}finally{wn=K}}:v=It,e&&r){const K=v,oe=r===!0?1/0:r;v=()=>rn(K(),oe)}const W=_f(),J=()=>{p.stop(),W&&W.active&&co(W.effects,p)};if(o&&e){const K=e;e=(...oe)=>{K(...oe),J()}}let B=M?new Array(t.length).fill(fs):fs;const G=K=>{if(!(!(p.flags&1)||!p.dirty&&!K))if(e){const oe=p.run();if(r||L||(M?oe.some((ce,E)=>wt(ce,B[E])):wt(oe,B))){T&&T();const ce=wn;wn=p;try{const E=[oe,B===fs?void 0:M&&B[0]===fs?[]:B,C];B=oe,h?h(e,3,E):e(...E)}finally{wn=ce}}}else p.run()};return u&&u(G),p=new Ic(v),p.scheduler=l?()=>l(G,!1):G,C=K=>Vf(K,!1,p),T=p.onStop=()=>{const K=bs.get(p);if(K){if(h)h(K,4);else for(const oe of K)oe();bs.delete(p)}},e?i?G(!0):B=p.run():l?l(G.bind(null,!0),!0):p.run(),J.pause=p.pause.bind(p),J.resume=p.resume.bind(p),J.stop=J,J}function rn(t,e=1/0,n){if(e<=0||!ve(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,je(t))rn(t.value,e,n);else if(te(t))for(let i=0;i<t.length;i++)rn(t[i],e,n);else if(fc(t)||Hn(t))t.forEach(i=>{rn(i,e,n)});else if(gc(t)){for(const i in t)rn(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&rn(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,i){try{return i?t(...i):t()}catch(r){Ks(r,e,n)}}function St(t,e,n,i){if(ie(t)){const r=$i(t,e,n,i);return r&&dc(r)&&r.catch(o=>{Ks(o,e,n)}),r}if(te(t)){const r=[];for(let o=0;o<t.length;o++)r.push(St(t[o],e,n,i));return r}}function Ks(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=e&&e.appContext.config||we;if(e){let u=e.parent;const h=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const p=u.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](t,h,d)===!1)return}u=u.parent}if(o){Vt(),$i(o,null,10,[t,h,d]),$t();return}}Gf(t,n,r,i,l)}function Gf(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const We=[];let vt=-1;const Gn=[];let nn=null,Fn=0;const Bc=Promise.resolve();let Ts=null;function Hc(t){const e=Ts||Bc;return t?e.then(this?t.bind(this):t):e}function Wf(t){let e=vt+1,n=We.length;for(;e<n;){const i=e+n>>>1,r=We[i],o=Mi(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function bo(t){if(!(t.flags&1)){const e=Mi(t),n=We[We.length-1];!n||!(t.flags&2)&&e>=Mi(n)?We.push(t):We.splice(Wf(e),0,t),t.flags|=1,Vc()}}function Vc(){Ts||(Ts=Bc.then(Gc))}function Kf(t){te(t)?Gn.push(...t):nn&&t.id===-1?nn.splice(Fn+1,0,t):t.flags&1||(Gn.push(t),t.flags|=1),Vc()}function Va(t,e,n=vt+1){for(;n<We.length;n++){const i=We[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;We.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $c(t){if(Gn.length){const e=[...new Set(Gn)].sort((n,i)=>Mi(n)-Mi(i));if(Gn.length=0,nn){nn.push(...e);return}for(nn=e,Fn=0;Fn<nn.length;Fn++){const n=nn[Fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nn=null,Fn=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gc(t){try{for(vt=0;vt<We.length;vt++){const e=We[vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vt<We.length;vt++){const e=We[vt];e&&(e.flags&=-2)}vt=-1,We.length=0,$c(),Ts=null,(We.length||Gn.length)&&Gc()}}let Et=null,Wc=null;function As(t){const e=Et;return Et=t,Wc=t&&t.type.__scopeId||null,e}function zf(t,e=Et,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Cs(-1);const o=As(e);let l;try{l=t(...r)}finally{As(o),i._d&&Cs(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function _n(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let l=0;l<r.length;l++){const u=r[l];o&&(u.oldValue=o[l].value);let h=u.dir[i];h&&(Vt(),St(h,n,8,[t.el,u,t,e]),$t())}}function gs(t,e){if(Ke){let n=Ke.provides;const i=Ke.parent&&Ke.parent.provides;i===n&&(n=Ke.provides=Object.create(i)),n[t]=e}}function bt(t,e,n=!1){const i=Jd();if(i||Wn){let r=Wn?Wn._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ie(e)?e.call(i&&i.proxy):e}}const qf=Symbol.for("v-scx"),Jf=()=>bt(qf);function ms(t,e,n){return Kc(t,e,n)}function Kc(t,e,n=we){const{immediate:i,deep:r,flush:o,once:l}=n,u=De({},n),h=e&&i||!e&&o!=="post";let d;if(Fi){if(o==="sync"){const C=Jf();d=C.__watcherHandles||(C.__watcherHandles=[])}else if(!h){const C=()=>{};return C.stop=It,C.resume=It,C.pause=It,C}}const p=Ke;u.call=(C,L,M)=>St(C,p,L,M);let v=!1;o==="post"?u.scheduler=C=>{Je(C,p&&p.suspense)}:o!=="sync"&&(v=!0,u.scheduler=(C,L)=>{L?C():bo(C)}),u.augmentJob=C=>{e&&(C.flags|=4),v&&(C.flags|=2,p&&(C.id=p.uid,C.i=p))};const T=$f(t,e,u);return Fi&&(d?d.push(T):h&&T()),T}function Xf(t,e,n){const i=this.proxy,r=Re(t)?t.includes(".")?zc(i,t):()=>i[t]:t.bind(i,i);let o;ie(e)?o=e:(o=e.handler,n=e);const l=Gi(this),u=Kc(r,o.bind(i),n);return l(),u}function zc(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Yf=Symbol("_vte"),Qf=t=>t.__isTeleport,Zf=Symbol("_leaveCb");function To(t,e){t.shapeFlag&6&&t.component?(t.transition=e,To(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qc(t,e){return ie(t)?De({name:t.name},e,{setup:t}):t}function Jc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $a(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Ss=new WeakMap;function Ti(t,e,n,i,r=!1){if(te(t)){t.forEach((M,W)=>Ti(M,e&&(te(e)?e[W]:e),n,i,r));return}if(Ai(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ti(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Co(i.component):i.el,l=r?null:o,{i:u,r:h}=t,d=e&&e.r,p=u.refs===we?u.refs={}:u.refs,v=u.setupState,T=de(v),C=v===we?hc:M=>$a(p,M)?!1:pe(T,M),L=(M,W)=>!(W&&$a(p,W));if(d!=null&&d!==h){if(Ga(e),Re(d))p[d]=null,C(d)&&(v[d]=null);else if(je(d)){const M=e;L(d,M.k)&&(d.value=null),M.k&&(p[M.k]=null)}}if(ie(h))$i(h,u,12,[l,p]);else{const M=Re(h),W=je(h);if(M||W){const J=()=>{if(t.f){const B=M?C(h)?v[h]:p[h]:L()||!t.k?h.value:p[t.k];if(r)te(B)&&co(B,o);else if(te(B))B.includes(o)||B.push(o);else if(M)p[h]=[o],C(h)&&(v[h]=p[h]);else{const G=[o];L(h,t.k)&&(h.value=G),t.k&&(p[t.k]=G)}}else M?(p[h]=l,C(h)&&(v[h]=l)):W&&(L(h,t.k)&&(h.value=l),t.k&&(p[t.k]=l))};if(l){const B=()=>{J(),Ss.delete(t)};B.id=-1,Ss.set(t,B),Je(B,n)}else Ga(t),J()}}}function Ga(t){const e=Ss.get(t);e&&(e.flags|=8,Ss.delete(t))}Gs().requestIdleCallback;Gs().cancelIdleCallback;const Ai=t=>!!t.type.__asyncLoader,Xc=t=>t.type.__isKeepAlive;function ed(t,e){Yc(t,"a",e)}function td(t,e){Yc(t,"da",e)}function Yc(t,e,n=Ke){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(zs(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Xc(r.parent.vnode)&&nd(i,e,n,r),r=r.parent}}function nd(t,e,n,i){const r=zs(e,t,i,!0);Qc(()=>{co(i[e],r)},n)}function zs(t,e,n=Ke,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{Vt();const u=Gi(n),h=St(e,n,t,l);return u(),$t(),h});return i?r.unshift(o):r.push(o),o}}const zt=t=>(e,n=Ke)=>{(!Fi||t==="sp")&&zs(t,(...i)=>e(...i),n)},id=zt("bm"),sd=zt("m"),rd=zt("bu"),od=zt("u"),ad=zt("bum"),Qc=zt("um"),ld=zt("sp"),cd=zt("rtg"),ud=zt("rtc");function hd(t,e=Ke){zs("ec",t,e)}const fd=Symbol.for("v-ndc"),Gr=t=>t?yu(t)?Co(t):Gr(t.parent):null,Si=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gr(t.parent),$root:t=>Gr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>eu(t),$forceUpdate:t=>t.f||(t.f=()=>{bo(t.update)}),$nextTick:t=>t.n||(t.n=Hc.bind(t.proxy)),$watch:t=>Xf.bind(t)}),br=(t,e)=>t!==we&&!t.__isScriptSetup&&pe(t,e),dd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:l,type:u,appContext:h}=t;if(e[0]!=="$"){const T=l[e];if(T!==void 0)switch(T){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(br(i,e))return l[e]=1,i[e];if(r!==we&&pe(r,e))return l[e]=2,r[e];if(pe(o,e))return l[e]=3,o[e];if(n!==we&&pe(n,e))return l[e]=4,n[e];Wr&&(l[e]=0)}}const d=Si[e];let p,v;if(d)return e==="$attrs"&&Fe(t.attrs,"get",""),d(t);if((p=u.__cssModules)&&(p=p[e]))return p;if(n!==we&&pe(n,e))return l[e]=4,n[e];if(v=h.config.globalProperties,pe(v,e))return v[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return br(r,e)?(r[e]=n,!0):i!==we&&pe(i,e)?(i[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:l}},u){let h;return!!(n[u]||t!==we&&u[0]!=="$"&&pe(t,u)||br(e,u)||pe(o,u)||pe(i,u)||pe(Si,u)||pe(r.config.globalProperties,u)||(h=l.__cssModules)&&h[u])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wa(t){return te(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wr=!0;function pd(t){const e=eu(t),n=t.proxy,i=t.ctx;Wr=!1,e.beforeCreate&&Ka(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:l,watch:u,provide:h,inject:d,created:p,beforeMount:v,mounted:T,beforeUpdate:C,updated:L,activated:M,deactivated:W,beforeDestroy:J,beforeUnmount:B,destroyed:G,unmounted:K,render:oe,renderTracked:ce,renderTriggered:E,errorCaptured:m,serverPrefetch:w,expose:I,inheritAttrs:b,components:S,directives:_,filters:Be}=e;if(d&&gd(d,i,null),l)for(const ae in l){const re=l[ae];ie(re)&&(i[ae]=re.bind(n))}if(r){const ae=r.call(n,n);ve(ae)&&(t.data=Ws(ae))}if(Wr=!0,o)for(const ae in o){const re=o[ae],Ze=ie(re)?re.bind(n,n):ie(re.get)?re.get.bind(n,n):It,lt=!ie(re)&&ie(re.set)?re.set.bind(n):It,it=at({get:Ze,set:lt});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ie=>it.value=Ie})}if(u)for(const ae in u)Zc(u[ae],i,n,ae);if(h){const ae=ie(h)?h.call(n):h;Reflect.ownKeys(ae).forEach(re=>{gs(re,ae[re])})}p&&Ka(p,t,"c");function Ce(ae,re){te(re)?re.forEach(Ze=>ae(Ze.bind(n))):re&&ae(re.bind(n))}if(Ce(id,v),Ce(sd,T),Ce(rd,C),Ce(od,L),Ce(ed,M),Ce(td,W),Ce(hd,m),Ce(ud,ce),Ce(cd,E),Ce(ad,B),Ce(Qc,K),Ce(ld,w),te(I))if(I.length){const ae=t.exposed||(t.exposed={});I.forEach(re=>{Object.defineProperty(ae,re,{get:()=>n[re],set:Ze=>n[re]=Ze,enumerable:!0})})}else t.exposed||(t.exposed={});oe&&t.render===It&&(t.render=oe),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),_&&(t.directives=_),w&&Jc(t)}function gd(t,e,n=It){te(t)&&(t=Kr(t));for(const i in t){const r=t[i];let o;ve(r)?"default"in r?o=bt(r.from||i,r.default,!0):o=bt(r.from||i):o=bt(r),je(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Ka(t,e,n){St(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zc(t,e,n,i){let r=i.includes(".")?zc(n,i):()=>n[i];if(Re(t)){const o=e[t];ie(o)&&ms(r,o)}else if(ie(t))ms(r,t.bind(n));else if(ve(t))if(te(t))t.forEach(o=>Zc(o,e,n,i));else{const o=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(o)&&ms(r,o,t)}}function eu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,u=o.get(e);let h;return u?h=u:!r.length&&!n&&!i?h=e:(h={},r.length&&r.forEach(d=>Rs(h,d,l,!0)),Rs(h,e,l)),ve(e)&&o.set(e,h),h}function Rs(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Rs(t,o,n,!0),r&&r.forEach(l=>Rs(t,l,n,!0));for(const l in e)if(!(i&&l==="expose")){const u=md[l]||n&&n[l];t[l]=u?u(t[l],e[l]):e[l]}return t}const md={data:za,props:qa,emits:qa,methods:yi,computed:yi,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:yi,directives:yi,watch:_d,provide:za,inject:vd};function za(t,e){return e?t?function(){return De(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function vd(t,e){return yi(Kr(t),Kr(e))}function Kr(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ve(t,e){return t?[...new Set([].concat(t,e))]:e}function yi(t,e){return t?De(Object.create(null),t,e):e}function qa(t,e){return t?te(t)&&te(e)?[...new Set([...t,...e])]:De(Object.create(null),Wa(t),Wa(e??{})):e}function _d(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const i in e)n[i]=Ve(t[i],e[i]);return n}function tu(){return{app:null,config:{isNativeTag:hc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yd=0;function wd(t,e){return function(i,r=null){ie(i)||(i=De({},i)),r!=null&&!ve(r)&&(r=null);const o=tu(),l=new WeakSet,u=[];let h=!1;const d=o.app={_uid:yd++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:tp,get config(){return o.config},set config(p){},use(p,...v){return l.has(p)||(p&&ie(p.install)?(l.add(p),p.install(d,...v)):ie(p)&&(l.add(p),p(d,...v))),d},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),d},component(p,v){return v?(o.components[p]=v,d):o.components[p]},directive(p,v){return v?(o.directives[p]=v,d):o.directives[p]},mount(p,v,T){if(!h){const C=d._ceVNode||Qe(i,r);return C.appContext=o,T===!0?T="svg":T===!1&&(T=void 0),t(C,p,T),h=!0,d._container=p,p.__vue_app__=d,Co(C.component)}},onUnmount(p){u.push(p)},unmount(){h&&(St(u,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(p,v){return o.provides[p]=v,d},runWithContext(p){const v=Wn;Wn=d;try{return p()}finally{Wn=v}}};return d}}let Wn=null;const Ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ht(e)}Modifiers`]||t[`${On(e)}Modifiers`];function Id(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||we;let r=n;const o=e.startsWith("update:"),l=o&&Ed(i,e.slice(7));l&&(l.trim&&(r=n.map(p=>Re(p)?p.trim():p)),l.number&&(r=n.map(cf)));let u,h=i[u=vr(e)]||i[u=vr(ht(e))];!h&&o&&(h=i[u=vr(On(e))]),h&&St(h,t,6,r);const d=i[u+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[u])return;t.emitted[u]=!0,St(d,t,6,r)}}const bd=new WeakMap;function nu(t,e,n=!1){const i=n?bd:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let l={},u=!1;if(!ie(t)){const h=d=>{const p=nu(d,e,!0);p&&(u=!0,De(l,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!u?(ve(t)&&i.set(t,null),null):(te(o)?o.forEach(h=>l[h]=null):De(l,o),ve(t)&&i.set(t,l),l)}function qs(t,e){return!t||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,On(e))||pe(t,e))}function Ja(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:l,attrs:u,emit:h,render:d,renderCache:p,props:v,data:T,setupState:C,ctx:L,inheritAttrs:M}=t,W=As(t);let J,B;try{if(n.shapeFlag&4){const K=r||i,oe=K;J=yt(d.call(oe,K,p,v,C,T,L)),B=u}else{const K=e;J=yt(K.length>1?K(v,{attrs:u,slots:l,emit:h}):K(v,null)),B=e.props?u:Td(u)}}catch(K){Ri.length=0,Ks(K,t,1),J=Qe(dn)}let G=J;if(B&&M!==!1){const K=Object.keys(B),{shapeFlag:oe}=G;K.length&&oe&7&&(o&&K.some(Vs)&&(B=Ad(B,o)),G=Jn(G,B,!1,!0))}return n.dirs&&(G=Jn(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&To(G,n.transition),J=G,As(W),J}const Td=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hs(n))&&((e||(e={}))[n]=t[n]);return e},Ad=(t,e)=>{const n={};for(const i in t)(!Vs(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Sd(t,e,n){const{props:i,children:r,component:o}=t,{props:l,children:u,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return i?Xa(i,l,d):!!l;if(h&8){const p=e.dynamicProps;for(let v=0;v<p.length;v++){const T=p[v];if(iu(l,i,T)&&!qs(d,T))return!0}}}else return(r||u)&&(!u||!u.$stable)?!0:i===l?!1:i?l?Xa(i,l,d):!0:!!l;return!1}function Xa(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(iu(e,t,o)&&!qs(n,o))return!0}return!1}function iu(t,e,n){const i=t[n],r=e[n];return n==="style"&&ve(i)&&ve(r)?!po(i,r):i!==r}function Rd({vnode:t,parent:e,suspense:n},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.suspense.vnode.el=r.el=i,t=r),r===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const su={},ru=()=>Object.create(su),ou=t=>Object.getPrototypeOf(t)===su;function Cd(t,e,n,i=!1){const r={},o=ru();t.propsDefaults=Object.create(null),au(t,e,r,o);for(const l in t.propsOptions[0])l in r||(r[l]=void 0);n?t.props=i?r:Mc(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Pd(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:l}}=t,u=de(r),[h]=t.propsOptions;let d=!1;if((i||l>0)&&!(l&16)){if(l&8){const p=t.vnode.dynamicProps;for(let v=0;v<p.length;v++){let T=p[v];if(qs(t.emitsOptions,T))continue;const C=e[T];if(h)if(pe(o,T))C!==o[T]&&(o[T]=C,d=!0);else{const L=ht(T);r[L]=zr(h,u,L,C,t,!1)}else C!==o[T]&&(o[T]=C,d=!0)}}}else{au(t,e,r,o)&&(d=!0);let p;for(const v in u)(!e||!pe(e,v)&&((p=On(v))===v||!pe(e,p)))&&(h?n&&(n[v]!==void 0||n[p]!==void 0)&&(r[v]=zr(h,u,v,void 0,t,!0)):delete r[v]);if(o!==u)for(const v in o)(!e||!pe(e,v))&&(delete o[v],d=!0)}d&&Lt(t.attrs,"set","")}function au(t,e,n,i){const[r,o]=t.propsOptions;let l=!1,u;if(e)for(let h in e){if(Ei(h))continue;const d=e[h];let p;r&&pe(r,p=ht(h))?!o||!o.includes(p)?n[p]=d:(u||(u={}))[p]=d:qs(t.emitsOptions,h)||(!(h in i)||d!==i[h])&&(i[h]=d,l=!0)}if(o){const h=de(n),d=u||we;for(let p=0;p<o.length;p++){const v=o[p];n[v]=zr(r,h,v,d[v],t,!pe(d,v))}}return l}function zr(t,e,n,i,r,o){const l=t[n];if(l!=null){const u=pe(l,"default");if(u&&i===void 0){const h=l.default;if(l.type!==Function&&!l.skipFactory&&ie(h)){const{propsDefaults:d}=r;if(n in d)i=d[n];else{const p=Gi(r);i=d[n]=h.call(null,e),p()}}else i=h;r.ce&&r.ce._setProp(n,i)}l[0]&&(o&&!u?i=!1:l[1]&&(i===""||i===On(n))&&(i=!0))}return i}const Od=new WeakMap;function lu(t,e,n=!1){const i=n?Od:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,l={},u=[];let h=!1;if(!ie(t)){const p=v=>{h=!0;const[T,C]=lu(v,e,!0);De(l,T),C&&u.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return ve(t)&&i.set(t,Bn),Bn;if(te(o))for(let p=0;p<o.length;p++){const v=ht(o[p]);Ya(v)&&(l[v]=we)}else if(o)for(const p in o){const v=ht(p);if(Ya(v)){const T=o[p],C=l[v]=te(T)||ie(T)?{type:T}:De({},T),L=C.type;let M=!1,W=!0;if(te(L))for(let J=0;J<L.length;++J){const B=L[J],G=ie(B)&&B.name;if(G==="Boolean"){M=!0;break}else G==="String"&&(W=!1)}else M=ie(L)&&L.name==="Boolean";C[0]=M,C[1]=W,(M||pe(C,"default"))&&u.push(v)}}const d=[l,u];return ve(t)&&i.set(t,d),d}function Ya(t){return t[0]!=="$"&&!Ei(t)}const Ao=t=>t==="_"||t==="_ctx"||t==="$stable",So=t=>te(t)?t.map(yt):[yt(t)],Nd=(t,e,n)=>{if(e._n)return e;const i=zf((...r)=>So(e(...r)),n);return i._c=!1,i},cu=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ao(r))continue;const o=t[r];if(ie(o))e[r]=Nd(r,o,i);else if(o!=null){const l=So(o);e[r]=()=>l}}},uu=(t,e)=>{const n=So(e);t.slots.default=()=>n},hu=(t,e,n)=>{for(const i in e)(n||!Ao(i))&&(t[i]=e[i])},xd=(t,e,n)=>{const i=t.slots=ru();if(t.vnode.shapeFlag&32){const r=e._;r?(hu(i,e,n),n&&vc(i,"_",r,!0)):cu(e,i)}else e&&uu(t,e)},kd=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,l=we;if(i.shapeFlag&32){const u=e._;u?n&&u===1?o=!1:hu(r,e,n):(o=!e.$stable,cu(e,r)),l=e}else e&&(uu(t,e),l={default:1});if(o)for(const u in r)!Ao(u)&&l[u]==null&&delete r[u]},Je=Fd;function Dd(t){return Ld(t)}function Ld(t,e){const n=Gs();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:l,createText:u,createComment:h,setText:d,setElementText:p,parentNode:v,nextSibling:T,setScopeId:C=It,insertStaticContent:L}=t,M=(g,y,A,O=null,k=null,x=null,H=void 0,j=null,U=!!y.dynamicChildren)=>{if(g===y)return;g&&!vi(g,y)&&(O=N(g),Ie(g,k,x,!0),g=null),y.patchFlag===-2&&(U=!1,y.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:$}=y;switch(D){case Js:W(g,y,A,O);break;case dn:J(g,y,A,O);break;case vs:g==null&&B(y,A,O,H);break;case kt:S(g,y,A,O,k,x,H,j,U);break;default:$&1?oe(g,y,A,O,k,x,H,j,U):$&6?_(g,y,A,O,k,x,H,j,U):($&64||$&128)&&D.process(g,y,A,O,k,x,H,j,U,q)}Y!=null&&k?Ti(Y,g&&g.ref,x,y||g,!y):Y==null&&g&&g.ref!=null&&Ti(g.ref,null,x,g,!0)},W=(g,y,A,O)=>{if(g==null)i(y.el=u(y.children),A,O);else{const k=y.el=g.el;y.children!==g.children&&d(k,y.children)}},J=(g,y,A,O)=>{g==null?i(y.el=h(y.children||""),A,O):y.el=g.el},B=(g,y,A,O)=>{[g.el,g.anchor]=L(g.children,y,A,O,g.el,g.anchor)},G=({el:g,anchor:y},A,O)=>{let k;for(;g&&g!==y;)k=T(g),i(g,A,O),g=k;i(y,A,O)},K=({el:g,anchor:y})=>{let A;for(;g&&g!==y;)A=T(g),r(g),g=A;r(y)},oe=(g,y,A,O,k,x,H,j,U)=>{if(y.type==="svg"?H="svg":y.type==="math"&&(H="mathml"),g==null)ce(y,A,O,k,x,H,j,U);else{const D=g.el&&g.el._isVueCE?g.el:null;try{D&&D._beginPatch(),w(g,y,k,x,H,j,U)}finally{D&&D._endPatch()}}},ce=(g,y,A,O,k,x,H,j)=>{let U,D;const{props:Y,shapeFlag:$,transition:X,dirs:Q}=g;if(U=g.el=l(g.type,x,Y&&Y.is,Y),$&8?p(U,g.children):$&16&&m(g.children,U,null,O,k,Tr(g,x),H,j),Q&&_n(g,null,O,"created"),E(U,g,g.scopeId,H,O),Y){for(const ne in Y)ne!=="value"&&!Ei(ne)&&o(U,ne,null,Y[ne],x,O);"value"in Y&&o(U,"value",null,Y.value,x),(D=Y.onVnodeBeforeMount)&&mt(D,O,g)}Q&&_n(g,null,O,"beforeMount");const Z=Md(k,X);Z&&X.beforeEnter(U),i(U,y,A),((D=Y&&Y.onVnodeMounted)||Z||Q)&&Je(()=>{try{D&&mt(D,O,g),Z&&X.enter(U),Q&&_n(g,null,O,"mounted")}finally{}},k)},E=(g,y,A,O,k)=>{if(A&&C(g,A),O)for(let x=0;x<O.length;x++)C(g,O[x]);if(k){let x=k.subTree;if(y===x||gu(x.type)&&(x.ssContent===y||x.ssFallback===y)){const H=k.vnode;E(g,H,H.scopeId,H.slotScopeIds,k.parent)}}},m=(g,y,A,O,k,x,H,j,U=0)=>{for(let D=U;D<g.length;D++){const Y=g[D]=j?Dt(g[D]):yt(g[D]);M(null,Y,y,A,O,k,x,H,j)}},w=(g,y,A,O,k,x,H)=>{const j=y.el=g.el;let{patchFlag:U,dynamicChildren:D,dirs:Y}=y;U|=g.patchFlag&16;const $=g.props||we,X=y.props||we;let Q;if(A&&yn(A,!1),(Q=X.onVnodeBeforeUpdate)&&mt(Q,A,y,g),Y&&_n(y,g,A,"beforeUpdate"),A&&yn(A,!0),($.innerHTML&&X.innerHTML==null||$.textContent&&X.textContent==null)&&p(j,""),D?I(g.dynamicChildren,D,j,A,O,Tr(y,k),x):H||re(g,y,j,null,A,O,Tr(y,k),x,!1),U>0){if(U&16)b(j,$,X,A,k);else if(U&2&&$.class!==X.class&&o(j,"class",null,X.class,k),U&4&&o(j,"style",$.style,X.style,k),U&8){const Z=y.dynamicProps;for(let ne=0;ne<Z.length;ne++){const he=Z[ne],Te=$[he],Pe=X[he];(Pe!==Te||he==="value")&&o(j,he,Te,Pe,k,A)}}U&1&&g.children!==y.children&&p(j,y.children)}else!H&&D==null&&b(j,$,X,A,k);((Q=X.onVnodeUpdated)||Y)&&Je(()=>{Q&&mt(Q,A,y,g),Y&&_n(y,g,A,"updated")},O)},I=(g,y,A,O,k,x,H)=>{for(let j=0;j<y.length;j++){const U=g[j],D=y[j],Y=U.el&&(U.type===kt||!vi(U,D)||U.shapeFlag&198)?v(U.el):A;M(U,D,Y,null,O,k,x,H,!0)}},b=(g,y,A,O,k)=>{if(y!==A){if(y!==we)for(const x in y)!Ei(x)&&!(x in A)&&o(g,x,y[x],null,k,O);for(const x in A){if(Ei(x))continue;const H=A[x],j=y[x];H!==j&&x!=="value"&&o(g,x,j,H,k,O)}"value"in A&&o(g,"value",y.value,A.value,k)}},S=(g,y,A,O,k,x,H,j,U)=>{const D=y.el=g?g.el:u(""),Y=y.anchor=g?g.anchor:u("");let{patchFlag:$,dynamicChildren:X,slotScopeIds:Q}=y;Q&&(j=j?j.concat(Q):Q),g==null?(i(D,A,O),i(Y,A,O),m(y.children||[],A,Y,k,x,H,j,U)):$>0&&$&64&&X&&g.dynamicChildren&&g.dynamicChildren.length===X.length?(I(g.dynamicChildren,X,A,k,x,H,j),(y.key!=null||k&&y===k.subTree)&&fu(g,y,!0)):re(g,y,A,Y,k,x,H,j,U)},_=(g,y,A,O,k,x,H,j,U)=>{y.slotScopeIds=j,g==null?y.shapeFlag&512?k.ctx.activate(y,A,O,H,U):Be(y,A,O,k,x,H,U):nt(g,y,U)},Be=(g,y,A,O,k,x,H)=>{const j=g.component=qd(g,O,k);if(Xc(g)&&(j.ctx.renderer=q),Xd(j,!1,H),j.asyncDep){if(k&&k.registerDep(j,Ce,H),!g.el){const U=j.subTree=Qe(dn);J(null,U,y,A),g.placeholder=U.el}}else Ce(j,g,y,A,k,x,H)},nt=(g,y,A)=>{const O=y.component=g.component;if(Sd(g,y,A))if(O.asyncDep&&!O.asyncResolved){ae(O,y,A);return}else O.next=y,O.update();else y.el=g.el,O.vnode=y},Ce=(g,y,A,O,k,x,H)=>{const j=()=>{if(g.isMounted){let{next:$,bu:X,u:Q,parent:Z,vnode:ne}=g;{const Le=du(g);if(Le){$&&($.el=ne.el,ae(g,$,H)),Le.asyncDep.then(()=>{Je(()=>{g.isUnmounted||D()},k)});return}}let he=$,Te;yn(g,!1),$?($.el=ne.el,ae(g,$,H)):$=ne,X&&_r(X),(Te=$.props&&$.props.onVnodeBeforeUpdate)&&mt(Te,Z,$,ne),yn(g,!0);const Pe=Ja(g),st=g.subTree;g.subTree=Pe,M(st,Pe,v(st.el),N(st),g,k,x),$.el=Pe.el,he===null&&Rd(g,Pe.el),Q&&Je(Q,k),(Te=$.props&&$.props.onVnodeUpdated)&&Je(()=>mt(Te,Z,$,ne),k)}else{let $;const{el:X,props:Q}=y,{bm:Z,m:ne,parent:he,root:Te,type:Pe}=g,st=Ai(y);yn(g,!1),Z&&_r(Z),!st&&($=Q&&Q.onVnodeBeforeMount)&&mt($,he,y),yn(g,!0);{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Pe,g.parent?g.parent.type:void 0);const Le=g.subTree=Ja(g);M(null,Le,A,O,g,k,x),y.el=Le.el}if(ne&&Je(ne,k),!st&&($=Q&&Q.onVnodeMounted)){const Le=y;Je(()=>mt($,he,Le),k)}(y.shapeFlag&256||he&&Ai(he.vnode)&&he.vnode.shapeFlag&256)&&g.a&&Je(g.a,k),g.isMounted=!0,y=A=O=null}};g.scope.on();const U=g.effect=new Ic(j);g.scope.off();const D=g.update=U.run.bind(U),Y=g.job=U.runIfDirty.bind(U);Y.i=g,Y.id=g.uid,U.scheduler=()=>bo(Y),yn(g,!0),D()},ae=(g,y,A)=>{y.component=g;const O=g.vnode.props;g.vnode=y,g.next=null,Pd(g,y.props,O,A),kd(g,y.children,A),Vt(),Va(g),$t()},re=(g,y,A,O,k,x,H,j,U=!1)=>{const D=g&&g.children,Y=g?g.shapeFlag:0,$=y.children,{patchFlag:X,shapeFlag:Q}=y;if(X>0){if(X&128){lt(D,$,A,O,k,x,H,j,U);return}else if(X&256){Ze(D,$,A,O,k,x,H,j,U);return}}Q&8?(Y&16&&qe(D,k,x),$!==D&&p(A,$)):Y&16?Q&16?lt(D,$,A,O,k,x,H,j,U):qe(D,k,x,!0):(Y&8&&p(A,""),Q&16&&m($,A,O,k,x,H,j,U))},Ze=(g,y,A,O,k,x,H,j,U)=>{g=g||Bn,y=y||Bn;const D=g.length,Y=y.length,$=Math.min(D,Y);let X;for(X=0;X<$;X++){const Q=y[X]=U?Dt(y[X]):yt(y[X]);M(g[X],Q,A,null,k,x,H,j,U)}D>Y?qe(g,k,x,!0,!1,$):m(y,A,O,k,x,H,j,U,$)},lt=(g,y,A,O,k,x,H,j,U)=>{let D=0;const Y=y.length;let $=g.length-1,X=Y-1;for(;D<=$&&D<=X;){const Q=g[D],Z=y[D]=U?Dt(y[D]):yt(y[D]);if(vi(Q,Z))M(Q,Z,A,null,k,x,H,j,U);else break;D++}for(;D<=$&&D<=X;){const Q=g[$],Z=y[X]=U?Dt(y[X]):yt(y[X]);if(vi(Q,Z))M(Q,Z,A,null,k,x,H,j,U);else break;$--,X--}if(D>$){if(D<=X){const Q=X+1,Z=Q<Y?y[Q].el:O;for(;D<=X;)M(null,y[D]=U?Dt(y[D]):yt(y[D]),A,Z,k,x,H,j,U),D++}}else if(D>X)for(;D<=$;)Ie(g[D],k,x,!0),D++;else{const Q=D,Z=D,ne=new Map;for(D=Z;D<=X;D++){const Ne=y[D]=U?Dt(y[D]):yt(y[D]);Ne.key!=null&&ne.set(Ne.key,D)}let he,Te=0;const Pe=X-Z+1;let st=!1,Le=0;const Xt=new Array(Pe);for(D=0;D<Pe;D++)Xt[D]=0;for(D=Q;D<=$;D++){const Ne=g[D];if(Te>=Pe){Ie(Ne,k,x,!0);continue}let rt;if(Ne.key!=null)rt=ne.get(Ne.key);else for(he=Z;he<=X;he++)if(Xt[he-Z]===0&&vi(Ne,y[he])){rt=he;break}rt===void 0?Ie(Ne,k,x,!0):(Xt[rt-Z]=D+1,rt>=Le?Le=rt:st=!0,M(Ne,y[rt],A,null,k,x,H,j,U),Te++)}const ii=st?Ud(Xt):Bn;for(he=ii.length-1,D=Pe-1;D>=0;D--){const Ne=Z+D,rt=y[Ne],Yi=y[Ne+1],Nn=Ne+1<Y?Yi.el||pu(Yi):O;Xt[D]===0?M(null,rt,A,Nn,k,x,H,j,U):st&&(he<0||D!==ii[he]?it(rt,A,Nn,2):he--)}}},it=(g,y,A,O,k=null)=>{const{el:x,type:H,transition:j,children:U,shapeFlag:D}=g;if(D&6){it(g.component.subTree,y,A,O);return}if(D&128){g.suspense.move(y,A,O);return}if(D&64){H.move(g,y,A,q);return}if(H===kt){i(x,y,A);for(let $=0;$<U.length;$++)it(U[$],y,A,O);i(g.anchor,y,A);return}if(H===vs){G(g,y,A);return}if(O!==2&&D&1&&j)if(O===0)j.beforeEnter(x),i(x,y,A),Je(()=>j.enter(x),k);else{const{leave:$,delayLeave:X,afterLeave:Q}=j,Z=()=>{g.ctx.isUnmounted?r(x):i(x,y,A)},ne=()=>{x._isLeaving&&x[Zf](!0),$(x,()=>{Z(),Q&&Q()})};X?X(x,Z,ne):ne()}else i(x,y,A)},Ie=(g,y,A,O=!1,k=!1)=>{const{type:x,props:H,ref:j,children:U,dynamicChildren:D,shapeFlag:Y,patchFlag:$,dirs:X,cacheIndex:Q,memo:Z}=g;if($===-2&&(k=!1),j!=null&&(Vt(),Ti(j,null,A,g,!0),$t()),Q!=null&&(y.renderCache[Q]=void 0),Y&256){y.ctx.deactivate(g);return}const ne=Y&1&&X,he=!Ai(g);let Te;if(he&&(Te=H&&H.onVnodeBeforeUnmount)&&mt(Te,y,g),Y&6)et(g.component,A,O);else{if(Y&128){g.suspense.unmount(A,O);return}ne&&_n(g,null,y,"beforeUnmount"),Y&64?g.type.remove(g,y,A,q,O):D&&!D.hasOnce&&(x!==kt||$>0&&$&64)?qe(D,y,A,!1,!0):(x===kt&&$&384||!k&&Y&16)&&qe(U,y,A),O&&be(g)}const Pe=Z!=null&&Q==null;(he&&(Te=H&&H.onVnodeUnmounted)||ne||Pe)&&Je(()=>{Te&&mt(Te,y,g),ne&&_n(g,null,y,"unmounted"),Pe&&(g.el=null)},A)},be=g=>{const{type:y,el:A,anchor:O,transition:k}=g;if(y===kt){Jt(A,O);return}if(y===vs){K(g);return}const x=()=>{r(A),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:H,delayLeave:j}=k,U=()=>H(A,x);j?j(g.el,x,U):U()}else x()},Jt=(g,y)=>{let A;for(;g!==y;)A=T(g),r(g),g=A;r(y)},et=(g,y,A)=>{const{bum:O,scope:k,job:x,subTree:H,um:j,m:U,a:D}=g;Qa(U),Qa(D),O&&_r(O),k.stop(),x&&(x.flags|=8,Ie(H,g,y,A)),j&&Je(j,y),Je(()=>{g.isUnmounted=!0},y)},qe=(g,y,A,O=!1,k=!1,x=0)=>{for(let H=x;H<g.length;H++)Ie(g[H],y,A,O,k)},N=g=>{if(g.shapeFlag&6)return N(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const y=T(g.anchor||g.el),A=y&&y[Yf];return A?T(A):y};let z=!1;const V=(g,y,A)=>{let O;g==null?y._vnode&&(Ie(y._vnode,null,null,!0),O=y._vnode.component):M(y._vnode||null,g,y,null,null,null,A),y._vnode=g,z||(z=!0,Va(O),$c(),z=!1)},q={p:M,um:Ie,m:it,r:be,mt:Be,mc:m,pc:re,pbc:I,n:N,o:t};return{render:V,hydrate:void 0,createApp:wd(V)}}function Tr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Md(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fu(t,e,n=!1){const i=t.children,r=e.children;if(te(i)&&te(r))for(let o=0;o<i.length;o++){const l=i[o];let u=r[o];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=r[o]=Dt(r[o]),u.el=l.el),!n&&u.patchFlag!==-2&&fu(l,u)),u.type===Js&&(u.patchFlag===-1&&(u=r[o]=Dt(u)),u.el=l.el),u.type===dn&&!u.el&&(u.el=l.el)}}function Ud(t){const e=t.slice(),n=[0];let i,r,o,l,u;const h=t.length;for(i=0;i<h;i++){const d=t[i];if(d!==0){if(r=n[n.length-1],t[r]<d){e[i]=r,n.push(i);continue}for(o=0,l=n.length-1;o<l;)u=o+l>>1,t[n[u]]<d?o=u+1:l=u;d<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}function du(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:du(e)}function Qa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function pu(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?pu(e.subTree):null}const gu=t=>t.__isSuspense;function Fd(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):Kf(t)}const kt=Symbol.for("v-fgt"),Js=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),vs=Symbol.for("v-stc"),Ri=[];let tt=null;function Ut(t=!1){Ri.push(tt=t?null:[])}function jd(){Ri.pop(),tt=Ri[Ri.length-1]||null}let Ui=1;function Cs(t,e=!1){Ui+=t,t<0&&tt&&e&&(tt.hasOnce=!0)}function mu(t){return t.dynamicChildren=Ui>0?tt||Bn:null,jd(),Ui>0&&tt&&tt.push(t),t}function In(t,e,n,i,r,o){return mu(me(t,e,n,i,r,o,!0))}function vu(t,e,n,i,r){return mu(Qe(t,e,n,i,r,!0))}function Ps(t){return t?t.__v_isVNode===!0:!1}function vi(t,e){return t.type===e.type&&t.key===e.key}const _u=({key:t})=>t??null,_s=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Re(t)||je(t)||ie(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function me(t,e=null,n=null,i=0,r=null,o=t===kt?0:1,l=!1,u=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_u(e),ref:e&&_s(e),scopeId:Wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Et};return u?(Ro(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=Re(n)?8:16),Ui>0&&!l&&tt&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&tt.push(h),h}const Qe=Bd;function Bd(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===fd)&&(t=dn),Ps(t)){const u=Jn(t,e,!0);return n&&Ro(u,n),Ui>0&&!o&&tt&&(u.shapeFlag&6?tt[tt.indexOf(t)]=u:tt.push(u)),u.patchFlag=-2,u}if(ep(t)&&(t=t.__vccOpts),e){e=Hd(e);let{class:u,style:h}=e;u&&!Re(u)&&(e.class=fo(u)),ve(h)&&(Io(h)&&!te(h)&&(h=De({},h)),e.style=ho(h))}const l=Re(t)?1:gu(t)?128:Qf(t)?64:ve(t)?4:ie(t)?2:0;return me(t,e,n,i,r,l,o,!0)}function Hd(t){return t?Io(t)||ou(t)?De({},t):t:null}function Jn(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:l,children:u,transition:h}=t,d=e?Wd(r||{},e):r,p={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&_u(d),ref:e&&e.ref?n&&o?te(o)?o.concat(_s(e)):[o,_s(e)]:_s(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?l===-1?16:l|16:l,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:h,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jn(t.ssContent),ssFallback:t.ssFallback&&Jn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return h&&i&&To(p,h.clone(p)),p}function Vd(t=" ",e=0){return Qe(Js,null,t,e)}function $d(t,e){const n=Qe(vs,null,t);return n.staticCount=e,n}function Gd(t="",e=!1){return e?(Ut(),vu(dn,null,t)):Qe(dn,null,t)}function yt(t){return t==null||typeof t=="boolean"?Qe(dn):te(t)?Qe(kt,null,t.slice()):Ps(t)?Dt(t):Qe(Js,null,String(t))}function Dt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jn(t)}function Ro(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ro(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ou(e)?e._ctx=Et:r===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),i&64?(n=16,e=[Vd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wd(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=fo([e.class,i.class]));else if(r==="style")e.style=ho([e.style,i.style]);else if(Hs(r)){const o=e[r],l=i[r];l&&o!==l&&!(te(o)&&o.includes(l))?e[r]=o?[].concat(o,l):l:l==null&&o==null&&!Vs(r)&&(e[r]=l)}else r!==""&&(e[r]=i[r])}return e}function mt(t,e,n,i=null){St(t,e,7,[n,i])}const Kd=tu();let zd=0;function qd(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Kd,o={uid:zd++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(i,r),emitsOptions:nu(i,r),emit:null,emitted:null,propsDefaults:we,inheritAttrs:i.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Id.bind(null,o),t.ce&&t.ce(o),o}let Ke=null;const Jd=()=>Ke||Et;let Os,qr;{const t=Gs(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(l=>l(o)):r[0](o)}};Os=e("__VUE_INSTANCE_SETTERS__",n=>Ke=n),qr=e("__VUE_SSR_SETTERS__",n=>Fi=n)}const Gi=t=>{const e=Ke;return Os(t),t.scope.on(),()=>{t.scope.off(),Os(e)}},Za=()=>{Ke&&Ke.scope.off(),Os(null)};function yu(t){return t.vnode.shapeFlag&4}let Fi=!1;function Xd(t,e=!1,n=!1){e&&qr(e);const{props:i,children:r}=t.vnode,o=yu(t);Cd(t,i,o,e),xd(t,r,n||e);const l=o?Yd(t,e):void 0;return e&&qr(!1),l}function Yd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dd);const{setup:i}=n;if(i){Vt();const r=t.setupContext=i.length>1?Zd(t):null,o=Gi(t),l=$i(i,t,0,[t.props,r]),u=dc(l);if($t(),o(),(u||t.sp)&&!Ai(t)&&Jc(t),u){if(l.then(Za,Za),e)return l.then(h=>{el(t,h)}).catch(h=>{Ks(h,t,0)});t.asyncDep=l}else el(t,l)}else wu(t)}function el(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=jc(e)),wu(t)}function wu(t,e,n){const i=t.type;t.render||(t.render=i.render||It);{const r=Gi(t);Vt();try{pd(t)}finally{$t(),r()}}}const Qd={get(t,e){return Fe(t,"get",""),t[e]}};function Zd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qd),slots:t.slots,emit:t.emit,expose:e}}function Co(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jc(Uc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)},has(e,n){return n in e||n in Si}})):t.proxy}function ep(t){return ie(t)&&"__vccOpts"in t}const at=(t,e)=>Hf(t,e,Fi);function Eu(t,e,n){try{Cs(-1);const i=arguments.length;return i===2?ve(e)&&!te(e)?Ps(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ps(n)&&(n=[n]),Qe(t,e,n))}finally{Cs(1)}}const tp="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jr;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{Jr=tl.createPolicy("vue",{createHTML:t=>t})}catch{}const Iu=Jr?t=>Jr.createHTML(t):t=>t,np="http://www.w3.org/2000/svg",ip="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,nl=xt&&xt.createElement("template"),sp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?xt.createElementNS(np,t):e==="mathml"?xt.createElementNS(ip,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const l=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{nl.innerHTML=Iu(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const u=nl.content;if(i==="svg"||i==="mathml"){const h=u.firstChild;for(;h.firstChild;)u.appendChild(h.firstChild);u.removeChild(h)}e.insertBefore(u,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rp=Symbol("_vtc");function op(t,e,n){const i=t[rp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const il=Symbol("_vod"),ap=Symbol("_vsh"),lp=Symbol(""),cp=/(?:^|;)\s*display\s*:/;function up(t,e,n){const i=t.style,r=Re(n);let o=!1;if(n&&!r){if(e)if(Re(e))for(const l of e.split(";")){const u=l.slice(0,l.indexOf(":")).trim();n[u]==null&&wi(i,u,"")}else for(const l in e)n[l]==null&&wi(i,l,"");for(const l in n){l==="display"&&(o=!0);const u=n[l];u!=null?fp(t,l,!Re(e)&&e?e[l]:void 0,u)||wi(i,l,u):wi(i,l,"")}}else if(r){if(e!==n){const l=i[lp];l&&(n+=";"+l),i.cssText=n,o=cp.test(n)}}else e&&t.removeAttribute("style");il in t&&(t[il]=o?i.display:"",t[ap]&&(i.display="none"))}const sl=/\s*!important$/;function wi(t,e,n){if(te(n))n.forEach(i=>wi(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=hp(t,e);sl.test(n)?t.setProperty(On(i),n.replace(sl,""),"important"):t[i]=n}}const rl=["Webkit","Moz","ms"],Ar={};function hp(t,e){const n=Ar[e];if(n)return n;let i=ht(e);if(i!=="filter"&&i in t)return Ar[e]=i;i=mc(i);for(let r=0;r<rl.length;r++){const o=rl[r]+i;if(o in t)return Ar[e]=o}return e}function fp(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Re(i)&&n===i}const ol="http://www.w3.org/1999/xlink";function al(t,e,n,i,r,o=gf(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ol,e.slice(6,e.length)):t.setAttributeNS(ol,e,n):n==null||o&&!_c(n)?t.removeAttribute(e):t.setAttribute(e,o?"":At(n)?String(n):n)}function ll(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Iu(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const u=o==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?t.type==="checkbox"?"on":"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=_c(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(r||e)}function dp(t,e,n,i){t.addEventListener(e,n,i)}function pp(t,e,n,i){t.removeEventListener(e,n,i)}const cl=Symbol("_vei");function gp(t,e,n,i,r=null){const o=t[cl]||(t[cl]={}),l=o[e];if(i&&l)l.value=i;else{const[u,h]=mp(e);if(i){const d=o[e]=yp(i,r);dp(t,u,d,h)}else l&&(pp(t,u,l,h),o[e]=void 0)}}const ul=/(?:Once|Passive|Capture)$/;function mp(t){let e;if(ul.test(t)){e={};let i;for(;i=t.match(ul);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Sr=0;const vp=Promise.resolve(),_p=()=>Sr||(vp.then(()=>Sr=0),Sr=Date.now());function yp(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;St(wp(i,n.value),e,5,[i])};return n.value=t,n.attached=_p(),n}function wp(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const hl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ep=(t,e,n,i,r,o)=>{const l=r==="svg";e==="class"?op(t,i,l):e==="style"?up(t,n,i):Hs(e)?Vs(e)||gp(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ip(t,e,i,l))?(ll(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&al(t,e,i,l,o,e!=="value")):t._isVueCE&&(bp(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Re(i)))?ll(t,ht(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),al(t,e,i,l))};function Ip(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&hl(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return hl(e)&&Re(n)?!1:e in t}function bp(t,e){const n=t._def.props;if(!n)return!1;const i=ht(e);return Array.isArray(n)?n.some(r=>ht(r)===i):Object.keys(n).some(r=>ht(r)===i)}const Tp=De({patchProp:Ep},sp);let fl;function Ap(){return fl||(fl=Dd(Tp))}const Sp=(...t)=>{const e=Ap().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Cp(i);if(!r)return;const o=e._component;!ie(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const l=n(r,!1,Rp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},e};function Rp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Cp(t){return Re(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Pp=Symbol();var dl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dl||(dl={}));function Op(){const t=vf(!0),e=t.run(()=>Li({}));let n=[],i=[];const r=Uc({install(o){r._a=o,o.provide(Pp,r),o.config.globalProperties.$pinia=r,i.forEach(l=>n.push(l)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const jn=typeof document<"u";function bu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Np(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&bu(t.default)}const fe=Object.assign;function Rr(t,e){const n={};for(const i in e){const r=e[i];n[i]=gt(r)?r.map(t):t(r)}return n}const Ci=()=>{},gt=Array.isArray;function pl(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Tu=/#/g,xp=/&/g,kp=/\//g,Dp=/=/g,Lp=/\?/g,Au=/\+/g,Mp=/%5B/g,Up=/%5D/g,Su=/%5E/g,Fp=/%60/g,Ru=/%7B/g,jp=/%7C/g,Cu=/%7D/g,Bp=/%20/g;function Po(t){return t==null?"":encodeURI(""+t).replace(jp,"|").replace(Mp,"[").replace(Up,"]")}function Hp(t){return Po(t).replace(Ru,"{").replace(Cu,"}").replace(Su,"^")}function Xr(t){return Po(t).replace(Au,"%2B").replace(Bp,"+").replace(Tu,"%23").replace(xp,"%26").replace(Fp,"`").replace(Ru,"{").replace(Cu,"}").replace(Su,"^")}function Vp(t){return Xr(t).replace(Dp,"%3D")}function $p(t){return Po(t).replace(Tu,"%23").replace(Lp,"%3F")}function Gp(t){return $p(t).replace(kp,"%2F")}function ji(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Wp=/\/$/,Kp=t=>t.replace(Wp,"");function Cr(t,e,n="/"){let i,r={},o="",l="";const u=e.indexOf("#");let h=e.indexOf("?");return h=u>=0&&h>u?-1:h,h>=0&&(i=e.slice(0,h),o=e.slice(h,u>0?u:e.length),r=t(o.slice(1))),u>=0&&(i=i||e.slice(0,u),l=e.slice(u,e.length)),i=Xp(i??e,n),{fullPath:i+o+l,path:i,query:r,hash:ji(l)}}function zp(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function gl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qp(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Xn(e.matched[i],n.matched[r])&&Pu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Pu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Jp(t[n],e[n]))return!1;return!0}function Jp(t,e){return gt(t)?ml(t,e):gt(e)?ml(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ml(t,e){return gt(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Xp(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let o=n.length-1,l,u;for(l=0;l<i.length;l++)if(u=i[l],u!==".")if(u==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+i.slice(l).join("/")}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Yr=function(t){return t.pop="pop",t.push="push",t}({}),Pr=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function Yp(t){if(!t)if(jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kp(t)}const Qp=/^[^#]+#/;function Zp(t,e){return t.replace(Qp,"#")+e}function eg(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Xs=()=>({left:window.scrollX,top:window.scrollY});function tg(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=eg(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vl(t,e){return(history.state?history.state.position-e:-1)+t}const Qr=new Map;function ng(t,e){Qr.set(t,e)}function ig(t){const e=Qr.get(t);return Qr.delete(t),e}function sg(t){return typeof t=="string"||t&&typeof t=="object"}function Ou(t){return typeof t=="string"||typeof t=="symbol"}let Ae=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Nu=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function Yn(t,e){return fe(new Error,{type:t,[Nu]:!0},e)}function Nt(t,e){return t instanceof Error&&Nu in t&&(e==null||!!(t.type&e))}const rg=["params","query","hash"];function og(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of rg)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function ag(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Au," "),o=r.indexOf("="),l=ji(o<0?r:r.slice(0,o)),u=o<0?null:ji(r.slice(o+1));if(l in e){let h=e[l];gt(h)||(h=e[l]=[h]),h.push(u)}else e[l]=u}return e}function _l(t){let e="";for(let n in t){const i=t[n];if(n=Vp(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(gt(i)?i.map(r=>r&&Xr(r)):[i&&Xr(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function lg(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=gt(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const cg=Symbol(""),yl=Symbol(""),Ys=Symbol(""),xu=Symbol(""),Zr=Symbol("");function _i(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sn(t,e,n,i,r,o=l=>l()){const l=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((u,h)=>{const d=T=>{T===!1?h(Yn(Ae.NAVIGATION_ABORTED,{from:n,to:e})):T instanceof Error?h(T):sg(T)?h(Yn(Ae.NAVIGATION_GUARD_REDIRECT,{from:e,to:T})):(l&&i.enterCallbacks[r]===l&&typeof T=="function"&&l.push(T),u())},p=o(()=>t.call(i&&i.instances[r],e,n,d));let v=Promise.resolve(p);t.length<3&&(v=v.then(d)),v.catch(T=>h(T))})}function Or(t,e,n,i,r=o=>o()){const o=[];for(const l of t)for(const u in l.components){let h=l.components[u];if(!(e!=="beforeRouteEnter"&&!l.instances[u]))if(bu(h)){const d=(h.__vccOpts||h)[e];d&&o.push(sn(d,n,i,l,u,r))}else{let d=h();o.push(()=>d.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${u}" at "${l.path}"`);const v=Np(p)?p.default:p;l.mods[u]=p,l.components[u]=v;const T=(v.__vccOpts||v)[e];return T&&sn(T,n,i,l,u,r)()}))}}return o}function ug(t,e){const n=[],i=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let l=0;l<o;l++){const u=e.matched[l];u&&(t.matched.find(d=>Xn(d,u))?i.push(u):n.push(u));const h=t.matched[l];h&&(e.matched.find(d=>Xn(d,h))||r.push(h))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hg=()=>location.protocol+"//"+location.host;function ku(t,e){const{pathname:n,search:i,hash:r}=e,o=t.indexOf("#");if(o>-1){let l=r.includes(t.slice(o))?t.slice(o).length:1,u=r.slice(l);return u[0]!=="/"&&(u="/"+u),gl(u,"")}return gl(n,t)+i+r}function fg(t,e,n,i){let r=[],o=[],l=null;const u=({state:T})=>{const C=ku(t,location),L=n.value,M=e.value;let W=0;if(T){if(n.value=C,e.value=T,l&&l===L){l=null;return}W=M?T.position-M.position:0}else i(C);r.forEach(J=>{J(n.value,L,{delta:W,type:Yr.pop,direction:W?W>0?Pr.forward:Pr.back:Pr.unknown})})};function h(){l=n.value}function d(T){r.push(T);const C=()=>{const L=r.indexOf(T);L>-1&&r.splice(L,1)};return o.push(C),C}function p(){if(document.visibilityState==="hidden"){const{history:T}=window;if(!T.state)return;T.replaceState(fe({},T.state,{scroll:Xs()}),"")}}function v(){for(const T of o)T();o=[],window.removeEventListener("popstate",u),window.removeEventListener("pagehide",p),document.removeEventListener("visibilitychange",p)}return window.addEventListener("popstate",u),window.addEventListener("pagehide",p),document.addEventListener("visibilitychange",p),{pauseListeners:h,listen:d,destroy:v}}function wl(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Xs():null}}function dg(t){const{history:e,location:n}=window,i={value:ku(t,n)},r={value:e.state};r.value||o(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const v=t.indexOf("#"),T=v>-1?(n.host&&document.querySelector("base")?t:t.slice(v))+h:hg()+t+h;try{e[p?"replaceState":"pushState"](d,"",T),r.value=d}catch(C){console.error(C),n[p?"replace":"assign"](T)}}function l(h,d){o(h,fe({},e.state,wl(r.value.back,h,r.value.forward,!0),d,{position:r.value.position}),!0),i.value=h}function u(h,d){const p=fe({},r.value,e.state,{forward:h,scroll:Xs()});o(p.current,p,!0),o(h,fe({},wl(i.value,h,null),{position:p.position+1},d),!1),i.value=h}return{location:i,state:r,push:u,replace:l}}function pg(t){t=Yp(t);const e=dg(t),n=fg(t,e.state,e.location,e.replace);function i(o,l=!0){l||n.pauseListeners(),history.go(o)}const r=fe({location:"",base:t,go:i,createHref:Zp.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gg(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),pg(t)}let bn=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var Oe=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(Oe||{});const mg={type:bn.Static,value:""},vg=/[a-zA-Z0-9_]/;function _g(t){if(!t)return[[]];if(t==="/")return[[mg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(C){throw new Error(`ERR (${n})/"${d}": ${C}`)}let n=Oe.Static,i=n;const r=[];let o;function l(){o&&r.push(o),o=[]}let u=0,h,d="",p="";function v(){d&&(n===Oe.Static?o.push({type:bn.Static,value:d}):n===Oe.Param||n===Oe.ParamRegExp||n===Oe.ParamRegExpEnd?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:bn.Param,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function T(){d+=h}for(;u<t.length;){if(h=t[u++],h==="\\"&&n!==Oe.ParamRegExp){i=n,n=Oe.EscapeNext;continue}switch(n){case Oe.Static:h==="/"?(d&&v(),l()):h===":"?(v(),n=Oe.Param):T();break;case Oe.EscapeNext:T(),n=i;break;case Oe.Param:h==="("?n=Oe.ParamRegExp:vg.test(h)?T():(v(),n=Oe.Static,h!=="*"&&h!=="?"&&h!=="+"&&u--);break;case Oe.ParamRegExp:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=Oe.ParamRegExpEnd:p+=h;break;case Oe.ParamRegExpEnd:v(),n=Oe.Static,h!=="*"&&h!=="?"&&h!=="+"&&u--,p="";break;default:e("Unknown state");break}}return n===Oe.ParamRegExp&&e(`Unfinished custom RegExp for param "${d}"`),v(),l(),r}const El="[^/]+?",yg={sensitive:!1,strict:!1,start:!0,end:!0};var $e=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}($e||{});const wg=/[.+*?^${}()[\]/\\]/g;function Eg(t,e){const n=fe({},yg,e),i=[];let r=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[$e.Root];n.strict&&!d.length&&(r+="/");for(let v=0;v<d.length;v++){const T=d[v];let C=$e.Segment+(n.sensitive?$e.BonusCaseSensitive:0);if(T.type===bn.Static)v||(r+="/"),r+=T.value.replace(wg,"\\$&"),C+=$e.Static;else if(T.type===bn.Param){const{value:L,repeatable:M,optional:W,regexp:J}=T;o.push({name:L,repeatable:M,optional:W});const B=J||El;if(B!==El){C+=$e.BonusCustomRegExp;try{`${B}`}catch(K){throw new Error(`Invalid custom RegExp for param "${L}" (${B}): `+K.message)}}let G=M?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;v||(G=W&&d.length<2?`(?:/${G})`:"/"+G),W&&(G+="?"),r+=G,C+=$e.Dynamic,W&&(C+=$e.BonusOptional),M&&(C+=$e.BonusRepeatable),B===".*"&&(C+=$e.BonusWildcard)}p.push(C)}i.push(p)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=$e.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const l=new RegExp(r,n.sensitive?"":"i");function u(d){const p=d.match(l),v={};if(!p)return null;for(let T=1;T<p.length;T++){const C=p[T]||"",L=o[T-1];v[L.name]=C&&L.repeatable?C.split("/"):C}return v}function h(d){let p="",v=!1;for(const T of t){(!v||!p.endsWith("/"))&&(p+="/"),v=!1;for(const C of T)if(C.type===bn.Static)p+=C.value;else if(C.type===bn.Param){const{value:L,repeatable:M,optional:W}=C,J=L in d?d[L]:"";if(gt(J)&&!M)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const B=gt(J)?J.join("/"):J;if(!B)if(W)T.length<2&&(p.endsWith("/")?p=p.slice(0,-1):v=!0);else throw new Error(`Missing required param "${L}"`);p+=B}}return p||"/"}return{re:l,score:i,keys:o,parse:u,stringify:h}}function Ig(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===$e.Static+$e.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===$e.Static+$e.Segment?1:-1:0}function Du(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const o=Ig(i[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-i.length)===1){if(Il(i))return 1;if(Il(r))return-1}return r.length-i.length}function Il(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bg={strict:!1,end:!0,sensitive:!1};function Tg(t,e,n){const i=Eg(_g(t.path),n),r=fe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Ag(t,e){const n=[],i=new Map;e=pl(bg,e);function r(v){return i.get(v)}function o(v,T,C){const L=!C,M=Tl(v);M.aliasOf=C&&C.record;const W=pl(e,v),J=[M];if("alias"in v){const K=typeof v.alias=="string"?[v.alias]:v.alias;for(const oe of K)J.push(Tl(fe({},M,{components:C?C.record.components:M.components,path:oe,aliasOf:C?C.record:M})))}let B,G;for(const K of J){const{path:oe}=K;if(T&&oe[0]!=="/"){const ce=T.record.path,E=ce[ce.length-1]==="/"?"":"/";K.path=T.record.path+(oe&&E+oe)}if(B=Tg(K,T,W),C?C.alias.push(B):(G=G||B,G!==B&&G.alias.push(B),L&&v.name&&!Al(B)&&l(v.name)),Lu(B)&&h(B),M.children){const ce=M.children;for(let E=0;E<ce.length;E++)o(ce[E],B,C&&C.children[E])}C=C||B}return G?()=>{l(G)}:Ci}function l(v){if(Ou(v)){const T=i.get(v);T&&(i.delete(v),n.splice(n.indexOf(T),1),T.children.forEach(l),T.alias.forEach(l))}else{const T=n.indexOf(v);T>-1&&(n.splice(T,1),v.record.name&&i.delete(v.record.name),v.children.forEach(l),v.alias.forEach(l))}}function u(){return n}function h(v){const T=Cg(v,n);n.splice(T,0,v),v.record.name&&!Al(v)&&i.set(v.record.name,v)}function d(v,T){let C,L={},M,W;if("name"in v&&v.name){if(C=i.get(v.name),!C)throw Yn(Ae.MATCHER_NOT_FOUND,{location:v});W=C.record.name,L=fe(bl(T.params,C.keys.filter(G=>!G.optional).concat(C.parent?C.parent.keys.filter(G=>G.optional):[]).map(G=>G.name)),v.params&&bl(v.params,C.keys.map(G=>G.name))),M=C.stringify(L)}else if(v.path!=null)M=v.path,C=n.find(G=>G.re.test(M)),C&&(L=C.parse(M),W=C.record.name);else{if(C=T.name?i.get(T.name):n.find(G=>G.re.test(T.path)),!C)throw Yn(Ae.MATCHER_NOT_FOUND,{location:v,currentLocation:T});W=C.record.name,L=fe({},T.params,v.params),M=C.stringify(L)}const J=[];let B=C;for(;B;)J.unshift(B.record),B=B.parent;return{name:W,path:M,params:L,matched:J,meta:Rg(J)}}t.forEach(v=>o(v));function p(){n.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:l,clearRoutes:p,getRoutes:u,getRecordMatcher:r}}function bl(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Tl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Sg(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Sg(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Al(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rg(t){return t.reduce((e,n)=>fe(e,n.meta),{})}function Cg(t,e){let n=0,i=e.length;for(;n!==i;){const o=n+i>>1;Du(t,e[o])<0?i=o:n=o+1}const r=Pg(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Pg(t){let e=t;for(;e=e.parent;)if(Lu(e)&&Du(t,e)===0)return e}function Lu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Sl(t){const e=bt(Ys),n=bt(xu),i=at(()=>{const h=Sn(t.to);return e.resolve(h)}),r=at(()=>{const{matched:h}=i.value,{length:d}=h,p=h[d-1],v=n.matched;if(!p||!v.length)return-1;const T=v.findIndex(Xn.bind(null,p));if(T>-1)return T;const C=Rl(h[d-2]);return d>1&&Rl(p)===C&&v[v.length-1].path!==C?v.findIndex(Xn.bind(null,h[d-2])):T}),o=at(()=>r.value>-1&&Dg(n.params,i.value.params)),l=at(()=>r.value>-1&&r.value===n.matched.length-1&&Pu(n.params,i.value.params));function u(h={}){if(kg(h)){const d=e[Sn(t.replace)?"replace":"push"](Sn(t.to)).catch(Ci);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:i,href:at(()=>i.value.href),isActive:o,isExactActive:l,navigate:u}}function Og(t){return t.length===1?t[0]:t}const Ng=qc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sl,setup(t,{slots:e}){const n=Ws(Sl(t)),{options:i}=bt(Ys),r=at(()=>({[Cl(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Cl(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&Og(e.default(n));return t.custom?o:Eu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),xg=Ng;function kg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dg(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!gt(r)||r.length!==i.length||i.some((o,l)=>o.valueOf()!==r[l].valueOf()))return!1}return!0}function Rl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cl=(t,e,n)=>t??e??n,Lg=qc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=bt(Zr),r=at(()=>t.route||i.value),o=bt(yl,0),l=at(()=>{let d=Sn(o);const{matched:p}=r.value;let v;for(;(v=p[d])&&!v.components;)d++;return d}),u=at(()=>r.value.matched[l.value]);gs(yl,at(()=>l.value+1)),gs(cg,u),gs(Zr,r);const h=Li();return ms(()=>[h.value,u.value,t.name],([d,p,v],[T,C,L])=>{p&&(p.instances[v]=d,C&&C!==p&&d&&d===T&&(p.leaveGuards.size||(p.leaveGuards=C.leaveGuards),p.updateGuards.size||(p.updateGuards=C.updateGuards))),d&&p&&(!C||!Xn(p,C)||!T)&&(p.enterCallbacks[v]||[]).forEach(M=>M(d))},{flush:"post"}),()=>{const d=r.value,p=t.name,v=u.value,T=v&&v.components[p];if(!T)return Pl(n.default,{Component:T,route:d});const C=v.props[p],L=C?C===!0?d.params:typeof C=="function"?C(d):C:null,W=Eu(T,fe({},L,e,{onVnodeUnmounted:J=>{J.component.isUnmounted&&(v.instances[p]=null)},ref:h}));return Pl(n.default,{Component:W,route:d})||W}}});function Pl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mu=Lg;function Mg(t){const e=Ag(t.routes,t),n=t.parseQuery||ag,i=t.stringifyQuery||_l,r=t.history,o=_i(),l=_i(),u=_i(),h=Uf(en);let d=en;jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Rr.bind(null,N=>""+N),v=Rr.bind(null,Gp),T=Rr.bind(null,ji);function C(N,z){let V,q;return Ou(N)?(V=e.getRecordMatcher(N),q=z):q=N,e.addRoute(q,V)}function L(N){const z=e.getRecordMatcher(N);z&&e.removeRoute(z)}function M(){return e.getRoutes().map(N=>N.record)}function W(N){return!!e.getRecordMatcher(N)}function J(N,z){if(z=fe({},z||h.value),typeof N=="string"){const A=Cr(n,N,z.path),O=e.resolve({path:A.path},z),k=r.createHref(A.fullPath);return fe(A,O,{params:T(O.params),hash:ji(A.hash),redirectedFrom:void 0,href:k})}let V;if(N.path!=null)V=fe({},N,{path:Cr(n,N.path,z.path).path});else{const A=fe({},N.params);for(const O in A)A[O]==null&&delete A[O];V=fe({},N,{params:v(A)}),z.params=v(z.params)}const q=e.resolve(V,z),se=N.hash||"";q.params=p(T(q.params));const g=zp(i,fe({},N,{hash:Hp(se),path:q.path})),y=r.createHref(g);return fe({fullPath:g,hash:se,query:i===_l?lg(N.query):N.query||{}},q,{redirectedFrom:void 0,href:y})}function B(N){return typeof N=="string"?Cr(n,N,h.value.path):fe({},N)}function G(N,z){if(d!==N)return Yn(Ae.NAVIGATION_CANCELLED,{from:z,to:N})}function K(N){return E(N)}function oe(N){return K(fe(B(N),{replace:!0}))}function ce(N,z){const V=N.matched[N.matched.length-1];if(V&&V.redirect){const{redirect:q}=V;let se=typeof q=="function"?q(N,z):q;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=B(se):{path:se},se.params={}),fe({query:N.query,hash:N.hash,params:se.path!=null?{}:N.params},se)}}function E(N,z){const V=d=J(N),q=h.value,se=N.state,g=N.force,y=N.replace===!0,A=ce(V,q);if(A)return E(fe(B(A),{state:typeof A=="object"?fe({},se,A.state):se,force:g,replace:y}),z||V);const O=V;O.redirectedFrom=z;let k;return!g&&qp(i,q,V)&&(k=Yn(Ae.NAVIGATION_DUPLICATED,{to:O,from:q}),it(q,q,!0,!1)),(k?Promise.resolve(k):I(O,q)).catch(x=>Nt(x)?Nt(x,Ae.NAVIGATION_GUARD_REDIRECT)?x:lt(x):re(x,O,q)).then(x=>{if(x){if(Nt(x,Ae.NAVIGATION_GUARD_REDIRECT))return E(fe({replace:y},B(x.to),{state:typeof x.to=="object"?fe({},se,x.to.state):se,force:g}),z||O)}else x=S(O,q,!0,y,se);return b(O,q,x),x})}function m(N,z){const V=G(N,z);return V?Promise.reject(V):Promise.resolve()}function w(N){const z=Jt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(N):N()}function I(N,z){let V;const[q,se,g]=ug(N,z);V=Or(q.reverse(),"beforeRouteLeave",N,z);for(const A of q)A.leaveGuards.forEach(O=>{V.push(sn(O,N,z))});const y=m.bind(null,N,z);return V.push(y),qe(V).then(()=>{V=[];for(const A of o.list())V.push(sn(A,N,z));return V.push(y),qe(V)}).then(()=>{V=Or(se,"beforeRouteUpdate",N,z);for(const A of se)A.updateGuards.forEach(O=>{V.push(sn(O,N,z))});return V.push(y),qe(V)}).then(()=>{V=[];for(const A of g)if(A.beforeEnter)if(gt(A.beforeEnter))for(const O of A.beforeEnter)V.push(sn(O,N,z));else V.push(sn(A.beforeEnter,N,z));return V.push(y),qe(V)}).then(()=>(N.matched.forEach(A=>A.enterCallbacks={}),V=Or(g,"beforeRouteEnter",N,z,w),V.push(y),qe(V))).then(()=>{V=[];for(const A of l.list())V.push(sn(A,N,z));return V.push(y),qe(V)}).catch(A=>Nt(A,Ae.NAVIGATION_CANCELLED)?A:Promise.reject(A))}function b(N,z,V){u.list().forEach(q=>w(()=>q(N,z,V)))}function S(N,z,V,q,se){const g=G(N,z);if(g)return g;const y=z===en,A=jn?history.state:{};V&&(q||y?r.replace(N.fullPath,fe({scroll:y&&A&&A.scroll},se)):r.push(N.fullPath,se)),h.value=N,it(N,z,V,y),lt()}let _;function Be(){_||(_=r.listen((N,z,V)=>{if(!et.listening)return;const q=J(N),se=ce(q,et.currentRoute.value);if(se){E(fe(se,{replace:!0,force:!0}),q).catch(Ci);return}d=q;const g=h.value;jn&&ng(vl(g.fullPath,V.delta),Xs()),I(q,g).catch(y=>Nt(y,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?y:Nt(y,Ae.NAVIGATION_GUARD_REDIRECT)?(E(fe(B(y.to),{force:!0}),q).then(A=>{Nt(A,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===Yr.pop&&r.go(-1,!1)}).catch(Ci),Promise.reject()):(V.delta&&r.go(-V.delta,!1),re(y,q,g))).then(y=>{y=y||S(q,g,!1),y&&(V.delta&&!Nt(y,Ae.NAVIGATION_CANCELLED)?r.go(-V.delta,!1):V.type===Yr.pop&&Nt(y,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),b(q,g,y)}).catch(Ci)}))}let nt=_i(),Ce=_i(),ae;function re(N,z,V){lt(N);const q=Ce.list();return q.length?q.forEach(se=>se(N,z,V)):console.error(N),Promise.reject(N)}function Ze(){return ae&&h.value!==en?Promise.resolve():new Promise((N,z)=>{nt.add([N,z])})}function lt(N){return ae||(ae=!N,Be(),nt.list().forEach(([z,V])=>N?V(N):z()),nt.reset()),N}function it(N,z,V,q){const{scrollBehavior:se}=t;if(!jn||!se)return Promise.resolve();const g=!V&&ig(vl(N.fullPath,0))||(q||!V)&&history.state&&history.state.scroll||null;return Hc().then(()=>se(N,z,g)).then(y=>y&&tg(y)).catch(y=>re(y,N,z))}const Ie=N=>r.go(N);let be;const Jt=new Set,et={currentRoute:h,listening:!0,addRoute:C,removeRoute:L,clearRoutes:e.clearRoutes,hasRoute:W,getRoutes:M,resolve:J,options:t,push:K,replace:oe,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:o.add,beforeResolve:l.add,afterEach:u.add,onError:Ce.add,isReady:Ze,install(N){N.component("RouterLink",xg),N.component("RouterView",Mu),N.config.globalProperties.$router=et,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Sn(h)}),jn&&!be&&h.value===en&&(be=!0,K(r.location).catch(q=>{}));const z={};for(const q in en)Object.defineProperty(z,q,{get:()=>h.value[q],enumerable:!0});N.provide(Ys,et),N.provide(xu,Mc(z)),N.provide(Zr,h);const V=N.unmount;Jt.add(N),N.unmount=function(){Jt.delete(N),Jt.size<1&&(d=en,_&&_(),_=null,h.value=en,be=!1,ae=!1),V()}}};function qe(N){return N.reduce((z,V)=>z.then(()=>w(V)),Promise.resolve())}return et}function Ug(){return bt(Ys)}const Fg={__name:"App",setup(t){return(e,n)=>(Ut(),vu(Sn(Mu)))}};var Ol={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jg=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],l=t[n++],u=t[n++],h=((r&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Fu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const o=t[r],l=r+1<t.length,u=l?t[r+1]:0,h=r+2<t.length,d=h?t[r+2]:0,p=o>>2,v=(o&3)<<4|u>>4;let T=(u&15)<<2|d>>6,C=d&63;h||(C=64,l||(T=64)),i.push(n[p],n[v],n[T],n[C])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],u=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const v=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||u==null||d==null||v==null)throw new Bg;const T=o<<2|u>>4;if(i.push(T),d!==64){const C=u<<4&240|d>>2;if(i.push(C),v!==64){const L=d<<6&192|v;i.push(L)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hg=function(t){const e=Uu(t);return Fu.encodeByteArray(e,!0)},Ns=function(t){return Hg(t).replace(/\./g,"")},ju=function(t){try{return Fu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=()=>Vg().__FIREBASE_DEFAULTS__,Gg=()=>{if(typeof process>"u"||typeof Ol>"u")return;const t=Ol.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ju(t[1]);return e&&JSON.parse(e)},Oo=()=>{try{return $g()||Gg()||Wg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bu=t=>{var e,n;return(n=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kg=t=>{const e=Bu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Hu=()=>{var t;return(t=Oo())===null||t===void 0?void 0:t.config},Vu=t=>{var e;return(e=Oo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ns(JSON.stringify(n)),Ns(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function Xg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zg(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function em(){try{return typeof indexedDB=="object"}catch{return!1}}function tm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm="FirebaseError";class qt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=nm,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],l=o?im(o,i):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new qt(r,u,i)}}function im(t,e){return t.replace(sm,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const sm=/\{\$([^}]+)}/g;function rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xs(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const o=t[r],l=e[r];if(Nl(o)&&Nl(l)){if(!xs(o,l))return!1}else if(o!==l)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Nl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function om(t,e){const n=new am(t,e);return n.subscribe.bind(n)}class am{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");lm(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Nr),r.error===void 0&&(r.error=Nr),r.complete===void 0&&(r.complete=Nr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zg;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hm(e))try{this.getOrInitializeService({instanceIdentifier:En})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});i.resolve(o)}catch{}}}}clearInstance(e=En){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=En){return this.instances.has(e)}getOptions(e=En){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);i===u&&l.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),o=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(r,o);const l=this.instances.get(r);return l&&e(l,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:um(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=En){return this.component?this.component.multipleInstances?e:En:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function um(t){return t===En?void 0:t}function hm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const dm={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},pm=ge.INFO,gm={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},mm=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=gm[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class No{constructor(e){this.name=e,this._logLevel=pm,this._logHandler=mm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const vm=(t,e)=>e.some(n=>t instanceof n);let xl,kl;function _m(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $u=new WeakMap,eo=new WeakMap,Gu=new WeakMap,xr=new WeakMap,xo=new WeakMap;function wm(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(cn(t.result)),r()},l=()=>{i(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&$u.set(n,t)}).catch(()=>{}),xo.set(e,t),e}function Em(t){if(eo.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),r()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});eo.set(t,e)}let to={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Im(t){to=t(to)}function bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(kr(this),e,...n);return Gu.set(i,e.sort?e.sort():[e]),cn(i)}:ym().includes(t)?function(...e){return t.apply(kr(this),e),cn($u.get(this))}:function(...e){return cn(t.apply(kr(this),e))}}function Tm(t){return typeof t=="function"?bm(t):(t instanceof IDBTransaction&&Em(t),vm(t,_m())?new Proxy(t,to):t)}function cn(t){if(t instanceof IDBRequest)return wm(t);if(xr.has(t))return xr.get(t);const e=Tm(t);return e!==t&&(xr.set(t,e),xo.set(e,t)),e}const kr=t=>xo.get(t);function Am(t,e,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const l=indexedDB.open(t,e),u=cn(l);return i&&l.addEventListener("upgradeneeded",h=>{i(cn(l.result),h.oldVersion,h.newVersion,cn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Sm=["get","getKey","getAll","getAllKeys","count"],Rm=["put","add","delete","clear"],Dr=new Map;function Dl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dr.get(e))return Dr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Rm.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Sm.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,r?"readwrite":"readonly");let d=h.store;return i&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),r&&h.done]))[0]};return Dr.set(e,o),o}Im(t=>({...t,get:(e,n,i)=>Dl(e,n)||t.get(e,n,i),has:(e,n)=>!!Dl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pm(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Pm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const no="@firebase/app",Ll="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new No("@firebase/app"),Om="@firebase/app-compat",Nm="@firebase/analytics-compat",xm="@firebase/analytics",km="@firebase/app-check-compat",Dm="@firebase/app-check",Lm="@firebase/auth",Mm="@firebase/auth-compat",Um="@firebase/database",Fm="@firebase/data-connect",jm="@firebase/database-compat",Bm="@firebase/functions",Hm="@firebase/functions-compat",Vm="@firebase/installations",$m="@firebase/installations-compat",Gm="@firebase/messaging",Wm="@firebase/messaging-compat",Km="@firebase/performance",zm="@firebase/performance-compat",qm="@firebase/remote-config",Jm="@firebase/remote-config-compat",Xm="@firebase/storage",Ym="@firebase/storage-compat",Qm="@firebase/firestore",Zm="@firebase/vertexai-preview",ev="@firebase/firestore-compat",tv="firebase",nv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io="[DEFAULT]",iv={[no]:"fire-core",[Om]:"fire-core-compat",[xm]:"fire-analytics",[Nm]:"fire-analytics-compat",[Dm]:"fire-app-check",[km]:"fire-app-check-compat",[Lm]:"fire-auth",[Mm]:"fire-auth-compat",[Um]:"fire-rtdb",[Fm]:"fire-data-connect",[jm]:"fire-rtdb-compat",[Bm]:"fire-fn",[Hm]:"fire-fn-compat",[Vm]:"fire-iid",[$m]:"fire-iid-compat",[Gm]:"fire-fcm",[Wm]:"fire-fcm-compat",[Km]:"fire-perf",[zm]:"fire-perf-compat",[qm]:"fire-rc",[Jm]:"fire-rc-compat",[Xm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Qm]:"fire-fst",[ev]:"fire-fst-compat",[Zm]:"fire-vertex","fire-js":"fire-js",[tv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Map,sv=new Map,so=new Map;function Ml(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(so.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,t);for(const n of ks.values())Ml(n,t);for(const n of sv.values())Ml(n,t);return!0}function ko(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},un=new Wi("app","Firebase",rv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=nv;function Wu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:io,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw un.create("bad-app-name",{appName:String(r)});if(n||(n=Hu()),!n)throw un.create("no-options");const o=ks.get(r);if(o){if(xs(n,o.options)&&xs(i,o.config))return o;throw un.create("duplicate-app",{appName:r})}const l=new fm(r);for(const h of so.values())l.addComponent(h);const u=new ov(n,i,l);return ks.set(r,u),u}function Ku(t=io){const e=ks.get(t);if(!e&&t===io&&Hu())return Wu();if(!e)throw un.create("no-app",{appName:t});return e}function hn(t,e,n){var i;let r=(i=iv[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${r}" with version "${e}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(u.join(" "));return}Qn(new Cn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebase-heartbeat-database",lv=1,Bi="firebase-heartbeat-store";let Lr=null;function zu(){return Lr||(Lr=Am(av,lv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),Lr}async function cv(t){try{const n=(await zu()).transaction(Bi),i=await n.objectStore(Bi).get(qu(t));return await n.done,i}catch(e){if(e instanceof qt)Wt.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function Ul(t,e){try{const i=(await zu()).transaction(Bi,"readwrite");await i.objectStore(Bi).put(e,qu(t)),await i.done}catch(n){if(n instanceof qt)Wt.warn(n.message);else{const i=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(i.message)}}}function qu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1024,hv=30*24*60*60*1e3;class fv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Fl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=hv}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Wt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fl(),{heartbeatsToSend:i,unsentEntries:r}=dv(this._heartbeatsCache.heartbeats),o=Ns(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Wt.warn(n),""}}}function Fl(){return new Date().toISOString().substring(0,10)}function dv(t,e=uv){const n=[];let i=t.slice();for(const r of t){const o=n.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),jl(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jl(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class pv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return em()?tm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function jl(t){return Ns(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t){Qn(new Cn("platform-logger",e=>new Cm(e),"PRIVATE")),Qn(new Cn("heartbeat",e=>new fv(e),"PRIVATE")),hn(no,Ll,t),hn(no,Ll,"esm2017"),hn("fire-js","")}gv("");var mv="firebase",vv="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(mv,vv,"app");var Bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ju;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function w(){}w.prototype=m.prototype,E.D=m.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,b,S){for(var _=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)_[Be-2]=arguments[Be];return m.prototype[b].apply(I,_)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(E,m,w){w||(w=0);var I=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)I[b]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(b=0;16>b;++b)I[b]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=E.g[0],w=E.g[1],b=E.g[2];var S=E.g[3],_=m+(S^w&(b^S))+I[0]+3614090360&4294967295;m=w+(_<<7&4294967295|_>>>25),_=S+(b^m&(w^b))+I[1]+3905402710&4294967295,S=m+(_<<12&4294967295|_>>>20),_=b+(w^S&(m^w))+I[2]+606105819&4294967295,b=S+(_<<17&4294967295|_>>>15),_=w+(m^b&(S^m))+I[3]+3250441966&4294967295,w=b+(_<<22&4294967295|_>>>10),_=m+(S^w&(b^S))+I[4]+4118548399&4294967295,m=w+(_<<7&4294967295|_>>>25),_=S+(b^m&(w^b))+I[5]+1200080426&4294967295,S=m+(_<<12&4294967295|_>>>20),_=b+(w^S&(m^w))+I[6]+2821735955&4294967295,b=S+(_<<17&4294967295|_>>>15),_=w+(m^b&(S^m))+I[7]+4249261313&4294967295,w=b+(_<<22&4294967295|_>>>10),_=m+(S^w&(b^S))+I[8]+1770035416&4294967295,m=w+(_<<7&4294967295|_>>>25),_=S+(b^m&(w^b))+I[9]+2336552879&4294967295,S=m+(_<<12&4294967295|_>>>20),_=b+(w^S&(m^w))+I[10]+4294925233&4294967295,b=S+(_<<17&4294967295|_>>>15),_=w+(m^b&(S^m))+I[11]+2304563134&4294967295,w=b+(_<<22&4294967295|_>>>10),_=m+(S^w&(b^S))+I[12]+1804603682&4294967295,m=w+(_<<7&4294967295|_>>>25),_=S+(b^m&(w^b))+I[13]+4254626195&4294967295,S=m+(_<<12&4294967295|_>>>20),_=b+(w^S&(m^w))+I[14]+2792965006&4294967295,b=S+(_<<17&4294967295|_>>>15),_=w+(m^b&(S^m))+I[15]+1236535329&4294967295,w=b+(_<<22&4294967295|_>>>10),_=m+(b^S&(w^b))+I[1]+4129170786&4294967295,m=w+(_<<5&4294967295|_>>>27),_=S+(w^b&(m^w))+I[6]+3225465664&4294967295,S=m+(_<<9&4294967295|_>>>23),_=b+(m^w&(S^m))+I[11]+643717713&4294967295,b=S+(_<<14&4294967295|_>>>18),_=w+(S^m&(b^S))+I[0]+3921069994&4294967295,w=b+(_<<20&4294967295|_>>>12),_=m+(b^S&(w^b))+I[5]+3593408605&4294967295,m=w+(_<<5&4294967295|_>>>27),_=S+(w^b&(m^w))+I[10]+38016083&4294967295,S=m+(_<<9&4294967295|_>>>23),_=b+(m^w&(S^m))+I[15]+3634488961&4294967295,b=S+(_<<14&4294967295|_>>>18),_=w+(S^m&(b^S))+I[4]+3889429448&4294967295,w=b+(_<<20&4294967295|_>>>12),_=m+(b^S&(w^b))+I[9]+568446438&4294967295,m=w+(_<<5&4294967295|_>>>27),_=S+(w^b&(m^w))+I[14]+3275163606&4294967295,S=m+(_<<9&4294967295|_>>>23),_=b+(m^w&(S^m))+I[3]+4107603335&4294967295,b=S+(_<<14&4294967295|_>>>18),_=w+(S^m&(b^S))+I[8]+1163531501&4294967295,w=b+(_<<20&4294967295|_>>>12),_=m+(b^S&(w^b))+I[13]+2850285829&4294967295,m=w+(_<<5&4294967295|_>>>27),_=S+(w^b&(m^w))+I[2]+4243563512&4294967295,S=m+(_<<9&4294967295|_>>>23),_=b+(m^w&(S^m))+I[7]+1735328473&4294967295,b=S+(_<<14&4294967295|_>>>18),_=w+(S^m&(b^S))+I[12]+2368359562&4294967295,w=b+(_<<20&4294967295|_>>>12),_=m+(w^b^S)+I[5]+4294588738&4294967295,m=w+(_<<4&4294967295|_>>>28),_=S+(m^w^b)+I[8]+2272392833&4294967295,S=m+(_<<11&4294967295|_>>>21),_=b+(S^m^w)+I[11]+1839030562&4294967295,b=S+(_<<16&4294967295|_>>>16),_=w+(b^S^m)+I[14]+4259657740&4294967295,w=b+(_<<23&4294967295|_>>>9),_=m+(w^b^S)+I[1]+2763975236&4294967295,m=w+(_<<4&4294967295|_>>>28),_=S+(m^w^b)+I[4]+1272893353&4294967295,S=m+(_<<11&4294967295|_>>>21),_=b+(S^m^w)+I[7]+4139469664&4294967295,b=S+(_<<16&4294967295|_>>>16),_=w+(b^S^m)+I[10]+3200236656&4294967295,w=b+(_<<23&4294967295|_>>>9),_=m+(w^b^S)+I[13]+681279174&4294967295,m=w+(_<<4&4294967295|_>>>28),_=S+(m^w^b)+I[0]+3936430074&4294967295,S=m+(_<<11&4294967295|_>>>21),_=b+(S^m^w)+I[3]+3572445317&4294967295,b=S+(_<<16&4294967295|_>>>16),_=w+(b^S^m)+I[6]+76029189&4294967295,w=b+(_<<23&4294967295|_>>>9),_=m+(w^b^S)+I[9]+3654602809&4294967295,m=w+(_<<4&4294967295|_>>>28),_=S+(m^w^b)+I[12]+3873151461&4294967295,S=m+(_<<11&4294967295|_>>>21),_=b+(S^m^w)+I[15]+530742520&4294967295,b=S+(_<<16&4294967295|_>>>16),_=w+(b^S^m)+I[2]+3299628645&4294967295,w=b+(_<<23&4294967295|_>>>9),_=m+(b^(w|~S))+I[0]+4096336452&4294967295,m=w+(_<<6&4294967295|_>>>26),_=S+(w^(m|~b))+I[7]+1126891415&4294967295,S=m+(_<<10&4294967295|_>>>22),_=b+(m^(S|~w))+I[14]+2878612391&4294967295,b=S+(_<<15&4294967295|_>>>17),_=w+(S^(b|~m))+I[5]+4237533241&4294967295,w=b+(_<<21&4294967295|_>>>11),_=m+(b^(w|~S))+I[12]+1700485571&4294967295,m=w+(_<<6&4294967295|_>>>26),_=S+(w^(m|~b))+I[3]+2399980690&4294967295,S=m+(_<<10&4294967295|_>>>22),_=b+(m^(S|~w))+I[10]+4293915773&4294967295,b=S+(_<<15&4294967295|_>>>17),_=w+(S^(b|~m))+I[1]+2240044497&4294967295,w=b+(_<<21&4294967295|_>>>11),_=m+(b^(w|~S))+I[8]+1873313359&4294967295,m=w+(_<<6&4294967295|_>>>26),_=S+(w^(m|~b))+I[15]+4264355552&4294967295,S=m+(_<<10&4294967295|_>>>22),_=b+(m^(S|~w))+I[6]+2734768916&4294967295,b=S+(_<<15&4294967295|_>>>17),_=w+(S^(b|~m))+I[13]+1309151649&4294967295,w=b+(_<<21&4294967295|_>>>11),_=m+(b^(w|~S))+I[4]+4149444226&4294967295,m=w+(_<<6&4294967295|_>>>26),_=S+(w^(m|~b))+I[11]+3174756917&4294967295,S=m+(_<<10&4294967295|_>>>22),_=b+(m^(S|~w))+I[2]+718787259&4294967295,b=S+(_<<15&4294967295|_>>>17),_=w+(S^(b|~m))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(b+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+S&4294967295}i.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var w=m-this.blockSize,I=this.B,b=this.h,S=0;S<m;){if(b==0)for(;S<=w;)r(this,E,S),S+=this.blockSize;if(typeof E=="string"){for(;S<m;)if(I[b++]=E.charCodeAt(S++),b==this.blockSize){r(this,I),b=0;break}}else for(;S<m;)if(I[b++]=E[S++],b==this.blockSize){r(this,I),b=0;break}}this.h=b,this.o+=m},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var w=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=w&255,w/=256;for(this.u(E),E=Array(16),m=w=0;4>m;++m)for(var I=0;32>I;I+=8)E[w++]=this.g[m]>>>I&255;return E};function o(E,m){var w=u;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=m(E)}function l(E,m){this.h=m;for(var w=[],I=!0,b=E.length-1;0<=b;b--){var S=E[b]|0;I&&S==m||(w[b]=S,I=!1)}this.g=w}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new l([m|0],0>m?-1:0)}):new l([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return W(d(-E));for(var m=[],w=1,I=0;E>=w;I++)m[I]=E/w|0,w*=4294967296;return new l(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return W(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(m,8)),I=v,b=0;b<E.length;b+=8){var S=Math.min(8,E.length-b),_=parseInt(E.substring(b,b+S),m);8>S?(S=d(Math.pow(m,S)),I=I.j(S).add(d(_))):(I=I.j(w),I=I.add(d(_)))}return I}var v=h(0),T=h(1),C=h(16777216);t=l.prototype,t.m=function(){if(M(this))return-W(this).m();for(var E=0,m=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*m,m*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(L(this))return"0";if(M(this))return"-"+W(this).toString(E);for(var m=d(Math.pow(E,6)),w=this,I="";;){var b=K(w,m).g;w=J(w,b.j(m));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=b,L(w))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function L(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function M(E){return E.h==-1}t.l=function(E){return E=J(this,E),M(E)?-1:L(E)?0:1};function W(E){for(var m=E.g.length,w=[],I=0;I<m;I++)w[I]=~E.g[I];return new l(w,~E.h).add(T)}t.abs=function(){return M(this)?W(this):this},t.add=function(E){for(var m=Math.max(this.g.length,E.g.length),w=[],I=0,b=0;b<=m;b++){var S=I+(this.i(b)&65535)+(E.i(b)&65535),_=(S>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);I=_>>>16,S&=65535,_&=65535,w[b]=_<<16|S}return new l(w,w[w.length-1]&-2147483648?-1:0)};function J(E,m){return E.add(W(m))}t.j=function(E){if(L(this)||L(E))return v;if(M(this))return M(E)?W(this).j(W(E)):W(W(this).j(E));if(M(E))return W(this.j(W(E)));if(0>this.l(C)&&0>E.l(C))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,w=[],I=0;I<2*m;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<E.g.length;b++){var S=this.i(I)>>>16,_=this.i(I)&65535,Be=E.i(b)>>>16,nt=E.i(b)&65535;w[2*I+2*b]+=_*nt,B(w,2*I+2*b),w[2*I+2*b+1]+=S*nt,B(w,2*I+2*b+1),w[2*I+2*b+1]+=_*Be,B(w,2*I+2*b+1),w[2*I+2*b+2]+=S*Be,B(w,2*I+2*b+2)}for(I=0;I<m;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=m;I<2*m;I++)w[I]=0;return new l(w,0)};function B(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function G(E,m){this.g=E,this.h=m}function K(E,m){if(L(m))throw Error("division by zero");if(L(E))return new G(v,v);if(M(E))return m=K(W(E),m),new G(W(m.g),W(m.h));if(M(m))return m=K(E,W(m)),new G(W(m.g),m.h);if(30<E.g.length){if(M(E)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var w=T,I=m;0>=I.l(E);)w=oe(w),I=oe(I);var b=ce(w,1),S=ce(I,1);for(I=ce(I,2),w=ce(w,2);!L(I);){var _=S.add(I);0>=_.l(E)&&(b=b.add(w),S=_),I=ce(I,1),w=ce(w,1)}return m=J(E,b.j(m)),new G(b,m)}for(b=v;0<=E.l(m);){for(w=Math.max(1,Math.floor(E.m()/m.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=d(w),_=S.j(m);M(_)||0<_.l(E);)w-=I,S=d(w),_=S.j(m);L(S)&&(S=T),b=b.add(S),E=J(E,_)}return new G(b,E)}t.A=function(E){return K(this,E).h},t.and=function(E){for(var m=Math.max(this.g.length,E.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)&E.i(I);return new l(w,this.h&E.h)},t.or=function(E){for(var m=Math.max(this.g.length,E.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)|E.i(I);return new l(w,this.h|E.h)},t.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),w=[],I=0;I<m;I++)w[I]=this.i(I)^E.i(I);return new l(w,this.h^E.h)};function oe(E){for(var m=E.g.length+1,w=[],I=0;I<m;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new l(w,E.h)}function ce(E,m){var w=m>>5;m%=32;for(var I=E.g.length-w,b=[],S=0;S<I;S++)b[S]=0<m?E.i(S+w)>>>m|E.i(S+w+1)<<32-m:E.i(S+w);return new l(b,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=d,l.fromString=p,Ju=l}).apply(typeof Bl<"u"?Bl:typeof self<"u"?self:typeof window<"u"?window:{});var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var i=n(this);function r(s,a){if(a)e:{var c=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var R=s[f];if(!(R in c))break e;c=c[R]}s=s[s.length-1],f=c[s],a=a(f),a!=f&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,f=!1,R={next:function(){if(!f&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}r("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function p(s,a,c){return s.call.apply(s.bind,arguments)}function v(s,a,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,f),s.apply(a,R)}}return function(){return s.apply(a,arguments)}}function T(s,a,c){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,T.apply(null,arguments)}function C(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function L(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,R,P){for(var F=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)F[_e-2]=arguments[_e];return a.prototype[R].apply(f,F)}}function M(s){const a=s.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=s[f];return c}return[]}function W(s,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const R=s.length||0,P=f.length||0;s.length=R+P;for(let F=0;F<P;F++)s[R+F]=f[F]}else s.push(f)}}class J{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function K(s){return K[" "](s),s}K[" "]=function(){};var oe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ce(s,a,c){for(const f in s)a.call(c,s[f],f,s)}function E(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(s,a){let c,f;for(let R=1;R<arguments.length;R++){f=arguments[R];for(c in f)s[c]=f[c];for(let P=0;P<w.length;P++)c=w[P],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function b(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function S(s){u.setTimeout(()=>{throw s},0)}function _(){var s=Ze;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Be{constructor(){this.h=this.g=null}add(a,c){const f=nt.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var nt=new J(()=>new Ce,s=>s.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,re=!1,Ze=new Be,lt=()=>{const s=u.Promise.resolve(void 0);ae=()=>{s.then(it)}};var it=()=>{for(var s;s=_();){try{s.h.call(s.g)}catch(c){S(c)}var a=nt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}re=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var Jt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function et(s,a){if(be.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(oe){e:{try{K(a.nodeName);var R=!0;break e}catch{}R=!1}R||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:qe[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&et.aa.h.call(this)}}L(et,be);var qe={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),z=0;function V(s,a,c,f,R){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=R,this.key=++z,this.da=this.fa=!1}function q(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function se(s){this.src=s,this.g={},this.h=0}se.prototype.add=function(s,a,c,f,R){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var F=y(s,a,f,R);return-1<F?(a=s[F],c||(a.fa=!1)):(a=new V(a,this.src,P,!!f,R),a.fa=c,s.push(a)),a};function g(s,a){var c=a.type;if(c in s.g){var f=s.g[c],R=Array.prototype.indexOf.call(f,a,void 0),P;(P=0<=R)&&Array.prototype.splice.call(f,R,1),P&&(q(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function y(s,a,c,f){for(var R=0;R<s.length;++R){var P=s[R];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==f)return R}return-1}var A="closure_lm_"+(1e6*Math.random()|0),O={};function k(s,a,c,f,R){if(Array.isArray(a)){for(var P=0;P<a.length;P++)k(s,a[P],c,f,R);return null}return c=Q(c),s&&s[N]?s.K(a,c,d(f)?!!f.capture:!1,R):x(s,a,c,!1,f,R)}function x(s,a,c,f,R,P){if(!a)throw Error("Invalid event type");var F=d(R)?!!R.capture:!!R,_e=$(s);if(_e||(s[A]=_e=new se(s)),c=_e.add(a,c,f,F,P),c.proxy)return c;if(f=H(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Jt||(R=F),R===void 0&&(R=!1),s.addEventListener(a.toString(),f,R);else if(s.attachEvent)s.attachEvent(D(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function H(){function s(c){return a.call(s.src,s.listener,c)}const a=Y;return s}function j(s,a,c,f,R){if(Array.isArray(a))for(var P=0;P<a.length;P++)j(s,a[P],c,f,R);else f=d(f)?!!f.capture:!!f,c=Q(c),s&&s[N]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=y(P,c,f,R),-1<c&&(q(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=$(s))&&(a=s.g[a.toString()],s=-1,a&&(s=y(a,c,f,R)),(c=-1<s?a[s]:null)&&U(c))}function U(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[N])g(a.i,s);else{var c=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(c,f,s.capture):a.detachEvent?a.detachEvent(D(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=$(a))?(g(c,s),c.h==0&&(c.src=null,a[A]=null)):q(s)}}}function D(s){return s in O?O[s]:O[s]="on"+s}function Y(s,a){if(s.da)s=!0;else{a=new et(a,this);var c=s.listener,f=s.ha||s.src;s.fa&&U(s),s=c.call(f,a)}return s}function $(s){return s=s[A],s instanceof se?s:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(s){return typeof s=="function"?s:(s[X]||(s[X]=function(a){return s.handleEvent(a)}),s[X])}function Z(){Ie.call(this),this.i=new se(this),this.M=this,this.F=null}L(Z,Ie),Z.prototype[N]=!0,Z.prototype.removeEventListener=function(s,a,c,f){j(this,s,a,c,f)};function ne(s,a){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new be(a,s);else if(a instanceof be)a.target=a.target||s;else{var R=a;a=new be(f,s),I(a,R)}if(R=!0,c)for(var P=c.length-1;0<=P;P--){var F=a.g=c[P];R=he(F,f,!0,a)&&R}if(F=a.g=s,R=he(F,f,!0,a)&&R,R=he(F,f,!1,a)&&R,c)for(P=0;P<c.length;P++)F=a.g=c[P],R=he(F,f,!1,a)&&R}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],f=0;f<c.length;f++)q(c[f]);delete s.g[a],s.h--}}this.F=null},Z.prototype.K=function(s,a,c,f){return this.i.add(String(s),a,!1,c,f)},Z.prototype.L=function(s,a,c,f){return this.i.add(String(s),a,!0,c,f)};function he(s,a,c,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var R=!0,P=0;P<a.length;++P){var F=a[P];if(F&&!F.da&&F.capture==c){var _e=F.listener,xe=F.ha||F.src;F.fa&&g(s.i,F),R=_e.call(xe,f)!==!1&&R}}return R&&!f.defaultPrevented}function Te(s,a,c){if(typeof s=="function")c&&(s=T(s,c));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Pe(s){s.g=Te(()=>{s.g=null,s.i&&(s.i=!1,Pe(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class st extends Ie{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Pe(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Ie.call(this),this.h=s,this.g={}}L(Le,Ie);var Xt=[];function ii(s){ce(s.g,function(a,c){this.g.hasOwnProperty(c)&&U(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),ii(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=u.JSON.stringify,rt=u.JSON.parse,Yi=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Nn(){}Nn.prototype.h=null;function Jo(s){return s.h||(s.h=s.i())}function kh(){}var si={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){be.call(this,"d")}L(tr,be);function nr(){be.call(this,"c")}L(nr,be);var xn={},Xo=null;function ir(){return Xo=Xo||new Z}xn.La="serverreachability";function Yo(s){be.call(this,xn.La,s)}L(Yo,be);function ri(s){const a=ir();ne(a,new Yo(a))}xn.STAT_EVENT="statevent";function Qo(s,a){be.call(this,xn.STAT_EVENT,s),this.stat=a}L(Qo,be);function He(s){const a=ir();ne(a,new Qo(a,s))}xn.Ma="timingevent";function Zo(s,a){be.call(this,xn.Ma,s),this.size=a}L(Zo,be);function oi(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function ai(){this.g=!0}ai.prototype.xa=function(){this.g=!1};function Dh(s,a,c,f,R,P){s.info(function(){if(s.g)if(P)for(var F="",_e=P.split("&"),xe=0;xe<_e.length;xe++){var ue=_e[xe].split("=");if(1<ue.length){var Me=ue[0];ue=ue[1];var Ue=Me.split("_");F=2<=Ue.length&&Ue[1]=="type"?F+(Me+"="+ue+"&"):F+(Me+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+f+") [attempt "+R+"]: "+a+`
`+c+`
`+F})}function Lh(s,a,c,f,R,P,F){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+R+"]: "+a+`
`+c+`
`+P+" "+F})}function kn(s,a,c,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Uh(s,c)+(f?" "+f:"")})}function Mh(s,a){s.info(function(){return"TIMEOUT: "+a})}ai.prototype.info=function(){};function Uh(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var R=f[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Ne(c)}catch{return a}}var sr={NO_ERROR:0,TIMEOUT:8},Fh={},rr;function Qi(){}L(Qi,Nn),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},rr=new Qi;function Yt(s,a,c,f){this.j=s,this.i=a,this.l=c,this.R=f||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ea}function ea(){this.i=null,this.g="",this.h=!1}var ta={},or={};function ar(s,a,c){s.L=1,s.v=ns(Ct(a)),s.m=c,s.P=!0,na(s,null)}function na(s,a){s.F=Date.now(),Zi(s),s.A=Ct(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ma(c.i,"t",f),s.C=0,c=s.j.J,s.h=new ea,s.g=Da(s.j,c?a:null,!s.m),0<s.O&&(s.M=new st(T(s.Y,s,s.g),s.O)),a=s.U,c=s.g,f=s.ca;var R="readystatechange";Array.isArray(R)||(R&&(Xt[0]=R.toString()),R=Xt);for(var P=0;P<R.length;P++){var F=k(c,R[P],f||a.handleEvent,!1,a.h||a);if(!F)break;a.g[F.key]=F}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),ri(),Dh(s.i,s.u,s.A,s.l,s.R,s.m)}Yt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Pt(s)==3?a.j():this.Y(s)},Yt.prototype.Y=function(s){try{if(s==this.g)e:{const Ue=Pt(this.g);var a=this.g.Ba();const Mn=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||ba(this.g)))){this.J||Ue!=4||a==7||(a==8||0>=Mn?ri(3):ri(2)),lr(this);var c=this.g.Z();this.X=c;t:if(ia(this)){var f=ba(this.g);s="";var R=f.length,P=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),li(this);var F="";break t}this.h.i=new u.TextDecoder}for(a=0;a<R;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(P&&a==R-1)});f.length=0,this.h.g+=s,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=c==200,Lh(this.i,this.u,this.A,this.l,this.R,Ue,c),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,xe=this.g;if((_e=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(_e)){var ue=_e;break t}}ue=null}if(c=ue)kn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cr(this,c);else{this.o=!1,this.s=3,He(12),gn(this),li(this);break e}}if(this.P){c=!0;let ct;for(;!this.J&&this.C<F.length;)if(ct=jh(this,F),ct==or){Ue==4&&(this.s=4,He(14),c=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==ta){this.s=4,He(15),kn(this.i,this.l,F,"[Invalid Chunk]"),c=!1;break}else kn(this.i,this.l,ct,null),cr(this,ct);if(ia(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||F.length!=0||this.h.h||(this.s=1,He(16),c=!1),this.o=this.o&&c,!c)kn(this.i,this.l,F,"[Invalid Chunked Response]"),gn(this),li(this);else if(0<F.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),gr(Me),Me.M=!0,He(11))}}else kn(this.i,this.l,F,null),cr(this,F);Ue==4&&gn(this),this.o&&!this.J&&(Ue==4?Oa(this.j,this):(this.o=!1,Zi(this)))}else nf(this.g),c==400&&0<F.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),gn(this),li(this)}}}catch{}finally{}};function ia(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function jh(s,a){var c=s.C,f=a.indexOf(`
`,c);return f==-1?or:(c=Number(a.substring(c,f)),isNaN(c)?ta:(f+=1,f+c>a.length?or:(a=a.slice(f,f+c),s.C=f+c,a)))}Yt.prototype.cancel=function(){this.J=!0,gn(this)};function Zi(s){s.S=Date.now()+s.I,sa(s,s.I)}function sa(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=oi(T(s.ba,s),a)}function lr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Yt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Mh(this.i,this.A),this.L!=2&&(ri(),He(17)),gn(this),this.s=2,li(this)):sa(this,this.S-s)};function li(s){s.j.G==0||s.J||Oa(s.j,s)}function gn(s){lr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ii(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function cr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||ur(c.h,s))){if(!s.K&&ur(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var R=f;if(R[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)ls(c),os(c);else break e;pr(c),He(18)}}else c.za=R[1],0<c.za-c.T&&37500>R[2]&&c.F&&c.v==0&&!c.C&&(c.C=oi(T(c.Za,c),6e3));if(1>=aa(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else vn(c,11)}else if((s.K||c.g==s)&&ls(c),!B(a))for(R=c.Da.g.parse(a),a=0;a<R.length;a++){let ue=R[a];if(c.T=ue[0],ue=ue[1],c.G==2)if(ue[0]=="c"){c.K=ue[1],c.ia=ue[2];const Me=ue[3];Me!=null&&(c.la=Me,c.j.info("VER="+c.la));const Ue=ue[4];Ue!=null&&(c.Aa=Ue,c.j.info("SVER="+c.Aa));const Mn=ue[5];Mn!=null&&typeof Mn=="number"&&0<Mn&&(f=1.5*Mn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const ct=s.g;if(ct){const cs=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cs){var P=f.h;P.g||cs.indexOf("spdy")==-1&&cs.indexOf("quic")==-1&&cs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(hr(P,P.h),P.h=null))}if(f.D){const mr=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;mr&&(f.ya=mr,Ee(f.I,f.D,mr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var F=s;if(f.qa=ka(f,f.J?f.ia:null,f.W),F.K){la(f.h,F);var _e=F,xe=f.L;xe&&(_e.I=xe),_e.B&&(lr(_e),Zi(_e)),f.g=F}else Ca(f);0<c.i.length&&as(c)}else ue[0]!="stop"&&ue[0]!="close"||vn(c,7);else c.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?vn(c,7):dr(c):ue[0]!="noop"&&c.l&&c.l.ta(ue),c.v=0)}}ri(4)}catch{}}var Bh=class{constructor(s,a){this.g=s,this.map=a}};function ra(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function oa(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function aa(s){return s.h?1:s.g?s.g.size:0}function ur(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function hr(s,a){s.g?s.g.add(a):s.h=a}function la(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}ra.prototype.cancel=function(){if(this.i=ca(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ca(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return M(s.i)}function Hh(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,f=0;f<c;f++)a.push(s[f]);return a}a=[],c=0;for(f in s)a[c++]=s[f];return a}function Vh(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const f in s)a[c++]=f;return a}}}function ua(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Vh(s),f=Hh(s),R=f.length,P=0;P<R;P++)a.call(void 0,f[P],c&&c[P],s)}var ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $h(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),R=null;if(0<=f){var P=s[c].substring(0,f);R=s[c].substring(f+1)}else P=s[c];a(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof mn){this.h=s.h,es(this,s.j),this.o=s.o,this.g=s.g,ts(this,s.s),this.l=s.l;var a=s.i,c=new hi;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),fa(this,c),this.m=s.m}else s&&(a=String(s).match(ha))?(this.h=!1,es(this,a[1]||"",!0),this.o=ci(a[2]||""),this.g=ci(a[3]||"",!0),ts(this,a[4]),this.l=ci(a[5]||"",!0),fa(this,a[6]||"",!0),this.m=ci(a[7]||"")):(this.h=!1,this.i=new hi(null,this.h))}mn.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ui(a,da,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ui(a,da,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(ui(c,c.charAt(0)=="/"?Kh:Wh,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",ui(c,qh)),s.join("")};function Ct(s){return new mn(s)}function es(s,a,c){s.j=c?ci(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function ts(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function fa(s,a,c){a instanceof hi?(s.i=a,Jh(s.i,s.h)):(c||(a=ui(a,zh)),s.i=new hi(a,s.h))}function Ee(s,a,c){s.i.set(a,c)}function ns(s){return Ee(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ci(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ui(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Gh),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Gh(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var da=/[#\/\?@]/g,Wh=/[#\?:]/g,Kh=/[#\?]/g,zh=/[#\?@]/g,qh=/#/g;function hi(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Qt(s){s.g||(s.g=new Map,s.h=0,s.i&&$h(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=hi.prototype,t.add=function(s,a){Qt(this),this.i=null,s=Dn(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function pa(s,a){Qt(s),a=Dn(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function ga(s,a){return Qt(s),a=Dn(s,a),s.g.has(a)}t.forEach=function(s,a){Qt(this),this.g.forEach(function(c,f){c.forEach(function(R){s.call(a,R,f,this)},this)},this)},t.na=function(){Qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const R=s[f];for(let P=0;P<R.length;P++)c.push(a[f])}return c},t.V=function(s){Qt(this);let a=[];if(typeof s=="string")ga(this,s)&&(a=a.concat(this.g.get(Dn(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Qt(this),this.i=null,s=Dn(this,s),ga(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ma(s,a,c){pa(s,a),0<c.length&&(s.i=null,s.g.set(Dn(s,a),M(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const P=encodeURIComponent(String(f)),F=this.V(f);for(f=0;f<F.length;f++){var R=P;F[f]!==""&&(R+="="+encodeURIComponent(String(F[f]))),s.push(R)}}return this.i=s.join("&")};function Dn(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Jh(s,a){a&&!s.j&&(Qt(s),s.i=null,s.g.forEach(function(c,f){var R=f.toLowerCase();f!=R&&(pa(this,f),ma(this,R,c))},s)),s.j=a}function Xh(s,a){const c=new ai;if(u.Image){const f=new Image;f.onload=C(Zt,c,"TestLoadImage: loaded",!0,a,f),f.onerror=C(Zt,c,"TestLoadImage: error",!1,a,f),f.onabort=C(Zt,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=C(Zt,c,"TestLoadImage: timeout",!1,a,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Yh(s,a){const c=new ai,f=new AbortController,R=setTimeout(()=>{f.abort(),Zt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(R),P.ok?Zt(c,"TestPingServer: ok",!0,a):Zt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(R),Zt(c,"TestPingServer: error",!1,a)})}function Zt(s,a,c,f,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),f(c)}catch{}}function Qh(){this.g=new Yi}function Zh(s,a,c){const f=c||"";try{ua(s,function(R,P){let F=R;d(R)&&(F=Ne(R)),a.push(f+P+"="+encodeURIComponent(F))})}catch(R){throw a.push(f+"type="+encodeURIComponent("_badmap")),R}}function is(s){this.l=s.Ub||null,this.j=s.eb||!1}L(is,Nn),is.prototype.g=function(){return new ss(this.l,this.j)},is.prototype.i=function(s){return function(){return s}}({});function ss(s,a){Z.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(ss,Z),t=ss.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,di(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;va(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function va(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?fi(this):di(this),this.readyState==3&&va(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,fi(this))},t.Qa=function(s){this.g&&(this.response=s,fi(this))},t.ga=function(){this.g&&fi(this)};function fi(s){s.readyState=4,s.l=null,s.j=null,s.v=null,di(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function di(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function _a(s){let a="";return ce(s,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function fr(s,a,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=_a(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Ee(s,a,c))}function Se(s){Z.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(Se,Z);var ef=/^https?$/i,tf=["POST","PUT"];t=Se.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rr.g(),this.v=this.o?Jo(this.o):Jo(rr),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){ya(this,P);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var R in f)c.set(R,f[R]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),R=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(tf,a,void 0))||f||R||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of c)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ia(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){ya(this,P)}};function ya(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,wa(s),rs(s)}function wa(s){s.A||(s.A=!0,ne(s,"complete"),ne(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,ne(this,"complete"),ne(this,"abort"),rs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rs(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},t.bb=function(){Ea(this)};function Ea(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Pt(s)!=4||s.Z()!=2)){if(s.u&&Pt(s)==4)Te(s.Ea,0,s);else if(ne(s,"readystatechange"),Pt(s)==4){s.h=!1;try{const F=s.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var f;if(f=F===0){var R=String(s.D).match(ha)[1]||null;!R&&u.self&&u.self.location&&(R=u.self.location.protocol.slice(0,-1)),f=!ef.test(R?R.toLowerCase():"")}c=f}if(c)ne(s,"complete"),ne(s,"success");else{s.m=6;try{var P=2<Pt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",wa(s)}}finally{rs(s)}}}}function rs(s,a){if(s.g){Ia(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||ne(s,"ready");try{c.onreadystatechange=f}catch{}}}function Ia(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function Pt(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),rt(a)}};function ba(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function nf(s){const a={};s=(s.g&&2<=Pt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(B(s[f]))continue;var c=b(s[f]);const R=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[R]||[];a[R]=P,P.push(c)}E(a,function(f){return f.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function pi(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ta(s){this.Aa=0,this.i=[],this.j=new ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pi("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pi("baseRetryDelayMs",5e3,s),this.cb=pi("retryDelaySeedMs",1e4,s),this.Wa=pi("forwardChannelMaxRetries",2,s),this.wa=pi("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new ra(s&&s.concurrentRequestLimit),this.Da=new Qh,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ta.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,f){He(0),this.W=s,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=ka(this,null,this.W),as(this)};function dr(s){if(Aa(s),s.G==3){var a=s.U++,c=Ct(s.I);if(Ee(c,"SID",s.K),Ee(c,"RID",a),Ee(c,"TYPE","terminate"),gi(s,c),a=new Yt(s,s.j,a),a.L=2,a.v=ns(Ct(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Da(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Zi(a)}xa(s)}function os(s){s.g&&(gr(s),s.g.cancel(),s.g=null)}function Aa(s){os(s),s.u&&(u.clearTimeout(s.u),s.u=null),ls(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function as(s){if(!oa(s.h)&&!s.s){s.s=!0;var a=s.Ga;ae||lt(),re||(ae(),re=!0),Ze.add(a,s),s.B=0}}function sf(s,a){return aa(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=oi(T(s.Ga,s,a),Na(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const R=new Yt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Ra(this,R,a),c=Ct(this.I),Ee(c,"RID",s),Ee(c,"CVER",22),this.D&&Ee(c,"X-HTTP-Session-Id",this.D),gi(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(_a(P)))+"&"+a:this.m&&fr(c,this.m,P)),hr(this.h,R),this.Ua&&Ee(c,"TYPE","init"),this.P?(Ee(c,"$req",a),Ee(c,"SID","null"),R.T=!0,ar(R,c,null)):ar(R,c,a),this.G=2}}else this.G==3&&(s?Sa(this,s):this.i.length==0||oa(this.h)||Sa(this))};function Sa(s,a){var c;a?c=a.l:c=s.U++;const f=Ct(s.I);Ee(f,"SID",s.K),Ee(f,"RID",c),Ee(f,"AID",s.T),gi(s,f),s.m&&s.o&&fr(f,s.m,s.o),c=new Yt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ra(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),hr(s.h,c),ar(c,f,a)}function gi(s,a){s.H&&ce(s.H,function(c,f){Ee(a,f,c)}),s.l&&ua({},function(c,f){Ee(a,f,c)})}function Ra(s,a,c){c=Math.min(s.i.length,c);var f=s.l?T(s.l.Na,s.l,s):null;e:{var R=s.i;let P=-1;for(;;){const F=["count="+c];P==-1?0<c?(P=R[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let _e=!0;for(let xe=0;xe<c;xe++){let ue=R[xe].g;const Me=R[xe].map;if(ue-=P,0>ue)P=Math.max(0,R[xe].g-100),_e=!1;else try{Zh(Me,F,"req"+ue+"_")}catch{f&&f(Me)}}if(_e){f=F.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,f}function Ca(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;ae||lt(),re||(ae(),re=!0),Ze.add(a,s),s.v=0}}function pr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=oi(T(s.Fa,s),Na(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Pa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=oi(T(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,He(10),os(this),Pa(this))};function gr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Pa(s){s.g=new Yt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Ct(s.qa);Ee(a,"RID","rpc"),Ee(a,"SID",s.K),Ee(a,"AID",s.T),Ee(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Ee(a,"TO",s.ja),Ee(a,"TYPE","xmlhttp"),gi(s,a),s.m&&s.o&&fr(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=ns(Ct(a)),c.m=null,c.P=!0,na(c,s)}t.Za=function(){this.C!=null&&(this.C=null,os(this),pr(this),He(19))};function ls(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Oa(s,a){var c=null;if(s.g==a){ls(s),gr(s),s.g=null;var f=2}else if(ur(s.h,a))c=a.D,la(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var R=s.B;f=ir(),ne(f,new Zo(f,c)),as(s)}else Ca(s);else if(R=a.s,R==3||R==0&&0<a.X||!(f==1&&sf(s,a)||f==2&&pr(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),R){case 1:vn(s,5);break;case 4:vn(s,10);break;case 3:vn(s,6);break;default:vn(s,2)}}}function Na(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function vn(s,a){if(s.j.info("Error code "+a),a==2){var c=T(s.fb,s),f=s.Xa;const R=!f;f=new mn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||es(f,"https"),ns(f),R?Xh(f.toString(),c):Yh(f.toString(),c)}else He(2);s.G=0,s.l&&s.l.sa(a),xa(s),Aa(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),He(2)):(this.j.info("Failed to ping google.com"),He(1))};function xa(s){if(s.G=0,s.ka=[],s.l){const a=ca(s.h);(a.length!=0||s.i.length!=0)&&(W(s.ka,a),W(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function ka(s,a,c){var f=c instanceof mn?Ct(c):new mn(c);if(f.g!="")a&&(f.g=a+"."+f.g),ts(f,f.s);else{var R=u.location;f=R.protocol,a=a?a+"."+R.hostname:R.hostname,R=+R.port;var P=new mn(null);f&&es(P,f),a&&(P.g=a),R&&ts(P,R),c&&(P.l=c),f=P}return c=s.D,a=s.ya,c&&a&&Ee(f,c,a),Ee(f,"VER",s.la),gi(s,f),f}function Da(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Se(new is({eb:c})):new Se(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function La(){}t=La.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ot(s,a){Z.call(this),this.g=new Ta(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Ln(this)}L(ot,Z),ot.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){dr(this.g)},ot.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Ne(s),s=c);a.i.push(new Bh(a.Ya++,s)),a.G==3&&as(a)},ot.prototype.N=function(){this.g.l=null,delete this.j,dr(this.g),delete this.g,ot.aa.N.call(this)};function Ma(s){tr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}L(Ma,tr);function Ua(){nr.call(this),this.status=1}L(Ua,nr);function Ln(s){this.g=s}L(Ln,La),Ln.prototype.ua=function(){ne(this.g,"a")},Ln.prototype.ta=function(s){ne(this.g,new Ma(s))},Ln.prototype.sa=function(s){ne(this.g,new Ua)},Ln.prototype.ra=function(){ne(this.g,"b")},ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,Fh.COMPLETE="complete",kh.EventType=si,si.OPEN="a",si.CLOSE="b",si.ERROR="c",si.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});const Hl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new No("@firebase/firestore");function ut(t,...e){if(Zn.logLevel<=ge.DEBUG){const n=e.map(Do);Zn.debug(`Firestore (${zi}): ${t}`,...n)}}function Xu(t,...e){if(Zn.logLevel<=ge.ERROR){const n=e.map(Do);Zn.error(`Firestore (${zi}): ${t}`,...n)}}function _v(t,...e){if(Zn.logLevel<=ge.WARN){const n=e.map(Do);Zn.warn(`Firestore (${zi}): ${t}`,...n)}}function Do(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t="Unexpected state"){const e=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: `+t;throw Xu(e),new Error(e)}function Pi(t,e){t||Lo()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ye extends qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class wv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ev{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Pi(this.o===void 0);let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let o=new Oi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Oi,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{ut("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(ut("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Oi)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(ut("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Pi(typeof i.accessToken=="string"),new Yu(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pi(e===null||typeof e=="string"),new Ge(e)}}class Iv{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bv{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Iv(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Av{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Pi(this.o===void 0);const i=o=>{o.error!=null&&ut("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,ut("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const r=o=>{ut("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):ut("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pi(typeof n.token=="string"),this.R=n.token,new Tv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Sv(t){return t.name==="IndexedDbTransactionError"}class Ds{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ds("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ds&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vl,le;(le=Vl||(Vl={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ju([4294967295,4294967295],0);function Mr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,n,i=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=i,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&ut("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,i,r,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new Oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,o){const l=Date.now()+i,u=new Mo(e,n,l,r,o);return u.start(i),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ye(Xe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var $l,Gl;(Gl=$l||($l={})).ea="default",Gl.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map;function Pv(t,e,n,i){if(e===!0&&i===!0)throw new Ye(Xe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ov(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Lo()}function Nv(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ye(Xe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ov(t);throw new Ye(Xe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new Ye(Xe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ye(Xe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cv((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ye(Xe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ye(Xe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ye(Xe.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qu{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ye(Xe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ye(Xe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kl(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new yv;switch(i.type){case"firstParty":return new bv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ye(Xe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Wl.get(n);i&&(ut("ComponentProvider","Removing Datastore"),Wl.delete(n),i.terminate())}(this),Promise.resolve()}}function xv(t,e,n,i={}){var r;const o=(t=Nv(t,Qu))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&_v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),i.mockUserToken){let u,h;if(typeof i.mockUserToken=="string")u=i.mockUserToken,h=Ge.MOCK_USER;else{u=qg(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const d=i.mockUserToken.sub||i.mockUserToken.user_id;if(!d)throw new Ye(Xe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ge(d)}t._authCredentials=new wv(new Yu(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Rv(this,"async_queue_retry"),this.Vu=()=>{const i=Mr();i&&ut("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const n=Mr();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Mr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Oi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Sv(e))throw e;ut("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const r=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw Xu("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=n,n}enqueueAfterDelay(e,n,i){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=Mo.createAndSchedule(this,e,n,i,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&Lo()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class kv extends Qu{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new zl,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zl(e),this._firestoreClient=void 0,await e}}}function Dv(t,e){const n=typeof t=="object"?t:Ku(),i=typeof t=="string"?t:"(default)",r=ko(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const o=Kg("firestore");o&&xv(r,...o)}return r}(function(e,n=!0){(function(r){zi=r})(ti),Qn(new Cn("firestore",(i,{instanceIdentifier:r,options:o})=>{const l=i.getProvider("app").getImmediate(),u=new kv(new Ev(i.getProvider("auth-internal")),new Av(i.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Ye(Xe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ds(d.options.projectId,p)}(l,r),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),hn(Hl,"4.7.3",e),hn(Hl,"4.7.3","esm2017")})();function Uo(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Zu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lv=Zu,eh=new Wi("auth","Firebase",Zu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new No("@firebase/auth");function Mv(t,...e){Ls.logLevel<=ge.WARN&&Ls.warn(`Auth (${ti}): ${t}`,...e)}function ys(t,...e){Ls.logLevel<=ge.ERROR&&Ls.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,...e){throw jo(t,...e)}function pt(t,...e){return jo(t,...e)}function Fo(t,e,n){const i=Object.assign(Object.assign({},Lv()),{[e]:n});return new Wi("auth","Firebase",i).create(e,{appName:t.name})}function Rn(t){return Fo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uv(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Rt(t,"argument-error"),Fo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jo(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return eh.create(t,...e)}function ee(t,e,...n){if(!t)throw jo(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function Kt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fv(){return ql()==="http:"||ql()==="https:"}function ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fv()||Yg()||"connection"in navigator)?navigator.onLine:!0}function Bv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kt(n>e,"Short delay should be less than long delay!"),this.isMobile=Jg()||Qg()}get(){return jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e){Kt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new qi(3e4,6e4);function Ho(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ni(t,e,n,i,r={}){return nh(t,r,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const u=Ki(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:h},o);return Xg()||(d.referrerPolicy="no-referrer"),th.fetch()(ih(t,t.config.apiHost,n,u),d)})}async function nh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Hv),e);try{const r=new Gv(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw ps(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw ps(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw ps(t,"user-disabled",l);const p=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fo(t,p,d);Rt(t,p)}}catch(r){if(r instanceof qt)throw r;Rt(t,"network-request-failed",{message:String(r)})}}async function $v(t,e,n,i,r={}){const o=await ni(t,e,n,i,r);return"mfaPendingCredential"in o&&Rt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function ih(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Bo(t.config,r):`${t.config.apiScheme}://${r}`}class Gv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),Vv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ps(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=pt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function sh(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Kv(t,e=!1){const n=pn(t),i=await n.getIdToken(e),r=Vo(i);ee(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Ni(Ur(r.auth_time)),issuedAtTime:Ni(Ur(r.iat)),expirationTime:Ni(Ur(r.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ur(t){return Number(t)*1e3}function Vo(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const r=ju(n);return r?JSON.parse(r):(ys("Failed to decode base64 JWT payload"),null)}catch(r){return ys("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Jl(t){const e=Vo(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof qt&&zv(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function zv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Hi(t,sh(n,{idToken:i}));ee(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?rh(o.providerUserInfo):[],u=Xv(t.providerData,l),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new oo(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,v)}async function Jv(t){const e=pn(t);await Ms(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xv(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function rh(t){return t.map(e=>{var{providerId:n}=e,i=Uo(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yv(t,e){const n=await nh(t,{},async()=>{const i=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,l=ih(t,r,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",th.fetch()(l,{method:"POST",headers:u,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Qv(t,e){return ni(t,"POST","/v2/accounts:revokeToken",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Jl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:o}=await Yv(e,n);this.updateTokensAndExpiration(i,r,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:o}=n,l=new Kn;return i&&(ee(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),r&&(ee(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),o&&(ee(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,o=Uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new oo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Kv(this,e)}reload(){return Jv(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ms(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Hi(this,Wv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,o,l,u,h,d,p;const v=(i=n.displayName)!==null&&i!==void 0?i:void 0,T=(r=n.email)!==null&&r!==void 0?r:void 0,C=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,L=(l=n.photoURL)!==null&&l!==void 0?l:void 0,M=(u=n.tenantId)!==null&&u!==void 0?u:void 0,W=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,J=(d=n.createdAt)!==null&&d!==void 0?d:void 0,B=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:G,emailVerified:K,isAnonymous:oe,providerData:ce,stsTokenManager:E}=n;ee(G&&E,e,"internal-error");const m=Kn.fromJSON(this.name,E);ee(typeof G=="string",e,"internal-error"),tn(v,e.name),tn(T,e.name),ee(typeof K=="boolean",e,"internal-error"),ee(typeof oe=="boolean",e,"internal-error"),tn(C,e.name),tn(L,e.name),tn(M,e.name),tn(W,e.name),tn(J,e.name),tn(B,e.name);const w=new Bt({uid:G,auth:e,email:T,emailVerified:K,displayName:v,isAnonymous:oe,photoURL:L,phoneNumber:C,tenantId:M,stsTokenManager:m,createdAt:J,lastLoginAt:B});return ce&&Array.isArray(ce)&&(w.providerData=ce.map(I=>Object.assign({},I))),W&&(w._redirectEventId=W),w}static async _fromIdTokenResponse(e,n,i=!1){const r=new Kn;r.updateFromServerResponse(n);const o=new Bt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ms(o),o}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];ee(r.localId!==void 0,"internal-error");const o=r.providerUserInfo!==void 0?rh(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!(o!=null&&o.length),u=new Kn;u.updateFromIdToken(i);const h=new Bt({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:l}),d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new oo(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new Map;function Ht(t){Kt(t instanceof Function,"Expected a class definition");let e=Xl.get(t);return e?(Kt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oh.type="NONE";const Yl=oh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class zn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:o}=this.auth;this.fullUserKey=ws(this.userKey,r.apiKey,o),this.fullPersistenceKey=ws("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new zn(Ht(Yl),e,i);const r=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=r[0]||Ht(Yl);const l=ws(i,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(l);if(p){const v=Bt._fromJSON(e,p);d!==o&&(u=v),o=d;break}}catch{}const h=r.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new zn(o,e,i):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(l)}catch{}})),new zn(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ah(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fh(e))return"Blackberry";if(dh(e))return"Webos";if(lh(e))return"Safari";if((e.includes("chrome/")||ch(e))&&!e.includes("edge/"))return"Chrome";if(hh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ah(t=ze()){return/firefox\//i.test(t)}function lh(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ch(t=ze()){return/crios\//i.test(t)}function uh(t=ze()){return/iemobile/i.test(t)}function hh(t=ze()){return/android/i.test(t)}function fh(t=ze()){return/blackberry/i.test(t)}function dh(t=ze()){return/webos/i.test(t)}function $o(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zv(t=ze()){var e;return $o(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function e_(){return Zg()&&document.documentMode===10}function ph(t=ze()){return $o(t)||hh(t)||dh(t)||fh(t)||/windows phone/i.test(t)||uh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t,e=[]){let n;switch(t){case"Browser":n=Ql(ze());break;case"Worker":n=`${Ql(ze())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e={}){return ni(t,"GET","/v2/passwordPolicy",Ho(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=6;class s_{constructor(e){var n,i,r,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:i_,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(r=h.containsLowercaseLetter)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zl(this),this.idTokenSubscription=new Zl(this),this.beforeStateQueue=new t_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await zn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sh(this,{idToken:e}),i=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(r=h.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ms(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Rn(this));const n=e?pn(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n_(this),n=new s_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Qv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,i,r);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qs(t){return pn(t)}class Zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=om(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o_(t){Go=t}function a_(t){return Go.loadJS(t)}function l_(){return Go.gapiScript}function c_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t,e){const n=ko(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(xs(o,e??{}))return r;Rt(r,"already-initialized")}return n.initialize({options:e})}function h_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function f_(t,e,n){const i=Qs(t);ee(i._canInitEmulator,i,"emulator-config-failed"),ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,o=mh(e),{host:l,port:u}=d_(e),h=u===null?"":`:${u}`;i.config.emulator={url:`${o}//${l}${h}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),p_()}function mh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function d_(t){const e=mh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const o=r[1];return{host:o,port:ec(i.substr(o.length+1))}}else{const[o,l]=i.split(":");return{host:o,port:ec(l)}}}function ec(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e){return $v(t,"POST","/v1/accounts:signInWithIdp",Ho(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="http://localhost";class Pn extends vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,o=Uo(n,["providerId","signInMethod"]);if(!i||!r)return null;const l=new Pn(i,r);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return qn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,qn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qn(e,n)}buildRequest(){const e={requestUri:g_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends Ji{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Mt.credential(n,i)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ji{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ji{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ln.credential(n,i)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const o=await Bt._fromIdTokenResponse(e,i,r),l=tc(i);return new ei({user:o,providerId:l,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=tc(i);return new ei({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function tc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends qt{constructor(e,n,i,r){var o;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Us(e,n,i,r)}}function _h(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(t,o,e,i):o})}async function m_(t,e,n=!1){const i=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(t,e,n=!1){const{auth:i}=t;if(Ft(i.app))return Promise.reject(Rn(i));const r="reauthenticate";try{const o=await Hi(t,_h(i,r,e,t),n);ee(o.idToken,i,"internal-error");const l=Vo(o.idToken);ee(l,i,"internal-error");const{sub:u}=l;return ee(t.uid===u,i,"user-mismatch"),ei._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Rt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const i="signIn",r=await _h(t,i,e),o=await ei._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(o.user),o}function y_(t,e,n,i){return pn(t).onIdTokenChanged(e,n,i)}function w_(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}function yh(t,e,n,i){return pn(t).onAuthStateChanged(e,n,i)}function E_(t){return pn(t).signOut()}const Fs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fs,"1"),this.storage.removeItem(Fs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=1e3,b_=10;class Eh extends wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ph(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const i=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(i);!n&&this.localCache[i]===l||this.notifyListeners(i,l)},o=this.storage.getItem(i);e_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,b_):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},I_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Eh.type="LOCAL";const T_=Eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ih.type="SESSION";const bh=Ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Zs(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:o}=n.data,l=this.handlersMap[r];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const u=Array.from(l).map(async d=>d(n.origin,o)),h=await A_(u);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const d=Ko("",20);r.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},i);l={messageChannel:r,onMessage(v){const T=v;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(T.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return window}function R_(t){Tt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function C_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O_(){return Th()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebaseLocalStorageDb",N_=1,js="firebaseLocalStorage",Sh="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function er(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function x_(){const t=indexedDB.deleteDatabase(Ah);return new Xi(t).toPromise()}function ao(){const t=indexedDB.open(Ah,N_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(js,{keyPath:Sh})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(js)?e(i):(i.close(),await x_(),e(await ao()))})})}async function nc(t,e,n){const i=er(t,!0).put({[Sh]:e,value:n});return new Xi(i).toPromise()}async function k_(t,e){const n=er(t,!1).get(e),i=await new Xi(n).toPromise();return i===void 0?null:i.value}function ic(t,e){const n=er(t,!0).delete(e);return new Xi(n).toPromise()}const D_=800,L_=3;class Rh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>L_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Th()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zs._getInstance(O_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C_(),!this.activeServiceWorker)return;this.sender=new S_(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ao();return await nc(e,Fs,"1"),await ic(e,Fs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>nc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>k_(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=er(r,!1).getAll();return new Xi(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:o}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rh.type="LOCAL";const M_=Rh;new qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){return e?Ht(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function U_(t){return __(t.auth,new zo(t),t.bypassAuthState)}function F_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),v_(n,new zo(t),t.bypassAuthState)}async function j_(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),m_(n,new zo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,i,r,o=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return U_;case"linkViaPopup":case"linkViaRedirect":return j_;case"reauthViaPopup":case"reauthViaRedirect":return F_;default:Rt(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new qi(2e3,1e4);async function H_(t,e,n){if(Ft(t.app))return Promise.reject(pt(t,"operation-not-supported-in-this-environment"));const i=Qs(t);Uv(t,e,Wo);const r=Ch(i,n);return new Tn(i,"signInViaPopup",e,r).executeNotNull()}class Tn extends Ph{constructor(e,n,i,r,o){super(e,n,r,o),this.provider=i,this.authWindow=null,this.pollId=null,Tn.currentPopupAction&&Tn.currentPopupAction.cancel(),Tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=Ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,B_.get())};e()}}Tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="pendingRedirect",Es=new Map;class $_ extends Ph{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const i=await G_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G_(t,e){const n=z_(e),i=K_(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function W_(t,e){Es.set(t._key(),e)}function K_(t){return Ht(t._redirectPersistence)}function z_(t){return ws(V_,t.config.apiKey,t.name)}async function q_(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const i=Qs(t),r=Ch(i,e),l=await new $_(i,r,n).execute();return l&&!n&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=10*60*1e3;class X_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Oh(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(pt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=J_&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(e))}saveEventToCache(e){this.cachedEventUids.add(sc(e)),this.lastProcessedEventTime=Date.now()}}function sc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Oh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ey=/^https?/;async function ty(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q_(t);for(const n of e)try{if(ny(n))return}catch{}Rt(t,"unauthorized-domain")}function ny(t){const e=ro(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===i}if(!ey.test(n))return!1;if(Z_.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new qi(3e4,6e4);function rc(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sy(t){return new Promise((e,n)=>{var i,r,o;function l(){rc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rc(),n(pt(t,"network-request-failed"))},timeout:iy.get()})}if(!((r=(i=Tt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=Tt().gapi)===null||o===void 0)&&o.load)l();else{const u=c_("iframefcb");return Tt()[u]=()=>{gapi.load?l():n(pt(t,"network-request-failed"))},a_(`${l_()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw Is=null,e})}let Is=null;function ry(t){return Is=Is||sy(t),Is}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=new qi(5e3,15e3),ay="__/auth/iframe",ly="emulator/auth/iframe",cy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hy(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bo(e,ly):`https://${t.config.authDomain}/${ay}`,i={apiKey:e.apiKey,appName:t.name,v:ti},r=uy.get(t.config.apiHost);r&&(i.eid=r);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Ki(i).slice(1)}`}async function fy(t){const e=await ry(t),n=Tt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:hy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cy,dontclear:!0},i=>new Promise(async(r,o)=>{await i.restyle({setHideOnLeave:!1});const l=pt(t,"network-request-failed"),u=Tt().setTimeout(()=>{o(l)},oy.get());function h(){Tt().clearTimeout(u),r(i)}i.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},py=500,gy=600,my="_blank",vy="http://localhost";class oc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _y(t,e,n,i=py,r=gy){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const h=Object.assign(Object.assign({},dy),{width:i.toString(),height:r.toString(),top:o,left:l}),d=ze().toLowerCase();n&&(u=ch(d)?my:n),ah(d)&&(e=e||vy,h.scrollbars="yes");const p=Object.entries(h).reduce((T,[C,L])=>`${T}${C}=${L},`,"");if(Zv(d)&&u!=="_self")return yy(e||"",u),new oc(null);const v=window.open(e||"",u,p);ee(v,t,"popup-blocked");try{v.focus()}catch{}return new oc(v)}function yy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy="__/auth/handler",Ey="emulator/auth/handler",Iy=encodeURIComponent("fac");async function ac(t,e,n,i,r,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ti,eventId:r};if(e instanceof Wo){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",rm(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))l[p]=v}if(e instanceof Ji){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(l.scopes=p.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await t._getAppCheckToken(),d=h?`#${Iy}=${encodeURIComponent(h)}`:"";return`${by(t)}?${Ki(u).slice(1)}${d}`}function by({config:t}){return t.emulator?Bo(t,Ey):`https://${t.authDomain}/${wy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="webStorageSupport";class Ty{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bh,this._completeRedirectFn=q_,this._overrideRedirectResult=W_}async _openPopup(e,n,i,r){var o;Kt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await ac(e,n,i,ro(),r);return _y(e,l,Ko())}async _openRedirect(e,n,i,r){await this._originValidation(e);const o=await ac(e,n,i,ro(),r);return R_(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(Kt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await fy(e),i=new X_(e);return n.register("authEvent",r=>(ee(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fr,{type:Fr},r=>{var o;const l=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[Fr];l!==void 0&&n(!!l),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ty(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ph()||lh()||$o()}}const Ay=Ty;var lc="@firebase/auth",cc="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cy(t){Qn(new Cn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;ee(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gh(t)},d=new r_(i,r,o,h);return h_(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Qn(new Cn("auth-internal",e=>{const n=Qs(e.getProvider("auth").getImmediate());return(i=>new Sy(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(lc,cc,Ry(t)),hn(lc,cc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=5*60,Oy=Vu("authIdTokenMaxAge")||Py;let uc=null;const Ny=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Oy)return;const r=n==null?void 0:n.token;uc!==r&&(uc=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function xy(t=Ku()){const e=ko(t,"auth");if(e.isInitialized())return e.getImmediate();const n=u_(t,{popupRedirectResolver:Ay,persistence:[M_,T_,bh]}),i=Vu("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const l=Ny(o.toString());w_(n,l,()=>l(n.currentUser)),y_(n,u=>l(u))}}const r=Bu("auth");return r&&f_(n,`http://${r}`),n}function ky(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}o_({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const o=pt("internal-error");o.customData=r,n(o)},i.type="text/javascript",i.charset="UTF-8",ky().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cy("Browser");const Dy={apiKey:"AIzaSyBNyMbm_ukGVwBBzJzdV1fEb0p_T9Nxt-A",authDomain:"house-project-manager.firebaseapp.com",projectId:"house-project-manager",storageBucket:"house-project-manager.firebasestorage.app",messagingSenderId:"761621589009",appId:"1:761621589009:web:a00d410916c2fcc47815b0"},Nh=Wu(Dy);Dv(Nh);const Bs=xy(Nh),Ly=new Mt,My={class:"min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4"},Uy={class:"bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-sm"},Fy={key:0,class:"mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700"},jy=["disabled"],By={key:0,width:"18",height:"18",viewBox:"0 0 18 18"},Hy={key:1,class:"animate-spin",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none"},Vy={__name:"LoginView",setup(t){const e=Li(!1),n=Li("");async function i(){e.value=!0,n.value="";try{await H_(Bs,Ly),window.location.hash="/",window.location.reload()}catch(r){console.error("登录失败:",r),r.code==="auth/popup-closed-by-user"?n.value="登录窗口已关闭，请重试。":r.code==="auth/popup-blocked"?n.value="弹出窗口被浏览器阻止，请点击地址栏右侧允许弹出窗口。":n.value="登录失败："+r.code}finally{e.value=!1}}return(r,o)=>(Ut(),In("div",My,[me("div",Uy,[o[2]||(o[2]=me("div",{class:"text-center mb-8"},[me("div",{class:"text-3xl mb-3"},"🏠"),me("h1",{class:"text-xl font-semibold text-gray-900"},"自建房收尾项目管理"),me("p",{class:"text-sm text-gray-500 mt-2"},"请登录以同步您的项目数据")],-1)),n.value?(Ut(),In("div",Fy,Vn(n.value),1)):Gd("",!0),me("button",{onClick:i,disabled:e.value,class:"w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},[e.value?(Ut(),In("svg",Hy,[...o[1]||(o[1]=[me("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),me("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"},null,-1)])])):(Ut(),In("svg",By,[...o[0]||(o[0]=[me("path",{fill:"#4285F4",d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"},null,-1),me("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"},null,-1),me("path",{fill:"#FBBC05",d:"M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"},null,-1),me("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"},null,-1)])])),me("span",null,Vn(e.value?"登录中...":"使用 Google 账号登录"),1)],8,jy),o[3]||(o[3]=me("p",{class:"text-center text-xs text-gray-400 mt-6"}," 登录后数据将自动在 Mac 和 iPhone 之间同步 ",-1))])]))}},$y={class:"min-h-screen bg-gray-50"},Gy={class:"bg-white border-b border-gray-200 sticky top-0 z-10"},Wy={class:"max-w-4xl mx-auto px-4 h-14 flex items-center justify-between"},Ky={class:"flex items-center gap-3"},zy={class:"flex items-center gap-2"},qy=["src","alt"],Jy={key:1,class:"w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium"},Xy={class:"hidden sm:block text-sm text-gray-600 max-w-[160px] truncate"},Yy={class:"max-w-4xl mx-auto px-4 py-8"},Qy={class:"bg-white rounded-2xl border border-gray-200 p-6 mb-6"},Zy={class:"text-lg font-semibold text-gray-900 mb-1"},e0={__name:"HomeView",setup(t){Ug();const e=Li(null);yh(Bs,r=>{e.value=r});const n=at(()=>{var o,l;return(((o=e.value)==null?void 0:o.displayName)||((l=e.value)==null?void 0:l.email)||"?").charAt(0).toUpperCase()});async function i(){await E_(Bs),window.location.href=window.location.origin+window.location.pathname}return(r,o)=>{var l,u,h,d;return Ut(),In("div",$y,[me("header",Gy,[me("div",Wy,[o[0]||(o[0]=me("div",{class:"flex items-center gap-2"},[me("span",{class:"text-lg"},"🏠"),me("span",{class:"font-semibold text-gray-900 text-sm sm:text-base"},"自建房收尾项目管理")],-1)),me("div",Ky,[me("div",zy,[(l=e.value)!=null&&l.photoURL?(Ut(),In("img",{key:0,src:e.value.photoURL,alt:e.value.displayName,class:"w-7 h-7 rounded-full"},null,8,qy)):(Ut(),In("div",Jy,Vn(n.value),1)),me("span",Xy,Vn(((u=e.value)==null?void 0:u.displayName)||((h=e.value)==null?void 0:h.email)),1)]),me("button",{onClick:i,class:"text-sm text-gray-500 hover:text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"}," 退出 ")])])]),me("main",Yy,[me("div",Qy,[me("h2",Zy," 你好，"+Vn(((d=e.value)==null?void 0:d.displayName)||"用户")+" 👋 ",1),o[1]||(o[1]=me("p",{class:"text-sm text-gray-500"}," 登录成功！数据将自动同步到你的所有设备。 ",-1))]),o[2]||(o[2]=$d('<div class="grid grid-cols-1 sm:grid-cols-2 gap-4"><div class="bg-white rounded-2xl border border-gray-200 p-6"><div class="text-2xl mb-3">📋</div><h3 class="font-semibold text-gray-900 mb-1">项目清单</h3><p class="text-sm text-gray-500">管理所有待完成的施工和采购项目</p><div class="mt-4 inline-block text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-md">第二阶段开发中</div></div><div class="bg-white rounded-2xl border border-gray-200 p-6"><div class="text-2xl mb-3">📊</div><h3 class="font-semibold text-gray-900 mb-1">项目看板</h3><p class="text-sm text-gray-500">查看各区域和责任方的进度统计</p><div class="mt-4 inline-block text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded-md">第二阶段开发中</div></div><div class="bg-white rounded-2xl border border-gray-200 p-6"><div class="text-2xl mb-3">📐</div><h3 class="font-semibold text-gray-900 mb-1">尺寸测量记录</h3><p class="text-sm text-gray-500">记录窗帘、水槽等关键尺寸</p><div class="mt-4 inline-block text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">第三阶段开发中</div></div><div class="bg-white rounded-2xl border border-gray-200 p-6"><div class="text-2xl mb-3">💬</div><h3 class="font-semibold text-gray-900 mb-1">沟通记录</h3><p class="text-sm text-gray-500">记录与施工方、供应商的沟通结果</p><div class="mt-4 inline-block text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">第三阶段开发中</div></div></div><div class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-700"> ✅ Firebase 连接正常，Google 登录成功。 </div>',2))])])}}},t0=[{path:"/login",name:"Login",component:Vy,meta:{requiresAuth:!1}},{path:"/",name:"Home",component:e0,meta:{requiresAuth:!0}}],xh=Mg({history:gg(),routes:t0}),n0=()=>new Promise(t=>{const e=yh(Bs,n=>{e(),t(n)})});xh.beforeEach(async t=>{const e=await n0();if(t.meta.requiresAuth&&!e)return{name:"Login"};if(t.name==="Login"&&e)return{name:"Home"}});const qo=Sp(Fg);qo.use(Op());qo.use(xh);qo.mount("#app");
