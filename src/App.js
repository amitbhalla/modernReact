import { useState } from 'react';

// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

import './App.css';

// const items = [
//   {
//     title: 'What is React?',
//     content:
//       'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
//   },
//   {
//     title: 'How to try React?',
//     content:
//       'React has been designed from the start for gradual adoption, and you can use as little or as much React as you need.',
//   },
//   {
//     title: 'How to add React to a website?',
//     content:
//       'You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.',
//   },
// ];

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Green',
    value: 'green',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='App'>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
}

export default App;
