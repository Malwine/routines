import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FunctionComponent<PropsWithChildren> = () => {
  return <div><Outlet /></div>;
};

export default Layout;
