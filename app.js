// ------------ Chapter 21-25 -------------

// -------------Task 1 ------------
// var FirstName = prompt('Enter your First name: ');
// var LastName = prompt('Enter your Last name: ');
// var FullName = FirstName + ' ' + LastName
// alert('Hello '+FullName) 

// -------------Task 2 ------------
// var PhoneModel = prompt('Enter Your Favourite Mobile Phone Model: ');
// document.write(PhoneModel.length)

// -------------Task 3 ------------
// var letter = 'Pakistani';
// var index = letter.indexOf('n');
// document.write('String: '+ letter + '<br>' + 'Index of n: '+ index)


// -------------Task 4 ------------
// var str = 'Hello World';
// var strNum = str.lastIndexOf('l');
// document.write('String: ' + str + '<br> Last index of l: ' + strNum)


// -------------Task 5 ------------
// var letter = 'Pakistani';
// var index = letter.charAt(3);
// document.write('String: '+ letter + '<br>' + 'Character at index 3: ' + index)


// -------------Task 6 ------------
// var first = prompt('Enter First name: ');
// var last = prompt('Enter last name: ');
// alert('Welcome '+ first.concat('' + last));


// -------------Task 7 ------------
// var city = 'Hyderabad';
// var replace = city.replace('Hyderabad','Islamabad');
// document.write('City: '+ city + '<br>' + 'After Replacement: ' + replace )

// -------------Task 8 ------------
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replace = message.replace(/and/g,'&');
// document.write(replace)

// -------------Task 9 ------------
// var val = '472';
// var type = typeof(val);
// var changeVal = Number(val);
// var typeChangeval = typeof(changeVal);
// document.write('Value: '+ val + '<br> Type: ' + type + '<br> Value: '+ changeVal + '<br> Type: ' + typeChangeval);

// -------------Task 10 ------------
// var a = prompt('Enter a value: ');
// var b = a.toUpperCase();
// document.write('User input: ' + a + '<br> Upper case: ' + b)

// -------------Task 11 ------------
// var inp = prompt('Enter a word: ');
// var lower = inp.toLowerCase();
// var Upper = inp.toUpperCase();
// var title = Upper[0]+lower.slice(1,)
// document.write('User input: ' + inp + '<br> Title case: ' + title)

// -------------Task 12 ------------
// var num = 35.36 ;
// var str = num.toString();
// var replace = str.replace('.','');
// document.write('Number: ' + num + '<br> Result: ' + replace)


// -------------Task 13 ------------
// var val = prompt('Enter username: ');
// if(val === '@' ||  '.' || ',' || '!' ){
//     alert('Please  enter a valid username')
// }


// -------------Task 14 ------------
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// var search = prompt('Welcome to ABC bakkery! What do you want to order')
// if(A.includes(search)){
//     document.write(search + ' is available in index ' + A.indexOf(search) +' in our bakery');
// }
// else{
//     document.write('We are sorry! ' + search + ' is not available in our bakkery');
// }

// -------------Task 15 ------------
// var paswrd = prompt('Enter a password: ');



// -------------Task 16 ------------
// var university = 'University of Karachi';
// var arr = university.split(' ');
// for(var i=0; i<university.length; i++){
//     document.write('<br>')
//     for(var j=0; j<arr[i].length; j++){
//         document.write(arr[i][j]+'<br>')
//     }
// }


// -------------Task 17 ------------
// var inp = prompt('Enter a word: ');
// var char = inp[inp.length-1]; 
// document.write('User input: '+ inp + '<br> Last character of input: ' + char)


// -------------Task 18 ------------
// var txt = 'The quick brown fox jumps over the lazy dog';
// for(var i=0; i<txt.length; i++){
//     if(txt.slice(i,i+3) === 'The' || 'the'){

//     } 
// }

// ------------ Chapter 26-30 -------------

// -------------Task 1 ------------
// var num = prompt('Enter a number: ');
// document.write('Number: ' + num + '<br>  round off value ' + Math.round(num) + '<br>  floor value: '+ Math.floor(num) + '<br>  ceil value: ' + Math.ceil(num))


// -------------Task 2 ------------
// var num = prompt('Enter a number: ');
// document.write('Number: ' + num + '<br>  round off value ' + Math.round(num) + '<br>  floor value: '+ Math.floor(num) + '<br>  ceil value: ' + Math.ceil(num))


