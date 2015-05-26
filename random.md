# What 

In this talk I am going to show you the latest in 1980s music technology. We will learn about creating sounds on the NES with JavaScript. My goal was to make it easier for JavaScript programmers to create web applications that will assist in making music for the NES. To do that I have written a JavaScript API to a sound engine that is written in 6502 assembler. This gives you a library to use that will allow you to either write music directly, or help you build wonderful tools with fancy UIs that will work in the browser. 

# Why

The reason I wanted to do this might be evident. I __like__ the chip tune sound and music, and am fascinated by the techniques that composers used back then with the limited resources that they had. I've been playing games on this hardware since I was about 4-5 years old, and I have a certain nostalgia for this stuff. Plus if I could get sound working in JavaScript, that means that I can probably get it working in the browser, which means people could build fancy UIs like sequencers, and other tools.

# How

In order to do this I first needed to get familiar with how the NES produced sound. This meant leaning about the 2A03 microprocessor that is used, and how to tell it to make sounds. After a lot of reading I was able to get a __beep__ to happen. After that I went through a tutorial on the NESDEV forums where you build a sound engine in assembler. When I was done with that I had a nice little sound engine to write an API to.

# Sound Channels

* Square 1/2
* Triangle
* Noise
