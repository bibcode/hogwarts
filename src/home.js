import img from  './Image Carousel.png';

const Home = () => {
    return (
        <div className="home bg-white">
            <img className='carousel bg-white' src={img} alt="img Carousel" />
        </div>
    );
}
 
export default Home;