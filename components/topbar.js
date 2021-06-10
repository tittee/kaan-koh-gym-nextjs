import Link from 'next/link';

export default function TopBar() {
  return (
    <>
      <div className="relative bg-blue-900">
        <div className="container mx-auto ">
          <div className="w-full">
            <div className="flex text-white justify-between items-center">
              <ul className="text-xs">
                <li className="inline-block mr-4">
                  Call us: <Link href="+61383766284">+61 3 8376 6284</Link>
                </li>
                <li className="inline-block">
                  Email:{' '}
                  <Link href="mailto:support24-7@gmail.com">
                    support24-7@gmail.com
                  </Link>
                </li>
              </ul>
              <div className="text-xs flex items-center">
                <Link href="#">
                  <a className="mr-4">Have any questions?</a>
                </Link>
                <Link href="#">
                  <a className=" bg-green-600 py-5 px-4 text-black">
                    GET AN APPOINTMENT
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
