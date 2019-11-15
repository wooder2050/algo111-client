import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Problem from "./Problem";

configure({ adapter: new Adapter() });

const routrProps = {
  match: {
    params: { level: "1", stage: "1" }
  }
};
const userName = "a";
const userStage = "1";
const checkCode = jest.fn();
const scoreCode = jest.fn();
const problemOnLoad = jest.fn();
const closeSideProblemModal = jest.fn();
const problemInfo = {
  problem: {
    Limitations: ["입력 숫자는.."],
    description: "안녕하세요",
    initialValue: "초깃값은...",
    input_example1: "1, 3",
    input_example2: "124, 35",
    kinds: "기본",
    level: "1",
    notice: "매개변수가 두 개 입니다.",
    output_example1: "4",
    output_example2: "159",
    parmasNumber: "2",
    problemNumber: 11,
    stage: "1",
    tests: [{ code: "solution(10, 7)", solution: "17" }],
    title: "더하기 함수 만들기",
    successPeople: []
  }
};
const problemCheck = null;
const problemScore = null;
const submitTime = null;
const storgeTime = 0;
const setStorgeTime = jest.fn();
const endTodayModal = jest.fn();
const enterProblemModal = true;
const onClickNoticeProblemModal = jest.fn();
const problemChance = 5;
const onLoadNoticeInfo = jest.fn();

describe("Problem compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Problem
          routrProps={routrProps}
          userName={userName}
          userStage={userStage}
          checkCode={checkCode}
          scoreCode={scoreCode}
          problemOnLoad={problemOnLoad}
          closeSideProblemModal={closeSideProblemModal}
          problemInfo={problemInfo}
          problemCheck={problemCheck}
          problemScore={problemScore}
          submitTime={submitTime}
          storgeTime={storgeTime}
          setStorgeTime={setStorgeTime}
          endTodayModal={endTodayModal}
          enterProblemModal={enterProblemModal}
          onClickNoticeProblemModal={onClickNoticeProblemModal}
          problemChance={problemChance}
          onLoadNoticeInfo={onLoadNoticeInfo}
        />
      </MemoryRouter>
    );
  });
  it("1. calls closeSideProblemModal functions test", () => {
    const closeSideProblemModalBtn = component.find(".problem-wrapper");
    closeSideProblemModalBtn.simulate("click");
    expect(closeSideProblemModal.mock.calls.length).toBe(1);
  });
  it("2. component problem-title-main text test", () => {
    const problemTitleMain = component.find(".problem-title-main");
    expect(problemTitleMain.text()).toBe(problemInfo.problem.title);
  });
  it("3. component problem-title-level text test", () => {
    const problemTitleLevel = component.find(".problem-title-level");
    expect(problemTitleLevel.text()).toBe(
      "LEVEL " + routrProps.match.params.level
    );
  });
  it("4. component problem-info-description text test", () => {
    const problemTitleDescription = component
      .find(".problem-info-description")
      .at(0);
    expect(problemTitleDescription.text()).toBe(
      problemInfo.problem.description
    );
  });
  it("5. component problem-info-description2 text test", () => {
    const problemTitleDescription = component
      .find(".problem-info-description")
      .at(2);
    expect(problemTitleDescription.text()).toBe(
      problemInfo.problem.input_example1
    );
  });
});
