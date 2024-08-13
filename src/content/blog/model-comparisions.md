---
author: FjellOverflow
pubDatetime: 2024-08-13T11:11:53Z
title: Model Comparisions
slug: learn-about-all-the-models
featured: true
draft: false
tags:
  - llama
  - mixtral
  - comaprision
  - meta
  - mistral
description: Comment function on a static blog hosted on GitHub Pages with Giscus.
---

## Introduction
## Table of contents

## Comparisions
| Model                             | Params (in billion) | Params per Token (billion) | Num Layers | Size (in GB) | Ctx Len | Att Type                                             | Att Head Dim | Model Architecture             | Hidden Dim | Q Heads | K Heads | V Heads | Supports Tool Calling | Min VRAM (in GB) | MMLU 5-shot Score | Cache Type       |
| --------------------------------- | ------------------- | -------------------------- | ---------- | ------------ | ------- | ---------------------------------------------------- | ------------- | -------------------------------- | ----------- | -------- | -------- | -------- | ---------------------- | ----------------- | ------------------- | ---------------- |
| Meta-Llama-3.1-8B-Instruct         | 8.03                | 8.03                       | 32         | 16.07        | 128K    | Group Query Attention                                 | 128           | LlamaForCausalLM                | 4096        | 64       | 8        | 8        | Y                      | 16                | 66.70%              | KVCache           |
| Mistral-7B-instruct-v0.1           | 7.24                | 7.24                       | 32         | 14.48        | 8K      | Sliding Window Attention, Grouped Query Attention     | 128           | MistralForCausalLM              | 4096        | 32       | 8        | 8        | N                      | 16                | 62.50%              | RollingBufferCache|
| Mixtral 8x7B-v0.1                 | 46.7                | 12.9                       | 32         | 96.8         | 32K     | Grouped Query Attention                               | 128           | Mixture of Experts (8 experts) | 4096        | 32       | 8        | 8        | N                      | 100               | 70.60%              | KVCache           |
| Mixtral 8x22B                     | 140.6               | 39.1                       | 56         | 290          | 64K     | Grouped Query Attention                               | 128           | Mixture of Experts (8 experts) | 6144        | 48       | 8        | 8        | Y                      | 300               | 77.75%              | KVCache           |
| Mistral Large 2                   | 123                 | 123                        | 88         | 245          | 128K    | Grouped Query Attention                               | 128           | MistralForCausalLM              | 4096        | 32       | 8        | 8        | Y                      | 256               | 84%                 | KVCache           |


<!-- ```html
<script
  src="https://giscus.app/client.js"
  data-repo="[ENTER REPO HERE]"
  data-repo-id="[ENTER REPO ID HERE]"
  data-category="[ENTER CATEGORY NAME HERE]"
  data-category-id="[ENTER CATEGORY ID HERE]"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="en"
  crossorigin="anonymous"
  async
></script>
``` -->
