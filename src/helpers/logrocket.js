import LogRocket from 'logrocket';

export default function logrocket() {
  const isProd = process.env.NODE_ENV === 'production';
  const isPreview =
    typeof window !== 'undefined' && window.location.host.includes('preview');

  if (isProd || isPreview) {
    LogRocket.init('rpltij/stoner');
  }
}
