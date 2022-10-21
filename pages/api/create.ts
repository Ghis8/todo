import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const handler= async(req:NextApiRequest, res:NextApiResponse)=>{
const {title,desc}=req.body

try{
await prisma.post.create({
    data:{
        title,
        description:desc
    
    }
})
res.status(200).json({message:'Todo created'})
}catch(err){
    console.log(err)
}

}

export default handler