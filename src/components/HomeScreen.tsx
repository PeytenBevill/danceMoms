import React from "react";
import { useNavigate } from "react-router";
import "./home.css";

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const icons = [
    {
      name: "facetime",
      src: "https://cdn3d.iconscout.com/3d/free/thumb/free-facetime-logo-2978361-2476738.png?f=webp",
      click: false,
      addBorder: false,
    },
    {
      name: "calendar",
      src: "/cal.png",
      click: false,
      addBorder: false,
    },
    {
      name: "gallary",
      src: "/gallaryIcon.png",
      click: false,
      addBorder: false,
    },
    {
      name: "camera",
      src: "/cameraIcon.png",
      click: false,
      addBorder: false,
    },
    {
      name: "notes",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Apple_Notes_%28iOS%29.png",
      click: false,
      addBorder: false,
    },
    {
      name: "settings",
      src: "https://cdn.iconscout.com/icon/free/png-256/free-apple-settings-1-493162.png?f=webp",
      click: false,
      addBorder: false,
    },
    {
      name: "clock",
      src: "https://cdn.iconscout.com/icon/free/png-256/free-apple-clock-493151.png?f=webp",
      click: false,
      addBorder: false,
    },
    {
      name: "voicemail",
      src: "https://play-lh.googleusercontent.com/HLmUQ6igRmEePQ4JeE8t6OBqu2IxFF8LYtT7LgbgdLSRCI-b_QIrbC3NaiMWWEFxk-8=w240-h480-rw",
      click: true,
      addBorder: true,
    },
    {
      name: "weather",
      src: "https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png",
      click: false,
      addBorder: true,
    },
    {
      name: "reminders",
      src: "https://cdn.jim-nielsen.com/watchos/512/reminders-2020-03-09.png",
      click: false,
      addBorder: true,
    },
    {
      name: "stocks",
      src: "https://cdn.jim-nielsen.com/ios/512/stocks-2018-04-25.png",
      click: false,
      addBorder: true,
    },
    {
      name: "maps",
      src: "https://www.apple.com/v/maps/d/images/overview/intro_icon__dfyvjc1ohbcm_large.png",
      click: false,
      addBorder: false,
    },
    {
      name: "mail",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg",
      click: false,
      addBorder: false,
    },
    {
      name: "books",
      src: "https://daisy.org/wp-content/uploads/2020/07/apple-books-app-icon.png",
      click: false,
      addBorder: true,
    },
    {
      name: "app store",
      src: "https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png",
      click: false,
      addBorder: false,
    },
    {
      name: "podcasts",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Podcasts_%28iOS%29.svg/2048px-Podcasts_%28iOS%29.svg.png",
      click: true,
      addBorder: false,
    },
  ];
  const bar = [
    {
      name: "phone",
      src: "https://cdn.iconscout.com/icon/free/png-256/free-apple-phone-2-493154.png?f=webp",
      click: true,
    },
    {
      name: "safari",
      src: "https://i.pinimg.com/originals/98/14/6e/98146ec63f05240c321a82f8b35a31c0.png",
      click: false,
    },
    {
      name: "messages",
      src: "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Messages-512.png",
      click: true,
    },
    {
      name: "music",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/1024px-Apple_Music_icon.svg.png",
      click: false,
    },
  ];

  const handleClick = (name: string, click: boolean) => {
    if (click) {
      navigate(`/${name}`);
    } else {
      return
    }
  };
  return (
    <div className="homeBody">
      {icons.map((icon) => (
        <img
          className={icon.addBorder ? "icon iconBorder" : "icon"}
          src={icon.src}
          alt=""
          onClick={() => handleClick(icon.name, icon.click)}
        />
      ))}
      <section className="bar">
        {bar.map((icon) => (
          <img className="icon" src={icon.src} alt="" onClick={() => handleClick(icon.name, icon.click)} />
        ))}
      </section>
    </div>
  );
};

export default HomeScreen;
