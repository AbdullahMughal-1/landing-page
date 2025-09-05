import React from 'react';
import blog1 from '../assets/1.png';
import blog2 from '../assets/2.png';
import blog3 from '../assets/3.png';

const BlogSection = () => {
    return (
        <div className="px-4 lg:px-14 py-16 max-w-screen-xl mx-auto bg-gray-100">
            <div className="text-center mb-12">
                <h2 className="text-4xl text-gray-700 font-semibold mb-4">
                    Caring is the new marketing
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    The Nextext blog is the best place to read about the latest membership insights, trends and more. See who’s joining the community, read about how our community are increasing their membership income and lots more.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                    <img src={blog1} alt="Blog 1" className="w-full h-64 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-700">
                        Creating Streamlined Safeguarding Processes with OneRen
                    </h3>
                    <a href="#" className="text-[#28CB8B] text-sm font-medium underline">
                        Read more
                    </a>
                </div>

                <div className="space-y-4">
                    <img src={blog2} alt="Blog 2" className="w-full h-64 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-700">
                        What are your safeguarding responsibilities and how can you manage them?
                    </h3>
                    <a href="#" className="text-[#28CB8B] text-sm font-medium underline">
                        Read more
                    </a>
                </div>

                <div className="space-y-4">
                    <img src={blog3} alt="Blog 3" className="w-full h-64 object-cover rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-700">
                        Revamping the Membership Model with Triathlon Australia
                    </h3>
                    <a href="#" className="text-[#28CB8B] text-sm font-medium underline">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
