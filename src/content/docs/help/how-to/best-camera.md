---
title: Which camera works best
description: Ranked by how reliably the footage lines up with your ride data. Your phone wins, and it isn't close.
sidebar:
  order: 9
editUrl: false
---

Cycladat lines your ride data up with a video using one thing: the time the
file says it was filmed. So the best camera for Cycladat isn't the one with
the best picture. It's the one that writes an honest timestamp. Ranked:

## 1. Your phone

Android or iOS, doesn't matter. A phone camera, with the **original,
unedited video**, works best every time. The phone's clock is set from the
network, so it's right to the second. The file carries a proper capture
time. Cycladat reads it and the data lands on the footage with nothing for
you to do.

The "original, unedited" part matters more than the phone. Trim or crop the
clip in your phone's gallery before importing and you've usually thrown the
timestamp away; the edited copy is stamped with the time you edited it, not
the time you filmed it. Do your trimming inside Cycladat instead. There's a
page on exactly this: [trim in Cycladat, not on your phone](/help/how-to/trim-in-cycladat/).

## 2. Ray-Ban Meta glasses

Tested, verified, and they work. The glasses stamp each clip with the time
it _ended_ rather than the time it started, which would put the data a
clip-length late, but Cycladat recognises the files and subtracts the
duration. Import the clip the Meta app hands to your phone and it'll match.

## 3. GoPro

Not bad. GoPros have two habits: the clock drifts between syncs, and the
Hero 9 through 12 write local time into a field that's meant to be UTC.
Cycladat corrects the second one. The first one is on you: set the time in
the camera menu or open the Quik app with the camera connected before you
ride, and the match will be right. Skip that for a month and expect to
nudge the data a few seconds with the elevation strip.

Leave a GoPro without a battery for a while and it resets its clock
entirely; those files come out dated 2016 and won't match anything. Pick
the ride by hand and align.

## 4. Insta360

Almost always produces a bad timestamp, and we can't correct it. Clips cut
in the Insta360 app are stamped with the start of the original recording,
so a clip from the end of a ride claims to be from the start, and the
camera's clock drifts on top of that. Cycladat warns you when it sees an
Insta360 file. The footage is fine to use; you'll be aligning it by hand
every time. [Insta360 videos](/help/troubleshooting/insta360/) has the
details and the fastest way to do it.

## Everything else

DJI, Sony, dashcams, drones, a borrowed camera: Cycladat reads every
timestamp the file carries and uses the earliest, on the basis that copies
and exports only ever push the time later. That's right more often than
not. If it isn't, the fix is the same as for any camera: swipe up, and
slide the data along the ride. See
[my data doesn't line up with the video](/help/troubleshooting/data-doesnt-line-up/).

## The short version

Film on your phone, import the original, trim in Cycladat. If you're using
anything else, set its clock before you ride.
