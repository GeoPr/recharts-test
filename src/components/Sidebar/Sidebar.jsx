import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <aside
        className={styles.sidebar}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-110%)',
        }}>
        {isOpen && <div className={styles.overflay} onClick={closeMenu}></div>}
        <div className={styles.container}>
          <span className={styles.icon} onClick={closeMenu}>
            &times;
          </span>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li className={styles.item}>
                <NavLink to="/" className={styles.link} onClick={closeMenu}>
                  Line chart
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/barChart"
                  className={styles.link}
                  onClick={closeMenu}>
                  Bar chart
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  to="/pieChart"
                  className={styles.link}
                  onClick={closeMenu}>
                  Pie chart
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <button className={styles['open-button']} onClick={openMenu}>
        Menu
      </button>
    </>
  );
};
