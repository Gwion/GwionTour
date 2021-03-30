# Using Functions

The former example raises a question,  
will we always need to type
```gwion,no_run
some_freq  => sine.freq;
some_duration => now;
```
everytime we want to set the frequency and advance time?


## Functions as mean to encapsulate behavior

Well, no: this can all fit in a function.
Let's write it

```gwion,no_run
fun void play(SinOsc sine, const float freq, const dur d) {
  freq => sine.freq;
  d => now;
}
```


### What does this mean?

the `fun` keyword denotes the start of a function declaration.

the *return type* of the function follows.  
here the function returns nothing, so it is declared as `void`.  

After that there is the function name, `play` in this case.

What follows is the argument list.  
A function argument syntax is as follow:
```c++
Type name
```

### A simple example function

Let's write a simple *adder*
```gwion,no_run
fun int add(int a, int b) {
  return a + b;
}
```

This time the function returns an int,
so we change the return type accordingly.

Here is how we call it
```gwion,editable
fun int add(int a, int b) {
  return a + b;
}
<<< add(1, 2) >>>;

#! alternatively
<<< (2, 3) => add >>>;
```

## A example using functions

```gwion,editable
#require Modules

fun void play(SinOsc sine, const float freq, const dur d) {
  freq => sine.freq;
  d => now;
}

var SinOsc sine ~> dac;

play(sine, 440, second);
play(sine, 220, .5::second);
play(sine, 220, .5::second);
play(sine, 440, second);
```




