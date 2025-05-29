const { Schema, model } = require("mongoose");

const PerfilSchema = Schema({

    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },


    softwares:{
        type: Array,
        required: true
    },

    skills:{
        type: Array,
        required: true
    },

    country:{
        type: String,
        required: true
    },

    city:{
        type: String,
        required: true
    },

    about:{
        type: String,
        required: true
    },

    socialMedia:{
        type: Array,
        required: true
    },

    photo:{
        type: String,
        required: true
    }

})

module.exports = model('PerfilUsuario', PerfilSchema);
