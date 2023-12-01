

const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient()












const userController = (req, res)=>{
    const {name, email,senha } = req.body

    try{
        const create = prisma.user.create({
            data:{
                nome:name,
                email:email,
                senha:senha,
            }
        })

    
        return res.status(200).json({
            menssage: "funcionou"
        })
    }catch{
        return res.status(500).json({
            message:"Não funcionou"
        })
    }

}

module.exports = userController