"use strict";var q=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=q(function(B,d){
function R(e,r,n,s){var i,a,u,o,v,t;if(e<=0)return NaN;if(e===1||n===0)return r[s];for(i=s,u=0,v=0,t=0;t<e;t++)a=r[i],a===a&&(v+=1,u+=a),i+=n;if(v===0)return NaN;for(u/=v,i=s,o=0,t=0;t<e;t++)a=r[i],a===a&&(o+=a-u),i+=n;return u+o/v}d.exports=R
});var c=q(function(C,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=p();function O(e,r,n){return E(e,r,n,_(e,n))}m.exports=O
});var x=q(function(D,j){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),g=p();b(y,"ndarray",g);j.exports=y
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=x(),f,l=k(h(__dirname,"./native.js"));w(l)?f=z:f=l;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
