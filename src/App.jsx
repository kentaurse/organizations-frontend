import 'src/components/Notification'
import { axiosSetting } from 'src/components/AxiosSetting'
import 'nprogress/nprogress.css';
import { Form, Table } from 'antd';

axiosSetting();

function App() {

  return (
    <div className="bg-bg-light min-h-screen grid grid-rows-[64px_1fr_auto] grid-cols-1 grid-areas-layout">
      <Table/>
    </div>
  )
}

export default App