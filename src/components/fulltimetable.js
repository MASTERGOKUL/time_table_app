import { SmallBox } from "./smallBox";
import "./main.css";
function Full() {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
           <iframe title="sheet" style={{height:"600px",width:"350px"}} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTla-y-T5Mjn-21nkR9kjQYNxlEv4bHPUYkmZaxYh0sZAMk6Ler0aDZlesIYQMu3A/pubhtml#sheet-button-511557881"/>
            <SmallBox color="#FFD6EF" text="Week" flag="true" route="/week"/>
        </div>
    );
}
export default Full;
    
