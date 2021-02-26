import logo from './logo.svg';
import './App.css';
import BTLayOut from './components/BTLayOut/BTLayOut';
import DataBinding from './components/DataBindings/DataBinding';
import HandEvent from './components/HandleEvent/HandEvent';
import DemoState from './components/StateReact/DemoState';
import BaiTapChonXe from './components/StateReact/BaiTapChonXe';
import RenderWithMap from './components/RenderWithMap/RenderWithMap,';
import BTRenderMap from './components/RenderWithMap/BTRenderMap';
import DemoProps from './components/Props/DemoProps';
import DemoQLSP from './components/Props/DemoQLSP/DemoQLSP';
import BTGioHangRedux from './DemoRedux/BTGioHangRedux/BTGioHangRedux';

function App() {
  return (
    <div className="App">
      {/* <BTLayOut /> */}
      {/* <DataBinding/> */}
      {/* <HandEvent/> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap/> */}
      {/* <BTRenderMap/> */}
      {/* <DemoProps/> */}
      {/* <DemoQLSP/> */}
      <BTGioHangRedux/>
    </div>
  );
}

export default App;
