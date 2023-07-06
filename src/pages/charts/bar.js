import { useEffect } from "react";
import { Chart } from "chart.js";
import Cookies from 'universal-cookie';

export default function Barchart({ Organization, username }) {
    useEffect(() => {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var cookies = new Cookies();
        var chartValue = cookies.get('chart');

        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                
                labels: ["samuel", "Cesar", "Lucas", "Thomas", "Mathias", "Diago", "Thoraf"],
                datasets: [{
                    data: [66, 144, 146, 116, 107, 131, 43],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 2
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "Accepted",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgb(75, 192, 192,0.5)",
                    borderWidth: 2
                }, {
                    data: [20, 24, 50, 34, 33, 23, 12],
                    label: "Pending",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgb(255, 205, 86,0.5)",
                    borderWidth: 2
                }, {
                    data: [6, 20, 52, 12, 11, 78, 21],
                    label: "Rejected",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgb(255, 99, 132,0.5)",
                    borderWidth: 2
                }]
            },
        });
      
        // var myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        //         datasets: [{
        //             data: [0, 0, 0, 0, 0, 0, 0],
        //             label: "Applied",
        //             borderColor: "rgb(109, 253, 181)",
        //             backgroundColor: "rgb(109, 253, 181,0.5)",
        //             borderWidth: 2
        //         }, {
        //             data: [0, 0, 0, 0, 0, 0, 0],
        //             label: "Accepted",
        //             borderColor: "rgb(75, 192, 192)",
        //             backgroundColor: "rgb(75, 192, 192,0.5)",
        //             borderWidth: 2
        //         }, {
        //             data: [0, 0, 0, 0, 0, 0, 0],
        //             label: "Pending",
        //             borderColor: "rgb(255, 205, 86)",
        //             backgroundColor: "rgb(255, 205, 86,0.5)",
        //             borderWidth: 2
        //         }, {
        //             data: [0, 0, 0, 0, 0, 0, 0],
        //             label: "Rejected",
        //             borderColor: "rgb(255, 99, 132)",
        //             backgroundColor: "rgb(255, 99, 132,0.5)",
        //             borderWidth: 2
        //         }]
        //     },
        // });
     
        
    }, []);

    return (
        <>
            <strong className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">{username}'s performance</strong> <br></br>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
                <div className='border border-gray-50 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart2'></canvas>
                </div>
            </div>
        </>
    );
}
