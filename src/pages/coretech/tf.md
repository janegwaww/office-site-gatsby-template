---
templateKey: coretech-page
path: /coretech/tf
title: 文本流畅度（Transformer 语言模型）
subtitle: Text fluency (transformer language model)
image: /img/coretech-bg.png
version:
    - locale: zh
      intro:
          title: 文本流畅度（Transformer 语言模型）
          context: 可用于语音助手、智能硬件等场景或快速搭建问答场景应用。
          image: /img/coretech/tf-bn.png
      description: >
          依托亿级别参数深度学习语言模型，判断输入文本是否符合客观语言表达习惯，输出该文本的流畅程度及合理程度（介于 0 到 1 之间的数值，数值越高，越符合客观语言表达习惯）
      features:
          - title: 性能强劲
            context: 基于最前沿的预训练语言模型思路（Transformer/BERT）及海量规模训练数据，具备较高的准确度，泛化能力强。
            image: /img/coretech/features/tf1.png
          - title: 功能实用
            context: 支持多并发环境，毫秒级响应时间，完美契合应用场景。
            image: /img/coretech/features/tf2.png
      scena:
          - title: 文本纠错
            image: image
            description: 对输入文本进行评分，判断各句是否符合客观语言表达习惯，甄别低分值语句 （包含语病的句子）。
            advance:
                - 对于大篇幅的文档写作，精准高效的文本纠错可以极大地节省人工审阅的成本。
                - 可以无缝接入黑顿的优质知识库，对于问题句，给出优质的代替方案。
          - title: 智能问答
            image: image
            description: 对问答过程中由机器生成的候选句子进行打分排序，优先输出高评分句子，辅助问答系统进行决策，提升用户体验。
            advance:
                - 结合命名实体能根据问题中的分词和实体识别结果，理解发问意图，可快速搭建问答场景应用。
                - 基于超大规模的网页数据进行训练，使得模型具备较高的准确度。
          - title: 机器翻译
            image: image
            description: 对翻译出来的候选语句进行打分排序，辅助翻译系统进行结果展示。
            advance:
                - 对机器翻译进行准确评分，帮助用户鉴别翻译产品的性能，同时也可以帮助开发者调试。
                - 对于篇幅较大的内容，采用先机器翻译，之后根据评分，对分数较低的句子进行人工翻译，可以大大提升翻译任务的效率。
    - locale: en
      intro:
          title: todo
          context: todo
          image: /img/coretech/tf-bn.png
      description: todo
      features:
          - title: todo
            context: todo
            image: /img/coretech/features/tf1.png
      scena:
          - title: todo
            image: todo
            description: todo
            advance:
                - todo
---
