import img from './School logo.png'

const Navbar = () => {
    return (
        <div className="main sm:text-xs">
                <div className="logo flex">
                   <img src={img} alt="logo" />
                   <div className='m-3'>
                   <h1 className='bold text-black'>HOGWARTS</h1>
                   <h2>international</h2>
                   </div> 
                </div>
              
                    <ul className='flex m-5 cursor-pointer'>
                        <li className='bold text-zinc-950'>HOME</li>
                        <li className='ml-10'>CONTACT</li>
                        <li className='ml-10'>NEWS</li>
                        <li className='ml-10'>ABOUT</li>
                    </ul>
                  
                <button className='bg-black w-20 h-10 text-white rounded-lg border-none'>LOGIN</button>          
        </div>
    );
}

export default Navbar;