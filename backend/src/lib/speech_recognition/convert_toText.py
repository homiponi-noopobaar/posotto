import sys
import speech_recognition as sr

# コマンドライン引数からファイルパスを取得
file_path = sys.argv[1]

# 音声認識オブジェクト
recognizer = sr.Recognizer()

# WAVファイルの読み込み
with sr.AudioFile(file_path) as source:
    # 音声データの読み込み
    audio_data = recognizer.record(source)

    # 音声認識の実行
    try:
        # Googleの音声認識APIで認識
        text = recognizer.recognize_google(audio_data, language="ja-JP")
        print(text)  # 音声認識の結果を出力

    except sr.UnknownValueError:
        # 音声認識できなかった場合
        print("音声を認識できませんでした。")

    except sr.RequestError as e:
        # APIリクエストに関するエラー
        print(f"APIリクエストに失敗しました; {e}")
