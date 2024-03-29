import sys
# import speech_recognition as sr
from transformers import pipeline, MarianMTModel, MarianTokenizer
import torch

# コマンドライン引数からファイルパスを取得
# file_path = sys.argv[1]
ja_text = sys.argv[1]

# 音声認識オブジェクト
# recognizer = sr.Recognizer()

# with sr.AudioFile(file_path) as source:
    # 音声データの読み込み
    # audio_data = recognizer.record(source)

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
# ja_text = recognizer.recognize_google(audio_data, language="ja-JP")

# 翻訳を実行
en_text = translate_ja_to_en(ja_text)

# 感情分析を実行
sentiment = sentiment_pipeline(en_text)

# スコアに基づいてテキストを変更
score = sentiment[0]['score']
if sentiment[0]['label'] == 'POSITIVE' and score >= 0.975:
    ja_text += "！"
elif sentiment[0]['label'] == 'NEGATIVE' and score >= 0.99:
    ja_text += "..."

# 感情値確認用
# print(f"Sentiment: {sentiment}")

#投稿内容
print(f"{ja_text}")
