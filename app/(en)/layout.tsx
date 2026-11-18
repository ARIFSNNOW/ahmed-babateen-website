import type { ReactNode } from 'react';
import '../globals.css';
import { Header, Footer, Preference } from '../../components/chrome';
import { metadataFor } from '../../lib/metadata';
export const metadata = metadataFor('en');
export default function RootLayout({children}:{children:ReactNode}) {return <html lang="en" dir="ltr"><head><link rel="stylesheet" href="/fonts/fonts.css"/><link rel="preload" href="/fonts/jost-3.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><Preference locale="en"/><Header locale="en"/>{children}<Footer locale="en"/></body></html>}
