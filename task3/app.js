// Write a program that displays current date and time in
// your browser.

// var curent_date_time = new Date()

// document.write(curent_date_time)


// Write a program that alerts the current month in words.
// For example December.


// var curent_date_time = new Date()

// document.write(curent_date_time + "<br>")

// var month = ['jan' , 'feb', 'march','april', 'may', 'june ' ,'july' , 'agust', 'sep','oct','nov','dec' ]
// var ge = curent_date_time.getMonth()

// document.write( 'current month:'+ ' '+month[ge])


// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var current = new Date()

// document.write(current + "<br>")

// var  convert = current.toString()

// var copy = convert.slice(0,3)

// document.write( 'Today is '+ ' '+copy)


// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.



// var current = new Date()

// document.write(current + "<br>")

// var  convert = current.toString()


// var copy = convert.slice(0,3)

// document.write( 'Today is '+ ' '+copy)

// if (copy == 'Sunday' || copy == 'Saturday')
// {
// document.write("It's Fun day")
// }

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16 th of the month
// else shows “Last days of the month”.


// var current = new Date()

// document.write(current + "<br>")

// var  convert = current.toString()

// var copy = convert.slice(8,10)

// document.write( 'Today is '+ ' '+copy + "<br>")

// if (copy < '16')
// {
// document.write("First fifteen days of the month")
// }

// else{

//     document.write('Last days of the month')
// }



// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var  curent_date_time =new Date('2015, 12, 5, 22:32:23')

// var millsSince = curent_date_time.getTime();

// var minutes = millsSince/(1000*60*60)

// document.write( 'current date' +' '+ curent_date_time + "<br>")

// document.write(  'Elapsed milisecond since jan 1 ,1970 :' + ' ' + millsSince + "<br>")

// document.write(  'Elapsed minutes since jan 1 ,1970 :' + ' ' + minutes + "<br>")



// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var curent_date_time = new Date()

// document.write(curent_date_time + "<br>")
// var hour =curent_date_time.getHours()


// document.write(hour + "<br>")

// if (hour < 12){
// document.write("Its AM")

// }

// else{

//     document.write("its PM")
// }


// . Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// var curent_date_time = new Date('31 Dec ,2020')
// document.write(curent_date_time)



// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015


// var current_Ramdan = new Date('25 April 2020')

// var milisec1 =current_Ramdan.getTime()

// document.write(' 2020 Ramadan '+ ' '+current_Ramdan + "<br>" + "<br>")

// document.write( 'miliseconds from 1970 to current ramadan' +' ' +    milisec1 + "<br>" + "<br>")

// var past_Ramdan = new Date('June 18, 2015')

// var milisec2 =past_Ramdan.getTime()

// document.write(  ' 2015 Ramadan ' + ' ' +  past_Ramdan + "<br>" + "<br>")

// document.write('miliseconds from 1 jan 1970 to 2015 Ramadan ' + ' ' + milisec2+ "<br>" + "<br>")

// var diff= milisec1 - milisec2

// var num_of_days = diff/(1000*60*60*24)

// // var acc =Math.floor(num_of_days)

// document.write(num_of_days + ' ' + ' Days have passed since 1st Ramadan,2015')



// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var reference = new Date('2015, 12, 5, 22:50:16')

// var milisec1 =reference.getTime()

// document.write('On Reference Date:'+ ' '+ reference + '<br>')
// document.write('miliseconds 1:'+ ' '+ milisec1 + '<br>')

// var beginning = new Date('jan 01,2015')

// var milisec2 =beginning.getTime()

// document.write('miliseconds 2:'+ ' '+ milisec2 + '<br>')
// document.write('Begining of 2015:'+ ' '+ beginning + '<br>')

// var diff = milisec1 - milisec2

// var num_of_days =(diff)/(1000*60)

// var acc = Math.ceil(num_of_days)
// document.write( acc+ ' '+ 'Seconds had passed since beginning of 2015')


// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.


// var curent_date_time =new Date('Dec 5 2015 23:08:16')

// document.write( 'Current Date:'+' '+curent_date_time +"<br>")

// var hour=curent_date_time.getHours()

// document.write(hour+"<br>")

//  curent_date_time =new Date('Dec 5 2015 22:08:16')

// document.write( '1 hour ago, it was' + ' ' + curent_date_time)


// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


// var curent_date_time=new Date('Dec 5 2015 23:09:37')

// document.write( 'current date:'+ ' ' +curent_date_time+'<br>')

// curent_date_time=new Date('Dec 5 1915 23:09:37')

// document.write(  '100 year back, it was'+ ' ' +curent_date_time+'<br>')



// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.


// var age = prompt("Enter your age")

// var date_of_birth = 2020 -age

// document.write('Your age is'+ ' '+ age+ '<br>')
// document.write('Your Date of Birth is:'+ ' ' +date_of_birth)



// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge




var Customer_name='ABC Customer'

var  Current_Month = 'February'

var Number_of_units = '410'

var Charges_per_unit = '16'

var Net_Amount_Payable = Number_of_units * Charges_per_unit
var Late_Payment_Surcharge = Net_Amount_Payable - Gross_Amount_Payable

  var  Gross_Amount_Payable = Net_Amount_Payable + Late_Payment_Surcharge

  document.write(Net_Amount_Payable +"<br>")

  document.write(Late_Payment_Surcharge +"<br>")

  document.write(Gross_Amount_Payable +"<br>")