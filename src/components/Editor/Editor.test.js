import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Editor from "./Editor";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

const checkCode = jest.fn();
const userName = "a";
const scoreCode = jest.fn();
const level = 1;
const stage = 1;
const problem = { input_example1: "24,18" };
const problemCheck = [];
const problemScore = jest.fn();
const submitTime = null;
const storgeTime = null;
const setStorgeTime = jest.fn();
const endTodayModal = jest.fn();

describe("Editor compoment test", () => {
  let time = null;
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Editor
          checkCode={checkCode}
          userName={userName}
          scoreCode={scoreCode}
          level={level}
          stage={stage}
          problem={problem}
          problemCheck={problemCheck}
          problemScore={problemScore}
          submitTime={submitTime}
          time={time}
          storgeTime={storgeTime}
          setStorgeTime={setStorgeTime}
          endTodayModal={endTodayModal}
        />
      </MemoryRouter>
    );
  });
  it("1. calls code-btn-execution functions test", () => {
    const executionBtn = component.find(".code-btn-execution");
    executionBtn.simulate("click");
    expect(checkCode.mock.calls.length).toBe(1);
  });
  it("2. calls setStorgeTime functions test", () => {
    expect(setStorgeTime.mock.calls.length).toBe(2);
  });
  it("3. calls code-btn-result functions test", () => {
    const scoreBtn = component.find(".code-btn-result");
    scoreBtn.simulate("click");
    expect(scoreCode.mock.calls.length).toBe(1);
  });
});
