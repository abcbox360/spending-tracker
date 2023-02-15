import format from "date-fns/format";
import getMonth from "date-fns/getMonth";

function CreateNewStates(props, year, month, monthFilter) {
  let newState = [];
  let check = "";
  let x = -1;
  let states = [];
  if (props) {
    if (monthFilter) {
      states = props
        .filter((prop) => prop.localid !== -1)
        .filter((prop) => getMonth(new Date(prop.date)) === Number(month - 1));
    } else {
      states = props.filter((prop) => prop.localid !== -1);
    }
    states.sort((a, b) => a.date - b.date);
    for (let i = 0; i < states.length; i++) {
      if (check !== states[i].date) {
        x++;
        newState[x] = {
          date: states[i].date,
          data: [
            {
              localid: states[i].localid,
              name: states[i].item,
              content: states[i].content,
              price: Number(states[i].price),
            },
          ],
        };
        check = states[i].date;
      } else {
        newState[x] = {
          date: newState[x].date,
          data: [
            ...newState[x].data,
            {
              localid: states[i].localid,
              name: states[i].item,
              content: states[i].content,
              price: Number(states[i].price),
            },
          ],
        };
      }
    }
  }
  return newState;
}

function AddState(
  states,
  setStates,
  activeitem,
  text,
  date,
  isExpend,
  price,
  $edit
) {
  if (states) {
    if ($edit) {
      setStates(
        [
          ...states.filter(
            (state) => Number(state.localid) !== Number($edit.localid)
          ),
          {
            id: $edit.id,
            localid: $edit.localid,
            date: format(date, "yyyy-MM-dd"),
            item: $edit.item,
            content: text,
            price: isExpend ? "-" + price : price,
            edit: 1,
          },
        ].sort((a, b) => (a.date < b.date ? 1 : -1))
      );
      $edit = false;
    } else {
      setStates(
        [
          ...states,
          {
            id: 0,
            localid:
              Number(
                states.sort((a, b) => a.localid - b.localid)[states.length - 1]
                  .localid
              ) + 1,
            date: format(date, "yyyy-MM-dd"),
            item: activeitem,
            content: text,
            price: isExpend ? "-" + price : price,
          },
        ].sort((a, b) => (a.date < b.date ? 1 : -1))
      );
    }
  } else {
    setStates([
      {
        id: 0,
        localid: 1,
        date: format(date, "yyyy-MM-dd"),
        item: activeitem,
        content: text,
        price: isExpend ? "-" + price : price,
      },
    ]);
  }
}

export { CreateNewStates, AddState };
