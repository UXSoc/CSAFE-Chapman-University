# CSAFE-Chapman-University


## Introduction

(https://ci.appveyor.com/project/pollend/smart) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

CSAFE is a tool for transporting chapman students safely. 

This project is fully open sources and licensed under Apache 2.0.

## Development

###Requirements

Boilerplate based on Docker container. To start using them, first, we have to make sure that Docker Engine and Docker compose tool are installed.

- Compose 1.6.0+
- Docker Engine 1.10.0+

### Build

```
$ docker-compose build
$ docker-compose run web bundle
$ docker-compose run web rails db:create
$ docker-compose run web rails db:migrate
```

### Getting Started

To start the server, run the following magic command:

```
$ docker-compose up
```

### Update Gemset

To avoid installing gems from scratch in each time when Gemfile will be updated, boilerplate has implemented persistent, cross-container dedicated volume for gems. Now in case when new entry to Gemfile is added, just run below command to update state:

```
$ docker-compose run web bundle
```

## Maintainers

The current maintainers of this repository are:

XXX


# License

```
/**
* Copyright 2018 UXSociety
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

```