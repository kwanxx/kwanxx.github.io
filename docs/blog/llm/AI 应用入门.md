# AI 应用入门

2026-04-13

## **提示词工程**（Prompt Engineering）

AI 应用开发，意思是在开发者自己开发的应用中加入大型语言模型（LLMs）交互功能。实现交互方式主要是**通过提示词与大型语言模型（LLMs）进行交互**，只不过跟我们日常与DeepSeek工具聊天，手动输入提示词获取结果不同的是，我们要在应用中接入LLM，将优化好的提示词封装成函数或字符模板，供应用内部调用。

例如要开发一个英语单词词典AI应用，我想在接入的AI模型中，当用户输入的单词获得解释，LLM输出对话不是枯燥的单词释义，而是以一个幽默有趣的英语老师的身份，向用户介绍单词的用法，帮助用户记住单词。

因此，**提示词工程**（Prompt Engineering）的出现，是为了设计和优化提示词，让LLM 输出更可靠、高质量的成果。



我们使用Python写一个LLM应用，功能是：实现与LLM的连接，输入提示词，获得LLM反馈的结果。

1、注册大模型账号

这里使用kimi2.5大模型，因此可以到kimi官网注册账号，获得大模型的免费使用额度、接口和权限。

官网：https://platform.kimi.com/



2、配置Python环境

下载相关工具包：

```python
pip install openai
```



3、代码编写

```python
from openai import OpenAI

client = OpenAI(
    model="",
    api_key="123456", # 需要注册获取kimi模型的API_KEY
    base_url="https://api.moonshot.cn/v1",
)

#提示词
prompt_input = '''
    从英汉词典获取chase单词释义
'''

#输出结果
response = client.chat.completions.create(
    model = "kimi-k2.5", # 模型是kimi2.5
    messages = [
        {"role":"system","content":"你是一个智能助手"},
        {"role":"user","content":prompt_input}
    ]
    
)
print(response)
```



4、反馈结果

```bash
ChatCompletion(id='chatcmpl-6dc786f33fec744431c9c4e9c', choices=[Choice(finish_reason='stop', index=0, logprobs=None, message=ChatCompletionMessage(content='经核查，**"chease" 并非标准英语词汇**，可能是以下单词的拼写错误：\n\n## 1. 若为 **cheese**（最可能）：\n**音标**：/tʃiːz/  \n**词性**：名词  \n**释义**：\n- **奶酪；干酪；乳酪**（最常见）\n- 【俚语】重要人物；高品质的东西\n- 【摄影】大特写镜头（big cheese）\n- 【俚语】装腔作势；做作（say cheese 用于拍照时让对方笑）\n\n**常见搭配**：\n- cottage cheese 农家奶酪\n- cheeseburger 芝士汉堡\n- cheesy 廉价的；做作的；奶酪味的\n\n## 2. 若为 **chase**：\n**音标**：/tʃeɪs/  \n**词性**：动词/名词  \n**释义**：\n- **追逐；追赶；追捕**\n- **追求**（目标、梦想等）\n- 驱逐；赶走\n- 雕刻；镂刻（金属、皮革等）\n\n**建议**：如果您指的是特定领域（如古语、方言或专业术语）中的"chease"，请提供更多上下文以便准确查询。', refusal=None, role='assistant', annotations=None, audio=None, function_call=None, tool_calls=None, reasoning_content='用户要求从英汉词典获取"chease"单词的释义。\n\n首先，我需要确认"chease"是否是一个正确的英语单词。\n\n让我检查一下：\n- "cheese" 是奶酪的意思，拼写是 c-h-e-e-s-e\n- "chease" 看起来像是 "cheese" 的拼写错误，或者可能是古英语、方言、或某种特定领域的术语\n\n让我思考可能的含义：\n1. 可能是 "cheese" 的拼写错误\n2. 可能是 "chase"（追赶）的拼写错误\n3. 在古英语或方言中，"chease" 可能是 "choose" 的变体？不太可能。\n4. 可能是某种专业术语？\n\n实际上，经过检索记忆，"chease" 并不是一个标准的现代英语单词。它很可能是 "cheese"（奶酪）的拼写错误。\n\n但是，为了全面起见，我应该：\n1. 指出 "chease" 可能是拼写错误\n2. 提供可能的正确单词的释义（cheese 或 chase）\n3. 如果确实存在 "chease" 这个单词（即使是古语或方言），提供其释义\n\n经过仔细思考，"chease" 确实不是标准英语词汇。最可能的情况是用户想查询 "cheese"（奶酪）或 "chase"（追逐）。\n\n我应该：\n1. 礼貌地指出可能的拼写错误\n2. 提供 "cheese" 的释义（最有可能的意图）\n3. 提供 "chase" 的释义（另一个可能的意图）\n\n这样可以帮助用户找到他们真正想要的信息。\n\n让我组织回答：\n- 首先说明 "chease" 并非标准英语词汇，可能是拼写错误\n- 提供 "cheese"（奶酪）的详细释义\n- 提供 "chase"（追逐）的简要释义作为参考\n- 建议用户确认拼写\n\n这样既专业又有帮助。'))], created=1776056175, model='kimi-k2.5', object='chat.completion', service_tier=None, system_fingerprint=None, usage=CompletionUsage(completion_tokens=651, prompt_tokens=27, total_tokens=678, completion_tokens_details=None, prompt_tokens_details=None))
```

反馈结果中，message.content是模型反馈结果，因此可以在**代码中简化输出结果**：

```python
print(response.choices[0].message.content)
```

prompt_tokens是提示词的token数量、total_tokens是使用的总token数量。



