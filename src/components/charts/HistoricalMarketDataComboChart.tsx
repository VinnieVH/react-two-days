import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

type HistoricalMarketDataComboChartProps = {
  chartData: {
    labels: string[];
    datasets: {
      type: string;
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      yAxisID?: string;
      xAxisID?: string;
    }[];
  };
};
export const HistoricalMarketDataComboChart = (props: HistoricalMarketDataComboChartProps) => {
  ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController);

  return (
    <div style={{ width: "60%" }}>
      <Chart
        type="bar"
        data={props.chartData as any}
        options={{
          scales: { priceClose: { type: "linear", position: "left" }, volume: { type: "linear", position: "right", display: false } },
        }}
      />
    </div>
  );
};
