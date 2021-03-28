# A Gwion 'Hello, World'

Let's get started using gwion!

## A simple example, step by step

We are gonna write a typical Gwion *Hello, World!*


### request needed plugin

In Gwion, a program typically makes sound.  
Let's get some handy sound generator,
in this case, from the `Modules` plugin.

```gwion
#require Modules
```


### Greet the world

Indeed, a *Hello, world* is meant to print something.  
This is done using the *gack operator* (`<<<` ... `>>>`)

```gwion
<<< "Hello, World!" >>>;
```


### Make some sound


Now we create a Sinusoidal generator
and connect it to thee audio output
(`dac` stands for *Digital to Audio Converter*)
using the `~>` operator.
```gwion
new SinOsc ~> dac;
```


## let time pass

Let's face it, we did not make any sound yet:
No time passed, and if no time passed,
there can't have been any sound.
We can *wait* some time using

```gwion
5::second => now;
```


## Try it

Here is the complete example, editable and runnable.  
Have fun!

```gwion,editable
#require Modules

<<< "Hello, World!" >>>;

new SinOsc ~> dac;

5::second => now;
```
