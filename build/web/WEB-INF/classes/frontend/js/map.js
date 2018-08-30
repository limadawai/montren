$(function () {
    var data = [
        {
            "hc-key": "id-3700",
            "value": 10
        },
        {
            "hc-key": "id-ac",
            "value": 30
        },
        {
            "hc-key": "id-ki",
            "value": 40
        },
        {
            "hc-key": "id-jt",
            "value": 60
        },
        {
            "hc-key": "id-be",
            "value": 40
        },
        {
            "hc-key": "id-bt",
            "value": 70
        },
        {
            "hc-key": "id-kb",
            "value": 80
        },
        {
            "hc-key": "id-bb",
            "value": 40
        },
        {
            "hc-key": "id-ba",
            "value": 20
        },
        {
            "hc-key": "id-ji",
            "value": 34
        },
        {
            "hc-key": "id-ks",
            "value": 56
        },
        {
            "hc-key": "id-nt",
            "value": 78
        },
        {
            "hc-key": "id-se",
            "value": 45
        },
        {
            "hc-key": "id-kr",
            "value": 35
        },
        {
            "hc-key": "id-ib",
            "value": 67
        },
        {
            "hc-key": "id-su",
            "value": 56
        },
        {
            "hc-key": "id-ri",
            "value": 78
        },
        {
            "hc-key": "id-sw",
            "value": 23
        },
        {
            "hc-key": "id-la",
            "value": 32
        },
        {
            "hc-key": "id-sb",
            "value": 40
        },
        {
            "hc-key": "id-ma",
            "value": 45
        },
        {
            "hc-key": "id-nb",
            "value": 67
        },
        {
            "hc-key": "id-sg",
            "value": 23
        },
        {
            "hc-key": "id-st",
            "value": 24
        },
        {
            "hc-key": "id-pa",
            "value": 59
        },
        {
            "hc-key": "id-1024",
            "value": 80
        },
        {
            "hc-key": "id-jk",
            "value": 34
        },
        {
            "hc-key": "id-jr",
            "value": 54
        },
        {
            "hc-key": "id-go",
            "value": 53
        },
        {
            "hc-key": "id-yo",
            "value": 30
        },
        {
            "hc-key": "id-kt",
            "value": 23
        },
        {
            "hc-key": "id-sl",
            "value": 64
        },
        {
            "hc-key": "id-sr",
            "value": 64
        },
        {
            "hc-key": "id-ja",
            "value": 46
        }
    ];

    // Initiate the chart
    $('#mapbox').highcharts('Map', {
        chart:{
            backgroundColor:'transparent'
        },
        credits:{
            enabled:false
        },
        title : {
            text : ''
        },

        mapNavigation: {
            enabled: false ,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#0d5ead',
            maxColor: '#093d6f'
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/id/id-all'],
            joinBy: 'hc-key',
            name: 'Jumlah Anggota',
            states: {
                hover: {
                    color: '#fdb813'
                }
            },
            dataLabels: {
                enabled: false,
                color: 'white',
                formatter: function () {
                    if (this.point.value) {
                        return this.point.name;
                    }
                }
            }
        }]
    });
});