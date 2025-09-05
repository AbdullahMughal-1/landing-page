import React from 'react'




const services = () => {
    const services = [
        { id: 1, title: 'Membership Organisations', description: "Our membership management software provides full automation of membership renewals and payments", Image: "/src/assets/Icon (0).png" },
        { id: 2, title: 'National Associations', description: "Our membership management software provides full automation of membership renewals and payments", Image: "/src/assets/Icon (1).png" },
        { id: 3, title: 'Clubs And Groups', description: "Our membership management software provides full automation of membership renewals and payments", Image: "/src/assets//Icon (2).png" }
    ]
    return (
        <div className="md:px-14 px-4 py-16 max- w-screen mx-auto">
            <div className='text-center my-8'>
                <h2 className='text-4xl text-gray-600 font-semibold mb-2'>Our Clients</h2>
                <p className='text-gray-600'>We have been working with some Fortune 500+ clients</p>


                <div className='flex flex-wrap justify-between items-center my-14 gap-6 cursor-pointer'>
                    <img src="\src\assets\Compines/logo.png" alt="" />
                    <img src="\src\assets\Compines/logo (1).png" alt="" />
                    <img src="\src\assets\Compines/logo (2).png" alt="" />
                    <img src="\src\assets\Compines/logo (3).png" alt="" />
                    <img src="\src\assets\Compines/logo (4).png" alt="" />
                    <img src="\src\assets\Compines/logo (5).png" alt="" />
                    <img src="\src\assets\Compines/logo (6).png" alt="" />
                </div>
            </div>
            <div className='mt-20 md:w-1/3 mx-auto text-center'>
                <h2 className='text-4xl text-gray-600 font-semibold mb-2'> Manage your entire community in a single system</h2>
                <p className='text-gray-600'>Who is Nextcent suitable for?
                </p>

            </div>

            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 cursor-pointer ml-44 '>
                {
                    services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx auto  bg-gray-100 rounded-xl ml- '  >
                        <div>
                            <div className='bg-[#E8F5E9] mb-4 h-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                                <img className='ml-4' src={service.Image} alt="" /></div>
                            <h4 className='text-2xl font-bold text-gray-500 mb-2 px-2' >{service.title}</h4>
                            <p className='text-sm text-gray-500' >{service.description}</p>
                        </div>

                    </div>)
                }
            </div>




        </div>
    )
}

export default services 
