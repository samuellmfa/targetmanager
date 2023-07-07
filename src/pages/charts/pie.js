import Cookies from "universal-cookie";
import { useEffect } from "react"
import { Chart } from "chart.js";
export default function Piechart({ Organization,username}) {
    useEffect(() => {
        var ctx = document.getElementById("myChart1").getContext("2d");
        var cookies = new Cookies();
        var chartValue = cookies.get("chart");
        
     
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["completed","late tasks", "under progress", "Rejected tasks"],
                datasets: [{
                    data: [30,70, 10, 6],
                    borderColor: [
                        "#2F1237",
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: [
                        "rgb(47,18,55,0.1)",
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
      
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: ["Credited","Accepted", "Pending", "Rejected"],
                datasets: [{
                    data: [0,0, 0, 0],
                    borderColor: [
                        "#2F1237",
                        "#3cba9f",
                        "#ffa500",
                        "#c45850",
                    ],
                    backgroundColor: [
                        "rgb(47,18,55,0.1)",
                        "rgb(60,186,159,0.1)",
                        "rgb(255,165,0,0.1)",
                        "rgb(196,88,80,0.1)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },
        });
      
        
 
    }, [])
    return (
        <>
            {/* Pie chart */}
            <strong className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">{username}&quot;s performance Chart</strong> <br></br>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl pb-2">
                    <canvas id="myChart1"></canvas>
                </div>
            </div>
        </>
    )
}