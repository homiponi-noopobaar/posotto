import speech_recognition as sr
import oseti

# 音声認識オブジェクト
recognizer = sr.Recognizer()

# WAVファイルの読み込み(適宜パスの変更をお願いします)
with sr.AudioFile('C:/Users/Green/posotto/backend/lib/speech_recognition/wav/おはようございます.wav') as source:
    # 音声データの読み込み
    audio_data = recognizer.record(source)

    # 音声認識の実行
    try:
        # Googleの音声認識API
        # text = recognizer.recognize_google(audio_data, language="ja-JP")

        text = "このご飯めっちゃおいしい。最高。" 

        analyzer = oseti.Analyzer()
        sentiment_scores = analyzer.analyze(text)
        sentiment = sum(sentiment_scores) / len(sentiment_scores) if sentiment_scores else 0

        #感情に基づいたテキストの追記
        if sentiment > 0:
            text += "!"
        elif sentiment < 0:
            text += "..."
        else:
            if "?" in text or "？" in text:
                text += "？"
            else:
                text += "\nsentiment = 0"
                
        print("音声認識の結果:", text)

    except sr.UnknownValueError:
        # 音声認識できなかった場合(雑音などの、文字としての認識が不可能な場合などが該当)
        print("音声を認識できませんでした。")

    except sr.RequestError as e:
        # APIリクエストに関するエラー(基本起きない。起きたらgoogleの問題なのでどうしようもない)
        print(f"APIリクエストに失敗しました; {e}")
