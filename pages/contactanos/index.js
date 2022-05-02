import { useState } from "react";
import Layout from "../../components/Layout";
import Swal from 'sweetalert2';
import axios from "axios";

export default function contactanos () {
    
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log('Sending');
        
        let data = {
            name,
            email,
            message
        };

        return await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setSubmitted(true)
                    setName('')
                    setMessage('')
                    setEmail('')
                    setBody('')
                new Swal({
                    title:"Solicitud Eliminada",
                    text:"La solicitud ha sido eliminada de forma correcta.",
                    icon: "success"
                  })
                } else if (res.status === 404) {
                    console.log('Response not found!');
                }
            })
            .catch((err) => console.log(err))
        };
    
    return (
        <Layout 
        title="Contactanos | Proanalytics"
        description="Agregue una descripcion"
        >
            <section className="text-gray-600 body-font relative font-mont">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold title-font mb-4 text-green-500 font-jost">Contáctanos</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-regular ">Estamos a su disposición para resolver cualquier tipo de duda</p>
                    </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nombre</label>
                            <input type="text" 
                                    id="name" 
                                    name="name" 
                                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    onChange={(e)=>{setName(e.target.value)}}
                                    />
                        </div>
                    </div>
                <div className="p-2 w-1/2">
            <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
        </div>
        <div className="p-2 w-full">
            <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensaje</label>
            <textarea 
                id="message" 
                name="message" 
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e)=>{setMessage(e.target.value)}}
                >
                </textarea>
            </div>
        </div>
        <div className="p-2 w-full">
            <button 
            className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-400 rounded text-lg"
            type='submit' 
            onClick={(e)=>{handleSubmit(e)}}
            >
            Enviar
            </button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-green-500">contacto@proanalytics.com.mx</a> <br /> <br />
            <span className="inline-flex">
            <a className="text-green-500" href="https://www.linkedin.com/in/rosy-mart%C3%ADnez-reyes/" target="_blank">
            <g color="text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            </g>
            </a>
            </span>
        </div>
        </div>
    </div>
</div>
</section>
        </Layout>
    )
}