import { useState, useMemo } from "react";
import Button from "../../atoms/Button";

const Datatable = ({ data, columns, config }) => {
  const onPageForward = () => {
    if (config.onPageChange) {
      config.onPageChange(parseInt(config.currentPage) + 1);
    }
  };

  const onPageBackward = () => {
    if (config.onPageChange) {
      config.onPageChange(parseInt(config.currentPage) - 1);
    }
  };

  return (
    <div>
      {data.length === 0 ? (
        <div>No Data</div>
      ) : (
        <table border={1}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {item[column.key] || (column.render && column.render(item))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        <Button
          onClick={onPageBackward}
          isDisabled={config.currentPage === 1}
          label="Previous"
        />
        <Button
          onClick={onPageForward}
          label="Next"
          disabled={data.length === 0}
        />
      </div>
    </div>
  );
};

export default Datatable;
