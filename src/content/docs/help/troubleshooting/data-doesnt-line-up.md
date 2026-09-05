---
title: My data doesn't line up with the video
description: Why the telemetry can sit a few seconds (or a few hours) away from the footage, and how to slide it into place.
sidebar:
  order: 1
editUrl: false
---

This is the question we get more than any other. You've picked a clip, the
stickers are ticking away, and the speed on screen is clearly from the descent
you did ten seconds later. Or you're stopped at a junction in the video and the
power sticker says you're doing 300 watts.

Here's what's going on, and then the fix. The fix is quick. The explanation is
longer, because we'd rather you understood it than took our word for it.

## Why it happens

Cycladat has exactly one thing to go on when it lines up a video with your
ride: the time the camera _says_ the video started. We read that from the
video file, look for a Strava activity (or an imported FIT file) covering that
moment, and pull the telemetry for that window. If the camera's clock is
right, the data lands on the footage to the second.

Cameras are not good at this. A few of the ways it goes wrong:

**Clocks drift.** Action cameras don't have a network connection to keep
their clock honest. GoPro's own support forum is full of threads about it, and
the standard advice from GoPro staff is to set the time in the camera menu or
let the Quik app sync it from your phone
([GoPro Support Hub](https://community.gopro.com/t5/Cameras/Hero-9-Black-How-to-verify-and-set-date-and-time/td-p/1027134)).
A camera that's a few weeks past its last sync can easily be ten or twenty
seconds out. That's enough to put the wrong climb under your stickers.

**Clocks reset.** Leave a GoPro without a battery for a while and it forgets
the date entirely. GoPro's support team describe this as expected behaviour:
"it is not unusual for the camera's date and time to be reset if left without
a battery or with a drained battery for an extended period of time"
([GoPro Support Hub](https://community.gopro.com/t5/Cameras/Camera-keeps-asking-to-update-date-time-and-all-files-are-dated/td-p/942712)).
Those files come out stamped 2016, and no ride of yours covers 2016.

**Some exports lie on purpose.** Insta360 is the worst case. Its app stamps
every clip you cut from a video with the start time of the _original_ video,
so a 30-second clip from the end of a three-hour ride claims it was filmed at
the start. On top of that the camera's clock drifts unless you connect it to
the phone app, which is Insta360's own fix: "Connect the camera to the Insta360
app to automatically synchronize the time"
([Insta360 online manual](https://onlinemanual.insta360.com/goultra/en-us/troubleshooting/file/time)).
We warn you when we detect an Insta360 file, because we know the match is
suspect before you do.

**Edits and copies move timestamps.** Trim a clip in your phone's gallery,
export it from an editor, AirDrop it, or save it from a messaging app and the
file picks up a new "created" time, and the app has nothing left to go on.
This one is avoidable: import the original and
[trim in Cycladat, not on your phone](/help/how-to/trim-in-cycladat/).

None of this is something Cycladat can see from the inside. A video with a
wrong timestamp looks exactly like a video with a right one. What we can do
is make it easy to fix.

## Slide the data along the ride

Open the clip in the editor and swipe up on the video. The trim view opens,
and under the trim strip is the **elevation strip**: your whole ride's
elevation profile, with the slice the clip is currently using highlighted as
a window.

That window is the data. Where it sits on the profile is where the app thinks
you were. Move it to where you actually were.

1. **Find the spot.** You know your routes. That climb in the video is a
   bump on the profile. The descent after it is the drop. Tap anywhere on
   the strip and the window jumps there.
2. **Watch the route.** While your finger is on the strip, the ride's GPS
   trace fades in over the video with a dot showing the position the data
   currently points at. If the dot is on the wrong road, keep sliding.
3. **Drag to fine-tune.** One finger drags the window along the ride. The
   stickers update live, so pick a moment in the video that's easy to read
   (a stop, a sprint, the top of a climb) and drag until the numbers agree
   with the footage.
4. **Pinch to zoom for precision.** On a long ride a short clip is a sliver
   of the profile and each pixel is several seconds. Pinch with two fingers to
   zoom in around them. At full zoom one second of ride is a few pixels wide,
   so you can place the window to the second. Pinch back out to see the whole
   ride again.

That's it. The offset applies to every sticker you've placed and any you add
afterwards, and the export uses the same aligned data.

:::tip[Seconds versus hours]
If the data is only a few seconds off, you don't need to zoom out at all.
Pinch in straight away and nudge. If it's hours off (a drifted Insta360
clock, say) zoom out, drag the window to roughly the right part of the ride
first, then zoom in to finish.
:::

## Before the next ride

Film on your phone if you can, and import the original file. It's the one
camera whose clock is always right; [which camera works best](/help/how-to/best-camera/)
ranks the rest. Set any other camera's clock before a ride you care about. On a GoPro that's
Preferences → General → Time and Date, or open Quik with the camera connected.
On an Insta360, connect it to the app. It takes ten seconds and it's the
difference between the data landing on its own and you dragging it into
place.

If you've got a video that won't match at all (a reset clock stamped 2016,
for example), pick the ride by hand when the app asks, then align it as above.

Once the data is where it should be but the _numbers_ still look off, that's
a different problem: see [the numbers look wrong](/help/troubleshooting/numbers-look-wrong/).
