

# Semaphore / Mutex
It is an abstract data type that can control access to resources.
A semaphore can be used to restrict up to a certain number (say, 4 threads)
A mutex is a semaphore that only allows 1 thread at a time to access said resource.
https://www.mkyong.com/java/java-thread-mutex-and-semaphore-example/


# Serialization
Serialization is the conversion of an object to a series of bytes, so that the object can be easily saved to persistent storage or streamed across a communication link. The byte stream can then be deserialized - converted into a replica of the original object.	
In other words, it makes the object transferable. This might be done to prepare a resource for tranmission on the networking layer. 	
https://stackoverflow.com/questions/447898/what-is-object-serialization	


# ENUM / Enumerations
An enum is a data type with a set of named values. 
Use enums when a variable (especially a method parameter) can only take one out of a small set of possible values. 
Examples would be things like type constants (contract status: "permanent", "temp", "apprentice"), or flags ("execute now", "defer execution").	
In other words, if you want to have a variable that defines more than just a true / false but you know all of those values, you can use an enum.	
https://stackoverflow.com/questions/4709175/what-are-enums-and-why-are-they-useful	

# Strongly typed language
It is a language in where each type of data is predefined as part of the programming language. 	
It ensures that anything that is defined is a known type, and enforces certain operations with certain data types.	
Advantage - rules, and certain consistency. Disadvantage - limits creativity, can't invent data types not anticipated by the creators. 


