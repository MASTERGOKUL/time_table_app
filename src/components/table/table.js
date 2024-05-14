export function Table(props) {
  const Periods = ["I", "II", "III", "IV", "V","VI","VII"];
  const arr = props.arr;
  // console.log(arr);
  return (
    <>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td
                key={"preiods_DAYS"}
                style={{ borderRadius: "15px", backgroundColor: "#FCECAA" }}
              >
                Periods / Days
              </td>
              {Periods.map((cell, index) => (
                <td
                  id={"td" + index}
                  key={index}
                  style={{ borderRadius: "15px", backgroundColor: "#FCECAA" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
            {arr.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  key={rowIndex+"_"+row[0]}
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "#FCECAA",
                  }}
                >
                  {row[0]}
                </td>
                {row.slice(1).map((items, itemIndex) => (
                  <>
                    <td
                      key={rowIndex+"_"+itemIndex+"_"+row[0]}
                      style={{
                        borderRadius: "15px",
                        backgroundColor: items.includes("LAB")
                          ? "#FCECAA"
                          : "" || items.includes("AGILE")
                          ? "#FFD6EF"
                          : "" || items.includes("UI")
                          ? "#FFD6EF"
                          : "",
                      }}
                    >
                      {items}
                    </td>
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
