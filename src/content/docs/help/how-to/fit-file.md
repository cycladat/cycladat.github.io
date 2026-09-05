---
title: Using a FIT file instead of Strava
description: cycladat works without a Strava account. Import the .fit file from your bike computer and everything else is the same.
sidebar:
  order: 5
editUrl: false
---

You don't need Strava. Every bike computer and most watches write a `.fit`
file for each ride, and cycladat can read that file directly. The stickers,
the editor, the export, all of it works the same. What changes is where the
data comes from, and a couple of things that follow from that.

## Importing a ride

On the first screen, under **Connect with Strava**, there's an **Upload .fit
file** button. It's greyed out until you tick the EULA box, same as the
Strava button. Tap it and the phone's file picker opens, filtered to `.fit`
files. Pick the one for the ride you filmed.

Where the file is depends on your computer. Garmin devices show up as a drive
when plugged in, with rides under `Garmin/Activities`. Wahoo's app can export
a `.fit` from any ride in its history. Most watches do it through their
phone app. If in doubt, Strava itself will let you download the original
file from any activity's menu, which is a decent workaround if the ride is
already on Strava and you just don't want to connect.

Any sport is accepted. If the file has a sport name in it, that becomes the
ride's name; otherwise it's "Ride on" followed by the date.

Importing the same file twice does nothing. No duplicate, no error. It just
opens the picker again.

## Then it's the same app

After the import you land on media selection as normal. Pick the video, the
app finds the imported ride covering that moment, and you're in the editor.
The elevation strip, alignment, templates and styling are all there.

## What's different

**Gradient is worked out from altitude.** FIT files don't carry a gradient
channel, so we derive it from how altitude changes over distance and smooth
it over a few seconds. It's a fair approximation and on a steady climb it
reads well, but it's noisier than the gradient Strava supplies, especially
on flat ground where a metre of altitude wobble becomes a percent or two of
"gradient". If the gradient sticker is jumpy, that's why. See
[the numbers look wrong](/help/troubleshooting/numbers-look-wrong/).

**No Strava logo on the export.** The "Powered by Strava" mark is a
condition of using Strava's data, and a FIT file isn't Strava's data. An
export from an imported ride carries only the small cycladat logo. If you've
been wondering how to get rid of the Strava mark, this is the only way:
[why is there a Strava logo on my video](/help/troubleshooting/strava-logo/).

**No "view on Strava" button** in the editor, for the same reason.

**Only imported rides can match.** With no Strava connection the app can
only look at what you've imported. A video that doesn't overlap any imported
ride shows "No imported ride overlaps this video. Upload the .fit file for
this ride to line up the data." That's the whole fix: import the right file.
If the camera's clock is wrong it'll say the same thing even with the right
file imported, which is where [my data doesn't line up](/help/troubleshooting/data-doesnt-line-up/)
comes in. Import the ride, then align it by hand.

## If the file won't import

Two messages, both meaning what they say:

- **"That file isn't a .fit file we can read."** It's corrupt, or it's not
  a FIT file with a `.fit` extension. Re-export it from the device or the
  vendor app.
- **"That .fit file has no ride data in it."** The file parsed but has no
  timestamped records, which happens with settings files and some course
  files. Pick the activity file, not the route.

## Connecting Strava later

You can connect Strava at any point afterwards. The Strava connection takes
over, your imported rides stay in the app, and a video will match whichever
ride covers it. Exports from the imported rides still skip the Strava mark.
