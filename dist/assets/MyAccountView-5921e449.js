import{_ as ue,o as i,c as l,b as d,d as R,a as r,F as Oe,i as Re,f as L,t as g,p as be,e as Ee,w as V,v as G,m as $e,g as Ne,u as fe,q as De}from"./index-31c511ae.js";import{S as je}from"./SectionHeading-d80bb5f1.js";/* empty css                                                                      */import{S as Z}from"./SecondaryButton-ed36bbbe.js";import{_ as Ue}from"./expand_icon-696a1173.js";import{L as _e,B as Y}from"./BookingService-2e53338a.js";import{C as Fe}from"./CarService-844fda5d.js";import{U as ee}from"./UserService-f660b884.js";const xe="data:image/webp;base64,UklGRpgEAABXRUJQVlA4WAoAAAAQAAAANQAANQAAQUxQSCwCAAABoEXbtilJOsmybdu2bdu27aov244o27Zt207bGasQcePdV9X4jIgJkH/VSSv37q+1d/WkhqRfHozmEGtiI2bGot0234CkHzHhhyTOZf1uBq+sBnj9n/Rl/kIvIHDNoAGKCwP1DfZw6QQsiSfKI/S1EakOTBX1Nvou5Mt1CHhePrVqnqP6CA7i97B3bx2/C8AEWv8+wYdOhgGRZ9ZbHFtPReqbnMhzGLAxpYsoeszU10ykIjBB1Jvp25Ei5RLgWpYEqmnX6ot98Yzf358/p/gwRp/ev0/0o2d2Xp4/p/g8Vt+atGkWA6eyJVBNsUNfM5GKwERRb65vpofncGBfAhcFl0TT1FxcjIg8dTIMiLm63uLYeijYXsgOi8VisVpnZXfOpA//EH8DAoLshLx76zgMIt8qBkPQUOeO5C50CLhfLLXiLnifPbXjK/DUw7k2ItWBqaI63oZvZXGY2hu2iXMjxKUzsNZFpUo4sXNcHPSMwNbHgMBFi7yAiE2DBjge7guRJe2l/QJemQww/lGS31wPQexYMRFHk4nEmwycT2mqmMUJ3IeGw/saYiquZYq3BjibyVxfSrtIrssQs8RUQQ1dRSTbBwipo/Rd1xSx2wq4HFchyQdNl90kYZOuqUSW24hoqCALbFrCm0jeB/C5qRTxhSUqiazBOj6lK/sNIKStxx246aIgSar36W/sdF/wWvoIu1+WfIcPJVWM347ztkdmuGQAAWZo+c7mlM9oVlA4IEYCAACwDQCdASo2ADYAPikQhkIhoQuG21QMAUJZgzAD+iCBuJX+Aa0F1H8iqnv5wvxGIA8wH6W/q77vH9y/QDqQOsA9AD9XfSU/ZT4JP289FAsQHJr1AP4J/JN8A/WAb79EBU/cuRfdxKwDPQ0hnZaChYIg8XzRee/AAP76Ff//6jw//Tz3ySAashZryB/wThJO/PJ1mgNc8ZssvG17Pl30qX9BAgvhL9CZilqx83+DU5eFbgAPRzRe/N/yLIf+84ctcWDkEfhHV26TNwUcr6CghWTURv4SH/9sOGwD+xIQHT5h3sevr4Z9LrSpuRJVafDL5sINwKMJPKqwrf+reyF9PkCqqn/YeHgMfi8WPGkkrUe3cwyzNNQfvZdY93WPqrXtRKbBogDAENakxkW8lzP2CswydbdjKT+C9QBvBbTZnsEHjgE7kcn7tHEdGntpBeW2mLm5oSuAU5DbAL/h1D///zKKH2L/Xu3K5lfrjEY46gJPXreVHw0WorKJKwm/l5k/EqQx0XBc+7Xf/8TY+7a8U73PMzV82/jHmeTlyAWYxarRixmGJYbVq4uIREIB60Cx1UUkgwWTEaydW5P+8jgi8wFcutq/R/pKb4Plc7BNc8//6jhrSj/6PecdQfKb+oebXttL2FhfsPpB+W8Escsk66lGDec935i5/tzRsTk+L/+E70uRojK151W9h8IHOs1br9Hjk9HTfk4uErARU8mDt5lpK9LPxxUZEd95PBtu2asd+VAm2c+wf02Ab/lXSdgWmggYb2UAAAA=",qe="data:image/webp;base64,UklGRggFAABXRUJQVlA4WAoAAAAQAAAANQAANQAAQUxQSCcCAAABkINt27E3z/fHtm3btpOttjvZNiZ7ip1stm3btts4T/X/H7Z2iogJgH/4sjZu7jQ6qrOoYR1qWUM6f/R/0CDFK6cocXYF6d6OFSEhG94/17mI9K/f5Mx2EJnaygmX/zyOBEhWM2KLA9FnU1imAVCA79TpdkdkpxD6HfM04Y/HQLc6O5ZbA86+EwSG8V9Z3u04xgMMkwvbxRIT+HsBFjym+90frP39uH5NEDhgJEi83dztdgEOGeJbvbvwRQUYN4FDZwSAsq3BhmGKKnKNCaDqR9khDXGzKWp4uYEsu8U0PyEAgE/UAPm/rSW5EfDXF8zQaEXEiafawJbVyATiftfmTu99NRaw5b21wwS+9s3GkzIEsJd49B2ZAO5B0sAhv2/uFlK7S4pjEdewBaR6gTrRC2XbSH02ZVY9SOecJ1UhY0jnWDBQ7DCy29CIwzFhYWm4HRYWVofLYey/XTbgpshlHqsNXmEUP4AHDgHAAywG2gWOTmGVFRGJLwiAw1gCwJuBL6ljcfMJikpr7U1Zw3JTkK/B8wBwGrOBcBpdcyEloGjkGHT00qP3YUlp+RUdK4iIe0AvC/EYABzDbgH3ZiziIVO6gyS3O14n41rvD0SMEiJ8uvDPDksg27C5NNbXXJWXmhj69sGlE+6KADKVu7hZ9WYDx+o3sKdzbSJOH0hLqSkryEiICvJxE8Be1NTLXIb7/PgOLsZqS6nI8QCTucwPnfMUgf8wAQBWUDggugIAANAQAJ0BKjYANgA+KRCGQiGhCgYDfgwBQlsAMyRoX6rq7vIvyK5mLgrwNkxdRj+5/x33AeIB0gPMB+n3/C/r3vlegD0AP9p/M+sA9ADykP2c+Bf9wv209mW7rqBz0A/4f/Rt8A/UZFul8jfNeQgk1CZb4SEZD3iqAY4ylNL0tTjosbil49SYvKDhb6rDEHPQAP7//q+9R//3V/Uh83ieyMQ6Yobg3bkC+qZp3BSn7x6sDn7WJTwxAXDtQ2VDMaYkD2/Qp5iNKHfG7m4nP0ySX6ZzOI1wFLcoJ1kcP1nFW3PYfSURg/5jue7g4+udR7TKWS/ZT/bJapO6lxf/Pj5MoJPBpfAxuFREIy0fhu58Y8tr3S3bla8e7WH7651OL8/ru8GI9xMr7yi7OBVbW8Q6hTaTzNPLpCMrmvGiR9Z0zNsAoPh/va+wW1FWOzdiaiB+2YeNXFslJshibYskCOGkRLu0Lq7D3uchc5v69JwqxU3je72/gbY8CoWW6VInRApWkbXo0NM3xe4LhMB1SOAkKwUCMRQAZH6YknMKC7Eo/T6ni8Muy6/BD4Heqx3hrIXeTKbQwxuKY35yiGFYgDx2tU0DeVI/npuw7F7v0Ky4WRURKGyOQtgSDXY3m3++NKdDzAv6bFv3GbHZP3yt4TIIGoa+C+FU4ONcEJJf/hWyatpmXSe9fgfThLNrc9UyF1pZnZLwxfHpTdtJ4s0+4pIURI2wkfVaSdsKLr7kEXOB9mYZQUbNf5+RLynuN1X8j8Zjz9CJu5qFmMqC2B8Vveh1cFn7w+8KDnEEoRE9eXSvuzt8wVyaKimbRSTrotGUMnZQG/yPun3alX6pIW4OYq//12hghwrmU3VnpO2rrV3fPc2USj4pJi78mbpRLqNemifrflhmI8tIuUAwkmGfk4SbC5JB/5ROItaAAAAA";const C=t=>(be("data-v-1b80448d"),t=t(),Ee(),t),Me={class:"order-history-tab table-responsive"},He={class:"bookings_container"},Ve=["id"],Ge=["onClick"],Ye={class:"preview_data"},ze={key:0},Qe=C(()=>d("b",null,"Service: ",-1)),We={key:1},Je=C(()=>d("b",null,"Servis: ",-1)),Ke={key:2},Xe=C(()=>d("b",null,"Service: ",-1)),Ze={key:3},et=C(()=>d("b",null,"Servis: ",-1)),tt={key:4},nt=C(()=>d("b",null,"Order Number:",-1)),st={key:5},it=C(()=>d("b",null,"Rezervasiya nömrəsi:",-1)),ot={key:6},rt=C(()=>d("b",null,"Amount: ",-1)),at={key:7},lt=C(()=>d("b",null,"Məbləğ: ",-1)),dt={key:8},ct=C(()=>d("b",null,"Status: ",-1)),ut={class:"date"},pt={class:"content"},mt={class:"group"},ht={key:0},ft={key:1},yt={key:0,class:"group"},gt={key:0},vt={key:1},bt={key:1,class:"group"},Et={key:0},_t={key:1},At={key:2,class:"group"},St={key:0},wt={key:1},kt={key:3,class:"group"},Ct={key:0},Pt={key:1},It={key:4,class:"group"},Tt={key:0},Bt={key:1},Lt={class:"group"},Ot={key:0},Rt={key:1},$t={class:"group"},Nt={key:0},Dt={key:1},jt={class:"group"},Ut={key:0},Ft={key:1},xt={class:"group"},qt={key:0},Mt={key:1},Ht={key:5,class:"group"},Vt={key:0},Gt={key:1},Yt={key:6,class:"group"},zt={key:0},Qt={key:1},Wt={key:7,class:"group"},Jt={key:0},Kt={key:1},Xt={key:8,class:"group"},Zt=C(()=>d("label",null,"Terminal",-1)),en={class:"group"},tn={key:0},nn={key:1},sn={class:"group"},on={key:0},rn={key:1},an={class:"group"},ln=C(()=>d("label",null,"Status",-1)),dn={class:"group"},cn=C(()=>d("label",null,"Promo Code",-1)),un={class:"group"},pn={key:0},mn={key:1},hn={key:1,class:"no-bookings-msg"},fn={key:2,class:"no-bookings-msg"},yn={name:"OrderHistoryTab",data(){return{bookings:null,isLoading:!1}},mounted(){this.getBookings()},methods:{getBookings(){Y.getBookingByUserId(localStorage.getItem("id")).then(t=>{t.status==200?(this.bookings=t.data,this.bookings.forEach(e=>{this.getCarById(e.car_id)})):this.bookings=""})},async getCarById(t){Fe.getById(t).then(e=>{if(e.status==200)this.bookings.find(s=>s.car_id==t).car_name=e.data.name;else return"Something went wrong"})},expandBooking(t){let e=document.getElementById(t);e.classList.contains("expanded")?e.classList.remove("expanded"):e.classList.add("expanded")},isEng(){return localStorage.getItem("lang")=="en"}}},gn=Object.assign(yn,{setup(t){return(e,s)=>(i(),l("div",Me,[d("div",He,[e.isLoading?(i(),R(_e,{key:0,class:"loader"})):r("",!0),(i(!0),l(Oe,null,Re(e.bookings,(n,p)=>(i(),l("div",{class:"booking",id:p},[d("img",{src:Ue,alt:"Expand icon",class:"expand_icon",onClick:h=>e.expandBooking(p)},null,8,Ge),d("div",Ye,[n.flight_type&&e.isEng()?(i(),l("p",ze,[Qe,L("Airport Transfer")])):r("",!0),n.flight_type&&!e.isEng()?(i(),l("p",We,[Je,L("Hava Limanı Transferi")])):r("",!0),!n.flight_type&&e.isEng()?(i(),l("p",Ke,[Xe,L(g(n.end_date?"Car Hire":"One Way"),1)])):r("",!0),!n.flight_type&&!e.isEng()?(i(),l("p",Ze,[et,L(g(n.end_date?"Avtomobil Icarəsi":"Sürücü Rezervasiya"),1)])):r("",!0),e.isEng()?(i(),l("p",tt,[nt,L(" "+g(n.order_number),1)])):r("",!0),e.isEng()?r("",!0):(i(),l("p",st,[it,L(" "+g(n.order_number),1)])),e.isEng()?(i(),l("p",ot,[rt,L(g(n.amount),1)])):r("",!0),e.isEng()?r("",!0):(i(),l("p",at,[lt,L("₼"+g(n.amount),1)])),e.isEng()?(i(),l("p",dt,[ct,L(g(n.status),1)])):r("",!0),d("p",ut,g(n.created_date),1)]),d("div",pt,[d("div",mt,[e.isEng()?(i(),l("label",ht,"Order number")):r("",!0),e.isEng()?r("",!0):(i(),l("label",ft,"Rezervasiya nömrəsi")),d("p",null,g(n.order_number),1)]),n.flight_type?(i(),l("div",yt,[e.isEng()?(i(),l("label",gt,"Flight Type")):r("",!0),e.isEng()?r("",!0):(i(),l("label",vt,"Servis növü")),d("p",null,g(n.flight_type||"N/A"),1)])):r("",!0),n.pickup_address?(i(),l("div",bt,[e.isEng()?(i(),l("label",Et,"Pickup Address")):r("",!0),e.isEng()?r("",!0):(i(),l("label",_t,"Görüş Yeri")),d("p",null,g(n.pickup_address||"N/A"),1)])):r("",!0),n.destination_address?(i(),l("div",At,[e.isEng()?(i(),l("label",St,"Destination Address")):r("",!0),e.isEng()?r("",!0):(i(),l("label",wt,"Təyinat Ünvanı")),d("p",null,g(n.destination_address||"N/A"),1)])):r("",!0),n.date?(i(),l("div",kt,[e.isEng()?(i(),l("label",Ct,"Date")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Pt,"Pickup tarixi və vaxtı")),d("p",null,g(n.date||"N/A"),1)])):r("",!0),n.end_date?(i(),l("div",It,[e.isEng()?(i(),l("label",Tt,"End Date")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Bt,"Bitmə tarixi")),d("p",null,g(n.end_date||"N/A"),1)])):r("",!0),d("div",Lt,[e.isEng()?(i(),l("label",Ot,"Car")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Rt,"Avtomobil")),d("p",null,g(n.car_name||"s"),1)]),d("div",$t,[e.isEng()?(i(),l("label",Nt,"Full Name")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Dt,"Adınız ve Soyadınız")),d("p",null,g(n.full_name||"N/A"),1)]),d("div",jt,[e.isEng()?(i(),l("label",Ut,"Email")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Ft,"Email ünvanı")),d("p",null,g(n.email||"N/A"),1)]),d("div",xt,[e.isEng()?(i(),l("label",qt,"Phone")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Mt,"Telefon Nömrəsi")),d("p",null,g(n.phone||"N/A"),1)]),n.passengers?(i(),l("div",Ht,[e.isEng()?(i(),l("label",Vt,"Passengers")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Gt,"Sərnişinlərin sayı")),d("p",null,g(n.passengers||"N/A"),1)])):r("",!0),n.suitcases?(i(),l("div",Yt,[e.isEng()?(i(),l("label",zt,"Suitcases")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Qt,"Çamadanların sayı")),d("p",null,g(n.suitcases||"N/A"),1)])):r("",!0),n.luggages?(i(),l("div",Wt,[e.isEng()?(i(),l("label",Jt,"Luggages")):r("",!0),e.isEng()?r("",!0):(i(),l("label",Kt,"Baqajların sayı")),d("p",null,g(n.luggages||"N/A"),1)])):r("",!0),n.flight_number?(i(),l("div",Xt,[Zt,d("p",null,g(n.terminal||"N/A"),1)])):r("",!0),d("div",en,[e.isEng()?(i(),l("label",tn,"Amount")):r("",!0),e.isEng()?r("",!0):(i(),l("label",nn,"Məbləğ")),d("p",null,g(n.amount),1)]),d("div",sn,[e.isEng()?(i(),l("label",on,"Payment Method")):r("",!0),e.isEng()?r("",!0):(i(),l("label",rn,"Ödəniş üsulu")),d("p",null,g(n.method),1)]),d("div",an,[ln,d("p",null,g(n.status),1)]),d("div",dn,[cn,d("p",null,g(n.promo_code||"N/A"),1)]),d("div",un,[e.isEng()?(i(),l("label",pn,"Created Date")):r("",!0),e.isEng()?r("",!0):(i(),l("label",mn,"Rezervasiya tarixi")),d("p",null,g(n.created_date),1)])])],8,Ve))),256)),e.bookings==""&&e.isEng()?(i(),l("h3",hn,"No bookings yet")):r("",!0),e.bookings==""&&!e.isEng()?(i(),l("h3",fn,"Rezervasiyalar yoxdur")):r("",!0)])]))}}),vn=ue(gn,[["__scopeId","data-v-1b80448d"]]);var q={};const bn="@vue-stripe/vue-stripe",En="4.5.0",_n="Stripe Checkout & Elements for Vue.js",An="jofftiquez@gmail.com",Sn={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},wn="dist/index.js",kn="dist",Cn={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},Pn={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},In={url:"https://github.com/vue-stripe/vue-stripe/issues"},Tn={"pre-commit":"lint-staged"},Bn="https://github.com/vue-stripe/vue-stripe#readme",Ln=["vue","vuejs","stripe","checkout","payment"],On="MIT",Rn={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},$n="typings/index.d.ts",Nn={name:bn,version:En,description:_n,author:An,scripts:Sn,main:wn,module:kn,dependencies:Cn,devDependencies:Pn,bugs:In,gitHooks:Tn,homepage:Bn,keywords:Ln,license:On,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:Rn,typings:$n};var Ae;Object.defineProperty(q,"__esModule",{value:!0});var le="auto",Dn=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],jn=["auto","book","donate","pay"],Un=["required","auto"],Fn={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},xn=Nn.version,z={name:"vue-stripe",version:xn,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},qn={install:function(t,e){var s=e.pk,n=e.stripeAccount,p=e.apiVersion,h=e.locale,f=window.Stripe(s,{stripeAccount:n,apiVersion:p,locale:h});f.registerAppInfo(z),t.prototype.$stripe=f}};function Mn(t,e){return t(e={exports:{}},e.exports),e.exports}var Hn=Mn(function(t){var e=function(s){var n,p=Object.prototype,h=p.hasOwnProperty,f=typeof Symbol=="function"?Symbol:{},c=f.iterator||"@@iterator",S=f.asyncIterator||"@@asyncIterator",v=f.toStringTag||"@@toStringTag";function _(a,o,m,y){var u=o&&o.prototype instanceof ne?o:ne,A=Object.create(u.prototype),U=new re(y||[]);return A._invoke=function(O,H,b){var k=E;return function($,F){if(k===M)throw new Error("Generator is already running");if(k===W){if($==="throw")throw F;return he()}for(b.method=$,b.arg=F;;){var x=b.delegate;if(x){var B=me(x,b);if(B){if(B===I)continue;return B}}if(b.method==="next")b.sent=b._sent=b.arg;else if(b.method==="throw"){if(k===E)throw k=W,b.arg;b.dispatchException(b.arg)}else b.method==="return"&&b.abrupt("return",b.arg);k=M;var w=P(O,H,b);if(w.type==="normal"){if(k=b.done?W:te,w.arg===I)continue;return{value:w.arg,done:b.done}}w.type==="throw"&&(k=W,b.method="throw",b.arg=w.arg)}}}(a,m,U),A}function P(a,o,m){try{return{type:"normal",arg:a.call(o,m)}}catch(y){return{type:"throw",arg:y}}}s.wrap=_;var E="suspendedStart",te="suspendedYield",M="executing",W="completed",I={};function ne(){}function J(){}function D(){}var se={};se[c]=function(){return this};var ie=Object.getPrototypeOf,K=ie&&ie(ie(ae([])));K&&K!==p&&h.call(K,c)&&(se=K);var j=D.prototype=ne.prototype=Object.create(se);function pe(a){["next","throw","return"].forEach(function(o){a[o]=function(m){return this._invoke(o,m)}})}function X(a){var o;this._invoke=function(m,y){function u(){return new Promise(function(A,U){(function O(H,b,k,$){var F=P(a[H],a,b);if(F.type!=="throw"){var x=F.arg,B=x.value;return B&&typeof B=="object"&&h.call(B,"__await")?Promise.resolve(B.__await).then(function(w){O("next",w,k,$)},function(w){O("throw",w,k,$)}):Promise.resolve(B).then(function(w){x.value=w,k(x)},function(w){return O("throw",w,k,$)})}$(F.arg)})(m,y,A,U)})}return o=o?o.then(u,u):u()}}function me(a,o){var m=a.iterator[o.method];if(m===n){if(o.delegate=null,o.method==="throw"){if(a.iterator.return&&(o.method="return",o.arg=n,me(a,o),o.method==="throw"))return I;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return I}var y=P(m,a.iterator,o.arg);if(y.type==="throw")return o.method="throw",o.arg=y.arg,o.delegate=null,I;var u=y.arg;return u?u.done?(o[a.resultName]=u.value,o.next=a.nextLoc,o.method!=="return"&&(o.method="next",o.arg=n),o.delegate=null,I):u:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,I)}function Le(a){var o={tryLoc:a[0]};1 in a&&(o.catchLoc=a[1]),2 in a&&(o.finallyLoc=a[2],o.afterLoc=a[3]),this.tryEntries.push(o)}function oe(a){var o=a.completion||{};o.type="normal",delete o.arg,a.completion=o}function re(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(Le,this),this.reset(!0)}function ae(a){if(a){var o=a[c];if(o)return o.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var m=-1,y=function u(){for(;++m<a.length;)if(h.call(a,m))return u.value=a[m],u.done=!1,u;return u.value=n,u.done=!0,u};return y.next=y}}return{next:he}}function he(){return{value:n,done:!0}}return J.prototype=j.constructor=D,D.constructor=J,D[v]=J.displayName="GeneratorFunction",s.isGeneratorFunction=function(a){var o=typeof a=="function"&&a.constructor;return!!o&&(o===J||(o.displayName||o.name)==="GeneratorFunction")},s.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,D):(a.__proto__=D,v in a||(a[v]="GeneratorFunction")),a.prototype=Object.create(j),a},s.awrap=function(a){return{__await:a}},pe(X.prototype),X.prototype[S]=function(){return this},s.AsyncIterator=X,s.async=function(a,o,m,y){var u=new X(_(a,o,m,y));return s.isGeneratorFunction(o)?u:u.next().then(function(A){return A.done?A.value:u.next()})},pe(j),j[v]="Generator",j[c]=function(){return this},j.toString=function(){return"[object Generator]"},s.keys=function(a){var o=[];for(var m in a)o.push(m);return o.reverse(),function y(){for(;o.length;){var u=o.pop();if(u in a)return y.value=u,y.done=!1,y}return y.done=!0,y}},s.values=ae,re.prototype={constructor:re,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(oe),!a)for(var o in this)o.charAt(0)==="t"&&h.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=n)},stop:function(){this.done=!0;var a=this.tryEntries[0].completion;if(a.type==="throw")throw a.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var o=this;function m(H,b){return A.type="throw",A.arg=a,o.next=H,b&&(o.method="next",o.arg=n),!!b}for(var y=this.tryEntries.length-1;y>=0;--y){var u=this.tryEntries[y],A=u.completion;if(u.tryLoc==="root")return m("end");if(u.tryLoc<=this.prev){var U=h.call(u,"catchLoc"),O=h.call(u,"finallyLoc");if(U&&O){if(this.prev<u.catchLoc)return m(u.catchLoc,!0);if(this.prev<u.finallyLoc)return m(u.finallyLoc)}else if(U){if(this.prev<u.catchLoc)return m(u.catchLoc,!0)}else{if(!O)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return m(u.finallyLoc)}}}},abrupt:function(a,o){for(var m=this.tryEntries.length-1;m>=0;--m){var y=this.tryEntries[m];if(y.tryLoc<=this.prev&&h.call(y,"finallyLoc")&&this.prev<y.finallyLoc){var u=y;break}}u&&(a==="break"||a==="continue")&&u.tryLoc<=o&&o<=u.finallyLoc&&(u=null);var A=u?u.completion:{};return A.type=a,A.arg=o,u?(this.method="next",this.next=u.finallyLoc,I):this.complete(A)},complete:function(a,o){if(a.type==="throw")throw a.arg;return a.type==="break"||a.type==="continue"?this.next=a.arg:a.type==="return"?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):a.type==="normal"&&o&&(this.next=o),I},finish:function(a){for(var o=this.tryEntries.length-1;o>=0;--o){var m=this.tryEntries[o];if(m.finallyLoc===a)return this.complete(m.completion,m.afterLoc),oe(m),I}},catch:function(a){for(var o=this.tryEntries.length-1;o>=0;--o){var m=this.tryEntries[o];if(m.tryLoc===a){var y=m.completion;if(y.type==="throw"){var u=y.arg;oe(m)}return u}}throw new Error("illegal catch attempt")},delegateYield:function(a,o,m){return this.delegate={iterator:ae(a),resultName:o,nextLoc:m},this.method==="next"&&(this.arg=n),I}},s}(t.exports);try{regeneratorRuntime=e}catch{Function("r","regeneratorRuntime = r")(e)}}),T=Hn;function Se(t){return(Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var we,ke="https://js.stripe.com/v3",Vn=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ye="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Gn=function(){for(var t=document.querySelectorAll('script[src^="'.concat(ke,'"]')),e=0;e<t.length;e++){var s=t[e];if(Vn.test(s.src))return s}return null},Yn=function(t){var e=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(ke).concat(e);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(s),s},zn=function(t,e){t&&t._registerWrapper&&t._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:e})},de=null,Qn=function(t){return de!==null?de:de=new Promise(function(e,s){if(typeof window<"u")if(window.Stripe&&t&&console.warn(ye),window.Stripe)e(window.Stripe);else try{var n=Gn();n&&t?console.warn(ye):n||(n=Yn(t)),n.addEventListener("load",function(){window.Stripe?e(window.Stripe):s(new Error("Stripe.js not available"))}),n.addEventListener("error",function(){s(new Error("Failed to load Stripe.js"))})}catch(p){return void s(p)}else e(null)})},Wn=function(t,e,s){if(t===null)return null;var n=t.apply(void 0,e);return zn(n,s),n},Jn=function(t){var e=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(t),`
`);if(t===null||Se(t)!=="object")throw new Error(e);if(Object.keys(t).length===1&&typeof t.advancedFraudSignals=="boolean")return t;throw new Error(e)},Ce=!1,N=function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];Ce=!0;var n=Date.now();return Qn(we).then(function(p){return Wn(p,e,n)})};N.setLoadParameters=function(t){if(Ce)throw new Error("You cannot change load parameters after calling loadStripe");we=Jn(t)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var Kn={beforeCreate:function(){var t=this.$options.props;t&&(this._$coertions=Object.keys(t).filter(function(e){return t[e].coerce}).map(function(e){return[e,t[e].coerce]}))},computed:{$coerced:function(){var t=this;return this._$coertions.reduce(function(e,s){var n=s[0],p=s[1];return e[n]=p.call(t,t.$props[n]),e},{})}}},Xn={pk:{type:String,required:!0},mode:{type:String,validator:function(t){return["payment","subscription"].includes(t)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(t){return jn.includes(t)}},billingAddressCollection:{type:String,default:"auto",validator:function(t){return Un.includes(t)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:le,coerce:function(t){return Dn.includes(t)?t:(console.warn("VueStripe Warning: '".concat(t,"' is not supported by Stripe yet. Falling back to default '").concat(le,"'.")),le)}},shippingAddressCollection:{type:Object,validator:function(t){return Object.prototype.hasOwnProperty.call(t,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},Zn={props:Xn,mixins:[Kn],render:function(t){return t},methods:{redirectToCheckout:function(){var t,e,s;return T.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&N.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n.next=6,T.awrap(N(this.pk,t));case 6:if((e=n.sent).registerAppInfo(z),!this.sessionId){n.next=11;break}return e.redirectToCheckout({sessionId:this.sessionId}),n.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){n.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),n.abrupt("return");case 14:return s={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},n.abrupt("return",e.redirectToCheckout(s));case 18:n.prev=18,n.t0=n.catch(0),console.error(n.t0),this.$emit("error",n.t0);case 22:case"end":return n.stop()}},null,this,[[0,18]])}}};function es(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var ts=es;function ge(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),s.push.apply(s,n)}return s}function ns(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(s),!0).forEach(function(n){ts(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ge(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}var ss="card",is={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return Fn}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(t){return["solid","default"].includes(t)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var t,e,s=this;return T.async(function(n){for(;;)switch(n.prev=n.next){case 0:return this.disableAdvancedFraudDetection&&N.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},e={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},n.next=5,T.awrap(N(this.pk,t));case 5:this.stripe=n.sent,this.stripe.registerAppInfo(z),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ss,e),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(p){var h=document.getElementById("stripe-element-errors");p.error?h.textContent=p.error.message:h.textContent="",s.onChange(p)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(p){var h,f,c,S;return T.async(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,s.$emit("loading",!0),p.preventDefault(),h=ns({},s.element),s.amount&&(h.amount=s.amount),v.next=7,T.awrap(s.stripe.createToken(h,s.tokenData));case 7:if(f=v.sent,c=f.token,!(S=f.error)){v.next=15;break}return document.getElementById("stripe-element-errors").textContent=S.message,s.$emit("error",S),v.abrupt("return");case 15:s.$emit("token",c),v.next=22;break;case 18:v.prev=18,v.t0=v.catch(0),console.error(v.t0),s.$emit("error",v.t0);case 22:return v.prev=22,s.$emit("loading",!1),v.finish(22);case 25:case"end":return v.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return n.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(t){this.element.update(t)},onChange:function(t){this.$emit("element-change",t)},onReady:function(t){this.$emit("element-ready",t)},onFocus:function(t){this.$emit("element-focus",t)},onBlur:function(t){this.$emit("element-blur",t)},onEscape:function(t){this.$emit("element-escape",t)},onClick:function(t){this.$emit("element-click",t)}}};function Pe(t,e,s,n,p,h,f,c,S,v){typeof f!="boolean"&&(S=c,c=f,f=!1);const _=typeof s=="function"?s.options:s;let P;if(t&&t.render&&(_.render=t.render,_.staticRenderFns=t.staticRenderFns,_._compiled=!0,p&&(_.functional=!0)),n&&(_._scopeId=n),h?(P=function(E){(E=E||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(E=__VUE_SSR_CONTEXT__),e&&e.call(this,S(E)),E&&E._registeredComponents&&E._registeredComponents.add(h)},_._ssrRegister=P):e&&(P=f?function(E){e.call(this,v(E,this.$root.$options.shadowRoot))}:function(E){e.call(this,c(E))}),P)if(_.functional){const E=_.render;_.render=function(te,M){return P.call(M),E(te,M)}}else{const E=_.beforeCreate;_.beforeCreate=E?[].concat(E,P):[P]}return s}const os=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Ie(t){return(e,s)=>rs(e,s)}let ce;const ve={};function rs(t,e){const s=os?e.media||"default":t,n=ve[s]||(ve[s]={ids:new Set,styles:[]});if(!n.ids.has(t)){n.ids.add(t);let p=e.source;if(e.map&&(p+=`
/*# sourceURL=`+e.map.sources[0]+" */",p+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",e.media&&n.element.setAttribute("media",e.media),ce===void 0&&(ce=document.head||document.getElementsByTagName("head")[0]),ce.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(p),n.element.styleSheet.cssText=n.styles.filter(Boolean).join(`
`);else{const h=n.ids.size-1,f=document.createTextNode(p),c=n.element.childNodes;c[h]&&n.element.removeChild(c[h]),c.length?n.element.insertBefore(f,c[h]):n.element.appendChild(f)}}}const as=is;var Te=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",{attrs:{id:"stripe-element-form"}},[e("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[e("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),e("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},ls=[];Te._withStripped=!0;const ds=function(t){t&&t("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},cs="data-v-4dd8360e",us=Pe({render:Te,staticRenderFns:ls},ds,as,cs,!1,void 0,!1,Ie,void 0,void 0);var ps="payment",ms={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var t,e=this;return T.async(function(s){for(;;)switch(s.prev=s.next){case 0:return this.disableAdvancedFraudDetection&&N.setLoadParameters({advancedFraudSignals:!1}),t={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},s.next=4,T.awrap(N(this.pk,t));case 4:this.stripe=s.sent,this.stripe.registerAppInfo(z),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(ps,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(n){var p=document.getElementById("stripe-payment-element-errors");n.error?p.textContent=n.error.message:p.textContent="",e.onChange(n)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(n){var p,h,f;return T.async(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,e.$emit("loading",!0),n.preventDefault(),c.next=5,T.awrap(e.stripe.confirmPayment({elements:e.elements,confirmParams:e.confirmParams,redirect:e.redirect}));case 5:if(p=c.sent,h=p.error,f=p.paymentIntent,!h){c.next=15;break}return document.getElementById("stripe-payment-element-errors").textContent=h.message,e.$emit("error",h),c.abrupt("return");case 15:f&&e.$emit("confirmed",f);case 16:c.next=22;break;case 18:c.prev=18,c.t0=c.catch(0),console.error(c.t0),e.$emit("error",c.t0);case 22:return c.prev=22,e.$emit("loading",!1),c.finish(22);case 25:case"end":return c.stop()}},null,null,[[0,18,22,25]])});case 16:case"end":return s.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(t){this.element.update(t)},onChange:function(t){this.$emit("element-change",t)},onReady:function(t){this.$emit("element-ready",t)},onFocus:function(t){this.$emit("element-focus",t)},onBlur:function(t){this.$emit("element-blur",t)},onEscape:function(t){this.$emit("element-escape",t)},onClick:function(t){this.$emit("element-click",t)}}};const hs=ms;var Be=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form",{attrs:{id:"stripe-payment-element-form"}},[e("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[e("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),e("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},fs=[];Be._withStripped=!0;const ys=function(t){t&&t("data-v-171d7aec_0",{source:`












































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-171d7aec] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6QA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error, paymentIntent } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });

        // if the response is an error
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        } else if (paymentIntent) {
          // if the user has passed prop redirect="if_required"
          // and the payment confirmation was successful
          // and the payment method is not forced to redirect
          // then stripe.confirmPayment resolves with a paymentIntent
          // so we sould pass it back up to the caller for consumption
          // https://stripe.com/docs/js/payment_intents/confirm_payment?type=pii#confirm_payment_intent-options-redirect
          this.$emit('confirmed', paymentIntent);
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},gs=Pe({render:Be,staticRenderFns:fs},ys,hs,"data-v-171d7aec",!1,void 0,!1,Ie,void 0,void 0);var vs={install:function(t,e){var s,n,p,h,f,c,S;return T.async(function(v){for(;;)switch(v.prev=v.next){case 0:s=e.pk,n=e.stripeAccount,p=e.apiVersion,h=e.locale,f=e.elementsOptions,(c=window.Stripe(s,{stripeAccount:n,apiVersion:p,locale:h})).registerAppInfo(z),S=c.elements(f),t.prototype.$stripe=c,t.prototype.$stripeElements=S;case 6:case"end":return v.stop()}})}};q.StripeCheckout=Zn,q.StripeElementCard=us,Ae=q.StripeElementPayment=gs,q.StripeElementsPlugin=vs,q.StripePlugin=qn;const bs={class:"payment-tab"},Es={key:0,class:"input-container"},_s={key:0},As={key:1},Ss={key:2,class:"m-0"},ws={key:4,id:"payment-form"},ks=$e('<div id="payment-element" data-v-66fa6cf0></div><button id="submit" data-v-66fa6cf0><div class="spinner hidden" id="spinner" data-v-66fa6cf0></div><span id="button-text" data-v-66fa6cf0>Pay now</span></button><div id="payment-message" class="hidden" data-v-66fa6cf0></div>',3),Cs=[ks],Ps={key:5,class:"confirmation-container"},Is={name:"PaymentTab",components:{StripeElementPayment:Ae},data(){return{paymentCode:"",isLoading:!1,isPayment:!1,isPaymentConfirmation:!1,currentPayment:null,confirmationText:"",codeIsNotValid:!1,paymentHasUpdated:!1}},mounted(){this.checkStatus(),this.autofillAndPay()},methods:{dataEdited(){document.getElementsByClassName("pay-btn")[0].classList.remove("disabled")},getPaymentByCode(){this.isLoading=!0,document.querySelector(".pay-btn").classList.add("disabled"),document.getElementById("invoiceInput").readOnly=!0,Y.getPaymentByCode(this.paymentCode).then(t=>{this.isLoading=!1,t.status==200?(this.currentPayment=t.data,this.currentPayment.status=="Awaiting"?this.initStripe():(this.codeIsNotValid=!0,document.getElementById("invoiceInput").readOnly=!1,document.querySelector(".pay-btn").classList.remove("disabled"))):(this.codeIsNotValid=!0,document.getElementById("invoiceInput").readOnly=!1,document.querySelector(".pay-btn").classList.remove("disabled"))})},autofillAndPay(){if(this.$route.query.paymentCode){this.paymentCode=this.$route.query.paymentCode;const t=document.querySelector(".pay-btn");t&&(t.classList.remove("disabled"),t.click())}},async initStripe(){this.isLoading=!0,this.isPayment=!0;const t=Stripe("pk_test_51NcRoeKHyUY6eEJllPpa7tw98bgjz4cdr01Lt95g8LUk0GUeFPRdcgnqpvKM2z3apZW0XbUaRC4zeIGZyYVU0GGO00LP4mJ4RZ");let e;s(),setTimeout(function(){document.querySelector("#payment-form").addEventListener("submit",n)},200),localStorage.setItem("paymentData",JSON.stringify(this.currentPayment));async function s(){let f={amount:2e3,email:"sahibzed23@gmail.com"},{data:c}=await Y.handlePayment(f);console.log(c);const S={theme:"stripe",variables:{colorText:"white",colorBackground:"black",fontSizeBase:"0.8rem"}};c={clientSecret:c.clientSecret,appearance:S},e=t.elements(c),e.create("payment").mount("#payment-element")}this.isLoading=!1;async function n(f){f.preventDefault(),h(!0);const{error:c}=await t.confirmPayment({elements:e,confirmParams:{return_url:"http://127.0.0.1:5173/my-account"}});c.type==="card_error"||c.type==="validation_error"?p(c.message):p("An unexpected error occurred."),h(!1)}function p(f){const c=document.querySelector("#payment-message");c.classList.remove("hidden"),c.textContent=f,setTimeout(function(){c.classList.add("hidden"),c.textContent=""},4e3)}function h(f){f?(document.querySelector("#submit").disabled=!0,document.querySelector("#spinner").classList.remove("hidden"),document.querySelector("#button-text").classList.add("hidden")):(document.querySelector("#submit").disabled=!1,document.querySelector("#spinner").classList.add("hidden"),document.querySelector("#button-text").classList.remove("hidden"))}},async checkStatus(){const t=Stripe("pk_test_51NcRoeKHyUY6eEJllPpa7tw98bgjz4cdr01Lt95g8LUk0GUeFPRdcgnqpvKM2z3apZW0XbUaRC4zeIGZyYVU0GGO00LP4mJ4RZ"),e=new URLSearchParams(window.location.search).get("payment_intent_client_secret");if(!e)return;const{paymentIntent:s}=await t.retrievePaymentIntent(e);switch(console.log(s.status),this.isPaymentConfirmation=!0,s.status){case"succeeded":this.updatePayment(),this.confirmationText=this.isEng()?"Payment was successful. You will receive an email shortly.":"Ödəniş uğurlu oldu. Tezliklə e-poçt alacaqsınız.";break;case"processing":this.confirmationText="Your payment is processing.";break;case"requires_payment_method":this.confirmationText="Your payment was not successful, please try again.";break;default:this.confirmationText="Something went wrong.";break}},updatePayment(){if(localStorage.getItem("paymentUpdated")==null&&localStorage.setItem("paymentUpdated",!1),localStorage.getItem("paymentUpdated")==!1){let t=JSON.parse(localStorage.getItem("paymentData"));t.status="Paid",Y.updatePayment(t.payment_id,t),localStorage.setItem("paymentUpdated",!0)}},isEng(){return localStorage.getItem("lang")=="en"}}},Ts=Object.assign(Is,{setup(t){return(e,s)=>(i(),l("div",bs,[e.isPaymentConfirmation?r("",!0):(i(),l("div",Es,[e.isEng()?(i(),l("label",_s,"Invoice code")):r("",!0),e.isEng()?r("",!0):(i(),l("label",As,"Ödəniş kodu")),V(d("input",{type:"text",placeholder:"123456789",onInput:s[0]||(s[0]=(...n)=>e.dataEdited&&e.dataEdited(...n)),"onUpdate:modelValue":s[1]||(s[1]=n=>e.paymentCode=n),id:"invoiceInput"},null,544),[[G,e.paymentCode]]),e.codeIsNotValid?(i(),l("p",Ss,"Not found")):r("",!0)])),!e.isPayment&&!e.isPaymentConfirmation&&e.isEng()?(i(),R(Z,{key:1,text:"Continue",class:"pay-btn disabled",onClick:e.getPaymentByCode},null,8,["onClick"])):r("",!0),!e.isPayment&&!e.isPaymentConfirmation&&!e.isEng()?(i(),R(Z,{key:2,text:"Növbəti",class:"pay-btn disabled",onClick:e.getPaymentByCode},null,8,["onClick"])):r("",!0),e.isLoading?(i(),R(_e,{key:3,class:"loader"})):r("",!0),e.isPayment?(i(),l("form",ws,Cs)):r("",!0),e.isPaymentConfirmation?(i(),l("div",Ps,[d("p",null,g(e.confirmationText),1)])):r("",!0)]))}}),Bs=ue(Ts,[["__scopeId","data-v-66fa6cf0"]]);const Q=t=>(be("data-v-dd8336d1"),t=t(),Ee(),t),Ls={class:"wrapper"},Os={class:"content"},Rs={class:"side-nav"},$s=Q(()=>d("img",{src:De,alt:"User icon"},null,-1)),Ns={key:0},Ds={key:1},js=Q(()=>d("img",{src:xe,alt:"Order history icon"},null,-1)),Us={key:0},Fs={key:1},xs=Q(()=>d("img",{src:qe,alt:"Payment icon"},null,-1)),qs={key:0},Ms={key:1},Hs={key:0},Vs={key:1},Gs={key:0,class:"personal-info-tab"},Ys={class:"info-preview"},zs={class:"profile-img"},Qs={class:"info"},Ws={class:"name"},Js={class:"email"},Ks=Q(()=>d("h3",null,"Personal",-1)),Xs=Q(()=>d("hr",null,null,-1)),Zs={class:"data-input"},ei={key:0},ti={key:1},ni={class:"data-input"},si={key:0},ii={key:1},oi={class:"data-input"},ri={key:0},ai={key:1},li={class:"data-input"},di={key:0},ci={key:1},ui={id:"status-box"},pi={data(){return{userId:null,user:{fullName:"loading",email:"loading"},currentTab:0,sectionHeading:this.isEng()?"My Account":"Şəxsi Kabinetim",fullName:"loading",email:"loading",phone:"loading",occupation:"loading",statusMsg:"",bookings:null,paymentCode:""}},mounted(){localStorage.getItem("id")==null?this.$router.push("/authentication"):this.userId=localStorage.getItem("id"),this.getUser();const t=new URLSearchParams(window.location.search).get("payment_intent_client_secret");(this.$route.query.paymentCode||t)&&this.switchTab(2)},methods:{dataEdited(){document.getElementsByClassName("save-btn")[0].classList.remove("disabled")},switchTab(t){switch(document.getElementById("tab0").classList.remove("selected"),document.getElementById("tab1").classList.remove("selected"),document.getElementById("tab2").classList.remove("selected"),t){case 0:this.currentTab=0,this.sectionHeading=this.isEng()?"My Account":"Şəxsi Kabinetim",document.getElementById("tab0").classList.add("selected");break;case 1:this.bookings==null,this.currentTab=1,this.sectionHeading=this.isEng()?"Order History":"Rezervasiyalarım",document.getElementById("tab1").classList.add("selected");break;case 2:this.currentTab=2,this.sectionHeading=this.isEng()?"Payment":"Ödəniş",document.getElementById("tab2").classList.add("selected");break}},getUser(){ee.getById(this.userId).then(t=>{t.status==200&&(console.log(t.data),this.user=t.data,this.fullName=this.user.fullName,this.email=this.user.email,this.phone=this.user.phone,this.occupation=this.user.occupation)})},update(){if(document.getElementsByClassName("save-btn")[0].classList.contains("disabled"))return;let t=document.getElementById("status-box");if(!this.fullName.length>0||!this.email.length>0||!this.phone.length>0||!this.occupation.length>0){t.style.opacity=1,t.classList.remove("success"),this.statusMsg="Fields cannot be empty";return}let e={fullName:this.fullName,email:this.email,phone:this.phone,occupation:this.occupation};ee.update(this.userId,e).then(s=>{t.style.opacity=1,s.status==200?(t.classList.add("success"),this.statusMsg="Details updated successfully"):(t.classList.remove("success"),this.statusMsg=s.data)})},getBookings(){Y.getBookingByUserId(this.userId).then(t=>{t.status==200?this.bookings=t.data:this.bookings=""})},isEng(){return localStorage.getItem("lang")=="en"}}},mi=Object.assign(pi,{__name:"MyAccountView",setup(t){return(e,s)=>(i(),l("section",Ls,[Ne(je,{text:e.sectionHeading,class:"section-heading"},null,8,["text"]),d("section",Os,[d("section",Rs,[d("div",{class:"nav-item selected",onClick:s[0]||(s[0]=n=>e.switchTab(0)),id:"tab0"},[$s,e.isEng()?(i(),l("p",Ns,"My Account")):r("",!0),e.isEng()?r("",!0):(i(),l("p",Ds,"Şəxsi Kabinetim"))]),d("div",{class:"nav-item",onClick:s[1]||(s[1]=n=>e.switchTab(1)),id:"tab1"},[js,e.isEng()?(i(),l("p",Us,"Order History")):r("",!0),e.isEng()?r("",!0):(i(),l("p",Fs,"Rezervasiyalarım"))]),d("div",{class:"nav-item",onClick:s[2]||(s[2]=n=>e.switchTab(2)),id:"tab2"},[xs,e.isEng()?(i(),l("p",qs,"Payment")):r("",!0),e.isEng()?r("",!0):(i(),l("p",Ms,"Ödəniş"))]),d("div",{class:"logout-btn",onClick:s[3]||(s[3]=(...n)=>fe(ee).logout&&fe(ee).logout(...n))},[e.isEng()?(i(),l("p",Hs,"Logout")):r("",!0),e.isEng()?r("",!0):(i(),l("p",Vs,"Çıxış"))])]),e.currentTab==0?(i(),l("section",Gs,[d("div",Ys,[d("div",zs,[d("p",null,g(e.user.fullName[0]),1)]),d("div",Qs,[d("p",Ws,g(e.user.fullName),1),d("p",Js,g(e.user.email),1)])]),Ks,Xs,d("div",Zs,[e.isEng()?(i(),l("label",ei,"Full name")):r("",!0),e.isEng()?r("",!0):(i(),l("label",ti,"Ad ve Soyad")),V(d("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=n=>e.fullName=n),onInput:s[5]||(s[5]=(...n)=>e.dataEdited&&e.dataEdited(...n))},null,544),[[G,e.fullName]])]),d("div",ni,[e.isEng()?(i(),l("label",si,"Email")):r("",!0),e.isEng()?r("",!0):(i(),l("label",ii,"Email ünvanı")),V(d("input",{type:"email","onUpdate:modelValue":s[6]||(s[6]=n=>e.email=n),onInput:s[7]||(s[7]=(...n)=>e.dataEdited&&e.dataEdited(...n))},null,544),[[G,e.email]])]),d("div",oi,[e.isEng()?(i(),l("label",ri,"Phone")):r("",!0),e.isEng()?r("",!0):(i(),l("label",ai,"Telefon nömrəniz")),V(d("input",{type:"text","onUpdate:modelValue":s[8]||(s[8]=n=>e.phone=n),onInput:s[9]||(s[9]=(...n)=>e.dataEdited&&e.dataEdited(...n))},null,544),[[G,e.phone]])]),d("div",li,[e.isEng()?(i(),l("label",di,"Occupation")):r("",!0),e.isEng()?r("",!0):(i(),l("label",ci,"Peşə")),V(d("input",{type:"text","onUpdate:modelValue":s[10]||(s[10]=n=>e.occupation=n),onInput:s[11]||(s[11]=(...n)=>e.dataEdited&&e.dataEdited(...n))},null,544),[[G,e.occupation]])]),d("div",ui,[d("p",null,g(e.statusMsg),1)]),e.isEng()?(i(),R(Z,{key:0,text:"Save",class:"save-btn disabled",onClick:e.update},null,8,["onClick"])):r("",!0),e.isEng()?r("",!0):(i(),R(Z,{key:1,text:"Yadda saxla",class:"save-btn disabled",onClick:e.update},null,8,["onClick"]))])):r("",!0),e.currentTab==1?(i(),R(vn,{key:1})):r("",!0),e.currentTab==2?(i(),R(Bs,{key:2})):r("",!0)])]))}}),Ai=ue(mi,[["__scopeId","data-v-dd8336d1"]]);export{Ai as default};
