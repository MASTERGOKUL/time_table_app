import { SmallBox } from "./smallBox";
import "./main.css";
function Full() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
           <iframe title="sheet" style={{height:"85vh",width:"100%"}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTR2vDR7_whn6sv9VGVDZmEKaiHUgNpX1OtPIv7-KOq6HGU6uDvVfTzF5cIrgcmA/pubhtml"/>
            <SmallBox color="#FFD6EF" text="Week" flag="true" route="/week"/>
        </div>
    );
}
export default Full;
    
