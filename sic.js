function showPasswordModal() {
    $('#hidePageWithPassword').modal({ backdrop: 'static', keyboard: false });
    $("#submitPasswordBtn").on('click', function () {
        checkPasswordModal();
    });
}

function checkPasswordModal() {
    let username = $("#pageUsername").val();
    let password = $("#pagePassword").val();

    if (username == "admin" && password == "password") {
        $('#hidePageWithPassword').modal('hide');
    }
    else {
        $("#invalidPasswordAlert").show();
    }
}

function initialize() {
    window.si = {};
    window.si.weather = {};
    window.si.weather.fields = {};
}

function doButtonThing() {
    confirmMetadata();
}

function confirmMetadata() {
    /*
    fetch('https://api.weather.gov/points/37.9887,-76.0405')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(metadataReturned)
        .catch(function (error) {
            // Handle errors here
        });
    */
    var tempJSON = {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld",
            {
                "@version": "1.1",
                "wx": "https://api.weather.gov/ontology#",
                "s": "https://schema.org/",
                "geo": "http://www.opengis.net/ont/geosparql#",
                "unit": "http://codes.wmo.int/common/unit/",
                "@vocab": "https://api.weather.gov/ontology#",
                "geometry": {
                    "@id": "s:GeoCoordinates",
                    "@type": "geo:wktLiteral"
                },
                "city": "s:addressLocality",
                "state": "s:addressRegion",
                "distance": {
                    "@id": "s:Distance",
                    "@type": "s:QuantitativeValue"
                },
                "bearing": {
                    "@type": "s:QuantitativeValue"
                },
                "value": {
                    "@id": "s:value"
                },
                "unitCode": {
                    "@id": "s:unitCode",
                    "@type": "@id"
                },
                "forecastOffice": {
                    "@type": "@id"
                },
                "forecastGridData": {
                    "@type": "@id"
                },
                "publicZone": {
                    "@type": "@id"
                },
                "county": {
                    "@type": "@id"
                }
            }
        ],
        "id": "https://api.weather.gov/points/37.9887,-76.0405",
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76.040499999999994,
                37.988700000000001
            ]
        },
        "properties": {
            "@id": "https://api.weather.gov/points/37.9887,-76.0405",
            "@type": "wx:Point",
            "cwa": "AKQ",
            "forecastOffice": "https://api.weather.gov/offices/AKQ",
            "gridId": "AKQ",
            "gridX": 92,
            "gridY": 104,
            "forecast": "https://api.weather.gov/gridpoints/AKQ/92,104/forecast",
            "forecastHourly": "https://api.weather.gov/gridpoints/AKQ/92,104/forecast/hourly",
            "forecastGridData": "https://api.weather.gov/gridpoints/AKQ/92,104",
            "observationStations": "https://api.weather.gov/gridpoints/AKQ/92,104/stations",
            "relativeLocation": {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -76.028790999999998,
                        37.977220000000003
                    ]
                },
                "properties": {
                    "city": "Smith Island",
                    "state": "MD",
                    "distance": {
                        "unitCode": "wmoUnit:m",
                        "value": 1637.8704738786
                    },
                    "bearing": {
                        "unitCode": "wmoUnit:degree_(angle)",
                        "value": 321
                    }
                }
            },
            "forecastZone": "https://api.weather.gov/zones/forecast/MDZ023",
            "county": "https://api.weather.gov/zones/county/MDC039",
            "fireWeatherZone": "https://api.weather.gov/zones/fire/MDZ023",
            "timeZone": "America/New_York",
            "radarStation": "KDOX"
        }
    };
    metadataReturned(tempJSON);
}

function metadataReturned(data) {
    // Process the response data here
    window.si.weather.fields.metadata = data;
    attemptToGetForcast();
    attemptToGetHourlyForcast();
}

