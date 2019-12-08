let http = require('http');
const url = require('url');
let fs = require('fs');
const args = process.argv[2];


const local_database = 'students.json';

const server = http.createServer(function(req, res) {
    console.log('bon')
    const { pathname, query } = url.parse(req.url, true)

    console.log(query)
    const { name } = query

    if (req.method === 'GET') {
        if (pathname == '/') {
            console.log(req.name)
            res.write(`<h1> merci ${name || 'world' }</h1>`)
        }
    }

    if (req.method === 'POST') {
        if (pathname == '/students') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString()
            })
        }
    }

    if (req.method === 'DELETE') {
        if (pathname == '/student/' + /[1-9]/g) {
            console.log('path', pathname)
        }
    }

    if (req.method === 'PUT') {
        if (pathname == '/put') {

        }
    }

    req.on('end', () => {
        let body = ''
        const user = JSON.parse(body)
        let data

        if (!fs.existsSync(local_database)) {
            user.id = 1
            data = [user]
        } else {
            const json = require('${local_database}')
            user.id = json.length + 1
            json.push(user)
            data = json
        }
        fs.writeFileSync(LOCAL_DATABASE, JSON.stringify(data, null, 4))
    })


    res.end()

})
server.listen(args)

// nodemon des relancer le serveur automatiquementon */