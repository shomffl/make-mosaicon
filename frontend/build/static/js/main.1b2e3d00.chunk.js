(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(n,e,t){},101:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,b,d,l,j,x,p,g,h,O,m,f,u,v,w,y,A,C,k,S,Y,z,E,D,I,F,M,B,Q,G,T,U,R,L,W,J,K,N,X=t(0),P=t.n(X),Z=t(25),V=t.n(Z),q=(t(76),t(24)),H=t(6),_=t(3),$=t(15),nn=t(21),en=t.n(nn),tn=t(115),an=t(57),rn=t.n(an),cn=t(4),on=t(1),sn=function(n){var e=n.openSelect,t=n.changeOpenSelect,a=Object(H.f)();return Object(on.jsx)(on.Fragment,{children:e?Object(on.jsxs)(dn,{style:{color:"white",fontSize:"20px",fontWeight:"bold",borderRadius:"30px",width:"200px",height:"48px",radius:"30px"},onClick:function(){a.push("/simple"),t()},children:["NEXT",Object(on.jsx)("span",{children:Object(on.jsx)(rn.a,{})})]}):null})},bn=Object(cn.b)(a||(a=Object(_.a)(["\n 0%{\n    transform: scale(0.68);\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 0;\n  }\n"]))),dn=Object(cn.a)(tn.a)(r||(r=Object(_.a)(['\n  background: linear-gradient(45deg, #cc7a93, #f5f29d);\n  postion: relative;\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #f5f29d, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    border: 2px solid #f5f29d;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s ',' linear infinite;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    border: 1px solid #f5f29d;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s '," linear infinite;\n    animation-delay: 0.3s;\n  }\n"])),bn,bn),ln=t(64),jn=t.n(ln),xn=Object(X.createContext)({}),pn=P.a.memo((function(n){var e=n.children,t=Object(X.useState)(!0),a=Object($.a)(t,2),r=a[0],c=a[1];return Object(on.jsx)(xn.Provider,{value:{openDownload:r,setOpenDownload:c},children:e})})),gn=Object(X.createContext)({}),hn=P.a.memo((function(n){var e=n.children,t=Object(X.useState)(!0),a=Object($.a)(t,2),r=a[0],c=a[1];return Object(on.jsx)(gn.Provider,{value:{openCreate:r,setOpenCreate:c},children:e})})),On=function(){var n=Object(X.useContext)(xn).setOpenDownload,e=Object(X.useContext)(gn).setOpenCreate,t=Object(H.f)();return Object(on.jsx)(on.Fragment,{children:Object(on.jsx)(tn.a,{onClick:function(){t.push("/home"),n(!0),e(!0)},children:Object(on.jsx)(mn,{style:{fontSize:"6vw"}})})})},mn=Object(cn.a)(jn.a)(c||(c=Object(_.a)(['\n  background: linear-gradient(45deg, #ffffff, #accfcc);\n  color: black;\n  border-radius: 2vw;\n  padding: 0.4vw;\n  &:hover {\n    transform: translateY(-1px);\n    background: linear-gradient(45deg, #accfcc, #7f9997);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-1px);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),fn=t(116),un=t(39),vn=t.n(un),wn=t(40),yn=t.n(wn),An=t.p+"static/media/background3.86f4f1ea.png",Cn=function(){var n=Object(X.useState)(!1),e=Object($.a)(n,2),t=e[0],a=e[1],r=Object(X.useState)(!1),c=Object($.a)(r,2),i=c[0],o=c[1],s=function(){return a(!t)},b={color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"12vw"};return Object(on.jsxs)(kn,{children:[Object(on.jsxs)("div",{children:[Object(on.jsx)(Sn,{children:Object(on.jsx)("span",{children:"\u7d20\u6750\u306b\u3057\u305f\u3044\u753b\u50cf\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"})}),Object(on.jsx)(zn,{children:t?null:Object(on.jsx)(on.Fragment,{children:i?Object(on.jsx)(vn.a,{type:"spin",width:"35vmax",color:"#f5f29d"}):null})}),Object(on.jsxs)(Yn,{onSubmit:function(n){n.preventDefault();var e=new FormData(n.target);o(!i);en.a.post("/download",e,{header:{"content-type":"multipart/form-data"}}).then((function(){s(),o(!i)}))},encType:"multipart/form-data",children:[Object(on.jsxs)("label",{children:[Object(on.jsx)("input",{style:{display:"none"},type:"file",name:"file",accept:"image/*",multiple:"multipel"}),Object(on.jsx)(En,{style:b,component:"span",children:"SELECT"})]}),Object(on.jsxs)(Dn,{style:b,type:"submit",children:[Object(on.jsx)("span",{children:"upload"}),Object(on.jsx)(yn.a,{style:{fontSize:"2vw"}})]})]})]}),Object(on.jsx)(Fn,{children:Object(on.jsx)(sn,{openSelect:t,changeOpenSelect:s})}),Object(on.jsx)(In,{children:Object(on.jsx)(On,{})})]})},kn=cn.a.header(i||(i=Object(_.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(200, 200, 200, 0.3),\n      rgba(150, 150, 150, 0.6)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n"])),An),Sn=cn.a.div(o||(o=Object(_.a)(["\n  background: #dfefff;\n  box-shadow: 0px 0px 0px 5px #dfefff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5vmax;\n  font-weight: bold;\n  width: 50vmax;\n  border: dashed 2px black;\n  padding: 0.2vmax 0.5vmax;\n  position: relative;\n  bottom: 5vmax;\n"]))),Yn=cn.a.form(s||(s=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),zn=cn.a.div(b||(b=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -20vmax;\n"]))),En=Object(cn.a)(fn.a)(d||(d=Object(_.a)(['\n  background: linear-gradient(45deg, #cc7a93, #cc6685);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #cc295a, #cc003d);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Dn=Object(cn.a)(tn.a)(l||(l=Object(_.a)(['\n  background: linear-gradient(45deg, #cc7a93, #cc6685);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #cc295a, #cc003d);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),In=cn.a.div(j||(j=Object(_.a)(["\n  position: absolute;\n  top: 1.5%;\n  left: 1.5%;\n"]))),Fn=cn.a.div(x||(x=Object(_.a)(["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Mn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAWxJREFUeF7t1VEJADAMxNBV+aR3MBXvI1UQEo7O7t7TMQamIEyLD1IQq0dBsB4FKYhmAOPphxQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgPWYFc5O3pHN4AAAAASUVORK5CYII=",Bn=t(65),Qn=t.n(Bn),Gn=Object(X.memo)((function(n){var e=n.changeImage,t=Object(X.useContext)(gn),a=t.openCreate,r=t.setOpenCreate,c=Object(X.useContext)(xn),i=c.openDownload,o=c.setOpenDownload;return Object(on.jsxs)(Tn,{style:{color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw"},onClick:function(){e(Mn),r(!a),o(!i)},children:[Object(on.jsx)("span",{children:"remake"}),Object(on.jsx)(Qn.a,{style:{fontSize:"2vw"}})]})})),Tn=Object(cn.a)(tn.a)(p||(p=Object(_.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #ccad66);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Un=t(66),Rn=t(67),Ln=t.n(Rn),Wn=Object(X.memo)((function(n){var e=n.imageUrl;return Object(on.jsx)(on.Fragment,{children:Object(on.jsx)("div",{children:Object(on.jsxs)(Jn,{style:{color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw"},onClick:function(){Object(Un.saveAs)(e,"mosaic_image")},children:[Object(on.jsx)("span",{children:"download"}),Object(on.jsx)(Ln.a,{style:{fontSize:"2vw"}})]})})})})),Jn=Object(cn.a)(tn.a)(g||(g=Object(_.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #cc6685);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Kn=function(n){var e=n.changeImage,t=Object(X.useContext)(gn),a=t.openCreate,r=t.setOpenCreate,c=Object(X.useContext)(xn),i=c.openDownload,o=c.setOpenDownload,s=Object(X.useState)(""),b=Object($.a)(s,2),d=b[0],l=b[1],j={color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"12vw"};return Object(on.jsx)(on.Fragment,{children:a?Object(on.jsx)("div",{children:Object(on.jsxs)(Nn,{onSubmit:function(n){r(!a),n.preventDefault();var t=new FormData(n.target);en.a.post("/upload",t,{header:{"content-type":"multipart/form-data"}}).then((function(n){e("".concat("","/static/images/download_images/").concat(n.data.image)),l(n.data.image),o(!i)})).catch((function(n){alert("\u30a8\u30e9\u30fc\u304c\u51fa\u307e\u3057\u305f\uff01 \u30ea\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u306b\u753b\u50cf\u3092\u518d\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}))},children:[Object(on.jsxs)("label",{children:[Object(on.jsx)("input",{style:{display:"none"},type:"file",name:"file",accept:"image/*"}),Object(on.jsx)(Pn,{style:j,component:"span",children:Object(on.jsx)("span",{children:"SELECT"})})]}),Object(on.jsx)("label",{children:Object(on.jsxs)(Zn,{style:j,type:"submit",children:[Object(on.jsx)("span",{children:"upload"}),Object(on.jsx)(yn.a,{style:{fontSize:"2vw"}})]})})]})}):Object(on.jsx)(on.Fragment,{children:a===i&&Object(on.jsxs)(Xn,{children:[Object(on.jsx)(Wn,{imageUrl:d}),Object(on.jsx)(Gn,{changeImage:e})]})})})},Nn=cn.a.form(h||(h=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),Xn=cn.a.div(O||(O=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),Pn=Object(cn.a)(fn.a)(m||(m=Object(_.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #4d8a99);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Zn=Object(cn.a)(tn.a)(f||(f=Object(_.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #4d8a99);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Vn=t.p+"static/media/background2.c48cd3a7.png",qn=function(){var n=Object(X.useContext)(gn).openCreate,e=Object(X.useContext)(xn).openDownload,t=Object(X.useState)(Mn),a=Object($.a)(t,2),r=a[0],c=a[1];return Object(on.jsx)("div",{style:{textAlign:"center"},children:Object(on.jsxs)(Hn,{children:[Object(on.jsxs)(_n,{children:[Object(on.jsx)($n,{src:r,alt:"img-screen"}),n?null:Object(on.jsx)(on.Fragment,{children:e?Object(on.jsx)(ne,{type:"spokes",width:"35vmax",color:"#5CADB8"}):null}),Object(on.jsx)(ee,{children:Object(on.jsx)(Kn,{changeImage:function(n){return c(n)}})})]}),Object(on.jsx)(te,{children:Object(on.jsx)(On,{})})]})})},Hn=cn.a.header(u||(u=Object(_.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(150, 150, 150, 0.4),\n      rgba(100, 100, 100, 0.7)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n"])),Vn),_n=cn.a.div(v||(v=Object(_.a)(["\n  position: relative;\n  top: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),$n=cn.a.img(w||(w=Object(_.a)(["\n  width: 35vmax;\n  height: 35vmax;\n  position: relative;\n  bottom: 6vw;\n"]))),ne=Object(cn.a)(vn.a)(y||(y=Object(_.a)(["\n  position: absolute;\n  top: -6vw;\n"]))),ee=cn.a.div(A||(A=Object(_.a)(["\n  position: absolute;\n  top: 31vmax;\n"]))),te=cn.a.div(C||(C=Object(_.a)(["\n  position: absolute;\n  top: 1vw;\n  left: 1vw;\n"]))),ae=t.p+"static/media/background1.ceced5fb.png",re=function(){var n={color:"white",fontSize:"1.5vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw"};Object(X.useEffect)((function(){en.a.get("/make")}),[]);var e=Object(H.f)();return Object(on.jsx)("div",{style:{textAlign:"center"},children:Object(on.jsxs)(ce,{children:[Object(on.jsxs)(ie,{children:[Object(on.jsx)(je,{children:"MAKE"}),Object(on.jsxs)(xe,{children:[Object(on.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(on.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(on.jsx)("span",{style:{color:"#8600ac"},children:"ON"})]})]}),Object(on.jsxs)(oe,{children:[Object(on.jsx)(de,{style:n,onClick:function(){en.a.post("/delete",{course:!0}),e.push("/simple")},children:"SIMPLE"}),Object(on.jsx)(le,{style:n,onClick:function(){en.a.post("/delete",{course:!1}),e.push("/fullscale")},children:"FULLSCALE"})]})]})})},ce=cn.a.header(k||(k=Object(_.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(200, 200, 200, 0.3),\n      rgba(150, 150, 150, 0.5)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n"])),ae),ie=cn.a.div(S||(S=Object(_.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  bottom: 5vw;\n"]))),oe=cn.a.div(Y||(Y=Object(_.a)(["\n  display: flex;\n  gap: 0 5vw;\n  position: relative;\n  bottom: 3vw;\n"]))),se=Object(cn.b)(z||(z=Object(_.a)(["\n  0% {\n    transform: translateX(180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),be=Object(cn.b)(E||(E=Object(_.a)(["\n  0% {\n    transform: translateX(-180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),de=Object(cn.a)(fn.a)(D||(D=Object(_.a)(['\n  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);\n  &:hover {\n    transform: translateY(-0.2rem);\n    background: linear-gradient(45deg, red, blue);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),le=Object(cn.a)(fn.a)(I||(I=Object(_.a)(['\n  background: linear-gradient(45deg, red 30%, #ff8e53 90%);\n  &:hover {\n    transform: translateY(-0.2rem);\n    background: linear-gradient(45deg, red, blue);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),je=cn.a.div(F||(F=Object(_.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  font-size: 5vw;\n  font-weight: 700;\n  letter-spacing: 1vw;\n  padding: 0px;\n  margin-bottom: -20px;\n"])),se),xe=cn.a.div(M||(M=Object(_.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  font-size: 8vw;\n  font-weight: 700;\n  letter-spacing: 1vw;\n  padding: 0px;\n  margin: 0px;\n"])),be),pe=function(){var n=Object(H.f)();return Object(on.jsxs)(on.Fragment,{children:[Object(on.jsxs)(Oe,{children:[Object(on.jsx)("span",{children:"\u3088\u3046\u3053\u305d\u300c"}),Object(on.jsx)("span",{style:{color:"#E64552"},children:"MAKE\u2002"}),Object(on.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(on.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(on.jsx)("span",{style:{color:"#8600ac"},children:"ON"}),Object(on.jsx)("span",{children:"\u300d\u3078!!"})]}),Object(on.jsxs)(me,{children:[Object(on.jsxs)(fe,{children:[Object(on.jsx)("span",{children:"\u25bd\u2002"}),Object(on.jsx)("span",{style:{color:"#E64552"},children:"MAKE\u2002"}),Object(on.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(on.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(on.jsx)("span",{style:{color:"#8600ac"},children:"ON"}),Object(on.jsx)("span",{children:"\u3068\u306f\uff1f"})]}),Object(on.jsx)(ue,{children:Object(on.jsx)("span",{children:"\u2192 \u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30a2\u30d7\u30ea\u3067\u3059\u3002"})}),Object(on.jsx)(ve,{children:Object(on.jsx)("span",{children:"\u25bd \u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3068\u306f?"})}),Object(on.jsx)(we,{children:Object(on.jsx)("span",{children:"\u2192 \u5c0f\u3055\u306a\u753b\u50cf\u3092\u5927\u91cf\u306b\u4f7f\u3063\u30661\u679a\u306e\u5199\u771f\u3092\u4f5c\u308a\u4e0a\u3052\u308b\u30a2\u30fc\u30c8\u3067\u3059\u3002"})})]}),Object(on.jsx)(Ae,{style:{color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"15vw"},onClick:function(){n.push("/home")},children:Object(on.jsx)("span",{children:"START \u21d2"})})]})},ge=Object(cn.b)(B||(B=Object(_.a)(["\n  0% {\n    transform: translateX(-180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),he=Object(cn.b)(Q||(Q=Object(_.a)([" {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"]))),Oe=cn.a.div(G||(G=Object(_.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  position: relative;\n  bottom: 8vmax;\n  font-size: 4.5vw;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"])),ge),me=cn.a.div(T||(T=Object(_.a)(["\n  animation: "," 4s 1 forwards;\n  position: relative;\n  bottom: 7vw;\n"])),he),fe=cn.a.div(U||(U=Object(_.a)(["\n  font-size: 3vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),ue=cn.a.div(R||(R=Object(_.a)(["\n  font-size: 2.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n  padding: 0 0 1vmax;\n"]))),ve=cn.a.div(L||(L=Object(_.a)(["\n  font-size: 3vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),we=cn.a.div(W||(W=Object(_.a)(["\n  font-size: 2.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),ye=Object(cn.b)(J||(J=Object(_.a)(["\n 0%{\n    transform: scale(0.68);\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 0;\n  }\n"]))),Ae=Object(cn.a)(fn.a)(K||(K=Object(_.a)(['\n  background: linear-gradient(45deg, #ff9ae3, #ff5f82);\n  position: relative;\n  top: 5vmax;\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #ff9ae3, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    border: 2px solid #ff9ae3;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s ',' linear infinite;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    border: 1px solid #a2f2f2;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s '," linear infinite;\n    animation-delay: 0.3s;\n  }\n"])),ye,ye),Ce=function(){return Object(on.jsx)(on.Fragment,{children:Object(on.jsx)(ke,{children:Object(on.jsx)(pe,{})})})},ke=cn.a.header(N||(N=Object(_.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(220, 220, 220, 0.8),\n      rgba(220, 220, 220, 0.8)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n"])),ae),Se=function(){return Object(on.jsx)(q.a,{basename:"",children:Object(on.jsxs)(H.c,{children:[Object(on.jsx)(H.a,{exact:!0,path:"/",children:Object(on.jsx)(Ce,{})}),Object(on.jsx)(H.a,{exact:!0,path:"/home",children:Object(on.jsx)(re,{})}),Object(on.jsx)(H.a,{path:"/fullscale",children:Object(on.jsx)(Cn,{})}),Object(on.jsx)(H.a,{path:"/simple",children:Object(on.jsx)(qn,{})})]})})},Ye=(t(100),Object(X.createContext)({})),ze=P.a.memo((function(n){var e=n.children,t=Object(X.useState)(!0),a=Object($.a)(t,2),r=a[0],c=a[1];return Object(on.jsx)(Ye.Provider,{value:{course:r,setCourse:c},children:e})}));function Ee(){return Object(on.jsx)(ze,{children:Object(on.jsx)(hn,{children:Object(on.jsx)(pn,{children:Object(on.jsx)(Se,{})})})})}var De=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,117)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};V.a.render(Object(on.jsx)(P.a.StrictMode,{children:Object(on.jsx)(Ee,{})}),document.getElementById("root")),De()},76:function(n,e,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.1b2e3d00.chunk.js.map