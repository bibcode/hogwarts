import img from './School logo.png'

const Navbar = () => {
    return (
        <div className="main text-sm">
                <div className="logo flex  mr-10">
                   <img className='' src={img} alt="logo" />
                   <div className='m-3'>
                   <h1 className='bold text-black  '>HOGWARTS</h1>
                   <h2 className='inter'>international</h2>
                   </div> 
                </div>
                <div className=' flex '>
                <ul className='flex m-5 cursor-pointer  mr-10'>
                        <li className='bold text-zinc-950 '>HOME</li>
                        <li className='ml-10 '>CONTACT</li>
                        <li className='ml-10 '>NEWS</li>
                        <li className='ml-10 '>ABOUT</li>
                    </ul>
                <button className='bg-black w-20 h-10 text-white rounded-lg border-none mt-3'>LOGIN</button>          
                </div>      
        </div>
    );
}

export default Navbar;