import styles from "./Navbar.module.css";
import { FcDocument } from "react-icons/fc";


export default function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftSide_navbar}>
          <FcDocument
            style={{ marginLeft: "15px", marginTop: "12px" }}
            size={40}
          />
          <div className={styles.navbar_menu}>
            <div className={styles.heading}>Untitled document</div>
            <div className={styles.menu}>
              <p>File</p>
              <p>Edit</p>
              <p>View</p>
              <p>Insert</p>
              <p>Format</p>
              <p>Tool</p>
              <p>Extensions</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        <div className={styles.rightSide_navbar}>
          <span className={styles.icons}  color="grey" class="material-symbols-outlined">comment</span>
          <span className={styles.icons} class="material-symbols-outlined">videocam</span>
          <button className={styles.share_btn}>
            <span class="material-symbols-outlined">lock</span>Share
          </button>
          <img
            className={styles.login_img}
            src="https://tse1.mm.bing.net/th?id=OIP.IZLLSP-RG2LYdFvM_Pl1mQHaHa&pid=Api&P=0&h=180"
          />
        </div>
      </div>
    </>
  );
}