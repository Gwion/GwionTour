# Declaring a Variable

In the former example, we just created a sinusoidal oscillator,  
without a way to access it later.

This time, let's *declare* it (so it has a name we can use),  
and change a few things (like it's volume and frequency)

```gwion,editable
#require Modules

<<< "Hello, World!" >>>;

#! create a Sinusoidal oscillator, named sine
#! and connect it to the speakers
var SinOsc sine ~> dac;

#! let some time pass
1::second => now;

#! change the frequency
220 => sine.freq;

#! let some time pass
1::second => now;

#! change the volume
0.1 => sine.amp;
.5::second => now;

#! change the volume, again
0.6 => sine.amp;
.5::second => now;

#! change the frequency
440 => sine.freq;

#! let some time pass
2::second => now;
```
