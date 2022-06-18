import React from 'react'
import perro from './images/Pagina1.JPG'
import doctorine from './images/Pagina2.JPG'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Proyectos</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <p>Mediante todo lo aprendido en Henry sobre programación web, desarrolle una enciclopedia virtual de perros con temperamentos asociados, además de filtrados y ordenamientos específicos!</p>
                        <a href='https://proyect-individual-dog.vercel.app' className='a'>Link del proyecto</a>
                        <img src={perro} className='img'/>
                     
                    </div>
                    <div className='card'>
                        <p>Servicio para un importante sector profesional de odontología para gestionar turnos, historias clínicas, presupuestos y lo relacionado a su desempeño diario del odontologo y el facil uso para los clientes!</p>
                        <a href='https://doctorine.vercel.app' className='a'>Link del proyecto</a>
                        <img src={doctorine} className='img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