function attemptToGetForcast() {
    //var context = window.si.weather;
    //var url = "";
    //if (context.fields.metadata) {
    //    if (context.fields.metadata.properties) {
    //        if (context.fields.metadata.properties.forecast) {
    //            url = context.fields.metadata.properties.forecast;
    //        }
    //    }
    //}
    //if (url != "") {
    //    fetch(url)
    //        .then(function (response) {
    //            if (response.ok) {
    //                return response.json();
    //            }
    //            throw new Error('Network response was not ok.');
    //        })
    //        .then(forecastReturned)
    //        .catch(function (error) {
    //            // Handle errors here
    //        });
    //}
    //else {
    //    insertError("weatherPopup", "There is no valid Forecast URL!");
    //}

    var tempForecast = {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld",
            {
                "@version": "1.1",
                "wx": "https://api.weather.gov/ontology#",
                "geo": "http://www.opengis.net/ont/geosparql#",
                "unit": "http://codes.wmo.int/common/unit/",
                "@vocab": "https://api.weather.gov/ontology#"
            }
        ],
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        -76.048747000000006,
                        38.010953000000001
                    ],
                    [
                        -76.052677200000005,
                        37.988939799999997
                    ],
                    [
                        -76.024737700000003,
                        37.985839799999994
                    ],
                    [
                        -76.020801900000009,
                        38.007852599999993
                    ],
                    [
                        -76.048747000000006,
                        38.010953000000001
                    ]
                ]
            ]
        },
        "properties": {
            "updated": "2023-09-13T22:03:13+00:00",
            "units": "us",
            "forecastGenerator": "BaselineForecastGenerator",
            "generatedAt": "2023-09-13T23:25:56+00:00",
            "updateTime": "2023-09-13T22:03:13+00:00",
            "validTimes": "2023-09-13T16:00:00+00:00/P7DT21H",
            "elevation": {
                "unitCode": "wmoUnit:m",
                "value": 0.91439999999999999
            },
            "periods": [
                {
                    "number": 1,
                    "name": "Tonight",
                    "startTime": "2023-09-13T19:00:00-04:00",
                    "endTime": "2023-09-14T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 19.444444444444443
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 84
                    },
                    "windSpeed": "8 to 20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": "Partly cloudy, with a low around 70. North wind 8 to 20 mph."
                },
                {
                    "number": 2,
                    "name": "Thursday",
                    "startTime": "2023-09-14T06:00:00-04:00",
                    "endTime": "2023-09-14T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 80,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "15 to 20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
                    "shortForecast": "Sunny",
                    "detailedForecast": "Sunny, with a high near 80. North wind 15 to 20 mph."
                },
                {
                    "number": 3,
                    "name": "Thursday Night",
                    "startTime": "2023-09-14T18:00:00-04:00",
                    "endTime": "2023-09-15T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 65,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "17 to 24 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc?size=medium",
                    "shortForecast": "Clear",
                    "detailedForecast": "Clear, with a low around 65. North wind 17 to 24 mph, with gusts as high as 33 mph."
                },
                {
                    "number": 4,
                    "name": "Friday",
                    "startTime": "2023-09-15T06:00:00-04:00",
                    "endTime": "2023-09-15T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 75
                    },
                    "windSpeed": "18 to 24 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc?size=medium",
                    "shortForecast": "Sunny",
                    "detailedForecast": "Sunny, with a high near 75. North wind 18 to 24 mph, with gusts as high as 32 mph."
                },
                {
                    "number": 5,
                    "name": "Friday Night",
                    "startTime": "2023-09-15T18:00:00-04:00",
                    "endTime": "2023-09-16T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 68,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "14 to 18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
                    "shortForecast": "Clear",
                    "detailedForecast": "Clear, with a low around 68. North wind 14 to 18 mph."
                },
                {
                    "number": 6,
                    "name": "Saturday",
                    "startTime": "2023-09-16T06:00:00-04:00",
                    "endTime": "2023-09-16T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "12 to 17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                    "shortForecast": "Sunny",
                    "detailedForecast": "Sunny, with a high near 78."
                },
                {
                    "number": 7,
                    "name": "Saturday Night",
                    "startTime": "2023-09-16T18:00:00-04:00",
                    "endTime": "2023-09-17T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": "Mostly clear, with a low around 70."
                },
                {
                    "number": 8,
                    "name": "Sunday",
                    "startTime": "2023-09-17T06:00:00-04:00",
                    "endTime": "2023-09-17T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 79,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
                    "shortForecast": "Sunny",
                    "detailedForecast": "Sunny, with a high near 79."
                },
                {
                    "number": 9,
                    "name": "Sunday Night",
                    "startTime": "2023-09-17T18:00:00-04:00",
                    "endTime": "2023-09-18T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 30
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "10 to 15 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi/tsra_hi,30?size=medium",
                    "shortForecast": "Chance Showers And Thunderstorms",
                    "detailedForecast": "A chance of showers and thunderstorms after 8pm. Partly cloudy, with a low around 70. Chance of precipitation is 30%."
                },
                {
                    "number": 10,
                    "name": "Monday",
                    "startTime": "2023-09-18T06:00:00-04:00",
                    "endTime": "2023-09-18T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 79,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 30
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 81
                    },
                    "windSpeed": "8 to 13 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,30/rain_showers?size=medium",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": "A chance of rain showers before 2pm. Sunny, with a high near 79. Chance of precipitation is 30%."
                },
                {
                    "number": 11,
                    "name": "Monday Night",
                    "startTime": "2023-09-18T18:00:00-04:00",
                    "endTime": "2023-09-19T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "8 to 13 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": "Partly cloudy, with a low around 70."
                },
                {
                    "number": 12,
                    "name": "Tuesday",
                    "startTime": "2023-09-19T06:00:00-04:00",
                    "endTime": "2023-09-19T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "8 to 12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": "Mostly sunny, with a high near 78."
                },
                {
                    "number": 13,
                    "name": "Tuesday Night",
                    "startTime": "2023-09-19T18:00:00-04:00",
                    "endTime": "2023-09-20T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "8 to 12 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": "Partly cloudy, with a low around 70."
                },
                {
                    "number": 14,
                    "name": "Wednesday",
                    "startTime": "2023-09-20T06:00:00-04:00",
                    "endTime": "2023-09-20T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": null
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 78
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": "Mostly sunny, with a high near 77."
                }
            ]
        }
    };
    forecastReturned(tempForecast)
}

