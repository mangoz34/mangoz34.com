import { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
        <body>
        <main>
            {
                /* page.tsx content area */
            }
            {children}
        </main>
        </body>
        </html>
    );
}