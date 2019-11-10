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
                    Expect : <strong>{score.expect}</strong>
                  </div>
                  <div className="code-result-context" data-set={i}>
                    Your_answer : <strong>{score.your_answer}</strong>
                  </div>
                  {score.result === " failure" ? (
                    <div className="code-result-context" data-set={i}>
                      Result : <strong className="blue">{score.result}</strong>
                    </div>
                  ) : (
                    <div className="code-result-context" data-set={i}>
                      Result : <strong className="red">{score.result}</strong>
                    </div>
                  )}
                </div>
              );
            })}
          <div className="code-result-context-wrapper">
            <div className="code-result-context">
              Time :{" "}
              <strong>
                {Math.floor(this.props.submitTime / 60)} 분
                {this.props.submitTime % 60} 초
              </strong>
            </div>
            <div className="code-result-context">
              code : <strong>{this.props.finalCode}</strong>
            </div>
          </div>
          <div
            onClick={this.props.closeResultModad}
            className="problem-result-btn"
          >
            dddd
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemResult;
