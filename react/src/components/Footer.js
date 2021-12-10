import React from 'react'

const Footer = () => {
    return (
        <footer className="container mx-auto my-5 flex flex-wrap justify-around">
        <a data-cy="proyect-author" className="text-center text-2xl text-white font-bold copy my-5"
            href="https://braiangonzales.netlify.app/" target="_blank" rel="noopener noreferrer"
        >
            Hecho por Braian Gonzales
        </a>
        <div className="my-5">
            <a 
                data-cy="proyect-repo"
                className="block w-full bg-blue-800 hover:bg-blue-500 text-xl text-white font-bold text-center rounded py-2 px-10"
                href="https://github.com/BraianMG/buscador-pokemon" target="_blank" rel="noopener noreferrer">
                Link a mi repo
            </a>
        </div>
    </footer>
    )
}

export default Footer;