const { response } = require("express");
const Perfil = require("../models/Perfil");


export const crearPerfil =  async(req, res = response) =>{

    try{
        // Crea una nueva instancia del modelo PerfilUsuario
        const perfil = new Perfil({
           ...req.body, //Copia todos los campos que vienen en el cuerpo de la petición
           user: req.uid //Añade el ID del usuario autenticado al perfil. Este uid viene del token JWT y lo pone el middleware de autenticación.

        });

        const perfilGuardado = await perfil.save(); //Guarda el objeto perfil en la base de datos

        
        res.status(201).json({
            ok: true,
            perfil: perfilGuardado
        });


    }catch{
        
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear el perfil'
        });
    } 
}

module.exports = {
   crearPerfil
}