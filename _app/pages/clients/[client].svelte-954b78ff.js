import{S as O,i as U,s as W,j as y,m as z,o as F,x as J,u as K,v as Q,A as R,T as X,e as d,k as M,t as j,c as g,a as D,d as u,n as S,g as P,H as N,b as h,f as B,E as o,h as T,V as Y,W as Z}from"../../chunks/vendor-6d249c00.js";import{P as x}from"../../chunks/Page-10b6d6ed.js";import{s as ee}from"../../chunks/site-e548a2a6.js";function ae(l){let e,t,a,s,n,_,C,p,f,r=l[0].content_html+"",i,E,c,A,V=l[0].name+"",k,H,w;return{c(){e=d("section"),t=d("div"),a=d("p"),s=d("img"),C=M(),p=d("div"),f=d("div"),i=M(),E=d("p"),c=d("a"),A=j("View "),k=j(V),H=j(" \u2192"),this.h()},l(m){e=g(m,"SECTION",{class:!0});var v=D(e);t=g(v,"DIV",{class:!0});var $=D(t);a=g($,"P",{});var b=D(a);s=g(b,"IMG",{src:!0,class:!0,alt:!0}),b.forEach(u),C=S($),p=g($,"DIV",{});var q=D(p);f=g(q,"DIV",{class:!0});var G=D(f);G.forEach(u),q.forEach(u),i=S($),E=g($,"P",{});var L=D(E);c=g(L,"A",{href:!0});var I=D(c);A=P(I,"View "),k=P(I,V),H=P(I," \u2192"),I.forEach(u),L.forEach(u),$.forEach(u),v.forEach(u),this.h()},h(){N(s.src,n=l[0].image_path)||h(s,"src",n),h(s,"class","screenshot"),h(s,"alt",_=l[0].title),h(f,"class","post-content"),h(c,"href",w=l[0].external_url),h(t,"class","container"),h(e,"class","diagonal")},m(m,v){B(m,e,v),o(e,t),o(t,a),o(a,s),o(t,C),o(t,p),o(p,f),f.innerHTML=r,o(t,i),o(t,E),o(E,c),o(c,A),o(c,k),o(c,H)},p(m,v){v&1&&!N(s.src,n=m[0].image_path)&&h(s,"src",n),v&1&&_!==(_=m[0].title)&&h(s,"alt",_),v&1&&r!==(r=m[0].content_html+"")&&(f.innerHTML=r),v&1&&V!==(V=m[0].name+"")&&T(k,V),v&1&&w!==(w=m[0].external_url)&&h(c,"href",w)},d(m){m&&u(e)}}}function te(l){let e,t,a=l[1].heading+"",s,n,_,C,p=l[0].name+"",f;return{c(){e=d("h2"),t=d("a"),s=j(a),n=M(),_=d("span"),C=j("/ "),f=j(p),this.h()},l(r){e=g(r,"H2",{slot:!0});var i=D(e);t=g(i,"A",{href:!0});var E=D(t);s=P(E,a),E.forEach(u),n=S(i),_=g(i,"SPAN",{});var c=D(_);C=P(c,"/ "),f=P(c,p),c.forEach(u),i.forEach(u),this.h()},h(){h(t,"href",""+(ee.baseurl+"/portfolio")),h(e,"slot","heading")},m(r,i){B(r,e,i),o(e,t),o(t,s),o(e,n),o(e,_),o(_,C),o(_,f)},p(r,i){i&2&&a!==(a=r[1].heading+"")&&T(s,a),i&1&&p!==(p=r[0].name+"")&&T(f,p)},d(r){r&&u(e)}}}function se(l){let e,t;return e=new x({props:{pageDetails:l[0],$$slots:{heading:[te],default:[ae]},$$scope:{ctx:l}}}),{c(){y(e.$$.fragment)},l(a){z(e.$$.fragment,a)},m(a,s){F(e,a,s),t=!0},p(a,[s]){const n={};s&1&&(n.pageDetails=a[0]),s&7&&(n.$$scope={dirty:s,ctx:a}),e.$set(n)},i(a){t||(J(e.$$.fragment,a),t=!0)},o(a){K(e.$$.fragment,a),t=!1},d(a){Q(e,a)}}}async function ie({page:l,fetch:e}){const{client:t}=l.params,a=`/clients/${t}.json`,s=await e(a);if(s.ok)return{props:s.json()}}function ne(l,e,t){let{pageDetails:a,portfolio:s}=e;return R(async()=>{Y(n=>t(0,a=n))}),X(async()=>{Z()}),l.$$set=n=>{"pageDetails"in n&&t(0,a=n.pageDetails),"portfolio"in n&&t(1,s=n.portfolio)},[a,s]}class ce extends O{constructor(e){super();U(this,e,ne,se,W,{pageDetails:0,portfolio:1})}}export{ce as default,ie as load};
