import img from './Image Carousel.png';

const Home = () => {
    return (
        <div className="home flex">
            <div className="img">
                <img className='carousel' src={img} alt="img Carousel" />
                <div className=" info bg-white rounded-lg flex">
                    <div className='location flex'>
                        <div>
                            <h2>Location</h2>
                            <p className='text-gray-400'>No.3 Yakubu Gowan way.</p>
                            <p className='text-gray-400'>Unguwan Rimi, Kaduna</p>
                        </div>
                        <div className="mt-7 ml-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.383 17.3658C13.8461 16.6437 19 13.7591 19 8.95455C19 5.26429 15.866 2.27274 12 2.27274C8.13401 2.27274 5 5.26429 5 8.95455C5 13.7591 10.1539 16.6437 11.617 17.3658C11.8617 17.4866 12.1383 17.4866 12.383 17.3658ZM12 11.8182C13.6569 11.8182 15 10.5361 15 8.95455C15 7.37301 13.6569 6.09092 12 6.09092C10.3431 6.09092 9 7.37301 9 8.95455C9 10.5361 10.3431 11.8182 12 11.8182Z" fill="#222222" />
                                <path d="M18.0622 16.1136C18.6766 16.549 19 17.0428 19 17.5455C19 18.0481 18.6766 18.5419 18.0622 18.9773C17.4478 19.4126 16.5641 19.7741 15.5 20.0254C14.4359 20.2768 13.2288 20.4091 12 20.4091C10.7712 20.4091 9.56414 20.2768 8.5 20.0254C7.43587 19.7741 6.5522 19.4126 5.93782 18.9773C5.32344 18.542 5 18.0481 5 17.5455C5 17.0428 5.32344 16.549 5.93782 16.1136" stroke="#222222" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>

                    </div>
                    <div className='contact flex'>
                        <div>
                            <h2>Contact</h2>
                            <p className='text-gray-400'>Mon-Fri(8am-5pm)</p>
                            

                            <p className='text-gray-400'>+234(0)7033556688</p>
                        </div>
                        <div className="mt-7 ml-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6.67962 3.32038L7.29289 2.70711C7.68342 2.31658 8.31658 2.31658 8.70711 2.70711L11.2929 5.29289C11.6834 5.68342 11.6834 6.31658 11.2929 6.70711L9.50048 8.49952C9.2016 8.7984 9.1275 9.255 9.31653 9.63307C10.4093 11.8186 12.1814 13.5907 14.3669 14.6835C14.745 14.8725 15.2016 14.7984 15.5005 14.4995L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L21.2929 15.2929C21.6834 15.6834 21.6834 16.3166 21.2929 16.7071L20.6796 17.3204C18.5683 19.4317 15.2257 19.6693 12.837 17.8777L11.6286 16.9714C9.88504 15.6638 8.33622 14.115 7.02857 12.3714L6.12226 11.163C4.33072 8.7743 4.56827 5.43173 6.67962 3.32038Z" fill="#222222" />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
            <div className="news">
                hi
            </div>

        </div>
    );
}

export default Home;