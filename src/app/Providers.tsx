'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
      {children}
      <ProgressBar
        height="3px"
        color="#295e8c"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;