import React from 'react';
import aboutimg from '../assets/pana.png';
import icon1 from '../assets/iconss1.png';
import icon2 from '../assets/iconss2.png';
import icon3 from '../assets/iconss3.png';
import icon4 from '../assets/iconss4.png';
import teslaLogo from '../assets/tesle.png';
import logo1 from '../assets/Compines/Logo (1).png';
import logo2 from '../assets/Compines/Logo (2).png';
import logo3 from '../assets/Compines/Logo (3).png';
import logo4 from '../assets/Compines/Logo (4).png';
import logo5 from '../assets/Compines/Logo (5).png';

const Product = () => {
    const stats = [
        { id: 1, label: 'Members', value: '2,445,341', icon: icon1 },
        { id: 2, label: 'Clubs', value: '46,328', icon: icon2 },
        { id: 3, label: 'Event Bookings', value: '828,867', icon: icon3 },
        { id: 4, label: 'Payments', value: '1,926,436', icon: icon4 }
    ];

    const logos = [logo1, logo2, logo3, logo4, logo5];

    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-xl mx-auto mt-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={aboutimg} alt="About" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-gray-500 font-semibold mb-4 md:w-4/5">
                            How to design your site footer like we did
                        </h2>
                        <p className="md:w-3/4 text-sm text-gray-500 mb-8">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className="cursor-pointer bg-[#28CB8B] text-white py-2 px-6 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-4 lg:px-14 max-w-screen-xl mx-auto bg-gray-100 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl text-gray-500 font-semibold mb-4">
                        Helping a local <br />
                        <span className="text-[#28CB8B]">business reinvent itself</span>
                    </h2>
                    <p className="text-gray-600">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(({ id, label, value, icon }) => (
                        <div key={id} className="flex flex-col items-center space-y-2">
                            <img src={icon} alt={label} className="w-12 h-12" />
                            <h2 className="text-2xl text-gray-500 font-semibold">{value}</h2>
                            <p className="text-gray-600">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="px-4 lg:px-14 py-16 max-w-screen-xl mx-auto bg-g">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img src={teslaLogo} alt="Tesla Logo" className="w-70 h-70 object-contain" />
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut
                            tincidunt tincidunt, nunc nisl aliquam nunc, eget aliquam nunc nisl eu nunc.
                            Integer euismod, nunc ut tincidunt tincidunt, nunc nisl aliquam nunc.
                        </p>
                        <div>
                            <h4 className="text-[#28CB8B] font-semibold text-lg">Tim Smith</h4>
                            <p className="text-gray-500 text-sm">British Dragon Boat Racing Association</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 mt-6">
                            {logos.map((logo, index) => (
                                <img key={index} src={logo} alt={`Logo ${index + 1}`} className="w-10 h-10 object-contain" />
                            ))}
                            <button className="text-[#28CB8B] text-sm font-medium underline ml-2">
                                Meet all customers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
