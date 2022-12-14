import '@/styles/globals.scss';
import '@/styles/reset.scss';
import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  require('../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
