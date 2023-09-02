import { Router } from 'express'
import { deleteFormHotel, getFormHotel, getListaPage, postFormHotel, putHotel } from '../controller/app.controller.js'

const router = Router()

router.get('/', getListaPage) // mostrar la página de inicio
router.get('/form-hotel', getFormHotel) // mostrar el formulario de creación
router.post('/form-hotel', postFormHotel) // crear un nuevo hotel

router.get('/form-hotel/:id', getFormHotel) // mostrar formulario con id (EDIT)
router.post('/delete/:id', deleteFormHotel) // eliminar un hotel

router.post('/form-hotel/:id', putHotel) // actualizar un hotel

export default router