import * as Highcharts from 'highcharts';

Highcharts.setOptions({
    colors:['#8C61FF', '#FF8C4C', '#F4BF00', '#46C8F1', '#00CC88', '#FF5E60', '#FF8FB8', '#E9FF8F'],
    chart: {
        backgroundColor: '#2B2B43',
        
    },
    xAxis: {
        gridLineWidth: 0,
        lineColor: '#D9D9D9',
        tickColor: '#D9D9D9',
        labels: {
            style: {
                color: '#D9D9D9',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        gridLineWidth: 0,
        lineColor: '#D9D9D9',
        tickColor: '#D9D9D9',
        labels: {
            style: {
                color: '#D9D9D9',
                font: '11px Trebuchet MS, Verdana, sans-serif'
            }
        }
    },
    credits: {
        enabled: true,
        href: 'https://openfin.co',
        text: 'OpenFin'
    }, 
});

const options:Highcharts.Options = {    
    chart: {
        height: 300,
        width: 600,
//        marginRight: 120
    },
    title: {
        text: 'Hightcharts line'
    },
    yAxis: {
        title: {
            text: 'TradeNotional|Lit',
            style: { color: '#D9D9D9' }
        }
    },
    data: {
//        parseDate: Date.parse
//        dateFormat: 'mm dd'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                // @ts-ignore
              return Highcharts.dateFormat('%b %e', this.value);
            }
          },        
        accessibility: {
//            rangeDescription: 'Range: 2010 to 2017'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemStyle: { color: '#D9D9D9'}
    },
    plotOptions: {
        series: {
            label: {
                // connectorAllowed: false
            },
            marker: {
                enabled: false
            }
            
        }
    },
};

const data = [
	['2019-05-01', 43.42],
	['2019-05-02', 42.65],
	['2019-05-03', 43.29],
	['2019-05-06', 43.30],
	['2019-05-07', 42.76],
	['2019-05-08', 42.55],
	['2019-05-09', 42.92],
	['2019-05-10', 43.15],
	['2019-05-13', 42.28],
	['2019-05-14', 42.91],
	['2019-05-15', 42.49],
	['2019-05-16', 43.19],
	['2019-05-17', 43.54],
	['2019-05-20', 42.78],
	['2019-05-21', 43.29],
	['2019-05-22', 43.30],
	['2019-05-23', 42.73],
	['2019-05-24', 42.67],
	['2019-05-25', 42.75],
	['2019-05-26', 42.75],
	['2019-05-27', 42.75],
	['2019-05-28', 42.75],
];

function randomData(factor:number = 1) {
    return data.map(item => {
        return [ Date.parse(item[0] as string),  Math.random()*10*factor]
    });
}


const areachart = Highcharts.chart('area-chart1', options);
const area:Highcharts.SeriesAreaOptions = {
    type: 'area',
//    color: '#8C61FF',
    lineWidth: 1,
    allowPointSelect: false,
    fillColor: {
        linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
        },
        stops:[
            [0, 'rgba(140, 97, 255, 0.3)'],
            [1, 'rgba(140, 97, 255, 0)']
        ]
    }
//    xAxis: 'datetime',
}
areachart.addSeries({...area, name: 'area 1', data: randomData(1) } , true);

const areachart2 = Highcharts.chart('area-chart2', options);
const area2:Highcharts.SeriesAreaOptions = {
    type: 'area',
//    color: '#8C61FF',
    lineWidth: 1,
    allowPointSelect: false,
//    xAxis: 'datetime',
}
areachart2.addSeries({...area2, name: 'area 21', data: randomData(1) } , true);
areachart2.addSeries({...area2, name: 'area 22', data: randomData(1) } , true);
areachart2.addSeries({...area2, name: 'area 23', data: randomData(1) } , true);


const linechart = Highcharts.chart('line-chart', options);
const line:Highcharts.SeriesLineOptions = {
    type: 'line',
//    color: '#8C61FF',
    lineWidth: 1,
    allowPointSelect: false,
//    xAxis: 'datetime',
}
linechart.addSeries({...line, name: 'line 1', data: randomData(1) } , true);
linechart.addSeries({...line, name: 'line 2',data: randomData(1) } , true);

const stackchart = Highcharts.chart('stack-chart', { ...options, 
    tooltip: {
        split: true,
    },
    plotOptions: {
        area: {
            stacking: 'percent',
            marker: {
                lineWidth:0
            }
        },
        series: {
            marker: {
                enabled: false
            }
        }
    }
});
const stack:Highcharts.SeriesAreaOptions = {
    type: 'area',
//    color: '#8C61FF',
    lineWidth: 1,
    allowPointSelect: false,
//    xAxis: 'datetime',
}
stackchart.addSeries({...area2, name: 'stack 1', data: randomData(1) } , true);
stackchart.addSeries({...area2, name: 'stack 2', data: randomData(1) } , true);
stackchart.addSeries({...area2, name: 'stack 3', data: randomData(1) } , true);
