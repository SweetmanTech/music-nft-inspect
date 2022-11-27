# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.10] - 2022-11-27

### Indexer: Decent Offchain

- index Decent music nfts with offchain metadata (IPFS).

## [0.0.9] - 2022-11-27

### bug: Zora Indexer

- wrap in try / catch to prevent failures.

## [0.0.8] - 2022-11-27

### Zora Indexer

- initialize Zora `ABI` & `Indexer`.

## [0.0.7] - 2022-11-27

### Evaluators

- initialize Manifold `Evaluator` & `Schema`.
- initialize Sound `Evaluator` & `Schema`.
- initialize Catalog `Evaluator` & `Schema`.

## [0.0.6] - 2022-11-26

### Zora Evaluator

- initialize Zora `Evaluator` & `Schema`.

## [0.0.5] - 2022-11-26

### Decent Indexer - all chains

- chainId is optional. will check all chains until metadata is found if no `chainId` provided.

## [0.0.4] - 2022-11-26

### Decent Indexer

- first indexer implementation.
- supports onchain.
- supports base64.
- supports metadata renderer.

## [0.0.3] - 2022-11-26

### evaluate function

- composite of all evaluators.
- provides an array of scores.
- when a new evaluator is added, it should be called in the `evaluate` function.

## [0.0.2] - 2022-11-25

### functional mvp

- `src/evaluators` - music platforms put their logic for `evaluate` to `compareJson` & `calculateScore`.
- `src/schemas/` - music platforms put their schema examples there.
- `lib/compareJson` - shared util to find the difference between 2 JSON files.
  - TODO: handle nested objects.

## [0.0.1] - 2022-11-24

### Update README

Set initial README values

## [0.0.0] - 2022-11-24

### Initialized Package

Initialized package
