

const {PrismaClient}= require("@prisma/client")
const prisma = new PrismaClient()












const userController = async (req, res)=>{
    const {nome, email,senha } = req.body

    try{
        const create = await prisma.User.create({
            data:{
                nome:nome,
                email:email,
                senha:senha,
            }
        })

    
        return res.status(200).json({
            menssage: "funcionou"
        })
    }catch(Erro){
        return res.status(500).json({
            message:Erro
        })
    }

}

module.exports = userController