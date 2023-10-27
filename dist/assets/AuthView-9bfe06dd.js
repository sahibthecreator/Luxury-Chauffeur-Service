import{U as c}from"./UserService-f660b884.js";import{_ as h,o as l,c as n,b as u,a as o,w as r,v as p,t as y,p as _,e as f,j as E}from"./index-31c511ae.js";import{_ as m}from"./right-arrow-baada731.js";const w="/assets/auth-main-e9955373.webp";const k={name:"Authentication",data(){return{isLogin:!0,statusMsg:"",fullName:"",email:"",phone:"",occupation:"",password:""}},methods:{switchAuthOptions(){this.statusMsg="",document.getElementById("status-box").style.opacity=0,this.isLogin?(this.isLogin=!1,document.getElementById("login-option-span").classList.remove("selected"),document.getElementById("register-option-span").classList.add("selected")):(this.isLogin=!0,document.getElementById("register-option-span").classList.remove("selected"),document.getElementById("login-option-span").classList.add("selected"))},register(){let a=document.getElementById("status-box");if(!this.fullName.length>0||!this.email.length>0||!this.phone.length>0||!this.occupation.length>0||!this.password.length>0){a.style.opacity=1,a.classList.remove("success"),this.statusMsg=this.isEng()?"Please fill all the fields":"Bütün detalari daxil edin";return}let e={fullName:this.fullName,email:this.email,phone:this.phone,occupation:this.occupation,password:this.password};c.register(e).then(d=>{a.style.opacity=1,d.status==200?(a.classList.add("success"),this.statusMsg="Registered successful",this.switchAuthOptions()):(a.classList.remove("success"),this.statusMsg=d.data)})},login(){let a=document.getElementById("status-box");if(!this.email.length>0||!this.password.length>0){a.style.opacity=1,a.classList.remove("success"),this.statusMsg=this.isEng()?"Please fill all the fields":"Bütün detalari daxil edin";return}let e={email:this.email,password:this.password};c.login(e).then(d=>{d.status!=200?(a.style.opacity=1,a.classList.remove("success"),this.statusMsg=this.isEng()?"Invalid email or password":"Email ve ya Şifrəniz yanlışdir"):(localStorage.setItem("id",d.data),this.$router.push("/my-account"))})},isEng(){return localStorage.getItem("lang")=="en"}}},g=a=>(_("data-v-c36f8a21"),a=a(),f(),a),v={class:"wrapper"},L=g(()=>u("img",{src:w,alt:"Bentley car image",class:"main-image"},null,-1)),x={class:"input-panel"},B=g(()=>u("img",{src:E,alt:"Bentley car image",class:"logo"},null,-1)),I={class:"auth-options"},V={key:0},U={key:1},N=g(()=>u("span",{id:"login-option-span",class:"selected"},null,-1)),M={key:0},b={key:1},A=g(()=>u("span",{id:"register-option-span"},null,-1)),S={key:0},z={key:1},C=g(()=>u("img",{src:m,alt:"arrow right"},null,-1)),O={key:0},P={key:1},D=g(()=>u("img",{src:m,alt:"arrow right"},null,-1)),R={id:"status-box"};function Q(a,e,d,T,s,i){return l(),n("div",v,[L,u("section",x,[B,u("div",I,[u("div",{class:"option",onClick:e[0]||(e[0]=t=>i.switchAuthOptions())},[i.isEng()?(l(),n("p",V,"Log in")):o("",!0),i.isEng()?o("",!0):(l(),n("p",U,"Giriş")),N]),u("div",{class:"option",onClick:e[1]||(e[1]=t=>i.switchAuthOptions())},[i.isEng()?(l(),n("p",M,"Register")):o("",!0),i.isEng()?o("",!0):(l(),n("p",b,"Qeydiyyat")),A])]),!s.isLogin&&i.isEng()?r((l(),n("input",{key:0,type:"text",placeholder:"Full Name","onUpdate:modelValue":e[2]||(e[2]=t=>s.fullName=t)},null,512)),[[p,s.fullName]]):o("",!0),!s.isLogin&&!i.isEng()?r((l(),n("input",{key:1,type:"text",placeholder:"Adınız ve Soyadınız","onUpdate:modelValue":e[3]||(e[3]=t=>s.fullName=t)},null,512)),[[p,s.fullName]]):o("",!0),i.isEng()?r((l(),n("input",{key:2,type:"email",placeholder:"Email","onUpdate:modelValue":e[4]||(e[4]=t=>s.email=t)},null,512)),[[p,s.email]]):o("",!0),i.isEng()?o("",!0):r((l(),n("input",{key:3,type:"email",placeholder:"Email ünvanı","onUpdate:modelValue":e[5]||(e[5]=t=>s.email=t)},null,512)),[[p,s.email]]),!s.isLogin&&i.isEng()?r((l(),n("input",{key:4,type:"text",placeholder:"Phone","onUpdate:modelValue":e[6]||(e[6]=t=>s.phone=t)},null,512)),[[p,s.phone]]):o("",!0),!s.isLogin&&!i.isEng()?r((l(),n("input",{key:5,type:"text",placeholder:"Telefon nömrəniz","onUpdate:modelValue":e[7]||(e[7]=t=>s.phone=t)},null,512)),[[p,s.phone]]):o("",!0),!s.isLogin&&i.isEng()?r((l(),n("input",{key:6,type:"text",placeholder:"Occupation","onUpdate:modelValue":e[8]||(e[8]=t=>s.occupation=t)},null,512)),[[p,s.occupation]]):o("",!0),!s.isLogin&&!i.isEng()?r((l(),n("input",{key:7,type:"text",placeholder:"Peşə","onUpdate:modelValue":e[9]||(e[9]=t=>s.occupation=t)},null,512)),[[p,s.occupation]]):o("",!0),i.isEng()?r((l(),n("input",{key:8,type:"password",placeholder:"Password","onUpdate:modelValue":e[10]||(e[10]=t=>s.password=t)},null,512)),[[p,s.password]]):o("",!0),i.isEng()?o("",!0):r((l(),n("input",{key:9,type:"password",placeholder:"Şifrəniz","onUpdate:modelValue":e[11]||(e[11]=t=>s.password=t)},null,512)),[[p,s.password]]),s.isLogin?o("",!0):(l(),n("div",{key:10,class:"btn",onClick:e[12]||(e[12]=(...t)=>i.register&&i.register(...t))},[i.isEng()?(l(),n("p",S,"Register")):o("",!0),i.isEng()?o("",!0):(l(),n("p",z,"Qeydiyyatdan keçin")),C])),s.isLogin?(l(),n("div",{key:11,class:"btn",onClick:e[13]||(e[13]=(...t)=>i.login&&i.login(...t))},[i.isEng()?(l(),n("p",O,"Log in")):o("",!0),i.isEng()?o("",!0):(l(),n("p",P,"Daxil ol")),D])):o("",!0),u("div",R,[u("p",null,y(s.statusMsg),1)])])])}const q=h(k,[["render",Q],["__scopeId","data-v-c36f8a21"]]);export{q as default};
