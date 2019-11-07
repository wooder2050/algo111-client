import React, { Component } from "react";
import "./ProblemResult.scss";

class ProblemResult extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="problem-result-wrapper">
        <div className="problem-result-box">
          {this.props.problemScore &&
            this.props.problemScore.map((score, i) => {
              return (
                <div className="code-result-context-wrapper" key={i}>
                  <div className="code-result-context-title" data-set={i}>
                    test case {i + 1}
                  </div>
                  <div className="code-result-context" data-set={i}>
                    Expect : {score.expect}
                  </div>
                  <div className="code-result-context" data-set={i}>
                    Your_answer : {score.your_answer}
                  </div>
                  <div className="code-result-context" data-set={i}>
                    Result : {score.result}
                  </div>
                </div>
              );
            })}
            <div className="problem-result-btn">dddd</div>
        </div>
      </div>
    );
  }
}

export default ProblemResult;
