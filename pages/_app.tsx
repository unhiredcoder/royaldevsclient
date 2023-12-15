import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="container p-2 mx-auto font-sans">
                <NextNProgress color="#4169E1" />
                <Navbar />
                <hr />
                <main className="lg:p-6 pb-52">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
