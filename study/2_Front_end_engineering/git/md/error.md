# error

## 1. HTTP/2 stream 1 was not closed cleanly before end of the underlying stream

> git pull --tags origin master
> fatal: unable to access 'https://github.com/ximingx/code.git/': HTTP/> 2 stream 1 was not closed cleanly before end of the underlying stream

```bash
$ git config --global http.version HTTP/1.1
```

## 2. LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60

> git push origin master:master
> fatal: unable to access 'https://github.com/ximingx/code.git/': LibreSSL SSL_read: error:02FFF03C:system library:func(4095):Operation timed out, errno 60

```bash
$ sudo killall -HUP mDNSResponder
```

## 3.  Failed to connect to github.com port 443 after 75007 ms: Operation timed out



## 4. Error in the HTTP2 framing layer

> git push origin main:main
> fatal: unable to access 'https://github.com/ximingx/school.git/': Error in the HTTP2 framing layer

```bash
$ git config --global --unset http.proxy 
$ git config --global --unset https.proxy
```
