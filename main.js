import http from "node:http"
import fs from "node:fs/promises";


async function cumResponse(req,res) {
    console.log(req.url)
    // read the file, set the header, write the file contents to the body and send a response
    if (req.url == "/html"){
        const shisaResponseString = await fs.readFile("./media/shisa.html","utf8")
        res.setHeader("Content-Type","text/html");
        res.end(shisaResponseString)
    }

    else{
    // read the file, set the header, write the file contents to the body and send a response
    const cumResponseString = await fs.readFile("./media/cum.txt","utf8")
    res.setHeader("Content-Type","text/html")
    res.end(cumResponseString)

    }
}
const meinServer = http.createServer(cumResponse)

meinServer.listen(3000);