
    import Link from "next/link";
    
    function Header() { 
        return (  
        <header className="w-full sticky top-0 flex items-center justify-between gap-6 bg-slate-950">
            <h1 className="w-fit rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white shadow-lg shadow-cyan-500/50">
                Tienda Nova
            </h1>
        
       
            <nav className="flex item-center gap-4">                    
        <Link className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700" href="/">Inicio</Link>
        <Link className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700" href="/contacto">Contacto</Link>
        <Link className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700" href="/nosotros">Nosotros</Link>
        <Link className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-semibold text-white hover:bg-blue-700" href="/productos">Productos</Link>
            </nav>
            </header>
           
    )
    }   
    export default Header