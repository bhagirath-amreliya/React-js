import React from "react";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const UserProfileCard = ({ imgUrl, title, number, email, address }) => {
  return (
    <div className="w-33">
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
      <h4>{title}</h4>
      <div className="icon-call">
        <div className="call">
          <IconPhone size={18} />
        </div>
        {number}
      </div>
      <div className="icon-call">
        <div className="call">
          <IconMail size={18} />
        </div>
        {email}
      </div>
      <div className="icon-call">
        <div className="call">
          <IconMapPin size={18} />
        </div>
        {address}
      </div>
    </div>
  );
};

export default UserProfileCard;
