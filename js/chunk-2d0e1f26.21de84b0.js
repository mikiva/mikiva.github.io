(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1f26"],{"7d36":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"game view"},[t.cookieBanner?e("cookie-warning",{on:{hideBanner:t.hideBanner}}):t._e(),e("div",{staticClass:"view__content"},[e("div",{staticClass:"view__row"},[e("logo-stuff")],1),t._m(0)])],1)},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"view__row"},[e("p",{staticClass:"start__paragraph"},[t._v("VAR ÄR LISTAN??")])])}],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cookies"},[e("div",{staticClass:"align align--fluid"},[t._m(0),e("div",{staticClass:"align__cell"},[e("div",{staticClass:"align u-right"},[e("div",{staticClass:"align__cell"},[e("button",{staticClass:"button button--solid button--transparent",on:{click:t.hideBanner}},[t._v("Egentligen inte")])]),t._m(1)])])])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"align__cell"},[e("p",{staticClass:"cookies__message"},[t._v("Den här sidan använder kakor och glass. Har du något problem med det?")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"align__cell"},[e("button",{staticClass:"cookies__button button button--solid button--white"},[t._v("OK")])])}],c={name:"CookieWarning",methods:{hideBanner:function(){this.$emit("hideBanner")}}},r=c,l=e("2877"),u=Object(l["a"])(r,s,o,!1,null,"03479ea2",null),_=u.exports,d=e("3c73"),h={name:"Game",components:{LogoStuff:d["a"],CookieWarning:_},data:function(){return{cookieBanner:!1,waitForCookieBanner:1500}},mounted:function(){this.cookieBanner||this.showBanner()},methods:{showBanner:function(){console.log("show");var t=this;setTimeout(function(){t.cookieBanner=!0},t.waitForCookieBanner)},hideBanner:function(){this.cookieBanner=!1}}},v=h,f=Object(l["a"])(v,i,a,!1,null,"c16359f2",null);n["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e1f26.21de84b0.js.map