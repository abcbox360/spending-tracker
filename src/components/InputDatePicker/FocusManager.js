import omit from "lodash.chunk";

function FocusManager(props) {
  let timeoutId;

  function onBlur(e) {
    e.persist();
    timeoutId = setTimeout(() => {
      props.onBlur(e);
    });
  }
  function onFocus(e) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    props.onFocus(e);
  }

  return (
    <div
      onFocus={onFocus}
      onBlur={onBlur}
      {...omit(props, ["onFocus", "onBlur"])}
    >
      {props.children}
    </div>
  );
}

export default FocusManager;
