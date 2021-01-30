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
- [ ] use dontenv with vercel
- [x] Error page


## Deployment

With Vercel (formely Now)
https://vercel.com/docs/cli#getting-started

> vercel

### Notes

rollup.config.js
<!-- plugins: [
  replace({
    'process.browser': false,
    'process.env.NODE_ENV': JSON.stringify(mode),
    'process.env.AUTHOR': JSON.stringify(process.env.AUTHOR),
    'process.env.COMPANY': JSON.stringify(process.env.COMPANY),
    'process.env.PHONE': JSON.stringify(process.env.PHONE),
    'process.env.CITIES': JSON.stringify(process.env.CITIES),
    'process.env.EMAIL': JSON.stringify(process.env.EMAIL),
    'process.env.INSTAGURL': JSON.stringify(process.env.INSTAGURL),
    'process.env.GOOGLEURL': JSON.stringify(process.env.GOOGLEURL),
    'process.env.PRICE': JSON.stringify(process.env.PRICE),
    'process.env.EXCHANGERATE': JSON.stringify(process.env.EXCHANGERATE) -->

