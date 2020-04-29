
//返回值为截取的值
//修改原数组
Array.prototype.popp = function(){
    if(this.length<=0) return undefined;
    var num =  this[this.length-1];
    this.length = this.length - 1;
    return num;
}

//返回值为长度
//修改原数组
Array.prototype.pushh = function(){
    var l = this.length;
    for(var i = l; i < l + arguments.length ; i++){
        this[i] = arguments[i-l];
    }
    return this.length;
}

//输出倒序数组
//修改原数组
Array.prototype.reversee = function(){
    var later = this.length - 1,temp;
    for (let i = 0; i < this.length; i++) {
        flag = this[i];
        this[i] = this[later];
        this[later] = flag;
        if (i == later || later - i == 1) break;
        later--;
    }
    return this;
}


//输出最小的数值
//不修改原数组
Array.prototype.getMin = function(){
    if(this.length<=0) return undefined;
    var min;
    for(var i = 0; i < this.length ; i++ ){
        // min = min < this[i] ? min : this[i];//重复赋值
        min < this[i] ? null : min = this[i];//同步赋值
    }
    return min;
}

// // var qq = new Array();
// var ss = [1,0,0,50,-12];
// console.log(ss.reversee());
// console.log(ss);

