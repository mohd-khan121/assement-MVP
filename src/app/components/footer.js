"use client";
import lightLogo from '../images/brand_assets/light_logo.svg';
import brownMountains from '../images/brown_mountains.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="relative bg-[#daa301] text-white p-10">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${brownMountains.src})` }} 
      />
            <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        <div>
          <Image 
            src={lightLogo} 
            alt="Company Logo" 
            width={150} 
            height={50} 
            className="mb-4"
          />
          <p className="mb-6">Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
          
          <div className="space-y-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>info@company.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>1234 Street, City, Country</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/partners" className="hover:underline">Partners</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <p className="mb-4">Sign up to get the latest updates and offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-4 py-4 mb-4  bg-white/20 backdrop-blur-md text-white rounded-lg focus:outline-none placeholder-white"
            />
            <button 
              className="w-full px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-lg font-bold hover:bg-white/40"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
