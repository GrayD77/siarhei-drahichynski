import React, {FC} from 'react';
import LazyImg from "./LazyImg/LazyImg";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const MainPage: FC = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
};

export default MainPage;