import React from 'react';
import {useState} from 'react';

const Agregar = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [cargar, setCargar] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const contacto = {nombre, apellido, telefono};

  setCargar(true);
        fetch('http://www.raydelto.org/agenda.php', {
            method: 'POST',
            body: JSON.stringify(contacto)
        }).then(() => {
            alert("El contacto ha sido agregado correctamente");
            setNombre('')
            setApellido('')
            setTelefono('')
            setCargar(false); 
        })
    }

    return(
     <div className="container">
      <h2>Agenda Multicapas React</h2>
    <form onSubmit={handleSubmit}>
    <input type="text"  placeholder="Nombre:" class="input-class" required="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <input type="text" placeholder="Apellido:" class="input-class" required value={apellido} onChange={(e) => setApellido(e.target.value)} />
  <input type="text" placeholder="Teléfono:" class="input-class" required value={telefono} onChange={(e) => setTelefono(e.target.value)} />
    
   {! cargar && <button id="btn">Agregar Contacto</button>  } 
</form>
     </div>
        )
}
export default Agregar