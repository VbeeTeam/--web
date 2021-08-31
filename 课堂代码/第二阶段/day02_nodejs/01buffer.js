/**
 * Buffer的基本操作
 * Buffer本质上就是字节数组 （二进制、十六进制）
 * 1.构造方法（类）
 * 2.静态方法
 * 3.实例方法
 */

    //构造方法 实例化Buffer对象  
    let buf = Buffer.alloc(3);   //3长度
    console.log("buf:",buf);
    let buf2 = Buffer.from('hello');
    console.log("buf2:",buf2);
    let buf3 = Buffer.from([0x62, 0x75, 0x66, 0x66,0x65, 0x72]);
    console.log("buf3:",buf3.toString());

    //静态方法
    // Buffer.isEncoding() 判断是否支持该编码
    console.log("isEncoding", Buffer.isEncoding('utf-8'));
    console.log("isEncoding2", Buffer.isEncoding('gbk'));

    // Buffer.isBuffer() 判断是否为Buffer
    let buf4 = Buffer.from('hello');
    console.log("buf4:",Buffer.isBuffer(buf4));
    console.log("buf4:",Buffer.isBuffer({}));

    // Buffer.byteLength() 返回指定编码的字节长度，默认utf8 
    //一个中文字符是三个字节  
    let buf5 = Buffer.from('中国');  
    console.log("buf5:",Buffer.byteLength(buf5));

    // Buffer.concat() 将一组Buffer对象合并为一个Buffer对象  
    // 把字符拼接
    let buf6 = Buffer.alloc(3);  //3个字节的buffer
    let buf7 = Buffer.alloc(5);  //5个字节的buffer
    let buf8 = Buffer.concat([buf6, buf7]);
    console.log("buf8:", Buffer.byteLength(buf8));   //8
    
    let buf9 = Buffer.from("hello");
    let buf10 = Buffer.from("world");
    let buf11 = Buffer.concat([buf9, buf10]);
    console.log("buf11:", Buffer.byteLength(buf11));  //10
    console.log("buf11:", buf11.toString());

    //实例方法
    // write() 向buffer对象中写入内容
    let buf12 = Buffer.alloc(5);
    buf12.write('hello',2,2);
    console.log("buf12:", buf12.toString())

    // slice() 截取新的buffer对象
    let buf13 = Buffer.from("hello");
    // let buf14 = buf13.slice(2);
    let buf14 = buf13.slice(2,4);
    console.log("buf14:", buf14.toString());
    // toString() 把buf对象转成字符串 == 如上

    // toJson() 把buf对象转成json形式的字符串,当JSON.stringify方法调用时会自动调用toJSON方法
    const buf15 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
    const json = JSON.stringify(buf15);

    console.log("buf15:",json);
