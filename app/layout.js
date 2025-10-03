 import './globals.css';

import Script from 'next/script';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Sidebar } from 'lucide-react';


export const metadata = {
  title: 'AP&A SYSTEMS',
  description: 'Your digital marketing partner for growth and success',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>

        <Header />
        <Sidebar/>
        {children}
        <Footer />

        {/* Scripts (loaded after page is interactive) */}
        <Script src="/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
        <Script src="/js/swiper-script.js" strategy="afterInteractive" />
        <Script src="/js/submit-form.js" strategy="afterInteractive" />
        <Script src="/js/video_embedded.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
