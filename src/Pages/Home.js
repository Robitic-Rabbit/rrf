@import url('https://fonts.cdnfonts.com/css/space-mono');
@import url('https://fonts.cdnfonts.com/css/russo-one');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

@font-face {
  font-family: "Jura";
  src: url("./fonts/JuraDemiBold.woff2") format("woff2"),
    url("./fonts/JuraDemiBold.woff") format("woff"),
    url("./fonts/JuraDemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jura";
  src: url("./fonts/JuraMedium.woff2") format("woff2"),
    url("./fonts/JuraMedium.woff") format("woff"),
    url("./fonts/JuraMedium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jura";
  src: url("./fonts/JuraBook.woff2") format("woff2"),
    url("./fonts/JuraBook.woff") format("woff"),
    url("./fonts/JuraBook.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jura";
  src: url("./fonts/JuraLight.woff2") format("woff2"),
    url("./fonts/JuraLight.woff") format("woff"),
    url("./fonts/JuraLight.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Archivo";
  src: url("./fonts/Archivo-SemiBold.woff2") format("woff2"),
    url("./fonts/Archivo-SemiBold.woff") format("woff"),
    url("./fonts/Archivo-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Archivo";
  src: url("./fonts/Archivo-SemiBoldItalic.woff2") format("woff2"),
    url("./fonts/Archivo-SemiBoldItalic.woff") format("woff"),
    url("./fonts/Archivo-SemiBoldItalic.ttf") format("truetype");
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Jura";
  src: url("./fonts/RussoOne-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.nft-gridNew {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 4 items per row */
  gap: 10px;
  margin-top: 15px;
  overflow-x: auto;
}

.popup-containerIn--2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.781);
  /* Changed to solid black */
  display: flex;
  justify-content: center;
  align-items: center;
}


.titleR{
  color: #00ff66;
  text-align: center;
  font-size: 24px;
}

/* Add this to your CSS file */
.scanner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  /* Or your preferred background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
}

.checkAccess {
  font-size: 16px;
  cursor: pointer;
}

.checkAccess2 {
  font-size: 14px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.479);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 7px;
  font-weight: normal;
  margin-top: -50px;
  color: white;
}

.scanners {
  width: 90%;
  max-width: 1300px;
  /* Optional: prevents images from becoming too large */
  display: flex;
  justify-content: center;
  align-items: center;
}

.scanner-container {
  transition: opacity 3s ease-out;
}

.fade-out {
  opacity: 0;
  pointer-events: none;
}

.scanners img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.connectNew {
  padding: 10px 20px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Scrollbar Styling */
.nft-overlay::-webkit-scrollbar {
  width: 12px;
  /* Thicker scrollbar */
}

.nft-overlay::-webkit-scrollbar-track {
  background: #1a1a1a;
  /* Darker track background */
  border-radius: 10px;
}

.nft-overlay::-webkit-scrollbar-thumb {
  background: #00ff66;
  /* Green scrollbar */
  border-radius: 10px;
  border: 4px solid #1a1a1a;
  /* Creates spacing */
}

.nft-overlay::-webkit-scrollbar-thumb:hover {
  background: #02e25f;
  /* Lighter green on hover */
}



/* Scrollbar Styling */
.nft-overlay--2::-webkit-scrollbar {
  width: 12px;
  /* Thicker scrollbar */
}

.nft-overlay--2::-webkit-scrollbar-track {
  background: #1a1a1a;
  /* Darker track background */
  border-radius: 10px;
}

.nft-overlay--2::-webkit-scrollbar-thumb {
  background: #00ff66;
  /* Green scrollbar */
  border-radius: 10px;
  border: 4px solid #1a1a1a;
  /* Creates spacing */
}

.nft-overlay--2::-webkit-scrollbar-thumb:hover {
  background: #02e25f;
  /* Lighter green on hover */
}

body,
html {
  font-weight: normal;

  font-family: "Jura" !important;
}

body {
  background-color: #000;
}

:root {
  --btn-theme: #21e786;
  --btn-enter: #fd0000;
  --bg-color: #1c1c1c;
  --btn-orange: #07ac4b;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Archivo" !important;
  font-weight: normal;
}

@media screen and (max-width: 499px) {

  #forPc {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
    background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: center;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .set-image {
    justify-content: center;
    flex-flow: column nowrap;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 100%;
  }

  #box1 {
    margin-bottom: 20px;
  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-top: 50px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 28px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
  }

  /* Inventory Container */
  .inventory-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .inventory-container2 {
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  /* 
  /* Background Image */
  .inventory-image {
    height: auto;
    margin: 5px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  }

  .lineImg {
    width: 100%;
  }

  /* NFT Overlay */
  .nft-overlay--2 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    overflow-x: auto;
    /* Ensures scrolling */
    gap: 12px;
    flex-wrap: nowrap;
    /* Prevents wrapping */
    white-space: nowrap;
    /* Ensures all items are in one line */
    margin-left: 5px;
  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }

  .boxWraper {
    margin-bottom: 70px;
    width: 100%;
  }

  .nft-overlay2 {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 18px;
    margin-bottom: 15px;
  }

  /* NFT Image */
  .nft-image {
    width: 70px;
    height: auto;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }


  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
    width: 90%;
  }

  #popup-img {
    max-width: 100%;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 100%;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}

@media screen and (min-width: 500px) and (max-width: 767px) {

  #forPc {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
    background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: center;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .set-image {
    justify-content: center;
    flex-flow: column nowrap;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 100%;
  }

  #box1 {
    margin-bottom: 20px;
  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-top: 50px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 28px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
  }

  /* Inventory Container */
  .inventory-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .inventory-container2 {
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  /* Background Image */
  .inventory-image {
    height: auto;
    margin: 5px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  }

  .lineImg {
    width: 100%;
  }

  /* NFT Overlay */
  .nft-overlay--2 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    overflow-x: auto;
    /* Ensures scrolling */
    gap: 12px;
    margin-left: 5px;
    flex-wrap: nowrap;
    /* Prevents wrapping */
    white-space: nowrap;
    /* Ensures all items are in one line */
  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }

  .boxWraper {
    margin-bottom: 70px;
    width: 100%;
  }

  .boxWraper2 {
    width: 100%;
    overflow-x: auto;
  }

  .nft-overlay2 {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .nft-overlay {
    display: flex;
    justify-content: flex-start;
    width: 90%;
  }


  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 18px;
    margin-bottom: 15px;

  }

  /* NFT Image */
  .nft-image {
    width: 70px;
    height: auto;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }


  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
    width: 90%;
  }

  #popup-img {
    max-width: 100%;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 100%;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {

  #forPc {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
    background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: center;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .set-image {
    justify-content: center;
    flex-flow: column nowrap;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 90%;
  }

  #box1 {
    margin-bottom: 20px;
  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-top: 50px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 28px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
  }

  /* Inventory Container */
  .inventory-container {
    display: flex;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .inventory-container2 {
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #02e25f 1.5px solid;
    padding: 5px;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  /* 
  /* Background Image */
  .inventory-image {
    height: auto;
    margin: 5px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
  }

  .lineImg {
    width: 100%;
  }

  /* NFT Overlay */
  .nft-overlay--2 {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    overflow-x: auto;
    /* Ensures scrolling */
    gap: 12px;
    flex-wrap: nowrap;
    /* Prevents wrapping */
    white-space: nowrap;
    /* Ensures all items are in one line */
    margin-left: 7px;

  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
  }

  .boxWraper {
    margin-bottom: 70px;
  }

  .nft-overlay2 {
    display: flex;
    justify-content: center;
    width: 90%;
  }

  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 21px;
  }

  /* NFT Image */
  .nft-image {
    width: 70px;
    height: auto;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }

  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
    width: 90%;
  }

  #popup-img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {

  #forMob {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
    background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: left;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }


  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .set-image {
    justify-content: space-between;

  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin-top: 50px;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 28px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
  }

  /* Inventory Container */
  .inventory-container {
    position: relative;
    display: inline-block;
    margin-right: auto;
    margin-left: auto;

  }

  /* Background Image */
  .inventory-image {
    height: auto;
    margin: 5px;
  }

  .nft-overlay {
    position: absolute;
    top: 20%;
    /* Align to the top of inventory-container */
    left: 2%;
    width: 99%;
    height: 80%;
    /* Take full height of the parent */
    overflow-y: auto;
    padding: 10px;
    overflow-x: hidden;
  }

  .showNftsSection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    width: 100px;
    cursor: pointer;
    height: fit-content;
  }

  .nft-overlay2 {
    position: absolute;
    top: 21%;
    left: 4.2%;
    width: 80%;
  }

  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 21px;
  }

  /* NFT Image */
  .nft-image {
    width: 100%;
    height: auto;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }


  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
  }

  #popup-img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1919px) {

  #forMob {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
    background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: left;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }


  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .set-image {
    justify-content: space-between;

  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 35px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
    margin-right: 10px;
  }

  /* Inventory Container */
  .inventory-container {
    position: relative;
    display: inline-block;
    margin-right: 30px;
  }

  /* Background Image */
  .inventory-image {
    width: 100%;
    height: auto;
  }

  .nft-overlay {
    position: absolute;
    top: 20%;
    /* Align to the top of inventory-container */
    left: 2%;
    width: 99%;
    height: 80%;
    /* Take full height of the parent */
    overflow-y: auto;
    padding: 10px;
    overflow-x: hidden;
  }

  .showNftsSection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    width: 100px;
    cursor: pointer;
    height: fit-content;
  }

  .nft-overlay2 {
    position: absolute;
    top: 21%;
    left: 4.2%;
    width: 80%;
  }

  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 21px;
  }

  /* NFT Image */
  .nft-image {
    width: 100%;
    height: auto;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }


  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
  }

  #popup-img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}

