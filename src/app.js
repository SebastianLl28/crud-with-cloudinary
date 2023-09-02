import express from 'express'
import routerApp from './routers/app.routers.js'

import fileupload from 'express-fileupload'

const app = express()

// ? Habilitar Fileupload
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: './src/uploads'
}))

// ? Habilitar el formulario
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./src/public'))

// ? Habilitar Pug
app.set('view engine', 'pug')
app.set('views', './src/views')

// ? Rutas
app.use(routerApp)

export default app