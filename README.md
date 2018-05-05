

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


## Resources


### IOS

How to do a POST request in Swift:
http://jamesonquave.com/blog/making-a-post-request-in-swift/ 


### Android




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



## Command Line

grep 

## Challenges
Doing challenges to better myself! Here are my commented solutions / work in progress.
As of 2018, currently tackling Codefights.
Working my way up into the /codefights.com/arcade and completing all the challenges.
I plan to revist my solutions at some point and refactor once I have learned more. 

- TODO
