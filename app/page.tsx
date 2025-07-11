'use client';

import { Suspense } from 'react';
import SliderV2 from '@/components/slider/SliderV2';
import TestimonialV2 from '@/components/testimonial/TestimonialV2';
import BlogV2 from '@/components/blog/BlogV2';
import AboutV2 from "@/components/about/AboutV2";
import LatestServiceV2 from "@/components/latestService/LatestServiceV2";
import ProjectV2 from "@/components/project/ProjectV2";
import FaqV2 from "@/components/faq/FaqV2";
import PricingPlansStyleTwo from "@/components/pricingPlans/PricingPlansStyleTwo";
import MarqueeSliderV1 from "@/components/marqueeSlider/MarqueeSliderV1";
import ClientLayout from "@/components/layouts/ClientLayout";
import HeroVideo from "@/components/hero/HeroVideo";
import SliderV3 from '@/components/slider/SliderV3';

export default function HomePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ClientLayout>
                <main>
                    <SliderV2 />
                    <HeroVideo />
                    <SliderV3 />
                    <LatestServiceV2 />
                    <AboutV2 />
                    <ProjectV2 style="project-style-two" partial={true} />
                    <TestimonialV2 />
                    <PricingPlansStyleTwo style="pricing-style-two" />
                    <FaqV2 />
                    <MarqueeSliderV1 />
                    <BlogV2 />
                </main>
            </ClientLayout>
        </Suspense>
    );
}
