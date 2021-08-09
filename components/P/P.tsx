import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
  return (
    <p className={
      cn(styles.p, className, {
        [styles.p_Ssize]: size == 's',
        [styles.p_Msize]: size == 'm',
        [styles.p_Lsize]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p >
  );
};