import logo from './logo.svg';
import './App.css';
import Baitap01 from './Baitap01/Baitap01';
import Baitap02 from './Baitap02/Baitap02';
import GlassBT from './GlassBT/GlassBT';
import BTGlasses from './GlassBT/BTGlasses';
import Practice from './GlassBT/Practice';
import PracticeTotal from './PracticeTotal/PracticeTotal';
import BTGioHang from './DemoRedux/BTGioHang/BTGioHang';

//Redux
import {store} from './Redux/configStore';
import {Provider} from 'react-redux';
import BTGameXucXac from './DemoRedux/BTGameXucXac/BTGameXucXac';
import BaiTapQuanLyNguoiDung from './FromReact/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung';
import Parent from './LifeCycle/Parent';


function App() {
  return (
    <div className="App">
      
      {/* <Baitap01/> */}
      {/* <Baitap02/> */}
      {/* <GlassBT/> */}
      {/* <BTGlasses/> */}
      {/* <Practice/> */}
      {/* <PracticeTotal/> */}
      <Provider store= {store}> 
        {/* <BTGioHang/> */}
        {/* <BTGameXucXac/> */}
        {/* <BaiTapQuanLyNguoiDung/> */}
        <Parent/>
      </Provider>
      {/* <BTGioHang/> */}
    </div>
  );
}

export default App;
