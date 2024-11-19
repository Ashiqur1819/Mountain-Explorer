import React from 'react';
import Navbar from '../components/Navbar';
import AdventureDetails from '../components/AdventureDetails';
import Footer from '../components/Footer';

const AdventureDetailsLayout = () => {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-12">
          <AdventureDetails></AdventureDetails>
        </div>

        <div className='mt-24'>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default AdventureDetailsLayout;