import React from 'react';
import aboutimg from '../assets/Compines/About.png';
import icon1 from '../assets/iconss1.png';
import icon2 from '../assets/iconss2.png';
import icon3 from '../assets/iconss3.png';
import icon4 from '../assets/iconss4.png';

const About = () => {
    const stats = [
        { id: 1, label: 'Members', value: '2,445,341', icon: icon1 },
        { id: 2, label: 'Clubs', value: '46,328', icon: icon2 },
        { id: 3, label: 'Event Bookings', value: '828,867', icon: icon3 },
        { id: 4, label: 'Payments', value: '1,926,436', icon: icon4 }
    ];

    return (
        <div>
            <div className="px-4 lg:px-14 max-w-screen-xl mx-auto mt-8">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={aboutimg} alt="About" />
                    </div>
                    <div className="md:w-3/5 mx-auto">
                        <h2 className="text-4xl text-gray-500 font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="md:w-3/4 text-sm text-gray-500 mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur fugiat ut corporis rem ex tempora amet quod id, mollitia officiis consectetur reiciendis tenetur! Fugit sit ad ex doloremque, ipsum sequi ab omnis rem voluptas est vero laboriosam. Sunt, illum.
                        </p>
                        <button className="cursor-pointer bg-[#28CB8B] text-white py-2 px-6 rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-14 max-w-screen-xl mx-auto bg-gray-100 py-16">
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
                    {stats.map(({ id, label, value, icon, subtext }) => (
                        <div key={id} className="flex flex-col items-center space-y-2">
                            <img src={icon} alt={label} className="w-12 h-12" />
                            <h2 className="text-2xl text-gray-500 font-semibold">{value}</h2>
                            <p className="text-gray-600">{label}</p>
                            {subtext && (
                                <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                    {subtext}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
