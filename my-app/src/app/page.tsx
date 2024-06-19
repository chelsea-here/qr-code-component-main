import Image from "next/image";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Mentor QR challenge',
  description: 'My solution to Frontend Mentors QR challenge',
  keywords: ['HTML, CSS, JavaScript, NextJS, Tailwindcss, React'],
  creator: 'Chelsea Anne Livingston Cruz'
}

export default function Home() {
  return (
    <main className="bg-gray-light content-center min-h-screen">
      <div className="flex flex-col p-4 mx-auto w-[20rem] bg-white rounded-lg">
        <a href="https:///www.frontendmentor.io/home">
          <Image
            className="mx-auto rounded-lg"
            src="/image-qr-code.png"
            alt="This graphic is a QR code, click graphic to redirect to <https://www.frontendmentor.io/home>"
            width={288}
            height={288}
            priority
          />
        </a>
        <div className="my-6">
          <h1 className="text-md text-blue-dark leading-7 text-center align-text-top font-bold mb-4">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-sm mx-4 leading-5 text-center text-blue-gray">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </main >
  );
}
