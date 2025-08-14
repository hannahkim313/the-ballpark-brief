import { Source_Sans_3 } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body className="grid min-h-full grid-rows-[auto_1fr_auto]">
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
