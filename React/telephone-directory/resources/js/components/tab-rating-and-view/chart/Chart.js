import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useParams} from "react-router-dom";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

function Chart(props) {
    const {chart} = props
    const {number} = useParams()

    const labels = Object.keys(chart ?? {})
    const data = Object.values(chart ?? {})

    let arr = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Кількість',
                data: data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <div className={'chart'}>
            <Line options={{responsive: true}} data={arr}/>
        </div>
    )
}

export default Chart;
