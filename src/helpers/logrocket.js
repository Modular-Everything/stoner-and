import LogRocket from 'logrocket';

export default function logrocket() {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    LogRocket.init('rpltij/stoner');
  }
}
