import React from 'react';
import logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const Footer = () => {
    return (
        <div className="bg-gray-100 mt-20">
            <div className="text-center py-16 px-4 lg:px-14 max-w-screen-xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-gray-700 font-semibold mb-6">
                    Pellentesque suscipit fringilla libero eu.
                </h2>
                <button className="bg-[#28CB8B] text-white py-2 px-6 rounded-xl font-medium">
                    Get a Demo →
                </button>
            </div>

            <div className=" w-screen text-white bg-[#263238] px-4 lg:px-14 py-16 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-600">
                <div className="space-y-6">
                    <img src={logo} alt="Nexcent Logo" className=" bg-white w-32" />
                    <p className="text-sm">
                        Copyright © 2020 Landify UI Kit. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <img src={instagram} alt="Instagram" className="w-6 h-6" />
                        <img src={facebook} alt="Facebook" className="w-6 h-6" />
                        <img src={twitter} alt="Twitter" className="w-6 h-6" />
                        <img src={youtube} alt="YouTube" className="w-6 h-6" />
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li>About us</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Help center</li>
                        <li>Terms of service</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Status</li>
                    </ul>
                </div>

                <div flex>
                    <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="text-white w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"

                    />

                </div>
            </div>
        </div>
    );
};

export default Footer;
