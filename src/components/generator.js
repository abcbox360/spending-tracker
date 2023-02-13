function CreateNewStates(props, year, month, monthFilter) {
  let newState = [];
  let check = "";
  let x = -1;
  let states = []
  if (props) {
    if (monthFilter) {
      states = props
        .filter((prop) => prop.localid !== -1)
        .filter((prop) => prop.date.slice(0, 8) === `${year}年${month}月`);
    } else {
      states = props.filter((prop) => prop.localid !== -1);
    }
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

export { CreateNewStates };
