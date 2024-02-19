import React from "react";

const SocialShare = () => {
  const socialMedia = [
    {
      name: "Scholar",
      icon: "fab fa-google",
      url: "#",
    },
    {
      name: "Sicopus",
      icon: "fab fa-instagram",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "#",
    },
    
  ];

  return (
    <ul className="style-none social-icon circle-shape d-flex pt-10">
      {socialMedia.map((platform) => (
        <li
          key={platform.name}
          className="rounded-circle d-flex align-items-center justify-content-center"
        >
          <a href={platform.url}>
            <i className={platform.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialShare;
