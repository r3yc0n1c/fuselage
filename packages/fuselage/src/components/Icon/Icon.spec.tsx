import { render } from '@testing-library/react';
import React from 'react';

import { Icon } from './Icon';

it('renders without crashing', () => {
  render(<Icon name='chat' />);
});
