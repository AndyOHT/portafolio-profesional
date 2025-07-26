import React from 'react'
import foto from '../assets/foto-perfil.jpg'

const Perfil = () => (
  <section>
    <img 
      src={foto} 
      alt="Foto de Andres Oswaldo Heredia Torres" 
      style={{
        width: '160px',
        height: '160px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #ff4081',
        marginBottom: '1rem'
      }}
    />

    <h2>Datos Personales</h2>
    <p><strong>Nombre:</strong> Andres Oswaldo Heredia Torres</p>
    <p><strong>Email:</strong> <a href="mailto:00801279@red.unid.mx">00801279@red.unid.mx</a></p>
    <p><strong>Teléfono:</strong> 9818187377</p>
    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andres-oswaldo-heredia-torres-52a359294" target="_blank">Perfil</a></p>
    <p><strong>GitHub:</strong> <a href="https://github.com/AndyOHT" target="_blank">Repositorio</a></p>
    <p><strong>Ubicación:</strong> San Francisco de Campeche, Campeche.</p>

    <h3>Resumen Profesional</h3>
    <p>Especializado en el desarrollo de software, arquitectura de soluciones. Apasionado por la tecnología y la innovación.</p>
  </section>
)

export default Perfil
