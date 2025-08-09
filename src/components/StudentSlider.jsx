import React from 'react';
import Slider from './Slider';

function StudentSlider() {
  const sliderImages = [
    'https://allen-ui-clone.vercel.app/Homepage_Banner_1_sn5css.webp',
    'https://allen-ui-clone.vercel.app/v6cgvy44tde2yjq4yguo.webp',
    'https://allen-ui-clone.vercel.app/v6cgvy44tde2yjq4yguo.webp',
  ];

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Main Slider */}
        <div className="border-1 mb-12">
          <Slider
            images={sliderImages}
            autoPlayInterval={4000}
            showDots={true}
            showArrows={false}
          />
        </div>
        </div> 
      </div>
  );
}

export default StudentSlider;

        

