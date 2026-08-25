// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}function r(r){return 0===r||n(r)?r:r<0?-1:1}function t(){var t,u,e,f,i,o;return i=0,o=0,t=function(n){return 0===arguments.length?0===o?null:i:i+=(n-i)/(o+=1)},function(i,o){var c,a;if(0===arguments.length)return t();void 0===u&&(u=!0,e=i,f=o);return c=r(i-e),a=r(o-f),e=i,f=o,t(function(r,t){return n(r)||n(t)?NaN:r===t?1:0}(c,a))}}export{t as default};
//# sourceMappingURL=mod.js.map
