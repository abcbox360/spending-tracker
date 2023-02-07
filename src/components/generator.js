import format from "date-fns/format";

function CreateNewStates(states) {
  let newState = [];
  let check = "";
  let x = -1;
  if (states){
    for (let i = 0; i < states.length; i++) {
      if (check !== states[i].date) {
        x++;
        newState[x] = {
          date: states[i].date,
          data: [
            {
              id: states[i].id,
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
              id: states[i].id,
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
