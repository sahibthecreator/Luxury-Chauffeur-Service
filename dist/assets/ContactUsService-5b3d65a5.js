import{s as t}from"./index-31c511ae.js";class n{static async saveMessage(s){try{return await t.post("/contact-us",{data:s})}catch(e){return e.response}}static async getAllMessages(){try{return await t.get("/contact-us")}catch(s){return s.response}}}export{n as C};