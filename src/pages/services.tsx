
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-4">
            <h1 className="text-3xl font-bold">Our Services</h1>
            <p className="text-gray-600">Details about services will go here...</p>
        </main>
        <Footer />
    </div>
);

export default Services;
            