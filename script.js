
// const csvdata=document.getElementById('csvdata').value

// console.log(Papa.parse(csvdata, {
// header:true,
// skipEmptyLines:true,
// }))

// const datafile = Papa.parse(csvdata, {
//    header:true,
//    skipEmptyLines:true,
//    });


// const dog =[];
// for (i=0;i<datafile.data.length;i++){
//    dog.push(datafile.data[i].dog);
// };
// console.log(dog);

const chartdata='data.csv';

//parse to csv to json//

d3.csv(chartdata).then(function(datapoints) {
   console.log(datapoints)
   const TotalCases =[];
   const Active =[];
   const Discharged =[];
   const Deaths =[];


      for (i=0;i<datapoints.length;i++){
         TotalCases.push(datapoints[i].TotalCases)
         Active.push(datapoints[i].Active)
         Discharged.push(datapoints[i].Discharged)
         Deaths.push(datapoints[i].Deaths)
      }

   const ctx = document.getElementById('myChart1').getContext('2d');
const myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Andaman and Nicobar',
        'Andhra Pradesh', 
        'Arunachal Pradesh',
         'Assam', 
         'Bihar', 
         'Chandigarh',
         'Chhattisgarh',
         'Dadra and Nagar Haveli and Daman and Diu',
         'Delhi',
         'Goa',
         'Gujarat',
         'Haryana',
         'Himachal Pradesh',
         'Jammu and Kashmir',
         'Jharkhand',
         'Karnataka',
         'Kerala',
         'Ladakh',
         'Lakshadweep',
         'Madhya Pradesh',
         'Maharashtra',
         'Manipur',
         'Meghalaya',
         'Mizoram',
         'Nagaland',
         'Odisha',
         'Puducherry',
         'Punjab',
         'Rajasthan',
         'Sikkim',
       'Tamil Nadu',
       'Telengana',
       'Tripura',
       'Uttar Pradesh',
       'Uttarakhand',
       'West Bengal'],
        datasets: [{
            label: 'Total Cases',
            data: TotalCases,
            backgroundColor: 'rgba(255,127,80, 0.2)',
            borderColor:'rgba(255,127,80, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});

//second

d3.csv(chartdata).then(function(datapoints) {
   console.log(datapoints)
   const Active =[];


      for (i=0;i<datapoints.length;i++){
         Active.push(datapoints[i].Active)
        
      }

   const ctx = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Andaman and Nicobar',
        'Andhra Pradesh', 
        'Arunachal Pradesh',
         'Assam', 
         'Bihar', 
         'Chandigarh',
         'Chhattisgarh',
         'Dadra and Nagar Haveli and Daman and Diu',
         'Delhi',
         'Goa',
         'Gujarat',
         'Haryana',
         'Himachal Pradesh',
         'Jammu and Kashmir',
         'Jharkhand',
         'Karnataka',
         'Kerala',
         'Ladakh',
         'Lakshadweep',
         'Madhya Pradesh',
         'Maharashtra',
         'Manipur',
         'Meghalaya',
         'Mizoram',
         'Nagaland',
         'Odisha',
         'Puducherry',
         'Punjab',
         'Rajasthan',
         'Sikkim',
       'Tamil Nadu',
       'Telengana',
       'Tripura',
       'Uttar Pradesh',
       'Uttarakhand',
       'West Bengal'],
        datasets: [{
            label: 'Active cases',
            data: Active,
            backgroundColor: 'rgba(255,255,0, 0.2)',
            borderColor:'rgba(255,255,0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});


//third

d3.csv(chartdata).then(function(datapoints) {
   console.log(datapoints)
   const Discharged =[];

      for (i=0;i<datapoints.length;i++){
         Discharged.push(datapoints[i].Discharged)
      }

   const ctx = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Andaman and Nicobar',
        'Andhra Pradesh', 
        'Arunachal Pradesh',
         'Assam', 
         'Bihar', 
         'Chandigarh',
         'Chhattisgarh',
         'Dadra and Nagar Haveli and Daman and Diu',
         'Delhi',
         'Goa',
         'Gujarat',
         'Haryana',
         'Himachal Pradesh',
         'Jammu and Kashmir',
         'Jharkhand',
         'Karnataka',
         'Kerala',
         'Ladakh',
         'Lakshadweep',
         'Madhya Pradesh',
         'Maharashtra',
         'Manipur',
         'Meghalaya',
         'Mizoram',
         'Nagaland',
         'Odisha',
         'Puducherry',
         'Punjab',
         'Rajasthan',
         'Sikkim',
       'Tamil Nadu',
       'Telengana',
       'Tripura',
       'Uttar Pradesh',
       'Uttarakhand',
       'West Bengal'],
        datasets: [{
            label: 'Discharged',
            data: Discharged,
            backgroundColor: 'rgba(127,255,0, 0.2)',
            borderColor:'rgba(127,255,0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});



//fourth


d3.csv(chartdata).then(function(datapoints) {
   console.log(datapoints)
   const Deaths =[];


      for (i=0;i<datapoints.length;i++){
         Deaths.push(datapoints[i].Deaths)
      }

   const ctx = document.getElementById('myChart4').getContext('2d');
const myChart4 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Andaman and Nicobar',
        'Andhra Pradesh', 
        'Arunachal Pradesh',
         'Assam', 
         'Bihar', 
         'Chandigarh',
         'Chhattisgarh',
         'Dadra and Nagar Haveli and Daman and Diu',
         'Delhi',
         'Goa',
         'Gujarat',
         'Haryana',
         'Himachal Pradesh',
         'Jammu and Kashmir',
         'Jharkhand',
         'Karnataka',
         'Kerala',
         'Ladakh',
         'Lakshadweep',
         'Madhya Pradesh',
         'Maharashtra',
         'Manipur',
         'Meghalaya',
         'Mizoram',
         'Nagaland',
         'Odisha',
         'Puducherry',
         'Punjab',
         'Rajasthan',
         'Sikkim',
       'Tamil Nadu',
       'Telengana',
       'Tripura',
       'Uttar Pradesh',
       'Uttarakhand',
       'West Bengal'],
        datasets: [{
            label: 'Total Deaths',
            data: Deaths,
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor:'rgba(255, 0, 0, 1)',
            borderWidth: 1
        }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

});



