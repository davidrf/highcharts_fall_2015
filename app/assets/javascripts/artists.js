$(function () {
  $.ajax({
    method: "GET",
    url: "/artists",
    dataType: "json"
  })

  .done(function(data){
    var artists = data[0];
    var votes = data[1];
    $('#container-1').highcharts({

      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: artists
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Fall 2015',
        data: votes
      }]
    });

  });

});

$(function () {
  $.ajax({
    method: "GET",
    url: "/artists",
    dataType: "json"
  })

  .done(function(data){
    var artists = data[0];
    var votes = data[1];
    var reformattedData = reformatData(artists, votes);
    debugger;
    $('#container-2').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: "Brands",
        colorByPoint: true,
        data: reformattedData
      }]
    });

  });
});

function reformatData(artists, votes) {
  var reformattedData = [];
  var total_votes = sumArray(votes);
  debugger;
  for (var i = 0, l = artists.length; i < l; i ++) {
    var artist = artists[i];
    var vote_count = votes[i];
    reformattedData.push({name: artist, y: vote_count * 100 / total_votes})
  }

  return reformattedData;
}

function sumArray(array) {
  var sum = 0;
  for (var i = 0, l = array.length; i < l; i ++) {
    var number = array[i];
    sum += number;
  }
  return sum;
}
