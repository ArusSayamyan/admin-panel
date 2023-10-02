<template>
  <div class="container p-4 pt-[100px] mx-auto">
<!--    <div id="chart">-->
<!--      <ClientOnly>-->
<!--        <div>-->
<!--          <apexchart type="bar" height="500" :options="chartOptions" :series="series"></apexchart>-->
<!--        </div>-->
<!--        <div class="pt-[100px]">-->
<!--          <apexchart type="area" height="350" :options="areaOptions" :series="areaSeries"></apexchart>-->
<!--        </div>-->
<!--      </ClientOnly>-->
<!--    </div>-->
  </div>
</template>

<script setup>
// const series = [{
//   name: 'men\'s clothing',
//   data: [280, 200, 150, 70]
// }, {
//   name: 'jewelery',
//   data: [120, 220, 175, 60]
// }, {
//   name: 'electronics',
//   data: [50, 25, 215, 280]
// }, {
//   name: 'women\'s clothing',
//   data: [100, 255, 210, 275]
// }]
// const chartOptions = {
//   chart: {
//     type: 'bar',
//     height: 150,
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: '35%',
//       endingShape: 'rounded',
//       borderRadius: 12,
//       markers: {
//         size: 0,
//         colors: undefined,
//         strokeColors: '#fff',
//         strokeWidth: 2,
//         strokeOpacity: 0.9,
//         strokeDashArray: 0,
//         fillOpacity: 1,
//         discrete: [],
//         shape: "circle",
//         radius: 2,
//         offsetX: 0,
//         offsetY: 0,
//         onClick: undefined,
//         onDblClick: undefined,
//         showNullDataPoints: true,
//         hover: {
//           size: undefined,
//           sizeOffset: 3
//         }
//       }
//
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ['transparent']
//   },
//   xaxis: {
//     categories: ['2020', '2021', '2022', '2023'],
//   },
//   title: {
//     text: 'PRODUCT SALES',
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left',
//     markers: {
//       width: 12,
//       height: 12,
//       strokeWidth: 0,
//       strokeColor: '#fff',
//       fillColors: ['#43BCCD', '#6D32A5', '#F53361', '#50be36'],
//       radius: 12,
//       offsetX: 0,
//       offsetY: 0
//     },
//   },
//
//   yaxis: {
//     min: 0,
//     max: 300,
//     tickAmount: 4
//   },
//   fill: {
//     colors: ['#43BCCD', '#6D32A5', '#F53361', '#50be36'],
//     opacity: 1
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands"
//       }
//     }
//   }
// }


//area chart

// const areaSeries = [{
//   name: 'men\'s clothing',
//   data: [50, 125, 75, 155]
// }, {
//   name: 'jewelery',
//   data: [60, 100, 50, 150]
// }, {
//   name: 'electronics',
//   data: [175, 75, 150, 190]
// },
//   {
//     name: 'women\'s clothing',
//     data: [100, 85, 150, 60]
//   }]
//
// const areaOptions = {
//   chart: {
//     type: 'area',
//     stacked: false,
//     height: 350,
//     zoom: {
//       enabled: false
//     },
//   },
//   dataLabels: {
//     enabled: false
//   },
//   markers: {
//     size: 0,
//   },
//   fill: {
//     type: 'gradient',
//     gradient: {
//       shadeIntensity: 1,
//       inverseColors: false,
//       opacityFrom: 0.45,
//       opacityTo: 0.05,
//       stops: [20, 100, 100, 100]
//     },
//   },
//   yaxis: {
//     min: 0,
//     max: 200,
//     tickAmount: 4,
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false
//     }
//   },
//   xaxis: {
//     categories: ['2020', '2021', '2022', '2023'],
//   },
//   title: {
//     text: 'ORDER STATISTIC',
//     align: 'left',
//     offsetX: 14
//   },
//   tooltip: {
//     shared: true
//   },
//   legend: {
//     position: 'top',
//     horizontalAlign: 'left',
//     offsetX: -10
//   }
// }

definePageMeta({
  layout: 'admin-panel',
})
</script>
