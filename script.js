document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
      nombres: document.getElementById('nombres').value,
      apellidos: document.getElementById('apellidos').value,
      fecha: document.getElementById('fecha').value,
      telefono: document.getElementById('telefono').value,
      celular: document.getElementById('celular').value,
      direccion: document.getElementById('direccion').value,
      barrio: document.getElementById('barrio').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value,
      edad: document.getElementById('edad').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzirFCzFw_FbRLoV8TT39J0th8xv7SUakfSBrYTEvo/dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Se guardó correctamente en la base de datos.'
      });
      form.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar el registro.'
      });
    });
  });
});
