import { useState } from 'react';
import { ConfigProvider, Button } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import DayJSPicker from './components/DayJSPicker';
import reactLogo from './assets/react.svg';
import './App.css';
// import 'antd/dist/antd.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is

            {count}
          </Button>
          <br />
          <DayJSPicker.RangePicker
            className="custom-rule mt-4"
            onChange={(data) => {
              const [date1, date2]:any = data;
              console.log(typeof date1, date1);
              console.log(typeof date2, date2);
            }}
          />
          <p>
            Edit

            <code>src/App.tsx</code>

            and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </ConfigProvider>
  );
}

export default App;
