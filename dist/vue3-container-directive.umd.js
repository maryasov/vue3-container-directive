(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.ContainerDirective={}))})(this,function(e){"use strict";const n={mounted(i,o){const t=i.parentElement;t.style.containerType="inline-size",o.arg!==void 0&&(t.style.containerName=o.arg)},updated(i,o){},unmounted(i,o){const t=i.parentElement;o.arg!==void 0&&t.style.containerName&&(t.style.containerName=void 0),t.style.containerType&&(t.style.containerType=void 0)}};var d="";const a={install(i){i.directive("container",n)},directive:n};e.ElContainer=a,e.ElContainerDirective=n,e.default=a,e.vContainer=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});