webpackJsonp([4],{KTvf:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("Dd8w"),n=s.n(a),i=s("YtJ0"),r=s("NYxO"),c={name:"Order",beforeRouteEnter:function(e,t,s){window.scrollTo(0,0),s()},created:function(){this.loadAddress()},data:function(){return{goodsCheckList:[],columns:[{type:"selection",width:58,align:"center"},{title:"图片",key:"img",width:86,render:function(e,t){return e("div",[e("img",{attrs:{src:t.row.img}})])},align:"center"},{title:"标题",key:"title",align:"center"},{title:"套餐",width:198,key:"package",align:"center"},{title:"数量",key:"count",width:68,align:"center"},{title:"价格",width:68,key:"price",align:"center"}],checkAddress:{name:"未选择",address:"请选择地址"},remarks:""}},computed:n()({},Object(r.e)(["address","shoppingCart"]),{totalPrice:function(){var e=0;return this.goodsCheckList.forEach(function(t){e+=t.price*t.count}),e}}),methods:n()({},Object(r.b)(["loadAddress"]),{select:function(e,t){console.log(e),this.goodsCheckList=e},changeAddress:function(e){var t=this;this.address.forEach(function(s){s.addressId===e&&(t.checkAddress.name=s.name,t.checkAddress.address=s.name+" "+s.province+" "+s.city+" "+s.address+" "+s.phone+" "+s.postalcode)})}}),mounted:function(){var e=this;setTimeout(function(){e.$refs.selection.selectAll(!0)},500)},components:{},store:i.a},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"goods-list-container"},[s("Alert",{staticClass:"tips-box",attrs:{"show-icon":""}},[e._v("\n      小提示\n      "),s("Icon",{attrs:{slot:"icon",type:"ios-lightbulb-outline"},slot:"icon"}),e._v(" "),s("template",{slot:"desc"},[e._v("请点击商品前的选择框，选择购物车中的商品，点击付款即可。")])],2),e._v(" "),s("Table",{ref:"selection",attrs:{border:"",columns:e.columns,data:e.shoppingCart,size:"large","no-data-text":"您的购物车没有商品，请先添加商品到购物车再点击购买"},on:{"on-selection-change":e.select}}),e._v(" "),s("div",{staticClass:"address-container"},[s("h3",[e._v("收货人信息")]),e._v(" "),s("div",{staticClass:"address-box"},[s("div",{staticClass:"address-check"},[s("div",{staticClass:"address-check-name"},[s("span",[s("Icon",{attrs:{type:"ios-checkmark-outline"}}),e._v(" "+e._s(e.checkAddress.name))],1)]),e._v(" "),s("div",{staticClass:"address-detail"},[s("p",[e._v(e._s(e.checkAddress.address))])])]),e._v(" "),s("Collapse",[s("Panel",[e._v("\n              选择地址\n              "),s("p",{attrs:{slot:"content"},slot:"content"},[s("RadioGroup",{attrs:{vertical:"",size:"large"},on:{"on-change":e.changeAddress}},e._l(e.address,function(t,a){return s("Radio",{key:a,attrs:{label:t.addressId}},[s("span",[e._v(e._s(t.name)+" "+e._s(t.province)+" "+e._s(t.city)+" "+e._s(t.address)+" "+e._s(t.phone)+" "+e._s(t.postalcode))])])}),1)],1)])],1)],1)]),e._v(" "),s("div",{staticClass:"remarks-container"},[s("h3",[e._v("备注")]),e._v(" "),s("i-input",{staticClass:"remarks-input",attrs:{size:"large",placeholder:"在这里填写备注信息"},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}})],1),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"pay-container"},[s("div",{staticClass:"pay-box"},[s("p",[s("span",[e._v("提交订单应付总额：")]),e._v(" "),s("span",{staticClass:"money"},[s("Icon",{attrs:{type:"social-yen"}}),e._v(" "+e._s(e.totalPrice.toFixed(2)))],1)]),e._v(" "),s("div",{staticClass:"pay-btn"},[s("router-link",{attrs:{to:"/pay"}},[s("Button",{attrs:{type:"error",size:"large"}},[e._v("支付订单")])],1)],1)])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"invoices-container"},[t("h3",[this._v("发票信息")]),this._v(" "),t("p",[this._v("该商品不支持开发票")])])}]};var d=s("VU/8")(c,o,!1,function(e){s("fDz9")},"data-v-7a7f8933",null);t.default=d.exports},fDz9:function(e,t){}});
//# sourceMappingURL=4.f182a6f6ec3c0da87254.js.map