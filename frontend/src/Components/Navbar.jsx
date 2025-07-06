import React from 'react';
import {Link} from 'react-router';
import {PlusIcon} from 'lucide-react';

const Navbar = () => {
  return (
<header>
    <div className='bg-[#2F5249] flex justify-between items-center py-3 px-4 sm:py-5 sm:px-6 lg:px-8'>
        <div>
            <div className='text-2xl sm:text-3xl lg:text-4xl font-noto text-white'>
                LeafPad
            </div>
        </div>
        <div className='border-2 border-white rounded-3xl p-2 sm:p-3 bg-[#FFFBDE]'>
            <Link to={"/create"} className='flex items-center gap-2 text-white text-sm sm:text-base hover:bg-transparent '>
                <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span className="hidden sm:inline text-black font-noto">Create a Note</span>
            </Link>
        </div>
    </div>
</header>
  )
}

export default Navbar;