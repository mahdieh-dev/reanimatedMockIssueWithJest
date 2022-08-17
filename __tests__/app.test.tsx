/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

jest.mock('react-native-reanimated', () => {
  return {
    ...jest.requireMock('react-native-reanimated/mock'),
    useSharedValue: jest.fn,
    useAnimatedStyle: jest.fn,
  };
});

it('renders the first item of the list correctly', async () => {
  const {findByTestId} = render(<App />);
  await findByTestId(`item-0`);
});
