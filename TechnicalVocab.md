

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


# Obfuscation
This process is typically supported in most compiled programming languages, and serves a purpose of making it deliberately harder for anyone to understand. It will use needlessly roundabout expressions in some implementations, but the main goal is to conceal the true purpose of the code (security through obscurity)
A notable example of this is ProGuard / DexGuard for Android, which will rename variables / take preventitive measures to really mess with the readability. 

https://riis.com/blog/android-obfuscation-proguard-dexguard/
http://www.brightdevelopers.com/reverse-engineer-android-apk/
https://medium.com/theappspace/increase-the-security-of-your-ios-app-by-obfuscating-sensitive-strings-swift-c915896711e6


# Encryption Key

The key is, crudely, the equivalent of a password; you use it to encrypt a message, and then the same key gets used to decrypt it back to the original plaintext.  

# Salt, Hash, Salting/Hashing

A salt is most typically encountered with cryptographic hash functions, not encryption functions. 
The idea is that rather than hashing just your data (e.g. a password), you hash data+salt, where salt is typically a randomly-generated string. This would slow down a brute force attack, and also throw off anyone who is trying to identify a collision using a rainbow table. 

# Rainbow Table

?? to be filled in 
