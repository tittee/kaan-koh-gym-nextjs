import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';
import TopBar from '../components/topbar';

export default function Layout({ preview, children, menus }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <TopBar />
        <Header menus={menus} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
