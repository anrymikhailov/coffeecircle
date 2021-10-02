import { render } from '@testing-library/react';
import { Placeholder } from './Placeholder';

/**
 * This file is just a working example of unit test.
 * To create your own tests, simply follow any of the conventions by Create React App:
 *
 *   * Files with .js suffix in __tests__ folders.
 *   * Files with .test.js suffix.
 *   * Files with .spec.js suffix.
 *
 * @see https://create-react-app.dev/docs/running-tests/#filename-conventions
 */
test('renders placeholder component', () => {
  const { getByText } = render(Placeholder);

  const linkElement = getByText(/Your code goes here/i);

  expect(linkElement).toBeInTheDocument();
});
