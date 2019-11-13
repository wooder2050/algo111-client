import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import ProblemResult from "./ProblemResult";

configure({ adapter: new Adapter() });

const problemScore = [
  { expect: "17", result: "failure", your_answer: "UNDEFINED" }
];
const finalCode = "function solution(n) ;";
const submitTime = 25;
const closeResultModal = jest.fn();
const returnResultModal = jest.fn();
const btnText = "다음 풀기";

describe("ProblemResult compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <ProblemResult
          problemScore={problemScore}
          finalCode={finalCode}
          submitTime={submitTime}
          closeResultModal={closeResultModal}
          returnResultModal={returnResultModal}
          btnText={btnText}
        />
      </MemoryRouter>
    );
  });
  it("1. calls closeResultModal functions test", () => {
    const closeResultModalBtn = component.find(".problem-result-btn").at(0);
    closeResultModalBtn.simulate("click");
    expect(closeResultModal.mock.calls.length).toBe(1);
  });
  it("2. component code-result-context-text text test", () => {
    const codeResultContextText = component
      .find(".code-result-context-text")
      .at(0);
    expect(codeResultContextText.text()).toBe(problemScore[0].expect);
  });
});
