## Goals

1. Make awesome 8-bit Music
2. Use JavaScript

## First Approach

* Built a site that was a grid of toggles switches
* Samples of the NES were used
* They all had an on/off switch

For each beat a sample was either on or off.

## Problems

* Sounds were limited to samples that I found
* Unless using samples things didn't sound right when just using web audio
* Wanted a more authentic way to create sounds

Didn't really like the first approach. It was cool at first, but not really what I wanted.

## Possible Solutions

* Write an emulator for the audio PPU and get it working with Web Audio (might be hard for me)
* Write a sound engine for 6502 NES ASM (still hard) and a js api to it

## Second Approach

### Make a NES beep

I actually got this working. I wrote the assembler to make square channel beep. It took a lot of assembler, and to be honest I didn't understand all of it.

### Write a sound engine

After getting the beep to work I realized that writing a whole sound engine in ASM might be a bit out of range for me. I could probably do some more beeps and get some other channels working, but I wasn't sure I could write an engine and abstract a lot of that stuff away, at least not in assembler.

### Stand on the shoulders of giants

I went through a sound tutorial on the Nintendo Age Forums. At the end of it you have a pretty decent working sound engine. This was pretty much exactly what I needed. I just needed to make some modifications to do some of the dynamic stuff like generating the songs and the headers. I emailed the author of the tutorial and asked if it was cool to use and if I could modify the engine and include it in my js project. He said yes, so I started writing a JavaScript api that generated this ASM.

## Doot

The very first thing I wrote was a very short sequence of arpeggios that I called doot. Surprisingly it worked. I was super happy at this point, because I really didn't know that I could even get this far when I first started this. It used three channels: square 1, square 2, and triangle. I didn't know how to use the noise channel to make drums yet. There were a ton of features that were not available. Timing was hardcoded, etc. But it worked. It made sound and it didn't take that long to write.