function attemptToGetHourlyForcast() {
    //var context = window.si.weather;
    //var url = "";
    //if (context.fields.metadata) {
    //    if (context.fields.metadata.properties) {
    //        if (context.fields.metadata.properties.forecast) {
    //            url = context.fields.metadata.properties.forecast;
    //        }
    //    }
    //}
    ////https://api.weather.gov/gridpoints/AKQ/92,104/forecast/hourly
    //if (url != "") {
    //    fetch(url)
    //        .then(function (response) {
    //            if (response.ok) {
    //                return response.json();
    //            }
    //            throw new Error('Network response was not ok.');
    //        })
    //        .then(forecastReturned)
    //        .catch(function (error) {
    //            // Handle errors here
    //        });
    //}
    //else {
    //    insertError("weatherPopup", "There is no valid Forecast URL!");
    //}

    var hourlyForcast = {
        "@context": [
            "https://geojson.org/geojson-ld/geojson-context.jsonld",
            {
                "@version": "1.1",
                "wx": "https://api.weather.gov/ontology#",
                "geo": "http://www.opengis.net/ont/geosparql#",
                "unit": "http://codes.wmo.int/common/unit/",
                "@vocab": "https://api.weather.gov/ontology#"
            }
        ],
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        -76.048747000000006,
                        38.010953000000001
                    ],
                    [
                        -76.052677200000005,
                        37.988939799999997
                    ],
                    [
                        -76.024737700000003,
                        37.985839799999994
                    ],
                    [
                        -76.020801900000009,
                        38.007852599999993
                    ],
                    [
                        -76.048747000000006,
                        38.010953000000001
                    ]
                ]
            ]
        },
        "properties": {
            "updated": "2023-09-13T22:03:13+00:00",
            "units": "us",
            "forecastGenerator": "HourlyForecastGenerator",
            "generatedAt": "2023-09-14T01:48:08+00:00",
            "updateTime": "2023-09-13T22:03:13+00:00",
            "validTimes": "2023-09-13T16:00:00+00:00/P7DT21H",
            "elevation": {
                "unitCode": "wmoUnit:m",
                "value": 0.91439999999999999
            },
            "periods": [
                {
                    "number": 1,
                    "name": "",
                    "startTime": "2023-09-13T21:00:00-04:00",
                    "endTime": "2023-09-13T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 74
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 2,
                    "name": "",
                    "startTime": "2023-09-13T22:00:00-04:00",
                    "endTime": "2023-09-13T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/few,9?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 3,
                    "name": "",
                    "startTime": "2023-09-13T23:00:00-04:00",
                    "endTime": "2023-09-14T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/few,8?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 4,
                    "name": "",
                    "startTime": "2023-09-14T00:00:00-04:00",
                    "endTime": "2023-09-14T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/few,8?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 5,
                    "name": "",
                    "startTime": "2023-09-14T01:00:00-04:00",
                    "endTime": "2023-09-14T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 19.444444444444443
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 84
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/few,8?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 6,
                    "name": "",
                    "startTime": "2023-09-14T02:00:00-04:00",
                    "endTime": "2023-09-14T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 19.444444444444443
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 84
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,6?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 7,
                    "name": "",
                    "startTime": "2023-09-14T03:00:00-04:00",
                    "endTime": "2023-09-14T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 81
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,6?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 8,
                    "name": "",
                    "startTime": "2023-09-14T04:00:00-04:00",
                    "endTime": "2023-09-14T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 81
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,6?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 9,
                    "name": "",
                    "startTime": "2023-09-14T05:00:00-04:00",
                    "endTime": "2023-09-14T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,3?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 10,
                    "name": "",
                    "startTime": "2023-09-14T06:00:00-04:00",
                    "endTime": "2023-09-14T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,3?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 11,
                    "name": "",
                    "startTime": "2023-09-14T07:00:00-04:00",
                    "endTime": "2023-09-14T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,3?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 12,
                    "name": "",
                    "startTime": "2023-09-14T08:00:00-04:00",
                    "endTime": "2023-09-14T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,0?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 13,
                    "name": "",
                    "startTime": "2023-09-14T09:00:00-04:00",
                    "endTime": "2023-09-14T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,0?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 14,
                    "name": "",
                    "startTime": "2023-09-14T10:00:00-04:00",
                    "endTime": "2023-09-14T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 15,
                    "name": "",
                    "startTime": "2023-09-14T11:00:00-04:00",
                    "endTime": "2023-09-14T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 16,
                    "name": "",
                    "startTime": "2023-09-14T12:00:00-04:00",
                    "endTime": "2023-09-14T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 17,
                    "name": "",
                    "startTime": "2023-09-14T13:00:00-04:00",
                    "endTime": "2023-09-14T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 18,
                    "name": "",
                    "startTime": "2023-09-14T14:00:00-04:00",
                    "endTime": "2023-09-14T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 79,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 54
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 19,
                    "name": "",
                    "startTime": "2023-09-14T15:00:00-04:00",
                    "endTime": "2023-09-14T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 79,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 52
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 20,
                    "name": "",
                    "startTime": "2023-09-14T16:00:00-04:00",
                    "endTime": "2023-09-14T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 80,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 51
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/few,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 21,
                    "name": "",
                    "startTime": "2023-09-14T17:00:00-04:00",
                    "endTime": "2023-09-14T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 79,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 50
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 22,
                    "name": "",
                    "startTime": "2023-09-14T18:00:00-04:00",
                    "endTime": "2023-09-14T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 54
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 23,
                    "name": "",
                    "startTime": "2023-09-14T19:00:00-04:00",
                    "endTime": "2023-09-14T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 24,
                    "name": "",
                    "startTime": "2023-09-14T20:00:00-04:00",
                    "endTime": "2023-09-14T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 25,
                    "name": "",
                    "startTime": "2023-09-14T21:00:00-04:00",
                    "endTime": "2023-09-14T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 59
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 26,
                    "name": "",
                    "startTime": "2023-09-14T22:00:00-04:00",
                    "endTime": "2023-09-14T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "21 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 27,
                    "name": "",
                    "startTime": "2023-09-14T23:00:00-04:00",
                    "endTime": "2023-09-15T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "22 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 28,
                    "name": "",
                    "startTime": "2023-09-15T00:00:00-04:00",
                    "endTime": "2023-09-15T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "22 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 29,
                    "name": "",
                    "startTime": "2023-09-15T01:00:00-04:00",
                    "endTime": "2023-09-15T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 30,
                    "name": "",
                    "startTime": "2023-09-15T02:00:00-04:00",
                    "endTime": "2023-09-15T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 31,
                    "name": "",
                    "startTime": "2023-09-15T03:00:00-04:00",
                    "endTime": "2023-09-15T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 70
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 32,
                    "name": "",
                    "startTime": "2023-09-15T04:00:00-04:00",
                    "endTime": "2023-09-15T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 68,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 70
                    },
                    "windSpeed": "24 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 33,
                    "name": "",
                    "startTime": "2023-09-15T05:00:00-04:00",
                    "endTime": "2023-09-15T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 67,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "24 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/wind_skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 34,
                    "name": "",
                    "startTime": "2023-09-15T06:00:00-04:00",
                    "endTime": "2023-09-15T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 66,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 75
                    },
                    "windSpeed": "24 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 35,
                    "name": "",
                    "startTime": "2023-09-15T07:00:00-04:00",
                    "endTime": "2023-09-15T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 66,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 36,
                    "name": "",
                    "startTime": "2023-09-15T08:00:00-04:00",
                    "endTime": "2023-09-15T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 65,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 75
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 37,
                    "name": "",
                    "startTime": "2023-09-15T09:00:00-04:00",
                    "endTime": "2023-09-15T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 66,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 70
                    },
                    "windSpeed": "23 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 38,
                    "name": "",
                    "startTime": "2023-09-15T10:00:00-04:00",
                    "endTime": "2023-09-15T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 67,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "22 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 39,
                    "name": "",
                    "startTime": "2023-09-15T11:00:00-04:00",
                    "endTime": "2023-09-15T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 68,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 63
                    },
                    "windSpeed": "21 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 40,
                    "name": "",
                    "startTime": "2023-09-15T12:00:00-04:00",
                    "endTime": "2023-09-15T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 61
                    },
                    "windSpeed": "21 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/wind_skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 41,
                    "name": "",
                    "startTime": "2023-09-15T13:00:00-04:00",
                    "endTime": "2023-09-15T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 57
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 42,
                    "name": "",
                    "startTime": "2023-09-15T14:00:00-04:00",
                    "endTime": "2023-09-15T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 43,
                    "name": "",
                    "startTime": "2023-09-15T15:00:00-04:00",
                    "endTime": "2023-09-15T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 53
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 44,
                    "name": "",
                    "startTime": "2023-09-15T16:00:00-04:00",
                    "endTime": "2023-09-15T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 51
                    },
                    "windSpeed": "20 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 45,
                    "name": "",
                    "startTime": "2023-09-15T17:00:00-04:00",
                    "endTime": "2023-09-15T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 50
                    },
                    "windSpeed": "18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 46,
                    "name": "",
                    "startTime": "2023-09-15T18:00:00-04:00",
                    "endTime": "2023-09-15T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 51
                    },
                    "windSpeed": "18 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 47,
                    "name": "",
                    "startTime": "2023-09-15T19:00:00-04:00",
                    "endTime": "2023-09-15T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 51
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 48,
                    "name": "",
                    "startTime": "2023-09-15T20:00:00-04:00",
                    "endTime": "2023-09-15T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 53
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 49,
                    "name": "",
                    "startTime": "2023-09-15T21:00:00-04:00",
                    "endTime": "2023-09-15T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 50,
                    "name": "",
                    "startTime": "2023-09-15T22:00:00-04:00",
                    "endTime": "2023-09-15T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 51,
                    "name": "",
                    "startTime": "2023-09-15T23:00:00-04:00",
                    "endTime": "2023-09-16T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 57
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 52,
                    "name": "",
                    "startTime": "2023-09-16T00:00:00-04:00",
                    "endTime": "2023-09-16T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 57
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 53,
                    "name": "",
                    "startTime": "2023-09-16T01:00:00-04:00",
                    "endTime": "2023-09-16T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 61
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 54,
                    "name": "",
                    "startTime": "2023-09-16T02:00:00-04:00",
                    "endTime": "2023-09-16T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 61
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 55,
                    "name": "",
                    "startTime": "2023-09-16T03:00:00-04:00",
                    "endTime": "2023-09-16T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 61
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 56,
                    "name": "",
                    "startTime": "2023-09-16T04:00:00-04:00",
                    "endTime": "2023-09-16T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 57,
                    "name": "",
                    "startTime": "2023-09-16T05:00:00-04:00",
                    "endTime": "2023-09-16T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 58,
                    "name": "",
                    "startTime": "2023-09-16T06:00:00-04:00",
                    "endTime": "2023-09-16T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 59,
                    "name": "",
                    "startTime": "2023-09-16T07:00:00-04:00",
                    "endTime": "2023-09-16T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 68,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 60,
                    "name": "",
                    "startTime": "2023-09-16T08:00:00-04:00",
                    "endTime": "2023-09-16T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 68,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 61,
                    "name": "",
                    "startTime": "2023-09-16T09:00:00-04:00",
                    "endTime": "2023-09-16T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 62,
                    "name": "",
                    "startTime": "2023-09-16T10:00:00-04:00",
                    "endTime": "2023-09-16T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 69,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 63
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 63,
                    "name": "",
                    "startTime": "2023-09-16T11:00:00-04:00",
                    "endTime": "2023-09-16T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 61
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 64,
                    "name": "",
                    "startTime": "2023-09-16T12:00:00-04:00",
                    "endTime": "2023-09-16T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 57
                    },
                    "windSpeed": "17 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 65,
                    "name": "",
                    "startTime": "2023-09-16T13:00:00-04:00",
                    "endTime": "2023-09-16T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 51
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 66,
                    "name": "",
                    "startTime": "2023-09-16T14:00:00-04:00",
                    "endTime": "2023-09-16T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 11.666666666666666
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 48
                    },
                    "windSpeed": "16 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 67,
                    "name": "",
                    "startTime": "2023-09-16T15:00:00-04:00",
                    "endTime": "2023-09-16T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 11.666666666666666
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 46
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 68,
                    "name": "",
                    "startTime": "2023-09-16T16:00:00-04:00",
                    "endTime": "2023-09-16T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 11.666666666666666
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 45
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 69,
                    "name": "",
                    "startTime": "2023-09-16T17:00:00-04:00",
                    "endTime": "2023-09-16T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 11.666666666666666
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 43
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/skc,0?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 70,
                    "name": "",
                    "startTime": "2023-09-16T18:00:00-04:00",
                    "endTime": "2023-09-16T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 11.666666666666666
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 43
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 71,
                    "name": "",
                    "startTime": "2023-09-16T19:00:00-04:00",
                    "endTime": "2023-09-16T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 46
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 72,
                    "name": "",
                    "startTime": "2023-09-16T20:00:00-04:00",
                    "endTime": "2023-09-16T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 48
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 73,
                    "name": "",
                    "startTime": "2023-09-16T21:00:00-04:00",
                    "endTime": "2023-09-16T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 48
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 74,
                    "name": "",
                    "startTime": "2023-09-16T22:00:00-04:00",
                    "endTime": "2023-09-16T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 50
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/skc,0?size=small",
                    "shortForecast": "Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 75,
                    "name": "",
                    "startTime": "2023-09-16T23:00:00-04:00",
                    "endTime": "2023-09-17T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 12.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 50
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,0?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 76,
                    "name": "",
                    "startTime": "2023-09-17T00:00:00-04:00",
                    "endTime": "2023-09-17T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.333333333333334
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 52
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,0?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 77,
                    "name": "",
                    "startTime": "2023-09-17T01:00:00-04:00",
                    "endTime": "2023-09-17T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 0
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 13.888888888888889
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 55
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,0?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 78,
                    "name": "",
                    "startTime": "2023-09-17T02:00:00-04:00",
                    "endTime": "2023-09-17T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 59
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,1?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 79,
                    "name": "",
                    "startTime": "2023-09-17T03:00:00-04:00",
                    "endTime": "2023-09-17T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 14.444444444444445
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 59
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,1?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 80,
                    "name": "",
                    "startTime": "2023-09-17T04:00:00-04:00",
                    "endTime": "2023-09-17T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,1?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 81,
                    "name": "",
                    "startTime": "2023-09-17T05:00:00-04:00",
                    "endTime": "2023-09-17T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/few,1?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 82,
                    "name": "",
                    "startTime": "2023-09-17T06:00:00-04:00",
                    "endTime": "2023-09-17T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,1?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 83,
                    "name": "",
                    "startTime": "2023-09-17T07:00:00-04:00",
                    "endTime": "2023-09-17T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 1
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,1?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 84,
                    "name": "",
                    "startTime": "2023-09-17T08:00:00-04:00",
                    "endTime": "2023-09-17T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 85,
                    "name": "",
                    "startTime": "2023-09-17T09:00:00-04:00",
                    "endTime": "2023-09-17T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 86,
                    "name": "",
                    "startTime": "2023-09-17T10:00:00-04:00",
                    "endTime": "2023-09-17T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 87,
                    "name": "",
                    "startTime": "2023-09-17T11:00:00-04:00",
                    "endTime": "2023-09-17T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 88,
                    "name": "",
                    "startTime": "2023-09-17T12:00:00-04:00",
                    "endTime": "2023-09-17T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 89,
                    "name": "",
                    "startTime": "2023-09-17T13:00:00-04:00",
                    "endTime": "2023-09-17T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 3
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/few,3?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 90,
                    "name": "",
                    "startTime": "2023-09-17T14:00:00-04:00",
                    "endTime": "2023-09-17T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,9?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 91,
                    "name": "",
                    "startTime": "2023-09-17T15:00:00-04:00",
                    "endTime": "2023-09-17T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,9?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 92,
                    "name": "",
                    "startTime": "2023-09-17T16:00:00-04:00",
                    "endTime": "2023-09-17T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,9?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 93,
                    "name": "",
                    "startTime": "2023-09-17T17:00:00-04:00",
                    "endTime": "2023-09-17T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,9?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 94,
                    "name": "",
                    "startTime": "2023-09-17T18:00:00-04:00",
                    "endTime": "2023-09-17T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 95,
                    "name": "",
                    "startTime": "2023-09-17T19:00:00-04:00",
                    "endTime": "2023-09-17T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 96,
                    "name": "",
                    "startTime": "2023-09-17T20:00:00-04:00",
                    "endTime": "2023-09-17T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 97,
                    "name": "",
                    "startTime": "2023-09-17T21:00:00-04:00",
                    "endTime": "2023-09-17T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 69
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 98,
                    "name": "",
                    "startTime": "2023-09-17T22:00:00-04:00",
                    "endTime": "2023-09-17T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 99,
                    "name": "",
                    "startTime": "2023-09-17T23:00:00-04:00",
                    "endTime": "2023-09-18T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 74
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 100,
                    "name": "",
                    "startTime": "2023-09-18T00:00:00-04:00",
                    "endTime": "2023-09-18T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 74
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 101,
                    "name": "",
                    "startTime": "2023-09-18T01:00:00-04:00",
                    "endTime": "2023-09-18T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 23
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/tsra_hi,23?size=small",
                    "shortForecast": "Slight Chance Showers And Thunderstorms",
                    "detailedForecast": ""
                },
                {
                    "number": 102,
                    "name": "",
                    "startTime": "2023-09-18T02:00:00-04:00",
                    "endTime": "2023-09-18T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "15 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 103,
                    "name": "",
                    "startTime": "2023-09-18T03:00:00-04:00",
                    "endTime": "2023-09-18T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 104,
                    "name": "",
                    "startTime": "2023-09-18T04:00:00-04:00",
                    "endTime": "2023-09-18T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "14 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 105,
                    "name": "",
                    "startTime": "2023-09-18T05:00:00-04:00",
                    "endTime": "2023-09-18T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 106,
                    "name": "",
                    "startTime": "2023-09-18T06:00:00-04:00",
                    "endTime": "2023-09-18T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 18.333333333333332
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 81
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 107,
                    "name": "",
                    "startTime": "2023-09-18T07:00:00-04:00",
                    "endTime": "2023-09-18T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 26
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 79
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,26?size=small",
                    "shortForecast": "Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 108,
                    "name": "",
                    "startTime": "2023-09-18T08:00:00-04:00",
                    "endTime": "2023-09-18T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.777777777777779
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 81
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 109,
                    "name": "",
                    "startTime": "2023-09-18T09:00:00-04:00",
                    "endTime": "2023-09-18T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 110,
                    "name": "",
                    "startTime": "2023-09-18T10:00:00-04:00",
                    "endTime": "2023-09-18T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 111,
                    "name": "",
                    "startTime": "2023-09-18T11:00:00-04:00",
                    "endTime": "2023-09-18T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 112,
                    "name": "",
                    "startTime": "2023-09-18T12:00:00-04:00",
                    "endTime": "2023-09-18T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 113,
                    "name": "",
                    "startTime": "2023-09-18T13:00:00-04:00",
                    "endTime": "2023-09-18T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 19
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/rain_showers,19?size=small",
                    "shortForecast": "Slight Chance Rain Showers",
                    "detailedForecast": ""
                },
                {
                    "number": 114,
                    "name": "",
                    "startTime": "2023-09-18T14:00:00-04:00",
                    "endTime": "2023-09-18T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,13?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 115,
                    "name": "",
                    "startTime": "2023-09-18T15:00:00-04:00",
                    "endTime": "2023-09-18T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,13?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 116,
                    "name": "",
                    "startTime": "2023-09-18T16:00:00-04:00",
                    "endTime": "2023-09-18T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,13?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 117,
                    "name": "",
                    "startTime": "2023-09-18T17:00:00-04:00",
                    "endTime": "2023-09-18T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 56
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/day/few,13?size=small",
                    "shortForecast": "Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 118,
                    "name": "",
                    "startTime": "2023-09-18T18:00:00-04:00",
                    "endTime": "2023-09-18T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "SW",
                    "icon": "https://api.weather.gov/icons/land/night/few,13?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 119,
                    "name": "",
                    "startTime": "2023-09-18T19:00:00-04:00",
                    "endTime": "2023-09-18T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 13
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "S",
                    "icon": "https://api.weather.gov/icons/land/night/few,13?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 120,
                    "name": "",
                    "startTime": "2023-09-18T20:00:00-04:00",
                    "endTime": "2023-09-18T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "S",
                    "icon": "https://api.weather.gov/icons/land/night/few,9?size=small",
                    "shortForecast": "Mostly Clear",
                    "detailedForecast": ""
                },
                {
                    "number": 121,
                    "name": "",
                    "startTime": "2023-09-18T21:00:00-04:00",
                    "endTime": "2023-09-18T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "S",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 122,
                    "name": "",
                    "startTime": "2023-09-18T22:00:00-04:00",
                    "endTime": "2023-09-18T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "W",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 123,
                    "name": "",
                    "startTime": "2023-09-18T23:00:00-04:00",
                    "endTime": "2023-09-19T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 124,
                    "name": "",
                    "startTime": "2023-09-19T00:00:00-04:00",
                    "endTime": "2023-09-19T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 69
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 125,
                    "name": "",
                    "startTime": "2023-09-19T01:00:00-04:00",
                    "endTime": "2023-09-19T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 9
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 69
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,9?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 126,
                    "name": "",
                    "startTime": "2023-09-19T02:00:00-04:00",
                    "endTime": "2023-09-19T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,8?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 127,
                    "name": "",
                    "startTime": "2023-09-19T03:00:00-04:00",
                    "endTime": "2023-09-19T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "13 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,8?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 128,
                    "name": "",
                    "startTime": "2023-09-19T04:00:00-04:00",
                    "endTime": "2023-09-19T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,8?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 129,
                    "name": "",
                    "startTime": "2023-09-19T05:00:00-04:00",
                    "endTime": "2023-09-19T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,8?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 130,
                    "name": "",
                    "startTime": "2023-09-19T06:00:00-04:00",
                    "endTime": "2023-09-19T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,8?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 131,
                    "name": "",
                    "startTime": "2023-09-19T07:00:00-04:00",
                    "endTime": "2023-09-19T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 8
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,8?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 132,
                    "name": "",
                    "startTime": "2023-09-19T08:00:00-04:00",
                    "endTime": "2023-09-19T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 133,
                    "name": "",
                    "startTime": "2023-09-19T09:00:00-04:00",
                    "endTime": "2023-09-19T10:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 134,
                    "name": "",
                    "startTime": "2023-09-19T10:00:00-04:00",
                    "endTime": "2023-09-19T11:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 135,
                    "name": "",
                    "startTime": "2023-09-19T11:00:00-04:00",
                    "endTime": "2023-09-19T12:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 136,
                    "name": "",
                    "startTime": "2023-09-19T12:00:00-04:00",
                    "endTime": "2023-09-19T13:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 137,
                    "name": "",
                    "startTime": "2023-09-19T13:00:00-04:00",
                    "endTime": "2023-09-19T14:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 138,
                    "name": "",
                    "startTime": "2023-09-19T14:00:00-04:00",
                    "endTime": "2023-09-19T15:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 139,
                    "name": "",
                    "startTime": "2023-09-19T15:00:00-04:00",
                    "endTime": "2023-09-19T16:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 58
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "NW",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 140,
                    "name": "",
                    "startTime": "2023-09-19T16:00:00-04:00",
                    "endTime": "2023-09-19T17:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 56
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 141,
                    "name": "",
                    "startTime": "2023-09-19T17:00:00-04:00",
                    "endTime": "2023-09-19T18:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 78,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 54
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,6?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 142,
                    "name": "",
                    "startTime": "2023-09-19T18:00:00-04:00",
                    "endTime": "2023-09-19T19:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 77,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 15.555555555555555
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 56
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/night/sct,6?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 143,
                    "name": "",
                    "startTime": "2023-09-19T19:00:00-04:00",
                    "endTime": "2023-09-19T20:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 76,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 6
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 60
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,6?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 144,
                    "name": "",
                    "startTime": "2023-09-19T20:00:00-04:00",
                    "endTime": "2023-09-19T21:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 145,
                    "name": "",
                    "startTime": "2023-09-19T21:00:00-04:00",
                    "endTime": "2023-09-19T22:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 75,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 62
                    },
                    "windSpeed": "8 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 146,
                    "name": "",
                    "startTime": "2023-09-19T22:00:00-04:00",
                    "endTime": "2023-09-19T23:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "E",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 147,
                    "name": "",
                    "startTime": "2023-09-19T23:00:00-04:00",
                    "endTime": "2023-09-20T00:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 74,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 64
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "E",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 148,
                    "name": "",
                    "startTime": "2023-09-20T00:00:00-04:00",
                    "endTime": "2023-09-20T01:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.111111111111111
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 66
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "E",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 149,
                    "name": "",
                    "startTime": "2023-09-20T01:00:00-04:00",
                    "endTime": "2023-09-20T02:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 73,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 4
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 68
                    },
                    "windSpeed": "9 mph",
                    "windDirection": "E",
                    "icon": "https://api.weather.gov/icons/land/night/sct,4?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 150,
                    "name": "",
                    "startTime": "2023-09-20T02:00:00-04:00",
                    "endTime": "2023-09-20T03:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "E",
                    "icon": "https://api.weather.gov/icons/land/night/sct,7?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 151,
                    "name": "",
                    "startTime": "2023-09-20T03:00:00-04:00",
                    "endTime": "2023-09-20T04:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,7?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 152,
                    "name": "",
                    "startTime": "2023-09-20T04:00:00-04:00",
                    "endTime": "2023-09-20T05:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "10 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,7?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 153,
                    "name": "",
                    "startTime": "2023-09-20T05:00:00-04:00",
                    "endTime": "2023-09-20T06:00:00-04:00",
                    "isDaytime": false,
                    "temperature": 72,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 71
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/night/sct,7?size=small",
                    "shortForecast": "Partly Cloudy",
                    "detailedForecast": ""
                },
                {
                    "number": 154,
                    "name": "",
                    "startTime": "2023-09-20T06:00:00-04:00",
                    "endTime": "2023-09-20T07:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 16.666666666666668
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 73
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "NE",
                    "icon": "https://api.weather.gov/icons/land/day/sct,7?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 155,
                    "name": "",
                    "startTime": "2023-09-20T07:00:00-04:00",
                    "endTime": "2023-09-20T08:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 71,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 7
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 76
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,7?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                },
                {
                    "number": 156,
                    "name": "",
                    "startTime": "2023-09-20T08:00:00-04:00",
                    "endTime": "2023-09-20T09:00:00-04:00",
                    "isDaytime": true,
                    "temperature": 70,
                    "temperatureUnit": "F",
                    "temperatureTrend": null,
                    "probabilityOfPrecipitation": {
                        "unitCode": "wmoUnit:percent",
                        "value": 11
                    },
                    "dewpoint": {
                        "unitCode": "wmoUnit:degC",
                        "value": 17.222222222222221
                    },
                    "relativeHumidity": {
                        "unitCode": "wmoUnit:percent",
                        "value": 78
                    },
                    "windSpeed": "12 mph",
                    "windDirection": "N",
                    "icon": "https://api.weather.gov/icons/land/day/sct,11?size=small",
                    "shortForecast": "Mostly Sunny",
                    "detailedForecast": ""
                }
            ]
        }
    };
    hourlyForecastReturned(hourlyForcast)
}

