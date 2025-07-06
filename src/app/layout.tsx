import { firaCode } from '@/fonts/firaCode';
import { firaSans } from '@/fonts/firaSans';
import '@/styles/index.css';
import classNames from 'classnames';
import { Metadata } from 'next';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={classNames(firaCode.variable, firaSans.variable)}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Murilo Sopi | Portfolio',
  description: 'Portfolio of Murilo Sopi, a software developer.'
};
