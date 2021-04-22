import LogRocket from 'logrocket';

export default function logrocket() {
  LogRocket.init('rpltij/stoner');

  LogRocket.identify('d14edf46-190f-4c23-a644-c5939e1f1f80', {
    name: 'Chrish Dunne',
    email: 'hey@chrish.design',
  });
}
