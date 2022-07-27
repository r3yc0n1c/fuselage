import { composeStories } from '@storybook/testing-react';
import {
  fireEvent,
  queryAllByRole,
  render,
  waitFor,
} from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import React from 'react';
import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import * as stories from './Select.stories';

const { Default } = composeStories(stories);

withResizeObserverMock();

describe('[Select Component]', () => {
  describe('[Default] structural tests', () => {
    it('renders without crashing', () => {
      render(<Default />);
    });

    it('should have one trigger button', async () => {
      const { getByRole } = render(<Default />);
      expect(getByRole('button')).toBeInTheDocument();
    });

    it('should have placeholder', async () => {
      const { getByLabelText } = render(<Default />);

      const placeholder = Default.args?.placeholder;
      if (!placeholder) {
        throw new Error('Placeholder is not defined');
      }
      expect(getByLabelText(placeholder)).toBeInTheDocument();
    });

    it('should have no list of options rendered', async () => {
      const { queryByRole } = render(<Default />);
      expect(queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should no placeholder if defaultValue is defined', async () => {
      const { queryByLabelText } = render(<Default defaultSelectedKey={'1'} />);

      const placeholder = Default.args?.placeholder;
      if (!placeholder) {
        throw new Error('Placeholder is not defined');
      }

      expect(queryByLabelText(placeholder)).not.toBeInTheDocument();
    });
  });

  describe('[when the user clicks on the trigger button]', () => {
    it('should have a list of options', async () => {
      const { queryByRole, findByRole } = render(<Default />);

      (await findByRole('button')).click();
      await waitFor(() => {
        expect(queryByRole('listbox')).toBeInTheDocument();
      });
    });

    describe('[when the user clicks on some option]', () => {
      it('should call onSelectionChange', async () => {
        const onChange = jest.fn();
        const { queryByRole, findByRole, findAllByRole } = render(
          <Default onSelectionChange={onChange} />
        );

        (await findByRole('button')).click();
        await waitFor(() => {
          expect(queryByRole('listbox')).toBeInTheDocument();
        });

        const option = await findAllByRole('option');
        option[0].click();
        const key = option[0].getAttribute('data-key');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(key);
        expect(queryByRole('listbox')).not.toBeInTheDocument();
      });
    });
  });

  describe('[when the user double clicks on the trigger button]', () => {
    it('should have no list of options', async () => {
      const { queryByRole, findByRole } = render(<Default />);

      (await findByRole('button')).click();
      (await findByRole('button')).click();
      expect(queryByRole('listbox')).not.toBeInTheDocument();
    });
  });

  describe('[when the user clicks press key up or down after list opened]', () => {
    it('should navigate through the list', async () => {
      const { queryByRole, findByRole, findAllByRole, queryAllByRole } = render(
        <Default />
      );

      (await findByRole('button')).click();

      await waitFor(() => {
        expect(queryByRole('listbox')).toBeInTheDocument();
      });
      await waitFor(() => {
        expect(queryAllByRole('option').length).toBeGreaterThan(0);
      });
      const options = await findAllByRole('option');

      const keyCount = Math.round(options.length / 2);
      for (let i = 0; i < keyCount; i++) {
        fireEvent.keyDown(document.activeElement!, { key: 'ArrowDown' });
      }
      await waitFor(() => {
        expect(queryByRole('listbox')).toBeInTheDocument();
      });

      options.forEach((e, index) => {
        expect(e).toHaveAttribute('tabindex', index === keyCount ? '0' : '-1');
      });
    });
  });
});
