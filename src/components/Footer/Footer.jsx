import React from 'react';

import styles from '../../styles.module.css';
import trees from '../../images/trees.svg';

export const Footer = () => {
  return (
    <footer>
      <p>
        <b>Адрес:</b>
        <br />
        г. Пермь, ул. Переездная, 2<br />
        ост. "Балмошная", авт. №18, 32, 36, 77
      </p>
      <hr />
      <p>
        <b>Телефон:</b>
        <br />
        279-00-67, 298-06-15
        <br />
        +7(952)-319-00-67
      </p>
      <hr />
      <p className={styles.copyright}>
        © База по продаже пиломатериалов и погонажа 2020
        <br />
        Все права защищены
      </p>
      <img src={trees} alt='сосны' />
    </footer>
  );
};

export default Footer;
