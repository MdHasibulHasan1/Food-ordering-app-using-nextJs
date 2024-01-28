import Link from "next/link";

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between">
                <Link className="text-primary font-semibold text-2xl" href={'/'}>
                     ST PIZZA
                </Link>
                <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/menu"}>Menu</Link>
                    <Link href={'/#about'}>About</Link>
                    <Link href={'/#contact'}>Contact</Link>
                    <Link href={"/login"} className="bg-orange-500 rounded-full text-white px-8">Login</Link>
                </nav>
            </header>
        </>
    );
};

export default Header;