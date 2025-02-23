import React from 'react'

const LocationSearchPanel = (props) => {
    
    const locations = [
        'Near Kakshyalaya Montessori, Amity Boys Hostel, Ghattekulo, Kathmandu',
        'Near Siddhartha School, Amity Boys Hostel, Ghattekulo, Kathmandu',
        'Near Trinity International College, Amity Boys Hostel, Ghattekulo, Kathmandu',
        'Near Pipalbot, Amity Boys Hostel, Ghattekulo, Kathmandu',
    ]
    return (
        <div>
            {locations.map((location,idx)=>{
            return <div key={idx}
            onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }}
            className='flex gap-4 border-2 border-gray-100 active:border-black p-3 rounded-xl  items-center justify-start my-2'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                <i className='ri-map-pin-fill'/>
            </h2>
            <h4 className='font-medium'>
                {location}
            </h4>
        </div>
        
        })}
        </div>
    )
}

export default LocationSearchPanel
