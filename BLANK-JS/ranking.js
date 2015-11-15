function competTable() {


  var getNum = prompt('Insert');
  var transitArr = getNum.split(',');
  var workingArray = [];


  function createObjects() {
    for (var i=0; i < transitArr.length; i++) { 
      workingArray[i] = new Object();
        workingArray[i].index = i+1;
        workingArray[i].points = +transitArr[i];  //+transitArr[i] convert from string to an integer
    };
  };
  createObjects();


    function sortArr() {
    var sorted = workingArray.sort(function(a, b) { return a.points - b.points; });
  }
    sortArr();


    // adds key >>position to all objects in the array;
    function setPos() {
      for ( var i = 0; i < workingArray.length; i++) {
        if ( typeof workingArray[i+1] === 'undefined' ) {
            workingArray[i].position = i+1;
            // assigned all the >>positions gradually just yet, to make possible calculations in the setIf function; ||v
        } else if ( workingArray[i].points <= workingArray[i+1].points ) {
            workingArray[i].position = i+1; 
          } else { console.log('aha'); };
        };


        // calculates 'mean' >>position to objects if its >>points are equal
        function setIf() {
            for ( var i = 0; i < workingArray.length; i++) {
              //edited to throw no error
              if ( typeof workingArray[i+1] === 'undefined' ) { break; } //..
              else if ( workingArray[i].points == workingArray[i+1].points && workingArray[i].position == workingArray[i+1].position ) {
          continue;
              } else if (workingArray[i].points == workingArray[i+1].points) {
                    var slicer = workingArray.slice(i);
                  for (var s = slicer.length-1; s > 0; s--) {
                      if ( slicer[s].points == workingArray[i].points ) {
                          var got = slicer.slice(0, s+1); 
                            // got dependence, be ware; ||^
                          var max = got[got.length-1].position;
                          var min = got[0].position;
                          var mean = ( ( max - min + 1 ) * (max + min) / 2 ) / got.length;
                          for ( x = 0; x < got.length; x++) {
                              got[x].position = mean; 
                          }; break; 
                      };
                  };    
                };
            };
        };
        setIf();
    };
    setPos();
    
    
    //for calcSum sakes to calculate a sum of two >>positions
    function sortByIndex() {
    var sorted = workingArray.sort(function(a, b) { return a.index - b.index; });
  }
    sortByIndex();
    
    return workingArray;
};

var fData = competTable();
var sData = competTable(); 


function antiErr() {
    if ( fData.length !== sData.length ) { alert('ERROR! Try again.'); } 
    else { alert('You may proceed.'); };
}
antiErr();


function calcSum() {
    var sumArray = [];
    for (var i = 0; i < fData.length; i++) {
        sumArray[i] = new Object();
        sumArray[i].index = i+1;
        sumArray[i].fPoints = fData[i].points;
        sumArray[i].sPoints = sData[i].points;
        sumArray[i].summary = fData[i].position + sData[i].position;
    };
    
    return sumArray;
}
calcSum();