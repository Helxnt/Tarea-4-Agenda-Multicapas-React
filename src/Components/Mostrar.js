import React, {useState,useEffect} from 'react';

function Mostrar(){
    const [contacto, setContacto] = useState([]);
    const getContacto=()=>{
      fetch("http://www.raydelto.org/agenda.php"
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setContacto(myJson)
        });
    }
    useEffect(()=>{
        getContacto()
      },[])
    return (
      <div className="table-responsive container">
      <div id="content">
			<table summary='Contactos'>
			<thead>
			<tr> 
			<th>Nombre </th> 
			<th>Apellido </th> 
			<th>Teléfono </th> 
			</tr>
			</thead>
            {contacto.map(contacto => <tbody id="table"><tr key={contacto.telefono}><td>{contacto.nombre}</td><td>{contacto.apellido}</td><td>{contacto.telefono}</td></tr></tbody>)}
			</table>
		</div>
    </div>
);
}
export default Mostrar;