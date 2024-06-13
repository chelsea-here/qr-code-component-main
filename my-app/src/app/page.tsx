import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-light content-center min-h-screen min-w-screen m-0 p-0 box-border">
        <div className="flex-col m-auto w-[320px] h-[497px] p-[16px] bg-white rounded-lg">
          <Image
            className="rounded-lg"
            src="/image-qr-code.png"
            alt="qr code"
            width={288}
            height={288}
            priority
          />
          <div className="mt-[24px]">
            <header className="text-heading text-center font-bold">
              Improve your front-end skills by building projects
            </header>
            <p className="text-base text-center font-[400px] pt-[16px] mx-[16px]">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
    </main >
  );
}
