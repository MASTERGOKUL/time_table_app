export function Table(props) {
  const Periods = ["I", "II", "III", "IV", "V"];
  const arr = props.arr;
  return (
    <>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td
                key={"preiods/DAYS"}
                style={{ borderRadius: "15px", backgroundColor: "#FCECAA" }}
              >
                Periods / Days
              </td>
              {Periods.map((cell, index) => (
                <td
                  id={"td" + index}
                  key={cell + "-" + index}
                  style={{ borderRadius: "15px", backgroundColor: "#FCECAA" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            {arr.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((items, itemIndex) => (
                  <>
                    <td
                      key={itemIndex}
                      style={{
                        borderRadius: "15px",
                        backgroundColor: "#FCECAA",
                      }}
                    >
                      {Object.keys(row)}
                    </td>
                    {items.map((item, index) => (
                      <td
                        key={index}
                        style={{
                          borderRadius: "15px",
                          backgroundColor: item.includes("LAB") ? "#FCECAA": "" || item.includes("AGILE") ? "#FFD6EF":"" || item.includes("UI") ? "#FFD6EF":"" 
                        }}
                      >
                        {item}
                      </td>
                    ))}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
