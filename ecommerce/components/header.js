'use client'
import Image from 'next/image';
import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const paginasHeader = [
    { nome: "Cabos", href: "/cabos" },
    { nome: "Conectores", href: "/conectores" },
    { nome: "Ferramentas", href: "/ferramentas" },
    { nome: "Fios", href: "/fios" },
    { nome: "Iluminação", href: "/iluminacao" },
    { nome: "Tomadas", href: "/tomadas" }
]

export default function Header() {

    const pathname = usePathname();

  return (
    <>
    <div className="bg-[#F5F5F5] min-h-[9vh] flex flex-row items-center justify-center gap-35 text-gray-800">
        <Link href="/">
            <Image src="/LOGO-SEM-BG.png" alt="Logo" width={80} height={10} priority className=""/>
        </Link>
       
        <div className="flex flex-row items-center justify-between gap-8">
            { paginasHeader.map(pagina => {
                const isActive = pathname === pagina.href;
                return (
                <Link key={pagina.nome} href={pagina.href} 
                    className={`text-base font-medium 
                        ${isActive ? 'text-yellow-500 font-semibold' 
                                   : 'hover:text-yellow-500 text-gray-800'}`}>
                    {pagina.nome}
                </Link>
            )})}
        </div>

        <Link href="/cart" className="hover:text-yellow-500 transition-colors">
            <BsCart size={24}/>
        </Link>
    </div>
    </>
  );
}