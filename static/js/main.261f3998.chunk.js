(this.webpackJsonpportfoliotesting=this.webpackJsonpportfoliotesting||[]).push([[0],{44:function(e,t,n){},64:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(46),s=n.n(i),r=(n(64),n(13)),a=n(99),j=(n(44),n(2));var l=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("sources.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Sobre mi"}),Object(j.jsxs)(a.a,{container:!0,spacing:2,children:[Object(j.jsx)(a.a,{item:!0,xs:6,children:Object(j.jsx)("p",{class:"about",children:n.about})}),Object(j.jsx)(a.a,{item:!0,xs:6,children:Object(j.jsx)("img",{src:n.aboutimg,alt:"About",class:"AboutImage"})})]})]})},b=n(104),h=n(106),d=n(105),p=n(101),u=n(108);var x=function(e){return Object(j.jsx)(b.a,{children:Object(j.jsxs)(u.a,{onClick:function(){console.log(e.link),window.open(e.link,"_blank","noopener noreferrer")},children:[Object(j.jsx)(d.a,{component:"img",width:"100%",image:e.source,alt:e.name}),Object(j.jsxs)(h.a,{children:[Object(j.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),Object(j.jsx)(p.a,{variant:"body2",color:"text.secondary",children:e.smalldesc})]})]})})};var f=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){fetch("sources.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=[];console.log(e.portfolio);for(var n=0;n<e.portfolio.length;++n)t.push(Object(j.jsx)(a.a,{item:!0,xs:4,children:Object(j.jsx)(x,{name:e.portfolio[n].name,source:e.portfolio[n].img,smalldesc:e.portfolio[n].desc,link:e.portfolio[n].src})},e.portfolio[n].name+n.toString()));o(t)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Portafolio"}),Object(j.jsx)(a.a,{container:!0,spacing:2,children:n})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))},m=n(102),g=n(97),v=n(100),k=n(103),A=n(31);var P=function(){return Object(j.jsx)(m.a,{position:"sticky",class:"header",children:Object(j.jsx)(v.a,{maxWidth:"xl",children:Object(j.jsxs)(k.a,{disableGutters:!0,children:[Object(j.jsx)(g.a,{component:A.b,to:"/",children:Object(j.jsx)(p.a,{textAlign:"center",children:"Home"})},"Home"),Object(j.jsx)(g.a,{component:A.b,to:"/Portfolio",children:Object(j.jsx)(p.a,{textAlign:"center",children:"Portfolio"})},"Portfolio")]})})})},y=n(6);s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsxs)(A.a,{children:[Object(j.jsx)(P,{}),Object(j.jsxs)(y.c,{children:[Object(j.jsx)(y.a,{exact:!0,path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(y.a,{exact:!0,path:"/Portfolio",element:Object(j.jsx)(f,{})})]})]})})),O()}},[[68,1,2]]]);
//# sourceMappingURL=main.261f3998.chunk.js.map