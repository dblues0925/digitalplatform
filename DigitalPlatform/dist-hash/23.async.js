(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{GsTM:function(e,t,r){"use strict";var n=r("g09b"),a=r("tAuX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("IzEo");var u=n(r("bx4M"));r("T2oS");var o=n(r("W9HT"));r("+L6B");var i,l,d,f=n(r("2/Rp")),c=n(r("2Taf")),g=n(r("vZ4D")),s=n(r("l4Ni")),p=n(r("ujKo")),v=n(r("MhPg")),y=a(r("q1tI")),E=r("MuoO"),h=n(r("uUKN")),m=(i=(0,E.connect)(function(e){return{isloading:e.error.isloading}}),i((d=function(e){function t(){var e,r;(0,c.default)(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return r=(0,s.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(a))),r.state={isloading:!1},r.triggerError=function(e){r.setState({isloading:!0});var t=r.props.dispatch;t({type:"error/query",payload:{code:e}})},r}return(0,v.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this,t=this.state.isloading;return y.default.createElement(u.default,null,y.default.createElement(o.default,{spinning:t,wrapperClassName:h.default.trigger},y.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(401)}},"\u89e6\u53d1401"),y.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(403)}},"\u89e6\u53d1403"),y.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(500)}},"\u89e6\u53d1500"),y.default.createElement(f.default,{type:"danger",onClick:function(){return e.triggerError(404)}},"\u89e6\u53d1404")))}}]),t}(y.PureComponent),l=d))||l),w=m;t.default=w},uUKN:function(e,t,r){e.exports={trigger:"antd-pro\\pages\\-exception\\style-trigger"}}}]);