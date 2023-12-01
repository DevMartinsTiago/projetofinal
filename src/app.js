const express = require("express")
const server = express()




server.use(express.json())

const useRouter = require("./routes/userRouter")

server.use("/user", useRouter)


server.listen(3333)
