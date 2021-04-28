import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './Waves.module.css';

const WavesComponent = () => {
    const subTitles = [
        'Full Stack Developer',
        'Typescript over Javascript',
        'Tabs over Space']
    return (
        <div className={styles.header}>
            <div className={styles.innerHeader}></div>
            <div className={styles.title}>
                <h2>I am,</h2>
                <h1>Sanchit Gupta</h1><br />
                <h3>Full Stack Developer</h3>
            </div>

            <div>
                <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles.parallax}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>

        </div>
    )
}

export default WavesComponent;