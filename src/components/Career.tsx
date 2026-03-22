import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary | PCM</h4>
                <h5>Pantnagar Inter College | UK Board</h5>
              </div>
              <h3>2016 - 2020</h3>
            </div>
            <p>
              Completed senior secondary education with a focus on Physics,
              Chemistry, and Mathematics, building a strong analytical and
              problem-solving foundation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science & Engg.</h4>
                <h5>Govt. Polytechnic Sult Almora</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Gained hands-on technical skills in programming, data structures,
              and computer fundamentals through a comprehensive diploma program
              in Computer Science.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Artificial Intelligence & ML</h4>
                <h5>VMSBU Technical University</h5>
              </div>
              <h3>2022 - 2025</h3>
            </div>
            <p>
              Pursuing a B.Tech in AI & Machine Learning, working
              on real-world projects involving deep learning, computer vision,
              and predictive analytics using Python and TensorFlow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
