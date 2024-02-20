import { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };

  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'}
  ];

  // const myFunction = (options, selected) => {
  // if (!selected) {
  //     return 'No Item selected';
  //   } else {
  //     return selected.label;
  //   }
  // }

  return <Dropdown options={options} value={selection} onChange={handleSelection} />
}

export default DropdownPage;
