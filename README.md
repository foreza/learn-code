

# learn-code

Hello, this is my space for learning concepts.
My hope is to make a vast library of knowledge where I can identify solutions to my issues and also memorize terms.
At some point I envision breaking each major section off into more focused portions, but this will serve for now until this gets too big.
The dream is the creation of a knowledge base.


## Vocab


*What is Serialization?* 

Serialization is the conversion of an object to a series of bytes, so that the object can be easily saved to persistent storage or streamed across a communication link. The byte stream can then be deserialized - converted into a replica of the original object.

In other words, it makes the object transferable. This might be done on the networking layer. 

https://stackoverflow.com/questions/447898/what-is-object-serialization

*What is an ENUM*

Use enums when a variable (especially a method parameter) can only take one out of a small set of possible values. Examples would be things like type constants (contract status: "permanent", "temp", "apprentice"), or flags ("execute now", "defer execution").

In other words, if you want to have a variable that defines more than just a true / false but you know all of those values, you can use an enum.

https://stackoverflow.com/questions/4709175/what-are-enums-and-why-are-they-useful

*What is a strongly typed language*

It is a language in where each type of data is predefined as part of the programming language. 
It ensures that anything that is defined is a known type, and enforces certain operations with certain data types.
Advantage - rules, and certain consistency. Disadvantage - limits creativity, can't invent data types not anticipated by thw ;

*What is ...*

## Resources


### IOS

How to do a POST request in Swift:
http://jamesonquave.com/blog/making-a-post-request-in-swift/ 


### Android


MainActivity is typically the 'entry point' for the application. When the app is built/run, the system then launches an instance of this Activity.

The activity XML defines the UI layout for the particular activity.

The AndroidManifest defines the fundamentals of the app, and also defines each of the components.

build.gradle - one of them for the project, and one of them for the module. 
Projects might have several modules, but we just need to usually mess with the build.gradle of the module.

The UI of the Android App uses layouts and widgets.
Layouts = viewgroups
Widgets = viewobjects

UI strings - there is a strings.xml resource file that is used to specify all UI strings. This allows you to manage all UI strings in one location, and easier to find/update rather than had code strings in layout. 

Chain - horizontal chain (only for the UI layout) - it's a bidirectional constraint between two or more viewed. (sort of like a grouping) Can be used to neaten up the view. However, in the end you are just messing with the XML.

What is an Intent? 

It is an object that provides runtime binding between seperate components, like 2 activities.
It represents an 'intent to do something'. Intents can be used for many things. 


What is AppCompat? 

https://stackoverflow.com/questions/35553306/what-is-appcompat

It is a set of support libraries that can allow newer apps to work on older versions of Android. If you target a min and a max, it will help ensure that newer features that might be supported in a newer api is still functional on an older phone. 


What is Kotlin?

https://www.infoworld.com/article/3224868/java/what-is-kotlin-the-java-alternative-explained.html

Kotlin is a 'pragmatic' programming language. It combines OOP and functional programming. 
It's a 'strongly typed' language - meaning that each type of the data is predefined as part of the language. 
It's also being developed for JavaScript (which is known as a weakly typed language)
At a high level, it could be thought of as a streamlined version of Java that deals away with mindless repetition when you instantiate.
It was designed to eliinate null pointer references and better handle null values. (Similar to Obj-C / Swift)
?. can also be used as a safe call operator, combined with 'let'
Kotlin was only recently supported by Google (Google IO 2017) and interoperates with Java / shares tooling. 
There is 0 overhead for calling back and forth. Very few instances will result in interoperability issues. 
Kotlin is safer / more concise than Java code, they can both co-exist, and can be used to expand existing Java apps. 
The only instance to choose Java over Kotlin would be for complete novice programmers (like myself!)
Converting from one to the other is straight copy + paste, however. The learning curve is very low (few hours)




#### Android Studio specific

Running the Advanced Profiling in Android 6 will cause dumps: (not yet optimized from my understanding)

https://stackoverflow.com/questions/36498605/inputconnection-finishcomposingtext-nullpointerexception
https://stackoverflow.com/questions/47440771/focus-on-edittext-result-in-crash/47451443#47451443

When you are running the profiler tool (to check memory dumps), you don't need to have the real time view. It may not be necessary. If you are just looking for mem leaks in a specific package (usually the case) then all you need to do is do 2x garbage collection and then dump the heap.

Using the memory profiler - you can record, and then view items with a hprof extension in Android Studio

https://developer.android.com/studio/profile/memory-profiler

This allows you to look for mem leaks later without leaving the tool running. Also, unless you have a powerhouse, don't try to leave view on. (imagine if you have a limited OS!)

Android Studio IDE optimizations
https://www.quora.com/Why-does-Android-Studio-take-up-more-memory-RAM-in-a-Windows-OS

I was using a MAC during this time, but definitely there is a lot of unecessary things going on in the background that can be disabled and closed. 

Memory Leaks and troubleshooting those in Android Studio

https://android.jlelse.eu/memory-leak-patterns-in-android-4741a7fcb570



### Web


### Other topics (unsorted)

*What is Scala?*

https://en.wikipedia.org/wiki/Scala_(programming_language)

Scala is a general programming language providing support for functional programming and a strong static type system.
A lot of the design decisions aimed at addressing some criticisms that Java faced. The source code of Scala can be compiled to Java bytecode so you can use the Java Virtual Machine (JVM). 
Scala is object oriented, and derives a lot of it's syntax from C. However, it has features of many other progamming languages. 
You can also do neat things like operater overloading, optional params, etc. One feature that isn't available however is 'checked exceptions'


## Command Line

grep 

## Challenges
Doing challenges to better myself! Here are my commented solutions / work in progress.
As of 2018, currently tackling Codefights.
Working my way up into the /codefights.com/arcade and completing all the challenges.
I plan to revist my solutions at some point and refactor once I have learned more. 

- TODO
