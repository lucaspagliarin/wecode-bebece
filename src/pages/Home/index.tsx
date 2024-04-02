import '../../styles/styles.scss';

import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { NavBanner } from '../../components/NavBanner';
import { Categories } from '../../components/Categories';
import { Releases } from '../../components/Releases';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Blog } from '../../components/Blog';
import { NavMenu } from '../../components/NavMenu';


export function Home() {
  const [bagItems, setBagItems] = useState(0);

  function handleAddBagItem() {
    console.log("Hi");
    setBagItems(bagItems+1);
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return(
    <div>
      <Header bagItems={bagItems} handleOpenMenu={handleOpenMenu}/>
      <NavMenu isOpen={isMenuOpen} handleCloseMenu={handleCloseMenu}/>
      <Banner />
      <Categories />
      <NavBanner />
      <Releases handleAddBagItems={handleAddBagItem}/>
      <Blog />
      <Footer />
      <ToastContainer
        className="toast-container"
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  )
}