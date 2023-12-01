const express = require("express")
const server = express()
const cors = require("cors")



server.use(cors({credential:true, origin:"*" }))
server.use(express.json())

const useRouter = require("./routes/userRouter")

server.use("/user", useRouter)


server.listen(3333)
