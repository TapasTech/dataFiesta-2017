#!/bin/sh

export QINIU_DTCJ_AK=cJYGOt5X8pruM5ffrXQHgsSojAMQEi2OdluoumqW
export QINIU_DTCJ_SK=04lEWwqqFkLpg8ptWSRFcvB14jysYTM9FFz4eEdL
export QINIU_ACCESS_KEY=cJYGOt5X8pruM5ffrXQHgsSojAMQEi2OdluoumqW
export QINIU_SECRET_KEY=04lEWwqqFkLpg8ptWSRFcvB14jysYTM9FFz4eEdL

node_modules/.bin/qiniu-go \
--source=src/assets/logos/$1 \
--prefix=cbndata/$1/ \
--bucket=marketing \
--extension=png \
--extension=jpg \
--extension=svg
