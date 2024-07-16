import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div>
    <Header />
    <main className="min-h-screen">{children}</main>
    <Footer />
  </div>
);

export default Layout;
