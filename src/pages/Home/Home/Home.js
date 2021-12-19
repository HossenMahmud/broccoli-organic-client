import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Discount from '../Discount/Discount';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Discount></Discount>
            <HomeProducts></HomeProducts>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    );
};

export default Home;