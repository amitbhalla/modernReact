import { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const renderedOptions = options.map((option) => {
    if (option.label === selected.label) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    document.body.addEventListener(
      'click',
      (event) => {
        if (ref.current.contains(event.target)) {
          return;
        } else {
          setOpen(false);
        }
      },
      { capture: true }
    );
  }, []);

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>Select a Color:</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen((oldState) => !oldState)}>
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
