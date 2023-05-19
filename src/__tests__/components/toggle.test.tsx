import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="md" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtyc cGaYhP"
        scale="md"
      >
        <input
          checked=""
          class="sc-gsDJrp htcDkC"
          scale="md"
          type="checkbox"
        />
        <div
          class="sc-bdvvaa kgQOik"
          scale="md"
        />
      </div>
    </DocumentFragment>
  `);
});

it("renders correctly scale sm", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} scale="sm" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtyc bIaZGd"
        scale="sm"
      >
        <input
          checked=""
          class="sc-gsDJrp iWgJhC"
          scale="sm"
          type="checkbox"
        />
        <div
          class="sc-bdvvaa evIwYI"
          scale="sm"
        />
      </div>
    </DocumentFragment>
  `);
});
