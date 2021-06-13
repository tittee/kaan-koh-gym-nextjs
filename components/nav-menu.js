import Link from 'next/link';

const NavMenu = ({ menus, open }) => {
  return (
    <div
      id="menu"
      className={`w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 ${
        !open ? `hidden` : ``
      }`}
    >
      {menus.map((data) => (
        <Link key={data.id} as={`${data.path}`} href="[path]">
          <a
            className="leading-10 px-4 py-4 font-bold uppercase block text-gray-700 hover:text-green-600"
            dangerouslySetInnerHTML={{ __html: data.label }}
          />
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
