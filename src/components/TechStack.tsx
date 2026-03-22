import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const row1 = ["Python", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "Django", "Jupyter"];
const row2 = ["RAG", "CNN", "ANN", "EDA", "Matplotlib", "Feature Engineering", "SQL", "Google Colab"];

const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack-label">
        <span>MY TECHSTACK</span>
      </div>
      <div className="techstack-marquee">
        <Marquee speed={35} gradient={false} pauseOnHover autoFill>
          {row1.map((name, i) => (
            <div className="tech-pill" key={i}>
              <span className="tech-pill-dot"></span>
              {name}
            </div>
          ))}
        </Marquee>
        <Marquee speed={28} gradient={false} pauseOnHover direction="right" autoFill>
          {row2.map((name, i) => (
            <div className="tech-pill" key={i}>
              <span className="tech-pill-dot"></span>
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
