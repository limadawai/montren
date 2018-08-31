$(function(){
    $('#visitor-graph').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: ''
        },
        legend: {
            enabled:false
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],       
            labels:{
                style:{
                    color:'#ccc',
                    textTransform:'uppercase'
                }
            },
            gridLineWidth:1,         
            gridLineColor:'#eee'
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor:'#eee'
        },
        tooltip: {
            shared: true,
            valueSuffix: ' users',
            borderWidth:0
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5,
                lineWidth:'0',
                marker:{
                    enabled:false
                }
            }
        },
        series: [{
            name: 'Unique Visitors',
            color:'#00426e',
            data: [0, 4, 3, 5, 4, 10, 0]
        },{
            name: 'Returned Visitors',
            color:'#10667d',
            data: [0, 2, 5, 3, 7, 5, 0]
        }]
    });

    $('#visitor-graph1').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: ''
        },
        legend: {
            enabled:false
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],       
            labels:{
                style:{
                    color:'#ccc',
                    textTransform:'uppercase'
                }
            },
            gridLineWidth:1,         
            gridLineColor:'#eee'
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineColor:'#eee'
        },
        tooltip: {
            shared: true,
            valueSuffix: ' users',
            borderWidth:0
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5,
                lineWidth:'0',
                marker:{
                    enabled:false
                }
            }
        },
        series: [{
            name: 'Unique Visitors',
            color:'#00426e',
            data: [0, 4, 3, 5, 4, 10, 0]
        },{
            name: 'Returned Visitors',
            color:'#10667d',
            data: [0, 2, 5, 3, 7, 5, 0]
        }]
    });

    $('#container1').highcharts({

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
            credits: {
                    enabled: false
                },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            },
            areaspline: {
                fillOpacity: 0.2,
                lineWidth:'0',
                marker:{
                    enabled:false
                }
            }
        },

        series: [{
            name: 'Installation',
            color:'#00426e',
            data: [43934, 52503, 57177, 69658]
        }, {
            name: 'Manufacturing',
            color:'#10667d',
            data: [24916, 24064, 29742, 29851]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 100
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });

    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                color:'#10667d',
                y: 56.33,
                sliced: true,
                selected: true
            }, {
                name: 'Chrome',
                color:'#222',
                y: 24.03
            },{
                name: 'Opera',
                color:'#00426e',
                y: 20.91
            }]
        }]
    });


    $('#container21').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                color:'#10667d',
                y: 56.33,
                sliced: true,
                selected: true
            }, {
                name: 'Chrome',
                color:'#222',
                y: 24.03
            },{
                name: 'Opera',
                color:'#00426e',
                y: 20.91
            }]
        }]
    });

    $('#container212').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                color:'#10667d',
                y: 56.33,
                sliced: true,
                selected: true
            }, {
                name: 'Chrome',
                color:'#222',
                y: 24.03
            },{
                name: 'Opera',
                color:'#00426e',
                y: 20.91
            }]
        }]
    });

    $('#container213').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                color:'#10667d',
                y: 56.33,
                sliced: true,
                selected: true
            }, {
                name: 'Chrome',
                color:'#222',
                y: 24.03
            },{
                name: 'Opera',
                color:'#00426e',
                y: 20.91
            }]
        }]
    });

    $('#container214').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                color:'#10667d',
                y: 56.33,
                sliced: true,
                selected: true
            }, {
                name: 'Chrome',
                color:'#222',
                y: 24.03
            },{
                name: 'Opera',
                color:'#00426e',
                y: 20.91
            }]
        }]
    });


    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    $('#container3').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: ''
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: ''
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: '',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });

    $('#container215').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['2015', '2016', '2017', '2018']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Anggaran',
            data: [5, 3, 1, 2]
        }, {
            name: 'Realisasi',
            data: [2, 2, 2, 1]
        }]
    });

});