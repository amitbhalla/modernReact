import classes from './Spinner.module.css';

const Spinner = (props) => {
  return (
    <div className={`ui segment ${classes.spinner}`}>
      <div className='ui active dimmer'>
        <div className='ui indeterminate text loader'>{props.children}</div>
      </div>
      <p></p>
    </div>
  );
};

export default Spinner;
