import Index from './index';

it('renders app entry point', () => {
	expect(JSON.stringify({}, Index, { _reactInternalInstance: 'censored' })).toMatchSnapshot();
});
