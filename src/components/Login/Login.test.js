import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

configure({ adapter: new Adapter() });
class Auth {
  constructor() {
    this.foo = "bar";
  }
  signIn = jest.fn();
}

const auth = new Auth();

describe("Login compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Login auth={auth} />
      </MemoryRouter>
    );
  });
  it("1. component login function test", () => {
    const loginBtn = component.find(".login-btn");
    loginBtn.simulate("click");
    expect(auth.signIn.mock.calls.length).toBe(1);
  });
});
