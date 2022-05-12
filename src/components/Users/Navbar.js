import Link from "react-router-dom"

const Navbar = () => {

    <nav class="relative container mx-auto p-6">
        <div class="flex items-center justify-between">
            <div class=" pt-2 ml-6">
                <img height={200} width={200} src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/034/101/original/undraw_handcrafts_tree.png?1652343659" alt="tree" />
                <h1 class="font-sans">The Community Project</h1>
            </div>

            <div class="hidden space-x-6 md:flex md:w-3/4 md:justify-start">
                <Link to='/login'>Login</Link>
                <Link to='/about'>About</Link>
                <Link to='/community'>Meet People</Link>
                <Link to=''>Read our blog</Link>
                <Link to=''>Write for us</Link>
                <Link to='/register'>Register</Link>
            </div>

            {/* hamburger menu */}
            <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
        </div>
        {/* mobile menu */}
        <div class="md:hidden">
            <div id="menu" class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <Link to='/login'>Login</Link>
                <Link to='/about'>About</Link>
                <Link to='/community'>Meet People</Link>
                <Link to=''>Read our blog</Link>
                <Link to=''>Write for us</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    </nav>
}
export default Navbar