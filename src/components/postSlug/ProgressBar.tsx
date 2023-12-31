'use client'

import styles from '@/styles/ProgressBar.module.css'
import { useState, useEffect } from 'react';
export default function ProgressBar() {
    const [position, setPosition] = useState(0);
    const [pageHeight, setPageHeight] = useState(0);
    const HeightStatus = (position / pageHeight) * 100;
    function onScroll() {
        setPosition(window.scrollY);
    }

    useEffect(() => {
        setPosition(window.scrollY);

        const updatePageHeight = () => {
            setPageHeight(document.documentElement.scrollHeight - innerHeight);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', updatePageHeight);

        updatePageHeight();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updatePageHeight);
        };

    }, []);
    return (
        <div className={styles.status} style={{ width: `${HeightStatus}%` }}></div>
    )
}