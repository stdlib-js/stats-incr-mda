// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}};var r=function(n){return n!=n},t=r;var u=function(n){return 0===n||t(n)?n:n<0?-1:1},e=r;var a=function(n,r){return e(n)||e(r)?NaN:n===r?1:0};function f(){var r,t,e,f;return r=n(),function(n,i){var o,v;if(0===arguments.length)return r();void 0===t&&(t=!0,e=n,f=i);return o=u(n-e),v=u(i-f),e=n,f=i,r(a(o,v))}}export{f as default};
//# sourceMappingURL=mod.js.map