// -------------Task 3 ------------
// var num = prompt('Enter a number: ');
// document.write('The absolute value of: ' + num + ' is ' + Math.abs(num))


// -------------Task 4 ------------
// var num = Math.random() * 6;
// var val = Math.round(num)
// document.write('Random dice value : ' + val)


// -------------Task 5 ------------
// var num = Math.random() *2;
// var val = Math.round(num);
// if(val === 1){
//        document.write(val + '<br> Random coins value: Tails')
// }
// else if(val === 2){
//         document.write(val + '<br> Random coins value: Heads')
// }
// else{
//     document.write()
// }


// -------------Task 6 ------------
// var num = Math.random() *100;
// var val = Math.round(num);
// document.write('random number between 1 and 100: ' + val)


// -------------Task 7 ------------
// var val = prompt('Enter your weight in kilograms: ');
// var int = parseFloat(val);
// document.write('The weight of the user is ' + int + 'Kilograms')


// -------------Task 8 ------------
// var val = Math.random() * 10;
// var guess = Math.round(val)
// var inp = +prompt('Enter a number between 1 to 10: ');
// if(guess === inp){
//     alert('Congratulations')
// }
// else{
//     alert('try again!')
// }

// ------------ Chapter 31-34 -------------

// -------------Task 1 ------------
// document.write(new Date())

// -------------Task 2 ------------
// var a = new Date();
// var b = a.getMonth();
// var arr = ['january','febuary','march','april','may','june','july','august','september','october','november','december']
// document.write(arr[b])

// -------------Task 3 ------------
// var a = new Date();
// var b = a.getDay();
// var arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// document.write(arr[b])

// -------------Task 4 ------------
// var a = new Date();
// var b = a.getDay();
// var arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// if(arr[b] === ('Sunday' || 'Saturday')){
//     document.write('Its fun Day')
// }


// -------------Task 5 ------------
// var a = new Date();
// var b = a.getDate(a);
// if(b<15){
//     document.write('First fifteen days of the month')
// }
// else{
//     document.write('Last days of the month')
// }

// -------------Task 6 ------------
// var a = new Date();
// document.write('Current: ' + a + '<br> Elapsed milliseconds since January 1,1970: ' + a.getMilliseconds() + '<br>  Elapsed minutes since January 1,1970: ' + a.getMinutes() )


// -------------Task 7 ------------
// var a = new Date();
// var hour = a.getHours();
// if(0<=hour<=12){
//     document.write('Its AM')
// }
// else if(12<=hour<=23){
//     document.write('Its PM')
// }


// -------------Task 8 ------------
// var date = new Date('December 31,2020');
// document.write('LaterDate: ' + date )


// -------------Task 9 ------------
// var date = new Date('June 18, 2015');
// var datemili = date.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - datemili
// var diffyear = diff/(60*60*24*1000);
// var days = Math.floor(diffyear);
// document.write(days +' days have passed since 1st Ramadan,2015' )


// -------------Task 10 ------------
// var date = new Date('December 5, 2015');
// var sec = date.getTime();
// var dateB = new Date('January 5, 2015');
// var secs = dateB.getTime();
// var diff = sec - secs
// var convert = diff/ (1000*60)
// document.write('On refrence Date '+ date + '<br>' + convert + ' seconds has passed since beginning of 2015')


// -------------Task 11 ------------
// var date = new Date();
// document.write('Current Date: ' + date + '<br>');
// var hour = new Date().getHours()-1;
// date.setHours(hour);
// document.write('one hour ago, it was ' + date);


// -------------Task 12 ------------
// var date = new Date();
// document.write('Current Date: ' + date + '<br>');
// var year = new Date().getFullYear()-100;
// date.setFullYear(year);
// document.write('100 years back, it was ' + date);



// -------------Task 13 ------------
// var age = prompt('Enter your age: ');
// var date = new Date();
// var currentYear = date.getFullYear();
// var ageYear = date.getFullYear()-age;
// document.write('Your age is ' + age + ' Your birth year year: '+ ageYear)


// -------------Task 14 ------------
// var CustomerName = prompt('Customer Name: ');
// var Month = prompt('Month: ');
// var units = +prompt('Number of units: ');
// var charge = +prompt('Charges per unit: ');
// var LatePayment = +prompt('Late Payment Surcharge: ')
// var netAmount =  units * charge;
// var GrossAmount =  netAmount + LatePayment;
// document.write('Customer Name: ' + CustomerName + '<br> Month: ' + Month + '<br> Number of units: ' + units + '<br> Charges per unit: ' + charge + '<br> Net Amount Payable (within Due Date): '+ netAmount + '<br>  Late Payment Surcharge: ' + LatePayment + '<br> Gross Amount Payable (after Due Date): ' + GrossAmount ) 





