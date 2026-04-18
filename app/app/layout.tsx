import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Clienta MVP',
  description: 'AI lead automation MVP'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
