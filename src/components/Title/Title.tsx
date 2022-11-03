import styles from './Title.module.scss';

type Props = {};

/**
 * Title
 *
 * @param props
 * @returns
 */
export const Title = (props: Props) => {
  const {} = props;

  return (
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  );
};
