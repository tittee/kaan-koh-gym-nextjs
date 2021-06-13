import React from 'react';
import Link from 'next/link';
import * as dayjs from 'dayjs';
import 'dayjs/locale/th';
import { ArrowRightIcon } from '@heroicons/react/solid';

const Courses = ({ courses }) => {
  return (
    <section className="clear py-16">
      <div className="container">
        <div className="">
          <div className="w-full">
            <div className="mb-6 md:mb-10">
              <h2 className="text-4xl font-bold ">Our Course</h2>
              <div className="h-2 w-24 bg-green-600"></div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
              {courses.map((data) => (
                <article
                  className="w-full relative cursor-pointer"
                  key={data.id}
                >
                  <div className="relative">
                    <Link as={`/course/${data.slug}`} href="/course/[slug]">
                      <img
                        src={data.featuredImage.node.sourceUrl}
                        alt={data.altText}
                        className="w-full md:max-h-44 md:h-44 xl:max-h-60 xl:h-60 object-cover object-center"
                      />
                    </Link>
                    <ul className="absolute top-0 bg-blue-900 px-4 pt-0 pb-2 text-center">
                      <li className="text-white font-bold text-3xl">
                        {dayjs(data.date).format('D')}
                      </li>
                      <li className="text-white">
                        {dayjs(data.date).format('MMM')}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900 p-4">
                    <h4 className="text-white font-medium hover:text-green-900">
                      <Link as={`/course/${data.slug}`} href="/course/[slug]">
                        <a className="text-white hover:text-blue-400 duration-100 text-base uppercase font-bold">
                          {data.title}
                        </a>
                      </Link>
                    </h4>
                    <div className="entry-price">
                      <p className="text-sm text-white">{data.price} THB</p>
                    </div>
                    <div className="mt-4 flex items-center">
                      <Link as={`/course/${data.slug}`} href="/course/[slug]">
                        <a className="text-green-600 hover:text-blue-400 duration-100 font-bold">
                          Read More{' '}
                          <ArrowRightIcon className="w-4 inline-block" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
