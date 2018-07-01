import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jestFetchMock from 'jest-fetch-mock';

configure({ adapter: new Adapter() });
global.fetch = jestFetchMock;
