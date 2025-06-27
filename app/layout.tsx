import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tanvi Ladva - Backend Developer & Freelancer',
  description: 'Professional portfolio of Tanvi Ladva - Backend Developer specializing in Node.js, MongoDB, and scalable web applications. Based in Surat, Gujarat, India.',
  keywords: 'backend developer, freelancer, Node.js, MongoDB, TypeScript, JavaScript, web developer, Surat',
  authors: [{ name: 'Tanvi Ladva' }],
  creator: 'Tanvi Ladva',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tanviladva.dev',
    title: 'Tanvi Ladva - Backend Developer & Freelancer',
    description: 'Professional portfolio of Tanvi Ladva - Backend Developer specializing in Node.js, MongoDB, and scalable web applications.',
    siteName: 'Tanvi Ladva Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanvi Ladva - Backend Developer & Freelancer',
    description: 'Professional portfolio of Tanvi Ladva - Backend Developer specializing in Node.js, MongoDB, and scalable web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}