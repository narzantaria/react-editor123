(this["webpackJsonpreact-editor123-example"]=this["webpackJsonpreact-editor123-example"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/picture.f3729bd1.png"},20:function(e,t,n){"use strict";n.r(t);n(9);var o=n(0),r=n.n(o),a=n(7),l=n.n(a),c=n(2),i=n(3),u=function(e){var t=e.api,a=e.controlled,l=e.rootUrl,u=e.upload,d=Object(o.useState)(!1),f=d[0],p=d[1],g=Object(o.useState)(!1),E=g[0],b=g[1],C=Object(o.useState)(!1),k=C[0],h=C[1],y=Object(o.useState)(!1),v=y[0],w=y[1],x=Object(o.useState)([]),S=x[0],N=x[1],j=Object(o.useState)(!1),O=j[0],R=j[1],L=Object(o.useState)(null),I=L[0],B=L[1],A=Object(o.useState)({img:"",top:0,left:0,visible:!1}),H=A[0],M=A[1],U=Object(o.useState)(0),q=U[0],z=U[1],K=function(){fetch(t).then((function(e){return e.json()})).then((function(e){return N(e)})),R(!0)},T=function(e){return-1==(e=F(e)).search("<")?e=(e=e.replace(/&lt;/g,"<")).replace(/&gt;/g,">"):e.replace(/[&"'\<\>]/g,(function(e){switch(e){case"&":return"&amp;";case"'":return"&#39;";case'"':return"&quot;";case"<":return"&lt;";default:return"&gt;"}}))},F=function(e){return e.toString().replace(/^([\s]*)|([\s]*)$/g,"")},P=function(e){window.getSelection&&(window.getSelection().getRangeAt(0).cloneRange().commonAncestorContainer.parentNode.nodeName==e.toUpperCase()?D("formatBlock",!1,"p"):D("formatBlock",!1,e))},D=function(e,t,n){var o,r;document.getElementById("editor").focus(),window.getSelection?((r=window.getSelection()).getRangeAt&&(o=r.getRangeAt(0)),document.designMode="on",o&&(r.removeAllRanges(),r.addRange(o)),document.execCommand(e,t,n),document.designMode="off"):document.selection&&document.selection.createRange&&"None"!=document.selection.type&&(o=document.selection.createRange()).execCommand(e,t,n)};return r.a.createElement("div",{id:"editor-wrapper"},r.a.createElement("div",{id:"tools"},r.a.createElement("span",{className:"tools-group"},r.a.createElement(c.a,{id:"code",icon:i.f,onClick:function(){return function(){var e=document.getElementById("editor"),t=e.innerHTML;t=T(t),e.innerHTML=t}()}})),r.a.createElement("span",{className:"tools-group"},r.a.createElement(c.a,{id:"bold",icon:i.e,onClick:function(){return D("bold",!1,null)}}),r.a.createElement(c.a,{id:"italic",icon:i.i,onClick:function(){return D("italic",!1,null)}}),r.a.createElement(c.a,{id:"underline",icon:i.q,onClick:function(){return D("underline",!1,null)}})),r.a.createElement("span",{className:"tools-group"},r.a.createElement(c.a,{id:"strikethrough",icon:i.m,onClick:function(){return D("strikethrough",!1,null)}}),r.a.createElement(c.a,{id:"superscript",icon:i.o,onClick:function(){return D("superscript",!1,null)}}),r.a.createElement(c.a,{id:"subscript",icon:i.n,onClick:function(){return D("subscript",!1,null)}})),r.a.createElement("span",{className:"tools-group"},r.a.createElement("button",{id:"h1",onClick:function(){return P("h1")}},"H1"),r.a.createElement("button",{id:"h2",onClick:function(){return P("h2")}},"H2"),r.a.createElement("button",{id:"h3",onClick:function(){return P("h3")}},"H3"),r.a.createElement("button",{id:"h4",onClick:function(){return P("h4")}},"H4"),r.a.createElement("button",{id:"h5",onClick:function(){return P("h5")}},"H5"),r.a.createElement("button",{id:"h6",onClick:function(){return P("h6")}},"H6")),r.a.createElement("span",{className:"tools-group"},r.a.createElement("div",{id:"fontclr"},r.a.createElement(c.a,{icon:i.g,onClick:function(){return p(!f)}}),f&&r.a.createElement("div",{id:"fontclr-wrapper",className:"colours-wrapper"},r.a.createElement("button",{style:{backgroundColor:"black"},onClick:function(){return D("foreColor",!1,"black")}}),r.a.createElement("button",{style:{backgroundColor:"white"},onClick:function(){return D("foreColor",!1,"white")}}),r.a.createElement("button",{style:{backgroundColor:"red"},onClick:function(){return D("foreColor",!1,"red")}}),r.a.createElement("button",{style:{backgroundColor:"green"},onClick:function(){return D("foreColor",!1,"green")}}),r.a.createElement("button",{style:{backgroundColor:"blue"},onClick:function(){return D("foreColor",!1,"blue")}}),r.a.createElement("button",{style:{backgroundColor:"yellow"},onClick:function(){return D("foreColor",!1,"yellow")}}),r.a.createElement("button",{style:{backgroundColor:"orange"},onClick:function(){return D("foreColor",!1,"orange")}}),r.a.createElement("button",{style:{backgroundColor:"gray"},onClick:function(){return D("foreColor",!1,"gray")}}),r.a.createElement("button",{style:{backgroundColor:"brown"},onClick:function(){return D("foreColor",!1,"brown")}}),r.a.createElement("button",{style:{backgroundColor:"skyblue"},onClick:function(){return D("foreColor",!1,"skyblue")}}))),r.a.createElement("div",{id:"backclr"},r.a.createElement(c.a,{icon:i.p,onClick:function(){return b(!E)}}),E&&r.a.createElement("div",{id:"backclr-wrapper",className:"colours-wrapper"},r.a.createElement("button",{style:{backgroundColor:"black"},onClick:function(){return D("hiliteColor",!1,"black")}}),r.a.createElement("button",{style:{backgroundColor:"white"},onClick:function(){return D("hiliteColor",!1,"white")}}),r.a.createElement("button",{style:{backgroundColor:"red"},onClick:function(){return D("hiliteColor",!1,"red")}}),r.a.createElement("button",{style:{backgroundColor:"green"},onClick:function(){return D("hiliteColor",!1,"green")}}),r.a.createElement("button",{style:{backgroundColor:"blue"},onClick:function(){return D("hiliteColor",!1,"blue")}}),r.a.createElement("button",{style:{backgroundColor:"yellow"},onClick:function(){return D("hiliteColor",!1,"yellow")}}),r.a.createElement("button",{style:{backgroundColor:"orange"},onClick:function(){return D("hiliteColor",!1,"orange")}}),r.a.createElement("button",{style:{backgroundColor:"gray"},onClick:function(){return D("hiliteColor",!1,"gray")}}),r.a.createElement("button",{style:{backgroundColor:"brown"},onClick:function(){return D("hiliteColor",!1,"brown")}}),r.a.createElement("button",{style:{backgroundColor:"skyblue"},onClick:function(){return D("hiliteColor",!1,"skyblue")}})))),r.a.createElement("span",{className:"tools-group"},r.a.createElement("select",{name:"font-size",id:"font-size",onChange:function(e){return function(e){if(window.getSelection){for(var t=window.getSelection(),n=t.getRangeAt(0).cloneRange(),o=t.getRangeAt(0).cloneContents(),r=o.querySelectorAll("span"),a=0;a<r.length;a++)""!=r[a].style.fontSize&&r[a].replaceWith(r[a].innerHTML);n.deleteContents(),n.insertNode(o);var l=document.createElement("span");l.style.fontSize=e.target.value,n.surroundContents(l),t.removeAllRanges(),t.addRange(n)}}(e)}},r.a.createElement("option",{value:"8px"},"8"),r.a.createElement("option",{value:"9px"},"9"),r.a.createElement("option",{value:"10px"},"10"),r.a.createElement("option",{value:"11px"},"11"),r.a.createElement("option",{value:"12px"},"12"),r.a.createElement("option",{value:"14px"},"14"),r.a.createElement("option",{value:"16px"},"16"),r.a.createElement("option",{value:"18px"},"18"),r.a.createElement("option",{value:"24px"},"24"),r.a.createElement("option",{value:"30px"},"30"),r.a.createElement("option",{value:"36px"},"36"),r.a.createElement("option",{value:"48px"},"48"),r.a.createElement("option",{value:"60px"},"60"),r.a.createElement("option",{value:"72px"},"72"))),r.a.createElement("span",{id:"textalign",className:"tools-group"},r.a.createElement(c.a,{id:"insertUnorderedList",icon:i.l,onClick:function(){return D("insertUnorderedList",!1,null)}}),r.a.createElement(c.a,{id:"insertOrderedList",icon:i.k,onClick:function(){return D("insertOrderedList",!1,null)}}),r.a.createElement(c.a,{id:"justifyLeft",icon:i.c,onClick:function(){return D("justifyLeft",!1,null)}}),r.a.createElement(c.a,{id:"justifyCenter",icon:i.a,onClick:function(){return D("justifyCenter",!1,null)}}),r.a.createElement(c.a,{id:"justifyRight",icon:i.d,onClick:function(){return D("justifyRight",!1,null)}}),r.a.createElement(c.a,{id:"justifyFull",icon:i.b,onClick:function(){return D("justifyFull",!1,null)}})),r.a.createElement("span",{className:"tools-group"},r.a.createElement("div",{id:"linktext"},r.a.createElement(c.a,{icon:i.j,onClick:function(){return h(!k)}}),k&&r.a.createElement("div",{id:"link-wrapper",className:"link-wrapper"},r.a.createElement("input",{id:"linkvalue",type:"text"}),r.a.createElement("button",{id:"setlink",className:"tools-btn"},"OK"))),r.a.createElement(c.a,{id:"unlink",icon:i.r,onClick:function(){return D("unlink",!1,null)}})),r.a.createElement("span",{className:"tools-group"},r.a.createElement("div",{id:"insertimg"},r.a.createElement(c.a,{icon:i.h,onClick:function(){return w(!v)}}),v&&r.a.createElement("div",{id:"img-loader",className:"img-loader",focusable:"false"},a?r.a.createElement(o.Fragment,null,r.a.createElement("img",{alt:"",src:I?l+I:n(19),onClick:function(){return K()},style:{cursor:"pointer"}}),O&&r.a.createElement("div",{className:"dark",onClick:function(){R(!1)}},r.a.createElement(s,{rootUrl:l,images:S,upload:u,api:t,refetch:function(){return K()},cancelLoader:function(){R(!1)},handleSelect:function(e){return B(e)}}))):r.a.createElement("input",{type:"text",value:I,onChange:function(e){return B(e.target.value)}}),r.a.createElement("button",{id:"setimg",className:"tools-btn",onClick:function(){D("insertImage",!1,a?l+I:I)}},"OK"))))),r.a.createElement("div",{id:"editor",onContextMenu:function(e){return function(e){"IMG"==e.target.tagName&&"2"==e.button&&(e.preventDefault(),z(++q),e.target.id=q,M({img:e.target.id,visible:!0,top:e.clientY,left:e.clientX}))}(e)},onClick:function(){M({visible:!1,top:0,left:0})},contentEditable:!0},"I am Shutruk Nahunte, King of An\u0161an and Susa, Sovereign of the land of Elam. By command of Inshushinak I destroyed Sippar, Took the Stele of Niran-Sin, and brought it back to Elam, where I erected it as an offering to my god."),H.visible&&r.a.createElement(m,{top:H.top,left:H.left,callBack:function(e){M({visible:!1,top:0,left:0}),document.getElementById(q).style.width=e+"px"}}))},s=function(e){var t=e.rootUrl,n=e.images,a=e.upload,l=e.api,c=e.refetch,i=e.cancelLoader,u=e.handleSelect,s=Object(o.useState)(""),m=s[0],d=s[1];Object(o.useEffect)((function(){return document.getElementById("images-wrapper").classList.add("images-wrapper-visible"),function(){document.getElementById("images-wrapper").classList.remove("images-wrapper-visible")}}),[]);var f=Object(o.useRef)(null);return r.a.createElement("div",{id:"images-wrapper",onClick:function(e){e.stopPropagation()}},r.a.createElement("section",{id:"images-content"},n.map((function(e){return r.a.createElement("div",{className:"img-single-wrapper"},r.a.createElement("img",{src:t+e,alt:"",onClick:function(t){for(var n=document.querySelectorAll(".img-single-wrapper"),o=0;o<n.length;o++)n[o].querySelector("img").classList.remove("selected");t.target.classList.add("selected"),d(e)}}))}))),r.a.createElement("section",{id:"images-controls"},r.a.createElement("button",{className:"xbutton",onClick:function(){u(m),i()}},"OK"),a&&r.a.createElement("button",{className:"xbutton",onClick:function(){return f.current.click()}},"Upload"),r.a.createElement("button",{className:"xbutton",onClick:function(){return i()}},"Cancel"),r.a.createElement("input",{type:"file",ref:f,style:{display:"none"},id:"upload_doc",onChange:function(){return function(){try{var e=document.getElementById("upload_doc").files[0],t=new FormData;return t.append("file",e,e.name),Promise.resolve(fetch(l,{method:"POST",body:t}).then((function(){return c()}))).then((function(){}))}catch(n){return Promise.reject(n)}}()}})))},m=function(e){var t=e.top,n=e.left,a=e.callBack,l=Object(o.useState)(null),c=l[0],i=l[1];return r.a.createElement("div",{id:"resizer",style:{top:t+"px",left:n+"px"}},r.a.createElement("label",{for:"imgwidth"},"Image width:"),r.a.createElement("input",{type:"text",id:"imgwidth",value:c,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{className:"xbutton",onClick:function(){return a(c)}},"OK"))};var d=()=>r.a.createElement(u,{controlled:!1});l.a.render(r.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(20)},9:function(e,t,n){}},[[8,1,2]]]);
//# sourceMappingURL=main.5620b4c9.chunk.js.map