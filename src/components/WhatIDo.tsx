import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-header">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="bento-grid">
        {/* ML & AI Card */}
        <div className="bento-card bento-glow">
          <div className="bento-content">
            <h3>MACHINE LEARNING & AI</h3>
            <h4>Building Intelligent Systems</h4>
            <p>
              Developing data-driven solutions with supervised & unsupervised
              learning, deep neural networks, and computer vision. From
              predictive models to image generation AI and RAG pipelines.
            </p>
            
            <div className="bento-skills">
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">RAG</div>
                <div className="what-tags">AI</div>
                <div className="what-tags">CNN</div>
                <div className="what-tags">OpenCV</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">EDA</div>
                <div className="what-tags">Feature Engineering</div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Dev Card */}
        <div className="bento-card bento-glow">
          <div className="bento-content">
            <h3>WEB DEVELOPMENT</h3>
            <h4>Full Stack Web Applications</h4>
            <p>
              Building dynamic web applications with Django and Python.
              From user authentication to database management, delivering
              complete full-stack solutions.
            </p>

            <div className="bento-skills">
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Django</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">SQL</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">VS Code</div>
                <div className="what-tags">Jupyter Notebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
