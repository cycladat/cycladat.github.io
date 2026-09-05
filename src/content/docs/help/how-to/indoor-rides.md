---
title: Indoor rides
description: Trainer and Zwift rides work fine. The one thing that trips people up is starting the recording before the ride.
sidebar:
  order: 11
editUrl: false
---

Indoor riding is fully supported. Turbo, smart trainer, Zwift, spin bike
with a power meter: if the ride is on Strava, or you've got the `.fit` file,
Cycladat will put power, heart rate, cadence and speed on your video the
same as it does outdoors.

## The one thing that goes wrong

You set the phone up on the tripod, hit record, then get on the bike, and
start the ride on your head unit or in Zwift a minute later. Perfectly
sensible. Cycladat won't match it.

The app looks for a ride that was already in progress when the video
started. A recording that began before the ride did falls outside every
ride you've got, so the app finds nothing and asks you to pick one. That's
not a bug, it's just the app being careful; outdoors, a video from before
the ride really isn't from the ride.

So match it manually. Pick the ride from the list, then swipe up in the
editor and slide the data along the strip until it lines up. The
walkthrough is on [my data doesn't line up with the video](/help/troubleshooting/data-doesnt-line-up/).

Or avoid it: start the ride first, then hit record. Then it matches on its
own.

## Lining it up indoors

Outdoors you line the data up by finding the climb in the elevation
profile. Indoors there may be no profile to speak of, so use the effort
instead. Pick a moment in the video you can see, the start of an interval
or the sprint at the end, and drag the data until the power sticker jumps
at the same moment. Pinch to zoom in on the strip for second-level
placement.

On a Zwift ride with virtual climbs the elevation profile is there and
works as normal.

## What the numbers mean indoors

Everything comes from what your trainer and sensors reported. Speed and
distance are the trainer's numbers, which is what Strava shows too. Altitude
and gradient are flat unless Zwift or your trainer app provided them. The
temperature sticker is whatever your head unit recorded, which indoors is
usually the room.

There's no GPS, so the route trace that fades in over the video while
you're aligning outdoors doesn't appear. Nothing's missing; there's just no
route.

Stickers that suit an indoor clip: power, heart rate, cadence, and the
whole-ride totals like ride time and average speed. Gradient and altitude
won't tell anyone much.
