import { PieChart } from "react-minimal-pie-chart";

export default function Pie(props) {
  const { income, expend} = props
  return (
    <PieChart
      data={[
        { title: "expend", value: expend * -1, color: "#FFD700" },
        { title: "income", value: income, color: "#4DE680" },
      ]}
      paddingAngle="5"
      radius="20"
      lineWidth="30"
      animate="true"
      animationDuration="1000"
    />
  );
}
