---
title: Trim in Cycladat, not on your phone
description: Editing a video in your phone's gallery usually destroys the timestamp Cycladat needs. Import the original and cut it here.
sidebar:
  order: 10
editUrl: false
---

You filmed a four-minute descent and you want the best thirty seconds. The
natural thing is to trim it in the phone's gallery and then bring the short
version into Cycladat. Don't. Import the original and trim it here.

## Why

It's all about timestamps. Cycladat finds your ride, and the exact seconds
of data to show, from the time the video file says it was filmed. A video
straight from the camera carries that time. A video that's been through an
editor usually doesn't.

When you trim or crop in the iOS Photos app or in Google Photos and save
the result, the phone writes a new file. That file gets the time you
_edited_ it, not the time you _filmed_ it. An edited copy from an hour after
the ride will match nothing, or worse, match the wrong moment and put the
wrong numbers on your video.

The same goes for any edit that produces a new file: cropping, rotating,
adding a filter, stitching clips, or "saving a copy" from a third-party
editor.

## What Cycladat does instead

Cycladat trims without touching the file. Swipe up in the editor, drag the
handles on the thumbnail strip to the part you want, and that's the clip.
The original's timestamp is still the reference, so the app knows the
trimmed range starts, say, 2 minutes 40 seconds into a video filmed at
10:14:07, and shows the data for exactly that stretch. Nothing drifts.

You get the same result you'd have got from the gallery, with the numbers
right. Clips can be anywhere from 3 to 90 seconds, and the details are on
[trimming the clip](/help/how-to/trimming/).

## If you've already edited it

Two options. Find the original in your gallery (iOS keeps it behind the
edited version; tap Edit then Revert to get it back, or duplicate first if
you want both) and import that. Or import the edited clip, pick the ride by
hand when the app asks, and slide the data into place on the elevation
strip. That works, it just costs you a minute of dragging that the original
wouldn't. See [my data doesn't line up with the video](/help/troubleshooting/data-doesnt-line-up/).

## Cropping and colour

If you want the clip cropped or graded as well, do it _after_ Cycladat.
Export from Cycladat with the stickers on, then take that file into
whatever editor you like. The data's already burned in, so the timestamp
no longer matters.
