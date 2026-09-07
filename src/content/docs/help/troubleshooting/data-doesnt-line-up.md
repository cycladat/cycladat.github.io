---
title: My data doesn't line up with the video
description: The video came through WhatsApp, the camera's clock was off, or the clip was trimmed on the phone. Why the data sits seconds (or hours) away from the footage, and how to slide it into place.
sidebar:
  order: 1
editUrl: false
---

This is the question we get more than any other. You've picked a clip, the
stickers are ticking away, and the speed on screen is clearly from the descent
you did ten seconds later. Or you're stopped at a junction in the video and the
power sticker says you're doing 300 watts. Or, most often of all, a mate
filmed you and sent the clip over WhatsApp, and the data is from a completely
different part of the ride.

Here's what's going on, and then the fix. The fix is quick. The explanation is
longer, because we'd rather you understood it than took our word for it. If
the clip came to you through a messaging app, skip to
[sent through a messaging app](#sent-through-a-messaging-app): that one has
its own cause and its own cure.

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

**Messaging apps throw the timestamp away.** This is the one we see most.
A clip that arrived on WhatsApp, Instagram, Messenger, Telegram or a group
chat is a recompressed copy, dated when it was received, with the camera's
own record of when it was filmed stripped out. Someone else filmed you and
sent it over, or you messaged it from one phone to another: same result.
The section [below](#sent-through-a-messaging-app) has the fix for each app.

**Edits and copies move timestamps.** Trim a clip in your phone's gallery,
export it from an editor, or save it from any app that makes a new file, and
the file picks up a new "created" time, and the app has nothing left to go
on. This one is avoidable: import the original and
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

## Sent through a messaging app

When you share a video in a chat, the app doesn't send the file that was
filmed. It makes a smaller copy that loads quickly inline, and throws away
what the camera wrote into the original: the make and model, and the moment
the recording started. The copy that lands on the other phone is dated when
it was received. Cycladat reads every date it can find in the file and takes
the earliest, because copies only ever move dates later, and on a chat copy
the earliest date left is the download. So the app looks for a ride at nine
on Tuesday evening when you were riding at eight that morning, and finds
nothing, or finds a different ride. The copy is also smaller and softer than
what was filmed, and that loss is permanent. The same goes for photos in
[photo mode](/help/how-to/photos/).

Which apps do this:

- **Always:** WhatsApp, Instagram messages, Facebook Messenger, Snapchat,
  TikTok messages, and Telegram when you send a video the normal way. Signal
  too, at its default quality.
- **Usually not, but check:** iMessage. It keeps the original if
  **Low Quality Image Mode** is off (Settings, Messages; renamed
  **Send Low Quality Photo Previews** in iOS 26), but people still report
  4K clips arriving as 720p depending on carrier and settings.
- **Never:** AirDrop, a shared link from iCloud Drive, Google Drive or
  Dropbox, a Google Photos album at original quality, and email
  attachments within the size limit. These move the file as it is.

You can tell from the file name. A WhatsApp video is called something like
`VID-20260907-WA0012.mp4`; a clip straight off an iPhone is `IMG_1234.MOV`,
off a GoPro `GX010123.MP4`. In Photos, swipe up on the video: an original
shows the camera it was filmed on and the time, a chat copy shows no camera
and the time you received it.

**Get the original across instead.** Every app that compresses has a way
to send the file untouched, one extra tap on the sender's side:

- **WhatsApp:** attach it as a **Document**, not from the gallery. Tap the
  attachment icon, choose **Document**, then pick the video (on iPhone you
  get a second option to choose from your photos). Documents go up to 2 GB
  and arrive exactly as sent
  ([GSMArena on the iOS option](https://m.gsmarena.com/whatsapp_for_ios_adds_option_to_send_uncompressed_images_and_videos-news-60812.php)).
  Download it, save it to the gallery, import that.
- **Telegram:** attach it as a **File**, or pick the video and choose
  **Send Without Compression** from the three-dot menu, which is Telegram's
  own advice for "videos in their original quality"
  ([Telegram on X](https://x.com/telegram/status/1216741565311352834)).
- **iMessage:** turn off Low Quality Image Mode on the sending phone, or
  skip the question and AirDrop it.
- **Any phone to any phone:** put it in iCloud Drive, Google Drive or
  Dropbox and share the link. Slower, and it always works.

**If the chat copy is all you have,** it still works. Pick the ride by hand
when the app asks, then align it on the elevation strip as above. The
numbers will be right once it's placed. The lost quality stays lost, so if
the original still exists on the phone that filmed it, it's worth the extra
message.

## Before the next ride

Film on your phone if you can, and import the original file. If someone
else is filming you, ask for it as a document, by AirDrop, or as a shared
link, never as a normal chat message. It's the one
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
