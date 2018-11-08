import React, { Component } from 'react';
import styles from './list.module.css';
import Category from './category';

// 리스트에 있는 아이템 목록 데이타
const Data = [
    {
      products: [
        {id: 1, title: "생수", price: 500},
        {id: 2, title: "콜라", price: 700},
        {id: 3, title: "우유", price: 1000},
      ]
    }
  ]

export default class List extends Component {  

  render() {
    return (
      <div className={styles.wrap}>
        LIST
        <main>{Data.map(Category)}</main>
      </div>
    )
  }
}
