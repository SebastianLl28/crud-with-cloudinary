import Hotel from '../model/Hotel.js'
import { deleteImage, uploadImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

// * Listar los hoteles y mostrarlo en pantalla
export const getListaPage = async (req, res) => {
  const findAllHotel = await Hotel.findAll();
  res.render('lista', {
    dato: "hola como estas papu",
    listaHotel: findAllHotel
  })
}

//* mostrar formulario en el que se agregará hotel
export const getFormHotel = async (req, res) => {
  const { id } = req.params

  // * En caso de que exista el id se edita el hotel
  if (id) {
    const hotel = await Hotel.findOne({ where: { id } })
    return res.render('form-hotel', { hotel })
  }

  // * En caso de que no exista el id se crea un nuevo hotel
  res.render('form-hotel', {})
}

//* guardar hotel
export const postFormHotel = async (req, res) => {
  try {
    
    const { id } = req.params

    // * En caso de que no exista el id se crea un nuevo hotel
    if (!id) {
      const file = await uploadImage(req.files.image.tempFilePath)
      await fs.remove(req.files.image.tempFilePath)
      await Hotel.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        image: file.url,
        image_id: file.public_id
      })
      return res.redirect('/')
    } 

    // * 
    
  } catch (error) {
    console.log(error)
  }
}

// * Eliminar hotel
export const deleteFormHotel = async (req, res) => {
  const { id } = req.params
  const hotel = await Hotel.findOne({ where: { id } })
  await deleteImage(hotel.image_id)
  await Hotel.destroy({ where: { id } })
  res.redirect('/')
}


//* editar hotel
export const putHotel = async (req, res) => {
  const { id } = req.params
  const { nombre, descripcion } = req.body
  const hotelFind = await Hotel.findOne({ where: { id } })

  hotelFind.nombre = nombre
  hotelFind.descripcion = descripcion

  if (req.files) {
    await deleteImage(hotelFind.image_id)
    const file = await uploadImage(req.files.image.tempFilePath)
    await fs.remove(req.files.image.tempFilePath)
    hotelFind.image = file.url
    hotelFind.image_id = file.public_id
  }

  await hotelFind.save()

  res.redirect('/');
}
