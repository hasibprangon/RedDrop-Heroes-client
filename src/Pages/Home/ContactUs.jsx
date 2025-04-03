import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import img from '../../assets/image/RedDrop-Heroes.png'

const ContactUs = ({theme}) => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            `${import.meta.env.VITE_EMAIL_SERVICE_KEY}`,
            `${import.meta.env.VITE_EMAIL_TEMPLATE_KEY}`,
            {
                from_name: form.name,
                to_name: 'Md Hasibul Hossain',
                from_email: form.email,
                to_email: 'hasibulhossainp09@gmail.com',
                message: form.message
            },
            `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
        )
            .then(() => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Thank You. I will get back to you as soon as possible ",
                    showConfirmButton: false,
                    timer: 1500
                });
                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
            },
                (error) => {
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "Something went wrong",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            )

    };

    
    // <section className={`py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black'}`}></section>

    return (
        <div  className={`py-12 px-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-red-50 text-black'}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div
                    className={`py-12 px-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
                     
                     >
                        <h3 className="text-2xl font-semibold text-center text-gray-800">Get in Touch</h3>
                        <form
                            className="card-body"
                            ref={formRef}
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-6 form-control">
                                <label className="label block text-lg font-medium  mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    value={form.name} onChange={handleChange} required
                                    placeholder="Your Full Name"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                />
                            </div>
                            {/* email */}
                            <div className="form-control mb-6">
                                <label className="block text-lg font-medium  mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-control mb-6">
                                <label className="block text-lg font-medium  mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    placeholder="Write your message here..."
                                    rows="5"
                                    name='message'
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300"
                                    value={form.message} onChange={handleChange} required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ${
                                    theme === "dark" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-red-600 hover:bg-gray-100"
                                  }`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-gray-800 text-white rounded-xl p-8 shadow-xl">
                        <img src={img} className='h-[300px] rounded-xl' alt="" />
                        <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
                        <p className="text-lg mb-6 text-center">
                            Feel free to reach out if you have any questions or need assistance.
                        </p>
                        <p className="text-lg mb-3">
                            <strong>Phone:</strong> +123 456 7890
                        </p>
                        <p className="text-lg mb-3">
                            <strong>Email:</strong> redDrop@heroes.org
                        </p>
                        <p className="text-lg">
                            <strong>Address:</strong> 123 Blood Drive, Life City
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
