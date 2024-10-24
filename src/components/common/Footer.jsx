import React from 'react'
import { LocationIcon, EmailIcon, PhoneIcon, TimeIcon } from '../../utilits/icons'
const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container px-4 mx-auto">
        <h2>CONTACT US</h2>
        <p>
          Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus
          eget ex id egestas. Nam nec nisl placerat, tempus erat a, condimentum
          metusurabitur nulla nisi.
        </p>
        <div className="flex flex-wrap">
          <div>
            <LocationIcon />
            <h3>LOCATION</h3>
            <p>304 North Cardinal St. Dorchester Center, MA 02124</p>
          </div>
          <div>
            <EmailIcon />
            <h3>EMAIL</h3>
            <p>info@company.com</p>
          </div>
          <div>
            <PhoneIcon />
            <h3>PHONE</h3>
            <a href="tel:+1234567890">+1234567890</a>
            <a href="tel:+635551212">(+63) 555 1212</a>
          </div>
          <div>
            <TimeIcon />
            <h3> WORKING HOURS</h3>
            <p>Mon - Sat: 10:00 AM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer