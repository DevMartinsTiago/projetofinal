

const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient()












const userGetController = (req, res)=>{
    const user= prisma.user.findMany()

    try{

    
        return res.status(200).json({
            menssage: user
        })
    }catch{
        return res.status(500).json({
            message:"Não funcionou"
        })
    }

}

module.exports = userGetController


