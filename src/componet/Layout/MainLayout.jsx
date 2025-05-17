import React from 'react';
import Navbar from '../../Home/NaveBar/NaveBar';
import { Outlet } from 'react-router';
import Footer from '../../Home/Footer/Footer';
import { Container } from '@chakra-ui/react';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
             <Container>
             <Outlet />
             </Container>
            
            <Footer />
        </div>
    );
};

export default MainLayout;