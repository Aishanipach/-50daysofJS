## [Node.js Knowledge Challenge](https://www.freecodecamp.org/news/before-you-bury-yourself-in-packages-learn-the-node-js-runtime-itself-f9031fbd8b69/)

__What is the relationship between Node.js and V8? Can Node work without V8?__

V8 is a javascript engine which is used to build Node.js for server side rendering. V8 serves as an engine inside the Node.js environment which exposes it's API that can be interpretted too by addition of C++ code as it's open source. Node.js cannot run without V8 engine which is a JIT interpretor, Just in time, that interpretes and compiles the code into an optimized machine code in two steps. Without the Javascript interprettor, Node.js cannot run as it depends on the interface between C++ and javascript.

__How come when you declare a global variable in any Node.js file it’s not really global to all modules?__

A global variable is wrapped implicitely and hence is local to IIFE (An IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop) and prevents global var pollution.

__When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?__

When we want to export multiple vars/classes/functions from one module to another we use exports. While, module.exports is used to import single entity from one module to another.

__Can we require local files without using relative paths?__

No, we cannot. But to avoid the long relative path we can use npm link to bring the smaller package in with the global modules which are found in node_modules folder.

__Can different versions of the same package be used in the same application?__

Yes, we can install new version of a package in isolation to prevent a big migration step when not required using aliases.
` npm install <package_name_alias>@npm:<package_name>`

__What is the Event Loop? Is it part of V8?__

A browser contains different applications/dependencies/libraries and hence an event loop of it's own that takes account of call stack which overrides and is different from the event loop of V8.

__What is the Call Stack? Is it part of V8?__


V8 is a JavaScript engine that provides a runtime environment. The JavaScript runtime environment, provided by V8 or any other JavaScript Engine consists of the memory heap, and call stack, where the actual JS code is being compiled and executed

__What is the difference between setImmediate and process.nextTick?__

setImmediate allows us to directly add a callback to the event queue. If you are familiar with the event loop, this executes the callback function after check phase. While, process.nextTick queues the callback function to get executed immediately after the current phase is executed. We should prefer setImmediate as process.nextTick can cause I/O starvation in recursive call.

__How do you make an asynchronous function return a value?__

We can wrap the async function call in an await function.

__Can callbacks be used with promises or is it one way or the other?__

With promises, you attach callbacks on the returned promise object. A callback is a function that is to be executed after another function has finished executing. Async callbacks are functions that are passed as arguments. and when that function is called it will start executing code in the background. Calling an async function will always return a Promise.

``` javascript
const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //some request to the endpoint;
     
     if(request is successful){
       //do something;
       resolve();
     }
     else if(there is an error){
       reject();
     }
   
   });
};
```


__What are the major differences between spawn, exec, and fork?__

Fork starts a new process which is a copy of the one that calls it, while exec replaces the current process image with another (different) one. Spawn creates new nodes for the children processes to run on all of which return data to the parent, while fork executes child processes on the same node as parent.


__How does the cluster module work? How is it different than using a load balancer?__
Load balancing distributes the workload amongst multiple servers to improve the performances meanwhile clustering, provides a way of creating child processes that runs simultaneously and share the same server port.


