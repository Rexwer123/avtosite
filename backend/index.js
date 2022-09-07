const express = require('express')

const { PORT } = process.env

function l(){
	console.log('[X] GOT REQUEST')
}

function loadRoutes(server){
	server.post('/leaveRequest', (req, res) => {
		const { service, name, phone, comment } = req.body

		if(service && name && phone && comment){
			res.send('OK IDI NAHUY')
		}

		res.send(400) // Bad Request
	})

	server.get('/', (req, res) => {
		l()
		res.send('SHIIIISH')
	})
}

function init(){
	const app = express()

	app.listen(PORT ? Number(PORT) : 3000, () => console.log('[OK] LISTENING FOR REQUESTS'))
	loadRoutes(app)
}


init()
