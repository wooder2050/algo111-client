import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import LevelBtn from "./LevelBtn";

configure({ adapter: new Adapter() });

const key = 0;
const userLevel = 1;
const userStage = 1;
const level = {
  description: "함수의 매개변수",
  level: 1,
  problem: 5,
  problemTitle: [
    "더하기 함수 만들기",
    "곱하기 함수 만들기",
    "짝수판별기",
    "나머지연산 함수",
    "최대공약수 & 최소공배수"
  ],
  title: "함수"
};
describe("LevelBtn compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <LevelBtn
          key={key}
          userLevel={userLevel}
          userStage={userStage}
          level={level}
        />
      </MemoryRouter>
    );
  });
  it("1. component side-problem-level-title text test", () => {
    const sideProblemLevelTitle = component.find(".side-problem-level-title");
    expect(sideProblemLevelTitle.text()).toBe(
      "LEVEL " + level.level + " " + level.title
    );
  });
  it("2. component side-problem-level-info description text test", () => {
    const sideProblemLevelInfo = component
      .find(".side-problem-level-info")
      .at(0);
    expect(sideProblemLevelInfo.text()).toBe(level.description);
  });
});