function forecastReturned(data) {
    // Process the response data here
    window.si.weather.fields.forcast = data;
    let todayFound = false;

    if (data.properties) {
        if (data.properties.periods) {
            if (data.properties.periods.length > 0) {
                todayFound = true;
                let todayWeather = data.properties.periods[0];
                formatTodaysWeather(todayWeather);
                formatRowsOfWeather(data.properties.periods);
            }
        }
    }
    if (todayFound) {
        insertPrimaryMessage("weatherPopup", "Forcast has been returned!");
    }
    else {
        insertError("weatherPopup", "Something didn't work fetching the weather, sorry!");
    }
}

function hourlyForecastReturned(data) {
    // Process the response data here
    window.si.weather.fields.dailyForecast = data;
    let todayFound = false;

    if (data.properties) {
        if (data.properties.periods) {
            if (data.properties.periods.length > 0) {
                todayFound = true;
                formatRowsOfWeatherByHour(data.properties.periods);
            }
        }
    }
    if (todayFound) {
        insertPrimaryMessage("weatherPopup", "Hourly Forcast has been returned!");
    }
    else {
        insertError("weatherPopup", "Something didn't work fetching the hourly weather, sorry!");
    }
}

function formatTodaysWeather(todayWeather) {
    document.getElementById("tfc_period").innerHTML = friendlyDateStringFromTime(todayWeather.startTime) + " to " + friendlyDateStringFromTime(todayWeather.endTime);
    document.getElementById("tfc_name").innerHTML = todayWeather.name;
    document.getElementById("tfc_shortForecast").innerHTML = todayWeather.shortForecast;
    document.getElementById("tfc_detailedForecast").innerHTML = todayWeather.detailedForecast;
    document.getElementById("tfc_temperature").innerHTML = todayWeather.temperature + "\u00B0F"//"\u00B0" is unicode for degree symbol ;
    document.getElementById("tfc_probabilityOfPrecipitation").innerHTML = (todayWeather.probabilityOfPrecipitation.value ? todayWeather.probabilityOfPrecipitation.value : 0) + "%";
    document.getElementById("tfc_relativeHumidity").innerHTML = (todayWeather.relativeHumidity.value ? todayWeather.relativeHumidity.value : 0) + "%";
    document.getElementById("tfc_windCombo").innerHTML = todayWeather.windSpeed + " " + todayWeather.windSpeed;
}
function formatRowsOfWeather(rowsOfWeather) {
    for (let i = 0; i < rowsOfWeather.length; i++) {
        let weatherData = rowsOfWeather[i];
        let rowID = (i + 1);
        let tableRow = document.getElementById("tableFiveDayRow_" + rowID);
        tableRow.children[0].innerHTML = weatherData.name;
        tableRow.children[1].innerHTML = weatherData.temperature + "\u00B0F";
        tableRow.children[2].innerHTML = weatherData.shortForecast;
        tableRow.children[3].innerHTML = (weatherData.probabilityOfPrecipitation.value ? weatherData.probabilityOfPrecipitation.value : 0) + "%";
        tableRow.children[4].innerHTML = weatherData.windDirection + " " + weatherData.windSpeed;
    }
}
function formatRowsOfWeatherByHour(rowsOfWeather) {
    for (let i = 0; i < 30; i++) {
        let weatherData = rowsOfWeather[i];
        let rowID = (i + 1);
        let tableRow = document.getElementById("tableHourly_" + rowID);
        tableRow.children[0].innerHTML = friendlyShortTime(weatherData.startTime);
        tableRow.children[1].innerHTML = weatherData.temperature + "\u00B0F";
        tableRow.children[2].innerHTML = weatherData.shortForecast;
        tableRow.children[3].innerHTML = (weatherData.probabilityOfPrecipitation.value ? weatherData.probabilityOfPrecipitation.value : 0) + "%";
        tableRow.children[4].innerHTML = weatherData.windDirection + " " + weatherData.windSpeed;
    }
}
//#region ReUsed
function turnWeatherJsonIntoSomething() { }
function friendlyDateStringFromTime(strInput) {
    let splitArr = strInput.split("T");
    let dateArr = splitArr[0].split("-");
    let time = splitArr[1].slice(0, 5);

    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date(year, month, day);
    let dayOfWeekDisp = weekday[d.getDay()];

    return dayOfWeekDisp + " " + month + "/" + day + " " + time;
}
function friendlyShortDate(strInput) {
    let splitArr = strInput.split("T");
    let dateArr = splitArr[0].split("-");

    let month = dateArr[1];
    let day = dateArr[2];

    return month + "/" + day;
}
function friendlyShortTime(strInput) {
    let splitArr = strInput.split("T");
    let time = splitArr[1].slice(0, 5);
    return time;
}

//#endregion ReUsed


//#region Popups
function insertAndShowAlert(section, alertType, message) {
    var $alert = $("#" + alertType).clone();
    $("#alertMessage", $alert).html(message);
    $("div[name='_divAlertSection_" + section + "']:visible").append($alert);
    $alert.show();
}

function insertError(section, message) {
    insertAndShowAlert(section, "alertError", message);
}
function insertWarning(section, message) {
    insertAndShowAlert(section, "alertWarning", message);
}
function insertPrimaryMessage(section, message) {
    insertAndShowAlert(section, "alertPrimary", message);
}
//#endregion Popups