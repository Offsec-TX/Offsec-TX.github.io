@echo off
setlocal enabledelayedexpansion

rem Set the prefix and extension
set prefix=network-redis-
set ext=.md

rem Set the content to be written to each file
set content=---
set content2=testcase: 
set content3=platforms: 
set content4=  - Network
set content5=methodology: 
set content6=  - BlackBox
set content7=  - GreyBox
set content8=services:
set content9=  - Redis
set content10=references:
set content11=  - https://book.hacktricks.wiki/en/network-services-pentesting/6379-pentesting-redis.html
set content12=---

rem Read testcases from file
set testcasefile=testcases.txt

set /a count=1
for /F "delims=" %%t in (%testcasefile%) do (
    set "testcase=%%t"
    rem Remove trailing period if present
    if "!testcase:~-1!"=="." set "testcase=!testcase:~0,-1!"
    set filename=%prefix%!count!%ext%
    echo Creating !filename!
    (
        echo !content!
        echo testcase: !testcase!
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
    ) > !filename!
    set /a count+=1
)

echo Done!
rem pause