import{a as b,b as O,c as F,d as _e,e as D,f as ge,g as A,h as d}from"./chunk-FK42CRUA.js";var oe={};D(oe,{__addDisposableResource:()=>re,__assign:()=>x,__asyncDelegator:()=>J,__asyncGenerator:()=>W,__asyncValues:()=>L,__await:()=>_,__awaiter:()=>K,__classPrivateFieldGet:()=>Z,__classPrivateFieldIn:()=>te,__classPrivateFieldSet:()=>ee,__createBinding:()=>E,__decorate:()=>U,__disposeResources:()=>ne,__esDecorate:()=>xe,__exportStar:()=>z,__extends:()=>$,__generator:()=>q,__importDefault:()=>Y,__importStar:()=>X,__makeTemplateObject:()=>Q,__metadata:()=>B,__param:()=>k,__propKey:()=>Ee,__read:()=>P,__rest:()=>C,__runInitializers:()=>ve,__setFunctionName:()=>je,__spread:()=>G,__spreadArray:()=>H,__spreadArrays:()=>V,__values:()=>v,default:()=>Pe});function $(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");S(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function C(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function U(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}function k(e,t){return function(r,n){t(r,n,e)}}function xe(e,t,r,n,o,i){function a(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var s=n.kind,l=s==="getter"?"get":s==="setter"?"set":"value",c=!t&&e?n.static?e:e.prototype:null,f=t||(c?Object.getOwnPropertyDescriptor(c,n.name):{}),p,g=!1,u=r.length-1;u>=0;u--){var y={};for(var m in n)y[m]=m==="access"?{}:n[m];for(var m in n.access)y.access[m]=n.access[m];y.addInitializer=function(w){if(g)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(w||null))};var h=(0,r[u])(s==="accessor"?{get:f.get,set:f.set}:f[l],y);if(s==="accessor"){if(h===void 0)continue;if(h===null||typeof h!="object")throw new TypeError("Object expected");(p=a(h.get))&&(f.get=p),(p=a(h.set))&&(f.set=p),(p=a(h.init))&&o.unshift(p)}else(p=a(h))&&(s==="field"?o.unshift(p):f[l]=p)}c&&Object.defineProperty(c,n.name,f),g=!0}function ve(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function Ee(e){return typeof e=="symbol"?e:"".concat(e)}function je(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function B(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function K(e,t,r,n){function o(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function s(f){try{c(n.next(f))}catch(p){a(p)}}function l(f){try{c(n.throw(f))}catch(p){a(p)}}function c(f){f.done?i(f.value):o(f.value).then(s,l)}c((n=n.apply(e,t||[])).next())})}function q(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(f){return l([c,f])}}function l(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(r=0)),r;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){r.label=c[1];break}if(c[0]===6&&r.label<i[1]){r.label=i[1],i=c;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(c);break}i[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(f){c=[6,f],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function z(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&E(t,e,r)}function v(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function P(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],a;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i}function G(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(P(arguments[t]));return e}function V(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),o=0,t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}function H(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}function _(e){return this instanceof _?(this.v=e,this):new _(e)}function W(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),o,i=[];return o={},s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(u){return function(y){return Promise.resolve(y).then(u,p)}}function s(u,y){n[u]&&(o[u]=function(m){return new Promise(function(h,w){i.push([u,m,h,w])>1||l(u,m)})},y&&(o[u]=y(o[u])))}function l(u,y){try{c(n[u](y))}catch(m){g(i[0][3],m)}}function c(u){u.value instanceof _?Promise.resolve(u.value.v).then(f,p):g(i[0][2],u)}function f(u){l("next",u)}function p(u){l("throw",u)}function g(u,y){u(y),i.shift(),i.length&&l(i[0][0],i[0][1])}}function J(e){var t,r;return t={},n("next"),n("throw",function(o){throw o}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(o,i){t[o]=e[o]?function(a){return(r=!r)?{value:_(e[o](a)),done:!1}:i?i(a):a}:i}}function L(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof v=="function"?v(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(i){r[i]=e[i]&&function(a){return new Promise(function(s,l){a=e[i](a),o(s,l,a.done,a.value)})}}function o(i,a,s,l){Promise.resolve(l).then(function(c){i({value:c,done:s})},a)}}function Q(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function X(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return Oe(t,e),t}function Y(e){return e&&e.__esModule?e:{default:e}}function Z(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function ee(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r}function te(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function re(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n,o;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose],r&&(o=n)}if(typeof n!="function")throw new TypeError("Object not disposable.");o&&(n=function(){try{o.call(this)}catch(i){return Promise.reject(i)}}),e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}function ne(e){function t(n){e.error=e.hasError?new Se(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,function(i){return t(i),r()})}catch(i){t(i)}}if(e.hasError)throw e.error}return r()}var S,x,E,Oe,Se,Pe,ie=F(()=>{"use strict";S=function(e,t){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},S(e,t)};x=function(){return x=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},x.apply(this,arguments)};E=Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);(!o||("get"in o?!t.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};Oe=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};Se=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};Pe={__extends:$,__assign:x,__rest:C,__decorate:U,__param:k,__metadata:B,__awaiter:K,__generator:q,__createBinding:E,__exportStar:z,__values:v,__read:P,__spread:G,__spreadArrays:V,__spreadArray:H,__await:_,__asyncGenerator:W,__asyncDelegator:J,__asyncValues:L,__makeTemplateObject:Q,__importStar:X,__importDefault:Y,__classPrivateFieldGet:Z,__classPrivateFieldSet:ee,__classPrivateFieldIn:te,__addDisposableResource:re,__disposeResources:ne}});var de={};D(de,{initFederation:()=>Fe,loadRemoteModule:()=>Be,processRemoteInfo:()=>I});function ae(e,t){return{imports:b(b({},e.imports),t.imports),scopes:b(b({},e.scopes),t.scopes)}}function fe(e){return`${e.packageName}@${e.version}`}function Te(e){let t=fe(e);return ue.get(t)}function le(e,t){let r=fe(e);ue.set(r,t)}function R(e){let t=e.split("/");return t.pop(),t.join("/")}function j(e,t){for(;e.endsWith("/");)e=e.substring(0,e.length-1);return t.startsWith("./")&&(t=t.substring(2,t.length)),`${e}/${t}`}function Re(e,t){pe.set(e,t),M.set(t.baseUrl,e)}function Me(e){return M.get(e)}function Ie(e){return M.has(e)}function Ne(e){return pe.get(e)}function ye(e){document.head.appendChild(Object.assign(document.createElement("script"),{type:"importmap-shim",innerHTML:JSON.stringify(e)}))}function Fe(){return d(this,arguments,function*(e={}){let t=typeof e=="string"?yield De(e):e,r=yield ke(),n=yield Ae(t),o=ae(r,n);return ye(o),o})}function De(e){return d(this,null,function*(){return yield fetch(e).then(t=>t.json())})}function Ae(e){return d(this,null,function*(){let t=Object.keys(e).map(o=>d(this,null,function*(){try{let i=e[o];return yield I(i,o)}catch{return console.error(`Error loading remote entry for ${o} from file ${e[o]}`),null}}));return(yield Promise.all(t)).reduce((o,i)=>i?ae(o,i):o,{imports:{},scopes:{}})})}function I(e,t){return d(this,null,function*(){let r=R(e),n=yield me(e);t||(t=n.name);let o=$e(n,t,r);return Re(t,O(b({},n),{baseUrl:r})),o})}function $e(e,t,r){let n=Ue(e,t,r),o=Ce(e,r);return{imports:n,scopes:o}}function me(e){return d(this,null,function*(){return yield fetch(e).then(r=>r.json())})}function Ce(e,t){let r={},n={};for(let o of e.shared){let i=Te(o)??j(t,o.outFileName);le(o,i),n[o.packageName]=i}return r[t+"/"]=n,r}function Ue(e,t,r){let n={};for(let o of e.exposes){let i=j(t,o.key),a=j(r,o.outFileName);n[i]=a}return n}function ke(){return d(this,null,function*(){let e=yield me("./remoteEntry.json"),t=e.shared.reduce((r,n)=>O(b({},r),{[n.packageName]:"./"+n.outFileName}),{});for(let r of e.shared)le(r,"./"+r.outFileName);return{imports:t,scopes:{}}})}function Be(e,t){return d(this,null,function*(){let r=ze(e,t);yield qe(r);let n=Ke(r),o=Ne(n);if(!o)throw new Error("unknown remote "+n);let i=o.exposes.find(l=>l.key===r.exposedModule);if(!i)throw new Error(`Unknown exposed module ${r.exposedModule} in remote ${n}`);let a=j(o.baseUrl,i.outFileName);return yield importShim(a)})}function Ke(e){let t;if(e.remoteName)t=e.remoteName;else if(e.remoteEntry){let r=R(e.remoteEntry);t=Me(r)}else throw new Error("unexpcted arguments: Please pass remoteName or remoteEntry");if(!t)throw new Error("unknown remoteName "+t);return t}function qe(e){return d(this,null,function*(){if(e.remoteEntry&&!Ie(R(e.remoteEntry))){let t=yield I(e.remoteEntry);ye(t)}})}function ze(e,t){let r;if(typeof e=="string"&&t)r={remoteName:e,exposedModule:t};else if(typeof e=="object"&&!t)r=e;else throw new Error("unexpected arguments: please pass options or a remoteName/exposedModule-pair");return r}var ce,se,T,ue,pe,M,he=F(()=>{"use strict";ce="__NATIVE_FEDERATION__",se=globalThis;se[ce]??={externals:new Map,remoteNamesToRemote:new Map,baseUrlToRemoteNames:new Map};T=se[ce],ue=T.externals;pe=T.remoteNamesToRemote,M=T.baseUrlToRemoteNames});var we=_e(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var Ge=(ie(),A(oe));Ge.__exportStar((he(),A(de)),N)});var be=ge(we());(0,be.initFederation)().catch(e=>console.error(e)).then(e=>import("./chunk-F4D7S6TV.js")).catch(e=>console.error(e));
