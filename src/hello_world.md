# A Gwion 'Hello, World'

Let's get started using gwion!

## A simple example, step by step

We are going to write a typical Gwion *Hello, World!*


### Prepare to make sound

In Gwion, a program typically makes sound.  

#### Request needed plugin

Now we create a Sinusoidal generator
and connect it to thee audio output
(`dac` stands for *Digital to Audio Converter*)
using the `~>` operator.

```gwion,no_run
#require Modules
new SinOsc ~> dac;
```
> the `SinOsc` class comes from the `Modules` plugin

### Greet the world

Indeed, a *Hello, world* has to print something.  
We do so using the *gack operator* (`<<<` ... `>>>`)

```gwion,no_run
<<< "Hello, World!" >>>;
```


## Let time pass

Let's face it, we did not make any sound yet:
No time passed, and if no time passed,
there can't have been any sound.
We can *wait* some time using

```gwion,no_run
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
