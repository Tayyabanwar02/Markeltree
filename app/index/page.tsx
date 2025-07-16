'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic imports with no SSR for client components
const SliderV2 = dynamic(() => import('@/components/slider/SliderV2'), { ssr: false });
const TestimonialV2 = dynamic(() => import('@/components/testimonial/TestimonialV2'), { ssr: false });
const BlogV2 = dynamic(() => import('@/components/blog/BlogV2'), { ssr: false });
const AboutV2 = dynamic(() => import('@/components/about/AboutV2'), { ssr: false });
const LatestServiceV2 = dynamic(() => import('@/components/latestService/LatestServiceV2'), { ssr: false });
const ProjectV2 = dynamic(() => import('@/components/project/ProjectV2'), { ssr: false });
const FaqV2 = dynamic(() => import('@/components/faq/FaqV2'), { ssr: false });
const PricingPlansStyleTwo = dynamic(() => import('@/components/pricingPlans/PricingPlansStyleTwo'), { ssr: false });
const MarqueeSliderV1 = dynamic(() => import('@/components/marqueeSlider/MarqueeSliderV1'), { ssr: false });
const ClientLayout = dynamic(() => import('@/components/layouts/ClientLayout'), { ssr: false });
const HeroVideo = dynamic(() => import('@/components/hero/HeroVideo'), { ssr: false });
const SliderV3 = dynamic(() => import('@/components/slider/SliderV3'), { ssr: false });

export default function HomePage() {
    return (
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
            <ClientLayout>
                <HeroVideo />
                <SliderV2 />
                <AboutV2 />
                <LatestServiceV2 />
                <ProjectV2 />
                <MarqueeSliderV1 />
                <TestimonialV2 />
                <FaqV2 />
                <PricingPlansStyleTwo />
                <BlogV2 />
            </ClientLayout>
        </Suspense>
    );
}
