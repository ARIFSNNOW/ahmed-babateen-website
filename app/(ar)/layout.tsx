import type { ReactNode } from 'react';
import '../globals.css';
import { Header, Footer, Preference } from '../../components/chrome';
import { metadataFor } from '../../lib/metadata';
export const metadata = metadataFor('ar');
export default function RootLayout({children}:{children:ReactNode}) {return <html lang="ar" dir="rtl"><head><link rel="stylesheet" href="/fonts/fonts.css"/><link rel="preload" href="/fonts/tajawal-1.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><Preference locale="ar"/><Header locale="ar"/>{children}<Footer locale="ar"/></body></html>}
