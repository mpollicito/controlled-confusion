(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{16:function(e,c,i){"use strict";i.r(c);var t=i(0),s=i(1),r=i(4),n=i.n(r);var a=function(){return Object(t.jsx)("nav",{children:Object(t.jsxs)("div",{className:"nav-wrapper",children:[Object(t.jsx)("a",{href:"#",className:"brand-logo",children:"React Memory Game"}),Object(t.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"sass.html",children:"Home"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"badges.html",children:"Score"})}),Object(t.jsx)("li",{children:Object(t.jsx)("a",{href:"collapsible.html",children:"About"})})]})]})})},d=i(5),j=i(6),l=i(2),b=i(10),h=i(9),m=i(7),o=i.n(m),x=function(e){Object(b.a)(i,e);var c=Object(h.a)(i);function i(e){var t;return Object(d.a)(this,i),(t=c.call(this,e)).state={isFlipped:!1},t.handleClick=t.handleClick.bind(Object(l.a)(t)),t}return Object(j.a)(i,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return Object(t.jsxs)(o.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col s12 m5",children:Object(t.jsx)("div",{onClick:this.handleClick,className:"card-back card-panel"})})})}),Object(t.jsx)("div",{children:Object(t.jsx)("div",{className:"row",children:Object(t.jsx)("div",{className:"col s12 m5",children:Object(t.jsx)("div",{onClick:this.handleClick,className:"card-front card-panel",children:Object(t.jsx)("img",{src:this.props.img})})})})})]})}}]),i}(s.Component),O=[{id:1,img:"./images/card_cat.png"},{id:2,img:"./images/card_cat.png"},{id:3,img:"./images/card_dog.png"},{id:4,img:"./images/card_dog.png"},{id:5,img:"./images/card_fish.png"},{id:6,img:"./images/card_fish.png"},{id:7,img:"./images/card_person.png"},{id:8,img:"./images/card_person.png"},{id:9,img:"./images/circle.png"},{id:10,img:"./images/circle.png"},{id:11,img:"./images/star.png"},{id:12,img:"./images/star.png"}];var p=function(){return Object(t.jsx)("div",{children:O.map((function(e){return c=e,Object(t.jsx)(x,{img:c.img},c.id);var c}))})},u=i(8);function g(e){var c=e.expiryTimestamp,i=Object(u.useTimer)({expiryTimestamp:c}),s=i.seconds,r=i.minutes;return Object(t.jsx)("div",{children:Object(t.jsxs)("h1",{children:["Timer ",r,":",s<10?"0".concat(s):s]})})}function v(){var e=new Date;return e.setSeconds(e.getSeconds()+120),Object(t.jsx)("div",{children:Object(t.jsx)(g,{expiryTimestamp:e})})}var f=function(){return Object(t.jsxs)("table",{className:"responsive-table",children:[Object(t.jsx)("thead",{children:Object(t.jsxs)("tr",{children:[Object(t.jsx)("th",{children:"Name"}),Object(t.jsx)("th",{children:"Score"})]})}),Object(t.jsxs)("tbody",{children:[Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Your Name"}),Object(t.jsx)("td",{children:"Your Score"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Your Name"}),Object(t.jsx)("td",{children:"Your Score"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Your Name"}),Object(t.jsx)("td",{children:"Your Score"})]}),Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:"Your Name"}),Object(t.jsx)("td",{children:"Your Score"})]})]})]})};var N=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("form",{className:"col s12",children:[Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"input-field col s6",children:[Object(t.jsx)("input",{id:"input_text",type:"text","data-length":"3"}),Object(t.jsx)("label",{for:"input_text",children:"Input Initials"})]})}),Object(t.jsx)("div",{className:"row",children:Object(t.jsxs)("div",{className:"input-field col s12",children:[Object(t.jsx)("textarea",{id:"input_text2","data-length":"12"}),Object(t.jsx)("label",{for:"input_text2",children:"Score"})]})})]})}),Object(t.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",children:["Submit",Object(t.jsx)("i",{className:"material-icons right",children:"send"})]})]})};var k=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)(a,{}),Object(t.jsx)(v,{}),Object(t.jsx)(p,{}),Object(t.jsx)("br",{}),Object(t.jsx)(f,{}),Object(t.jsx)(N,{})]})};n.a.render(Object(t.jsx)(k,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.05fdaa8c.chunk.js.map