import { PieChart } from "react-minimal-pie-chart";

export default function Pie() {
  return (
    <PieChart
      data={[
        { title: "One", value: 10, color: "#FFD700" },
        { title: "Two", value: 15, color: "#4DE680" },
      ]}
      paddingAngle="5"
      radius="20"
      lineWidth="20"
      animate="true"
      animationDuration="1000"
    />
  );
}
