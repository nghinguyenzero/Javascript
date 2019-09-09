function countPairs(arr, k) {
    console.log(4444,arr);
      let a = arr.length;
      let count = 0;
      let arr1 = new Array();
      if(a>0){
          for(let i = 0; i<a-1; i++){
              for(let j= i+1; j<a; j++){
                  if(arr[i]+a[j]==k){
                      let b = arr1.length;
                      if(b>0) {
                          for(let t = 0; t<b; t++){
                              if((arr[i]!= arr1[t]) || (arr[i]!= k-arr1[t]) ){
                                  count = count + 1;
                              }
                          }
                      }
                  }
              }
          }
      }    // Write your code here
      return count;
  
  }
  
  function main() {
      const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  
      const arrCount = parseInt(readLine().trim(), 10);
  
      let arr = [];
  
      for (let i = 0; i < arrCount; i++) {
          const arrItem = parseInt(readLine().trim(), 10);
          arr.push(arrItem);
      }

  
      const k = parseInt(readLine().trim(), 10);

      console.log( arr);
  
      const result = countPairs(arr, k);
  
      ws.write(result + '\n');
  
      ws.end();
  }
  



//Demo về this
var a = {
    name: 'NAME',
    run: function () {
        var run2 = function () {
            console.log(this.name);
        }
        run2.bind(a)();//bind trả về 1 func, run2 chạy thì this là object a
    }
}
a.run();

var a = {
    name: 'NAME',
    run: function () {
        var run2 = function () {
            console.log(this.name);
        }.bind(a);
        run2();
    }
}
a.run();

var a = {
    name: 'NAME',
    run: function () { //context của func này là object a => bind(this) cũng đúng
        var run2 = function () {
            console.log(this.name);
        }.bind(this);
        run2();
    }
}
a.run();


var a = {
    name: 'NAME',
    run: function () {
        var run2 = () => this.name; // arrow func ko có context, context là của hàm gần nhất
        run2();
    }
}
a.run();