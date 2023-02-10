import { useJwt } from "react-jwt";

function CreateNewStates(props) {
  let newState = [];
  let check = "";
  let x = -1;
  if (props){
    const states = props.filter(prop=>prop.localid !== -1)
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
