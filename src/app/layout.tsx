import type {Metadata} from 'next';
import './globals.css'; // Global styles
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'CTRLRCLUB - Access Protocol',
  description: 'CTRLRCLUB System Initialization Phase 1',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
