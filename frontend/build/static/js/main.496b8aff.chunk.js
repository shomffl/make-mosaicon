(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(n,e,t){},101:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,b,d,l,j,x,p,h,g,O,m,f,u,v,w,y,A,k,C,S,z,Y,E,D,I,F,M,B,Q,W,T,G,R,U,L,J,K,N,X,P,Z,V,q,H,_,$,nn,en,tn=t(0),an=t.n(tn),rn=t(25),cn=t.n(rn),on=(t(76),t(23)),sn=t(6),bn=t(3),dn=t(15),ln=t(22),jn=t.n(ln),xn=t(115),pn=t(57),hn=t.n(pn),gn=t(4),On=t(1),mn=function(n){var e=n.openSelect,t=n.changeOpenSelect,a=Object(sn.f)();return Object(On.jsx)(On.Fragment,{children:e?Object(On.jsxs)(un,{style:{color:"white",fontSize:"20px",fontWeight:"bold",borderRadius:"30px",width:"200px",height:"48px",radius:"30px"},onClick:function(){a.push("/simple"),t()},children:["NEXT",Object(On.jsx)("span",{children:Object(On.jsx)(hn.a,{})})]}):null})},fn=Object(gn.b)(a||(a=Object(bn.a)(["\n 0%{\n    transform: scale(0.68);\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 0;\n  }\n"]))),un=Object(gn.a)(xn.a)(r||(r=Object(bn.a)(['\n  background: linear-gradient(45deg, #cc7a93, #f5f29d);\n  postion: relative;\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #f5f29d, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    border: 2px solid #f5f29d;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s ',' linear infinite;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    border: 1px solid #f5f29d;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s '," linear infinite;\n    animation-delay: 0.3s;\n  }\n"])),fn,fn),vn=t(64),wn=t.n(vn),yn=Object(tn.createContext)({}),An=an.a.memo((function(n){var e=n.children,t=Object(tn.useState)(!0),a=Object(dn.a)(t,2),r=a[0],c=a[1];return Object(On.jsx)(yn.Provider,{value:{openDownload:r,setOpenDownload:c},children:e})})),kn=Object(tn.createContext)({}),Cn=an.a.memo((function(n){var e=n.children,t=Object(tn.useState)(!0),a=Object(dn.a)(t,2),r=a[0],c=a[1];return Object(On.jsx)(kn.Provider,{value:{openCreate:r,setOpenCreate:c},children:e})})),Sn=function(){var n=Object(tn.useContext)(yn).setOpenDownload,e=Object(tn.useContext)(kn).setOpenCreate,t=Object(sn.f)();return Object(On.jsx)(On.Fragment,{children:Object(On.jsx)(xn.a,{onClick:function(){t.push("/home"),n(!0),e(!0)},children:Object(On.jsx)(zn,{style:{fontSize:"6vw"}})})})},zn=Object(gn.a)(wn.a)(c||(c=Object(bn.a)(['\n  background: linear-gradient(45deg, #ffffff, #accfcc);\n  color: black;\n  border-radius: 2vw;\n  padding: 0.4vw;\n  &:hover {\n    transform: translateY(-1px);\n    background: linear-gradient(45deg, #accfcc, #7f9997);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-1px);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Yn=t(116),En=t(39),Dn=t.n(En),In=t(40),Fn=t.n(In),Mn=t.p+"static/media/background3.86f4f1ea.png",Bn=function(){var n=Object(tn.useState)(!1),e=Object(dn.a)(n,2),t=e[0],a=e[1],r=Object(tn.useState)(!1),c=Object(dn.a)(r,2),i=c[0],o=c[1],s=function(){return a(!t)},b={color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"12vw"};return Object(On.jsxs)(Qn,{children:[Object(On.jsxs)("div",{children:[Object(On.jsx)(Wn,{children:Object(On.jsx)("span",{children:"\u7d20\u6750\u306b\u3057\u305f\u3044\u753b\u50cf\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044"})}),Object(On.jsx)(Gn,{children:t?null:Object(On.jsx)(On.Fragment,{children:i?Object(On.jsx)(Dn.a,{type:"spin",width:"35vmax",color:"#f5f29d"}):null})}),Object(On.jsxs)(Tn,{onSubmit:function(n){n.preventDefault();var e=new FormData(n.target);o(!i);jn.a.post("/download",e,{header:{"content-type":"multipart/form-data"}}).then((function(){s(),o(!i)}))},encType:"multipart/form-data",children:[Object(On.jsxs)("label",{children:[Object(On.jsx)("input",{style:{display:"none"},type:"file",name:"file",accept:"image/*",multiple:"multipel"}),Object(On.jsx)(Rn,{style:b,component:"span",children:"SELECT"})]}),Object(On.jsxs)(Un,{style:b,type:"submit",children:[Object(On.jsx)("span",{children:"upload"}),Object(On.jsx)(Fn.a,{style:{fontSize:"2vw"}})]})]})]}),Object(On.jsx)(Jn,{children:Object(On.jsx)(mn,{openSelect:t,changeOpenSelect:s})}),Object(On.jsx)(Ln,{children:Object(On.jsx)(Sn,{})})]})},Qn=gn.a.header(i||(i=Object(bn.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(200, 200, 200, 0.3),\n      rgba(150, 150, 150, 0.6)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n"])),Mn),Wn=gn.a.div(o||(o=Object(bn.a)(["\n  background: #dfefff;\n  box-shadow: 0px 0px 0px 5px #dfefff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5vmax;\n  font-weight: bold;\n  width: 50vmax;\n  border: dashed 2px black;\n  padding: 0.2vmax 0.5vmax;\n  position: relative;\n  bottom: 5vmax;\n"]))),Tn=gn.a.form(s||(s=Object(bn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),Gn=gn.a.div(b||(b=Object(bn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  top: -20vmax;\n"]))),Rn=Object(gn.a)(Yn.a)(d||(d=Object(bn.a)(['\n  background: linear-gradient(45deg, #cc7a93, #cc6685);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #cc295a, #cc003d);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Un=Object(gn.a)(xn.a)(l||(l=Object(bn.a)(['\n  background: linear-gradient(45deg, #cc7a93, #cc6685);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #cc295a, #cc003d);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Ln=gn.a.div(j||(j=Object(bn.a)(["\n  position: absolute;\n  top: 1.5%;\n  left: 1.5%;\n"]))),Jn=gn.a.div(x||(x=Object(bn.a)(["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),Kn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAWxJREFUeF7t1VEJADAMxNBV+aR3MBXvI1UQEo7O7t7TMQamIEyLD1IQq0dBsB4FKYhmAOPphxQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgtpCCYAQynhRQEM4DhtJCCYAYwnBZSEMwAhtNCCoIZwHBaSEEwAxhOCykIZgDDaSEFwQxgOC2kIJgBDKeFFAQzgOG0kIJgBjCcFlIQzACG00IKghnAcFpIQTADGE4LKQhmAMNpIQXBDGA4LaQgmAEMp4UUBDOA4bSQgmAGMJwWUhDMAIbTQgqCGcBwWkhBMAMYTgspCGYAw2khBcEMYDgPWYFc5O3pHN4AAAAASUVORK5CYII=",Nn=t(65),Xn=t.n(Nn),Pn=Object(tn.memo)((function(n){var e=n.changeImage,t=Object(tn.useContext)(kn),a=t.openCreate,r=t.setOpenCreate,c=Object(tn.useContext)(yn),i=c.openDownload,o=c.setOpenDownload;return Object(On.jsxs)(Zn,{style:{color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw"},onClick:function(){e(Kn),r(!a),o(!i)},children:[Object(On.jsx)("span",{children:"remake"}),Object(On.jsx)(Xn.a,{style:{fontSize:"2vw"}})]})})),Zn=Object(gn.a)(xn.a)(p||(p=Object(bn.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #ccad66);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Vn=t(66),qn=t(67),Hn=t.n(qn),_n=Object(tn.memo)((function(n){var e=n.imageUrl;return Object(On.jsx)(On.Fragment,{children:Object(On.jsx)("div",{children:Object(On.jsxs)($n,{style:{color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw"},onClick:function(){Object(Vn.saveAs)("".concat("","/static/images/download_images/").concat(e),"mosaic_image")},children:[Object(On.jsx)("span",{children:"download"}),Object(On.jsx)(Hn.a,{style:{fontSize:"2vw"}})]})})})})),$n=Object(gn.a)(xn.a)(h||(h=Object(bn.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #cc6685);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),ne=function(n){var e=n.changeImage,t=Object(tn.useContext)(kn),a=t.openCreate,r=t.setOpenCreate,c=Object(tn.useContext)(yn),i=c.openDownload,o=c.setOpenDownload,s=Object(tn.useState)(""),b=Object(dn.a)(s,2),d=b[0],l=b[1],j={color:"white",fontSize:"2vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"12vw"};return Object(On.jsx)(On.Fragment,{children:a?Object(On.jsx)("div",{children:Object(On.jsxs)(ee,{onSubmit:function(n){r(!a),n.preventDefault();var t=new FormData(n.target);jn.a.post("/upload",t,{header:{"content-type":"multipart/form-data"}}).then((function(n){o(!i),e("".concat("","/static/images/download_images/").concat(n.data.image)),l(n.data.image)})).catch((function(n){alert("\u30a8\u30e9\u30fc\u304c\u51fa\u307e\u3057\u305f\uff01 \u30ea\u30ed\u30fc\u30c9\u3057\u305f\u5f8c\u306b\u753b\u50cf\u3092\u518d\u9001\u4fe1\u3057\u3066\u304f\u3060\u3055\u3044\u3002")}))},children:[Object(On.jsxs)("label",{children:[Object(On.jsx)("input",{style:{display:"none"},type:"file",name:"file",accept:"image/*"}),Object(On.jsx)(ae,{style:j,component:"span",children:Object(On.jsx)("span",{children:"SELECT"})})]}),Object(On.jsx)("label",{children:Object(On.jsxs)(re,{style:j,type:"submit",children:[Object(On.jsx)("span",{children:"upload"}),Object(On.jsx)(Fn.a,{style:{fontSize:"2vw"}})]})})]})}):Object(On.jsx)(On.Fragment,{children:a===i&&Object(On.jsxs)(te,{children:[Object(On.jsx)(_n,{imageUrl:d}),Object(On.jsx)(Pn,{changeImage:e})]})})})},ee=gn.a.form(g||(g=Object(bn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),te=gn.a.div(O||(O=Object(bn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0 4vw;\n"]))),ae=Object(gn.a)(Yn.a)(m||(m=Object(bn.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #4d8a99);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),re=Object(gn.a)(xn.a)(f||(f=Object(bn.a)(['\n  background: linear-gradient(45deg, #66b8cc, #65a7cc);\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #59a1b3, #4d8a99);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),ce=t.p+"static/media/background2.c48cd3a7.png",ie=function(){var n=Object(tn.useContext)(kn).openCreate,e=Object(tn.useContext)(yn).openDownload,t=Object(tn.useState)(Kn),a=Object(dn.a)(t,2),r=a[0],c=a[1];return Object(On.jsx)("div",{style:{textAlign:"center"},children:Object(On.jsxs)(oe,{children:[Object(On.jsxs)(se,{children:[Object(On.jsx)(be,{src:r,alt:"img-screen"}),n?null:Object(On.jsx)(On.Fragment,{children:e?Object(On.jsx)(de,{type:"spokes",width:"35vmax",color:"#5CADB8"}):null}),Object(On.jsx)(le,{children:Object(On.jsx)(ne,{changeImage:function(n){return c(n)}})})]}),Object(On.jsx)(je,{children:Object(On.jsx)(Sn,{})})]})})},oe=gn.a.header(u||(u=Object(bn.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(150, 150, 150, 0.4),\n      rgba(100, 100, 100, 0.7)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n"])),ce),se=gn.a.div(v||(v=Object(bn.a)(["\n  position: relative;\n  top: 0.5vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),be=gn.a.img(w||(w=Object(bn.a)(["\n  width: 35vmax;\n  height: 35vmax;\n  position: relative;\n  bottom: 6vw;\n"]))),de=Object(gn.a)(Dn.a)(y||(y=Object(bn.a)(["\n  position: absolute;\n  top: -6vw;\n"]))),le=gn.a.div(A||(A=Object(bn.a)(["\n  position: absolute;\n  top: 31vmax;\n"]))),je=gn.a.div(k||(k=Object(bn.a)(["\n  position: absolute;\n  top: 1vw;\n  left: 1vw;\n"]))),xe=t.p+"static/media/background1.ceced5fb.png",pe=function(){var n={color:"white",fontSize:"1.5vw",fontWeight:"bold",borderRadius:"30px",height:"4vw",width:"13vw",border:"1px solid <sil></sil>ver"};Object(tn.useEffect)((function(){jn.a.get("/make")}),[]);var e=Object(sn.f)();return Object(On.jsx)("div",{style:{textAlign:"center"},children:Object(On.jsxs)(he,{children:[Object(On.jsxs)(ge,{children:[Object(On.jsx)(we,{children:"MAKE"}),Object(On.jsxs)(ye,{children:[Object(On.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(On.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(On.jsx)("span",{style:{color:"#8600ac"},children:"ON"})]})]}),Object(On.jsxs)(Oe,{children:[Object(On.jsx)(ue,{style:n,onClick:function(){jn.a.post("/delete",{course:!0}),e.push("/simple")},children:"SIMPLE"}),Object(On.jsx)(ve,{style:n,onClick:function(){jn.a.post("/delete",{course:!1}),e.push("/fullscale")},children:"FULLSCALE"})]})]})})},he=gn.a.header(C||(C=Object(bn.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(200, 200, 200, 0.3),\n      rgba(150, 150, 150, 0.5)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n  margin: 0px;\n  padding: 0px;\n  position: relative;\n"])),xe),ge=gn.a.div(S||(S=Object(bn.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  bottom: 5vmax;\n"]))),Oe=gn.a.div(z||(z=Object(bn.a)(["\n  display: flex;\n  gap: 0 5vmax;\n  position: relative;\n  bottom: 3vmax;\n"]))),me=Object(gn.b)(Y||(Y=Object(bn.a)(["\n  0% {\n    transform: translateX(180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),fe=Object(gn.b)(E||(E=Object(bn.a)(["\n  0% {\n    transform: translateX(-180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),ue=Object(gn.a)(Yn.a)(D||(D=Object(bn.a)(['\n  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);\n  &:hover {\n    transform: translateY(-0.2vw);\n    background: linear-gradient(45deg, red, blue);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n\n  &:active {\n    transform: translateY(-0.1vw);\n    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);\n  }\n']))),ve=Object(gn.a)(Yn.a)(I||(I=Object(bn.a)(['\n  background: linear-gradient(45deg, red 30%, #ff8e53 90%);\n  &:hover {\n    transform: translateY(-0.2vw);\n    background: linear-gradient(45deg, red, blue);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1vw);\n    box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);\n  }\n']))),we=gn.a.div(F||(F=Object(bn.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  font-size: 5vmax;\n  font-weight: 700;\n  letter-spacing: 1vmax;\n  padding: 0px;\n  margin-bottom: -2vmax;\n"])),me),ye=gn.a.div(M||(M=Object(bn.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  font-size: 8vmax;\n  font-weight: 700;\n  letter-spacing: 1vmax;\n  padding: 0px;\n  margin: 0px;\n"])),fe),Ae=function(){var n=Object(sn.f)(),e={color:"white",fontSize:"2vmax",fontWeight:"bold",borderRadius:"30px",height:"4vmax",width:"15vmax",border:"0.2vmax solid silver"};return Object(On.jsx)(On.Fragment,{children:Object(On.jsxs)(ke,{children:[Object(On.jsxs)(ze,{children:[Object(On.jsx)("span",{children:"\u3088\u3046\u3053\u305d\u300c"}),Object(On.jsx)("span",{style:{color:"#E64552"},children:"MAKE\u2002"}),Object(On.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(On.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(On.jsx)("span",{style:{color:"#8600ac"},children:"ON"}),Object(On.jsx)("span",{children:"\u300d\u3078!!"})]}),Object(On.jsxs)(Ye,{children:[Object(On.jsxs)(Ee,{children:[Object(On.jsx)("span",{children:"\u25bd\u2002"}),Object(On.jsx)("span",{style:{color:"#E64552"},children:"MAKE\u2002"}),Object(On.jsx)("span",{style:{color:"#35007d"},children:"MOSA"}),Object(On.jsx)("span",{style:{color:"#5300c4"},children:"IC"}),Object(On.jsx)("span",{style:{color:"#8600ac"},children:"ON"}),Object(On.jsx)("span",{children:"\u3068\u306f\uff1f"})]}),Object(On.jsx)(De,{children:Object(On.jsx)("span",{children:"\u2192 \u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u30a2\u30d7\u30ea\u3067\u3059\u3002"})}),Object(On.jsx)(Ie,{children:Object(On.jsx)("span",{children:"\u25bd \u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3068\u306f?"})}),Object(On.jsx)(Fe,{children:Object(On.jsx)("span",{children:"\u2192 \u5c0f\u3055\u306a\u753b\u50cf\u3092\u5927\u91cf\u306b\u4f7f\u3063\u30661\u679a\u306e\u5199\u771f\u3092\u4f5c\u308a\u4e0a\u3052\u308b\u30a2\u30fc\u30c8\u3067\u3059\u3002"})})]}),Object(On.jsxs)(Me,{children:[Object(On.jsx)(Qe,{style:e,onClick:function(){n.push("/function")},children:Object(On.jsx)("span",{children:"\u6a5f\u80fd\u8aac\u660e"})}),Object(On.jsx)(We,{style:e,onClick:function(){n.push("/home")},children:Object(On.jsx)("span",{children:"START \u21d2"})})]})]})})},ke=gn.a.header(B||(B=Object(bn.a)(["\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(220, 220, 220, 0.8),\n      rgba(220, 220, 220, 0.8)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n"])),xe),Ce=Object(gn.b)(Q||(Q=Object(bn.a)(["\n  0% {\n    transform: translateX(-180px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n  }\n  40%,100% {\n    opacity: 1;\n  }\n"]))),Se=Object(gn.b)(W||(W=Object(bn.a)([" {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"]))),ze=gn.a.div(T||(T=Object(bn.a)(["\n  animation: "," 1.25s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n  position: relative;\n  bottom: 6vmax;\n  font-size: 4.5vw;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"])),Ce),Ye=gn.a.div(G||(G=Object(bn.a)(["\n  animation: "," 4s 1 forwards;\n  position: relative;\n  bottom: 4vw;\n"])),Se),Ee=gn.a.div(R||(R=Object(bn.a)(["\n  font-size: 3.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),De=gn.a.div(U||(U=Object(bn.a)(["\n  font-size: 2.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n  padding: 0 0 2vmax;\n"]))),Ie=gn.a.div(L||(L=Object(bn.a)(["\n  font-size: 3.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),Fe=gn.a.div(J||(J=Object(bn.a)(["\n  font-size: 2.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),Me=gn.a.div(K||(K=Object(bn.a)(["\n  position: relative;\n  top: 2vmax;\n  display: flex;\n  gap: 0 15vmax;\n"]))),Be=Object(gn.b)(N||(N=Object(bn.a)(["\n 0%{\n    transform: scale(0.68);\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 0;\n  }\n"]))),Qe=Object(gn.a)(Yn.a)(X||(X=Object(bn.a)(['\n  background: linear-gradient(45deg, #ff9ae3, #ff5f82);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #ff9ae3, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    border: 2px solid #ff9ae3;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s ',' linear infinite;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    border: 1px solid #ff9ae3;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s '," linear infinite;\n    animation-delay: 0.3s;\n  }\n"])),Be,Be),We=Object(gn.a)(Yn.a)(P||(P=Object(bn.a)(['\n  background: linear-gradient(45deg, #ccaacc, #cc3dcc);\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #cc3dcc, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n']))),Te=function(){var n=Object(sn.f)();return Object(On.jsxs)(Re,{children:[Object(On.jsx)(Ue,{children:Object(On.jsx)("span",{children:"\u3007 \u6a5f\u80fd\u8aac\u660e"})}),Object(On.jsxs)(Le,{children:[Object(On.jsxs)(Je,{children:[Object(On.jsx)("span",{style:{fontSize:"2.5vmax",fontWeight:"bold"},children:"\u25bd \u307e\u305a\u521d\u3081\u306b\u2026"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"1.5vmax"},children:"\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u306b\u5909\u63db\u3057\u305f\u3044\u753b\u50cf\u304c\uff11\u679a\u3001\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u306e\u7d20\u6750\u3068\u306a\u308b\u753b\u50cf\u304c100\u679a\u4ee5\u4e0a\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"1.5vmax"},children:"\u3057\u304b\u3057\u3001\u7d20\u6750\u306e\u753b\u50cf\u3092100\u679a\u4ee5\u4e0a\u7528\u610f\u3059\u308b\u306e\u3082\u5927\u5909\u3067\u3059\u3088\u306d\uff1f"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"1.5vmax"},children:"\u305d\u3053\u3067\u4eca\u56de\u306f\u7d20\u6750\u306e\u753b\u50cf\u3092\u7528\u610f\u305b\u305a\u3068\u3082\u624b\u8efd\u306b\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u51fa\u6765\u308b\u30e2\u30fc\u30c9\u3092\u8a2d\u3051\u307e\u3057\u305f\u3002"})]}),Object(On.jsxs)(Ke,{children:[Object(On.jsx)("span",{style:{fontSize:"2.5vmax",fontWeight:"bold"},children:"\u25bd 2\u7a2e\u985e\u306e\u30e2\u30fc\u30c9\u306b\u3064\u3044\u3066"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"2vmax",fontWeight:"bold"},children:"\u21d2 Simple\u30e2\u30fc\u30c9"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"1.5vmax"},children:"\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u4f5c\u6210\u306b\u5fc5\u8981\u306a\u5927\u91cf\u306e\u7d20\u6750\u753b\u50cf\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u305b\u3093\u3002\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u306b\u5909\u63db\u3057\u305f\u3044\u753b\u50cf1\u679a\u7528\u610f\u3059\u308b\u3060\u3051\u3067\u7c21\u5358\u306b\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u624b\u8efd\u306b\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u3092\u697d\u3057\u307f\u305f\u3044\u4eba\u306fSimple\u30e2\u30fc\u30c9\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002"}),Object(On.jsx)("br",{}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"2vmax",fontWeight:"bold"},children:"\u21d2 FullScale\u30e2\u30fc\u30c9"}),Object(On.jsx)("br",{}),Object(On.jsx)("span",{style:{fontSize:"1.5vmax"},children:"\u3053\u306e\u30e2\u30fc\u30c9\u3067\u306f\u30e2\u30b6\u30a4\u30af\u30a2\u30fc\u30c8\u4f5c\u6210\u306b\u5fc5\u8981\u306a\u5927\u91cf\u306e\u7d20\u6750\u753b\u50cf\u3092\u7528\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u305d\u306e\u5206\u30aa\u30ea\u30b8\u30ca\u30ea\u30c6\u30a3\u306e\u3042\u308b\u3082\u306e\u3092\u4f5c\u308c\u307e\u3059\u3002\u5bb6\u65cf\u3084\u53cb\u4eba\u3068\u306e\u601d\u3044\u51fa\u3092\u4e00\u679a\u306e\u30a2\u30fc\u30c8\u306b\u9589\u3058\u8fbc\u3081\u305f\u3044\u4eba\u306b\u306fFullScale\u30e2\u30fc\u30c9\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002"})]})]}),Object(On.jsx)(Xe,{style:{color:"white",fontSize:"2vmax",fontWeight:"bold",borderRadius:"30px",height:"4vmax",width:"15vmax",border:"0.2vmax solid silver"},onClick:function(){n.push("/home")},children:Object(On.jsx)("span",{children:"START \u21d2"})})]})},Ge=Object(gn.b)(Z||(Z=Object(bn.a)([" {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}"]))),Re=gn.a.header(V||(V=Object(bn.a)(["\n  animation: "," 3s cubic-bezier(0.25, 1, 0.75, 1.5) 1 forwards;\n\n  background-image: linear-gradient(\n      to right bottom,\n      rgba(220, 220, 220, 0.8),\n      rgba(220, 220, 220, 0.8)\n    ),\n    url(",");\n  background-size: cover;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  border: solid 10px;\n  border-color: #505867;\n"])),Ge,xe),Ue=gn.a.div(q||(q=Object(bn.a)(["\n  position: absolute;\n  top: 2vmax;\n  left: 2vmax;\n  font-size: 3.5vmax;\n  font-weight: bold;\n  letter-spacing: 0.2vmax;\n"]))),Le=gn.a.div(H||(H=Object(bn.a)(["\n  position: relative;\n  flex-direction: column;\n"]))),Je=gn.a.div(_||(_=Object(bn.a)(["\n  position: relative;\n  top: 1.5vmax;\n"]))),Ke=gn.a.div($||($=Object(bn.a)(["\n  position: relative;\n  top: 3vmax;\n"]))),Ne=Object(gn.b)(nn||(nn=Object(bn.a)(["\n 0%{\n    transform: scale(0.68);\n  }\n  100%{\n    transform: scale(1.2);\n    opacity: 0;\n  }\n"]))),Xe=Object(gn.a)(Yn.a)(en||(en=Object(bn.a)(['\n  background: linear-gradient(45deg, #ff9ae3, #ff5f82);\n  positoin: relative;\n  top: 5vmax;\n\n  &:hover {\n    transform: translateY(-0.1rem);\n    background: linear-gradient(45deg, #ff9ae3, #faf9d4);\n    boxshadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)";\n  }\n  &:active {\n    transform: translateY(-0.1rem);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\n  }\n  &::after {\n    content: "";\n    position: absolute;\n    border: 2px solid #ff9ae3;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s ',' linear infinite;\n  }\n  &::before {\n    content: "";\n    position: absolute;\n    border: 1px solid #ff9ae3;\n    width: 140%;\n    height: 140%;\n    border-radius: 30px;\n    opacity: 1;\n    animation: 1s '," linear infinite;\n    animation-delay: 0.3s;\n  }\n"])),Ne,Ne),Pe=function(){return Object(On.jsx)(on.a,{basename:"",children:Object(On.jsxs)(sn.c,{children:[Object(On.jsx)(sn.a,{exact:!0,path:"/",children:Object(On.jsx)(Ae,{})}),Object(On.jsx)(sn.a,{path:"/function",children:Object(On.jsx)(Te,{})}),Object(On.jsx)(sn.a,{path:"/home",children:Object(On.jsx)(pe,{})}),Object(On.jsx)(sn.a,{path:"/fullscale",children:Object(On.jsx)(Bn,{})}),Object(On.jsx)(sn.a,{path:"/simple",children:Object(On.jsx)(ie,{})})]})})},Ze=(t(100),Object(tn.createContext)({})),Ve=an.a.memo((function(n){var e=n.children,t=Object(tn.useState)(!0),a=Object(dn.a)(t,2),r=a[0],c=a[1];return Object(On.jsx)(Ze.Provider,{value:{course:r,setCourse:c},children:e})}));function qe(){return Object(On.jsx)(Ve,{children:Object(On.jsx)(Cn,{children:Object(On.jsx)(An,{children:Object(On.jsx)(Pe,{})})})})}var He=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,117)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),a(n),r(n),c(n),i(n)}))};cn.a.render(Object(On.jsx)(an.a.StrictMode,{children:Object(On.jsx)(qe,{})}),document.getElementById("root")),He()},76:function(n,e,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.496b8aff.chunk.js.map