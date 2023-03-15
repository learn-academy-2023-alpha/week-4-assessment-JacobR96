# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# input: A number
# output: is odd or is it even
# Pseudo code: create a funtion that checks if the number %2 == 0 then it is even and else the number is odd. 
# Using a if statment



# def even_or_odd num

# if num % 2 === 0 
# "#{num} is even"

# else
# "#{num} is odd"
# end
# end



num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
 
# p even_or_odd(num1)
# p even_or_odd(num2)
# p even_or_odd(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete


# input- string
# output- string with out vowels
# Pseudo code: create a funtion that passes a string and deletes the vowels in the string and return the remanders 


# def the_deletor string

# string.delete "aeiouAEIOU"



# end

# beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
# beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
# beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

# p the_deletor(beatles_album1)
# p the_deletor(beatles_album2)
# p the_deletor(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


# input - a string 
# output- is the word a palindrome or not 
# Pseudo code: Create a funtion that will check if the word is equal to its reversed order. If the word is equal to word.reverse that I will print : this word a palindrome and if it is not equal to word.reverse the i will print this word is not a palindrome.

# User comment : i was reveicing that Racecar was not a palindrome, so i changed the capitalized R to  a lowercase r and it printed that Racecar is a palindrome. so i figured it was the capitalization of the first letter so i just capitalized every thing that was in the string.

# def palindrome string 
    
#     if string.upcase == string.reverse.upcase
#         " #{string} is a palindrome"

#     else
#       "#{string} is not a palindrome" 


#     end

# end

# palindrome_tester4 = 'dad'

# palindrome_tester1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
# palindrome_tester2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
# palindrome_tester3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'


# p palindrome(palindrome_tester1)
# p palindrome(palindrome_tester2)
# p palindrome(palindrome_tester3)
# p palindrome(palindrome_tester4)