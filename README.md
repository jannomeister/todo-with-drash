<h1 align="center"> 
	TODO Rest API using DRASH
</h1>

[![powered-by-drash](https://img.shields.io/badge/powered%20by-drash-brightgreen.svg?logo=image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAqFBMVEUAAAAcjjk5qjn/AAAzmWb/AADbtgelCgrhBQoPndK7VwqZBgkrhjVtrnzgnQcQsO0XibMokTXxAwXxAwUWjLcWjLmGBATLBwb/AACKBAQQruj00QHSBweLwm6Mwm4ln3gspzpSUR//AAC6KAgrpj14GQyqBwelBwoQruvzzwInnTQjm3/VWgcQn9XavAYQntOJBAThBwkqhzUyskBKWSSnCArZugbhBwnEMechAAAAMnRSTlMACQkJDxEjMzNET1pldZKbm6SnqKurq6ursLG7v8HBwsPExcjJzNDS1NTW4OPt7e/w8+r9Fr8AAABkSURBVHjaVccDFgMxAADRGLWV2knt+5+sy2ie5gMXBmF0FGkdUXRi/rp250rpxmNq2Zzp6/c8dDzWWWXjOLlIwD97y94t5WFs2epLUL0PHE9bY1Y7y8XrtWw/37WSBCEE09JNAFkaBzkb5U0ZAAAAAElFTkSuQmCC)](https://drash.land/drash)

This is a basic todo server that uses [drash microframework](https://drash.land/drash/v1.x/) as a backbone for this application server, because I really want to familiarize deno ecosystem.

## Getting Started and Installation

This guide will walk you through on how to run this locally

#### Setup

- download and install **Git** ([check it here](https://git-scm.com/downloads)). To verify that you successfully installed git, you can run `git --version`
- download and install **Deno** ([check it here](https://deno.land/#installation)). To verify that you successfully installed deno, you can run `deno --version`

#### Development

- you need to use `denon` (nodemon for deno) to enable hot reloading. To install denon just follow their own [installation guide](https://deno.land/x/denon@2.4.7#install)
- run `denon run --allow-env --allow-read --allow-write --allow-net app.ts`

#### Testing

- you can just the integration testing sample inside `tests/integration` folder
- you can run `deno test --allow-env --allow-net` to run the test cases

## LICENSE

MIT
