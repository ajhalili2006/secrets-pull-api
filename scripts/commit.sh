#!/bin/bash

if [[ ! -d "$PWD/node_modules" ]]; then
    ecgo "warning: Dependencies aren't installed, installing with Yarn"
    yarn
fi

yarn commit:dco
