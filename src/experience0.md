# A little psycho-acoustic experiment

Let's now try something that will put in evidence
that the distinction between melody and noise
is only perceptual.

Look at the snippet (and listen the result)

```gwion,editable
#require Math
#require Modules

#define NCYCLES 2

1 => var int compensate;
second => var dur d;
const SinOsc s ~> dac;

while(d >= samp) {
  repeat(NCYCLES * compensate) {
    Math.rand2f(220, 880) => s.freq;
    d => now;
  }
  d / 2. => d;
  2 *=> compensate;
}
```

Here we loop until our base duration is one sample
Until that we play `NCYCLES * compensate` notes of our duration.
Notes frequencies are randomly chosen between a low and a high bound
(here `220` and `880`, aka *A3* and *A5*).

At first we hear some ~~boring~~ slow melody.
It then gets faster and faster,
up to the point we only hear noise.
But if you listen carefully,
you'll hear that those noises have different *granularities*.
Near the very end, it's almost like if the noise is whisteling,
and the thing is that the frequency at which it whistles
is the median between the low and the bounds.

> Note: line 4, we use a preprocessor `define` to avoid *magic numbers*
in our code  
(this helps with configurability too)


