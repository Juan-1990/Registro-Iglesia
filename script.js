document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const data = {
        nombres: form.nombres.value,
        apellidos: form.apellidos.value,
        fecha: form.fecha.value,
        telefono: form.telefono.value,
        celular: form.celular.value,
        direccion: form.direccion.value,
        barrio: form.barrio.value,
        fechaNacimiento: form.fechaNacimiento.value,
        edad: form.edad.value
      };
  
      fetch('AQUI_TU_URL_DEL_WEBAPP', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(() => {
        alert('¡Registro enviado correctamente!');
        form.reset();
      }).catch(error => {
        console.error('Error:', error);
        alert('Error al enviar registro.');
      });
    });
  });
  