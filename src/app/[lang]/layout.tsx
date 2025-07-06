import { firaCode } from '@/fonts/firaCode';
import { firaSans } from '@/fonts/firaSans';
import classNames from 'classnames';

const LanguageLayout = async ({
  children,
  params: promisedParms
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await promisedParms;

  return (
    <html
      lang={lang}
      className={classNames(firaCode.variable, firaSans.variable)}
    >
      <body>{children}</body>
    </html>
  );
};
export default LanguageLayout;