@media screen and (min-width: 1920px) {

  #forMob {
    display: none;
  }

  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #00ff75;
    border: 2px solid;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  .refresg-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    /* Use flexbox for centering */
    justify-content: center;
    align-items: center;
    /*background: rgb(48,192,108);
  background: linear-gradient(90deg, rgba(48,192,108,1) 0%, rgba(26,103,59,1) 51%, rgba(0,17,7,1) 100%);*/
    color: rgb(179, 179, 179);
    border: none;
    cursor: pointer;
    width: fit-content;
    font-size: 15px;
    border-radius: 50px;
    width: 100%;
    background-color: transparent;
  }

  .blurred {
    filter: blur(5px);
  }

  .showBtn {
    background-color: transparent;
    border: #00ff75 1px solid;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 400;
    cursor: text;
  }

  .txtR {
    text-align: center;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }

  .load {
    text-align: center;
    color: #00ff75;
    font-weight: 300;
    font-size: 20px;
  }

  .load2 {
    text-align: left;
    color: #b1b1b1;
    font-weight: bold;
    width: 400px;
    font-size: 20px;
  }

  .in-header {
    color: white;
    border-bottom: 2px solid gray;
    padding-bottom: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }


  .Wrpperr {
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .set-image {
    justify-content: space-between;

  }

  .wrapperMain {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  .wrapperMain2 {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  #headerH1 {
    font-size: 35px;
    font-family: "Montserrat", serif;
    font-weight: 500;
  }

  #fontH {
    font-family: "Jura";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
  }

  .logo-section {
    text-align: center;
    margin-top: 50%;
  }

  .logo {
    width: 100%;
  }

  .logo-text {
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
  }

  .nav {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.281);
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }

  .connect {
    background-color: #02e25f;
    color: white;
    width: 150px;
    border: none;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
    margin-top: auto;
    margin-bottom: auto;
    padding: 8px;
  }

  .connect:hover {
    background-color: #009e42;
  }

  .menu-item img {
    width: 25px;
    margin-right: 10px;
  }

  /* Inventory Container */
  .inventory-container {
    position: relative;
    display: inline-block;
    margin-right: 30px;
  }

  /* Background Image */
  .inventory-image {
    width: 100%;
    height: auto;
  }

  .nft-overlay {
    position: absolute;
    top: 20%;
    /* Align to the top of inventory-container */
    left: 2%;
    width: 99%;
    height: 80%;
    /* Take full height of the parent */
    overflow-y: auto;
    padding: 10px;
    overflow-x: hidden;
  }

  .showNftsSection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

  }

  /* NFT Card */
  .nft-card {
    border: 1px solid #ccc;
    padding: 10px;
    background: #ffffff48;
    border-radius: 8px;
    text-align: center;
    width: 100px;
    cursor: pointer;
    height: fit-content;
  }

  .nft-overlay2 {
    position: absolute;
    top: 21%;
    left: 4.2%;
    width: 80%;
  }

  .nft-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 items per row */
    gap: 10px;
    margin-top: 15px;
  }

  .choose {
    color: #00ff75;
    font-size: 16px;
  }

  .choose2 {
    color: #00ff75;
    font-size: 21px;
  }

  /* NFT Image */
  .nft-image {
    width: 100%;
  }

  /* NFT Text */
  .nft-text {
    font-size: 13px;
    margin: 5px 0;
    color: white;
  }

  .popup-containerIn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dd {
    z-index: 7;

  }

  .popup-containerIn2 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.678);
    /* Changed to solid black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .popupIn {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }


  .popupIn2 {
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }



  .popupIn2 {
    padding: 20px;
    padding: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 450px;
    animation: slideIn 0.3s ease-out;
    background: rgba(255, 255, 255, 0.397);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .popupIn h2 {
    margin-top: 0;
    font-size: 35px;
    letter-spacing: 1px;
    color: #ffffff;
    text-align: center;
    font-family: 'American Captain', sans-serif;
  }

  .popupIn img {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
  }

  .listBtn {
    padding: 10px;
    background-color: #04c253;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    transition: 0.2s ease-in-out;
  }

  .listBtn:hover {
    background: #00973f;
  }

  .popup-closeIn {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: #fffdfd;
    font-weight: bold;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin-left: auto;
  }

  .popupInTxt {
    color: white;
    font-size: 18px;
  }

  .successMsg {
    text-align: center;
    color: #00ff75;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  .errorMsg {
    text-align: center;
    color: #ffeded;
    font-weight: 400;
    font-size: 22px;
    margin-top: 10px;
  }

  #checkImg {
    width: 130px;
  }

  .removeSection {
    flex-flow: column nowrap;
    background-color: #2222224d;
    padding: 20px;
    border-radius: 10px;
  }

  .removeSection img {
    width: 30%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
  }

  .removeSection button {
    background-color: #21e786;
    color: rgb(15, 15, 15);
    border: none;
    font-size: 16px;
    transition: 0.2s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .removeSection button:hover {
    background-color: #069751;
  }

  .removeSection button:active {
    background-color: #02e25f;
  }

  .connectNetwork {
    background-color: #069751;
    width: 250px;
    text-align: center;
    display: block;
    border: none;
    color: snow;
    transition: 0.2 ease-in-out;
  }

  .connectNetwork:hover {
    background-color: #07b963;
  }

  .backMsg {
    z-index: 100000;
    position: relative;
    color: white;
  }

  .upgrades {
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 15px;
    cursor: pointer;
    background-color: #02e25f;
    color: black;
    border-radius: 5px;
    padding: 10px;
    width: fit-content;
    transition: 0.2s ease-in-out;
  }

  .ldtxt {
    color: #07b963;
  }

  .traitUpgrade {
    background-color: #00ff75;
    border: none;
    padding: 7px;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    transition: 0.2s ease-in-out;
  }

  .traitUpgrade:hover {
    background-color: #03d163;
  }

  .traitUpgrade:active {
    background-color: #029e4b;
  }

  .traitUpgradeMain {
    background-color: #131313;
    width: 100%;
    justify-content: center;
    display: flex;
  }


  .upgrades:hover {
    background-color: #009e42;
    color: rgb(255, 255, 255);
  }

  .view {
    color: white;
    width: fit-content;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    margin-bottom: 5px;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }

  .view span {
    font-weight: 400;
    margin-top: 3px;
  }

  .view img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }


  .popupImg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.9);
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
  }

  #popup-img {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  #generatedImage {
    max-width: 90%;
    max-height: 80vh;
    border-radius: 8px;
  }

  .popup-closeInImg {
    background: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white;
    align-self: flex-end;
  }
}
