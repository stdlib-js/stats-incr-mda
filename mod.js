// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function r(r){return 0===r||n(r)?r:r<0?-1:1}function t(r,t){return n(r)||n(t)?NaN:r===t?1:0}function u(){var n,u,e,f,i,o;return i=0,o=0,n=function(n){return 0===arguments.length?0===o?null:i:i+=(n-i)/(o+=1)},function(i,o){var c,a;if(0===arguments.length)return n();void 0===u&&(u=!0,e=i,f=o);return c=r(i-e),a=r(o-f),e=i,f=o,n(t(c,a))}}export{u as default};
//# sourceMappingURL=mod.js.map
