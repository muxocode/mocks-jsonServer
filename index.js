module.exports = () => {
    const data = { usuarios: [], rol:[], dia:[] }
    // Create 1000 users
    for (let i = 0; i < 1000; i++) {
      data.usuarios.push({ id: i, nombre: `user${i}`, idRol: i%5<4?1:2, age:18 + i%50 })
    }

    data.rol.push({id:1, nombre: "User"});
    data.rol.push({id:2, nombre: "Admin"});

    data.dia.push({id:1, nombre: "Lunes"});
    data.dia.push({id:2, nombre: "Martes"});
    data.dia.push({id:3, nombre: "Miércoles"});
    data.dia.push({id:4, nombre: "Jueves"});
    data.dia.push({id:5, nombre: "Viernes"});
    data.dia.push({id:6, nombre: "Sabado"});
    data.dia.push({id:7, nombre: "Domingo"});

    return data
  }