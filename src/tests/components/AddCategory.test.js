import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddCategory from "../../components/AddCategory";

describe("Test with <AddCategory /> component", () => {
  const testFunc = () => {};
  const wrapper = shallow(
    <AddCategory updateCategoryHandler={testFunc}></AddCategory>
  );

  test("renders <AddCategory /> correctly ", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
