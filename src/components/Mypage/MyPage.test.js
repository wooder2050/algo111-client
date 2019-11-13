import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Mypage from "./Mypage";

configure({ adapter: new Adapter() });

const closeSideProblemModal = jest.fn();
const codeAll = [
  {
    level: 1,
    stage: 1,
    title: "완주하지 못한 선수",
    userName: "a",
    user_id: "5dc8f40"
  }
];
const userLevel = "1";
const userName = "a";
const userPictureUrl = "wwww.ththd.com";
const userPoint = 100;
const userStage = "1";
const levelAll = [
  {
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
  }
];

describe("MyPage compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Mypage
          closeSideProblemModal={closeSideProblemModal}
          codeAll={codeAll}
          userLevel={userLevel}
          userName={userName}
          userPictureUrl={userPictureUrl}
          userPoint={userPoint}
          userStage={userStage}
          levelAll={levelAll}
        />
      </MemoryRouter>
    );
  });
  it("1. calls closeSideProblemModal functions test", () => {
    const closeSideProblemModalBtn = component.find(".mypage-wrapper");
    closeSideProblemModalBtn.simulate("click");
    expect(closeSideProblemModal.mock.calls.length).toBe(1);
  });
  it("2. component mypage-header-name text test", () => {
    const mypageHeaderName = component.find(".mypage-header-name");
    expect(mypageHeaderName.text()).toBe(userName + "님, 환영합니다.");
  });
  it("3. component mypage-level-info text test", () => {
    const mypageLevelInfo = component.find(".mypage-level-info").at(0);
    expect(mypageLevelInfo.text()).toBe(
      "전체 " +
        levelAll.length +
        " 레벨 중에 " +
        userLevel +
        " 레벨 진행 중입니다."
    );
  });
});
