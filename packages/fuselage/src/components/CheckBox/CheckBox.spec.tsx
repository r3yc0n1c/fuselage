import { composeStories } from '@storybook/testing-react';
import { fireEvent, getByRole, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import * as stories from './CheckBox.stories';

const { Default, Indeterminate, Disabled, DefaultChecked } =
  composeStories(stories);

const testCases = Object.values(composeStories(stories)).map((Story) => [
  Story.storyName || 'Story',
  Story,
]);

test.each(testCases)(
  `renders %s without crashing`,
  async (_storyname, Story) => {
    const tree = render(<Story />);
    expect(tree.baseElement).toMatchSnapshot();
  }
);

test.each(testCases)(
  '%s should have no a11y violations',
  async (_storyname, Story) => {
    const { container } = render(<Story />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  }
);

it('changes style of element as checkbox is checked', () => {
  const { container } = render(<Default />);
  const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
it('changes style of element as checkbox is checked/unchecked', () => {
  const { container } = render(<Default />);
  const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
  fireEvent.click(checkbox);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(false);
});
it('displays checkbox indeterminate correctly', () => {
  const { container } = render(<Indeterminate />);
  const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
  expect(checkbox.indeterminate).toEqual(true);
});

it('displays checkbox with defaultChecked value correctly', () => {
  const { container } = render(<DefaultChecked />);
  const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
  expect(checkbox.defaultChecked).toEqual(true);
});

it('displays checkbox disabled correctly', () => {
  const { container } = render(<Disabled />);
  const checkbox = getByRole(container, 'checkbox') as HTMLInputElement;
  expect(checkbox.disabled).toEqual(true);
});
