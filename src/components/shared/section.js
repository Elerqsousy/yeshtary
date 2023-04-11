import classNames from 'classnames';
import '../styles/shared.scss';

const Section = ({ children, title, className, subtitle = '' }) => {
  return (
    <div className={classNames('page-section-container', className)}>
      <h2 className='section-title'>{title}</h2>
      {subtitle && <p className='section-subtitle'>{subtitle}</p>}
      {children}
    </div>
  );
};

export default Section;
