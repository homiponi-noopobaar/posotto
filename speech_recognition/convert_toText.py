import speech_recognition as sr

# 音声認識オブジェクト
recognizer = sr.Recognizer()

# WAVファイルの読み込み(適宜パスの変更をお願いします)
with sr.AudioFile('C:/Users/Green/posotto/speech_recognition/どなたかいらっしゃいませんか.wav') as source:
    # 音声データの読み込み
    audio_data = recognizer.record(source)

    # 音声認識の実行
    try:
        # Googleの音声認識APIで認識
        text = recognizer.recognize_google(audio_data, language="ja-JP")
        print("音声認識の結果:", text)

    except sr.UnknownValueError:
        # 音声認識できなかった場合(雑音などの、文字としての認識が不可能な場合などが該当)
        print("音声を認識できませんでした。")

    except sr.RequestError as e:
        # APIリクエストに関するエラー(基本起きない。起きたらgoogleの問題なのでどうしようもない)
        print(f"APIリクエストに失敗しました; {e}")
