from transformers import pipeline, MarianMTModel, MarianTokenizer
import torch

# 初期化
model_name = 'Helsinki-NLP/opus-mt-ja-en'
tokenizer = MarianTokenizer.from_pretrained(model_name)
model = MarianMTModel.from_pretrained(model_name)

# 翻訳
def translate_ja_to_en(text):
    translated = model.generate(**tokenizer(text, return_tensors="pt", padding=True))
    return tokenizer.decode(translated[0], skip_special_tokens=True)

# 感情分析用のパイプライン
sentiment_pipeline = pipeline('sentiment-analysis')

# 日本語テキスト(ここに音声ファイルのテキスト化したものを格納する)
ja_text = "眠いけど頑張る"

# 翻訳を実行
en_text = translate_ja_to_en(ja_text)
print(f"Translated Text: {ja_text}")

# 感情分析を実行
sentiment = sentiment_pipeline(en_text)
print(f"Sentiment: {sentiment}")

# ここに感嘆符や疑問符などを付加する関数？を記述する