import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Return a cleanup function to remove the event listener
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        // src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
