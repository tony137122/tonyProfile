import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyles from '@iso/assets/styles/globalStyle'; // 全域 css 
import { store } from './redux/store';
// import Boot from './redux/boot';
import Routes from './router';
import AppProvider from './AppProvider';

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </AppProvider>
  </Provider>
);
// // 初始化取得用戶身份, 若驗證成功則渲染主程式
// Boot() 
//   .then(() => App())
//   .catch(error => console.error(error));

export default App;
