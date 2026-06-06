# Verify v22 rolefix

This build must show:

- `v22 rolefix` in the top microline or footer.
- Role icons loaded from `/assets/roles-original-v22/*.png?v=22`.
- Empty slots use the uploaded original role PNGs with no wrapper circle/border.
- If you still see the old icons, the deployed site is not serving this build or browser cache is stale.

Quick browser check:
Open DevTools > Network > filter `roles-original-v22`.
You should see:
- top.png?v=22
- jungle.png?v=22
- mid.png?v=22
- bot.png?v=22
- support.png?v=22
