(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{10:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),i=n.n(a),o=(n(10),n(3)),d=n(0),s=function(e){var t=e.handleInc;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{name:"good",onClick:t,children:"Good"}),Object(d.jsx)("button",{name:"neutral",onClick:t,children:"Neutral"}),Object(d.jsx)("button",{name:"bad",onClick:t,children:"Bad"})]})},j=function(e){var t=e.title,n=e.children;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),n]})},b=n(2),u=n.n(b),l=function(e){var t=e.good,n=e.neutral,c=e.bad,r=e.countTotalFeedback,a=e.countPositiveFeedbackPercentage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Good: ",t]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Neutral: ",n]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Bad: ",c]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Total: ",r()]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("p",{children:["Positive Feedback:",a(),"%"]})})]})})};l.propsTypes={good:u.a.number,neutral:u.a.number,bad:u.a.number,countTotalFeedback:u.a.func,countPositiveFeedbackPercentage:u.a.func}.isRequired;var h=l,O=function(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),i=Object(o.a)(a,2),b=i[0],u=i[1],l=Object(c.useState)(0),O=Object(o.a)(l,2),x=O[0],f=O[1],k=function(){return n+b+x};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{title:"Please leave feedback",children:Object(d.jsx)(s,{handleInc:function(e){switch(e.target.name){case"good":return void r((function(e){return e+1}));case"neutral":return void u((function(e){return e+1}));case"bad":return void f((function(e){return e+1}));default:return}}})}),Object(d.jsx)(j,{title:"Statistics",children:k()?Object(d.jsx)(h,{good:n,neutral:b,bad:x,countTotalFeedback:k,countPositiveFeedbackPercentage:function(){return Math.round(n/k()*100)}}):Object(d.jsx)("p",{children:"No feedback given"})})]})},x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(O,{})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6c97c945.chunk.js.map