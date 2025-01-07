import Astyle from "../About/About.module.css";

const About = () => {
    return (
        <div className={Astyle.whole}>
            <div className={Astyle.location}>
                <div><i class="fa fa-map-marker" aria-hidden="true" style={{fontSize:"30px",margin:"1rem"}}></i></div>
                <div style={{margin:"0px"}}>
                    <b>Chennai</b>
                   
                </div>
            </div>
            <div className={Astyle.customer}>
            <i class="fa fa-male" aria-hidden="true" style={{fontSize:"30px",margin:"1rem"}}></i>
                <div>
                    <b>+10000 Statisfied customer</b>
                   
                </div>
            </div>
            <div className={Astyle.customer}>
            <i class="fa fa-building" aria-hidden="true" style={{fontSize:"30px",margin:"1rem"}}></i>
                <div>
                    <b>20 Experience Companny</b>
                   
                </div>
            </div>
        </div>
    );
}
export default About;