import BContact from "./BContact";
import CCards from "./CCards";
// import BGContact from "./BGContact";
import CForms from "./CForm";
import CLocation from "./CLocation";
import FTop from "./FTop";

function Contact() {
    return(
        <>
        <BContact></BContact>
        <CForms></CForms>
        <CCards></CCards>
        <CLocation></CLocation>
        <FTop></FTop>
       </>
    );
}
export default Contact;