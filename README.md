# SanJosePintor - Svelte

```txt
                                            ▒▓▓▓▒
                                          ▓▓▓▓▓▓▓▓▓
                             ▓▓▓▓▓▓     ░▓▓▓▓▓▓▓▓▓▓
                           ▓▓▓▓▓▓▓▓▓▓ ▓▓▓▓▓▓▓▓▓▓▓▓▓
                         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                     ▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▓▓▓▓▓
                   ▓▓▓▓▓░▒▓▓▓▓▓▓▓▓▓▓▓▒▓▓▓▓▓▓▓▓▒
                 ▓▓▓▓▓░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
               ▓▓▓▓▓░░░▓▓▓▓▓░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
             ▓▓▓▓▓░░░░▓▓▓░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒
              ▓▓▓▓░░░▓▓▓░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▒
                ▓▓▓▓▓▓▒░░░░░░░▓▓▓▓▒░▓▓▓▓▓▓▓▓
                  ▓▓▓▓░░░░░░░▓▓▓░░░▓▓▓▓▓▓▓
                   ▓▓▓░░░░░░▓▓▒░░▓▓▓▓▓
                   ▓▓▓░░░░░▓▓▓░░▓▓▓▓
                   ▓▓▓▓▓▓▒░▓▓░░░▓▓▓▓
                     ▓▓▓▓▓░▓▓░░░▓▓▓▓
                      ▓▓▓░░▓▓▓░░▓▓▓▓
                      ▓▓▓░░▓▓▓▓▓▓▓
                     ▓▓▓▓░░▓▓▓▓
                     ░▓▓▓░░▓▓▓▓
                      ▓▓▓▓▓▓▓▓▓
                          ▓▓
```

Site rebuilt using svelte.

## TODO

- [ ] Booking form, simplify js, check css
- [ ] Translate Privacy and Terms pages
- [ ] Figure out what are _layout warnings for waitLocale and segment props being unknown
- [ ] Cleanup commented out code in places like booknow and other locations, remove unused components
- [ ] Lag issue on mobile for image compare.
- [x] Rework Hero pages.
- [x] updated and fixed export issue. (sapper still won't work with 0.28.0)

## Deployment

With Netlify

> npm install netlify-cli -g
> netlify login
> netlify init
> npm run export
> netlify deploy --dir=__sapper__/export/ --prod

### Notes
