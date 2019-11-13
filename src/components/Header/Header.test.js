import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

configure({ adapter: new Adapter() });

class Auth {
  constructor() {
    this.foo = "bar";
  }
  signOut = jest.fn();
}

const name = "a";
const auth = new Auth();
const userPictureUrl = "wwww.ab.com";
const clickSideModal = jest.fn();
const sideModal = jest.fn();

describe("Header compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Header
          name={name}
          auth={auth}
          userPictureUrl={userPictureUrl}
          clickSideModal={clickSideModal}
          sideModal={sideModal}
        />
      </MemoryRouter>
    );
  });
  it("1. calls click-side-modal functions test", () => {
    const hamburgBtn = component.find(".hamburg-btn-wrapper");
    hamburgBtn.simulate("click");
    expect(clickSideModal.mock.calls.length).toBe(1);
  });
  it("2. calls log-out functions test", () => {
    const logoutBtn = component.find(".logout-inner");
    logoutBtn.simulate("click");
    expect(auth.signOut.mock.calls.length).toBe(1);
  });
  it("3. component text test", () => {
    const userInfo = component.find(".user-name-text");
    expect(userInfo.text()).toBe(name);
  });
});
