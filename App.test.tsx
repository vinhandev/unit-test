import { checkEven, forEach } from '@/utils/common';
import * as utils from '@/utils/common';
import { fireEvent, render } from '@testing-library/react-native';
import App from './App';

const mockCallback = jest.fn((x) => 42 + x);

describe('<App />', () => {
  // test function
  it('Trigger function isEven success', () => {
    const mockNumber = 20;
    const result = checkEven(mockNumber);
    expect(result).toBe(true);
  });
  it('Trigger function isEven failed', () => {
    const mockNumber = 19;
    const result = checkEven(mockNumber);
    expect(result).toBe(false);
  });
  it('Trigger function no check if is a decimal', () => {
    const mockNumber = 9.5;
    expect(() => {
      checkEven(mockNumber);
    }).toThrow(Error);
  });

  it('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });

  it('forEach checkEven function', () => {
    const mockCheckEven = jest.fn(checkEven);
    forEach([0, 1], mockCheckEven);
    // The mock function was called twice
    expect(mockCheckEven.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCheckEven.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCheckEven.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCheckEven.mock.results[0].value).toBe(true);
  });
  it('spyOn function function', () => {
    const { getByTestId } = render(<App />);
    const spy = jest.spyOn(utils, 'checkEven');
    const button = getByTestId('button');
    fireEvent(button, 'press');
    expect(spy).toHaveBeenCalledWith(1);
    expect(utils.checkEven(1)).toBe(false);
  });
  it('testing component ', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('button');
    expect(button).toBeDefined();
  });
  it('match snapshot ', () => {
    const app = render(<App />);

    expect(app).toMatchSnapshot();
  });
  it('layout ', () => {
    const app = render(<App />);
    const button = app.getByTestId('button');

    expect(button.props.children[0].props.children.props.children).toBe('Increment');
  });
});
