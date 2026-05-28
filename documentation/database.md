# What is Database ?
Database is an organized collection of data that is going to help us to access, review, and update a particular piece of information in a rapid and coherent manner. 

## What is RDBMS? 
RDBMS stands for Relational Database Management System. Mainly, this RDBMS is going to talk about maintaining the data in multiple tables instead of storing it in a single table. 

## What is SQL? 
SQL meant for Structured Query Language . SQL is the programming language that we are going to use to interact with the database. By using SQL programming language, we can perform CRUD operations in the database. 

## CRUD OPerations?
C refers create operations. ==> INSERT , CREATE
R refers read operations. => SELECT
U refers update operations. => UPDATE , ALTER
D refers delete operations. ==> DELETE , DROP

# Syntax to create column :COLUMN_NAME DATA_TYPE CONSTRAINT

## Data Types in SQL ?

### Numeric Data Types
SMALLINT => 2 bytes ==> It can store the numbers without decimals from -32768 to +32767
INTEGER => 4 bytes => It can store the numbers without decimals from -2147483648 to +2147483647
BIGINT => 8 bytes ==> It can store the number without decimals from -19 digits to +19 digits. 

FLOAT ==> Float can store numbers with decimals up to 6 decimal points. 
DOUBLE ==> Double can store numbers with decimals up to 15 decimal points. 
DECIMAL ==> Decimal can store up to 16k plus decimal points. 

SMALLSERIAL  ==> 2 bytes => It can store numbers without decimals from 1 to 32,767. 
SERIAL => 4 bytes => It can store the numbers without decimals from one to +2147483647
BIGSERIAL => 8 bytes => 1 to +19 digit number

### Character Data Types 
CHAR(n) => CHAR(n) data type is going to allow us to store a fixed number of characters. 
VARCHAR(n) => VARCHAR(n) data type is going to allow us to store a variable number of characters. 
TEXT => Text Datatype is going to allow us to store unlimited characters. 

### Boolean Data Types 
BOOLEAN => true /false

### DATE and TIME datatype
DATE => Date data type can store only date. 
TIME ==> Time Datatype can store only time. 
TIMESTAMP => Timestamp Datatype can store date and time together. 
INTERVAL => Interval data type can store the period in minutes, hours, days, months, and years. 

## OPERATORS in SQL ?

## Arithmetic operators 
Arithmetic operators are nothing but the operators used in the mathematical operations. 
+ Represents addition 
- Represents subtraction 
* Represents multiplication 
/ Represents division 
% Represents modulus or reminder 

## Comparison operators. 
Comparison operators are nothing but the operators we are going to use to compare two different values. 
= equal to 
!= not eauql to
> greater than
< less than
>= greater than or equal to
<= less than or equal to

## Logical Operators 
AND => It will give you results as 'true' , only if all the conditions are true.
OR => It will give you results as 'true' ,  if atleast one condition is true.
NOT => Opposite result. 
BETWEEN => Filter the rows within the specific range. 
IN => Filter the rows based on the list of specific values. 
LIKE => Filter the rows based on the pattern matching with '%' percentile and '_' underscore square. 
IS NULL => Filter the rows where the column contains a null value. 
EXISTS => Check if the subquery returns any rows. Based on that, we want to filter the records from the main table. 

## CONSTRAINTS in SQL  ?
Constraints are all about conditions added on top of the database column. 

NOT NULL => The column having a NOT NULL constraint won't allow null values. 
UNIQUE => The column having a UNIQUE constraint won't allow duplicate values. 
PRIMARY KEY => Primary key constraint is a combination of UNIQUE + NOT NULL (Null values and duplicate values both are not allowed. )
FOREIGN KEY => Foreign Key Constraint is the key that is going to link two different tables, ensuring referential integrity.  
CHECK => Check constraint is going to help us to add a custom condition. 
DEFAULT => Default constraint will help us to store default values. 

## Default Functions in SQL ?

## Aggregate Functions 
Aggregate functions are all about the functions designed to perform calculations on a set of rows and return a single result. 

COUNT() => SELECT COUNT (*) FROM TABLE_NAME => It will return the total number of rows available in the table. 
SUM() => SELECT SUM (COLUMN_NAME) FROM TABLE_NAME  => It will return the sum of all the values stored in the particular column. 
AVG() => SELECT AVG (COLUMN_NAME) FROM TABLE_NAME => It will return the average value of all the values stored in the specific column.
MIN() => SELECT MIN (COLUMN_NAME) FROM TABLE_NAME => It will return the minimum value out of all the values stored in the specific column. 
MAX() => SELECT MAX (COLUMN_NAME) FROM TABLE_NAME => It will return the maximum value out of all the values stored in the specific column. 

## String Functions
String functions in PostgreSQL are used to manipulate and transform the text or character data types. 

LENGTH() => Length function will return the total number of characters stored in the string. 
UPPER() => It will convert all the characters of the string into uppercase. 
LOWER() => It will convert all the characters of the string into lower case. 
SUBSTRING(COLUMN FROM 1 TO 3) => It will extract part of the string based on the start and end indexes specified. 
TRIM() => It will eliminate leading and trailing spaces from the string. 
CONCAT() => Concat function will join two or more strings together and finally result in one single string. 

## Numerical Functions
Numerical functions in SQL are all about the functions that we are going to use to perform mathematical operations. 

ABS() => Return the absolute value or positive value of the number. => SELECT ABS (-123.99) => 123.99
CEIL() => Return the ceiling value, meaning the nearest next integer. => SELECT CEIL(125.11) => 126
FLOOR() => Return the floor value, meaning the nearest prev integer. => SELECT CEIL(125.99) => 125
ROUND() => It will return the round of value based on the decimal point specified.  , SELECT ROUND(125.995 ,2) => 126.00
POWER() => It will return the power of a specific number.  => POWER(2,3) => 8
SQRT() => It will return the square root of the number. => SQRT(49) => 7