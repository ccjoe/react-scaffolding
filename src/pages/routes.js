import App from './App';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/App')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },
    {
      path: 'battle',
      getComponent(location, cb) {
        System.import('pages/Battle')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]
};