
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SNSFeed from '../components/SNSFeed';

const Home = () => (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <Hero />
            <div className="p-4">
                <SNSFeed />
            </div>
        </main>
        <Footer />
    </div>
);

export default Home;
            