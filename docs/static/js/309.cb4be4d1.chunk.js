"use strict";(self.webpackChunkyeshtary=self.webpackChunkyeshtary||[]).push([[309],{309:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(671),a=n(144),r=n(136),i=n(516),c=n(41),l=n(986),u=n(791),m=n(571),o=n(184),d=function(e){(0,r.Z)(n,e);var t=(0,i.Z)(n);function n(e){return(0,s.Z)(this,n),t.call(this,e)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this;return(0,o.jsx)(c.Z,{children:(0,o.jsx)(l.Z,{title:"My Cart",subtitle:"Cart Summary",className:"cart-page-container",children:this.props.cartItems.length?(0,o.jsxs)(u.Fragment,{children:[(0,o.jsx)("div",{className:"items-container",children:this.props.cartItems.map((function(t){return(0,o.jsxs)("div",{className:"item-container",children:[(0,o.jsx)("img",{className:"item-img",src:t.productImage,alt:t.name}),(0,o.jsxs)("div",{className:"description-container",children:[(0,o.jsx)("p",{className:"name",children:t.name}),(0,o.jsxs)("span",{className:"quantity",children:["Quantity: ",t.quantity]}),(0,o.jsxs)("div",{className:"cta-container",children:[(0,o.jsx)("span",{children:t.price*t.quantity+" "+t.currency}),(0,o.jsx)(m.Z,{onClick:function(){return e.props.removeItem(t.id)},type:"secondary",className:"cta-btn",children:"Remove"})]})]})]},t.id)}))}),(0,o.jsx)("span",{className:"total",children:this.props.cartItems.reduce((function(e,t){return e+t.quantity*t.price}),0)+" EGP"})]}):(0,o.jsx)("span",{children:"You have no items yet.."})})})}}]),n}(u.Component)}}]);
//# sourceMappingURL=309.cb4be4d1.chunk.js.map