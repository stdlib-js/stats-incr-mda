// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(n){return n!=n},r=n;var t=n;var u=function(){var n,r;return n=0,r=0,function(t){if(0===arguments.length)return 0===r?null:n;return n+=(t-n)/(r+=1)}},e=function(n){return 0===n||r(n)?n:n<0?-1:1},a=function(n,r){return t(n)||t(r)?NaN:n===r?1:0};var f=function(){var n,r,t,f;return n=u(),function(u,i){var o,v;if(0===arguments.length)return n();void 0===r&&(r=!0,t=u,f=i);return o=e(u-t),v=e(i-f),t=u,f=i,n(a(o,v))}};export{f as default};
//# sourceMappingURL=mod.js.map
