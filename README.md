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
- [ ] Lag issue on mobile for image compare.
- [x] buttons adjusted in hero pages and booking action

## Deployment

With Netlify

> npm install netlify-cli -g
> netlify login
> netlify init
> npm run export
> netlify deploy --dir=__sapper__/export/ --prod

### Notes
