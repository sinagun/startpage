(this.webpackJsonpstartpage=this.webpackJsonpstartpage||[]).push([[0],{1:function(e,t,a){e.exports={root:"Feed_root__ERD0b",title:"Feed_title__4Lr9m",heading:"Feed_heading__1x10a",link:"Feed_link__1QFyY",item:"Feed_item__2oHqb",description:"Feed_description__V-NiK",meta:"Feed_meta__u9N5j",image:"Feed_image__1Sx4s"}},108:function(e,t){},110:function(e,t){},136:function(e,t){},138:function(e,t){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(77),s=a.n(c),i=(a(84),a(10)),l=a.n(i),o=a(17),m=a(16),u=a(21),p=a.n(u),f=a(1),d=a.n(f);function h(){return(h=Object(m.a)(l.a.mark((function e(t,a,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:r=e.sent,c=r.data,localStorage.setItem("feed:".concat(n),JSON.stringify(c)),a(c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e){var t=e.url,a=e.title,c=localStorage.getItem("feed:".concat(a)),s=Object(n.useState)(c?JSON.parse(c):{}),i=Object(o.a)(s,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){!function(e,t,a){h.apply(this,arguments)}(t,m,a)}),[t]),r.a.createElement("div",{className:d.a.root},r.a.createElement("h2",{className:d.a.title},"#",a.toLowerCase()),l&&Array.isArray(l)&&l.map((function(e,t){return r.a.createElement("div",{key:e.url||t,className:d.a.item},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:d.a.link},r.a.createElement("span",{className:d.a.meta},"\u2605",e.stars),r.a.createElement("span",{className:d.a.heading},e.name)),r.a.createElement("span",{className:d.a.description},e.description))})))};function E(){return(E=Object(m.a)(l.a.mark((function e(t,a,n){var r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(t);case 2:r=e.sent,c=r.data.data.children,s=c.map((function(e){return e.data})),localStorage.setItem("feed:".concat(n),JSON.stringify(s)),a(s);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(e){var t=e.url,a=e.title,c=localStorage.getItem("feed:".concat(a)),s=Object(n.useState)(c?JSON.parse(c):{}),i=Object(o.a)(s,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){!function(e,t,a){E.apply(this,arguments)}("https://cors.ceuk.dev/?url="+t,m,a)}),[t]),r.a.createElement("div",{className:d.a.root},r.a.createElement("h2",{className:d.a.title},"#",a.toLowerCase()),l&&Array.isArray(l)&&l.map((function(e,t){return r.a.createElement("div",{key:e.url||t,className:d.a.item},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:d.a.link},r.a.createElement("span",{className:d.a.meta},"/r/",e.subreddit),r.a.createElement("span",{className:d.a.heading},e.title)),e.selftext?r.a.createElement("span",{className:d.a.description},e.selftext.substr(0,100)+"..."):e.url.match(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)?r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:d.a.link},r.a.createElement("img",{src:e.url,className:d.a.image})):e.thumbnail&&"self"!==e.thumbnail&&"default"!==e.thumbnail?r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:d.a.link},r.a.createElement("img",{src:e.thumbnail,className:d.a.image})):r.a.createElement("span",{className:d.a.description},e.domain),r.a.createElement("a",{href:"https://old.reddit.com".concat(e.permalink),target:"_blank",rel:"noopener noreferrer",className:d.a.description}," \ud83d\udcac ",e.num_comments))})))},N=a(78),_=a.n(N);function v(){return(v=Object(m.a)(l.a.mark((function e(t,a,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new _.a,e.next=3,r.parseURL("https://cors.ceuk.dev/?url="+t);case 3:c=e.sent,localStorage.setItem("feed:".concat(n),JSON.stringify(c.items)),a(c.items);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){var t=e.url,a=e.title,c=localStorage.getItem("feed:".concat(a)),s=Object(n.useState)(c?JSON.parse(c):{}),i=Object(o.a)(s,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){!function(e,t,a){v.apply(this,arguments)}(t,m,a)}),[t]),r.a.createElement("div",{className:d.a.root},r.a.createElement("h2",{className:d.a.title},"#",a.toLowerCase()),l&&Array.isArray(l)&&l.map((function(e,t){return r.a.createElement("div",{key:e.id||e.link||t,className:d.a.item},r.a.createElement("a",{href:e.content.match(/(href=")(.*)(">Link)/)[2],target:"_blank",rel:"noopener noreferrer"},e.title),r.a.createElement("span",{className:d.a.description},function(e,t,a){var n;if(a=a||"",e.indexOf(" ")+a.length>t)return e;n=e.length+a.length>t?t-a.length:e.length;var r=e.substring(0,n);r=r.replace(/\s+\S*$/,""),e.length>t&&a.length>0&&(r+=a);return r||"No description"}(e.contentSnippet.replace(/Discussion\n {8}\|\n {8}Link/,"").substr(2),100,"\u2026")))})))};var w=function(){return r.a.createElement("div",{className:"App",style:{display:"flex"}},r.a.createElement(g,{title:"Github",url:"https://github-trending-api.now.sh"}),r.a.createElement(b,{title:"Reddit",url:"https://www.reddit.com/user/calvers70/m/all.json"}),r.a.createElement(k,{title:"Product_Hunt",url:"https://www.producthunt.com/feed?category=undefined"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){e.exports=a(153)},84:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.38d71699.chunk.js.map