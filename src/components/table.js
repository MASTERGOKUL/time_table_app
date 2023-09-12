import { arr } from "./dailyschedule/dailyschedule";

export function Table() {
  const Periods = [
    "I",
    "II",
    "III",
    "IV",
    "V",
  ];

  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <td>Periods / Days</td>
            {Periods.map((cell, index) => (
              <td id={"td" + index} key={cell.index}>
                {cell}
              </td>
            ))}
          </tr>
          {arr.data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((items, itemIndex) => (
             <>
             <td>{Object.keys(row)}</td>
                {items.map((item, subItemIndex) => (
                  <td key={subItemIndex}>{item}</td>
                ))}
            </>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
