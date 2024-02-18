import Image from "next/image";

const TrainingProgram = () => {
  return (
    <section className="service_section layout_padding" id="type">
      <div className="container">
        <div className="heading_container">
          <h2>Training Types</h2>
        </div>
        <div className="service_container">
          <div className="box">
            <Image src="/backhome.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">CROSSFIT TRAINING</h6>
            <div className="link_box">
              <h6>CROSSFIT TRAINING</h6>
            </div>
          </div>
          <div className="box">
            <Image src="/fitness.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">FITNESS</h6>
            <div className="link_box">
              <h6>FITNESS</h6>
            </div>
          </div>
          <div className="box">
            <Image src="/dynamic.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">DYNAMIC STRENGTH TRAINING</h6>
            <div className="link_box">
              <h6>DYNAMIC STRENGTH TRAINING</h6>
            </div>
          </div>
          <div className="box">
            <Image src="/health.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">HEALTH</h6>
            <div className="link_box">
              <h6>HEALTH</h6>
            </div>
          </div>
          <div className="box">
            <Image src="/workout.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">WORKOUT</h6>
            <div className="link_box">
              <h6>WORKOUT</h6>
            </div>
          </div>
          <div className="box">
            <Image src="/strategies.jpg" alt="" width={400} height={300} />
            <h6 className="visible_heading">STRATEGIES</h6>
            <div className="link_box">
              <h6>STRATEGIES</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
