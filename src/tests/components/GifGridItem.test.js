import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import GifGridItem from "../../components/GifGridItem";

describe("Test with <GifGridItem /> component", () => {
  const title = "my image";
  const url = "https://google.com";
  const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);

  test("renders <GifGridItem /> correctly ", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("validate <GifGridItem /> cointains title prop in the <p></p> ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("validate <GifGridItem /> cointains title & url prop in the <img></img> ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src").trim()).toBe(url);
    expect(img.prop("alt").trim()).toBe(title);
  });

  test("validate <GifGridItem /> cointains classNames in the <div></div> ", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__fadeIn")).toBe(true);
  });
});
