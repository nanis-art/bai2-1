import { useState } from 'react'
import './Welcome'
import './App.css'

function App() {
  return (
    <div>
      <h1>Danh Sach Hoc Sinh</h1>
<Welcome name="Ngô Minh Tân" tuoi="17" lop="26SPIT3" sothich="Game (Pubgm, Minecraft)" />
<Welcome name="Nguyễn Thanh Nhật" tuoi="17" lop="26SPIT3" sothich="Game (Arknight, HOK)" />
<Welcome name="Nguyễn Hoàng Cát Tường" tuoi="17" lop="26SPIT3" sothich="Ngủ, Nghe Nhạc" />
<Welcome name="Lý Tấn Phát" tuoi="17" lop="26SPIT3" sothich="Anime, Game" />
    </div>
  );
}

export default App
