---
title: The numbers look wrong
description: Why speed, altitude and gradient in cycladat can differ from what Strava shows, and why that isn't something we can fix.
sidebar:
  order: 2
editUrl: false
---

You've lined the data up with the footage and it's tracking properly, but
the altitude sticker says 412 m at the top of a climb you know is 450 m. Or
the gradient flickers to 14% on a road that's never been steeper than 8%.
Strava's page for the same ride shows something more sensible.

Short version: we show you what your device recorded. Strava shows you what
your device recorded after Strava has cleaned it up. The gap between the two
is your GPS, not the app.

## What we actually receive

When cycladat connects to your Strava account, we ask for the ride's
_streams_: the per-second speed, altitude, gradient, heart rate, power,
cadence, temperature and position that make up the recording. They're the
per-second series from the file your device uploaded, handed over as-is
([Strava API reference](https://developers.strava.com/docs/reference/#api-Streams-getActivityStreams)).
The same applies if you import a FIT file directly: you're handing us the
recording itself.

We don't own any servers and we don't process your rides anywhere but on your
phone. We smooth speed, power and cadence over three seconds and heart rate
and gradient over five so the stickers don't jitter, and that's the extent of
it. There's no map lookup, no elevation database, no correction. We can't do
what Strava does, and we wouldn't want to pretend to.

## What your GPS actually recorded

A bike computer or watch works out where you are from satellites, and that
only works well when it can see them. Wahoo's support page for the ELEMNT
puts it plainly: "GPS requires a line of sight to the sky in multiple
directions to receive straight-line signals from GPS satellites and can be
hampered or obstructed by: dense tree or cloud cover (especially in or near
storms), land forms like mountains and cliffs, particularly when they are
close to you, and electrical interference from solar flares or electronics
like bike lights or cameras"
([Wahoo Fitness Support](https://support.wahoofitness.com/hc/en-us/articles/20547628744210-Data-Accuracy-ELEMNT)).
Garmin's Edge manuals say the same thing in fewer words: "The device may need
a clear view of the sky to acquire satellite signals"
([Edge 1040 Owner's Manual](https://www8.garmin.com/manuals/webhelp/GUID-0083D0A0-EA6E-41F0-8207-3F1498875E61/EN-US/GUID-475E6349-9762-452A-B5B0-43AD12F8F68A.html)).

So on a tree-lined lane, in a gorge, next to tall buildings, or under a
storm, your position wanders. Speed is worked out from position, so speed
wanders with it. Gradient is worked out from altitude change over distance,
so a small wobble in either becomes a big wobble in gradient. That 14% spike
is two slightly wrong samples a second apart.

Altitude is its own mess. Most bike computers use a barometric altimeter,
which measures air pressure and turns it into height. Air pressure also
changes with the weather. Garmin's Edge manuals note the device "uses
automatic calibration at your GPS starting point by default" and that "you
can manually calibrate the barometric altimeter if you know the correct
elevation" ([Edge 840 Owner's Manual](https://www8.garmin.com/manuals/webhelp/GUID-16B12CFE-F96E-4DE9-9F5F-8C4A5936D3B9/EN-US/GUID-4E69C50B-1F18-4D7E-A87B-A11FB9007D5D.html)),
which is a polite way of saying the number it starts from is a guess it
tries to improve. Wahoo lists the things that throw it: "large changes in
temperature or humidity like stepping outdoors in the summer from an
air-conditioned environment", and it recommends waiting for a strong GPS
signal before you start the ride
([Wahoo Fitness Support](https://support.wahoofitness.com/hc/en-us/articles/115000441324-Why-are-there-Elevation-differences-in-my-ride-data)).
A low pressure system rolling in during a four-hour ride will move the
altitude on its own, with you sat still.

None of this is a fault. It's what a small sensor on a handlebar can do.

## What Strava does with it

Strava has hundreds of millions of rides, and it uses them. Its elevation
basemap is built "by collecting the barometric altimeter measurements from
any activity uploaded to Strava in the past"
([Strava's Elevation Basemap](https://support.strava.com/hc/en-us/articles/115000024864-Strava-s-Elevation-Basemap)).
If your device has no barometer, or Strava doesn't recognise it, the activity
page shows a "corrected elevation" that "involves cross-referencing the GPS
data in the file to our database of barometric data". Even with a barometer,
Strava smooths: "we have a 'threshold' that requires climbing to occur
consistently for more than 10 meters for activities without strong
barometric data, or 2 meters for activities with barometric data, before it
is added to the total elevation gain"
([Elevation on Strava FAQs](https://support.strava.com/hc/en-us/articles/115001294564-Elevation-on-Strava-FAQs)).

That's why Strava's total climbing and the altitude on your sticker don't
agree. Strava is comparing your ride to everyone else's ride up the same
road. We only have yours. Strava says as much itself: "elevation data from
all sources (barometric altimeters, GPS signals, and databases) is subject to
error and the elevation gain for an activity is an estimate"
([Strava Support: Elevation](https://support.strava.com/hc/en-us/articles/216919447-Elevation)).
Wahoo makes the same point from the other side: "Not all services calculate
(and/or correct) GPS and elevation data equally, even with the same ride
data."

## What you can do about it

Most of it happens before you press start.

- **Wait for the fix.** Give the computer 30 to 60 seconds outdoors with a
  clear view of the sky before rolling. Both Garmin and Wahoo say this, and
  it's the single biggest improvement you can make.
- **Use a speed sensor.** A wheel sensor overrides GPS speed and gives you a
  clean, honest number under trees and in town. Wahoo's support page says
  pairing one "will generally help to correct GPS inaccuracies and improve
  grade data".
- **Calibrate the altimeter** if your computer lets you and you know the
  height where you set off.
- **Keep the barometer ports clean.** Wahoo and Garmin both have support
  threads about clogged or wet ports producing nonsense altitude.
- **Pick the stickers that suit the ride.** Gradient is the noisiest metric
  there is. On a rolling road under trees, speed and heart rate will look a
  lot more like what you remember.

What we can't do is make a bad recording good. If the sticker says 412 m,
that's what your computer wrote down at that second. We'd be lying to you if
we showed anything else.

If the numbers are _right_ but sitting on the wrong part of the video, that's
the other page: [my data doesn't line up with the video](/help/troubleshooting/data-doesnt-line-up/).
