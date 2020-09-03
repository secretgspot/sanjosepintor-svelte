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
- [ ] Rework Hero pages.  Header outside of content and content properly spaced. Font appears too large
- [ ] booking form success btn color, radio border color
- [ ] language selector cursor
- [x] Header links size increase on larger screens
- [x] updated and fixed export issue. (sapper still won't work with 0.28.0)

## Deployment

With Netlify

> npm install netlify-cli -g
> netlify login
> netlify init
> npm run export
> netlify deploy --dir=__sapper__/export/ --prod

### Notes
