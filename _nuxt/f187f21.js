(window.webpackJsonp=window.webpackJsonp||[]).push([[23,15,16,17,18,20],{248:function(t,e,r){var content=r(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("16d468c1",content,!0,{sourceMap:!1})},249:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAWCAYAAAArdgcFAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsSAAALEgHS3X78AAAAB3RJTUUH4wwbACk766GI3AAAAZRJREFUOMutlT9LHFEUR8+6a2RJI1gFYZtYWIiNhUggCWq6gJWdFmKTYiUfIF0KC7+ACiGkDQjaSAiyCumSwiiW2gSiNsE/SSHR6LHYtzJZZmdn1r0wPOb35t173rv3vkHd9X9bVmnHk1PfA4NU7TGQB3qAK+5rddHmA/2TdpB31MXaDOP4vamBnBp9LwInwDfgWUTvBV4BnRl878Rtp6L+VR9GtDmz23khJmIFGAWeAp+CtgTsAg9SEI8Ab4GVOPLhEHmhxUR+DOuH4ibz6qn6vQXHj8KRfo2rFoBr4AvV2u/JWCCz4egWARoRlMPWJjNQF9Qf6i+12IgcYCuMYxmoXwIl4ANwkUSOeqTuZyD/rN6ofTWtkEBSAaaAAeCwCXUJeAFsAAd3agLJTAuNMxH1kUS+BjyneiWksWNgPSrU3y1ttY6EuSKQy+CrK63zN8BvYB/oS+G4DJwBP4GhOzUmkd3qv0iS3jUpwS71IvL9am2uUftHE9Hsd3cT1tTsMokc9bX6R91WSykaaFo9V/fU/pp+C5oqF30AgFNcAAAAAElFTkSuQmCC"},250:function(t,e,r){"use strict";r(248)},251:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@keyframes slide-down-data-v-046b8b42{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes slide-down-data-v-046b8b42{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes open-data-v-046b8b42{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}@-webkit-keyframes open-data-v-046b8b42{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}.item[data-v-046b8b42]{margin-bottom:38px}.itemWrapper[data-v-046b8b42]{position:relative;display:flex;flex-direction:column;width:261px;height:100%;transition:all .2s ease-in-out}.itemWrapper[data-v-046b8b42]:hover{box-shadow:0 5px 8px 0 rgba(0,0,0,.16)}.itemWrapper:hover .item-img[data-v-046b8b42]{filter:brightness(35%);transition:filter .2s ease-in-out}.itemWrapper:hover .item-add[data-v-046b8b42]{display:flex}.itemWrapper:hover .item__rate[data-v-046b8b42]{display:inline-flex}.item-img[data-v-046b8b42]{width:100%}.item-add[data-v-046b8b42]{position:absolute;top:97px;left:69px;display:none;line-height:37px;padding:0 12px;justify-content:center;align-items:center;background:none;outline:none;border:1px solid #fff;border-radius:1px;font-size:13px;font-weight:700;color:#fff}.item-add[data-v-046b8b42]:hover{box-shadow:0 0 8px 1px hsla(0,0%,100%,.5);transition:.3s}.item-addCart[data-v-046b8b42]{margin-right:7px}.item-text[data-v-046b8b42]{margin:19px 15px;text-transform:uppercase;font-weight:700;flex:1 1 auto}.item-name[data-v-046b8b42]{font-size:13px;color:#222;transition:all .2s}.item-name[data-v-046b8b42]:hover{color:#f16d7f}.item-price[data-v-046b8b42]{font-size:16px;margin-top:17px}.item__rate[data-v-046b8b42]{display:none;position:absolute;bottom:22px;right:13px}.item__rate-icon[data-v-046b8b42]{font-size:14px;color:#e4af48}",""]),t.exports=n},252:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(0),c=r(22),f=r(68);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.a.extend({name:"CatalogListItem",props:{item:{type:Object,required:!0}},computed:d(d({},Object(c.c)("cart",{cartItems:function(t){return t.items}})),{},{image:function(){return this.item.img},title:function(){return this.item.product_name},price:function(){return this.item.price},buttonText:function(){return this.cartItems.hasOwnProperty(this.item.id)?"In Cart":"Add to Cart"}}),methods:{addToCart:function(){this.$store.dispatch("cart/".concat(f.ACTION_TYPES.ADD_ITEM),this.item)}}}),_=(r(250),r(2)),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"itemWrapper"},[n("a",{attrs:{href:"#"}},[n("img",{staticClass:"item-img",attrs:{src:t.image,alt:""}})]),t._v(" "),n("div",{staticClass:"item-text"},[n("a",{staticClass:"item-name",attrs:{href:"#"}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"item-price text_color_mark"},[t._v("\n        $ "+t._s(t.price)+"\n      ")])]),t._v(" "),n("button",{staticClass:"item-add",on:{click:t.addToCart}},[n("img",{staticClass:"item-addCart",attrs:{src:r(249),alt:"cart"}}),t._v("\n      "+t._s(t.buttonText)+"\n    ")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"item__rate"},[r("i",{staticClass:"item__rate-icon fas fa-star"}),t._v(" "),r("i",{staticClass:"item__rate-icon fas fa-star"}),t._v(" "),r("i",{staticClass:"item__rate-icon fas fa-star"}),t._v(" "),r("i",{staticClass:"item__rate-icon fas fa-star"}),t._v(" "),r("i",{staticClass:"item__rate-icon fas fa-star-half-alt"})])}],!1,null,"046b8b42",null);e.default=component.exports},266:function(t){t.exports=JSON.parse('{"key":"catalog-goods","title":"Catalog Goods","featured":[{"id":1,"product_name":"Mango T-shirt","price":39,"img":"img/featured/product_01.jpg","quantity":0},{"id":2,"product_name":"Mango Shirt","price":41,"img":"img/featured/product_02.jpg","quantity":0},{"id":3,"product_name":"Mango Jacket","price":99,"img":"img/featured/product_03.jpg","quantity":0},{"id":4,"product_name":"Mango Dress","price":65,"img":"img/featured/product_04.jpg","quantity":0},{"id":5,"product_name":"Mango stripe Dress","price":68,"img":"img/featured/product_05.jpg","quantity":0},{"id":6,"product_name":"Mango Hat","price":18,"img":"img/featured/product_06.jpg","quantity":0},{"id":7,"product_name":"Mango Pants","price":52,"img":"img/featured/product_07.jpg","quantity":0},{"id":8,"product_name":"Mango Hoodie","price":45,"img":"img/featured/product_08.jpg","quantity":0}],"catalog":[{"id":9,"product_name":"Mango tall Hoodie","price":139,"img":"img/catalog/product_01.jpg","quantity":0},{"id":10,"product_name":"Mango Coat","price":409,"img":"img/catalog/product_02.jpg","quantity":0},{"id":11,"product_name":"Mango short Jacket","price":99,"img":"img/catalog/product_03.jpg","quantity":0},{"id":12,"product_name":"Mango T-Shirt","price":29,"img":"img/catalog/product_04.jpg","quantity":0},{"id":13,"product_name":"Mango Shorts","price":55,"img":"img/catalog/product_05.jpg","quantity":0},{"id":14,"product_name":"Mango bomber Jacket","price":59,"img":"img/catalog/product_06.jpg","quantity":0},{"id":15,"product_name":"Mango Suit","price":199,"img":"img/catalog/product_07.jpg","quantity":0},{"id":16,"product_name":"Mango oversized Jacket","price":82,"img":"img/catalog/product_08.jpg","quantity":0},{"id":17,"product_name":"Mango T-shirt","price":29,"img":"img/catalog/product_09.jpg","quantity":0}]}')},276:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("27cec5d7",content,!0,{sourceMap:!1})},277:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("4e5a2666",content,!0,{sourceMap:!1})},278:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("05474f1c",content,!0,{sourceMap:!1})},281:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(252),c=n.a.extend({name:"FeaturedList",components:{CatalogListItem:o.default},props:{products:{type:Object,required:!0}},computed:{items:function(){return this.products.featured}}}),f=r(2),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.items,(function(t){return r("CatalogListItem",{key:t.id,attrs:{item:t}})})),1)}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,r){"use strict";r(276)},302:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@keyframes slide-down-data-v-4edd31e3{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes slide-down-data-v-4edd31e3{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes open-data-v-4edd31e3{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}@-webkit-keyframes open-data-v-4edd31e3{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}.featuredList[data-v-4edd31e3]{margin-top:58px;display:flex;flex-wrap:wrap;justify-content:space-between}",""]),t.exports=n},303:function(t,e,r){"use strict";r(277)},304:function(t,e,r){var n=r(10),o=r(104),c=r(305),f=n(!1),l=o(c);f.push([t.i,"@keyframes slide-down-data-v-75149194{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes slide-down-data-v-75149194{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes open-data-v-75149194{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}@-webkit-keyframes open-data-v-75149194{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}.mainBanner[data-v-75149194]{background-color:#e8e8e8}.mainBanner-wrapper[data-v-75149194]{background:url("+l+") bottom no-repeat;height:614px;padding-top:218px;display:flex}.mainBanner-block[data-v-75149194]{width:12px;height:92px;background-color:#f16d7f;margin:9px 12px 0 0}.mainBanner__text[data-v-75149194]{font-weight:900;letter-spacing:.025em;color:#222}.mainBanner__text-top[data-v-75149194]{font-size:60px;line-height:60px;margin-bottom:3px}.mainBanner__text-bottom[data-v-75149194]{font-size:40px}",""]),t.exports=f},305:function(t,e,r){t.exports=r.p+"img/main-banner.c613384.jpg"},306:function(t,e,r){"use strict";r(278)},307:function(t,e,r){var n=r(10),o=r(104),c=r(308),f=r(309),l=r(310),d=r(311),m=n(!1),_=o(c),v=o(f),x=o(l),y=o(d);m.push([t.i,"@keyframes slide-down-data-v-31ef4bc2{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes slide-down-data-v-31ef4bc2{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes open-data-v-31ef4bc2{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}@-webkit-keyframes open-data-v-31ef4bc2{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}.specialOffer[data-v-31ef4bc2]{margin:112px 0 97px;display:flex;width:100%}.specialOffer__promo[data-v-31ef4bc2]{background-image:url("+_+");background-position:50%;background-size:cover;background-repeat:no-repeat;max-width:767px;width:100%}.specialOffer__promo-text[data-v-31ef4bc2]{letter-spacing:.025em;color:#fff;text-transform:uppercase;margin:139px 0 0 39px}.specialOffer__promo-title[data-v-31ef4bc2]{font-size:53.7px;font-weight:700}.specialOffer__promo-subtitle[data-v-31ef4bc2]{font-size:32.2px;line-height:40px}.specialOffer__info[data-v-31ef4bc2]{display:flex;flex-direction:column;justify-content:space-between;padding:48px 41px 63px 35px;background-color:#222224;max-width:373px;height:529px}.specialOffer__infoItem[data-v-31ef4bc2]{display:flex}.specialOffer__infoItem-columnLeft[data-v-31ef4bc2]{margin-right:25px}.specialOffer__infoItem-columnRight[data-v-31ef4bc2]{color:#fbfbfb;letter-spacing:.03em}.specialOffer__infoItem-icon[data-v-31ef4bc2]{width:47px;height:40px}.specialOffer__infoItem-icon--delivery[data-v-31ef4bc2]{background:url("+v+") top/auto no-repeat}.specialOffer__infoItem-icon--sales[data-v-31ef4bc2]{background:url("+x+") top/auto no-repeat}.specialOffer__infoItem-icon--quality[data-v-31ef4bc2]{background:url("+y+") top/auto no-repeat}.specialOffer__infoItem-title[data-v-31ef4bc2]{font-size:20px;font-weight:700;margin:5px 0 15px 3px}.specialOffer__infoItem-text[data-v-31ef4bc2]{font-size:14px;font-weight:300;line-height:24px;letter-spacing:0}",""]),t.exports=m},308:function(t,e,r){t.exports=r.p+"img/promo.0a19d98.jpg"},309:function(t,e,r){t.exports=r.p+"img/delivery.fcc22fc.png"},310:function(t,e,r){t.exports=r.p+"img/sales.4544398.png"},311:function(t,e,r){t.exports=r.p+"img/quality.ba6d108.png"},316:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({name:"MainBanner"}),o=(r(303),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mainBanner center"},[r("div",{staticClass:"mainBanner-wrapper"},[r("div",{staticClass:"mainBanner-block"}),t._v(" "),r("div",{staticClass:"mainBanner__text"},[r("p",{staticClass:"mainBanner__text-top"},[t._v("\n        THE BRAND\n      ")]),t._v(" "),r("p",{staticClass:"mainBanner__text-bottom"},[t._v("\n        OF LUXERIOUS\n        "),r("span",{staticClass:"text_color_mark"},[t._v(" FASHION")])])])])])}],!1,null,"75149194",null);e.default=component.exports},317:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({name:"SpecialOffer"}),o=(r(306),r(2)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"specialOffer center"},[r("div",{staticClass:"specialOffer__promo"},[r("div",{staticClass:"specialOffer__promo-text"},[r("h3",{staticClass:"specialOffer__promo-title"},[t._v("\n        30%\n        "),r("span",{staticClass:"text_color_mark"},[t._v(" OFFER")])]),t._v(" "),r("p",{staticClass:"specialOffer__promo-subtitle"},[t._v("\n        FOR WOMEN\n      ")])])]),t._v(" "),r("div",{staticClass:"specialOffer__info"},[r("div",{staticClass:"specialOffer__infoItem"},[r("div",{staticClass:"specialOffer__infoItem-columnLeft"},[r("div",{staticClass:"specialOffer__infoItem-icon specialOffer__infoItem-icon--delivery"})]),t._v(" "),r("div",{staticClass:"specialOffer__infoItem-columnRight"},[r("h3",{staticClass:"specialOffer__infoItem-title"},[t._v("\n          Free Delivery\n        ")]),t._v(" "),r("p",{staticClass:"specialOffer__infoItem-text"},[t._v("\n          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n        ")])])]),t._v(" "),r("div",{staticClass:"specialOffer__infoItem"},[r("div",{staticClass:"specialOffer__infoItem-columnLeft"},[r("div",{staticClass:"specialOffer__infoItem-icon specialOffer__infoItem-icon--sales"})]),t._v(" "),r("div",{staticClass:"specialOffer__infoItem-columnRight"},[r("h3",{staticClass:"specialOffer__infoItem-title"},[t._v("\n          Sales & discounts\n        ")]),t._v(" "),r("p",{staticClass:"specialOffer__infoItem-text"},[t._v("\n          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n        ")])])]),t._v(" "),r("div",{staticClass:"specialOffer__infoItem"},[r("div",{staticClass:"specialOffer__infoItem-columnLeft"},[r("div",{staticClass:"specialOffer__infoItem-icon specialOffer__infoItem-icon--quality"})]),t._v(" "),r("div",{staticClass:"specialOffer__infoItem-columnRight"},[r("h3",{staticClass:"specialOffer__infoItem-title"},[t._v("\n          Quality assurance\n        ")]),t._v(" "),r("p",{staticClass:"specialOffer__infoItem-text"},[t._v("\n          Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.\n        ")])])])])])}],!1,null,"31ef4bc2",null);e.default=component.exports},320:function(t,e,r){var content=r(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("2065e928",content,!0,{sourceMap:!1})},326:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(281),c=r(266),f=n.a.extend({name:"Featured",components:{FeaturedList:o.default},data:function(){return{productsMock:c}}}),l=(r(301),r(2)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("FeaturedList",{staticClass:"featuredList",attrs:{products:t.productsMock}})}),[],!1,null,"4edd31e3",null);e.default=component.exports},331:function(t,e,r){"use strict";r(320)},332:function(t,e,r){var n=r(10)(!1);n.push([t.i,"@keyframes slide-down{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@-webkit-keyframes slide-down{0%{opacity:0;-webkit-transform:translateY(-3%)}to{opacity:1;-webkit-transform:translateY(0)}}@keyframes open{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}@-webkit-keyframes open{0%{opacity:0;margin-top:-20px}to{opacity:1;margin-top:0}}.featured{margin-top:100px}.featured__header{text-align:center;letter-spacing:.03em}.featured__header-title{font-size:30px;font-weight:700;color:#222;margin-bottom:12px}.featured__header-subtitle{font-size:14px;color:#9f9f9f}.featured__footer{text-align:center;margin-top:18px}.featured__footer-btn{line-height:49px;font-size:16px;font-weight:700;padding:0 18px 0 23px}.featured__footer-btn .arrow-right-icon{font-size:15px;margin-left:8px;transition:all .2s ease}.featured__footer-btn:hover .arrow-right-icon{transform:scale(1.4)}",""]),t.exports=n},336:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(326),c=r(316),f=r(317),l=n.a.extend({components:{SpecialOffer:f.default,MainBanner:c.default,Featured:o.default}}),d=(r(331),r(2)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MainBanner"),t._v(" "),r("section",{staticClass:"featured center"},[t._m(0),t._v(" "),r("Featured"),t._v(" "),r("footer",{staticClass:"featured__footer"},[r("NuxtLink",{staticClass:"button featured__footer-btn",attrs:{to:"/catalog"}},[t._v("\n        Browse All Product\n        "),r("font-awesome-icon",{staticClass:"arrow-right-icon",attrs:{icon:["fas","long-arrow-alt-right"]}})],1)],1)],1),t._v(" "),r("SpecialOffer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"featured__header"},[r("h2",{staticClass:"featured__header-title"},[t._v("\n        Featured Items\n      ")]),t._v(" "),r("p",{staticClass:"featured__header-subtitle"},[t._v("\n        Shop for items based on what we featured in this week\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{MainBanner:r(316).default,Header:r(47).default,Footer:r(48).default,SpecialOffer:r(317).default})}}]);