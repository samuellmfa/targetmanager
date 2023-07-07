import { useEffect } from "react"
import { Chart } from "chart.js";
import Cookies from "universal-cookie";
export default function Linechart({ Organization,username}) {
  useEffect(() => {
    var ctx = document.getElementById("myChart3").getContext("2d");
        var cookies = new Cookies();
        var chartValue = cookies.get("chart");
   
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [{
            data: [139, 114, 106, 106, 107, 111, 133],
            label: "Accomplished",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
          }, {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: "Accepted",
            borderColor: "#3cba9f",
            backgroundColor: "#71d1bd",
            fill: false,
          }, {
            data: [10, 21, 60, 44, 17, 21, 17],
            label: "Fininshing level",
            borderColor: "#ffa500",
            backgroundColor: "#ffc04d",
            fill: false,
          }, {
            data: [6, 3, 2, 2, 7, 0, 16],
            label: "Rejected tasks",
            borderColor: "#c45850",
            backgroundColor: "#d78f89",
            fill: false,
          }
          ]
        },
      });
   
      // var myChart = new Chart(ctx, {
      //   type: "line",
      //   data: {
      //     labels: ["samuel", "Cesar", "Lucas", "Thomas", "Mathias", "Diago", "Julien"],
      //     datasets: [{
      //       data: [0, 0, 0, 0, 0, 0, 0],
      //       label: "Applied",
      //       borderColor: "#3e95cd",
      //       backgroundColor: "#7bb6dd",
      //       fill: false,
      //     }, {
      //       data: [0, 0, 0, 0, 0, 0, 0],
      //       label: "Accepted",
      //       borderColor: "#3cba9f",
      //       backgroundColor: "#71d1bd",
      //       fill: false,
      //     }, {
      //       data: [0, 0, 0, 0, 0, 0, 0],
      //       label: "Pending",
      //       borderColor: "#ffa500",
      //       backgroundColor: "#ffc04d",
      //       fill: false,
      //     }, {
      //       data: [0, 0, 0, 0, 0, 0, 0],
      //       label: "Rejected",
      //       borderColor: "#c45850",
      //       backgroundColor: "#d78f89",
      //       fill: false,
      //     }
      //     ]
      //   },
      // });
   
  }, [])
  return (
    <>
      {/* line chart */}
      <strong className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">Organization performance Chart</strong><br></br><br></br>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          <canvas id="myChart3"></canvas>
        </div>
      </div>
    </>
  )
}

