import React from 'react';

import Icon0 from '../assets/Icon (0).png';
import Icon1 from '../assets/Icon (1).png';
import Icon2 from '../assets/Icon (2).png';

import Logo0 from '../assets/Compines/logo.png';
import Logo1 from '../assets/Compines/logo (1).png';
import Logo2 from '../assets/Compines/logo (2).png';
import Logo3 from '../assets/Compines/logo (3).png';
import Logo4 from '../assets/Compines/logo (4).png';
import Logo5 from '../assets/Compines/logo (5).png';
import Logo6 from '../assets/Compines/logo (6).png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Membership Organisations',
            description:
                'Our membership management software provides full automation of membership renewals and payments',
            Image: Icon0,
        },
        {
            id: 2,
            title: 'National Associations',
            description:
                'Our membership management software provides full automation of membership renewals and payments',
            Image: Icon1,
        },
        {
            id: 3,
            title: 'Clubs And Groups',
            description:
                'Our membership management software provides full automation of membership renewals and payments',
            Image: Icon2,
        },
    ];

    const logos = [Logo0, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

    return (
        <div className="md:px-14 px-4 py-16 max-w-screen mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-gray-600 font-semibold mb-2">Our Clients</h2>
                <p className="text-gray-600">
                    We have been working with some Fortune 500+ clients
                </p>

                <div className="flex flex-wrap justify-center md:justify-between items-center my-14 gap-6 cursor-pointer">
                    {logos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center w-28 h-16 bg-white rounded-md shadow-sm"
                        >
                            <img
                                src={logo}
                                alt={`Client logo ${idx}`}
                                className="max-h-12 max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 md:w-1/3 mx-auto text-center">
                <h2 className="text-4xl text-gray-600 font-semibold mb-2">
                    Manage your entire community in a single system
                </h2>
                <p className="text-gray-600">Who is Nextcent suitable for?</p>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:w-11/12 mx-auto gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="px-6 py-8 text-center w-full bg-gray-100 rounded-xl hover:shadow-lg transition"
                    >
                        <div className="bg-[#E8F5E9] mb-4 h-14 w-14 flex items-center justify-center mx-auto rounded-tl-3xl rounded-br-3xl">
                            <img
                                src={service.Image}
                                alt={service.title}
                                className="h-8 w-8 object-contain"
                            />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-500 mb-2">
                            {service.title}
                        </h4>
                        <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
