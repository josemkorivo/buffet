/**
 *
 * Table
 *
 */

import React from 'react';
import {
  commonDefaultProps,
  commonPropTypes,
} from '../../commonPropTypes/table';

import StyledTable from '../../styled/Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableRowEmpty from '../../styled/TableRowEmpty';

function Table({ checkEnabled, items, customRowComponent }) {
  console.log(items);

  return (
    <StyledTable>
      <table>
        <TableHeader cells={items} checkEnabled={checkEnabled} />
        {/* <thead>
          {items.map(item => {
            <TableRow
              checkEnabled={checkEnabled}
              cells={item}
              key={JSON.stringify(item)}
            />;
          })}
        </thead> */}

        <tbody>
          {items.length > 0 ? (
            items.map(item =>
              customRowComponent ? (
                <React.Fragment key={JSON.stringify(item)}>
                  {customRowComponent(item)}
                </React.Fragment>
              ) : (
                <TableRow cells={item} key={JSON.stringify(item)} />
              ),
            )
          ) : (
            <TableRowEmpty />
          )}
        </tbody>
      </table>
    </StyledTable>
  );
}

Table.defaultProps = {
  ...commonDefaultProps,
};

Table.propTypes = {
  ...commonPropTypes,
};

export default Table;
