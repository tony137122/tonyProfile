import React, { lazy, Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Loader from '@iso/components/utility/loader';

// 路徑設定
const publicRoutes = [
  {
    path: '',
    component: lazy(() => import('@iso/containers/Profile/Profile')),
    exact: true,
  },
];

export default function Routes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Switch>
            {publicRoutes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
