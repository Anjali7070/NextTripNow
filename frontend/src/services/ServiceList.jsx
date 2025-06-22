import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Stay prepared for your journey with real-time weather updates.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `From hidden gems to iconic landmarks, make your experience unforgettable.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Create a travel plan that’s perfectly suited to your unique style.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList