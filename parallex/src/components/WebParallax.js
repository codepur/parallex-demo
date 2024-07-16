"use client"
import React from 'react';
import FeatureBox from './FeatureBox';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

export default function WebParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })


    const features = [
        {
            title: 'Broadcast Same-Day Availability',
            description: 'Turn unified slots on your calendar into a steady stream of referrals',
            color: '#17813C',
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/"
        },
        {
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            title: 'Showcase Innovative Treatments',
            description: 'Highlight investments in technology & treatments to attract more referrals.',
            color: '#075DC1'
        },
        {
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            title: 'Up-To-Date Insurance Information',
            description: 'Display your accepted insurances in real-time, making it more convenient than ever for offices to send referrals.',
            color: '#023F88'
        },
        {
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            title: 'Nationwide Network',
            description: 'Connect with dentists across the country, allowing you to receive referrals even from out-of-state practitioners.',
            color: '#7959F5'
        },
        {
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            title: 'Patient Self- Referrals',
            description: 'Showcase your availability to patients who need a specialist within their insurance network and nearby.',
            color: '#F4A84F'
        },
        {
            src: "imagedum.png",
            link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
            title: 'Referral Analytics',
            description: 'Track and analyze your referral sources to understand trends and optimize your referral strategy.',
            color: '#17813C'
        }
    ];


    return (

        <>
            <main ref={container} className='main'>
                {
                    features.map((project, i) => {
                        const targetScale = 1 - ((features.length - i) * 0.05);
                        return <FeatureBox key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
                    })
                }
            </main>
        </>
    )
}