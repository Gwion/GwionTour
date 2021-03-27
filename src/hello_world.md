# A Gwion 'Hello, World'

Let's get started using gwion!
Here is a simple example

```gwion,editable
#! request needed plugin
#!require Modules

#! print 'Hello, World'
<<< "Hello, World!" >>>;

#! create a Sinusoidal oscillator
#! and connect it to the speakers
new SinOsc ~> dac;

#! let time pass
5::second => now;
```
