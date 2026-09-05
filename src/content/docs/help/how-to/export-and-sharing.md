---
title: Exporting and sharing
description: What happens when you tap create, where the file goes, and the one way to lose it.
sidebar:
  order: 7
editUrl: false
---

Tap **create** and the app renders the trimmed clip with the stickers
burned in. The bidon fills up as it goes. Then you get the share page.

## What's in the file

The render is a real video file, `cycladat_` plus a timestamp, `.mp4`, at
the source video's resolution. Stickers are rendered per second at the
output size, so what you placed on the preview lands at the same relative
size and position in 4K as in 1080p.

Two logos are burned in and neither is optional: the Cycladat mark
bottom-right on every export, and "Powered by Strava" bottom-left on any
ride that came from Strava. That second one is a licence condition rather
than a branding choice; [there's a page on it](/help/troubleshooting/strava-logo/).

Audio is kept. Trimming decides the range; nothing outside the trim is in
the file.

## While it renders

Rendering a 90-second 4K clip on a phone takes a while and the app has to
stay in front. Don't switch away. **Cancel** asks you to confirm, then stops
the render and puts you back in the editor with everything still placed.

If the render fails you'll get an error and land back in the editor, again
with the stickers intact. Try again; if it fails twice on the same clip,
[send us a debug report](/help/troubleshooting/getting-help/).

## The share page

The finished clip loops in the preview; tap it to pause.

- **Share** opens the phone's share sheet with the file.
- **Instagram** sends a video to Reels and a photo to the Feed.
- **TikTok** shares straight into TikTok on Android. On iOS it opens the
  system share sheet instead, from which TikTok is one tap away.
- **Save** writes the file into an album called **Cycladat** in your photos
  and confirms.

Underneath: **edit** goes back to the editor with the stickers where you
left them, for another pass at the same ride. **new** clears everything and
takes you back to media selection.

## Save before you leave

The export lives in a temporary folder until you save or share it. Leaving
the share page, by tapping edit or new, deletes it. So does closing the app.
If you want the file, save it first. Re-exporting is only a tap away, but it
is a re-render.

## Limits

Clips are 3 to 90 seconds. A video shorter than three seconds won't open in
the editor at all, and a longer one has to be trimmed down; see
[trimming the clip](/help/how-to/trimming/). There's no cap on how many
videos you export.
