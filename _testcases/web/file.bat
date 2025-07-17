@echo off
setlocal enabledelayedexpansion

rem Set the prefix and extension
set prefix=web-xss-
set ext=.md

rem Set the content to be written to each file
set content=---
set content2=testcase: 
set content3=platforms: 
set content4=  - Web
set content5=  - Network
set content6=methodology: 
set content7=  - BlackBox
set content8=  - GreyBox
set content9=vulnerabilities:
set content10=  - Cross site scripting XSS
set content11=services:
set content12=  - WEB
set content13=references:
set content14=  - https://portswigger.net/web-security/cross-site-scripting
set content15=---

rem Loop from 2 to 17
for /L %%i in (1,1,10) do (
    set filename=%prefix%%%i%ext%
    echo Creating !filename!
    (
        echo !content!
        echo !content2!
        echo !content3!
        echo !content4!
        echo !content5!
        echo !content6!
        echo !content7!
        echo !content8!
        echo !content9!
        echo !content10!
        echo !content11!
        echo !content12!
        echo !content13!
        echo !content14!
        echo !content15!
    ) > !filename!
)

echo Done!
pause
