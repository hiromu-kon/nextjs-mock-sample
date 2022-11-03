import styles from './Card.module.scss';

type Props = {
  link: string;
  heading: string;
  description: string;
};

/**
 * Card
 *
 * @param props.link
 * @param props.heading
 * @param props.description
 * @returns
 */
export const Card = (props: Props) => {
  const { link, heading, description } = props;

  return (
    <a href={link} className={styles.card}>
      <h2>{heading}</h2>
      <p>{description}</p>
    </a>
  );
};
