import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-accent-line"></div>
        <h3 className="title">About Me</h3>
        <p className="para">
          AI/ML enthusiast with hands-on experience in building data-driven
          solutions using Python, TensorFlow, and Scikit-learn. Focused on
          solving real-world problems through machine learning, deep learning,
          and intelligent systems — from predictive analytics to computer
          vision applications.
        </p>
        <div className="about-stats">
          <div className="about-stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Learning</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
