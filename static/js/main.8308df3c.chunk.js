(this["webpackJsonpreact-navbar-dropdown-examples"]=this["webpackJsonpreact-navbar-dropdown-examples"]||[]).push([[0],{24:function(e,t,n){},3:function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var l=r(n(40)),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.Toggle=l.NavbarDropdownToggle,t.Open=l.NavbarDropdownOpen,t.Close=l.NavbarDropdownClose,t.Menu=l.NavbarDropdownMenu,t.Container=l.NavbarDropdownContainer,t.Item=l.NavbarDropdownItem,t}(l.default);t.default=o},34:function(e,t,n){e.exports=n(60)},39:function(e,t,n){},40:function(e,t,n){"use strict";var a=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=l(n(2)),c=l(n(42)),i=l(n(47)),m=c.default.div(f||(f=a(["\n  position: relative;\n"],["\n  position: relative;\n"]))),s=function(e){function n(t){var n=e.call(this,t)||this;return n.state={open:!1},n}return r(n,e),n.prototype.handleClickToggle=function(){this.setState((function(e){return{open:!e.open}}))},n.prototype.handleClickItem=function(){this.setState({open:!1})},n.prototype.handleClickOutside=function(){this.setState({open:!1})},n.prototype.render=function(){var e=o.default.Children.toArray(this.props.children).find((function(e){return o.default.isValidElement(e)&&e.type===t.NavbarDropdownToggle})),n=o.default.cloneElement(e,{_open:this.state.open,_onClickToggle:this.handleClickToggle.bind(this)}),a=o.default.Children.toArray(this.props.children).find((function(e){return o.default.isValidElement(e)&&e.type===t.NavbarDropdownMenu})),r=o.default.cloneElement(a,{_onClickItem:this.handleClickItem.bind(this)});return o.default.createElement(m,null,n,this.state.open&&r)},n}(o.default.Component);t.default=i.default(s),t.NavbarDropdownToggle=function(e){var n=o.default.Children.toArray(e.children).find((function(e){return o.default.isValidElement(e)&&e.type===t.NavbarDropdownOpen})),a=o.default.cloneElement(n,{_onClickToggle:function(){return e._onClickToggle()}}),r=o.default.Children.toArray(e.children).find((function(e){return o.default.isValidElement(e)&&e.type===t.NavbarDropdownClose})),l=o.default.cloneElement(r,{_onClickToggle:function(){return e._onClickToggle()}});return e._open?l:a};var u=c.default.div(_||(_=a(["\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  &:hover {\n    cursor: pointer;\n  }\n"])));t.NavbarDropdownOpen=function(e){return o.default.createElement(u,{className:e.className?e.className:"",style:e.style?e.style:{},onClick:function(){return e._onClickToggle()}},e.children)};var d=c.default.div(h||(h=a(["\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  &:hover {\n    cursor: pointer;\n  }\n"])));t.NavbarDropdownClose=function(e){return o.default.createElement(d,{className:e.className?e.className:"",style:e.style?e.style:{},onClick:function(){return e._onClickToggle()}},e.children)};var p=c.default.div(v||(v=a(["\n  position: absolute;\n  width: max-content;\n"],["\n  position: absolute;\n  width: max-content;\n"])));t.NavbarDropdownMenu=function(e){var n={top:"calc(100% + "+e.interval+")"};"left"===e.align?n=Object.assign(n,{left:"0px"}):"right"===e.align&&(n=Object.assign(n,{right:"0px"}));var a=o.default.Children.map(e.children,(function(n){return!o.default.isValidElement(n)||n.type!==t.NavbarDropdownContainer&&n.type!==t.NavbarDropdownItem?n:o.default.cloneElement(n,{_onClickItem:function(){return e._onClickItem()}})}));return o.default.createElement(p,{style:n},o.default.createElement("div",{className:e.className?e.className:"",style:e.style?e.style:{}},a))},t.NavbarDropdownContainer=function(e){var n=o.default.Children.map(e.children,(function(n){return!o.default.isValidElement(n)||n.type!==t.NavbarDropdownContainer&&n.type!==t.NavbarDropdownItem?n:o.default.cloneElement(n,{_onClickItem:function(){return e._onClickItem()}})}));return o.default.createElement("div",{className:e.className?e.className:"",style:e.style?e.style:{}},n)};var f,_,h,v,E,N=c.default.div(E||(E=a(["\n  &:hover {\n    cursor: pointer;\n  }\n"],["\n  &:hover {\n    cursor: pointer;\n  }\n"])));t.NavbarDropdownItem=function(e){return o.default.createElement(N,{className:e.className?e.className:"",style:e.style?e.style:{},onClick:function(t){e.onClick&&e.onClick(t),e._onClickItem()}},e.children)}},55:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),o=n.n(l),c=(n(39),n(8)),i=n(9),m=n(3),s=n.n(m),u=n(11),d=n(12),p=(n(24),n(55),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement("div",{className:"title"},"Example 1")),r.a.createElement("div",{className:"header__menu"},r.a.createElement("div",{className:"menu"},r.a.createElement(c.b,{to:"/example1",className:"menu__item"},"Exapmle 1"),r.a.createElement("div",{className:"menu__separator"}),r.a.createElement(c.b,{to:"/example2",className:"menu__item"},"Exapmle 2"),r.a.createElement("div",{className:"menu__spacer"}),r.a.createElement(s.a,null,r.a.createElement(s.a.Toggle,null,r.a.createElement(s.a.Open,{className:"menu__item"},r.a.createElement(u.a,{icon:d.b,fixedWidth:!0})),r.a.createElement(s.a.Close,{className:"menu__item"},r.a.createElement(u.a,{icon:d.c,fixedWidth:!0}))),r.a.createElement(s.a.Menu,{className:"example1-dropdown-menu",interval:"4px",align:"right"},r.a.createElement(s.a.Item,{className:"example1-dropdown-menu__item"},"Item 1"),r.a.createElement(s.a.Item,{className:"example1-dropdown-menu__item"},"Item 2"),r.a.createElement(s.a.Item,{className:"example1-dropdown-menu__item"},"Item 3"),r.a.createElement(s.a.Item,{className:"example1-dropdown-menu__item"},"Item 4"))))))}),f=(n(58),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement("div",{className:"title"},"Example 2")),r.a.createElement("div",{className:"header__menu"},r.a.createElement("div",{className:"menu"},r.a.createElement(c.b,{to:"/example1",className:"menu__item"},"Exapmle 1"),r.a.createElement("div",{className:"menu__separator"}),r.a.createElement(c.b,{to:"/example2",className:"menu__item"},"Exapmle 2"),r.a.createElement("div",{className:"menu__spacer"}),r.a.createElement(s.a,null,r.a.createElement(s.a.Toggle,null,r.a.createElement(s.a.Open,{className:"menu__item"},r.a.createElement(u.a,{icon:d.a,fixedWidth:!0})),r.a.createElement(s.a.Close,{className:"menu__item"},r.a.createElement(u.a,{icon:d.d,fixedWidth:!0}))),r.a.createElement(s.a.Menu,{className:"example2-dropdown-menu",interval:"4px",align:"right"},r.a.createElement(s.a.Container,{className:"example2-dropdown-menu__row"},r.a.createElement(s.a.Item,{className:"example2-dropdown-menu__item",style:{backgroundColor:"lightblue"}},"Item 1"),r.a.createElement(s.a.Item,{className:"example2-dropdown-menu__item",style:{backgroundColor:"lightgreen"}},"Item 2")),r.a.createElement(s.a.Container,{className:"example2-dropdown-menu__row"},r.a.createElement(s.a.Item,{className:"example2-dropdown-menu__item",style:{backgroundColor:"orange"}},"Item 3"),r.a.createElement(s.a.Item,{className:"example2-dropdown-menu__item",style:{backgroundColor:"greenyellow"}},"Item 4")))))))}),_=(n(59),function(){return r.a.createElement(c.a,{basename:"/"},r.a.createElement("div",{className:"app"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/example1",exact:!0,component:p}),r.a.createElement(i.a,{path:"/example2",exact:!0,component:f}),r.a.createElement(i.a,{exact:!0,component:p}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.8308df3c.chunk.js.map