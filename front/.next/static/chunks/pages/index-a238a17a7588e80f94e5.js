_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return O}));var c=n("q1tI"),i=n("/MKj"),a=n("1zst"),r=n("rePB"),o=n("ODXe"),l=n("Vl3Y"),s=n("5rEg"),u=n("2/Rp"),d=n("3zrx"),j=n("p+NB"),b=n("nKUr"),f=function(){var e,t=Object(i.c)((function(e){return e.post})),n=t.imagePaths,a=t.addPostDone,f=Object(i.b)(),p=Object(d.a)(""),O=Object(o.a)(p,3),h=O[0],m=O[1],v=O[2];Object(c.useEffect)((function(){a&&v("")}),[a]);var w=Object(c.useCallback)((function(){if(!h||!h.trim())return alert("\uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud558\uc138\uc694.");var e=new FormData;n.forEach((function(t){e.append("image",t)})),e.append("content",h),f({type:j.e,data:e})}),[h,n]),x=Object(c.useRef)(),g=Object(c.useCallback)((function(){x.current.click()}),[x.current]),E=Object(c.useCallback)((function(e){console.log("images",e.target.files);var t=new FormData;[].forEach.call(e.target.files,(function(e){t.append("image",e)})),f({type:j.G,data:t})})),_=Object(c.useCallback)((function(e){return function(){f({type:j.v,data:e})}}));return Object(b.jsxs)(l.a,{style:{margin:"10px 0 20px"},encType:"multipart/form-data",onFinish:w,children:[Object(b.jsx)(s.a.TextArea,{value:h,name:"image",onChange:m,placeholder:"\ubb34\uc2a8\uc77c\uc774 \uc788\uc5c8\ub098\uc694?",maxLength:140}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"file",multiple:!0,hidden:!0,ref:x,onChange:E}),Object(b.jsx)(u.a,{onClick:g,children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),Object(b.jsx)(u.a,(e={style:"primary"},Object(r.a)(e,"style",{float:"right"}),Object(r.a)(e,"htmlType","submit"),Object(r.a)(e,"children","\uc9f9\uc9f9"),e))]}),Object(b.jsx)("div",{children:n.map((function(e,t){return Object(b.jsxs)("div",{style:{display:"inline-block"},children:[Object(b.jsx)("img",{src:"http://localhost:3065/".concat(e),style:{width:"200px"},alt:e}),Object(b.jsx)("div",{children:Object(b.jsx)(u.a,{onClick:_(t),children:"\uc81c\uac70"})})]},e)}))})]})},p=n("kduo"),O=!0;t.default=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.user})).me,n=Object(i.c)((function(e){return e.post})),r=n.mainPosts,o=n.hasMorePost,l=n.loadPostsLoading,s=n.retweetError;return Object(c.useEffect)((function(){s&&alert(s)}),[s]),Object(c.useEffect)((function(){function t(){if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&o&&!l){var t,n=null===(t=r[r.length-1])||void 0===t?void 0:t.id;e({type:j.n,lastId:n})}}return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[o,l,r]),Object(b.jsxs)(a.a,{children:[t&&Object(b.jsx)(f,{}),r.map((function(e,t){return Object(b.jsx)(p.a,{post:e},e.id)}))]})}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,8,1,3,4,5,6,7,9]]]);