'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Photo from '../components/Photo';

export default function Home() {
    const [activePage, setActivePage] = useState('about');

    return (
        <main>
            <Sidebar />
            <div className="main-content">
                <Navbar activePage={activePage} setActivePage={setActivePage} />

                <About isActive={activePage === 'about'} />
                <Resume isActive={activePage === 'resume'} />
                <Photo isActive={activePage === 'photo'} />
                <Contact isActive={activePage === 'contact'} />

            </div>
        </main>
    );
}