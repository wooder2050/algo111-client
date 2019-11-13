import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

configure({ adapter: new Adapter() });

class Auth {
  constructor() {
    this.foo = "bar";
  }
  signOut = jest.fn();
}

const auth = new Auth();
const onLoad = jest.fn();
const authenticated = true;
const userName = "a";
const userPictureUrl = "wwww.ab.com";
const clickSideModal = jest.fn();
const clickSideProblemModal = jest.fn();
const sideModal = false;
const problemModal = false;
const onLoadProblem = jest.fn();
const problemAll = [
  {
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
];
const popularProblem = [
  {
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
];
const popularProblemNumber = 1;
const closeSideProblemModal = jest.fn();
const userAll = [
  {
    lastDate: 13,
    lastMonth: 10,
    level: "1",
    name: "강재영",
    picture: "https://lh3.goo",
    point: 100,
    stage: "1",
    todayAuthority: true
  }
];

describe("Home compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Home
          auth={auth}
          onLoad={onLoad}
          authenticated={authenticated}
          userName={userName}
          userPictureUrl={userPictureUrl}
          clickSideModal={clickSideModal}
          clickSideProblemModal={clickSideProblemModal}
          sideModal={sideModal}
          problemModal={problemModal}
          onLoadProblem={onLoadProblem}
          problemAll={problemAll}
          popularProblem={popularProblem}
          popularProblemNumber={popularProblemNumber}
          closeSideProblemModal={closeSideProblemModal}
          userAll={userAll}
        />
      </MemoryRouter>
    );
  });
  it("1. calls closeSideProblemModal functions test", () => {
    const closeSideProblemModalBtn = component.find(".home-main");
    closeSideProblemModalBtn.simulate("click");
    expect(closeSideProblemModal.mock.calls.length).toBe(1);
  });
  it("2. component popular-problem-title text test", () => {
    const popularProblemTitle = component.find(".popularProblem-problem-title");
    expect(popularProblemTitle.text()).toBe(popularProblem[0].title);
  });
  it("3. component popular-problem-level text test", () => {
    const popularProblemLevel = component.find(".popularProblem-problem-level");
    expect(popularProblemLevel.text()).toBe(
      "Level " + popularProblem[0].level + " - " + popularProblem[0].stage
    );
  });
  it("4. component popular-problem-number text test", () => {
    const popularProblemNumberEL = component
      .find(".popularProblem-problem-number")
      .at(0);
    expect(popularProblemNumberEL.text()).toBe(
      popularProblemNumber + "명 도전 중!"
    );
  });
  it("5. component popular-problem-successPeople text test", () => {
    const popularProblemSuccessPeopleEL = component
      .find(".popularProblem-problem-number")
      .at(1);
    expect(popularProblemSuccessPeopleEL.text()).toBe(
      popularProblem[0].successPeople.length + "명 완료"
    );
  });
  it("6. component popular-problem-kinds text test", () => {
    const popularProblemKindsEL = component.find(
      ".popularProblem-problem-kinds"
    );
    expect(popularProblemKindsEL.text()).toBe(popularProblem[0].kinds);
  });
  it("7. component popular-problem-description text test", () => {
    const popularProblemDescriptionEL = component.find(
      ".popularProblem-problem-description"
    );
    expect(popularProblemDescriptionEL.text()).toBe(
      popularProblem[0].description
    );
  });
});
