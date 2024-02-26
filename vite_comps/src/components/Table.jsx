import { Fragment } from 'react';

function Table({ data, config, keyFn }) {

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.name}>{column.label}</th>
  });
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return <table>
    <thead className="table-auto border-spacing-2">
      <tr className="border-b-2">
        {renderedHeaders}
      </tr>
    </thead>
    <tbody>
      {renderedRows}
    </tbody>
  </table>
}

export default Table;
