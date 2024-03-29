import '../../styles/styles.scss';

import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { NavBanner } from '../../components/NavBanner';
import { Categories } from '../../components/Categories';


export function Home() {
  return(
    <div>
      <Header />
      <Banner />
      <Categories />
      <NavBanner />
      <Categories />
      <Footer />
    </div>
  )
}