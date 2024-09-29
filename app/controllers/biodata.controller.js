const db = require("../models");
const biodata = db.biodata;

// untuk tambah data
exports.create = async (req, res) => { 
    console.log(req.body);
    
    // Cek apakah sudah ada data
    const existingData = await biodata.findAll();
    
    if (existingData.length > 0) {
        return res.status(400).send({
            message: "Data sudah ada. Tidak dapat menambahkan data baru."
        });
    }

    // Validasi email tidak boleh null
    if (!req.body.email) {
        return res.status(400).send({
            message: "Email tidak boleh kosong."
        });
    }

    const data_user = {    
        elemenData: req.body.elemenData,    
        nama: req.body.nama,
        alamat: req.body.alamat,
        email: req.body.email,
        no_hp: req.body.no_hp 
    };

    console.log("data_", data_user);     
    await biodata.create(data_user)
        .then(data => {    
            res.send({    
                message: "Data berhasil ditambahkan."   
            }); 
        })   
        .catch(err => {
            res.status(500).send({    
                message: err.message || "Terjadi kesalahan saat menambahkan data."   
            });   
        });  
}

// untuk menampilkan semua data
exports.readAll = async (req, res) => {
    await biodata.findAll()      
        .then(data => {     
            res.send(data);      
        })      
        .catch(err => {      
            res.status(500).send({     
                message: err.message || "Terjadi kesalahan saat mengambil data."      
            });     
        });     
}

// untuk menampilkan data dengan id tertentu
exports.readById = async (req, res) => {
    const id = req.params.id;   
    await biodata.findOne({ where: { id: id }})   
        .then(data => {   
            if (!data) {
                return res.status(404).send({ message: "Data tidak ditemukan." });
            }
            res.send(data);   
        })   
        .catch(err => {   
            res.status(500).send({   
                message: err.message || "Terjadi kesalahan saat mengambil data."   
            });   
        });   
}

// untuk update data
exports.update = async (req, res) => {
    const id = req.params.id;     
    await biodata.update(req.body, { where: { id: id }})     
        .then(num => {    
            num == 1 ? res.send({  
                message: "Data berhasil diperbarui."     
            }) : res.send({     
                message: `Tidak dapat memperbarui Data dengan id=${id}. Mungkin Data tidak ditemukan atau req.body kosong!`     
            });     
        })     
        .catch(err => {     
            res.status(500).send({    
                message: `Kesalahan saat memperbarui Data dengan id=${id}`,    
                error: err    
            });    
        });    
}

// untuk menghapus data
exports.delete = async (req, res) => {
    const id = req.params.id;     
    await biodata.destroy({ where: { id: id }})     
        .then(num => {     
            num == 1 ? res.send({     
                message: "Data berhasil dihapus."    
            }) : res.send({    
                message: `Tidak dapat menghapus Data dengan id=${id}. Mungkin Data tidak ditemukan atau req.body kosong!`     
            });     
        })    
        .catch(err => {     
            res.status(500).send({     
                message: `Kesalahan saat menghapus Data dengan id=${id}`,     
                error: err     
            });    
        });    
}
