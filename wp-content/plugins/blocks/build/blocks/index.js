(()=>{"use strict";var o,r={26:()=>{const o=window.wp.blocks,r=window.wp.i18n,e=window.wp.blockEditor,n=window.ReactJSXRuntime,t=JSON.parse('{"UU":"create-block/blocks"}');(0,o.registerBlockType)(t.UU,{edit:function(){return(0,n.jsx)("p",{...(0,e.useBlockProps)(),children:(0,r.__)("Blocks – hello from the editor!","blocks")})},save:function(){return(0,n.jsx)("p",{...e.useBlockProps.save(),children:"Blocks – hello from the saved content!"})}})}},e={};function n(o){var t=e[o];if(void 0!==t)return t.exports;var l=e[o]={exports:{}};return r[o](l,l.exports,n),l.exports}n.m=r,o=[],n.O=(r,e,t,l)=>{if(!e){var s=1/0;for(p=0;p<o.length;p++){for(var[e,t,l]=o[p],i=!0,c=0;c<e.length;c++)(!1&l||s>=l)&&Object.keys(n.O).every((o=>n.O[o](e[c])))?e.splice(c--,1):(i=!1,l<s&&(s=l));if(i){o.splice(p--,1);var a=t();void 0!==a&&(r=a)}}return r}l=l||0;for(var p=o.length;p>0&&o[p-1][2]>l;p--)o[p]=o[p-1];o[p]=[e,t,l]},n.o=(o,r)=>Object.prototype.hasOwnProperty.call(o,r),(()=>{var o={472:0,456:0};n.O.j=r=>0===o[r];var r=(r,e)=>{var t,l,[s,i,c]=e,a=0;if(s.some((r=>0!==o[r]))){for(t in i)n.o(i,t)&&(n.m[t]=i[t]);if(c)var p=c(n)}for(r&&r(e);a<s.length;a++)l=s[a],n.o(o,l)&&o[l]&&o[l][0](),o[l]=0;return n.O(p)},e=globalThis.webpackChunkblocks=globalThis.webpackChunkblocks||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})();var t=n.O(void 0,[456],(()=>n(26)));t=n.O(t)})();