const tab = (props) => (
  <li onClick={props.clicked} className={'tab ' + props.activeClass}>
    <span>{props.tabName}</span>
    <ul className="sub-tabs">
      {props.children}
    </ul>
  </li>
);

export default tab;
