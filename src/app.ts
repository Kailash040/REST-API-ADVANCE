import express from "express"

const app =  express();
// http mthods get post put patch
app.get("/",(req,res)=>{
res.json({message:"welcome "})
})
//

export default app