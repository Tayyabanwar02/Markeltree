'use client';

import dynamic from 'next/dynamic';

export const HeroVideo = dynamic(() => import("@/components/hero/HeroVideo"), { ssr: false });
export const FloatingButton = dynamic(() => import("@/components/widgets/FloatingButton"), { ssr: false });
