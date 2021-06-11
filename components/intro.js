import { CMS_NAME } from '../lib/constants';
import Link from 'next/link';

export default function Intro() {
  return (
    <section
      className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
      style={{
        backgroundImage: `url('https://picsum.photos/id/45/2000/1600')`,
      }}
    >
      <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
        <div className="mx-2 text-center">
          <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
            <span className="text-white">{CMS_NAME}</span>
          </h1>
          <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Get a <span className="text-white">Better</span> and{' '}
            <span className="text-white">Professionals</span> Design
          </h2>
          <div className="inline-flex">
            <Link href="/">
              <a
                href="#about"
                className="py-4 px-6 my-5 mx-2 bg-transparent bg-green-600 bg-opacity-75 hover:bg-opacity-100 hover:border-indigo-800 text-black text-base shadow-md transition duration-500"
              >
                Find Trainer
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
