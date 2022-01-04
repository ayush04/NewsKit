import {renderToFragmentWithTheme} from 'newskit/test/test-utils';
import Sidebar from '..';

describe('Sidebar', () => {
  describe('renders correctly', () => {
    test('when opened', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        path: '/',
        sidebarOpen: true,
        handleSidebarClick: () => {},
      });
      expect(fragment).toMatchSnapshot();
    });

    test('when closed', () => {
      const fragment = renderToFragmentWithTheme(Sidebar, {
        path: '/',
        sidebarOpen: false,
        handleSidebarClick: () => {},
      });
      expect(fragment).toMatchSnapshot();
    });
  });
});
