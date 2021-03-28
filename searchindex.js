Object.assign(window.search, {"doc_urls":["hello_world.html#a-gwion-hello-world","hello_world.html#a-simple-example-step-by-step","hello_world.html#prepare-to-make-sound","hello_world.html#greet-the-world","hello_world.html#let-time-pass","hello_world.html#try-it","Variable.html#declaring-a-variable"],"index":{"documentStore":{"docInfo":{"0":{"body":4,"breadcrumbs":5,"title":3},"1":{"body":6,"breadcrumbs":6,"title":4},"2":{"body":33,"breadcrumbs":5,"title":3},"3":{"body":12,"breadcrumbs":4,"title":2},"4":{"body":15,"breadcrumbs":4,"title":2},"5":{"body":15,"breadcrumbs":3,"title":1},"6":{"body":68,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Let's get started using gwion!","breadcrumbs":"Hello, World! » A Gwion 'Hello, World'","id":"0","title":"A Gwion 'Hello, World'"},"1":{"body":"We are gonna write a typical Gwion Hello, World!","breadcrumbs":"Hello, World! » A simple example, step by step","id":"1","title":"A simple example, step by step"},"2":{"body":"In Gwion, a program typically makes sound. Request needed plugin Now we create a Sinusoidal generator and connect it to thee audio output (dac stands for Digital to Audio Converter ) using the ~> operator. #require Modules\nnew SinOsc ~> dac; the SinOsc class comes from the Modules plugin","breadcrumbs":"Hello, World! » Prepare to make sound","id":"2","title":"Prepare to make sound"},"3":{"body":"Indeed, a Hello, world is meant to print something. This is done using the gack operator (<<< ... >>>) <<< \"Hello, World!\" >>>;","breadcrumbs":"Hello, World! » Greet the world","id":"3","title":"Greet the world"},"4":{"body":"Let's face it, we did not make any sound yet: No time passed, and if no time passed, there can't have been any sound. We can wait some time using 5::second => now;","breadcrumbs":"Hello, World! » let time pass","id":"4","title":"let time pass"},"5":{"body":"Here is the complete example, editable and runnable. Have fun! #require Modules <<< \"Hello, World!\" >>>; new SinOsc ~> dac; 5::second => now;","breadcrumbs":"Hello, World! » Try it","id":"5","title":"Try it"},"6":{"body":"In the former example, we just created a sinusoidal oscillator, without a way to access it later. This time, let's declare it (so it has a name we can use), and change a few things (like it's volume and frequency) #require Modules <<< \"Hello, World!\" >>>; #! create a Sinusoidal oscillator, named sine\n#! and connect it to the speakers\nvar SinOsc sine ~> dac; #! let some time pass\n1::second => now; #! change the frequency\n220 => sine.freq; #! let some time pass\n1::second => now; #! change the volume\n0.1 => sine.amp;\n.5::second => now; #! change the volume, again\n0.6 => sine.amp;\n.5::second => now; #! change the frequency\n440 => sine.freq; #! let some time pass\n2::second => now;","breadcrumbs":"Declaring a variable » Declaring a Variable","id":"6","title":"Declaring a Variable"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"g":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0},"2":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":3,"docs":{"0":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"w":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.23606797749979}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"o":{"df":0,"docs":{},"s":{"c":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":2.0},"6":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":5,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":5,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"3":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"0":{".":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"4":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{":":{":":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"d":{"a":{"c":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":2.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"6":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}},"g":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":3,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.0},"2":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":7,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"t":{"'":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":3,"docs":{"0":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"w":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.0}}}},"o":{"df":0,"docs":{},"w":{"df":4,"docs":{"2":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":2.23606797749979}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"s":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"4":{"tf":2.0},"6":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"r":{"df":3,"docs":{"2":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"n":{"df":0,"docs":{},"e":{".":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"o":{"df":0,"docs":{},"s":{"c":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"2":{"tf":1.0},"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"4":{"tf":2.23606797749979},"6":{"tf":2.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"s":{"df":5,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"6":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}}}},"w":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"y":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":7,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":1.4142135623730951},"2":{"tf":1.0},"3":{"tf":2.23606797749979},"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"title":{"root":{"d":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});