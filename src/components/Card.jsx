import data from '../../data.json';
import { useState } from 'react';

function Card() {
    const [enabled, setEnabled] = useState(false);
    return (
        <>
            {/* 
                generar una card con datos dinamicos desde un archivo JSON
                y mostrarla en una pagina web con tailwindcss
                https://tailwindcss.com/docs/installation

                renderizar el componente Card.jsx en un bucle con datos dinamicos desde un archivo JSON sobre una grilla de 3 columnas y 4 filas
            */}
            {
                data.map((card, index) => (
                    <div key={index} className="w-full card border border-gray-200 rounded-lg shadow-md p-4">
                        <div className="card-body h-full flex flex-col justify-between">
                            <div className='flex mb-4'>

                                <div className='flex flex-row items-start mr-2'>
                                    <img src={card.logo} alt="logo" srcset="" />

                                </div>

                                <div className="flex flex-col items-start mt-[-4px]">

                                    <h5 className="card-title text-start">{card.name}</h5>
                                    <p className="card-text text-start">{card.description}</p>
                                </div>

                            </div>
                            <div className='flex justify-between items-end '>
                                <button className="btn btn-primary border border-gray-300 rounded-2xl px-3 py-1 text-sm  hover:bg-gray-600 hover:cursor-pointer">
                                    remove
                                </button>
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${enabled ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${enabled ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>

                            </div>
                        </div>
                    </div >
                ))
            }
        </>
    )
}

export default Card;