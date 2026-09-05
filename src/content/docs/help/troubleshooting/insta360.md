---
title: Insta360 videos
description: Why Insta360 clips almost never match on their own, and the two-minute fix.
sidebar:
  order: 5
editUrl: false
---

If you film with an Insta360, Cycladat shows you a warning as soon as it
recognises the file. It's not that the video won't work. It's that the time
the file says it was filmed is very likely wrong, and we'd rather tell you
before you spend ten minutes wondering why the numbers are off.

## Why Insta360 clips don't match

**The app stamps clips with the wrong time.** When you cut a clip out of a
longer recording in the Insta360 app, the exported file is stamped with the
start time of the _original_ recording, not the moment the clip is from. Cut
thirty seconds from the end of a three-hour ride and the clip claims it was
filmed at the start. There's no way for us to know how far into the
recording your clip came from; that information isn't in the file.

**The camera's clock drifts.** Insta360 cameras keep time only as well as
their last sync with the phone app. Insta360's own troubleshooting for
files with the wrong timestamp says to "connect the camera to the Insta360
app to automatically synchronize the time"
([Insta360 online manual](https://onlinemanual.insta360.com/goultra/en-us/troubleshooting/file/time)).
Skip that for a few weeks and the clock can be minutes out, which is
before you even get to the first problem.

Other cameras have one of these problems at most, and we can often correct
for it. GoPros mislabel their timezone, for instance, and we fix that
silently. Insta360 has both, and the first one can't be corrected from
outside.

## The fix

You'll likely be asked to pick the ride yourself, because a clip claiming
to be from three hours ago may not match any ride. Pick it. Then, in the
editor:

1. Swipe up to open the trim view. Under the trim strip is the elevation
   strip: your whole ride's elevation profile with a highlighted window
   showing which part of the ride the data is currently coming from.
2. Pinch out so you can see the whole ride, then drag the window to roughly
   where the clip is from. You know your route: that big climb is the big
   bump.
3. Pinch in to zoom around the window and drag until the numbers match the
   footage. Use something obvious in the video, a stop or a sprint, as the
   reference.

Hours of offset take about a minute of dragging at whole-ride zoom, then a
few seconds of fine placement. The full walkthrough, including what the
route trace overlay is showing you, is on
[my data doesn't line up with the video](/help/troubleshooting/data-doesnt-line-up/).

## Before the next ride

Sync the camera with the Insta360 app before the ride. That fixes the
drift, and it means the file's timestamp at least points at the right
recording. Then when you cut a clip, remember roughly how far into the
recording it was; you'll be dragging the window to that point.

If you export the _whole_ recording rather than a clip, and the clock was
synced, the timestamp is right and the app will match it on its own. The
90-second limit means you'll trim in Cycladat instead, and trimming keeps
the alignment.
