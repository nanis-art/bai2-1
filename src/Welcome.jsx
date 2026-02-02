function Welcome(props) {
  return (
    <div class="box">
      <h3>Họ Tên: {props.name}</h3>
      <h3>Tuổi: {props.tuoi}</h3>
      <h3>Lớp: {props.lop}</h3>
      <h3>Sở Thích: {props.sothich}</h3>
    </div>
  );
}
export default Welcome;