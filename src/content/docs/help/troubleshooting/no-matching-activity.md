---
title: We couldn't find a matching activity
description: Usually the video came through WhatsApp or the camera's clock was off. What the app looked for, why it didn't find it, and how to pick the ride yourself.
sidebar:
  order: 3
editUrl: false
---

You picked a video and instead of the editor you got "We couldn't find a
matching activity for this video," and then a list of rides. Or, if you're
using FIT files, a message asking you to upload one. Before reading on: if
the clip arrived through WhatsApp or another messaging app, that's the
reason, and [sent through a messaging app](/help/troubleshooting/data-doesnt-line-up/#sent-through-a-messaging-app)
has the fix.

## What the app looked for

The app reads the time the video was filmed from the file, then looks for a
ride whose start and finish bracket that moment. First in the rides it has
already cached on the phone, then, if you're connected to Strava, with a
targeted request for any of your activities that started within a day
either side. There's no age limit on that request. If it comes back empty,
there is genuinely no ride of yours covering the moment the video claims
it was filmed.

That leaves two possibilities, and the second is far more common.

**The ride isn't on Strava yet.** The computer hasn't synced, or the
upload is still processing. Check the activity exists on strava.com, then
try the video again.

**The video's timestamp is wrong.** Most often because the clip came to
you through WhatsApp or another messaging app: the copy a chat app delivers
is dated when it was received, not when it was filmed, so the app looks for
a ride at the wrong time of day and finds nothing (see
[sent through a messaging app](/help/troubleshooting/data-doesnt-line-up/#sent-through-a-messaging-app)).
Otherwise the camera's clock was off, or you trimmed the clip in your
phone's gallery before importing it (the edited copy is dated when you
edited it, not when you filmed it; see
[trim in Cycladat, not on your phone](/help/how-to/trim-in-cycladat/)), or
it's an Insta360 export. The ride exists, but the video claims to be from a
time it doesn't cover.
[My data doesn't line up](/help/troubleshooting/data-doesnt-line-up/)
goes through every way that happens.

## Pick the ride yourself

When you're connected to Strava, the app doesn't just give up. It opens a
list of your rides, most recent first, each with its name, date, distance
and time. Tap the one you filmed and you're into the editor with that ride's
data.

The data won't be lined up with the footage, because the app is still going
on the video's timestamp and that's the thing that was wrong. So the next
step is always the same: swipe up, and slide the window on the elevation
strip to where you were. Zoom in with a pinch to place it precisely.

### What the list contains

The list is the rides cached on your phone: the last 180 days, refreshed
when you open the app while connected to Strava. It's not a live search.
Two consequences:

- A ride from more than 180 days ago won't be in the list, even though it
  could still have matched automatically if the video's timestamp had been
  right. If you've got old footage with a bad clock, the honest answer is
  that you'll need to fix the file's date first (a tool like exiftool can
  shift it) and try again.
- A ride you finished ten minutes ago is on Strava but may not be in the
  list yet. Close the app fully and reopen it, and it'll be there.

## With FIT files

There's no list to pick from, because the app only knows the rides you've
imported. "No imported ride overlaps this video" means exactly that: import
the `.fit` for the ride you filmed and try again. If you already have and
you still see it, the video's timestamp is wrong, and there's no way for the
app to know which imported ride you meant. Check the camera's clock, or fix
the file's date, and import again. See
[using a FIT file](/help/how-to/fit-file/).

## Before the next ride

Set the camera's clock before you ride, and let the computer sync to Strava
before you open cycladat. That's it. The match works to the second when the
inputs are right; nearly every failure is a clock.
