export function Table(){
    const data=[
        [ "Periods/Days", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday" ],
        ["I", "Maths for machine learining ", "English", "Science", "History","Maths for machine learining ", "English" ],
        ["II", "Math adf ", "English", "Science", "History","Maths for machine learining ", "English" ],
        ["III", "Mathas fasdf ", "English", "Science", "History","Maths for machine learining ", "English" ],
        ["IV", "Math asfa", "English", "Science", "History","Maths for machine learining ", "English" ]
    ]
    return(
        <div className="table">
            <table>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.index}>
                            {row.map((cell, index2) => (
                                <td id={"td"+index+index2} key={cell.index2}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}