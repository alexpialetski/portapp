(this.webpackJsonpportapp=this.webpackJsonpportapp||[]).push([[0],{402:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),i=n.n(c),o=n(453),s=n(452),u=n(81),j=n(30),l=n(238),b=Object(l.a)({}),d="assets",O="portfolio",h="upload",p=n(26),m=n(15),f=n(11),x=n(462),v=n(463),g=n(460),y=n(465),w=n(464),k=n(461),S=n(218),D=n.n(S),F=n(219),I=n.n(F),P=n(14),T=n(71),A=n(454),C=Object(P.a)(A.a,{shouldForwardProp:function(e){return"open"!==e&&"drawerWidth"!==e}})((function(e){var t=e.theme,n=e.open,r=e.drawerWidth;return Object(p.a)({zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{marginLeft:r,width:"calc(100% - ".concat(r,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})})})),L=n(447),W=Object(P.a)(L.a,{shouldForwardProp:function(e){return"open"!==e&&"drawerWidth"!==e}})((function(e){var t,n=e.theme,r=e.open,a=e.drawerWidth;return{zIndex:n.zIndex.drawer,"& .MuiDrawer-paper":Object(p.a)((t={position:"relative",whiteSpace:"nowrap",width:a,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})},Object(f.a)(t,n.breakpoints.down("sm"),{position:"absolute",height:"100%",zIndex:n.zIndex.appBar}),Object(f.a)(t,"boxSizing","border-box"),t),!r&&Object(f.a)({overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7)},n.breakpoints.up("sm"),{width:n.spacing(9)}))}})),z=Object(P.a)("div")((function(e){return{zIndex:e.theme.zIndex.drawer-1,width:"100vw",height:"100vh",position:"fixed",backgroundColor:"black",animation:"fadeIn 500ms ease",opacity:.2,"@keyframes fadeIn":{from:{opacity:0},to:{opacity:.2}}}})),N=n(456),U=n(457),B=n(458),E=n(459),K=n(214),M=n.n(K),R=n(213),_=n.n(R),J=n(215),Y=n.n(J),q=n(1),G=[{path:"/".concat(h),text:"Upload",Icon:Object(q.jsx)(_.a,{})},{path:"/".concat(O),text:"Portfolio",Icon:Object(q.jsx)(M.a,{})},{path:"/".concat(d),text:"Assets",Icon:Object(q.jsx)(Y.a,{})}],H=function(){var e=Object(j.g)(),t=Object(j.h)(),n=Object(r.useCallback)((function(t){return function(){e.push(t)}}),[e]),a=function(e){return t.pathname.includes(e)};return Object(q.jsx)(N.a,{children:G.map((function(e){var t=e.Icon,r=e.text,c=e.path;return Object(q.jsxs)(U.a,{onClick:n(c),selected:a(c),children:[Object(q.jsx)(B.a,{children:t}),Object(q.jsx)(E.a,{primary:r})]},c)}))})},V=n(124),X=n(125),$=n(159),Q=n(217),Z=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"price",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=Object.keys(t).map((function(r){var c=t[r][e];return{date:Number(r),price:c&&c[n]||0,volume:a&&(null===c||void 0===c?void 0:c.volume)||0}}));return{label:r,data:c}},ee=function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})},te=function(e){return Number(e.toFixed()).toString()},ne=function(e){return Number(e.toFixed(3)).toString()},re=function(e){return e.length>22},ae=n(31),ce=function(e){return new Date(e).setUTCHours(0,0,0,0)},ie=function(e,t){for(var n=ce(e),r=ce(t),a=[n];a[a.length-1]<r;)a.push(a[a.length-1]+864e5);return a},oe=function(e,t){var n=new Date(e);return n.setDate(n.getDate()-t)},se=function(e){return function(e){for(var t,n=Object.keys(e).sort((function(e,t){return Number(e)-Number(t)})),r={},a=0;a<n.length;a++)t=Object(p.a)({},r[n[a-1]]||{}),r[n[a]]=e[n[a]].reduce((function(e,t){var n=e[t.symbol];return e[t.symbol]=n?Object(p.a)(Object(p.a)({},n),{},{investment:n.investment+t.investment,volume:n.volume+t.volume}):{volume:t.volume,investment:t.investment},e}),t);return r}(e.filter(re).reduce((function(e,t){var n=ce(+new Date(t[1])),r=function(e,t){if("BUY Market"===t[2]){var n=t[5].split("/").map((function(e){return e.trim()})),r=Object(m.a)(n,2),a=r[0],c=r[1];e.push({symbol:a,volume:parseFloat(t[19]),investment:"USD"===c?-1*parseFloat(t[20]):0}),e.push({symbol:c,volume:parseFloat(t[20]),investment:0})}if("SELL Market"===t[2]){var i=t[5].split("/").map((function(e){return e.trim()})),o=Object(m.a)(i,2),s=o[0],u=o[1];e.push({symbol:s,volume:parseFloat(t[19]),investment:"USD"===u?parseFloat(t[20]):0}),e.push({symbol:u,volume:parseFloat(t[20]),investment:0})}return"Deposit"===t[2]&&e.push({symbol:t[5],volume:parseFloat(t[19]),investment:parseFloat(t[19])}),e}((e[n]||[]).slice(),t);return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,r))}),{}))},ue=function(e){return e.map((function(e){return e.data.values.reduce((function(t,n){var r=Object(m.a)(n,2),a=r[0],c=r[1];return Object(p.a)(Object(p.a)({},t),{},Object(f.a)({},a,{price:c,symbol:e.data.symbol}))}),{})})).reduce((function(e,t){return Object.keys(t).reduce((function(e,n){return Object(p.a)(Object(p.a)({},e),{},Object(f.a)({},n,Object(p.a)(Object(p.a)({},e[n]),{},Object(f.a)({},t[n].symbol,t[n].price))))}),e)}),{})},je=function(e,t){var n=Object.keys(e).map(Number);return Object.keys(t).reduce((function(r,a){var c=function(e,t){var n,r=0,a=Object(ae.a)(t);try{for(a.s();!(n=a.n()).done;){var c=n.value;c<=e&&c>r&&(r=c)}}catch(i){a.e(i)}finally{a.f()}return r}(Number(a),n),i=e[c]||{},o=t[a]||{},s=Object.keys(o).reduce((function(e,t){var n,r,a=o[t]||0,c=i[t]||{volume:0,investment:0},s=c.volume*a,u=(null===(n=i.USD)||void 0===n?void 0:n.investment)||0,j=e.TOTAL.price+s;return Object(p.a)(Object(p.a)({},e),{},(r={},Object(f.a)(r,t,{volume:c.volume,price:s,investment:c.investment}),Object(f.a)(r,"TOTAL",{volume:0,price:j,investment:u}),r))}),{TOTAL:{volume:0,price:0,investment:0}});return Object(p.a)(Object(p.a)({},r),{},Object(f.a)({},a,s))}),{})},le=function(e,t,n){var r=e[t][n];return r?(r.price-r.investment)/r.investment*100:0},be=function(e,t){return Promise.all(e.map((function(e){return"USD"===e?(n=t.start,Promise.resolve({status:{elapsed:0,timestamp:"0"},data:{id:"usd_id",name:"USD",slug:"usd",symbol:"USD",values:ie(Number(n),oe(ce((new Date).getTime()),1)).map((function(e){return[e,1]}))}})):function(e,t){return fetch("https://data.messari.io/api/v1/assets/".concat(e,"/metrics/price/time-series?").concat(new URLSearchParams(t).toString())).then((function(e){return e.json()}))}(e,t);var n})))},de=Object(r.createContext)({setPortfolio:function(){}}),Oe=function(){return Object(r.useContext)(de)},he=Object(Q.a)("PORTFOLIO_LC_KEY"),pe=function(){function e(){Object(V.a)(this,e)}return Object(X.a)(e,null,[{key:"getFromStorage",value:function(){var e=localStorage.getItem(Object($.a)(this,he)[he]);if(e)try{return JSON.parse(e)}catch(t){return}}},{key:"put",value:function(e){localStorage.setItem(Object($.a)(this,he)[he],JSON.stringify(e))}}]),e}();Object.defineProperty(pe,he,{writable:!0,value:"PORTFOLIO_LC_KEY"});var me=function(e){var t=e.children,n=Object(r.useState)(pe.getFromStorage()),a=Object(m.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(),s=Object(m.a)(o,2),u=s[0],j=s[1],l=Object(r.useState)(),b=Object(m.a)(l,2),d=b[0],O=b[1];return Object(r.useEffect)((function(){return c&&pe.put(c)}),[c]),Object(r.useEffect)((function(){if(c){var e=function(e){return Object.keys(e).reduce((function(t,n){return t.length<Object.keys(e[n]).length?Object.keys(e[n]):t}),[])}(c),t=Object.keys(c)[0];O(e),be(e,{start:t,columns:"close",interval:"1d"}).then(ue).then((function(e){return je(c,e)})).then(j)}}),[c]),Object(q.jsx)(de.Provider,{value:{portfolio:c,portfolioAssetDayPrice:u,uniqueAssets:d,setPortfolio:i},children:t})},fe=function(){var e=Oe().portfolioAssetDayPrice,t=oe(ce(Date.now()),1);if(!e)return null;var n=e[t].TOTAL;return Object(q.jsx)(g.a,{component:"h1",variant:"body1",color:"inherit",noWrap:!0,children:"".concat(ne(n.price),"$ & ").concat(ne(le(e,t,"TOTAL")),"%")})},xe=Object(l.a)(),ve=Object(P.a)("main")((function(e){var t=e.theme;return Object(f.a)({backgroundColor:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto",display:"flex",flexDirection:"column"},t.breakpoints.down("sm"),{marginLeft:t.spacing(7),width:"calc(100% - ".concat(t.spacing(7),"px)")})})),ge=Object(P.a)(z)((function(e){var t=e.theme;return Object(f.a)({},t.breakpoints.up("sm"),{display:"none"})})),ye=Object(P.a)(k.a)((function(){return{flexGrow:1,padding:"0 !important"}})),we=function(e){var t,n=e.children,a=Object(j.h)(),c=Object(T.a)(),i=Object(r.useState)(window.innerWidth>c.breakpoints.values.md),u=Object(m.a)(i,2),l=u[0],b=u[1],d=function(){b(!l)},O=null===(t=G.find((function(e){return a.pathname.includes(e.path)})))||void 0===t?void 0:t.text;return Object(q.jsx)(s.a,{theme:xe,children:Object(q.jsxs)(x.a,{sx:{display:"flex"},children:[Object(q.jsx)(o.a,{}),Object(q.jsx)(C,{position:"absolute",open:l,drawerWidth:240,children:Object(q.jsxs)(v.a,{variant:"dense",sx:{justifyContent:"space-between"},children:[Object(q.jsxs)(x.a,{display:"flex",alignItems:"center",children:[Object(q.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:d,sx:Object(p.a)({marginRight:"24px"},l&&{display:"none"}),children:Object(q.jsx)(D.a,{})}),Object(q.jsx)(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,children:O})]}),Object(q.jsx)(fe,{})]})}),Object(q.jsxs)(W,{variant:"permanent",open:l,drawerWidth:240,children:[Object(q.jsx)(v.a,{variant:"dense",sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:Object(q.jsx)(w.a,{onClick:d,children:Object(q.jsx)(I.a,{})})}),Object(q.jsx)(y.a,{}),Object(q.jsx)(H,{})]}),l&&Object(q.jsx)(ge,{onClick:d}),Object(q.jsxs)(ve,{children:[Object(q.jsx)(v.a,{sx:{flex:"0 1 auto"}}),Object(q.jsx)(ye,{maxWidth:"lg",children:n})]})]})})},ke=n(241),Se=["children"],De=function(e){var t=e.children,n=Object(ke.a)(e,Se);return Oe().portfolio?Object(q.jsx)(j.b,Object(p.a)(Object(p.a)({},n),{},{children:t})):Object(q.jsx)(j.a,{to:"/".concat(h)})},Fe=n(220),Ie=n.n(Fe),Pe=n(221),Te=n.n(Pe),Ae=(n(267),function(){var e=Oe().setPortfolio,t=Object(j.g)();return Object(q.jsx)(Te.a,{styles:{dropzone:{overflow:"hidden",height:"100%"}},onSubmit:function(n){n.length&&n[0].file.text().then((function(e){return Ie.a.parse(e).data})).then((function(e){if(function(e){return!!e.find((function(e){return Boolean(Array.isArray(e)&&2===e.length&&"Broker:"===e[0]&&"Free2ex (free2ex.com)"===e[1])}))}(e))return se(e)})).then((function(r){r?(e(r),t.push("/")):n[0].remove()}))},accept:".csv",multiple:!1})}),Ce=n(466),Le=function(){return Object(q.jsx)(x.a,{sx:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"},children:Object(q.jsx)(Ce.a,{})})},We=n(441),ze=n(442),Ne=n(446),Ue=n(236),Be=n(237),Ee=n(110),Ke=n(240),Me=Object(P.a)("div")((function(){return{fontSize:"10px",padding:"4px",background:"rgba(0, 26, 39, 0.9)",color:"white",borderRadius:"4px",textAlign:"center",fontFamily:"sans-serif"}})),Re=Object(P.a)("table")((function(){return{whiteSpace:"nowrap"}})),_e=Object(P.a)("tr")((function(){return{fontWeight:"bold"}})),Je=Object(P.a)("td")((function(){return{display:"flex",alignItems:"center",justifyContent:"center"}})),Ye=Object(P.a)("circle")((function(e){return{stroke:"white",fill:e.color,strokeWidth:2}})),qe=Object(P.a)("strong")((function(){return{marginBottom:"3px",display:"inline-block"}})),Ge=function(e){var t=e.active,n=e.payload;return t&&(null===n||void 0===n?void 0:n.length)?Object(q.jsxs)(Me,{className:"area-chart-tooltip",children:[Object(q.jsx)(qe,{children:ee(n[0].payload.date)}),Object(q.jsxs)(Re,{children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{}),Object(q.jsx)("th",{children:"Symbol"}),Object(q.jsx)("th",{children:"Price"}),Object(q.jsx)("th",{children:"Volume"})]})}),Object(q.jsx)("tbody",{children:n.map((function(e){var t=e.payload,n=e.name,r=e.color;return Object(q.jsxs)(_e,{children:[Object(q.jsx)(Je,{children:Object(q.jsx)("svg",{width:"14",height:"14",children:Object(q.jsx)(Ye,{cx:"7",cy:"7",r:"5",color:r})})}),Object(q.jsx)("td",{children:n}),Object(q.jsx)("td",{children:te(t.price)}),Object(q.jsx)("td",{children:t.volume?ne(t.volume):"---"})]})}))})]})]}):Object(q.jsx)("div",{})},He=["auto","auto"],Ve=["#1976d2","#F99B1C"],Xe=function(e){var t=e.series,n=e.seriesKey,r=void 0===n?"price":n;return Object(q.jsx)(We.a,{children:Object(q.jsxs)(ze.a,{margin:{left:0,top:0,right:20,bottom:0},children:[Object(q.jsx)(Ne.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(q.jsx)(Ue.a,{dataKey:"date",scale:"time",type:"number",tickFormatter:ee,domain:He}),Object(q.jsx)(Be.a,{dataKey:r,type:"number",tickFormatter:"price"===r?te:ne,domain:He}),Object(q.jsx)(Ee.a,{content:Object(q.jsx)(Ge,{})}),t.map((function(e,t){var n=Ve[t]||Ve[0];return Object(q.jsx)(Ke.a,{type:"monotone",dataKey:r,data:e.data,name:e.label,stroke:n},e.label)}))]})})},$e=function(){var e=Oe().portfolioAssetDayPrice,t=Object(r.useMemo)((function(){return e&&[Z("TOTAL",e,"price"),Z("TOTAL",e,"investment","Fund",!1)]}),[e]);return t?Object(q.jsx)(Xe,{series:t}):Object(q.jsx)(Le,{})},Qe=n(451),Ze=function(){var e=Oe(),t=e.portfolioAssetDayPrice,n=e.uniqueAssets,r=oe(ce(Date.now()),1);return t&&n?Object(q.jsx)(Qe.a,{container:!0,height:"100%",children:n.map((function(e){return Object(q.jsxs)(Qe.a,{item:!0,md:6,xs:12,mb:5,height:300,children:[Object(q.jsx)(g.a,{component:"span",variant:"h5",children:e})," ",Object(q.jsx)(g.a,{component:"span",variant:"h6",children:ne(le(t,r,e))+"%"}),Object(q.jsx)(Xe,{series:[Z(e,t,"price"),Z(e,t,"investment","Fund",!1)]})]},e)}))}):Object(q.jsx)(Le,{})},et=function(){return Object(q.jsx)(u.a,{basename:"/portapp",children:Object(q.jsx)(s.a,{theme:b,children:Object(q.jsx)(me,{children:Object(q.jsx)(we,{children:Object(q.jsxs)(j.d,{children:[Object(q.jsx)(j.b,{exact:!0,path:"/".concat(h),children:Object(q.jsx)(Ae,{})}),Object(q.jsx)(De,{exact:!0,path:"/".concat(O),children:Object(q.jsx)($e,{})}),Object(q.jsx)(De,{exact:!0,path:"/".concat(d),children:Object(q.jsx)(Ze,{})}),Object(q.jsx)(j.a,{to:"/".concat(O)})]})})})})})};i.a.render(Object(q.jsxs)(a.a.StrictMode,{children:[Object(q.jsx)(o.a,{}),Object(q.jsx)(et,{})]}),document.getElementById("root"))}},[[402,1,2]]]);
//# sourceMappingURL=main.3780a536.chunk.js.map