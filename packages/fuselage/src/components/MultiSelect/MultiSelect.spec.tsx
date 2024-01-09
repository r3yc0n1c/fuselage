import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './MultiSelect.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

it('renders without crashing', () => {
  render(<Default />);
});
