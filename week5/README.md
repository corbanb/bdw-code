### Week 5

This is your first week of practical coding. This week we will learn about variable types and other useful code techniques to give us the foundation of programming. 

#### Running Code with Sublimetext
The following information will help us setup a simple way to run and test our code in Sublime Text.

- Add new build systems via `Tools > Build System > New Build System`. 
- Save files as Language.sublime-build
- Any commandline tool for compiling code can be used.
- Cmd + B (OSX) will build files and send output to the Sublime Console



##### Example Files
![Submlime Examples](http://f.cl.ly/items/0a393Z2p1j1t1l042a3V/Screen%20Shot%202014-09-24%20at%2010.07.00%20AM.png)


##### Sublime Settings
Here you can see where to **create new builds** and to setup **automatic build types**.
![Sublime Build Menu](http://cl.ly/image/1c403E1f3u2N/Screen%20Shot%202014-09-24%20at%2010.09.30%20AM.png)


```javascript
// Sublime Text - Build System for Javascript
{
	"cmd": ["node", "$file"],
	"selector": "source.js"
}
```

```javascript
// Sublime Text - Build System for Javascript
{
	"cmd": ["node", "$file"],
	"selector": "source.js"
}
```


Lynda.com - [Foundations of Programming Fundamentals](http://www.lynda.com/JavaScript-tutorials/Foundations-of-Programming-Fundamentals/83603-2.html)


##### Simple Web Server
```
$ cd /path/to/project
$ php -S localhost:8000
```