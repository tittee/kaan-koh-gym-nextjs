import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = ({ menus }) => {
  console.log(menus);

  return (
    <div id="header" className="header bg-color">
      <div className="container mx-auto ">
        <div className="">
          <div className="header-wrap flex items-center justify-between">
            <div className="w-1/5">
              <div id="logo" className="logo">
                <Link href="/">
                  <a className="text-2xl md:text-3xl font-bold uppercase tracking-tighter leading-tight md:pr-8">
                    Muai Thai Gym
                  </a>
                </Link>
              </div>
              {/* logo*/}
            </div>
            {/* .col-md-2  */}
            <div className="w-4/5 md:text-right">
              {/* <!-- /.flat-show-search -->*/}
              <div className="nav-wrap">
                <div className="btn-menu">
                  <span></span>
                </div>
                {/* <!-- //mobile menu button -->*/}
                <nav id="mainnav" className="mainnav">
                  <ul className="menu block">
                    {menus.map((data) => (
                      <li key={data.id} className="inline-block">
                        <Link as={`${data.path}`} href="[path]">
                          <a
                            className="leading-10 px-4 py-4 font-bold uppercase block text-gray-700 hover:text-green-600"
                            dangerouslySetInnerHTML={{ __html: data.label }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* <!-- /.menu -->*/}
                </nav>
                {/* <!-- /#mainnav -->*/}
              </div>
              {/* <!-- /.nav-wrap --> */}
            </div>
            {/* <!-- /.col-md-9 --> */}
          </div>
          {/* <!-- /.header-wrap --> */}
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
    // {/* <!-- /header --> */}
  );
};

export default Header;
