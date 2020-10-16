import React from 'react';

import styles from '../../styles.module.css';
import hamburger from '../../images/hamburger.svg';
import logo from '../../images/logo.png';

export const Header = ({ isNavOpen, openCloseNav }) => {
  return (
    <>
      <header>
        <div className={styles.header}>
          <button className={styles.menuBtn} onClick={() => openCloseNav()}>
            <img src={hamburger} alt='иконка главного меню' />
          </button>
          <img className={styles.logo} src={logo} alt='логотип' />
          <h1>
            <strong>по продаже</strong>
            <br />
            <br />
            <b className={styles.rus}>
              пиломатериалов
              <br />и погонажа
            </b>
          </h1>
        </div>
      </header>
      <nav style={{ transform: isNavOpen && 'translateX(0)' }}>
        <ul>
          <hr />
          <li onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              Главная
            </a>
          </li>
          <hr />
          <li onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              О компании
            </a>
          </li>
          <hr />
          <li onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              Услуги
            </a>
          </li>
          <hr />
          <li onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              Прайс-лист
            </a>
          </li>
          <hr />
          <li onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              % Скидки
            </a>
          </li>
          <hr />
          <li className={styles.lastMenuItem} onClick={() => openCloseNav()}>
            <a className={styles.menuLink} href='#'>
              Контакты
            </a>
          </li>
          <hr />
        </ul>
      </nav>
    </>
  );
};

export default Header;
