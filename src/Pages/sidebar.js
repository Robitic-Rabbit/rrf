import { Button } from "react-bootstrap";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Profilesidebar = () => {
// Step 1: Define the state to store the background image URL
const [bgImage, setBgImage] = useState('/images/bgi.jpeg'); // default background
  
// Step 2: Define a function to change the background image
const handleBackgroundChange = (imageUrl) => {
  setBgImage(imageUrl); // Update the background imag
  document.body.style.backgroundImage = imageUrl ? `url(${imageUrl})` : 'none'; // Set background for the body
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}
  useEffect(()=>{
    const tabContainer = document.getElementById("tab-container");
    const handleScroll = event => {
      try{
        const tabContainer = document.getElementById("tab-container");
        const scrollArrow = document.getElementById("scrollArrow");
        const tabs = document.getElementById("side-menu");
        const tabContainerWidth = tabContainer?.offsetWidth;
        const tabsWidth = tabs?.scrollWidth;
            
          const currentScroll = tabContainer?.scrollLeft;
          if (currentScroll + tabContainerWidth < tabsWidth) {
              scrollArrow.style.opacity = "1" 
        
          } else {
            scrollArrow.style.opacity = "0" 
          }
      }catch(e){
        //some error
      };
     
    };

    tabContainer.addEventListener('scroll', handleScroll);

    return () => {
      tabContainer.removeEventListener('scroll', handleScroll);
    };

  },[])
  
  const targetMenuMoveRight = () =>{
    try{
      const tabContainer = document.getElementById("tab-container");
      const tabs = document.getElementById("side-menu");
      const tabContainerWidth = tabContainer?.offsetWidth;
      const tabsWidth = tabs?.scrollWidth;
      const currentScroll = tabContainer.scrollLeft;
      const tabWidth = tabsWidth / tabs.children.length;
      const maxScroll = tabsWidth - tabContainerWidth;
      const scrollAmount = tabWidth; // Adjust the scroll amount as needed
      if (currentScroll + tabContainerWidth < tabsWidth) {
          tabContainer.scrollLeft += scrollAmount;
      }
    }catch(e){
      console.log("some error while scroll");
    }

  }  

  return (
    <section className="profile_side ">
      <div className="position-relative">
      <div className="profile_side_inner tab-container" id="tab-container">
        <ul className="dash_nav" id="side-menu">
                   
          <li id="1" /*onClick={() => handleBackgroundChange('/images/bgi.jpeg')}*/>
            <NavLink to="/inventory">
              <div className="arrow-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M18.6666 2.66699L26.6666 10.667V26.667C26.6666 27.3742 26.3856 28.0525 25.8855 28.5526C25.3854 29.0527 24.7072 29.3337 23.9999 29.3337H7.99992C7.29267 29.3337 6.6144 29.0527 6.1143 28.5526C5.6142 28.0525 5.33325 27.3742 5.33325 26.667V5.33366C5.33325 4.62641 5.6142 3.94814 6.1143 3.44804C6.6144 2.94794 7.29267 2.66699 7.99992 2.66699H18.6666ZM23.9999 26.667V12.0003H17.3333V5.33366H7.99992V26.667H23.9999ZM22.6666 17.3337V25.3337H9.33325L15.9999 18.667L18.6666 21.3337M13.3333 14.0003C13.3333 14.5308 13.1225 15.0395 12.7475 15.4145C12.3724 15.7896 11.8637 16.0003 11.3333 16.0003C10.8028 16.0003 10.2941 15.7896 9.91904 15.4145C9.54397 15.0395 9.33325 14.5308 9.33325 14.0003C9.33325 13.4699 9.54397 12.9612 9.91904 12.5861C10.2941 12.211 10.8028 12.0003 11.3333 12.0003C11.8637 12.0003 12.3724 12.211 12.7475 12.5861C13.1225 12.9612 13.3333 13.4699 13.3333 14.0003Z"
                    fill="white"
                  />
                </svg>
              </div>
              Inventory
            </NavLink>
          </li>

          <li id="2" /*onClick={() => handleBackgroundChange('/images/setting.png')}*/>
            <NavLink to="/account">
              <div className="arrow-right">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5001 27.7669C22.7487 27.7669 28.6251 21.8906 28.6251 14.6419C28.6251 7.39328 22.7487 1.51693 15.5001 1.51693C8.25144 1.51693 2.37508 7.39328 2.37508 14.6419C2.37508 21.8906 8.25144 27.7669 15.5001 27.7669ZM15.5001 29.2253C23.5545 29.2253 30.0834 22.6963 30.0834 14.6419C30.0834 6.58755 23.5545 0.0585938 15.5001 0.0585938C7.44571 0.0585938 0.916748 6.58755 0.916748 14.6419C0.916748 22.6963 7.44571 29.2253 15.5001 29.2253Z"
                    fill="white"
                  />
                  <path
                    d="M6.75 23.1226C6.75 22.3694 7.31292 21.7328 8.0625 21.6497C13.688 21.027 17.3375 21.0831 22.9506 21.6636C23.2309 21.693 23.4966 21.8034 23.7152 21.9814C23.9337 22.1593 24.0958 22.397 24.1814 22.6655C24.2671 22.934 24.2728 23.2217 24.1977 23.4933C24.1226 23.765 23.97 24.0089 23.7585 24.1952C17.1341 29.9695 13.3482 29.89 7.21667 24.2011C6.91771 23.924 6.75 23.5295 6.75 23.1226Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.8757 22.3874C17.307 21.8114 13.7101 21.7574 8.14215 22.3736C7.95887 22.3949 7.7899 22.4831 7.6676 22.6213C7.54531 22.7595 7.47827 22.9379 7.47933 23.1224C7.47933 23.331 7.5661 23.5286 7.71267 23.6656C10.7518 26.4846 13.0545 27.7585 15.3055 27.7665C17.5644 27.7745 19.9911 26.5108 23.2796 23.6452C23.3841 23.5522 23.4593 23.4309 23.4961 23.296C23.5329 23.161 23.5298 23.0183 23.487 22.8852C23.4442 22.752 23.3636 22.6341 23.2551 22.5459C23.1466 22.4577 23.0148 22.4021 22.8757 22.3874ZM7.98246 20.924C13.667 20.2947 17.3698 20.3516 23.0266 20.9371C23.4483 20.9811 23.848 21.1471 24.1768 21.4148C24.5056 21.6825 24.7492 22.0402 24.8778 22.4442C25.0064 22.8482 25.0144 23.2809 24.9009 23.6894C24.7873 24.0979 24.5571 24.4644 24.2385 24.7441C20.9026 27.652 18.1244 29.2357 15.3011 29.2248C12.4697 29.2146 9.81413 27.6039 6.72173 24.7346C6.50032 24.5284 6.32382 24.2787 6.20325 24.0012C6.08268 23.7237 6.02064 23.4243 6.021 23.1217C6.01994 22.578 6.21948 22.0531 6.58141 21.6475C6.94334 21.2418 7.44221 20.9847 7.98246 20.924Z"
                    fill="white"
                  />
                  <path
                    d="M21.3334 11.7249C21.3334 13.272 20.7188 14.7558 19.6249 15.8497C18.5309 16.9437 17.0472 17.5583 15.5001 17.5583C13.953 17.5583 12.4693 16.9437 11.3753 15.8497C10.2813 14.7558 9.66675 13.272 9.66675 11.7249C9.66675 10.1778 10.2813 8.69411 11.3753 7.60014C12.4693 6.50618 13.953 5.8916 15.5001 5.8916C17.0472 5.8916 18.5309 6.50618 19.6249 7.60014C20.7188 8.69411 21.3334 10.1778 21.3334 11.7249Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5001 16.0999C16.6604 16.0999 17.7732 15.639 18.5937 14.8185C19.4141 13.9981 19.8751 12.8853 19.8751 11.7249C19.8751 10.5646 19.4141 9.45181 18.5937 8.63134C17.7732 7.81087 16.6604 7.34993 15.5001 7.34993C14.3398 7.34993 13.227 7.81087 12.4065 8.63134C11.586 9.45181 11.1251 10.5646 11.1251 11.7249C11.1251 12.8853 11.586 13.9981 12.4065 14.8185C13.227 15.639 14.3398 16.0999 15.5001 16.0999ZM15.5001 17.5583C17.0472 17.5583 18.5309 16.9437 19.6249 15.8497C20.7188 14.7558 21.3334 13.272 21.3334 11.7249C21.3334 10.1778 20.7188 8.69411 19.6249 7.60014C18.5309 6.50618 17.0472 5.8916 15.5001 5.8916C13.953 5.8916 12.4693 6.50618 11.3753 7.60014C10.2813 8.69411 9.66675 10.1778 9.66675 11.7249C9.66675 13.272 10.2813 14.7558 11.3753 15.8497C12.4693 16.9437 13.953 17.5583 15.5001 17.5583Z"
                    fill="white"
                  />
                </svg>
              </div>
              Setting
            </NavLink>
          </li>
                      
           <li id="7" /* onClick={() => handleBackgroundChange('/images/bgi1.jpeg')}*/>
          <NavLink to="/play-to-mint">
            <div className="arrow-right">
            
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88c26 9 49.25-9.61 71.27-37c25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16c41.02-14.01 40.44-79.13 21.43-165.04Z"/><circle cx="292" cy="224" r="20" fill="currentColor"/><path fill="currentColor" d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Z"/><circle cx="336" cy="180" r="20" fill="currentColor"/><circle cx="380" cy="224" r="20" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 176v96m48-48h-96"/></svg>
            </div>
            Play to Mint
          </NavLink>
        </li>
         </ul>     
        <div  className="arrow_only_mobile">
               <Button id="scrollArrow" className="arrow_mobile" onClick={targetMenuMoveRight}>
               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#21e786" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
               </Button>
          </div>
      </div>

      </div>
     
     <div className="robo">

     <img src="/images/robo.png" />
     </div>
    </section>
  );
};

export default Profilesidebar;
