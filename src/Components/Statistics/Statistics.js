import React from "react";
import PropTypes from "prop-types";
// import FriendListItem from './FriendListItem';
// import styles from "./Friendlist.module.css";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>Good: {good}</li>
    <li>Neutural: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
);
export default Statistics;
// className={styles.list}
// className={styles.item}
