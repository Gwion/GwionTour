# Basic Argument handling

Let's look at this snippet

```gwion,editable
#require Std
#require Math
#require Modules

fun int get_ncycles() {
  if(me.args())
    return me.arg(0) => Std.atoi;
  return 2;
}

fun float get_user_duration() {
  if(me.args() > 1)
    return me.arg(1) => Std.atof;
  return 1;
}

fun dur get_duration() {
  return get_user_duration()::second;
}


get_ncycles() => const int ncycles;
get_duration() => var dur duration;

1 => var int compensate;
const SinOsc s ~> dac;

while(duration >= samp) {
  repeat(ncycles * compensate) {
    Math.rand2f(220, 880) => s.freq;
    duration => now;
  }
  duration/2. => duration;
  2 *=> compensate;
}
```

Yes, it's almost the same as the previous one,
but this one provides argument handling.  

For instance this function:
```gwion,no_run
fun int get_ncycles() {
  if(me.args())
    return me.arg(0) => Std.atoi;
  return 2;
}
```
checks if the file was called with any arguments, using `me.args()`.

If there is at least one argument, we get it as a string, using `me.arg(0)` since we want the first argument,
then we get the `int` value out of it, with `Std.atoi`.  

If there is no argument, it defaults to `2`.
