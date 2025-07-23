import React from "react";
import "./App.css";
import UserProfileCard from "./component/UserProfileCard";

const App = () => {
  return (
    <div className="w-100">
      <div className="w-1140">
        <h2 className="title">User Profile Card</h2>
        <div className="flex gap">
          <UserProfileCard
            imgUrl="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
            title="Rock Boy"
            number="8980743009"
            email="demo@gmail.com"
            address="Surat, Gujarat - 395006"
          />

          <UserProfileCard
            imgUrl="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
            title="Sarah Lee"
            number="9876543210"
            email="sarah.lee@example.com"
            address="Mumbai, Maharashtra - 400001"
          />

          <UserProfileCard
            imgUrl="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
            title="James Bond"
            number="9123456789"
            email="bond007@example.com"
            address="London, England - SW1A 1AA"
          />

          <UserProfileCard
            imgUrl="https://images.pexels.com/photos/2829373/pexels-photo-2829373.jpeg"
            title="Emma Watson"
            number="9034567890"
            email="emma.watson@actor.com"
            address="Paris, France - 75001"
          />

          <UserProfileCard
            imgUrl="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
            title="John Doe"
            number="9001234567"
            email="john.doe@example.com"
            address="New York, NY - 10001"
          />

          <UserProfileCard
            imgUrl="https://remove.photos/images/demo/index-demo1.webp"
            title="Alice Cooper"
            number="8801122334"
            email="alice.cooper@example.com"
            address="Los Angeles, CA - 90001"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
