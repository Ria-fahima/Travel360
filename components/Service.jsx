import React from 'react';
import IgImg1 from '../public/assets/ser-img-1.jpg';
import IgImg2 from '../public/assets/ser-img-2.jpg';
import IgImg3 from '../public/assets/ser-img-3.jpg';
import IgImg4 from '../public/assets/ser-img-4.jpg';
import IgImg5 from '../public/assets/ser-img-5.jpg';
import IgImg6 from '../public/assets/ser-img-6.jpg';
import ServiceBox from './ServiceBox';

const Service = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-16'>
        <p className='text-3xl font-bold pb-5'>Countries where we served already</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <ServiceBox travelImg={IgImg1} travelCont='Venice,Italy'/>
            <ServiceBox travelImg={IgImg2} travelCont='Philippines'/>
            <ServiceBox travelImg={IgImg3} travelCont='Greece'/>
            <ServiceBox travelImg={IgImg4} travelCont='Malaysia'/>
            <ServiceBox travelImg={IgImg5} travelCont='Dubai'/>
            <ServiceBox travelImg={IgImg6} travelCont='France'/>
            
        </div>
    </div>
  )
}

export default Service