import styles from "../styles/AddNew.module.css";
import { Link } from "react-router-dom";


interface Props {
  children: string;
  route?: string;
}

const AddNew = ({ children, route }: Props) => {
  return (
    route ? <Link to={route} className={styles.addNew}><div className={styles.addPlus}>+</div>{children}</Link> 
          : <button className={"foo"}>{children}</button>
    );
  }

export default AddNew;

