import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
<nav className="bg-blue-600 p-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-2xl font-bold">
      <Link to="/" className="hover:text-gray-200 transition duration-300">HOME</Link>
    </div>
    <div className="flex items-center">
      <Link to={'/login'}>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
          Log In
        </button>
      </Link>
      {/* Optional: Add more navigation links here */}
  
    </div>
  </div>
</nav>

  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} code-a.b. All rights reserved.</p>
    </footer>
  );
};

// Card Component
const Card = ({ title, description, imageSrc, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <img className="w-full h-40 object-cover rounded-t-lg" src={imageSrc} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );
};

// Home Component
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image.jpg',
    'https://charterschool.in/admission-open/images/banner_cochins.jpg',
    'https://media.istockphoto.com/id/121179299/photo/school-building-or-business-building-with-american-flag.jpg?s=612x612&w=0&k=20&c=uG58f_f1wcAeoC-mgR1kHLB-b_vlmpF_C7wXiPCuNTA=',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Carousel Section */}
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative">
            <img className="w-full h-64 object-cover" src={images[currentIndex]} alt="Carousel" />
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={handlePrev}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              ❮
            </button>
            <button
              onClick={handleNext}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
              ❯
            </button>
          </div>
        </div>

        {/* Button for Login */}
     

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {/* Card 1 */}
          <Card
  id={1}
  title="Basketball Tournament"
  description="Join the excitement of our annual basketball tournament! Compete with the best teams and showcase your skills on the court."
  imageSrc="https://raghavfoundation.org.in/wp-content/uploads/2023/05/school-image.jpg"
/>

<Card
  id={2}
  title="STEM Program"
  description="Explore the world of Science, Technology, Engineering, and Mathematics through our engaging and hands-on STEM program."
  imageSrc="https://5.imimg.com/data5/MU/IC/YG/SELLER-15771250/overhead-projectors-on-hire-500x500.jpg"
/>

<Card
  id={3}
  title="DJ Party Night"
  description="Get ready to dance the night away at our DJ Party Night! Enjoy great music, lively beats, and an unforgettable experience."
  imageSrc="https://img1.exportersindia.com/product_images/bc-full/2022/3/10049362/college-event-organizing-services-1648724999-6266222.jpeg"
/>

<Card
  id={4}
  title="Cricket Championship"
  description="Cheer for your favorite teams in the cricket championship! Enjoy a thrilling match filled with excitement and sporting spirit."
  imageSrc="https://www.tmu.ac.in/uploads/events/past_event/347_image2.webp"
/>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
