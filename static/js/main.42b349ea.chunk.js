(this["webpackJsonp4-accordion"]=this["webpackJsonp4-accordion"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n.n(a),o=n(8),r=n.n(o),c=(n(15),n.p,n(16),n(2)),l=n(3),d=n(5),u=n(4),h=n(9),p=s.a.createContext(),b=function(e,t){switch(t.type){case"TOGGLE_TEXT":if(e.questions[t.id-1].displayingText)e.questions[t.id-1].displayingText&&(console.log("this is calling from else"),e.questions[t.id-1].info="",e.questions[t.id-1].displayingText=!e.questions[t.id-1].displayingText);else{console.log("this is calling from if"),e.questions[t.id-1].info=e.info[t.id-1],e.questions[t.id-1].displayingText=!e.questions[t.id-1].displayingText;e.questions[t.id-1]}return Object(h.a)({},e)}},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={questions:[{id:1,title:"Do I have to allow the use of cookies?",info:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},{id:2,title:"How do I change my My Page password?",info:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."},{id:3,title:"What is BankID?",info:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."},{id:4,title:"Whose birth number can I use?",info:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."},{id:5,title:"When do I recieve a password ordered by letter?",info:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan "}],dispatch:function(t){e.setState((function(e){return b(e,t)}))}},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)(p.Provider,{value:this.state,children:this.props.children})}}]),n}(a.Component),g=p.Consumer,j=f,y=function(e){var t=e.heading;return Object(i.jsx)("h1",{className:"heading",children:t})},x=n(7),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).toggleText=function(){console.log("calling toggle function"),e.setState((function(e){return{displayText:!e.displayText}}))},e.state={displayText:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,a=e.info;return console.log(this.state.displayText),Object(i.jsx)(s.a.Fragment,{children:Object(i.jsxs)("div",{className:"singleQuestionContainer",children:[Object(i.jsxs)("h3",{className:"question",children:[Object(i.jsxs)("span",{className:"questionTitle",children:[" ",n," "]}),Object(i.jsx)("span",{onClick:this.toggleText,className:"PlusMinus",children:Object(i.jsxs)("span",{children:[" ",this.state.displayText?Object(i.jsx)(x.a,{}):Object(i.jsx)(x.b,{})," "]})})]}),this.state.displayText?Object(i.jsx)("p",{className:"info",children:a}):null]},t)})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"toggleText",value:function(e,t){e({type:"TOGGLE_TEXT",id:t})}},{key:"render",value:function(){return Object(i.jsx)(g,{children:function(e){var t=e.questions,n=e.dispatch;e.selectedId;return console.log(e),Object(i.jsx)(s.a.Fragment,{children:t.map((function(e){return Object(i.jsx)(m,{title:e.title,info:e.info,id:e.id,dispatch:n},e.id)}))})}})}}]),n}(a.Component);var O=function(){return Object(i.jsx)(j,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(y,{heading:"Question And Answer About Login"}),Object(i.jsx)("div",{className:"questionContainer",children:Object(i.jsx)(v,{})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),T()}},[[17,1,2]]]);
//# sourceMappingURL=main.42b349ea.chunk.js.map