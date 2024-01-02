import img from './School logo.png'

const Navbar = () => {
    return (
        <div className="main text-sm">
                <div className="logo flex bg-white mr-10">
                   <img className='bg-white' src={img} alt="logo" />
                   <div className='m-3'>
                   <h1 className='bold text-black bg-white '>HOGWARTS</h1>
                   <h2 className='bg-white'>international</h2>
                   </div> 
                </div>
                <div className='bg-white flex '>
                <ul className='flex m-5 cursor-pointer bg-white mr-10'>
                        <li className='bold text-zinc-950 bg-white'>HOME</li>
                        <li className='ml-10 bg-white'>CONTACT</li>
                        <li className='ml-10 bg-white'>NEWS</li>
                        <li className='ml-10 bg-white'>ABOUT</li>
                    </ul>
                <button className='bg-black w-20 h-10 text-white rounded-lg border-none'>LOGIN</button>          
                </div>      
        </div>
    );
}

export default Navbar;