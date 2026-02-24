import { Space_Grotesk, Montserrat } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '900',
});

export const metadata = {
  title: 'CTRLR.CLUB SYSTEM',
  description: 'An integrated diagnostics and control interface for advanced system management and operational oversight.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${montserrat.variable} font-sans`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
