import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.AppHeader}>
        <h1>Feedback!</h1>
        <h4>
          <i>Don't forget it!</i>
        </h4>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
