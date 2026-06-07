import http from "node:http"


function cumResponse(req,res) {
    console.log(req.method)
    console.log('I just coomed in mein pants...')
}
const meinServer = http.createServer(cumResponse)

meinServer.listen(3000);