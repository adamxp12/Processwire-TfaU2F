# Processwire-TfaU2F
![Security Key](https://raw.githubusercontent.com/adamxp12/Processwire-TfaU2F/master/assets/bluekeyside.png)

A module to use FIDO U2F for 2 factor authentication. This is essentially most security keys be it a cheap Key-ID/Hypersecu or a fancy Yubikey. Its easy to setup just install the module then enable Tfa under your user profile. Enroll your key then next time you need to login you will be asked to use your key.

Note this is very much a proof of concept. it does work but I cant guarantee its reliability. its also sadly limited to 1x security key due to limitations in the Tfa class which only allows one Tfa method at a time. Would be awesome if it could handle multiple forms of Tfa and multiple of the same kind for redundancy.

The code is kind of messy. I had no PHP linter/code formatter to clean it up. But its functional currently. Using the Yubikey-U2F libary for PHP and the Google U2F-API which ironicly is needed for Chrome but Firefox dont need it.

The Yubikey Security Key Graphic was sourced from Pixabay https://pixabay.com/illustrations/google-secure-key-u2f-security-key-3598222/

## Demo
![Demo](https://bluntlabimg.azureedge.net/images/2019/08/28/2019-08-28_12-06-18.gif)
