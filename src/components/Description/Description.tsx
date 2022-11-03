import styles from './Description.module.scss';

type Props = {};

/**
 * Description
 *
 * @param props
 * @returns
 */
export const Description = (props: Props) => {
  const {} = props;

  return (
    <p className={styles.description}>
      Get started by editing <code className={styles.code}>pages/index.tsx</code>
    </p>
  );
};
