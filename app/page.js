import bg from "@/public/bg.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="mt-44">
      <Image
        src={bg}
        quality={85}
        alt="highway"
        fill
        placeholder="blur"
        className="object-cover h-full"
      />
      <div>
        <h1 className="text-center text-4xl font-bold relative z-10 text-white">
          Car rental in Kyiv
        </h1>
      </div>
    </main>
  );
}
