import{P as l}from"./PrimaryButton-af34e4d2.js";import{_ as m,o as a,c as n,a as s,b as i,t as d,d as u,p,e as _}from"./index-31c511ae.js";const v=e=>(p("data-v-b6343f12"),e=e(),_(),e),b={class:"wrapper"},h=["src"],y={class:"text-wrapper"},C=v(()=>i("span",{class:"gold-line"},null,-1)),k=["src"],f={props:{inverted:Number,car:Object},methods:{navigateToCarPage(){this.$router.push({path:`/details/${this.car.name}`,query:{id:this.car.id}})},isEng(){return localStorage.getItem("lang")=="en"}}},I=Object.assign(f,{__name:"CarPreview",setup(e){return(t,r)=>{var c,o;return a(),n("div",b,[!e.inverted==1?(a(),n("img",{key:0,src:"/../api/public/car_images/"+e.car.car_image+"?s",alt:"Airport luxury meet & greet service car"},null,8,h)):s("",!0),i("div",y,[i("h1",null,d(e.car.name),1),C,i("p",null,d(t.isEng()?(c=e.car)==null?void 0:c.description:(o=e.car)==null?void 0:o.description_az),1),t.isEng()?(a(),u(l,{key:0,text:"VIEW THIS CAR",class:"btn",onClick:r[0]||(r[0]=g=>t.navigateToCarPage())})):s("",!0),t.isEng()?s("",!0):(a(),u(l,{key:1,text:"DAHA ƏTRAFLI",class:"btn",onClick:r[1]||(r[1]=g=>t.navigateToCarPage())}))]),e.inverted==1?(a(),n("img",{key:1,src:"/../api/public/car_images/"+e.car.car_image+"?s",alt:"Airport luxury meet & greet"},null,8,k)):s("",!0)])}}}),A=m(I,[["__scopeId","data-v-b6343f12"]]);export{A as C};