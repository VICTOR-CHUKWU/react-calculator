import React from 'react';
import styles from '../../css-modules/Home.module.css';

const Home = () => (
  <div className={styles.home}>
    <h2>
      Welcome to our page
    </h2>
    <p>
      Most of mathematical activity consists of discovering and proving (by pure reasoning)
      properties of abstract objects. These objects are either abstractions from nature
      (such as a natural number and a line), or (in modern mathematics)
      abstract entities that are defined by their basic properties,
      called axioms. A proof consists of a succession of applications of some deducing rules
      proof is called a theorem. Contrarily to physical laws, the validity of a theorem (its truth)
      does not rely on any experimentation, but only on the correctness of the reasoning (however,
      experimentation is often useful for discovering theorems of interest).

    </p>
    <p>
      Mathematics is widely used in science, for modeling phenomena. This allows extracting
      quantitative predictions from experimental laws. For example the movement of
      can be predicted with a high accuracy from Newton&apos;s law of gravitation with
      mathematical computation. The independence of mathematical truth from any experimentation
      imply that the accuracy of such predictions depends only on the adequacy of the model for
      describing the reality. So, when some inaccurate predictions arise, this means that
      model must be improved or changed, not that mathematics is wrong. For example, the
      perihelion precession of Mercury cannot be explained by Newton&apos;s law of gravitation,
      but is accurately explained by Einstein&apos;s general relativity. This experimental
      validation of Einstein&apos;s theory showed that Newton&apos;s law of gravitation is only
      an approximation (very accurate in everyday life).

    </p>
  </div>
);

export default Home;