// ------------ Chapter 35-38 -------------

// -------------Task 1 ------------
// var date = new Date();
// document.write(date)


// -------------Task 2 ------------
// var First = prompt('Enter your first name: ');
// var Last = prompt('Enter your last name: ');
// document.write('Hello ' + First + ' ' + Last)


// -------------Task 3 ------------
// var num1 = +prompt('Enter first num: ');
// var num2 = +prompt('Enter second num: ');
// function add(a,b){
//     alert(a+b)
// }
// add(num1,num2)


// -------------Task 4 ------------
// function cal(num1,op,num2){
//             if(op === '+'){
//                     return num1 + num2
//             }
//             else if(op === '-'){
//                     return num1 - num2
//             }
//             else if(op === '*'){
//                     return num1 * num2
//             }
//             else if(op === '/'){
//                     return num1 / num2
//             }
//             else{
//                     return 'Incorrect operator!'
//             }
//     }
    
//     var result = cal(5,'-',5);
//    document.write(result)


// -------------Task 5 ------------
// function add(a){
//     alert(a**2)
// }
// add(2)


// -------------Task 6 ------------
// function factorial(a){
//     var fac = 1
//     for(var i=0; i<a; i++){
//         fac*=(a-i)
//     }
//     alert(fac)
// }
// factorial(5)

// -------------Task 7 ------------
// var Startnum = prompt('Enter Starting num: ');
// var Lastnum = prompt('Enter ending num: ');
// function func(a,b){
//     for(var a=a; a<=b; a++){
//         document.write(a)
//     }
    
// }
// func(Startnum,Lastnum)


// -------------Task 8 ------------
// var base = +prompt('Enter the value of base: ');
// var perp = +prompt('Enter the value of perpendicular: ');
// function func(a,b){
//     var hyp = (a**2)+(b**2);
//     function square(c){
//         var squ = c**2;
//         document.write(' hypotenuse of a right angle triangle' + squ)

//     }
    
// square(hyp)
// }
// func(base,perp)



// -------------Task 9 ------------
// function area(width,height){
//     var A = width*height
//     alert('The area of a rectangle' + A)
// }

// -------------Task 9(i) ------------
// area(5,7)

// -------------Task 9(ii) ------------
// var width = 5;
// var height = 6;
// area(width,height)

// -------------Task 10 ------------
// var word = prompt('Enter Word');
// var check = '';
// function palindrome(a){
//     for(var i=a.length-1 ; i>=0 ; i--){
//         check += a[i]
// }  
// if(check===a){
//         document.write(a,' is palindrome')
// }
// else{
//     document.write(a,' is not a palindrome')
// }

// }
// palindrome(word)



// -------------Task 11 ------------
// function convert(sen){ 
//     var newsen="" 
//     var sentence=sen.split(" ") 
//     for(var i=0;i<sentence.length;i++){ 
//         var word=sentence[i] 
//         newsen+=" "+word[0].toUpperCase()+word.slice(1,) 
//         } 
//         alert(newsen) 
//         } 
// var sen="the quick brown fox" 
// convert(sen)



// -------------Task 12 ------------
// function longest(sen){
//     var sentence=sen.split(" ");
//     var len=0;
//     for(var i=0;i<sentence.length;i++){
//         if(sentence[i].length>len){
//             var longestWord=sentence[i];
//             break
           
//         }
// }
//     alert("The longest word is: "+longestWord)
// }

// var sentnc="Web Development Tutorial"
// longest(sentnc)


// -------------Task 13 ------------
// function occur(str,let) {
//     count=0
//     for(var i=0;i<str.length;i++){
//         if(str[i]===let){
//             count+=1

//         }
//     }
//     alert("letter "+let+" repeated "+count+" times" )
    
// }


// occur( 'JSResourceS.com',"o")


// -------------Task 14 ------------
// function calcCircumference(radius) {
//     alert("The circumference is "+Math.round(2*3.14*radius,2))
    
// }

// function calcArea(radius) {
//     alert("The area is "+Math.round(3.14*radius*radius,2))
    
// }

// calcCircumference(5)
// calcArea(5)

