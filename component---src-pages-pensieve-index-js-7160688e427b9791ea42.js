(self.webpackChunkv2=self.webpackChunkv2||[]).push([[29],{1523:function(e,t,n){"use strict";n.r(t);var o,r=n(5276),i=n(6540),a=n(4810),l=n(8154),u=n(249),f=n.n(u),s=n(418),c=n(4081),d=n(4715),p=n(1626);const{colors:g,fontSizes:m,fonts:x}=p.theme,v=(0,d.default)(p.gZ).withConfig({displayName:"pensieve__StyledMainContainer",componentId:"sc-9gzs8o-0"})(["& > header{text-align:center;margin-bottom:100px;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";margin-top:20px;width:100%;}"],p.vE.flexBetween),h=d.default.div.withConfig({displayName:"pensieve__StyledGrid",componentId:"sc-9gzs8o-1"})(["margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],p.$_.desktop(o||(o=(0,r.A)(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"])))),y=d.default.div.withConfig({displayName:"pensieve__StyledPostInner",componentId:"sc-9gzs8o-2"})(["",";",";flex-direction:column;align-items:flex-start;position:relative;padding:2rem 1.75rem;height:100%;border-radius:",";transition:",";background-color:",";header,a{width:100%;}"],p.vE.boxShadow,p.vE.flexBetween,p.theme.borderRadius,p.theme.transition,g.lightNavy),b=d.default.div.withConfig({displayName:"pensieve__StyledPost",componentId:"sc-9gzs8o-3"})(["transition:",";cursor:default;&:hover,&:focus{outline:0;","{transform:translateY(-5px);}}"],p.theme.transition,y),E=d.default.div.withConfig({displayName:"pensieve__StyledPostHeader",componentId:"sc-9gzs8o-4"})(["",";margin-bottom:30px;"],p.vE.flexBetween),w=d.default.div.withConfig({displayName:"pensieve__StyledFolder",componentId:"sc-9gzs8o-5"})(["color:",";svg{width:40px;height:40px;}"],g.green),S=d.default.h5.withConfig({displayName:"pensieve__StyledPostName",componentId:"sc-9gzs8o-6"})(["margin:0 0 10px;font-size:",";color:",";"],m.xxl,g.lightestSlate),z=d.default.div.withConfig({displayName:"pensieve__StyledPostDescription",componentId:"sc-9gzs8o-7"})(["font-size:17px;color:",";"],g.lightSlate),_=d.default.span.withConfig({displayName:"pensieve__StyledDate",componentId:"sc-9gzs8o-8"})(["text-transform:uppercase;font-family:",";font-size:",";color:",";"],x.SFMono,m.xs,g.lightSlate),N=d.default.ul.withConfig({displayName:"pensieve__StyledTags",componentId:"sc-9gzs8o-9"})(["display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{font-family:",";font-size:",";color:",";line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}a{",";}}"],x.SFMono,m.xs,g.green,p.vE.inlineLink);t.default=e=>{let{location:t,data:n}=e;const o=n.allMarkdownRemark.edges;return i.createElement(s.PE,{location:t},i.createElement(l.m,null,i.createElement("title",null,"Pensieve | Chandrika Deb"),i.createElement("link",{rel:"canonical",href:"https://chandrikadeb7.github.io/pensieve"})),i.createElement(v,null,i.createElement("header",null,i.createElement("h1",{className:"big-title"},"Pensieve"),i.createElement("p",{className:"subtitle"},i.createElement("a",{href:"https://www.wizardingworld.com/writing-by-jk-rowling/pensieve",target:"_blank",rel:"noopener noreferrer"},"a collection of memories"))),i.createElement(h,null,i.createElement("div",{className:"posts"},o.length>0&&o.map(((e,t)=>{let{node:n}=e;const{frontmatter:o}=n,{title:r,description:l,slug:u,date:s,tags:d}=o,p=new Date(s);return i.createElement(b,{key:t,tabIndex:"0"},i.createElement(y,null,i.createElement("header",null,i.createElement(a.N_,{to:u},i.createElement(E,null,i.createElement(w,null,i.createElement(c.hf,null))),i.createElement(S,null,r),i.createElement(z,null,l))),i.createElement("footer",null,i.createElement(_,null,""+p.toLocaleDateString()),i.createElement(N,null,d.map(((e,t)=>i.createElement("li",{key:t},i.createElement(a.N_,{to:"/pensieve/tags/"+f()(e)+"/"},"#",e))))))))}))))))}},1873:function(e,t,n){var o=n(9325).Symbol;e.exports=o},4932:function(e){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},882:function(e){e.exports=function(e,t,n,o){var r=-1,i=null==e?0:e.length;for(o&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},1733:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},2552:function(e,t,n){var o=n(1873),r=n(659),i=n(9350),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},4552:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},7556:function(e,t,n){var o=n(1873),r=n(4932),i=n(6449),a=n(4394),l=o?o.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(a(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5539:function(e,t,n){var o=n(882),r=n(828),i=n(6645),a=RegExp("['’]","g");e.exports=function(e){return function(t){return o(i(r(t).replace(a,"")),e,"")}}},4647:function(e,t,n){var o=n(4552)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=o},4840:function(e,t,n){var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},659:function(e,t,n){var o=n(1873),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(u){}var r=a.call(e);return o&&(t?e[l]=n:delete e[l]),r}},5434:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},9350:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:function(e,t,n){var o=n(4840),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},2225:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",o="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+i+"]",l="\\d+",u="["+n+"]",f="["+o+"]",s="[^"+t+i+l+n+o+r+"]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",g="(?:"+f+"|"+s+")",m="(?:"+p+"|"+s+")",x="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+h+("(?:\\u200d(?:"+["[^"+t+"]",c,d].join("|")+")"+y+h+")*"),E="(?:"+[u,c,d].join("|")+")"+b,w=RegExp([p+"?"+f+"+"+x+"(?="+[a,p,"$"].join("|")+")",m+"+"+v+"(?="+[a,p+g,"$"].join("|")+")",p+"?"+g+"+"+x,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,E].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},828:function(e,t,n){var o=n(4647),r=n(3222),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,o).replace(a,"")}},6449:function(e){var t=Array.isArray;e.exports=t},346:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},4394:function(e,t,n){var o=n(2552),r=n(346);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},249:function(e,t,n){var o=n(5539)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=o},3222:function(e,t,n){var o=n(7556);e.exports=function(e){return null==e?"":o(e)}},6645:function(e,t,n){var o=n(1733),r=n(5434),i=n(3222),a=n(2225);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?a(e):o(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-pensieve-index-js-7160688e427b9791ea42.js.map