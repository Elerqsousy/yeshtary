import classNames from 'classnames';
import '../styles/shared.scss';

// Primary button types: primary, secondary, light
// Fit property is always true to fit to content width, mark false to fit containers width

const Button = ({
  children,
  onClick,
  className,
  style,
  fit = true,
  type = 'primary',
}) => {
  return (
    <button
      className={classNames(
        'btn',
        {
          'fit-content': fit,
          primary: type === 'primary',
          secondary: type === 'secondary',
          light: type === 'light',
        },
        className
      )}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
