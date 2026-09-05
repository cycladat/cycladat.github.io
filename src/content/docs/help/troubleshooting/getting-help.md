---
title: Getting help
description: How to reach us, and how to send the debug report that lets us actually fix your problem.
sidebar:
  order: 6
editUrl: false
---

Email [support@cycladat.com](mailto:support@cycladat.com). In the app,
**settings** has a **support** button that opens a message to that address
with the subject filled in. A real person reads it.

## What to include

The thing that helps most is the app's own debug report, because most
problems come down to a specific video file on a specific phone and we
can't see either from here.

1. Shake the phone (anywhere in the app), or open **settings** and tap
   **debug menu**.
2. Tap **share debug data**. The app packages its logs and sends them to
   us with a report.
3. In your email, tell us roughly when you sent it, what you were doing,
   and what you expected to happen instead.

The logs include the timestamps the app read from your video file and
which ride it tried to match, which is exactly what we need for the two
most common problems, [data that doesn't line up](/help/troubleshooting/data-doesnt-line-up/)
and [no matching activity](/help/troubleshooting/no-matching-activity/).
They don't include the video itself.

A short screen recording of the problem is the next best thing, and often
the only way to explain a layout or gesture issue.

## Screen capture

The debug menu also has **screen capture**, which records your session in
the app until you tap the red stop pill, then asks whether to upload it or
discard it. Use it when the problem is something you can show but not
describe. Nothing is uploaded until you say so.

## Force logout

The third debug option, **force logout**, clears the stored Strava
connection without asking Strava to revoke it. If the app is stuck in a bad
state after a Strava login, this gets you back to the connect screen. You'll
sign in again as normal.

## Check first

Two things worth checking first, because they're the answer surprisingly
often:

- The camera's clock. Wrong time on the camera is behind most "the data is
  wrong" reports. See [my data doesn't line up](/help/troubleshooting/data-doesnt-line-up/).
- That the ride is actually on Strava, and finished processing there,
  before you pick the video.
