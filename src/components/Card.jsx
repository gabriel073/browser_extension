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
                        <div className="card-body h-[10rem] flex flex-col justify-between ">
                            <div className='flex mb-4'>

                                <div className='flex flex-row items-start mr-2 '>
                                    <img src={card.logo} alt="logo" className='w-20' />

                                </div>

                                <div className="flex flex-col items-start mt-[-4px]">

                                    <h5 className="card-title text-start dark:text-white font-bold ">{card.name}</h5>
                                    <p className="card-text text-start dark:text-(--color-Neutral300)">{card.description}</p>
                                </div>

                            </div>
                            <div className='flex justify-between items-end '>
                                <button className="btn btn-primary dark:border-(--color-Neutral600) dark:text-(--color-Neutral0) border-1 rounded-2xl px-3 py-1 text-sm  dark:hover:bg-gray-600 hover:cursor-pointer">
                                    Remove
                                </button>
                                <button
                                    onClick={() => setEnabled(!enabled)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${enabled ? 'bg-(--color-Red500)' : 'bg-(--color-Neutral600)'
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