import { SmallBox } from "./smallBox";
import "./main.css";
function Full() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <iframe
        title="sheet"
        style={{ height: "90vh", width: "100%" }}
        // src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTR2vDR7_whn6sv9VGVDZmEKaiHUgNpX1OtPIv7-KOq6HGU6uDvVfTzF5cIrgcmA/pubhtml"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vROmZZaOnEERg1OPPCpqN9ntMmIDGsxF6ixYPtHsCAckb_I7e1iQ9ZyvX4b9e4Eyw/pubhtml"
      />
      <div id="full-route">
        <SmallBox color="#FFD6EF" text="Week" flag="true" route="/week" />
        <SmallBox color="#FFD6EF" text="Today" flag="true" route="/" />
      </div>
    </div>
  );
}
export default Full;
