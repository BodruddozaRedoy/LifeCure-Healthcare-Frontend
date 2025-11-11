import Footer from '@/components/common/Footer/Footer';
import Navbar from '@/components/common/Navbar/Navbar';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default CommonLayout;