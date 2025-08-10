import Image from 'next/image';

export default function Home() {
  return (
    <>
    
    <div className="min-h-[50vh] bg-gray-300 relative">
      <Image src="/bg-home.jpg" alt="bg-home" fill priority className="object-cover"/>

    </div>

    </>
  );
}
