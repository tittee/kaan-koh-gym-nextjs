import React from 'react';
import Link from 'next/link';
import * as dayjs from 'dayjs';
import 'dayjs/locale/th';

const Courses = ({ courses }) => {
  return (
    <section className="flat-row flat-news-s2">
      <div className="container">
        <div className="">
          <div className="w-full">
            <div className="title-section title-section center style3">
              <h2>Latest news</h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              {courses.map((data) => (
                <article className="w-full relative" key={data.id}>
                  <div className="relative">
                    <Link as={`/course/${data.slug}`} href="/course/[slug]">
                      <img
                        src={data.featuredImage.node.sourceUrl}
                        alt={data.altText}
                        className="w-full max-h-44 h-44 object-cover object-center"
                      />
                    </Link>
                    <ul className="absolute top-0 bg-green-800 px-4 pt-0 pb-2 text-center">
                      <li className="text-white font-bold text-3xl">
                        {dayjs(data.date).format('D')}
                      </li>
                      <li className="text-white">
                        {dayjs(data.date).format('MMM')}
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-300 p-4 mb-4">
                    <h4 className="text-black font-medium hover:text-green-900">
                      <Link as={`/course/${data.slug}`} href="/course/[slug]">
                        <a className="text-xl uppercase font-bold">
                          {data.title}
                        </a>
                      </Link>
                    </h4>
                    <div className="entry-post">
                      <p>{data.description}</p>
                    </div>
                    <div className="news-button style3">
                      <Link as={`/course/${data.slug}`} href="/course/[slug]">
                        Continue Reading
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
