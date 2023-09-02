import app from './app.js'
import 'dotenv/config';
import db from './db/db.js'

// ? Conectar a la base de datos
try {
  await db.sync()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.log(error)
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})