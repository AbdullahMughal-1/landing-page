import React from 'react';
import icon from '../assets/Illustration.png';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-[#F5F7FA] via-[#E8F0ED] to-[#F5F7FA]">
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen flex items-center justify-between flex-wrap">

                <div className="w-full sm:w-1/2 text-left space-y-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 leading-snug">
                        Lessons and insights <br />
                        <span className="text-[#28CB8B]">from 8 years</span>
                    </h1>
                    <p className="text-[#89939E] text-base sm:text-lg sm:w-4/5">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                    <button className="bg-[#28CB8B] text-white py-2 px-6 rounded-xl">
                        Register
                    </button>
                </div>

                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
                    <img
                        src={icon}
                        alt="Illustration"
                        className="w-48 sm:w-64 lg:w-80 object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
