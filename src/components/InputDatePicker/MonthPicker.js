import { buildMonths } from "./generator";
import styled from "styled-components";
import { Button2 } from "../Buttons/Button";

const MonthTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TrStyle = styled.tr`
  &:first-child td {
    border-top: 0.1rem solid rgba(0, 0, 0);
  }
  &:last-child td {
    border-bottom: none;
  }
`;

const MonthCell = styled.td`
  width: 33.3%;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
`;

const MonthButton = styled(Button2)`
  width: 100%;
  height: 76px;
`;

function MonthPicker(props) {
  const months = buildMonths();
  const { selectedMonthIndex, onSelect } = props;
  return (
    <MonthTable>
      {months.map((row, i) => (
        <TrStyle key={i}>
          {row.map((month, j) => {
            const isSelected = month.index === selectedMonthIndex;
            return (
              <MonthCell key={j}>
                <MonthButton
                  isSelected={isSelected}
                  onClick={() => onSelect(month.index)}
                >
                  {month.name}
                </MonthButton>
              </MonthCell>
            );
          })}
        </TrStyle>
      ))}
    </MonthTable>
  );
}

export default MonthPicker;
