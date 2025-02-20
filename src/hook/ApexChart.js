import ReactApexChart from "react-apexcharts";

const useReactApexChart = () => {
    let chartSeries = [
        {
            name: "This month",
            data: [10, 20, 12, 30, 14, 35, 16, 32, 14, 25, 13, 28],
        },
    ];

    let chartOptions = {
        chart: {
            height: 264,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            dropShadow: {
                enabled: false,
                top: 6,
                left: 0,
                blur: 4,
                color: "#000",
                opacity: 0.1,
            },
        },

        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#487FFF"], // Specify the line color here
            width: 3,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
            },
            y: {
                show: false,
            },
            z: {
                show: false,
            },
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
            axisBorder: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 20,
                stroke: {
                    width: 0,
                },
                fill: {
                    type: "solid",
                    color: "#487FFF40",
                },
            },
        },
    };

    let barChartSeries = [
        {
            name: "Sales",
            data: [
                {
                    x: "Sun",
                    y: 15,
                },
                {
                    x: "Mon",
                    y: 12,
                },
                {
                    x: "Tue",
                    y: 18,
                },
                {
                    x: "Wed",
                    y: 20,
                },
                {
                    x: "Thu",
                    y: 13,
                },
                {
                    x: "Fri",
                    y: 16,
                },
                {
                    x: "Sat",
                    y: 6,
                },
            ],
        },
    ];

    let barChartOptions = {
        chart: {
            type: "bar",
            height: 264,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: false,
                columnWidth: 24,
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            colors: ["#dae5ff"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#dae5ff"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
            padding: {
                top: -10,
                right: -10,
                bottom: -10,
                left: -10,
            },
        },
        xaxis: {
            type: "category",
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yaxis: {
            show: false,
        },
    };

    let donutChartSeries = [500, 500, 500];
    let donutChartOptions = {
        colors: ["#FF9F29", "#487FFF", "#45B369"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 270,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let paymentStatusChartSeries = [
        {
            name: "Net Profit",
            data: [
                20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000,
                18000, 22000,
            ],
        },

        {
            name: "Revenue",
            data: [
                15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000,
                14000, 16000,
            ],
        },
    ];

    let paymentStatusChartOptions = {
        colors: ["#487FFF", "#FF9F29"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },

        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            categories: [
                "0",
                "5000",
                "10,000",
                "20,000",
                "30,000",
                "50,000",
                "60,000",
                "60,000",
                "70,000",
                "80,000",
                "90,000",
                "100,000",
            ],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let createChart = (chartColor) => {
        let currentYear = new Date().getFullYear();

        let series = [
            {
                name: "series1",
                data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
            },
        ];

        var options = {
            chart: {
                type: "area",
                width: 80,
                height: 42,
                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [chartColor],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.75, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={42}
                width={80}
            />
        );
    };

    let createChartTwo = (chartColor, height) => {
        let series = [
            {
                name: "This Day",
                data: [4, 18, 13, 40, 30, 50, 30, 60, 40, 75, 45, 90],
            },
        ];

        let options = {
            chart: {
                type: "area",
                width: "100%",
                height: 162,
                sparkline: {
                    enabled: false, // Remove whitespace
                },
                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 4,
                colors: [chartColor],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "red",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -30,
                    right: 0,
                    bottom: -10,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.6, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 3,
                size: 0,
                hover: {
                    size: 10,
                },
            },
            xaxis: {
                categories: [
                    `Jan`,
                    `Feb`,
                    `Mar`,
                    `Apr`,
                    `May`,
                    `Jun`,
                    `Jul`,
                    `Aug`,
                    `Sep`,
                    `Oct`,
                    `Nov`,
                    `Dec`,
                ],
                tooltip: {
                    enabled: false,
                },
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={height}
            />
        );
    };

    let createChartThree = (chartColor) => {
        let currentYear = new Date().getFullYear();
        let series = [
            {
                name: "series1",
                data: [31, 24, 30, 25, 32, 28, 40, 32, 42, 38, 40, 32, 38, 35, 45],
            },
        ];
        let options = {
            chart: {
                type: "area",

                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [chartColor],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.7, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                width={130}
                height={50}
            />
        );
    };

    let createChartFour = (chartColor, height, width) => {
        let currentYear = new Date().getFullYear();

        let series = [
            {
                name: "series1",
                data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
            },
        ];
        let options = {
            chart: {
                type: "area",
                width: 100,
                height: 42,
                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [chartColor],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.75, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                width={width}
                height={height}
            />
        );
    };

    let createChartFive = (chartColor) => {
        let currentYear = new Date().getFullYear();

        let series = [
            {
                name: "series1",
                data: [0, 10, 8, 25, 15, 26, 13, 35, 15, 39, 16, 46, 42],
            },
        ];
        let options = {
            chart: {
                type: "area",
                width: 164,
                height: 72,

                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [chartColor],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [chartColor], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.8, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [chartColor],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                width={164}
                height={72}
            />
        );
    };
    let createChartSix = (color1, color2) => {
        let series = [
            {
                name: "series1",
                data: [48, 35, 55, 32, 48, 30, 55, 50, 57],
            },
            {
                name: "series2",
                data: [12, 20, 15, 26, 22, 60, 40, 48, 25],
            },
        ];
        let options = {
            legend: {
                show: false,
            },
            chart: {
                type: "area",
                width: "100%",
                height: 270,
                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 3,
                colors: [color1, color2], // Use two colors for the lines
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "#D1D5DB",
                strokeDashArray: 1,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -20,
                    right: 0,
                    bottom: -10,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [color1, color2],
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: [undefined, `${color2}00`], // Apply transparency to both colors
                    inverseColors: false,
                    opacityFrom: [0.4, 0.4], // Starting opacity for both colors
                    opacityTo: [0.3, 0.3], // Ending opacity for both colors
                    stops: [0, 100],
                },
            },
            markers: {
                colors: [color1, color2], // Use two colors for the markers
                strokeWidth: 3,
                size: 0,
                hover: {
                    size: 10,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                tooltip: {
                    enabled: false,
                },
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        return "$" + value + "k";
                    },
                    style: {
                        fontSize: "14px",
                    },
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={270}
            />
        );
    };

    let createChartSeven = (color1, color2) => {
        let series = [
            {
                name: "series2",
                data: [
                    20000, 45000, 30000, 50000, 32000, 40000, 30000, 42000, 28000, 34000,
                    38000, 26000,
                ],
            },
        ];
        var options = {
            legend: {
                show: false,
            },
            chart: {
                type: "area",
                width: "100%",
                height: 240,
                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
                width: 3,
                colors: [color1], // Use two colors for the lines
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "#D1D5DB",
                strokeDashArray: 1,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [color1],
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.5,
                    gradientToColors: [undefined, `${color2}00`], // Apply transparency to both colors
                    inverseColors: false,
                    opacityFrom: [0.4, 0.4], // Starting opacity for both colors
                    opacityTo: [0.1, 0.1], // Ending opacity for both colors
                    stops: [0, 100],
                },
            },
            markers: {
                colors: [color1], // Use two colors for the markers
                strokeWidth: 3,
                size: 0,
                hover: {
                    size: 10,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                tooltip: {
                    enabled: false,
                },
                labels: {
                    formatter: function (value) {
                        return value;
                    },
                    style: {
                        fontSize: "12px",
                    },
                },
            },
            yaxis: {
                labels: {
                    // formatter: function (value) {
                    //     return "$" + value + "k";
                    // },
                    style: {
                        fontSize: "12px",
                    },
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={240}
            />
        );
    };

    let createChartEight = (color) => {
        let currentYear = new Date().getFullYear();

        let series = [
            {
                name: "series1",
                data: [0, 10, 8, 25, 15, 26, 13, 35, 15, 39, 16, 46, 42],
            },
        ];
        let options = {
            chart: {
                type: "area",
                width: 164,
                height: 72,

                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [color],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [color], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${color}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.8, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [color],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={72}
                width={164}
            />
        );
    };

    let createChartNine = (color) => {
        let series = [
            {
                name: "Bitcoin",
                data: [
                    [1327359600000, 30.95],
                    [1327446000000, 31.34],
                    [1327532400000, 31.18],
                    [1327618800000, 31.05],
                    [1327878000000, 31.0],
                    [1327964400000, 30.95],
                    [1328050800000, 31.24],
                    [1328137200000, 31.29],
                    [1328223600000, 31.85],
                    [1328482800000, 31.86],
                    [1328569200000, 32.28],
                    [1328655600000, 32.1],
                    [1328742000000, 32.65],
                    [1328828400000, 32.21],
                    [1329087600000, 32.35],
                    [1329174000000, 32.44],
                    [1329260400000, 32.46],
                    [1329346800000, 32.86],
                    [1329433200000, 32.75],
                    [1329778800000, 32.54],
                    [1329865200000, 32.33],
                    [1329951600000, 32.97],
                    [1330038000000, 33.41],
                    [1330297200000, 33.27],
                    [1330383600000, 33.27],
                    [1330470000000, 32.89],
                    [1330556400000, 33.1],
                    [1330642800000, 33.73],
                ],
            },
        ];

        let options = {
            chart: {
                type: "area",
                stacked: false,
                width: 76,
                height: 40,
                sparkline: {
                    enabled: true, // Remove whitespace
                },
                zoom: {
                    type: "x",
                    enabled: true,
                    autoScaleYaxis: true,
                },
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                curve: "straight",
                width: 2,
                colors: [color],
                lineCap: "round",
            },
            dataLabels: {
                enabled: false,
            },
            markers: {
                colors: [color],
                strokeWidth: 2,
                size: 0,
            },
            grid: {
                borderColor: "#D1D5DB",
                strokeDashArray: 3,
            },
            fill: {
                type: "gradient",
                gradient: {
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 1, // Intensity of the gradient shading
                    gradientToColors: [color], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.4, // Starting opacity
                    opacityTo: 0.1, // Ending opacity
                    stops: [0, 100],
                },
            },
            yaxis: {
                labels: {
                    show: false,
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            },
            xaxis: {
                type: "datetime",
                labels: {
                    show: false,
                },
            },
            tooltip: {
                shared: false,
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            },
        };

        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                width={76}
                height={40}
            />
        );
    };

    let createChartTen = (color) => {
        let currentYear = new Date().getFullYear();
        let series = [
            {
                name: "series1",
                data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
            },
        ];
        let options = {
            chart: {
                type: "area",
                width: 100,
                height: 42,
                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [color],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [color], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${color}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.75, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [color],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                width={100}
                height={42}
            />
        );
    };

    let createChatEleven = (color) => {
        let currentYear = new Date().getFullYear();
        let series = [
            {
                name: "series1",
                data: [31, 24, 30, 25, 32, 28, 40, 32, 42, 38, 40, 32, 38, 35, 45],
            },
        ];
        let options = {
            chart: {
                type: "area",
                width: 150,
                height: 70,

                sparkline: {
                    enabled: true, // Remove whitespace
                },

                toolbar: {
                    show: false,
                },
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                },
                // events: {
                //     mounted: function (chartContext, config) {
                //         // Apply CSS blur to markers
                //         document.querySelectorAll(`#${color} .apexcharts-marker`).forEach(marker => {
                //             marker.style.filter = 'blur(2px)';
                //         });
                //     },
                //     updated: function (chartContext, config) {
                //         // Apply CSS blur to markers
                //         document.querySelectorAll(`#${chartId} .apexcharts-marker`).forEach(marker => {
                //             marker.style.filter = 'blur(3px)';
                //         });
                //     }
                // }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                width: 2,
                colors: [color],
                lineCap: "round",
            },
            grid: {
                show: true,
                borderColor: "transparent",
                strokeDashArray: 0,
                position: "back",
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                row: {
                    colors: undefined,
                    opacity: 0.5,
                },
                column: {
                    colors: undefined,
                    opacity: 0.5,
                },
                padding: {
                    top: -3,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                colors: [color], // Set the starting color (top color) here
                gradient: {
                    shade: "light", // Gradient shading type
                    type: "vertical", // Gradient direction (vertical)
                    shadeIntensity: 0.5, // Intensity of the gradient shading
                    gradientToColors: [`${color}00`], // Bottom gradient color (with transparency)
                    inverseColors: false, // Do not invert colors
                    opacityFrom: 0.7, // Starting opacity
                    opacityTo: 0.3, // Ending opacity
                    stops: [0, 100],
                },
            },
            // Customize the circle marker color on hover
            markers: {
                colors: [color],
                strokeWidth: 2,
                size: 0,
                hover: {
                    size: 8,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                },
                categories: [
                    `Jan ${currentYear}`,
                    `Feb ${currentYear}`,
                    `Mar ${currentYear}`,
                    `Apr ${currentYear}`,
                    `May ${currentYear}`,
                    `Jun ${currentYear}`,
                    `Jul ${currentYear}`,
                    `Aug ${currentYear}`,
                    `Sep ${currentYear}`,
                    `Oct ${currentYear}`,
                    `Nov ${currentYear}`,
                    `Dec ${currentYear}`,
                ],
                tooltip: {
                    enabled: false,
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };
        return (
            <ReactApexChart
                options={options}
                series={series}
                type='area'
                height={70}
            />
        );
    };

    let barChartSeriesTwo = [
        {
            name: "Sales",
            data: [
                {
                    x: "Jan",
                    y: 85000,
                },
                {
                    x: "Feb",
                    y: 70000,
                },
                {
                    x: "Mar",
                    y: 40000,
                },
                {
                    x: "Apr",
                    y: 50000,
                },
                {
                    x: "May",
                    y: 60000,
                },
                {
                    x: "Jun",
                    y: 50000,
                },
                {
                    x: "Jul",
                    y: 40000,
                },
                {
                    x: "Aug",
                    y: 50000,
                },
                {
                    x: "Sep",
                    y: 40000,
                },
                {
                    x: "Oct",
                    y: 60000,
                },
                {
                    x: "Nov",
                    y: 30000,
                },
                {
                    x: "Dec",
                    y: 50000,
                },
            ],
        },
    ];

    let barChartOptionsTwo = {
        chart: {
            type: "bar",
            height: 310,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: "23%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            colors: ["#487FFF"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#487FFF"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        xaxis: {
            type: "category",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
    };

    let donutChartSeriesTwo = [500, 500, 500];
    let donutChartOptionsTwo = {
        colors: ["#45B369", "#FF9F29", "#487FFF"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 300,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: -100,
                right: -100,
                bottom: -100,
                left: -100,
            },
            padding: {
                top: -100,
                right: -100,
                bottom: -100,
                left: -100,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 90,
                offsetY: 10,
                customScale: 0.8,
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            label: "Customer Report",
                            // formatter: function (w) {
                            //     return w.globals.seriesTotals.reduce((a, b) => {
                            //         return a + b;
                            //     }, 0);
                            // }
                        },
                    },
                },
            },
        },
    };

    let paymentStatusChartSeriesTwo = [
        {
            name: "Net Profit",
            data: [44, 100, 40, 56, 30, 58, 50],
        },
        {
            name: "Revenue",
            data: [90, 140, 80, 125, 70, 140, 110],
        },
        {
            name: "Free Cash",
            data: [60, 120, 60, 90, 50, 95, 90],
        },
    ];
    let paymentStatusChartOptionsTwo = {
        colors: ["#45B369", "#144bd6", "#FF9F29"],
        labels: ["Active", "New", "Total"],

        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 8,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        },
        yaxis: {
            categories: [
                "0",
                "10,000",
                "20,000",
                "30,000",
                "50,000",
                "1,00,000",
                "1,00,000",
            ],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let paymentStatusChartSeriesThree = [
        {
            name: "Net Profit",
            data: [
                20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000,
                18000, 22000,
            ],
        },
        {
            name: "Revenue",
            data: [
                15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000,
                14000, 16000,
            ],
        },
    ];

    let paymentStatusChartOptionsThree = {
        colors: ["#487FFF", "#FF9F29"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 250,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            categories: [
                "0",
                "5000",
                "10,000",
                "20,000",
                "30,000",
                "50,000",
                "60,000",
                "60,000",
                "70,000",
                "80,000",
                "90,000",
                "100,000",
            ],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let statisticsDonutChartSeries = [30, 25];

    let statisticsDonutChartOptions = {
        colors: ["#FF9F29", "#487FFF"],
        labels: ["Female", "Male"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 230,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };
    let candleStickChartSeries = [
        {
            data: [
                {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33],
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11],
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65],
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24],
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47],
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31],
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02],
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02],
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01],
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02],
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91],
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612],
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612],
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95],
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67],
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4],
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9],
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45],
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35],
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53],
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19],
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620],
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620],
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61],
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58],
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86],
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16],
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4],
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81],
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578],
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579],
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96],
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92],
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22],
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08],
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25],
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97],
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602],
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95],
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02],
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591],
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592],
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34],
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86],
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01],
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25],
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99],
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81],
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96],
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39],
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27],
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55],
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02],
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01],
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06],
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89],
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5],
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86],
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07],
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606],
                },
            ],
        },
    ];

    let candleStickChartOptions = {
        plotOptions: {
            candlestick: {
                colors: {
                    upward: "#487FFF", // Color for bullish candles (green)
                    downward: "#FF9F29", // Color for bearish candles (red)
                },
                wick: {
                    useFillColor: true, // Use the same color as the candle body for the wick
                },
            },
        },

        chart: {
            type: "candlestick",
            height: 350,
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: "datetime",
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };

    let statisticsDonutChartSeriesThree = [30, 25];

    var statisticsDonutChartOptionsThree = {
        colors: ["#FF9F29", "#487FFF"],
        labels: ["Female", "Male"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 260,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let upDownBarChartSeries = [
        {
            name: "Income",
            data: [44, 42, 57, 86, 58, 55, 70, 44, 42, 57, 86, 58, 55, 70],
        },
        {
            name: "Expenses",
            data: [
                -34, -22, -37, -56, -21, -35, -60, -34, -22, -37, -56, -21, -35, -60,
            ],
        },
    ];
    let upDownBarChartOptions = {
        chart: {
            stacked: true,
            type: "bar",
            height: 263,
            fontFamily: "Poppins, sans-serif",
            toolbar: {
                show: false,
            },
        },
        colors: ["#487FFF", "#EF4A00"],
        plotOptions: {
            bar: {
                columnWidth: "8",
                borderRadius: 2,
                borderRadiusWhenStacked: "all",
            },
        },
        stroke: {
            width: [5, 5],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
        },
        yaxis: {
            show: false,
            title: {
                text: undefined,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            show: false,
            type: "category",
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
                style: {
                    colors: "#d4d7d9",
                    fontSize: "10px",
                    fontWeight: 500,
                },
            },
        },
        tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
            theme: "dark",
            x: {
                show: false,
            },
        },
    };

    let semiCircleGaugeSeriesOne = [75];
    let semiCircleGaugeOptionsOne = {
        chart: {
            width: 200,
            type: "radialBar",
            sparkline: {
                enabled: true, // Remove whitespace
            },
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            radialBar: {
                offsetY: -24,
                offsetX: -14,
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#E3E6E9",
                    // strokeWidth: 32,
                    dropShadow: {
                        enabled: false,
                        top: 2,
                        left: 0,
                        color: "#999",
                        opacity: 1,
                        blur: 2,
                    },
                },
                dataLabels: {
                    show: false,
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: -2,
                        fontSize: "22px",
                    },
                },
            },
        },
        fill: {
            type: "gradient",
            colors: ["#9DBAFF"],
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.5,
                gradientToColors: ["#487FFF"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: "round",
        },
        labels: ["Percent"],
    };

    let dailyIconBarChartSeriesOne = [
        {
            name: "Sales",
            data: [
                {
                    x: "Mon",
                    y: 20,
                },
                {
                    x: "Tue",
                    y: 40,
                },
                {
                    x: "Wed",
                    y: 20,
                },
                {
                    x: "Thur",
                    y: 30,
                },
                {
                    x: "Fri",
                    y: 40,
                },
                {
                    x: "Sat",
                    y: 35,
                },
            ],
        },
    ];
    let dailyIconBarChartOptionsOne = {
        chart: {
            type: "bar",
            width: 164,
            height: 80,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: false,
                columnWidth: 14,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        fill: {
            type: "gradient",
            colors: ["#E3E6E9"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#E3E6E9"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: "#D1D5DB",
            strokeDashArray: 1, // Use a number for dashed style
            position: "back",
        },
        xaxis: {
            labels: {
                show: false, // Hide y-axis labels
            },
            type: "category",
            categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
        },
        yaxis: {
            labels: {
                show: false,
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
    };

    let transactionLineChartSeries = [
        {
            name: "This month",
            data: [4, 16, 12, 28, 22, 38, 23],
        },
    ];

    let transactionLineChartOptions = {
        chart: {
            height: 290,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            dropShadow: {
                enabled: true,
                top: 6,
                left: 0,
                blur: 4,
                color: "#000",
                opacity: 0.1,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
            },
            y: {
                show: false,
            },
            z: {
                show: false,
            },
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
            axisBorder: {
                show: false,
            },
            crosshairs: {
                show: true,
                width: 20,
                stroke: {
                    width: 0,
                },
                fill: {
                    type: "solid",
                    color: "#B1B9C4",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    },
                },
            },
        },
    };

    let userOverviewDonutChartSeries = [500, 500, 500];
    let userOverviewDonutChartOptions = {
        colors: ["#FF9F29", "#487FFF", "#E4F1FF"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 270,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let paymentStatusChartSeriesOne = [
        {
            name: "Net Profit",
            data: [44, 100, 40, 56, 30, 58, 50],
        },
        {
            name: "Free Cash",
            data: [60, 120, 60, 90, 50, 95, 90],
        },
    ];

    let paymentStatusChartOptionsOne = {
        colors: ["#45B369", "#FF9F29"],
        labels: ["Active", "New", "Total"],

        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 420,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 8,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let dailyIconBarChartSeriesTwo = [
        {
            name: "Sales",
            data: [
                {
                    x: "Mon",
                    y: 20,
                },
                {
                    x: "Tue",
                    y: 40,
                },
                {
                    x: "Wed",
                    y: 20,
                },
                {
                    x: "Thur",
                    y: 30,
                },
                {
                    x: "Fri",
                    y: 40,
                },
                {
                    x: "Sat",
                    y: 35,
                },
            ],
        },
    ];
    let dailyIconBarChartOptionsTwo = {
        chart: {
            type: "bar",
            width: 164,
            height: 80,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: false,
                columnWidth: 14,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        fill: {
            type: "gradient",
            colors: ["#E3E6E9"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#E3E6E9"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: "#D1D5DB",
            strokeDashArray: 1, // Use a number for dashed style
            position: "back",
        },
        xaxis: {
            labels: {
                show: false, // Hide y-axis labels
            },
            type: "category",
            categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
        },
        yaxis: {
            labels: {
                show: false,
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
    };

    let columnChartSeriesOne = [
        {
            name: "Net Profit",
            data: [
                20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000,
                18000, 22000,
            ],
        },
        {
            name: "Revenue",
            data: [
                15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000,
                14000, 16000,
            ],
        },
    ];
    let columnChartOptionsOne = {
        colors: ["#487FFF", "#FF9F29"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 264,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let columnChartSeriesTwo = [
        {
            name: "Sales",
            data: [
                {
                    x: "Jan",
                    y: 85000,
                },
                {
                    x: "Feb",
                    y: 70000,
                },
                {
                    x: "Mar",
                    y: 40000,
                },
                {
                    x: "Apr",
                    y: 50000,
                },
                {
                    x: "May",
                    y: 60000,
                },
                {
                    x: "Jun",
                    y: 50000,
                },
                {
                    x: "Jul",
                    y: 40000,
                },
                {
                    x: "Aug",
                    y: 50000,
                },
                {
                    x: "Sep",
                    y: 40000,
                },
                {
                    x: "Oct",
                    y: 60000,
                },
                {
                    x: "Nov",
                    y: 30000,
                },
                {
                    x: "Dec",
                    y: 50000,
                },
            ],
        },
    ];

    let columnChartOptionsTwo = {
        chart: {
            type: "bar",
            height: 264,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 8,
                borderRadiusApplication: "end", // 'around', 'end'
                borderRadiusWhenStacked: "last", // 'all', 'last'
                columnWidth: "23%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            colors: ["#487FFF"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#487FFF"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        xaxis: {
            type: "category",
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
    };

    let columnChartSeriesThree = [
        {
            name: "PRODUCT A",
            data: [14, 18, 24, 35, 14, 22, 43, 14, 22, 43, 14, 18],
        },
        {
            name: "PRODUCT B",
            data: [13, 23, 20, 25, 13, 13, 27, 13, 13, 27, 13, 23],
        },
        {
            name: "PRODUCT C",
            data: [11, 17, 20, 25, 11, 21, 14, 11, 21, 14, 11, 17],
        },
        {
            name: "PRODUCT D",
            data: [21, 15, 20, 25, 21, 22, 8, 10, 22, 8, 21, 15],
        },
    ];

    let columnChartOptionsThree = {
        chart: {
            type: "bar",
            height: 264,
            stacked: true,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: true,
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        show: false,
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        colors: ["#487FFF", "#FF9F29", "#48AB69", "#45B369"],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 4,
                columnWidth: 10,
                borderRadiusApplication: "end", // 'around', 'end'
                borderRadiusWhenStacked: "last", // 'all', 'last'
                dataLabels: {
                    total: {
                        enabled: false, // Disable total data labels
                        style: {
                            fontSize: "13px",
                            fontWeight: 900,
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false, // Disable data labels
        },
        xaxis: {
            type: "category",
            categories: [
                "01",
                "03",
                "05",
                "07",
                "10",
                "13",
                "16",
                "19",
                "21",
                "23",
                "25",
                "27",
            ],
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (value / 1000).toFixed(0) + "k";
                },
            },
        },
        tooltip: {
            y: {
                formatter: function (value) {
                    return value / 1000 + "k";
                },
            },
        },
        legend: {
            position: "right",
            offsetY: 40,
            show: false,
        },
        fill: {
            opacity: 1,
        },
    };

    let columnChartSeriesFour = [
        {
            name: "Income",
            data: [44, 42, 57, 86, 58, 55, 70, 44, 42, 57, 86, 58, 55, 70],
        },
        {
            name: "Expenses",
            data: [
                -34, -22, -37, -56, -21, -35, -60, -34, -22, -37, -56, -21, -35, -60,
            ],
        },
    ];

    let columnChartOptionsFour = {
        chart: {
            stacked: true,
            type: "bar",
            height: 263,
            fontFamily: "Poppins, sans-serif",
            toolbar: {
                show: false,
            },
        },
        colors: ["#487FFF", "#EF4A00"],
        plotOptions: {
            bar: {
                columnWidth: "8",
                borderRadius: [2],
                borderRadiusWhenStacked: "all",
            },
        },
        stroke: {
            width: [5, 5],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: true,
            position: "top",
        },
        yaxis: {
            show: false,
            title: {
                text: undefined,
            },
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "";
                },
            },
        },
        xaxis: {
            show: false,
            type: "week",
            categories: [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
            ],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: true,
                style: {
                    colors: "#d4d7d9",
                    fontSize: "10px",
                    fontWeight: 500,
                },
            },
        },
        tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
            theme: "dark",
            x: {
                show: false,
            },
        },
    };

    let defaultLineChartSeries = [
        {
            name: "This month",
            data: [0, 48, 20, 24, 6, 33, 30, 48, 35, 18, 20, 5],
        },
    ];

    let defaultLineChartOptions = {
        chart: {
            height: 264,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#487FFF"],
            width: 4,
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
            },
            y: {
                show: false,
            },
            z: {
                show: false,
            },
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
            axisBorder: {
                show: false,
            },
        },
    };

    let zoomAbleLineChartSeries = [
        {
            name: "This Day",
            data: [12, 18, 12, 48, 18, 30, 18, 15, 88, 40, 65, 24, 48],
        },
    ];
    let zoomAbleLineChartOptions = {
        chart: {
            type: "area",
            width: "100%",
            height: 264,
            sparkline: {
                enabled: false, // Remove whitespace
            },
            toolbar: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "straight",
            width: 4,
            colors: ["#487fff"],
            lineCap: "round",
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            colors: ["#487fff"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: [`${"#487fff"}00`], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 0.6, // Starting opacity
                opacityTo: 0.3, // Ending opacity
                stops: [0, 100],
            },
        },
        // Customize the circle marker color on hover
        markers: {
            colors: ["#487fff"],
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10,
            },
        },
        xaxis: {
            categories: [
                `Jan`,
                `Feb`,
                `Mar`,
                `Apr`,
                `May`,
                `Jun`,
                `Jul`,
                `Aug`,
                `Sep`,
                `Oct`,
                `Nov`,
                `Dec`,
            ],

            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    let lineDataLabelSeries = [
        {
            name: "Desktops",
            data: [5, 25, 35, 15, 21, 15, 35, 35, 51],
        },
    ];
    let lineDataLabelOptions = {
        chart: {
            height: 264,
            type: "line",
            colors: "#000",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#487FFF"], // Set the color of the series
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: "straight",
            width: 4,
            color: "#000",
        },

        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0,
            },
        },
        // Customize the circle marker color on hover
        markers: {
            colors: "#487FFF",
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            lines: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
    };

    let doubleLineChartSeries = [
        {
            name: "This Day",
            data: [8, 15, 9, 20, 10, 33, 13, 22, 8, 17, 10, 15],
        },
        {
            name: "Example",
            data: [8, 24, 18, 40, 18, 48, 22, 38, 18, 30, 20, 28],
        },
    ];

    let doubleLineChartOptions = {
        chart: {
            type: "line",
            width: "100%",
            height: 264,
            sparkline: {
                enabled: false, // Remove whitespace
            },
            toolbar: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        colors: ["#487FFF", "#FF9F29"], // Set the color of the series
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 4,
            colors: ["#FF9F29", "#487fff"],
            lineCap: "round",
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        // Customize the circle marker color on hover
        markers: {
            colors: ["#FF9F29", "#487fff"],
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10,
            },
        },
        xaxis: {
            categories: [
                `Jan`,
                `Feb`,
                `Mar`,
                `Apr`,
                `May`,
                `Jun`,
                `Jul`,
                `Aug`,
                `Sep`,
                `Oct`,
                `Nov`,
                `Dec`,
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
        legend: {
            show: false,
        },
    };

    let stepLineChartSeries = [
        {
            data: [16, 25, 38, 50, 32, 20, 42, 18, 4, 25, 12, 12],
            name: "Example",
        },
    ];
    let stepLineChartOptions = {
        chart: {
            type: "line",
            height: 270,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "stepline",
        },
        colors: ["#487FFF"], // Set the color of the series
        dataLabels: {
            enabled: false,
        },
        markers: {
            hover: {
                sizeOffset: 4,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
            position: "back",
        },
        xaxis: {
            categories: [
                `Jan`,
                `Feb`,
                `Mar`,
                `Apr`,
                `May`,
                `Jun`,
                `Jul`,
                `Aug`,
                `Sep`,
                `Oct`,
                `Nov`,
                `Dec`,
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
    };

    let timeSeriesChartSeries = [
        {
            name: "Bitcoin",
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.0],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.1],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.1],
                [1330642800000, 33.73],
            ],
        },
    ];
    let timeSeriesChartOptions = {
        chart: {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            width: 2,
            color: ["#000"],
            lineCap: "round",
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        grid: {
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 1, // Intensity of the gradient shading
                gradientToColors: ["#487FFF"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 0.4, // Starting opacity
                opacityTo: 0.1, // Ending opacity
                stops: [0, 100],
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
            title: {
                text: "Price",
            },
        },
        xaxis: {
            type: "datetime",
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
        },
    };

    let pieChartSeriesOne = [70, 80, 90, 30];

    let pieChartOptionsTwo = {
        chart: {
            height: 264,
            type: "pie",
        },
        stroke: {
            show: false, // This will remove the white border
        },
        labels: ["Team A", "Team B", "Team C", "Team D"],
        colors: ["#487FFF", "#FF9F29", "#45B369", "#EF4A00"],
        plotOptions: {
            pie: {
                dataLabels: {
                    dropShadow: {
                        enabled: true,
                    },
                },
            },
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        show: false,
                        position: "bottom", // Ensure the legend is at the bottom
                        horizontalAlign: "center", // Align the legend horizontally
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
    };

    let basicDonutChartSeries = [44, 55, 13, 33, 28, 14];
    let basicDonutChartOptions = {
        chart: {
            height: 264,
            type: "donut",
        },
        colors: ["#16a34a", "#487fff", "#2563eb", "#dc2626", "#f86624", "#ffc107"],
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        show: false,
                    },
                },
            },
        ],
        legend: {
            position: "right",
            offsetY: 0,
            height: 230,
            show: false,
        },
    };

    let radarChartSeries = [
        {
            name: "Product 1",
            data: [80, 50, 30, 40, 60, 20, 62, 30, 40, 80],
        },
        {
            name: "Product 2",
            data: [80, 60, 80, 70, 68, 60, 56, 50, 40, 45],
        },
    ];
    let radarChartOptions = {
        colors: ["#FF9F29", "#487FFF"],
        chart: {
            height: 264,
            type: "radar",
            toolbar: {
                show: false,
            },
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1,
            },
        },
        stroke: {
            width: 2,
        },
        fill: {
            opacity: 0.25,
        },
        markers: {
            size: 0,
        },
        yaxis: {
            stepSize: 20,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
    };

    let multipleSeriesChartSeries = [20, 22, 28, 10];
    let multipleSeriesChartOptions = {
        chart: {
            type: "polarArea",
            height: 264,
        },
        labels: ["Product 1", "Product 2", "Product 3", "Product 4"],
        colors: ["#487FFF", "#FF9F29", "#9935FE", "#EF4A00"],
        stroke: {
            colors: ["#487FFF", "#FF9F29", "#9935FE", "#EF4A00"],
        },
        fill: {
            opacity: 0.8,
        },
        legend: {
            position: "bottom",
            horizontalAlign: "center", // Align the legend horizontally
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let timeSeriesChartSeriesTwo = [
        {
            name: "Bitcoin",
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.0],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.1],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.1],
                [1330642800000, 33.73],
            ],
        },
    ];
    let timeSeriesChartOptionsTwo = {
        chart: {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            curve: "straight",
            width: 2,
            color: ["#000"],
            lineCap: "round",
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        grid: {
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        fill: {
            type: "gradient",
            gradient: {
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 1, // Intensity of the gradient shading
                gradientToColors: ["#487FFF"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 0.4, // Starting opacity
                opacityTo: 0.1, // Ending opacity
                stops: [0, 100],
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
            title: {
                text: "Price",
            },
        },
        xaxis: {
            type: "datetime",
        },
        tooltip: {
            shared: false,
            y: {
                formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                },
            },
        },
    };

    let gradientLineChartSeries = [
        {
            name: "This month",
            data: [12, 6, 22, 18, 38, 16, 40, 8, 35, 18, 35, 22, 50],
        },
    ];
    let gradientLineChartOptions = {
        chart: {
            height: 264,
            type: "line",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["#FF9F29"], // Specify the line color here
            width: 4,
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#0E53F4"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 0,
            strokeWidth: 3,
            hover: {
                size: 8,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: true,
            },
            y: {
                show: false,
            },
            z: {
                show: false,
            },
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
                opacity: 0.5,
            },
            borderColor: "#D1D5DB",
            strokeDashArray: 3,
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
            axisBorder: {
                show: false,
            },
        },
    };

    let enrollmentChartOptions = {
        legend: {
            show: false,
        },
        chart: {
            type: "area",
            width: "100%",
            height: 270,
            toolbar: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the lines
            lineCap: "round",
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 1,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: -20,
                right: 0,
                bottom: -10,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the gradient

            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [undefined, `${"#FF9F29"}00`], // Apply transparency to both colors
                inverseColors: false,
                opacityFrom: [0.4, 0.6], // Starting opacity for both colors
                opacityTo: [0.3, 0.3], // Ending opacity for both colors
                stops: [0, 100],
            },
        },
        markers: {
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the markers
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    let enrollmentChartSeries = [
        {
            name: "series1",
            data: [48, 35, 55, 32, 48, 30, 55, 50, 57],
        },
        {
            name: "series2",
            data: [12, 20, 15, 26, 22, 60, 40, 48, 25],
        },
    ];

    let paymentStatusChartOptionsFour = {
        colors: ["#45B369", "#FF9F29"],
        labels: ["Active", "New", "Total"],

        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 260,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 8,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let paymentStatusChartSeriesFour = [
        {
            name: "Net Profit",
            data: [44, 100, 40, 56, 30, 58, 50],
        },
        {
            name: "Free Cash",
            data: [60, 120, 60, 90, 50, 95, 90],
        },
    ];

    let radialMultipleBarOptions = {
        chart: {
            height: 300,
            type: "radialBar",
        },
        colors: ["#3D7FF9", "#ff9f29", "#16a34a"],
        stroke: {
            lineCap: "round",
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "10%", // Adjust this value to control the bar width
                },
                dataLabels: {
                    name: {
                        fontSize: "16px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                },
                track: {
                    margin: 20, // Space between the bars
                },
            },
        },
        labels: ["Cardiology", "Psychiatry", "Pediatrics"],
    };
    let radialMultipleBarSeries = [80, 40, 10];

    let statisticsDonutChartOptionsTwo = {
        colors: ["#FF9F29", "#45B369"],
        labels: ["Female", "Male"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 260,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let statisticsDonutChartSeriesTwo = [30, 25];

    let userOverviewDonutChartOptionsOne = {
        colors: ["#FF9F29", "#487FFF", "#45B369"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 270,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let userOverviewDonutChartSeriesOne = [500, 500, 500];

    let barChartOptionsOne = {
        chart: {
            type: "bar",
            height: 200,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                horizontal: false,

                columnWidth: "40%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            colors: ["#dae5ff"], // Set the starting color (top color) here
            gradient: {
                shade: "light", // Gradient shading type
                type: "vertical", // Gradient direction (vertical)
                shadeIntensity: 0.5, // Intensity of the gradient shading
                gradientToColors: ["#dae5ff"], // Bottom gradient color (with transparency)
                inverseColors: false, // Do not invert colors
                opacityFrom: 1, // Starting opacity
                opacityTo: 1, // Ending opacity
                stops: [0, 100],
            },
        },
        grid: {
            show: false,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
            padding: {
                top: -10,
                right: -10,
                bottom: -10,
                left: -10,
            },
        },
        xaxis: {
            type: "category",
            categories: ["2hr", "4hr", "6hr", "8hr", "10hr", "12hr", "14hr"],
        },
        yaxis: {
            show: false,
        },
    };

    let barChartSeriesOne = [
        {
            name: "Sales",
            data: [
                {
                    x: "Sun",
                    y: 15,
                },
                {
                    x: "Mon",
                    y: 12,
                },
                {
                    x: "Tue",
                    y: 18,
                },
                {
                    x: "Wed",
                    y: 20,
                },
                {
                    x: "Thu",
                    y: 13,
                },
                {
                    x: "Fri",
                    y: 16,
                },
                {
                    x: "Sat",
                    y: 6,
                },
            ],
        },
    ];

    let revenueChartOptionsOne = {
        legend: {
            show: false,
        },
        chart: {
            type: "area",
            width: "100%",
            height: 150,
            toolbar: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#CD20F9", "#6593FF"], // Use two colors for the lines
            lineCap: "round",
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 1,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: -20,
                right: 0,
                bottom: -10,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            colors: ["#CD20F9", "#6593FF"], // Use two colors for the gradient

            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [undefined, `${"#6593FF"}00`], // Apply transparency to both colors
                inverseColors: false,
                opacityFrom: [0.4, 0.6], // Starting opacity for both colors
                opacityTo: [0.3, 0.3], // Ending opacity for both colors
                stops: [0, 100],
            },
        },

        markers: {
            colors: ["#CD20F9", "#6593FF"],
            strokeWidth: 2,
            size: 0,
            hover: {
                size: 8,
            },
        },

        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };
    let revenueChartSeriesOne = [
        {
            name: "series1",
            data: [6, 20, 15, 48, 28, 55, 28, 52, 25, 32, 15, 25],
        },
        {
            name: "series2",
            data: [0, 8, 4, 36, 16, 42, 16, 40, 12, 24, 4, 12],
        },
    ];

    let incomeExpenseOptions = {
        legend: {
            show: false,
        },
        chart: {
            type: "area",
            width: "100%",
            height: 270,
            toolbar: {
                show: false,
            },
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 3,
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the lines
            lineCap: "round",
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 1,
            position: "back",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            row: {
                colors: undefined,
                opacity: 0.5,
            },
            column: {
                colors: undefined,
                opacity: 0.5,
            },
            padding: {
                top: -20,
                right: 0,
                bottom: -10,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the gradient

            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: [undefined, `${"#FF9F29"}00`], // Apply transparency to both colors
                inverseColors: false,
                opacityFrom: [0.4, 0.6], // Starting opacity for both colors
                opacityTo: [0.3, 0.3], // Ending opacity for both colors
                stops: [0, 100],
            },
        },
        markers: {
            colors: ["#487FFF", "#FF9F29"], // Use two colors for the markers
            strokeWidth: 3,
            size: 0,
            hover: {
                size: 10,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            tooltip: {
                enabled: false,
            },
            labels: {
                formatter: function (value) {
                    return value;
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return "$" + value + "k";
                },
                style: {
                    fontSize: "14px",
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    let incomeExpenseSeries = [
        {
            name: "series1",
            data: [48, 35, 50, 32, 48, 40, 55, 50, 60],
        },
        {
            name: "series2",
            data: [12, 20, 15, 26, 22, 30, 25, 35, 25],
        },
    ];

    let userOverviewDonutChartOptionsTwo = {
        colors: ["#FF9F29", "#487FFF", "#45B369", "#9935FE"],
        labels: ["Purchase", "Sales", "Expense", "Gross Profit"],
        legend: {
            show: false,
        },
        chart: {
            type: "donut",
            height: 270,
            sparkline: {
                enabled: true, // Remove whitespace
            },
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        stroke: {
            width: 0,
        },
        dataLabels: {
            enabled: true,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let userOverviewDonutChartSeriesTwo = [30, 30, 20, 20];

    let purchaseSaleChartOptions = {
        colors: ["#45B369", "#FF9F29"],
        labels: ["Active", "New", "Total"],

        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 260,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 8,
            },
        },
        dataLabels: {
            enabled: false,
        },
        states: {
            hover: {
                filter: {
                    type: "none",
                },
            },
        },
        stroke: {
            show: true,
            width: 0,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let purchaseSaleChartSeries = [
        {
            name: "Net Profit",
            data: [44, 100, 40, 56, 30, 58, 50],
        },
        {
            name: "Free Cash",
            data: [60, 120, 60, 90, 50, 95, 90],
        },
    ];

    let balanceStatisticsOptions = {
        colors: ["#487FFF", "#FF9F29"],
        labels: ["Active", "New", "Total"],
        legend: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 250,
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "#D1D5DB",
            strokeDashArray: 4, // Use a number for dashed style
            position: "back",
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: 10,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            categories: [
                "0",
                "5000",
                "10,000",
                "20,000",
                "30,000",
                "50,000",
                "60,000",
                "60,000",
                "70,000",
                "80,000",
                "90,000",
                "100,000",
            ],
        },
        fill: {
            opacity: 1,
            width: 18,
        },
    };

    let balanceStatisticsSeries = [
        {
            name: "Net Profit",
            data: [
                20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000,
                18000, 22000,
            ],
        },
        {
            name: "Revenue",
            data: [
                15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000,
                14000, 16000,
            ],
        },
    ];

    let expenseStatisticsOptions = {
        chart: {
            height: 240,
            type: "pie",
        },
        labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
        colors: ["#02BCAF", "#F0437D", "#1C52F6", "#43DCFF"],
        legend: {
            show: true,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    let expenseStatisticsSeries = [30, 30, 30, 30];

    return {
        expenseStatisticsOptions,
        expenseStatisticsSeries,
        balanceStatisticsOptions,
        balanceStatisticsSeries,
        purchaseSaleChartOptions,
        purchaseSaleChartSeries,
        userOverviewDonutChartOptionsTwo,
        userOverviewDonutChartSeriesTwo,
        incomeExpenseOptions,
        incomeExpenseSeries,
        revenueChartOptionsOne,
        revenueChartSeriesOne,
        barChartOptionsOne,
        barChartSeriesOne,
        userOverviewDonutChartOptionsOne,
        userOverviewDonutChartSeriesOne,
        statisticsDonutChartOptionsTwo,
        statisticsDonutChartSeriesTwo,
        radialMultipleBarOptions,
        radialMultipleBarSeries,
        paymentStatusChartOptionsFour,
        paymentStatusChartSeriesFour,
        chartSeries,
        chartOptions,
        barChartSeries,
        barChartOptions,
        donutChartSeries,
        donutChartOptions,
        paymentStatusChartSeries,
        paymentStatusChartOptions,
        barChartSeriesTwo,
        barChartOptionsTwo,
        donutChartSeriesTwo,
        donutChartOptionsTwo,
        paymentStatusChartSeriesTwo,
        paymentStatusChartOptionsTwo,
        createChart,
        createChartTwo,
        createChartThree,
        createChartFour,
        createChartFive,
        createChartSix,
        createChartSeven,
        createChartEight,
        createChartNine,
        createChartTen,
        createChatEleven,
        paymentStatusChartSeriesThree,
        paymentStatusChartOptionsThree,
        statisticsDonutChartSeries,
        statisticsDonutChartOptions,
        candleStickChartSeries,
        candleStickChartOptions,
        statisticsDonutChartSeriesThree,
        statisticsDonutChartOptionsThree,
        upDownBarChartSeries,
        upDownBarChartOptions,
        semiCircleGaugeSeriesOne,
        semiCircleGaugeOptionsOne,
        dailyIconBarChartSeriesOne,
        dailyIconBarChartOptionsOne,
        transactionLineChartSeries,
        transactionLineChartOptions,
        userOverviewDonutChartSeries,
        userOverviewDonutChartOptions,
        paymentStatusChartSeriesOne,
        paymentStatusChartOptionsOne,
        dailyIconBarChartSeriesTwo,
        dailyIconBarChartOptionsTwo,
        columnChartSeriesOne,
        columnChartOptionsOne,
        columnChartSeriesTwo,
        columnChartOptionsTwo,
        columnChartSeriesThree,
        columnChartOptionsThree,
        columnChartSeriesFour,
        columnChartOptionsFour,
        defaultLineChartSeries,
        defaultLineChartOptions,
        zoomAbleLineChartSeries,
        zoomAbleLineChartOptions,
        lineDataLabelSeries,
        lineDataLabelOptions,
        doubleLineChartSeries,
        doubleLineChartOptions,
        stepLineChartSeries,
        stepLineChartOptions,
        timeSeriesChartSeries,
        timeSeriesChartOptions,
        pieChartSeriesOne,
        pieChartOptionsTwo,
        basicDonutChartSeries,
        basicDonutChartOptions,
        radarChartSeries,
        radarChartOptions,
        multipleSeriesChartSeries,
        multipleSeriesChartOptions,
        timeSeriesChartSeriesTwo,
        timeSeriesChartOptionsTwo,
        gradientLineChartSeries,
        gradientLineChartOptions,
        enrollmentChartOptions,
        enrollmentChartSeries,
    };
};

export default useReactApexChart;
