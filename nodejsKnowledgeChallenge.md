## [Node.js Knowledge Challenge](https://www.freecodecamp.org/news/before-you-bury-yourself-in-packages-learn-the-node-js-runtime-itself-f9031fbd8b69/)

__What is the relationship between Node.js and V8? Can Node work without V8?__
V8 is a javascript engine which is used to build Node.js for server side rendering. V8 serves as an engine inside the Node.js environment which exposes it's API that can be interpretted too by addition of C++ code as it's open source. Node.js cannot run without V8 engine which is a JIT interpretor, Just in time, that interpretes and compiles the code into an optimized machine code in two steps. Without the Javascript interprettor, Node.js cannot run as it depends on the interface between C++ and javascript.

__How come when you declare a global variable in any Node.js file it’s not really global to all modules?__
A global variable is wrapped implicitely and hence is local to IIFE (An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop) and prevents global var pollution.

__When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?__
When we want to export multiple vars/classes/functions from one module to another we use exports. While, module.exports is used to import single entity from one module to another.





