import { Outlet } from 'react-router-dom';
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return <div id={styles.layout}><Outlet /></div>;
};

export default Layout;
