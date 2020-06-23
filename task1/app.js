// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var first_name = prompt('enter first name')
// var last_name = prompt('enter last name')
// var full_name = first_name +" "+ last_name
// document.write('Hello'+" "+ full_name + " "+ 'How are u?')

// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favorite_mobile=prompt('Enter your favourite mobile phone model')
// var length_of_string=favorite_mobile.length
// document.write('My favourite phone is :'+ ' '+ favorite_mobile+ ' '+'<br>')
// document.write('Length of String:'+length_of_string)

// Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word='Pakistan'
// var index=word.indexOf('n')
// document.write( 'Index of n is:'+' '+index)

// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser .

// var word='Hello World'
// document.write('string:'+' '+word+ '<br>')
// var lastindex=word.lastIndexOf('l')
// // var index=word.indexOf('l')
// document.write('Last index of l:'+ ' '+lastindex)
// // document.write(index)




// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser .

// var character='Pakistan'
// var index=character.charAt(3)
// document.write(character+'<br>')
// document.write('character at index 3:'+ ' '+index)

// Repeat Q1 using string concat() method.
// QUESTION # 1 is
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


// var first_name = prompt('enter first name')
// var last_name = prompt('enter last name')
// var full_name = first_name.concat( " "+last_name)
// document.write('Hello'+" "+ full_name + " "+ 'How are u?')



// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city='Hyderabad'
// var replcement=city.replace('Hyder','Islam')
// document.write('City:'+' '+city +'<br>')
// document.write('After replcement:'+ ' '+replcement)


// Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = 'Ali and Sami are best friends. They play cricket andfootball together.'
// var replcement=message.replace(/and/g,'&')
// document.write(replcement)


// . Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var a="472"
// var type1=typeof(a)
// document.write( ' type of ' +a + ' ' +'is'+' '+ type1 +'<br>') 
// var converts=Number(a)
// var type2=typeof(converts)

// document.write( ' type of ' +converts + ' ' +'is'+' '+ type2)


// Write a program that takes user input. Convert and
// show the input in capital letters.
// var input=prompt("Enter")
// var converts=input.toUpperCase()
// document.write('user input:'+' '+input +'<br>')
// document.write('Uper case'+' '+converts)



// Write a program that takes user input. Convert and
// show the input in title case.

// var input=prompt("Enter")
// var converts=input.toLowerCase()
// document.write('user input:'+' '+input +'<br>')
// document.write('lower case'+' '+converts)


// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var str=num.toString()
// document.write('Number:'+' '+num+ '<br>')
// var dot=num*100
// document.write( 'After removing dot:'+' '+dot)

// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// var input=prompt("Enter Your Name")
// // var ascii=input.charCodeAt()
// for(i=0;i<input.length;i++){
// if(input[i]=='@'||input[i]=='!'||input[i]=='.'||input[i]==','){
// prompt("Enter a valid username")
// }
// }


// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var  A=['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var input=prompt('Welcome to ABC Bakery what do you want to order sir/maam')
// var converts=input.toLowerCase()
// for(i=0;i<A.length;i++)
// {
// if(converts===A[i]){

//     alert(converts+' '+'is available at index'+ ' '+i)
// }

// else if(converts!==A){


//     alert(converts+' '+'is  not available in our bakery')

// }
// }



// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// //  WRONG CODE
// var input=prompt('please Enter your password. It should contain alphabets and numbers. It should not start with a number It must at least 6 characters long')
// var ascii = input.charCodeAt()
// // for(i=0;i<input.length;i++)
// // {
// if(ascii>=65 && ascii<=122 && ascii>=48 && ascii>=57){
// alert("u enter valid password")
// }
// else if(ascii>=65 && ascii<=122 || ascii>=48 && ascii>=57)

// {
// alert('u enter invalid password')
// }

// }


// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = 'University of Karachi'
// var splitting=university.split("")
// for(i=0;i<university.length;i++)
// {

//     document.write(splitting[i]+"<br>")

// }
// // document.write("<br>"+splitting)



// Write a program to display the last character of a user
// input.

// var input= prompt("Enter Any word")

// var last_char=input.charAt(input.length-1)

// document.write('last character of input:'+" "+last_char)

// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var finding= 'The quick brown fox jumps over the lazy dog'

// for(i=0;i<finding.length;i++){

//    var  ascii = finding.charCodeAt(i)


//    if(ascii===116 || ascii===84)
//    {

//       alert('number of occurrences of word “the” in given string is:' +' '+'2')
//    }

//    break
// }