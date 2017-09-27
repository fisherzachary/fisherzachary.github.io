$(document).ready(function() {
  var pieChart = c3.generate({
      title: {
        text: '2016 NC Registered Voter Party Affiliation'
      },
      bindto: '#pieChart',
      data: {
          // iris data from R
          columns: [
              ['Democrat', 37],
              ['Republican', 33],
              ['Independent', 30],
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var barChart = c3.generate({
      title: {
        text: '2016 NC Registered Voter Party Affiliation'
      },
      bindto: '#barChart',
      data: {
          // iris data from R
          columns: [
              ['Democrat', 57],
              ['Republican', 33],
              ['Independent', 10],
          ],
          type : 'bar',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      bar: {
        width: {
          ratio: 0.5
        }
      }
  });

  var timeChart = c3.generate({
      title: {
        text: '2016 NC Voter Gubernatorial Preference'
      },
      bindto: '#timeChart',
      data: {
        x: 'x',
          columns: [
              ['x', '2016-01-01', '2016-02-01', '2016-03-01', '2016-04-01', '2016-05-01'],
              ['McCrory', 33, 36, 37, 32, 29],
              ['Cooper', 42, 40, 34, 39, 32],
          ],
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: "%Y-%m-%d"
          }
        }
      }
  });
});
