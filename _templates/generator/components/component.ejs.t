---
to: src/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import styles from './<%= h.changeCase.pascal(component_name) %>.module.scss';

type <%= h.changeCase.pascal(component_name) %>Props = {}

/**
 * <%= h.changeCase.pascal(component_name) %>
 */
export const <%= h.changeCase.pascal(component_name) %> = () => {
  return (
    <div className={styles.module}>
      <h1>Hello World</h1>
    </div>
  );
};
