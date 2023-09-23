import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Not Found',
  description: '404 - Page not found',
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen select-none items-center bg-gray-50">
      <div className="container mx-auto flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
        <div className="mx-8 w-full lg:w-1/2">
          <div className="mb-8 text-7xl font-extrabold text-green-500"> 404</div>
          <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
            Sorry! we couldn&apos;t find the page you&apos;re looking for
          </p>

          <a
            href="/"
            className="inline rounded-lg border border-transparent bg-green-600 px-5 py-3 text-sm font-medium leading-5 text-white shadow-2xl transition-all hover:bg-red-700 focus:outline-none active:bg-red-600"
          >
            back to homepage
          </a>
        </div>
        <div className="mx-5 my-12 w-full lg:flex lg:w-1/2 lg:justify-end">
          <Image
            src="/img/404.svg"
            alt="Page not found"
            width={500}
            height={500}
          />
        </div>

      </div>
    </div>
  );
}
